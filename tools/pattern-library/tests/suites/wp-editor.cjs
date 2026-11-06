/**
 * Editor compatibility with current and future WordPress (R6; known issues KI-05, R-02, R-03).
 *
 * In the post editor, with and without the canvas iframe (a block on API version 2 turns it off on
 * WordPress 6.8; a classic meta box no longer does):
 * - no WPMozo stylesheet is "added to the iframe incorrectly" (WordPress copies such styles today
 *   but warns that it may stop);
 * - Lite's editor stylesheet is present exactly once in the editor document and once in the
 *   canvas, and never on the front end;
 * - every `__experimental` / `__unstable` export that Lite and Pro import from
 *   `@wordpress/components` or `@wordpress/block-editor` still resolves; which of them have a
 *   stable name is reported;
 * - a Lite and a Pro block mount, save and reload without errors.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const { standardSite, networkChecks } = require( '../lib/setup.cjs' );
const {
	launch,
	newPage,
	openEditor,
	blocksState,
	blockWarnings,
	save,
} = require( '../lib/browser.cjs' );

const STYLE_ID = 'wpmozo-blocks-and-addons-editor-style-css';

/**
 * `__experimental*` and `__unstable*` names imported from the two packages, by package.
 *
 * @param {string[]} folders Plugin folders.
 * @return {Object} { components, blockEditor }.
 */
function experimentalImports( folders ) {
	const found = { components: new Set(), blockEditor: new Set() };
	const walk = ( dir ) => {
		for ( const entry of fs.existsSync( dir )
			? fs.readdirSync( dir, { withFileTypes: true } )
			: [] ) {
			const full = path.join( dir, entry.name );
			if ( entry.isDirectory() ) {
				walk( full );
			} else if ( entry.name.endsWith( '.js' ) ) {
				const source = fs.readFileSync( full, 'utf8' );
				for ( const m of source.matchAll(
					/import\s*\{([^}]*)\}\s*from\s*['"]@wordpress\/(components|block-editor)['"]/g
				) ) {
					for ( const part of m[ 1 ].split( ',' ) ) {
						const name = part
							.trim()
							.split( /\s+as\s+/ )[ 0 ]
							.trim();
						if ( /^__(experimental|unstable)/.test( name ) ) {
							found[
								m[ 2 ] === 'components'
									? 'components'
									: 'blockEditor'
							].add( name );
						}
					}
				}
			}
		}
	};
	folders.forEach( ( folder ) => walk( path.join( folder, 'src' ) ) );
	return {
		components: [ ...found.components ].sort(),
		blockEditor: [ ...found.blockEditor ].sort(),
	};
}

async function run( { cli, report } ) {
	const { site, client, lite, pro } = await standardSite( {
		label: 'wp-editor',
		cli,
	} );
	report.context.site = site.logs;
	const browser = await launch();
	try {
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			keep: 'fancy-heading,advanced-counter',
			flush: '1',
		} );
		const imports = experimentalImports( [ lite, pro ].filter( Boolean ) );
		// A classic meta box no longer turns the canvas iframe off on WordPress 6.8 and 7.1; a block on
		// API version 2 does where WordPress still supports editing without the iframe.
		for ( const [ label, query ] of [
			[ 'default editor', '' ],
			[ 'editor with a classic meta box', '&wpmozo_test_metabox=1' ],
			[ 'editor with an API version 2 block', '&wpmozo_test_api2=1' ],
		] ) {
			const {
				page,
				errors,
				console: messages,
			} = await newPage( browser, site.url );
			await openEditor(
				page,
				site.url,
				`/wp-admin/post-new.php?post_type=page${ query }`
			);
			const placement = await page.evaluate( ( id ) => {
				const frame = document.querySelector(
					'iframe[name="editor-canvas"]'
				);
				const canvas = frame ? frame.contentDocument : document;
				const editPost = wp.data.select( 'core/edit-post' );
				return {
					iframe: !! frame,
					outer: document.querySelectorAll( `#${ id }` ).length,
					canvas: frame
						? canvas.querySelectorAll( `#${ id }` ).length
						: null,
					metaBoxes:
						editPost && editPost.getActiveMetaBoxLocations
							? editPost.getActiveMetaBoxLocations()
							: null,
					apiTwo: !! wp.blocks.getBlockType( 'wpmozo-test/api-two' ),
				};
			}, STYLE_ID );
			report.context[ label ] = placement;
			if ( query && placement.iframe ) {
				report.note(
					`${ label }: WordPress ${
						cli.wp
					} kept the canvas iframe (meta boxes ${ JSON.stringify(
						placement.metaBoxes
					) }, API version 2 block registered: ${ placement.apiTwo })`
				);
			}
			report.check(
				`${ label }: Lite's editor stylesheet once in the editor document${
					placement.iframe ? ' and once in the canvas iframe' : ''
				}`,
				placement.outer === 1 &&
					( ! placement.iframe || placement.canvas === 1 ),
				placement
			);
			const wrong = messages.filter(
				( m ) =>
					/added to the iframe incorrectly/.test( m ) &&
					/wpmozo/i.test( m )
			);
			report.check(
				`${ label }: no WPMozo stylesheet "added to the iframe incorrectly"`,
				! wrong.length,
				wrong
			);
			const names = await page.evaluate(
				( { components, blockEditor } ) => {
					const look = ( pkg, list ) =>
						list.map( ( name ) => {
							const stable = name.replace(
								/^__(experimental|unstable)/,
								''
							);
							return {
								name,
								exists: typeof pkg[ name ] !== 'undefined',
								stable:
									typeof pkg[ stable ] !== 'undefined'
										? stable
										: null,
								same: pkg[ stable ] === pkg[ name ],
							};
						} );
					return [
						...look( wp.components, components ),
						...look( wp.blockEditor, blockEditor ),
					];
				},
				imports
			);
			const gone = names.filter( ( n ) => ! n.exists );
			report.check(
				`${ label }: all ${ names.length } experimental WordPress exports Lite and Pro import still exist`,
				! gone.length,
				gone
			);
			if ( label === 'default editor' ) {
				report.context.experimental = names;
				report.note(
					`stable names available: ${
						names
							.filter( ( n ) => n.stable )
							.map(
								( n ) =>
									`${ n.name } → ${ n.stable }${
										n.same ? '' : ' (different)'
									}`
							)
							.join( ', ' ) || 'none'
					}`
				);
				const registered = await page.evaluate( () =>
					[
						'wpmozo/fancy-heading',
						'wpmozo/advanced-counter',
					].filter( ( n ) => wp.blocks.getBlockType( n ) )
				);
				await page.evaluate(
					( list ) =>
						wp.data
							.dispatch( 'core/block-editor' )
							.insertBlocks(
								list.map( ( n ) => wp.blocks.createBlock( n ) )
							),
					registered
				);
				await page.waitForTimeout( 5000 );
				const warnings = await blockWarnings( page );
				const saved = await save( page, 'WP editor check' );
				await openEditor(
					page,
					site.url,
					`/wp-admin/post.php?post=${ saved.id }&action=edit${ query }`
				);
				const after = await blocksState( page );
				report.check(
					'a Lite and a Pro block mount, save and reload valid',
					registered.length === 2 &&
						! warnings.length &&
						after.count === 2 &&
						! after.invalid.length,
					{ registered, warnings, after }
				);
				const front = await client.request( saved.link );
				report.check(
					"front end: Lite's editor stylesheet is not loaded",
					front.status === 200 && ! front.text.includes( STYLE_ID ),
					front.status
				);
			}
			report.check(
				`${ label }: no page errors`,
				! errors.length,
				errors
			);
			await page.context().close();
		}
		const probe = await client.driver( { wpmozo_test: 'probe' } );
		report.check(
			'no PHP notices, warnings or errors',
			! ( probe.debug_log || [] ).length,
			( probe.debug_log || [] ).slice( -5 )
		);
		networkChecks( report, site );
	} finally {
		await browser.close();
		await site.stop();
	}
}

module.exports = {
	description:
		'Editor styles in iframe and non-iframe editors; experimental WordPress APIs (R6)',
	run,
};
