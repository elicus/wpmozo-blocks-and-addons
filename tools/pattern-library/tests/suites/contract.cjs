/**
 * Shared-surface conformance (R4; registry-and-contract.md sections 1–4).
 *
 * 1. Lite provides every surface in lib/surface.cjs: at runtime (functions, actions, features,
 *    classes and their public static methods, constants, post types, taxonomies, handles), in
 *    the editor (JS globals and their members, the shared script before block scripts) and in its
 *    source (settings hooks, the legacy dynamic-style path).
 * 2. Pro uses nothing of Lite outside that list (a static scan of the Pro source).
 * 3. Pro's editor guard (roadmap R2) lists every Lite global a Pro block uses without a fallback,
 *    and Lite provides each one.
 *
 * A change that breaks an add-on makes one of these fail. The list grows, it never shrinks.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const surface = require( '../lib/surface.cjs' );
const { standardSite } = require( '../lib/setup.cjs' );
const { launch, newPage, openEditor } = require( '../lib/browser.cjs' );

function files( dir, test, out = [] ) {
	if ( ! fs.existsSync( dir ) ) {
		return out;
	}
	for ( const entry of fs.readdirSync( dir, { withFileTypes: true } ) ) {
		if (
			[ 'node_modules', 'build', 'vendor', '.git' ].includes( entry.name )
		) {
			continue;
		}
		const full = path.join( dir, entry.name );
		if ( entry.isDirectory() ) {
			files( full, test, out );
		} else if ( test( entry.name ) ) {
			out.push( full );
		}
	}
	return out;
}

const missing = ( map ) =>
	Object.entries( map || {} )
		.filter( ( [ , ok ] ) => ! ok )
		.map( ( [ k ] ) => k );

/**
 * Lite symbols the Pro source uses, found by a static scan.
 *
 * @param {string} pro Pro plugin folder.
 * @return {Object} Usage by kind.
 */
function proUsage( pro ) {
	const php = files( pro, ( n ) => n.endsWith( '.php' ) )
		.map( ( f ) => fs.readFileSync( f, 'utf8' ) )
		.join( '\n' );
	const js = files( path.join( pro, 'src' ), ( n ) => /\.js$/.test( n ) )
		.map( ( f ) => fs.readFileSync( f, 'utf8' ) )
		.join( '\n' );
	const blockJson = files(
		path.join( pro, 'src' ),
		( n ) => n === 'block.json'
	)
		.map( ( f ) => fs.readFileSync( f, 'utf8' ) )
		.join( '\n' );
	const proDefined = new Set(
		( php.match( /function\s+([a-z_0-9]+)\s*\(/gi ) || [] ).map( ( m ) =>
			m.replace( /function\s+|\s*\(/gi, '' )
		)
	);
	const usage = {
		// Static calls through Lite helper classes, or through variables holding helper objects.
		helperMethods: [
			...new Set(
				(
					php.match(
						/(?:Mozo_Bna_(?:Block_)?Helpers::|\$(?:block_)?helpers(?:::|->))([a-zA-Z_]+)/g
					) || []
				).map( ( m ) => m.replace( /.*(::|->)/, '' ) )
			),
		].filter( ( m ) => ! proDefined.has( m ) ),
		extends: [
			...new Set(
				( php.match( /extends\s+(Mozo_Bna_[A-Za-z_]+)/g ) || [] ).map(
					( m ) => m.replace( /extends\s+/, '' )
				)
			),
		],
		constants: [
			...new Set( php.match( /\bWPMOZO_BNA_(?!PRO_)[A-Z_]+/g ) || [] ),
		],
		hooks: [
			...new Set(
				(
					php.match(
						/(?:add_action|add_filter)\(\s*'(wpmozo_bna_(?!pro_)[a-z_]+)'/g
					) || []
				).map( ( m ) => m.replace( /.*'(.*)'/, '$1' ) )
			),
		],
		postTypes: [
			...new Set( php.match( /'wpmozoae-[a-z-]+'/g ) || [] ),
		].map( ( s ) => s.slice( 1, -1 ) ),
		taxonomies: [
			...new Set( php.match( /'wpmozo-ae-[a-z-]+'/g ) || [] ),
		].map( ( s ) => s.slice( 1, -1 ) ),
		handles: [
			...new Set(
				(
					blockJson.match(
						/"wpmozo-blocks-and-addons-[a-zA-Z0-9_-]+"/g
					) || []
				).map( ( s ) => s.slice( 1, -1 ) )
			),
		].filter(
			( h ) =>
				h !== 'wpmozo-blocks-and-addons-pro' &&
				! h.includes( 'chartjs' )
		),
		globals: [
			...new Set(
				( js.match( /window\.WPMozoBNA[A-Za-z]*/g ) || [] ).map(
					( s ) => s.slice( 7 )
				)
			),
		],
	};
	const common = path.join( pro, 'src', 'common' );
	const read = ( f ) =>
		fs.existsSync( f ) ? fs.readFileSync( f, 'utf8' ) : '';
	const names = ( source ) => {
		const block =
			( source.match( /export const \{([\s\S]*?)\}\s*=/ ) || [] )[ 1 ] ||
			'';
		return block
			.split( ',' )
			.map( ( s ) => s.trim() )
			.filter( Boolean );
	};
	usage.components = names(
		read( path.join( common, 'components', 'index.js' ) )
	).concat(
		/liteComponents\.MozoStates/.test(
			read( path.join( common, 'components', 'index.js' ) )
		)
			? [ 'MozoStates' ]
			: []
	);
	usage.utils = names( read( path.join( common, 'utils.js' ) ) );
	return usage;
}

/**
 * The Lite editor globals Pro's guard checks (Mozo_Bna_Pro_Integration::LITE_EDITOR_GLOBALS), or
 * null for a Pro without the guard.
 *
 * @param {string} pro Pro plugin folder.
 * @return {string[]|null} Names.
 */
function proGuardList( pro ) {
	const file = path.join(
		pro,
		'includes',
		'class-mozo-bna-pro-integration.php'
	);
	const source = fs.existsSync( file ) ? fs.readFileSync( file, 'utf8' ) : '';
	const block = ( source.match(
		/const LITE_EDITOR_GLOBALS = array\(([\s\S]*?)\n\t\);/
	) || [] )[ 1 ];
	return block
		? ( block.match( /'([A-Za-z]+)'/g ) || [] )
				.map( ( s ) => s.slice( 1, -1 ) )
				.filter( ( n ) => n !== 'components' && n !== 'utils' )
		: null;
}

/**
 * Lite globals Pro blocks use without a fallback: names re-exported by src/common that appear in
 * a block's source, minus those src/common gives a fallback (`liteComponents.X ||`).
 *
 * @param {string} pro   Pro plugin folder.
 * @param {Object} usage proUsage() result.
 * @return {string[]} Names.
 */
function proBlockGlobals( pro, usage ) {
	const common = path.join( pro, 'src', 'common', 'components', 'index.js' );
	const withFallback = (
		( fs.existsSync( common )
			? fs.readFileSync( common, 'utf8' )
			: ''
		).match( /liteComponents\.([A-Za-z]+)\s*\|\|/g ) || []
	).map( ( m ) => m.replace( /liteComponents\.|\s*\|\|/g, '' ) );
	const blocks = files( path.join( pro, 'src', 'blocks' ), ( n ) =>
		n.endsWith( '.js' )
	)
		.map( ( f ) => fs.readFileSync( f, 'utf8' ) )
		.join( '\n' );
	return [ ...new Set( usage.components.concat( usage.utils ) ) ].filter(
		( name ) =>
			! withFallback.includes( name ) &&
			new RegExp( `\\b${ name }\\b` ).test( blocks )
	);
}

async function run( { cli, report } ) {
	const F = surface.frozen;
	const C = surface.contract;
	const { site, client, lite, pro } = await standardSite( {
		label: 'contract',
		cli,
	} );
	report.context.site = site.logs;
	try {
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			keep: 'fancy-heading',
			flush: '1',
		} );
		const seen =
			(
				await client.driver(
					{ wpmozo_test: 'contract' },
					JSON.stringify( {
						functions: C.functions,
						actions: C.actions,
						integrationMethods: C.integrationMethods,
						registryMethods: C.registryMethods,
						classes: F.classes,
						constants: F.constants,
						post_types: F.postTypes,
						taxonomies: F.taxonomies,
						scripts: F.scripts,
						styles: F.styles,
					} )
				)
			).seen || {};
		const features = seen.features || {};
		report.check(
			'contract: accessor, actions, integration and registry methods exist',
			! missing( seen.functions ).length &&
				! missing( seen.actions ).length &&
				! missing( seen.integration ).length &&
				! missing( seen.registry ).length,
			[
				missing( seen.functions ),
				missing( seen.actions ),
				missing( seen.integration ),
				missing( seen.registry ),
			]
		);
		const lowFeatures = Object.entries( C.features ).filter(
			( [ name, version ] ) => ! ( features[ name ] >= version )
		);
		report.check(
			'contract: features at least at their documented versions',
			! lowFeatures.length,
			{ features, lowFeatures }
		);
		const classProblems = Object.entries( seen.classes || {} )
			.filter(
				( [ , c ] ) =>
					! c.exists || c.final || missing( c.methods ).length
			)
			.map( ( [ name, c ] ) => ( {
				name,
				exists: c.exists,
				final: c.final,
				missing: missing( c.methods ),
			} ) );
		report.check(
			'frozen: helper classes exist, are not final (add-ons extend them), and keep their public static methods',
			! classProblems.length,
			classProblems
		);
		report.check(
			'frozen: constants, post types and taxonomies exist',
			! missing( seen.constants ).length &&
				! missing( seen.post_types ).length &&
				! missing( seen.taxonomies ).length,
			[
				missing( seen.constants ),
				missing( seen.post_types ),
				missing( seen.taxonomies ),
			]
		);
		report.check(
			'frozen: script and style handles are registered',
			! missing( seen.scripts ).length && ! missing( seen.styles ).length,
			[ missing( seen.scripts ), missing( seen.styles ) ]
		);

		const source = files( lite, ( n ) => n.endsWith( '.php' ) )
			.map( ( f ) => fs.readFileSync( f, 'utf8' ) )
			.join( '\n' );
		const hooksMissing = F.settingsHooks.filter(
			( hook ) =>
				! new RegExp(
					`(?:do_action|apply_filters)\\(\\s*'${ hook }'`
				).test( source )
		);
		report.check(
			'frozen: Lite still fires the settings hooks add-ons use',
			! hooksMissing.length,
			hooksMissing
		);
		report.check(
			"frozen: Lite still loads an add-on's dynamic-style.php from the legacy path",
			source.includes( F.dynamicStylePath )
		);

		const browser = await launch();
		try {
			const { page } = await newPage( browser, site.url );
			await openEditor( page, site.url, '/wp-admin/post-new.php' );
			const js = await page.evaluate( () => ( {
				WPMozoBNA: window.WPMozoBNA
					? {
							contractVersion: window.WPMozoBNA.contractVersion,
							version: window.WPMozoBNA.version,
							features: window.WPMozoBNA.features,
							components:
								window.WPMozoBNA.components ===
								window.WPMozoBNAComponents,
							utils:
								window.WPMozoBNA.utils ===
								window.WPMozoBNAUtils,
					  }
					: null,
				components: Object.keys(
					window.WPMozoBNAComponents || {}
				).filter(
					( k ) =>
						typeof window.WPMozoBNAComponents[ k ] === 'function' ||
						typeof window.WPMozoBNAComponents[ k ] === 'object'
				),
				utils: Object.keys( window.WPMozoBNAUtils || {} ),
				shared:
					!! document.getElementById(
						'wpmozo-blocks-and-addons-shared-js'
					) &&
					! document
						.getElementById( 'wpmozo-blocks-and-addons-shared-js' )
						.closest( 'body' ),
			} ) );
			report.check(
				'contract: window.WPMozoBNA carries the contract and points at the shared globals',
				js.WPMozoBNA &&
					js.WPMozoBNA.contractVersion >= 1 &&
					js.WPMozoBNA.components &&
					js.WPMozoBNA.utils,
				js.WPMozoBNA
			);
			report.check(
				'contract: the shared script prints in the head, before block editor scripts',
				js.shared
			);
			const lostComponents = F.components.filter(
				( n ) => ! js.components.includes( n )
			);
			const lostUtils = F.utils.filter(
				( n ) => ! js.utils.includes( n )
			);
			report.check(
				'frozen: every shared component and utility add-ons use is present',
				! lostComponents.length && ! lostUtils.length,
				{ lostComponents, lostUtils }
			);
			await page.context().close();
		} finally {
			await browser.close();
		}

		if ( pro ) {
			const usage = proUsage( pro );
			report.context.proUsage = usage;
			const allowedMethods = new Set( Object.values( F.classes ).flat() );
			const outside = {
				helperMethods: usage.helperMethods.filter(
					( m ) => ! allowedMethods.has( m )
				),
				extends: usage.extends.filter(
					( c ) =>
						! Object.keys( F.classes ).some( ( k ) =>
							k.endsWith( '\\' + c )
						)
				),
				constants: usage.constants.filter(
					( c ) => ! F.constants.includes( c )
				),
				hooks: usage.hooks.filter(
					( h ) =>
						! F.settingsHooks.includes( h ) &&
						! C.actions.includes( h )
				),
				postTypes: usage.postTypes.filter(
					( p ) => ! F.postTypes.includes( p )
				),
				taxonomies: usage.taxonomies.filter(
					( t ) => ! F.taxonomies.includes( t )
				),
				handles: usage.handles.filter(
					( h ) =>
						! F.scripts.includes( h ) &&
						! F.styles.includes( h ) &&
						! C.scriptHandles.includes( h )
				),
				globals: usage.globals.filter(
					( g ) => ! C.globals.includes( g )
				),
				components: usage.components.filter(
					( n ) => ! F.components.includes( n )
				),
				utils: usage.utils.filter( ( n ) => ! F.utils.includes( n ) ),
			};
			const extra = Object.fromEntries(
				Object.entries( outside ).filter( ( [ , v ] ) => v.length )
			);
			report.check(
				'usage: Pro uses no Lite surface outside the documented list',
				! Object.keys( extra ).length,
				extra
			);
			const guard = proGuardList( pro );
			if ( guard ) {
				const used = proBlockGlobals( pro, usage );
				const unlisted = used.filter( ( n ) => ! guard.includes( n ) );
				const notProvided = guard.filter(
					( n ) =>
						! F.components.includes( n ) && ! F.utils.includes( n )
				);
				report.check(
					"usage: Pro's editor guard lists every Lite global its blocks use without a fallback, and Lite provides each one",
					used.length && ! unlisted.length && ! notProvided.length,
					{ used, guard, unlisted, notProvided }
				);
			} else {
				report.note(
					'Pro has no editor guard list (a Pro from before roadmap R2): guard list check skipped'
				);
			}
		}
		report.check(
			'no fatal errors',
			! site.fatals().length,
			site.fatals()
		);
	} finally {
		await site.stop();
	}
}

module.exports = {
	description:
		'Lite provides every shared surface; Pro uses nothing else (R4)',
	run,
};
