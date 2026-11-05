/**
 * Robustness of the library (roadmap R1; known-issues KI-01, KI-02, KI-03, R-07).
 *
 * Runs against writable copies of Lite and Pro, changes their files while the site runs, and
 * checks that:
 * - the catalog's cache follows every input of the analysis (Lite and WordPress versions, the
 *   HTML allowed for posts, other sources' maps);
 * - a pattern that needs a Lite map key the installed Lite lacks says "Lite outdated";
 * - one broken pattern, content or map file never takes the rest of the library down;
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
					'.php'
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
					'.php'
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

		// KI-02: broken files are isolated.
		const target = pro || lite;
		const sourceId = pro ? 'pro' : 'lite';
		const patterns = path.join( LIB( target ), 'patterns' );
		const meta = ( slug ) =>
			`<?php\ndefined( 'ABSPATH' ) || exit;\nreturn array( 'schema' => 1, 'slug' => '${ slug }', 'revision' => 1, 'title' => 'Test ${ slug }', 'category' => 'features', 'access' => '${
				sourceId === 'pro' ? 'pro' : 'free'
			}', 'published' => '2026-01-01', 'since' => '1.0.0', 'thumbnail' => array( 'file' => 'previews/${ slug }.1.webp', 'width' => 800, 'height' => 600 ) );\n`;
		const cases = [
			[
				'zz-test-parse',
				"<?php\nreturn array( 'schema' => 1,\n",
				null,
				'metadata_error',
			],
			[
				'zz-test-throw',
				"<?php\nthrow new Exception( 'test' );\n",
				null,
				'metadata_error',
			],
			[
				'zz-test-output',
				"<?php\necho 'stray output';\n" +
					meta( 'zz-test-output' ).replace( '<?php\n', '' ),
				"<?php\nreturn '<!-- wp:paragraph --><p>Test</p><!-- /wp:paragraph -->';\n",
				'metadata_unexpected_output',
			],
			[
				'zz-test-content',
				meta( 'zz-test-content' ),
				"<?php\nreturn <<<'HTML'\n<!-- wp:paragraph --><p>Test</p>\n",
				'wpmozo_library_content_error',
			],
		];
		for ( const [ slug, metaSource, contentSource, code ] of cases ) {
			fs.mkdirSync( path.join( patterns, slug ), { recursive: true } );
			fs.writeFileSync(
				path.join( patterns, slug, 'pattern.php' ),
				metaSource
			);
			fs.writeFileSync(
				path.join( patterns, slug, 'content.php' ),
				contentSource || "<?php\nreturn '';\n"
			);
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
					stillAvailable: stillAvailable.length,
					of: available.length,
					raw: cat.status === 200 ? undefined : cat.raw,
				}
			);
			if ( slug === 'zz-test-content' ) {
				const item = cat.patterns[ `${ sourceId }/${ slug }` ];
				const got = await content( client, `${ sourceId }/${ slug }` );
				report.check(
					'isolation: the pattern with broken content is unavailable and its content route answers 422',
					item &&
						item.availability.reasons.includes(
							'invalid_content'
						) &&
						got.status === 422,
					{
						availability: item && item.availability,
						status: got.status,
					}
				);
			}
			fs.rmSync( path.join( patterns, slug ), {
				recursive: true,
				force: true,
			} );
		}
		const mediaUsers = pro
			? patternsUsingTokens( pro, 'pro', 'media' )
			: [];
		if ( pro && mediaUsers.length ) {
			const mapFile = path.join( LIB( pro ), 'data', 'media.php' );
			const original = fs.readFileSync( mapFile, 'utf8' );
			fs.writeFileSync( mapFile, '<?php\nreturn array(\n' );
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
			fs.writeFileSync( mapFile, original );
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
			const file = path.join(
				LIB( src === 'pro' ? pro : lite ),
				'patterns',
				slug,
				'content.php'
			);
			const original = fs.readFileSync( file, 'utf8' );
			const stat = fs.statSync( file );
			// Same revision and modification time, so the cache can't notice; the new paragraph needs
			// unfiltered_html. The block goes before the nowdoc terminator, whatever its name.
			const changed = original.replace(
				/\n([A-Z_]+);\s*$/,
				'\n<!-- wp:paragraph --><p>Test<input type="checkbox"></p><!-- /wp:paragraph -->\n$1;\n'
			);
			if ( changed === original ) {
				throw new Error(
					`Test set-up: no nowdoc terminator found in ${ file }`
				);
			}
			fs.writeFileSync( file, changed );
			fs.utimesSync( file, stat.atime, stat.mtime );
			await pause( 1500 );
			const got = await content( client, authorItem.id, 'author' );
			const after = ( await catalog( client, 'author' ) ).patterns[
				authorItem.id
			];
			fs.writeFileSync( file, original );
			fs.utimesSync( file, stat.atime, stat.mtime );
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
