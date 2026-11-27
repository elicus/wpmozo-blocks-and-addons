/**
 * Robustness of the library (roadmap R1; known-issues KI-01, KI-02, KI-03, R-07).
 *
 * Runs against writable copies of Lite and Pro, changes their files while the site runs, and
 * checks that:
 * - the catalog's cache follows every input of the analysis (Lite and WordPress versions, the
 *   HTML allowed for posts, other sources' maps);
 * - a pattern that needs a Lite map key the installed Lite lacks says "Lite outdated";
 * - one broken catalog entry, content or map file never takes the rest of the library down, and a
 *   broken catalog.json only its own source; a PHP content file is never read (content is plain
 *   JSON, content.json, for every source);
 * - the catalog and the content route always agree, and the content route analyses afresh;
 * - premium protection and role rules are unchanged.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const {
	standardSite,
	catalog,
	content,
	expectedStatus,
	patternsUsingTokens,
	removeMapKey,
	pause,
	networkChecks,
} = require( '../lib/setup.cjs' );
const {
	readContent,
	contentBody,
	sha256,
	catalogPath,
	writeCatalog,
	mapPath,
	testEntry,
} = require( '../lib/library-files.cjs' );

const LIB = ( folder ) => path.join( folder, 'includes', 'library' );

async function consistency( report, client, label, roles ) {
	let pairs = 0;
	const mismatches = [];
	for ( const as of roles ) {
		const cat = await catalog( client, as );
		for ( const item of Object.values( cat.patterns ) ) {
			const got = await content( client, item.id, as );
			pairs++;
			if (
				got.status !== expectedStatus( item.availability ) ||
				( got.status === 200 ) !== got.hasContent
			) {
				mismatches.push( {
					as,
					id: item.id,
					availability: item.availability,
					status: got.status,
				} );
			}
		}
	}
	report.check(
		`${ label }: catalog and content route agree (${ pairs } pattern/user pairs)`,
		pairs > 0 && ! mismatches.length,
		mismatches
	);
}

async function run( { cli, report } ) {
	const { site, client, lite, pro } = await standardSite( {
		label: 'robustness',
		cli,
		mutable: true,
	} );
	report.context.site = site.logs;
	try {
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			flush: '1',
		} );
		const base = await catalog( client );
		const available = Object.values( base.patterns )
			.filter( ( p ) => p.availability.state === 'available' )
			.map( ( p ) => p.id );
		report.check(
			'baseline: catalog 200, every pattern available to the administrator, no issues',
			base.status === 200 &&
				available.length === Object.keys( base.patterns ).length &&
				available.length > 0 &&
				! ( base.data.issues || [] ).length,
			{ available, issues: base.data.issues }
		);
		await consistency( report, client, 'baseline', [
			'admin',
			'editor',
			'author',
			'contributor',
		] );

		// KI-01: the cache key follows the environment.
		const keys = async () =>
			( await client.driver( { wpmozo_test: 'cache' } ) ).keys || [];
		await client.driver( { wpmozo_test: 'set', flush: '1' } );
		await catalog( client );
		const k1 = await keys();
		await catalog( client, 'admin', { wpmozo_test_wp: '99.0.0' } );
		const k2 = await keys();
		report.check(
			'cache: a different WordPress version gets new cache entries',
			k1.length > 0 && k2.length > k1.length,
			{ before: k1.length, after: k2.length }
		);
		await catalog( client, 'admin', { wpmozo_test_kses: '1' } );
		const k3 = await keys();
		report.check(
			'cache: a change to the HTML allowed in posts gets new cache entries',
			k3.length > k2.length,
			{ before: k2.length, after: k3.length }
		);
		const main = path.join( lite, 'wpmozo-blocks-and-addons.php' );
		const mainSource = fs.readFileSync( main, 'utf8' );
		fs.writeFileSync(
			main,
			mainSource.replace(
				/define\( 'WPMOZO_BNA_VERSION', '([^']+)' \)/,
				"define( 'WPMOZO_BNA_VERSION', '$1-test' )"
			)
		);
		await pause( 1500 );
		await catalog( client );
		const k4 = await keys();
		fs.writeFileSync( main, mainSource );
		report.check(
			'cache: a different Lite version gets new cache entries for every source',
			k4.length >= k3.length + ( pro ? 2 : 1 ),
			{ before: k3.length, after: k4.length }
		);

		// KI-01 + KI-03: another source's pattern uses a Lite map key that disappears.
		const cross = pro
			? patternsUsingTokens( pro, 'lite' ).filter(
					( p ) => p.type !== 'media'
			  )
			: [];
		if ( cross.length ) {
			const { slug, type, key } = cross[ 0 ];
			const id = `pro/${ slug }`;
			const mapFile = path.join(
				LIB( lite ),
				'data',
				{ link: 'links', icon: 'icons', text: 'demo-text' }[ type ] +
					'.json'
			);
			await catalog( client );
			const restore = removeMapKey( mapFile, key );
			await pause( 1500 );
			const after = ( await catalog( client ) ).patterns[ id ];
			const got = await content( client, id );
			report.check(
				`cross-source: ${ id } without Lite ${ type } "${ key }" is "unavailable: lite_outdated" at once, no cache flush`,
				after &&
					after.availability.state === 'unavailable' &&
					after.availability.reasons.includes( 'lite_outdated' ) &&
					! after.availability.reasons.includes( 'invalid_content' ),
				after && after.availability
			);
			report.check(
				'cross-source: the content route agrees (409 with lite_outdated, no content)',
				got.status === 409 &&
					got.reasons.includes( 'lite_outdated' ) &&
					! got.hasContent,
				got
			);
			restore();
			await pause( 1500 );
			const back = ( await catalog( client ) ).patterns[ id ];
			report.check(
				'cross-source: available again when the key is back',
				back && back.availability.state === 'available',
				back && back.availability
			);
		} else {
			report.note(
				'skipped cross-source checks: no add-on pattern uses a Lite link, icon or text token'
			);
		}

		// A Lite pattern's own missing key is an authoring error, not an outdated Lite.
		const own = patternsUsingTokens( lite, 'lite' ).filter(
			( p ) => p.type !== 'media'
		);
		if ( own.length ) {
			const { slug, type, key } = own[ 0 ];
			const mapFile = path.join(
				LIB( lite ),
				'data',
				{ link: 'links', icon: 'icons', text: 'demo-text' }[ type ] +
					'.json'
			);
			const restore = removeMapKey( mapFile, key );
			await pause( 1500 );
			const after = ( await catalog( client ) ).patterns[
				`lite/${ slug }`
			];
			restore();
			report.check(
				`own key: lite/${ slug } without its own key is "invalid_content", not "lite_outdated"`,
				after &&
					after.availability.reasons.includes( 'invalid_content' ) &&
					! after.availability.reasons.includes( 'lite_outdated' ),
				after && after.availability
			);
			await pause( 1500 );
		}

		// KI-02: broken files are isolated. Each case adds one test pattern to a source's catalog
		// (Pro when it is there, so the premium source is exercised too).
		const target = pro || lite;
		const sourceId = pro ? 'pro' : 'lite';
		const original = fs.readFileSync( catalogPath( target ), 'utf8' );
		const paragraph =
			'<!-- wp:paragraph --><p>Test</p><!-- /wp:paragraph -->';
		const wrapper = ( slug, extra = {} ) => ( {
			schema: 1,
			id: `${ sourceId }/${ slug }`,
			revision: 1,
			content: paragraph,
			...extra,
		} );
		const access = sourceId === 'lite' ? 'free' : 'pro';
		// [ slug, change the entry, content file body (null: none), content file name, expected code, content route ]
		const cases = [
			[
				'zz-test-entry',
				( e ) => delete e.title,
				contentBody( wrapper( 'zz-test-entry' ) ),
				'content.json',
				'missing_title',
				null,
			],
			[
				'zz-test-json',
				null,
				'{ "schema": 1,',
				'content.json',
				'content_invalid_json',
				422,
			],
			[
				'zz-test-mismatch',
				null,
				contentBody(
					wrapper( 'zz-test-mismatch', {
						id: `${ sourceId }/other`,
					} )
				),
				'content.json',
				'content_mismatch',
				422,
			],
			[
				'zz-test-checksum',
				( e ) => ( e.content_sha256 = sha256( 'something else' ) ),
				contentBody( wrapper( 'zz-test-checksum' ) ),
				'content.json',
				'content_checksum',
				422,
			],
			[
				'zz-test-blocks',
				( e ) => ( e.blocks = [ 'core/heading' ] ),
				contentBody( wrapper( 'zz-test-blocks' ) ),
				'content.json',
				'blocks_mismatch',
				422,
			],
			// Only a PHP content file (the guarded form used briefly before plain JSON): never
			// read or executed, so the pattern has no content.
			[
				'zz-test-php-file',
				null,
				`<?php exit; __halt_compiler();\n${ contentBody(
					wrapper( 'zz-test-php-file' )
				) }`,
				'content.json.php',
				'wpmozo_library_invalid_content',
				422,
			],
		];
		for ( const [ slug, change, body, fileName, code, route ] of cases ) {
			const cat0 = JSON.parse( original );
			const entry = testEntry( slug, access, paragraph );
			if ( change ) {
				change( entry );
			}
			cat0.patterns.push( entry );
			fs.mkdirSync( path.join( LIB( target ), 'patterns', slug ), {
				recursive: true,
			} );
			if ( body !== null ) {
				fs.writeFileSync(
					path.join( LIB( target ), 'patterns', slug, fileName ),
					body
				);
			}
			writeCatalog( target, cat0 );
			await pause( 1500 );
			const cat = await catalog( client );
			const stillAvailable = available.filter(
				( id ) =>
					cat.patterns[ id ] &&
					cat.patterns[ id ].availability.state === 'available'
			);
			const issue = ( cat.data.issues || [] ).find(
				( i ) =>
					i.item === `${ sourceId }/${ slug }` &&
					String( i.code ).includes( code )
			);
			const free = available.find( ( id ) => id.startsWith( 'lite/' ) );
			const freeContent = free
				? await content( client, free )
				: { status: 200 };
			report.check(
				`isolation: a ${ slug.replace(
					'zz-test-',
					''
				) } problem in ${ sourceId }/${ slug } is reported (${ code }) and every other pattern stays available`,
				cat.status === 200 &&
					issue &&
					stillAvailable.length === available.length &&
					freeContent.status === 200,
				{
					status: cat.status,
					issue,
					issues: issue ? undefined : cat.data.issues,
					stillAvailable: stillAvailable.length,
					of: available.length,
					raw: cat.status === 200 ? undefined : cat.raw,
				}
			);
			if ( route ) {
				const item = cat.patterns[ `${ sourceId }/${ slug }` ];
				const got = await content( client, `${ sourceId }/${ slug }` );
				report.check(
					`isolation: ${ sourceId }/${ slug } is unavailable (invalid_content) and its content route answers ${ route } with no content`,
					item &&
						item.availability.reasons.includes(
							'invalid_content'
						) &&
						got.status === route &&
						! got.hasContent,
					{
						availability: item && item.availability,
						status: got.status,
					}
				);
			}
			fs.writeFileSync( catalogPath( target ), original );
			fs.rmSync( path.join( LIB( target ), 'patterns', slug ), {
				recursive: true,
				force: true,
			} );
		}

		// A broken catalog takes down its own source only.
		if ( pro ) {
			fs.writeFileSync( catalogPath( pro ), '{ "schema": 1,' );
			await pause( 1500 );
			const cat = await catalog( client );
			const issue = ( cat.data.issues || [] ).find(
				( i ) =>
					i.item === 'catalog:pro' &&
					i.code === 'catalog_invalid_json'
			);
			const lites = available.filter( ( id ) =>
				id.startsWith( 'lite/' )
			);
			report.check(
				'isolation: a broken Pro catalog.json hides the Pro patterns only, is reported, and leaves Lite patterns available',
				cat.status === 200 &&
					issue &&
					! Object.keys( cat.patterns ).some( ( id ) =>
						id.startsWith( 'pro/' )
					) &&
					lites.every(
						( id ) =>
							cat.patterns[ id ] &&
							cat.patterns[ id ].availability.state ===
								'available'
					),
				{ status: cat.status, issues: cat.data.issues }
			);
			fs.writeFileSync( catalogPath( pro ), original );
			await pause( 1500 );
		}
		const mediaUsers = pro
			? patternsUsingTokens( pro, 'pro', 'media' )
			: [];
		if ( pro && mediaUsers.length ) {
			const mapFile = mapPath( pro, 'media' );
			const originalMap = fs.readFileSync( mapFile, 'utf8' );
			fs.writeFileSync( mapFile, '{ "tour-plan": ' );
			await pause( 1500 );
			const cat = await catalog( client );
			const broken = cat.patterns[ `pro/${ mediaUsers[ 0 ].slug }` ];
			const issue = ( cat.data.issues || [] ).find(
				( i ) => i.item === 'map:pro/media'
			);
			const lites = available.filter( ( id ) =>
				id.startsWith( 'lite/' )
			);
			report.check(
				'isolation: a broken Pro media map fails closed for the patterns that use it, is reported, and leaves Lite patterns available',
				cat.status === 200 &&
					broken &&
					broken.availability.state !== 'available' &&
					issue &&
					lites.every(
						( id ) =>
							cat.patterns[ id ].availability.state ===
							'available'
					),
				{
					status: cat.status,
					broken: broken && broken.availability,
					issue,
				}
			);
			fs.writeFileSync( mapFile, originalMap );
			await pause( 1500 );
		}
		const recovered = await catalog( client );
		report.check(
			'isolation: everything available again after the broken files are gone',
			available.every(
				( id ) =>
					recovered.patterns[ id ] &&
					recovered.patterns[ id ].availability.state === 'available'
			) && ! ( recovered.data.issues || [] ).length,
			recovered.data.issues
		);

		// R-07: the content route analyses afresh and updates the cache the catalog reads.
		const authorCatalog = await catalog( client, 'author' );
		const authorItem = Object.values( authorCatalog.patterns ).find(
			( p ) => p.availability.state === 'available'
		);
		if ( authorItem ) {
			const [ src, slug ] = authorItem.id.split( '/' );
			const folder = src === 'pro' ? pro : lite;
			const stored = readContent( folder, slug );
			const originalContent = fs.readFileSync( stored.file, 'utf8' );
			const originalCatalog = fs.readFileSync(
				catalogPath( folder ),
				'utf8'
			);
			const stat = fs.statSync( stored.file );
			const catStat = fs.statSync( catalogPath( folder ) );
			// Same revision and modification times, so the cache can't notice; the new paragraph
			// needs unfiltered_html. The catalog's checksum (and declared blocks) follow the change,
			// as compile.php would write them.
			const changed = `${ stored.wrapper.content }\n<!-- wp:paragraph --><p>Test<input type="checkbox"></p><!-- /wp:paragraph -->`;
			fs.writeFileSync(
				stored.file,
				contentBody( { ...stored.wrapper, content: changed } )
			);
			const cat0 = JSON.parse( originalCatalog );
			const entry = cat0.patterns.find( ( e ) => e.slug === slug );
			entry.content_sha256 = sha256( changed );
			entry.blocks = [
				...new Set( [ ...entry.blocks, 'core/paragraph' ] ),
			].sort();
			writeCatalog( folder, cat0 );
			fs.utimesSync( stored.file, stat.atime, stat.mtime );
			fs.utimesSync(
				catalogPath( folder ),
				catStat.atime,
				catStat.mtime
			);
			await pause( 1500 );
			const got = await content( client, authorItem.id, 'author' );
			const after = ( await catalog( client, 'author' ) ).patterns[
				authorItem.id
			];
			fs.writeFileSync( stored.file, originalContent );
			fs.writeFileSync( catalogPath( folder ), originalCatalog );
			fs.utimesSync( stored.file, stat.atime, stat.mtime );
			fs.utimesSync(
				catalogPath( folder ),
				catStat.atime,
				catStat.mtime
			);
			report.check(
				`fresh analysis: ${ authorItem.id } changed behind the cache is refused to an author (403 wpmozo_library_role)`,
				got.status === 403 &&
					got.code === 'wpmozo_library_role' &&
					! got.hasContent,
				{ status: got.status, code: got.code }
			);
			report.check(
				'fresh analysis: the catalog then shows the same answer (role_unfiltered_html)',
				after &&
					after.availability.reasons.includes(
						'role_unfiltered_html'
					),
				after && after.availability
			);
			await client.driver( { wpmozo_test: 'set', flush: '1' } );
		}

		// Protection and roles are unchanged.
		await client.driver( { wpmozo_test: 'set', licence: '' } );
		const noLicence = await catalog( client );
		const proIds = Object.keys( noLicence.patterns ).filter( ( id ) =>
			id.startsWith( 'pro/' )
		);
		const refused = [];
		for ( const id of proIds ) {
			const got = await content( client, id );
			if (
				got.status !== 403 ||
				got.hasContent ||
				got.code !== 'wpmozo_library_locked'
			) {
				refused.push( { id, status: got.status, code: got.code } );
			}
		}
		report.check(
			'protection: without an activated licence every Pro pattern is locked and its content refused (403, no content)',
			proIds.every(
				( id ) =>
					noLicence.patterns[ id ].availability.state === 'locked'
			) && ! refused.length,
			refused
		);
		await consistency( report, client, 'no licence', [
			'admin',
			'author',
		] );
		await client.driver( { wpmozo_test: 'set', licence: '1' } );
		const anon = await catalog( client, 'anon' );
		const subscriber = await catalog( client, 'subscriber' );
		report.check(
			'roles: visitor 401, subscriber 403 on the catalog',
			anon.status === 401 && subscriber.status === 403,
			[ anon.status, subscriber.status ]
		);
		const markup = [];
		for ( const as of [ 'admin', 'author' ] ) {
			if (
				JSON.stringify( ( await catalog( client, as ) ).data ).includes(
					'<!-- wp:'
				)
			) {
				markup.push( as );
			}
		}
		report.check(
			'protection: the catalog contains no block markup',
			! markup.length,
			markup
		);

		const probe = await client.driver( { wpmozo_test: 'probe' } );
		const log = ( probe.debug_log || [] ).filter(
			( line ) => ! /zz-test-|wpmozo_test_map/.test( line )
		);
		report.check(
			'no PHP notices, warnings or errors outside the deliberately broken files',
			! log.length,
			log.slice( -5 )
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
		'Library robustness: cache, isolation, consistency, protection (R1)',
	run,
};
