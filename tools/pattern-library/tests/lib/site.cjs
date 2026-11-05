/**
 * Start and stop an offline WordPress Playground site for one test run.
 *
 * - WordPress comes from a local release zip, served on 127.0.0.1 (a version number would make
 *   the Playground CLI look it up online).
 * - Plugin folders are mounted from the host, so a test can change or replace them while the
 *   site runs, as a plugin update does.
 * - The test driver is mounted as a must-use plugin; a host folder is mounted for its logs.
 * - The network guard blocks every non-loopback connection of the Playground process.
 */
const fs = require( 'fs' );
const http = require( 'http' );
const net = require( 'net' );
const os = require( 'os' );
const path = require( 'path' );
const { spawn } = require( 'child_process' );
const env = require( './env.cjs' );

function freePort() {
	return new Promise( ( resolve, reject ) => {
		const server = net.createServer();
		server.on( 'error', reject );
		server.listen( 0, '127.0.0.1', () => {
			const { port } = server.address();
			server.close( () => resolve( port ) );
		} );
	} );
}

function serveZip( file ) {
	return new Promise( ( resolve ) => {
		const server = http.createServer( ( req, res ) => {
			if ( req.url !== '/' + path.basename( file ) ) {
				res.writeHead( 404 ).end();
				return;
			}
			res.writeHead( 200, {
				'Content-Type': 'application/zip',
				'Content-Length': fs.statSync( file ).size,
			} );
			fs.createReadStream( file ).pipe( res );
		} );
		server.listen( 0, '127.0.0.1', () => resolve( server ) );
	} );
}

/**
 * Start a site.
 *
 * @param {Object}   options
 * @param {string}   options.label    Run label (log folder name).
 * @param {string}   options.wp       WordPress version (a <version>.zip in env.WP_ZIPS).
 * @param {string}   options.php      PHP version (7.4 … 8.5).
 * @param {Object}   options.plugins  { folderName: hostPath } mounted into wp-content/plugins.
 * @param {string[]} options.activate Plugin files to activate, in order.
 * @param {Array}    [options.steps]  Extra blueprint steps, run first.
 * @return {Promise<Object>} { url, logs, stop(), fatals(), netBlocked(), httpBlocked() }.
 */
async function startSite( { label, wp, php, plugins, activate, steps = [] } ) {
	if ( ! env.PLAYGROUND_CLI || ! fs.existsSync( env.PLAYGROUND_CLI ) ) {
		throw new Error(
			'Set WPMOZO_PLAYGROUND_CLI to the wp-playground-cli executable (see README.md).'
		);
	}
	const zip = path.join( env.WP_ZIPS, `${ wp }.zip` );
	if ( ! fs.existsSync( zip ) ) {
		throw new Error( `No WordPress zip at ${ zip } (set WPMOZO_WP_ZIPS).` );
	}
	const stamp = new Date().toISOString().replace( /[:.]/g, '-' );
	const logs = path.join(
		env.CACHE,
		'runs',
		`${ label }-${ wp }-php${ php }-${ stamp }`
	);
	const home = path.join( env.CACHE, 'home' );
	const tmp = path.join( env.CACHE, 'tmp' );
	for ( const dir of [ logs, home, tmp ] ) {
		fs.mkdirSync( dir, { recursive: true } );
	}
	// Copies of the driver and the guard in the cache: the repository path may contain spaces.
	const driver = path.join( env.CACHE, 'driver' );
	fs.rmSync( driver, { recursive: true, force: true } );
	fs.cpSync( path.join( env.TESTS, 'driver' ), driver, { recursive: true } );
	const guard = path.join( env.CACHE, 'net-guard.cjs' );
	fs.copyFileSync( path.join( __dirname, 'net-guard.cjs' ), guard );
	const zipServer = await serveZip( zip );
	const zipUrl = `http://127.0.0.1:${
		zipServer.address().port
	}/${ path.basename( zip ) }`;
	const port = await freePort();
	const blueprint = {
		preferredVersions: { php, wp: zipUrl },
		login: true,
		steps: [
			...steps,
			...activate.map( ( pluginPath ) => ( {
				step: 'activatePlugin',
				pluginPath,
			} ) ),
		],
	};
	const blueprintFile = path.join( logs, 'blueprint.json' );
	fs.writeFileSync( blueprintFile, JSON.stringify( blueprint, null, 2 ) );
	const args = [
		'server',
		`--wp=${ zipUrl }`,
		`--php=${ php }`,
		`--port=${ port }`,
		`--mount=${ driver }:/wordpress/wp-content/mu-plugins`,
		`--mount=${ logs }:/wordpress/wp-content/wpmozo-test-logs`,
		...Object.entries( plugins ).map(
			( [ folder, host ] ) =>
				`--mount=${ host }:/wordpress/wp-content/plugins/${ folder }`
		),
		'--login',
		'--define-bool',
		'WP_DEBUG',
		'true',
		'--define-bool',
		'WP_DEBUG_LOG',
		'true',
		'--define-bool',
		'WP_DEBUG_DISPLAY',
		'false',
		'--define-bool',
		'WPMOZO_TEST_DRIVER',
		'true',
		`--blueprint=${ blueprintFile }`,
	];
	const output = fs.openSync( path.join( logs, 'playground.log' ), 'a' );
	const child = spawn( env.PLAYGROUND_CLI, args, {
		env: {
			...process.env,
			HOME: home,
			TMPDIR: tmp,
			WPMOZO_NET_LOG: path.join( logs, 'net.log' ),
			NODE_OPTIONS: `--require ${ guard }`,
		},
		stdio: [ 'ignore', output, output ],
	} );
	const readFile = ( name ) =>
		fs.existsSync( path.join( logs, name ) )
			? fs.readFileSync( path.join( logs, name ), 'utf8' )
			: '';
	const site = {
		url: `http://127.0.0.1:${ port }`,
		logs,
		fatals: () => readFile( 'fatals.log' ).split( '\n' ).filter( Boolean ),
		httpBlocked: () =>
			readFile( 'http-blocked.log' ).split( '\n' ).filter( Boolean ),
		netBlocked: () =>
			readFile( 'net.log' )
				.split( '\n' )
				.filter( Boolean )
				.map( ( line ) => JSON.parse( line ) )
				.filter( ( entry ) => entry.verdict === 'BLOCKED' ),
		async stop() {
			if ( child.exitCode === null ) {
				child.kill( 'SIGTERM' );
				await new Promise( ( resolve ) => {
					const timer = setTimeout( () => {
						child.kill( 'SIGKILL' );
						resolve();
					}, 20000 );
					child.on( 'exit', () => {
						clearTimeout( timer );
						resolve();
					} );
				} );
			}
			zipServer.close();
		},
	};
	const started = Date.now();
	while ( ! /Ready!/.test( readFile( 'playground.log' ) ) ) {
		if ( child.exitCode !== null || Date.now() - started > 300000 ) {
			await site.stop();
			const tail = readFile( 'playground.log' )
				.split( '\n' )
				.slice( -15 )
				.join( os.EOL );
			throw new Error(
				`Site did not start (${ logs }).\n${ site
					.fatals()
					.join( os.EOL ) }\n${ tail }`
			);
		}
		await new Promise( ( resolve ) => setTimeout( resolve, 500 ) );
	}
	return site;
}

module.exports = { startSite };
