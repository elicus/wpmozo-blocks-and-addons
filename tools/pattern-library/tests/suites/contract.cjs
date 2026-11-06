/**
 * Shared-surface conformance (R4; registry-and-contract.md sections 1–4).
 *
 * 1. Lite provides every surface in lib/surface.cjs: at runtime (functions, actions, features,
 *    classes that can be extended and created, their public static methods, constants, post
 *    types, taxonomies, handles, blocks add-ons insert, block on/off for add-on blocks, an
 *    add-on's dynamic-style.php), in the editor (JS globals and their members, the editor object,
 *    the saved markup of blocks add-ons insert, the shared script before block scripts), on its
 *    settings page (add-on blocks and an add-on tab) and in its source (settings hooks, post meta).
 * 2. Pro uses nothing of Lite outside that list (a static scan of the Pro source), registers no
 *    handle under a Lite name, and defines the constants Lite reads.
 * 3. Pro's editor guard (roadmap R2) lists every Lite global a Pro block uses without a fallback,
 *    and Pro's start-up check (D-R2-3) covers every Lite helper method Pro calls; Lite provides
 *    each one.
 *
 * A change that breaks an add-on makes one of these fail. The list grows, it never shrinks.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const surface = require( '../lib/surface.cjs' );
const { standardSite, catalog } = require( '../lib/setup.cjs' );
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

const read = ( f ) =>
	fs.existsSync( f ) ? fs.readFileSync( f, 'utf8' ) : '';
const joined = ( list ) => list.map( read ).join( '\n' );
const unique = ( list ) => [ ...new Set( list ) ];
const all = ( source, re, group = 1 ) =>
	unique( [ ...source.matchAll( re ) ].map( ( m ) => m[ group ] ) );

// Expected names the driver didn't report as present (a missing answer counts as missing).
const missing = ( map, expected ) =>
	expected.filter( ( k ) => ! ( map && map[ k ] === true ) );

/**
 * Pro's blocks: every name, and the top-level slugs Lite's block panel lists (folder names without
 * -child or -item; WooCommerce blocks left out, they need WooCommerce).
 *
 * @param {string} pro Pro plugin folder.
 * @return {Object} { names, top }.
 */
function proBlocks( pro ) {
	const list = files(
		path.join( pro, 'src', 'blocks' ),
		( n ) => n === 'block.json'
	).map( ( f ) => ( {
		slug: path.basename( path.dirname( f ) ),
		name: JSON.parse( read( f ) ).name,
	} ) );
	return {
		names: list.map( ( b ) => b.name ),
		top: list
			.filter(
				( b ) =>
					b.name === `wpmozo/${ b.slug }` &&
					! /-child|-item/.test( b.slug ) &&
					! b.slug.startsWith( 'woo-' )
			)
			.map( ( b ) => b.slug )
			.sort(),
	};
}

/**
 * Lite symbols the Pro source uses, found by a static scan.
 *
 * @param {string} pro  Pro plugin folder.
 * @param {string} lite Lite plugin folder.
 * @return {Object} Usage by kind.
 */
function proUsage( pro, lite ) {
	const phpFiles = files( pro, ( n ) => n.endsWith( '.php' ) );
	const php = joined( phpFiles );
	const js = joined(
		files( path.join( pro, 'src' ), ( n ) => /\.js$/.test( n ) ).concat(
			files(
				path.join( pro, 'includes' ),
				( n ) => /\.js$/.test( n ) && ! /\.min\.js$/.test( n )
			)
		)
	);
	const blockJson = joined(
		files( path.join( pro, 'src' ), ( n ) => n === 'block.json' )
	);
	const proDefined = new Set( all( php, /function\s+([a-z_0-9]+)\s*\(/gi ) );
	// Helper calls: through Lite's or Pro's helper classes, through variables holding a helper
	// instance, and self/parent/static inside Pro's helper classes (they extend Lite's).
	const helperVars = all(
		php,
		/\$([a-z_]+)\s*=\s*new\s+\\?(?:WPMOZO\\BNA\\Helpers\\)?Mozo_Bna_(?:Pro_)?(?:Block_)?Helpers\b/g
	);
	const helperFiles = joined(
		phpFiles.filter( ( f ) =>
			/class-mozo-bna-pro-(?:block-)?helpers\.php$/.test( f )
		)
	);
	const helperMethods = unique( [
		...all(
			php,
			/\bMozo_Bna_(?:Pro_)?(?:Block_)?Helpers::([a-zA-Z_]+)\s*\(/g
		),
		...all(
			php,
			new RegExp(
				`\\$(?:${
					helperVars.join( '|' ) || 'helpers'
				})(?:->|::)([a-zA-Z_]+)\\s*\\(`,
				'g'
			)
		),
		...all( helperFiles, /\b(?:self|parent|static)::([a-zA-Z_]+)\s*\(/g ),
	] ).filter( ( m ) => ! proDefined.has( m ) );
	// Objects Lite prints with wp_localize_script that Pro's scripts read (Pro's own left out).
	const localized = ( source ) =>
		all(
			source,
			/wp_localize_script\(\s*[^,]+,\s*['"]([A-Za-z_$][\w$]*)['"]/g
		);
	const proLocalized = localized( php );
	const liteObjects = localized(
		joined( files( lite, ( n ) => n.endsWith( '.php' ) ) )
	).filter( ( n ) => ! proLocalized.includes( n ) );
	const editorObjects = {};
	for ( const name of liteObjects ) {
		if (
			new RegExp( `(?<![\\w$.'"\`])(?:window\\.)?${ name }\\b` ).test(
				js
			)
		) {
			editorObjects[ name ] = all(
				js,
				new RegExp( `\\b${ name }\\.([A-Za-z_$][\\w$]*)`, 'g' )
			);
		}
	}
	const proNames = proBlocks( pro ).names;
	const usage = {
		helperMethods,
		extends: all( php, /extends\s+(Mozo_Bna_[A-Za-z_]+)/g ),
		constants: all( php, /\b(WPMOZO_BNA_(?!PRO_)[A-Z_]+)/g ),
		hooks: all(
			php,
			/(?:add_action|add_filter)\(\s*'(wpmozo_bna_(?!pro_)[a-z_]+)'/g
		),
		postTypes: all( php, /'(wpmozoae-[a-z-]+)'/g ),
		taxonomies: all( php, /'(wpmozo-ae-[a-z-]+)'/g ),
		postMeta: all(
			php,
			/(['"])(wpmozo_ae_(?:team_member|testimonial)_[a-z_]+)\1/g,
			2
		),
		// Lite handles referenced anywhere (block.json, PHP, scripts); Pro's own start with -pro.
		handles: all(
			[ blockJson, php, js ].join( '\n' ),
			/(['"])(wpmozo-blocks-and-addons-[A-Za-z0-9_-]+)\1/g,
			2
		).filter( ( h ) => ! /^wpmozo-blocks-and-addons-pro\b/.test( h ) ),
		// Handles under a Lite name that Pro registers itself (wp_enqueue_* with a source registers).
		registersLiteHandles: all(
			php,
			/wp_(?:register|enqueue)_(?:script|style)\(\s*['"](wpmozo-blocks-and-addons-(?!pro\b)[A-Za-z0-9_-]+)['"]\s*,/g
		),
		blocks: all(
			[ blockJson, php, js ].join( '\n' ),
			/(['"`])(wpmozo\/[a-z0-9-]+)\1/g,
			2
		).filter( ( b ) => ! proNames.includes( b ) ),
		// Lite's globals (Pro's own are WPMozoBNAPro…).
		globals: all( js, /window\.(WPMozoBNA[A-Za-z]*)/g ).filter(
			( g ) => ! g.startsWith( 'WPMozoBNAPro' )
		),
		editorObjects,
	};
	const common = path.join( pro, 'src', 'common' );
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
	const source = read(
		path.join( pro, 'includes', 'class-mozo-bna-pro-integration.php' )
	);
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
 * The Lite helper classes and methods Pro checks at start-up (lite_helpers_available(), D-R2-3),
 * or null for a Pro without that check.
 *
 * @param {string} pro Pro plugin folder.
 * @return {Object|null} { short class name: [ methods ] }.
 */
function proStartupList( pro ) {
	const source = read(
		path.join( pro, 'includes', 'class-mozo-blocks-and-addons-pro.php' )
	);
	const body = ( source.match(
		/function lite_helpers_available\(\)[\s\S]*?\$required\s*=\s*array\(([\s\S]*?)\);/
	) || [] )[ 1 ];
	if ( ! body ) {
		return null;
	}
	const out = {};
	for ( const m of body.matchAll(
		/'[^']*\\(Mozo_Bna_[A-Za-z_]+)'\s*=>\s*array\(([^)]*)\)/g
	) ) {
		out[ m[ 1 ] ] = all( m[ 2 ], /'([a-z_]+)'/g );
	}
	return out;
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
	const withFallback = all(
		read( path.join( pro, 'src', 'common', 'components', 'index.js' ) ),
		/liteComponents\.([A-Za-z]+)\s*\|\|/g
	);
	const blocks = joined(
		files( path.join( pro, 'src', 'blocks' ), ( n ) => n.endsWith( '.js' ) )
	);
	return unique( usage.components.concat( usage.utils ) ).filter(
		( name ) =>
			! withFallback.includes( name ) &&
			new RegExp( `\\b${ name }\\b` ).test( blocks )
	);
}

async function run( { cli, report } ) {
	const F = surface.frozen;
	const C = surface.contract;
	const A = surface.addon;
	const { site, client, lite, pro } = await standardSite( {
		label: 'contract',
		cli,
	} );
	report.context.site = site.logs;
	// One add-on block with a dynamic-style.php of its own stays on; every other WPMozo block goes
	// on Lite's block on/off list, among them `listed`.
	let kept = null;
	let listed = null;
	if ( pro ) {
		const top = proBlocks( pro ).top;
		kept =
			top.find(
				( slug ) =>
					fs.existsSync(
						path.join(
							pro,
							'includes',
							'templates',
							`block-${ slug }`,
							'dynamic-style.php'
						)
					) &&
					! fs.existsSync(
						path.join(
							lite,
							'includes',
							'templates',
							`block-${ slug }`,
							'dynamic-style.php'
						)
					)
			) || null;
		// Lite ships its own list of Pro block names for the panel; prefer a block only the panel
		// filter can add, so the panel check proves the filter.
		const builtIn = all(
			read( path.join( lite, 'includes', 'data', 'pro-blocks.php' ) ),
			/'([a-z0-9-]+)'\s*=>/g
		);
		const others = top.filter( ( slug ) => slug !== kept );
		listed =
			others.find( ( slug ) => ! builtIn.includes( slug ) ) ||
			others[ 0 ] ||
			null;
		report.context.addonBlocks = {
			kept,
			listed,
			listedOnlyThroughFilter: ! builtIn.includes( listed ),
		};
	}
	try {
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			keep: [ 'fancy-heading', kept ].filter( Boolean ).join( ',' ),
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
						blocks: F.blocks.concat(
							[ kept, listed ]
								.filter( Boolean )
								.map( ( s ) => `wpmozo/${ s }` )
						),
						addon_constants: pro ? A.constants : [],
						dynamic_style: kept,
					} )
				)
			).seen || {};
		const features = seen.features || {};
		report.check(
			'contract: accessor, actions, integration and registry methods exist',
			! missing( seen.functions, C.functions ).length &&
				! missing( seen.actions, C.actions ).length &&
				! missing( seen.integration, C.integrationMethods ).length &&
				! missing( seen.registry, C.registryMethods ).length,
			[
				missing( seen.functions, C.functions ),
				missing( seen.actions, C.actions ),
				missing( seen.integration, C.integrationMethods ),
				missing( seen.registry, C.registryMethods ),
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
		const classProblems = Object.entries( F.classes )
			.map( ( [ name, methods ] ) => {
				const c = ( seen.classes || {} )[ name ] || {};
				return {
					name,
					exists: c.exists === true,
					final: c.final,
					instantiable: c.instantiable === true,
					missing: missing( c.methods, methods ),
				};
			} )
			.filter(
				( c ) =>
					! c.exists ||
					c.final !== false ||
					! c.instantiable ||
					c.missing.length
			);
		report.check(
			'frozen: helper classes exist, are not final, can be created without arguments (add-ons extend and create them), and keep their public static methods',
			! classProblems.length,
			classProblems
		);
		report.check(
			'frozen: constants, post types and taxonomies exist',
			! missing( seen.constants, F.constants ).length &&
				! missing( seen.post_types, F.postTypes ).length &&
				! missing( seen.taxonomies, F.taxonomies ).length,
			[
				missing( seen.constants, F.constants ),
				missing( seen.post_types, F.postTypes ),
				missing( seen.taxonomies, F.taxonomies ),
			]
		);
		report.check(
			'frozen: script and style handles are registered',
			! missing( seen.scripts, F.scripts ).length &&
				! missing( seen.styles, F.styles ).length,
			[
				missing( seen.scripts, F.scripts ),
				missing( seen.styles, F.styles ),
			]
		);
		const blocksSeen = seen.blocks || {};
		report.check(
			'frozen: the Lite blocks add-ons insert stay registered while every other Lite block but one is switched off',
			F.blocks.every( ( name ) => blocksSeen[ name ] === true ),
			blocksSeen
		);
		if ( pro ) {
			report.check(
				"frozen: Lite's block on/off list switches add-on blocks: a listed one is unregistered, an unlisted one stays registered",
				!! kept &&
					!! listed &&
					blocksSeen[ `wpmozo/${ kept }` ] === true &&
					blocksSeen[ `wpmozo/${ listed }` ] === false,
				{ kept, listed, blocksSeen }
			);
			const ds = seen.dynamic_style;
			report.check(
				`frozen: Lite loads an add-on's dynamic-style.php by path and calls its <slug>${ F.dynamicStyleCallback }()`,
				!! ds &&
					! ds.before &&
					ds.after &&
					ds.from_addon &&
					ds.string &&
					ds.same,
				ds
			);
			report.check(
				'addon: Pro defines the constants Lite reads',
				! missing( seen.addon_constants, A.constants ).length,
				missing( seen.addon_constants, A.constants )
			);
		} else {
			report.note(
				'No Pro: add-on block on/off, dynamic-style, add-on constants, settings tab and usage checks skipped'
			);
		}

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
		// The keys must appear in Lite's meta-saving functions, not just anywhere (form field names
		// and readers would hide a key Lite no longer saves).
		const saving = all(
			source,
			/function\s+\w*save\w*meta\w*\s*\([^)]*\)\s*\{([\s\S]*?)\n\t\}/g
		).join( '\n' );
		const metaMissing = Object.values( F.postMeta )
			.flat()
			.filter(
				( key ) => ! new RegExp( `(['"])${ key }\\1` ).test( saving )
			);
		report.check(
			"frozen: Lite's meta-saving code still writes every post meta key add-ons read",
			! metaMissing.length,
			metaMissing
		);

		const lib = await catalog( client, 'admin' );
		const addonPatterns = Object.values( lib.patterns ).filter(
			( p ) => ! String( p.id ).startsWith( 'lite/' )
		);
		const outdated = addonPatterns
			.filter( ( p ) =>
				( ( p.availability && p.availability.reasons ) || [] ).includes(
					'lite_outdated'
				)
			)
			.map( ( p ) => p.id );
		if ( pro ) {
			report.check(
				'contract: every Lite map key the add-on patterns use exists (none is lite_outdated)',
				lib.status === 200 &&
					addonPatterns.length > 0 &&
					! outdated.length,
				{
					status: lib.status,
					addonPatterns: addonPatterns.map( ( p ) => p.id ),
					outdated,
				}
			);
		}

		const browser = await launch();
		try {
			const { page } = await newPage( browser, site.url );
			await openEditor( page, site.url, '/wp-admin/post-new.php' );
			const js = await page.evaluate(
				( { objects, samples } ) => {
					const editorObjects = {};
					for ( const [ name, members ] of Object.entries(
						objects
					) ) {
						const o = window[ name ];
						editorObjects[ name ] = o
							? {
									missing: members.filter(
										( m ) => o[ m ] === undefined
									),
									placeholderImg: o.placeholderImg,
							  }
							: null;
					}
					const markup = {};
					for ( const [ name, list ] of Object.entries( samples ) ) {
						const parse = ( html ) => {
							const [ b ] = wp.blocks.parse( html );
							return b
								? {
										name: b.name,
										valid: b.isValid === true,
										inner: b.innerBlocks.length,
										same: wp.blocks.serialize( b ) === html,
								  }
								: null;
						};
						const newest = list[ list.length - 1 ];
						markup[ name ] = {
							registered: !! wp.blocks.getBlockType( name ),
							samples: list.map( parse ),
							// Negative control: an extra attribute in the saved HTML must be caught.
							control: parse(
								newest.replace(
									' class="',
									' data-wpmozo-test="1" class="'
								)
							),
						};
					}
					return {
						WPMozoBNA: window.WPMozoBNA
							? {
									contractVersion:
										window.WPMozoBNA.contractVersion,
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
								typeof window.WPMozoBNAComponents[ k ] ===
									'function' ||
								typeof window.WPMozoBNAComponents[ k ] ===
									'object'
						),
						utils: Object.keys( window.WPMozoBNAUtils || {} ),
						shared:
							!! document.getElementById(
								'wpmozo-blocks-and-addons-shared-js'
							) &&
							! document
								.getElementById(
									'wpmozo-blocks-and-addons-shared-js'
								)
								.closest( 'body' ),
						editorObjects,
						markup,
					};
				},
				{ objects: F.editorObjects, samples: F.savedMarkup }
			);
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
			const placeholder = (
				js.editorObjects.wpmozo_bna_editor_object || {}
			).placeholderImg;
			const placeholderStatus =
				typeof placeholder === 'string'
					? ( await page.request.get( placeholder ) ).status()
					: null;
			report.check(
				'frozen: the editor object keeps the members add-ons read; placeholderImg is a Lite file saved content uses, and it loads',
				Object.values( js.editorObjects ).every(
					( o ) => o && ! o.missing.length
				) &&
					F.savedFiles.every( ( f ) =>
						fs.existsSync( path.join( lite, f ) )
					) &&
					typeof placeholder === 'string' &&
					placeholder.endsWith( '/' + F.savedFiles[ 0 ] ) &&
					placeholderStatus === 200,
				{ editorObjects: js.editorObjects, placeholderStatus }
			);
			report.check(
				'frozen: the Lite blocks add-ons insert are registered in the editor; their saved markup stays valid and the newest is the current save output',
				Object.values( js.markup ).every(
					( m ) =>
						m.registered &&
						m.samples.every(
							( s, i ) =>
								s &&
								s.valid &&
								s.inner > 0 &&
								( i < m.samples.length - 1 || s.same )
						) &&
						m.control &&
						! m.control.valid
				),
				js.markup
			);

			// Lite's settings page: the block list and (with Pro) the add-on's blocks and tab.
			await page.goto(
				site.url + '/wp-admin/admin.php?page=wpmozo-blocks-and-addons',
				{ timeout: 240000 }
			);
			await page.waitForSelector( '.wpmozo_bna_panel_checkbox', {
				state: 'attached',
				timeout: 120000,
			} );
			const panel = await page.evaluate(
				( { slugs, menuItem, section, licence } ) => {
					const box = ( slug ) => {
						const b = document.querySelector(
							`input.wpmozo_bna_panel_checkbox#${ window.CSS.escape(
								slug
							) }`
						);
						return b
							? {
									addon: !! b.closest( '.wpmozo_pro' ),
									disabled: b.disabled,
									checked: b.checked,
							  }
							: null;
					};
					return {
						boxes: Object.fromEntries(
							slugs.map( ( s ) => [ s, box( s ) ] )
						),
						tab: !! document.querySelector(
							`li.${ menuItem }[data-href="#${ licence }"]`
						),
						section: !! document.querySelector(
							`#${ licence }.${ section }`
						),
					};
				},
				{
					slugs: [ 'fancy-heading', kept, listed ]
						.concat( F.blocks.map( ( b ) => b.slice( 7 ) ) )
						.filter( Boolean ),
					menuItem: F.panel.menuItem,
					section: F.panel.section,
					licence: A.licenceSection,
				}
			);
			report.check(
				"frozen: Lite's block panel lists its blocks but never the blocks add-ons insert (they can't be switched off)",
				!! panel.boxes[ 'fancy-heading' ] &&
					F.blocks.every(
						( b ) => panel.boxes[ b.slice( 7 ) ] === null
					),
				panel.boxes
			);
			if ( pro ) {
				const k = panel.boxes[ kept ];
				const l = panel.boxes[ listed ];
				report.check(
					"frozen: add-on blocks reach Lite's block panel through the panel filter, enabled (WPMOZO_BNA_PRO_VERSION) and showing their on/off state",
					!! k &&
						!! l &&
						k.addon &&
						l.addon &&
						! k.disabled &&
						! l.disabled &&
						k.checked &&
						! l.checked,
					{ kept: k, listed: l }
				);
				// Sections stay hidden until Lite's panel script makes one active.
				let hiddenBefore = false;
				let visible = false;
				if ( panel.tab && panel.section ) {
					hiddenBefore = ! ( await page
						.locator( `#${ A.licenceSection }` )
						.isVisible() );
					await page.click(
						`li.${ F.panel.menuItem }[data-href="#${ A.licenceSection }"]`
					);
					visible = await page
						.waitForSelector( `#${ A.licenceSection }`, {
							state: 'visible',
							timeout: 10000,
						} )
						.then( () => true )
						.catch( () => false );
				}
				report.check(
					"frozen: an add-on tab added through the settings hooks opens with Lite's panel classes",
					panel.tab && panel.section && hiddenBefore && visible,
					{
						tab: panel.tab,
						section: panel.section,
						hiddenBefore,
						visible,
					}
				);
			}
			await page.context().close();
		} finally {
			await browser.close();
		}

		if ( pro ) {
			const usage = proUsage( pro, lite );
			report.context.proUsage = usage;
			const allowedMethods = new Set( Object.values( F.classes ).flat() );
			const allowedMeta = Object.values( F.postMeta ).flat();
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
				postMeta: usage.postMeta.filter(
					( m ) => ! allowedMeta.includes( m )
				),
				handles: usage.handles.filter(
					( h ) =>
						! F.scripts.includes( h ) &&
						! F.styles.includes( h ) &&
						! C.scriptHandles.includes( h )
				),
				blocks: usage.blocks.filter(
					( b ) => ! F.blocks.includes( b )
				),
				globals: usage.globals.filter(
					( g ) => ! C.globals.includes( g )
				),
				editorObjects: Object.entries( usage.editorObjects )
					.map( ( [ name, members ] ) =>
						F.editorObjects[ name ]
							? members
									.filter(
										( m ) =>
											! F.editorObjects[ name ].includes(
												m
											)
									)
									.map( ( m ) => `${ name }.${ m }` )
							: [ name ]
					)
					.flat(),
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
			report.check(
				'usage: Pro registers no handle under a Lite name (Lite owns the shared handles)',
				! usage.registersLiteHandles.length,
				usage.registersLiteHandles
			);
			const startup = proStartupList( pro );
			if ( startup ) {
				const covered = Object.values( startup ).flat();
				const uncovered = usage.helperMethods.filter(
					( m ) => ! covered.includes( m )
				);
				const unknown = Object.entries( startup )
					.map( ( [ cls, methods ] ) => {
						const key = Object.keys( F.classes ).find( ( k ) =>
							k.endsWith( '\\' + cls )
						);
						return key
							? methods.filter(
									( m ) => ! F.classes[ key ].includes( m )
							  )
							: [ cls ];
					} )
					.flat();
				report.check(
					"usage: Pro's start-up check covers every Lite helper method Pro calls, and names only frozen ones",
					covered.length > 0 &&
						! uncovered.length &&
						! unknown.length,
					{ startup, uncovered, unknown }
				);
			} else {
				report.note(
					'Pro has no start-up helper check (a Pro from before roadmap R2): start-up list check skipped'
				);
			}
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
