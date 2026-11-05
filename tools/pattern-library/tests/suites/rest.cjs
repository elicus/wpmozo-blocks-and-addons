/**
 * REST permissions, licence protection and response headers (R5; rest-api.md, security.md).
 *
 * Inside WordPress, as each role: catalog and content statuses, the licence lock, links and
 * issues only for the right users, no markup or licence value in the catalog, cache headers,
 * ETag/304, the library switch. Over real HTTP: a cookie without a REST nonce, the query-string
 * route, JSONP, direct requests to pattern and map files, and the nonce path the editor uses.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const {
	standardSite,
	catalog,
	content,
	expectedStatus,
	networkChecks,
} = require( '../lib/setup.cjs' );
const { Client } = require( '../lib/client.cjs' );

const ROLES = {
	admin: 200,
	administrator: 200,
	editor: 200,
	author: 200,
	contributor: 200,
	subscriber: 403,
	anon: 401,
};

function libraryFiles( folder ) {
	const base = path.join( folder, 'includes', 'library' );
	const files = [];
	const walk = ( dir ) => {
		for ( const entry of fs.readdirSync( dir, { withFileTypes: true } ) ) {
			const full = path.join( dir, entry.name );
			if ( entry.isDirectory() ) {
				walk( full );
			} else if ( entry.name.endsWith( '.php' ) ) {
				files.push( path.relative( path.dirname( folder ), full ) );
			}
		}
	};
	if ( fs.existsSync( base ) ) {
		walk( base );
	}
	return files;
}

async function run( { cli, report } ) {
	const { site, client, lite, pro } = await standardSite( {
		label: 'rest',
		cli,
	} );
	report.context.site = site.logs;
	try {
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			flush: '1',
		} );

		// Roles, licence activated.
		const wrong = [];
		for ( const [ as, status ] of Object.entries( ROLES ) ) {
			const cat = await catalog( client, as );
			if ( cat.status !== status ) {
				wrong.push( { as, catalog: cat.status } );
				continue;
			}
			for ( const item of Object.values( cat.patterns ) ) {
				const got = await content( client, item.id, as );
				if (
					got.status !== expectedStatus( item.availability ) ||
					( got.status === 200 ) !== got.hasContent
				) {
					wrong.push( {
						as,
						id: item.id,
						availability: item.availability,
						content: got.status,
					} );
				}
			}
		}
		const adminIds = Object.keys( ( await catalog( client ) ).patterns );
		for ( const as of [ 'subscriber', 'anon' ] ) {
			for ( const id of adminIds ) {
				const got = await content( client, id, as );
				if ( got.status !== ROLES[ as ] || got.hasContent ) {
					wrong.push( { as, id, content: got.status } );
				}
			}
		}
		report.check(
			'roles: catalog 200 for contributors and up, 403 subscriber, 401 visitor; every content answer matches the catalog; no content for subscribers or visitors',
			! wrong.length,
			wrong
		);
		const author = await catalog( client, 'author' );
		const restricted = Object.values( author.patterns ).filter( ( p ) =>
			p.availability.reasons.includes( 'role_unfiltered_html' )
		);
		report.note(
			`${ restricted.length } pattern(s) need unfiltered_html: ${
				restricted.map( ( p ) => p.id ).join( ', ' ) || 'none'
			}`
		);

		// Catalog contents.
		const leaks = [];
		for ( const as of [ 'admin', 'editor', 'author' ] ) {
			const text = JSON.stringify( ( await catalog( client, as ) ).data );
			if (
				text.includes( '<!-- wp:' ) ||
				text.includes( 'wpmozo-test-activation' )
			) {
				leaks.push( as );
			}
		}
		report.check(
			'catalog: no block markup and no licence value for any user',
			! leaks.length,
			leaks
		);
		const admin = await catalog( client );
		const editor = await catalog( client, 'editor' );
		report.check(
			'catalog: issues only for users who can manage options',
			Array.isArray( admin.data.issues ) &&
				editor.data.issues === undefined
		);
		if ( pro ) {
			const source = ( c ) =>
				( c.data.sources || [] ).find( ( s ) => s.id === 'pro' ) || {};
			report.check(
				'catalog: the licence link only for users who can update plugins',
				Object.keys( source( admin ).links || {} ).length > 0 &&
					! Object.keys( source( editor ).links || {} ).length,
				[ source( admin ), source( editor ) ]
			);
		}

		// Headers.
		const raw = await client.rest( '/wpmozo/v1/library/catalog', 'admin' );
		const etag = raw.headers && raw.headers.ETag;
		const again = await client.rest(
			'/wpmozo/v1/library/catalog',
			'admin',
			{ inm: etag }
		);
		report.check(
			'catalog: Cache-Control private, no-cache; a matching If-None-Match answers 304',
			/private/.test( raw.headers[ 'Cache-Control' ] ) &&
				/no-cache/.test( raw.headers[ 'Cache-Control' ] ) &&
				etag &&
				again.status === 304,
			[ raw.headers, again.status ]
		);
		const first = Object.values( admin.patterns ).find(
			( p ) => p.availability.state === 'available'
		);
		if ( first ) {
			const got = await content( client, first.id );
			report.check(
				'content: Cache-Control no-store',
				/no-store/.test( got.raw.headers[ 'Cache-Control' ] ),
				got.raw.headers
			);
		}
		const unknown = await content(
			client,
			`${ pro ? 'pro' : 'lite' }/no-such-pattern`
		);
		const badSlug = await client.rest(
			'/wpmozo/v1/library/patterns/lite/Bad_Slug',
			'admin'
		);
		report.check(
			'content: unknown pattern 404; a malformed id matches no route (404)',
			unknown.status === 404 && badSlug.status === 404,
			[ unknown.status, badSlug.status ]
		);

		// Licence not activated.
		if ( pro ) {
			await client.driver( { wpmozo_test: 'set', licence: '' } );
			const locked = await catalog( client );
			const proIds = Object.keys( locked.patterns ).filter( ( id ) =>
				id.startsWith( 'pro/' )
			);
			const open = [];
			for ( const id of proIds ) {
				for ( const as of [ 'admin', 'editor', 'author' ] ) {
					const got = await content( client, id, as );
					if ( got.status !== 403 || got.hasContent ) {
						open.push( { id, as, status: got.status } );
					}
				}
			}
			report.check(
				'licence not activated: every Pro pattern locked (license_inactive), content refused for every role',
				proIds.length > 0 &&
					proIds.every(
						( id ) =>
							locked.patterns[ id ].availability.state ===
								'locked' &&
							locked.patterns[ id ].availability.reasons.includes(
								'license_inactive'
							)
					) &&
					! open.length,
				open
			);
			const free = Object.keys( locked.patterns ).filter( ( id ) =>
				id.startsWith( 'lite/' )
			);
			report.check(
				'licence not activated: free patterns unaffected',
				free.every(
					( id ) =>
						locked.patterns[ id ].availability.state ===
						admin.patterns[ id ].availability.state
				)
			);
			await client.driver( { wpmozo_test: 'set', licence: '1' } );
		}

		// Library switch.
		await client.driver( { wpmozo_test: 'set', library: 'off' } );
		const off = await catalog( client );
		const offContent = first
			? await content( client, first.id )
			: { status: 404, code: 'wpmozo_library_disabled' };
		await client.driver( { wpmozo_test: 'set', library: 'on' } );
		report.check(
			'library switched off: catalog and content 404 wpmozo_library_disabled',
			off.status === 404 &&
				off.data.code === 'wpmozo_library_disabled' &&
				offContent.status === 404,
			[ off.status, offContent.status ]
		);

		// Real HTTP.
		const visitor = new Client( site.url );
		const probes = {
			'visitor catalog': await visitor.request(
				'/wp-json/wpmozo/v1/library/catalog'
			),
			'cookie without nonce': await client.request(
				'/wp-json/wpmozo/v1/library/catalog'
			),
			'query-string route': await client.request(
				`/?rest_route=/wpmozo/v1/library/patterns/${
					first ? first.id : 'lite/x'
				}`
			),
			JSONP: await client.request(
				'/wp-json/wpmozo/v1/library/catalog?_jsonp=cb'
			),
		};
		report.check(
			'HTTP: visitor, cookie without a REST nonce, query-string route and JSONP all 401',
			Object.values( probes ).every( ( r ) => r.status === 401 ),
			Object.fromEntries(
				Object.entries( probes ).map( ( [ k, r ] ) => [ k, r.status ] )
			)
		);
		const editorPage = await client.request( '/wp-admin/post-new.php' );
		const nonce = ( editorPage.text.match(
			/createNonceMiddleware\(\s*"([a-f0-9]+)"/
		) || [] )[ 1 ];
		const withNonce =
			first && nonce
				? await client.request(
						`/wp-json/wpmozo/v1/library/patterns/${ first.id }`,
						{ headers: { 'X-WP-Nonce': nonce } }
				  )
				: null;
		report.check(
			"HTTP: with the editor's REST nonce the content route answers 200, no-store",
			withNonce &&
				withNonce.status === 200 &&
				/no-store/.test( withNonce.headers.get( 'cache-control' ) ) &&
				withNonce.text.includes( '<!-- wp:' ),
			withNonce && withNonce.status
		);
		const exposed = [];
		for ( const folder of [ lite, pro ].filter( Boolean ) ) {
			for ( const file of libraryFiles( folder ) ) {
				const got = await visitor.request(
					`/wp-content/plugins/${ file }`
				);
				if ( got.status === 200 && got.text.trim() !== '' ) {
					exposed.push( { file, bytes: got.text.length } );
				}
			}
		}
		report.check(
			'HTTP: every library PHP file (patterns, content, maps) gives an empty answer when requested directly',
			! exposed.length,
			exposed
		);

		const probe = await client.driver( { wpmozo_test: 'probe' } );
		report.check(
			'no PHP notices, warnings or errors',
			! ( probe.debug_log || [] ).length,
			( probe.debug_log || [] ).slice( -5 )
		);
		report.check(
			'no fatal errors',
			! site.fatals().length,
			site.fatals()
		);
		networkChecks( report, site );
	} finally {
		await site.stop();
	}
}

module.exports = {
	description:
		'REST permissions, licence protection, headers, direct file requests',
	run,
};
