/**
 * Node preload for test sites (NODE_OPTIONS=--require). Blocks every connection, DNS lookup
 * and UDP send that isn't to the loopback address, and binds servers that name no host to
 * 127.0.0.1. Each attempt is logged to $WPMOZO_NET_LOG as one JSON object per line.
 */
const net = require( 'net' );
const dns = require( 'dns' );
const dgram = require( 'dgram' );
const fs = require( 'fs' );

const LOG = process.env.WPMOZO_NET_LOG;
const LOOPBACK = new Set( [
	'127.0.0.1',
	'::1',
	'localhost',
	'::ffff:127.0.0.1',
] );

function record( kind, target, verdict ) {
	if ( LOG ) {
		try {
			fs.appendFileSync(
				LOG,
				JSON.stringify( {
					t: new Date().toISOString(),
					kind,
					target,
					verdict,
				} ) + '\n'
			);
		} catch ( e ) {}
	}
}

const isLoopback = ( host ) =>
	LOOPBACK.has( String( host ).replace( /^\[|\]$/g, '' ) );

const connect = net.Socket.prototype.connect;
net.Socket.prototype.connect = function ( ...args ) {
	const options = Array.isArray( args[ 0 ] ) ? args[ 0 ][ 0 ] : args[ 0 ];
	if ( options && typeof options === 'object' && options.path ) {
		return connect.apply( this, args );
	}
	const host =
		options && typeof options === 'object'
			? options.host || 'localhost'
			: ( typeof args[ 1 ] === 'string' && args[ 1 ] ) || 'localhost';
	const port =
		options && typeof options === 'object' ? options.port : options;
	if ( ! isLoopback( host ) ) {
		record( 'tcp', `${ host }:${ port }`, 'BLOCKED' );
		process.nextTick( () =>
			this.destroy(
				new Error( `Blocked outbound connection to ${ host }` )
			)
		);
		return this;
	}
	return connect.apply( this, args );
};

const listen = net.Server.prototype.listen;
net.Server.prototype.listen = function ( ...args ) {
	const first = args[ 0 ];
	if ( first && typeof first === 'object' ) {
		if (
			! first.path &&
			! first.handle &&
			! first._handle &&
			first.fd === undefined &&
			! isLoopback( first.host || '' )
		) {
			args[ 0 ] = { ...first, host: '127.0.0.1' };
		}
	} else if ( typeof first === 'number' || /^\d+$/.test( String( first ) ) ) {
		if ( typeof args[ 1 ] !== 'string' ) {
			args.splice( 1, 0, '127.0.0.1' );
		} else if ( ! isLoopback( args[ 1 ] ) ) {
			args[ 1 ] = '127.0.0.1';
		}
	} else if ( first === undefined || typeof first === 'function' ) {
		args.unshift( 0, '127.0.0.1' );
	}
	return listen.apply( this, args );
};

const lookup = dns.lookup;
dns.lookup = function ( hostname, ...rest ) {
	if ( ! isLoopback( hostname ) ) {
		record( 'dns', String( hostname ), 'BLOCKED' );
		const callback = rest[ rest.length - 1 ];
		if ( typeof callback === 'function' ) {
			process.nextTick( () =>
				callback(
					Object.assign(
						new Error( `Blocked DNS lookup of ${ hostname }` ),
						{ code: 'ENOTFOUND' }
					)
				)
			);
		}
		return {};
	}
	return lookup.call( this, hostname, ...rest );
};

const promiseLookup = dns.promises.lookup;
dns.promises.lookup = function ( hostname, ...rest ) {
	if ( ! isLoopback( hostname ) ) {
		record( 'dns', String( hostname ), 'BLOCKED' );
		return Promise.reject(
			Object.assign( new Error( `Blocked DNS lookup of ${ hostname }` ), {
				code: 'ENOTFOUND',
			} )
		);
	}
	return promiseLookup.call( this, hostname, ...rest );
};

const send = dgram.Socket.prototype.send;
dgram.Socket.prototype.send = function ( ...args ) {
	const host = args.find( ( a, i ) => i > 0 && typeof a === 'string' );
	if ( host && ! isLoopback( host ) ) {
		record( 'udp', host, 'BLOCKED' );
		return;
	}
	return send.apply( this, args );
};
