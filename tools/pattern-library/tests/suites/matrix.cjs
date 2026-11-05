/**
 * Lite/Pro version combinations (R5; compatibility.md support policy). One site per
 * combination, each with its expected outcome:
 * - supported combinations work: catalog, library card text, Lite and Pro blocks mount, save and
 *   reload valid, front end, no PHP log entries;
 * - unsupported ones fail safely: an actionable notice, no fatal error, no block crash in the
 *   editor (roadmap R2).
 *
 * Options: --older-lite=<spec> (default b91a5ec, before the contract), --oldest-lite=<spec>
 * (default release/1.8.0), --older-pro=<spec> (default ef1909d, no pattern source),
 * --only=<name,…>.
 */
const env = require( '../lib/env.cjs' );
const fs = require( 'fs' );
const path = require( 'path' );
const { pluginCopy, mutableCopy } = require( '../lib/copies.cjs' );
const { startSite } = require( '../lib/site.cjs' );
const { Client } = require( '../lib/client.cjs' );
const { catalog, networkChecks } = require( '../lib/setup.cjs' );
const {
	launch,
	newPage,
	openEditor,
	blocksState,
	blockWarnings,
	editorNotices,
	save,
} = require( '../lib/browser.cjs' );

const CRASH = /encountered an error/i;
const LITE_BLOCK = 'wpmozo/fancy-heading';
const PRO_BLOCK = 'wpmozo/advanced-counter';

function specs( cli ) {
	const olderLite = cli[ 'older-lite' ] || 'b91a5ec';
	const oldestLite = cli[ 'oldest-lite' ] || 'release/1.8.0';
	const olderPro = cli[ 'older-pro' ] || 'ef1909d';
	return [
		{
			name: 'current',
			lite: cli.lite,
			pro: cli.pro,
			active: [ 'lite', 'pro' ],
			expect: {
				library: true,
				proSource: true,
				liteBlocks: true,
				proBlocks: true,
				card: null,
			},
		},
		{
			name: 'lite-only',
			lite: cli.lite,
			pro: null,
			active: [ 'lite' ],
			expect: {
				library: true,
				proSource: false,
				liteBlocks: true,
				card: /More designs in WPMozo Pro/,
			},
		},
		{
			name: 'pro-installed-inactive',
			lite: cli.lite,
			pro: cli.pro,
			active: [ 'lite' ],
			expect: {
				library: true,
				proSource: false,
				liteBlocks: true,
				card: /Activate WPMozo Pro/,
			},
		},
		{
			name: 'older-pro',
			lite: cli.lite,
			pro: olderPro,
			active: [ 'lite', 'pro' ],
			expect: {
				library: true,
				proSource: false,
				liteBlocks: true,
				proBlocks: true,
				card: /Update WPMozo Pro/,
			},
		},
		{
			name: 'lite-before-contract',
			lite: olderLite,
			pro: cli.pro,
			active: [ 'lite', 'pro' ],
			expect: {
				library: false,
				liteBlocks: true,
				noProCrash: true,
				notice: /WPMozo Blocks and Addons/,
				editorNotice: true,
			},
		},
		{
			name: 'lite-1.8.0',
			lite: oldestLite,
			pro: cli.pro,
			active: [ 'lite', 'pro' ],
			expect: {
				library: false,
				noProCrash: true,
				notice: /WPMozo Blocks and Addons/,
				editorNotice: true,
			},
		},
		{
			name: 'pro-lite-inactive',
			lite: cli.lite,
			pro: cli.pro,
			active: [ 'pro' ],
			expect: {
				library: false,
				notice: /requires the .* to be activated/,
			},
		},
		{
			name: 'pro-lite-missing',
			lite: null,
			pro: cli.pro,
			active: [ 'pro' ],
			expect: {
				library: false,
				notice: /requires the .* to be installed/,
			},
		},
		{
			// Pro installed under another folder name, inactive: the library still recognises it.
			name: 'pro-renamed-inactive',
			lite: cli.lite,
			pro: cli.pro,
			proFolder: 'wpmozo-pro-renamed',
			active: [ 'lite' ],
			expect: {
				library: true,
				proSource: false,
				liteBlocks: true,
				card: /Activate WPMozo Pro/,
			},
		},
		{
			// A Lite without a helper method Pro relies on (a future refactor): Pro must stay off safely.
			name: 'lite-without-helper',
			lite: cli.lite,
			mutateLite: ( folder ) => {
				const file = path.join(
					folder,
					'includes',
					'helpers',
					'class-mozo-bna-block-helpers.php'
				);
				const source = fs.readFileSync( file, 'utf8' );
				fs.writeFileSync(
					file,
					source.replace(
						'function get_margin_style(',
						'function get_margin_style_renamed('
					)
				);
				return source.includes( 'function get_margin_style(' );
			},
			pro: cli.pro,
			active: [ 'lite', 'pro' ],
			expect: {
				library: true,
				proSource: false,
				liteBlocks: false,
				notice: /is turned off because the active/,
			},
		},
	];
}

async function combination( spec, cli, report, browser ) {
	const label = ( text ) => `${ spec.name }: ${ text }`;
	let lite = spec.lite && pluginCopy( 'lite', spec.lite );
	if ( lite && spec.mutateLite ) {
		lite = mutableCopy( lite, `matrix-${ spec.name }` );
		report.check(
			label( 'test set-up: the Lite copy was changed' ),
			spec.mutateLite( lite )
		);
	}
	const pro = spec.pro && pluginCopy( 'pro', spec.pro );
	const plugins = {};
	if ( lite ) {
		plugins[ 'wpmozo-blocks-and-addons' ] = lite;
	}
	if ( pro ) {
		plugins[ spec.proFolder || 'wpmozo-blocks-and-addons-pro' ] = pro;
	}
	// Plugins are activated in the normal order; states the Plugins screen prevents are then set directly.
	const site = await startSite( {
		label: `matrix-${ spec.name }`,
		wp: cli.wp,
		php: cli.php,
		plugins,
		activate: [
			lite && env.LITE_FILE,
			pro &&
				spec.active.includes( 'pro' ) &&
				spec.active.includes( 'lite' ) &&
				env.PRO_FILE,
		].filter( Boolean ),
	} );
	try {
		const client = new Client( site.url );
		await client.login();
		const active = spec.active.map( ( p ) =>
			p === 'lite' ? env.LITE_FILE : env.PRO_FILE
		);
		await client.driver( {
			wpmozo_test: 'active',
			list: active.join( ',' ),
		} );
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			keep: 'fancy-heading,star-rating,pricing-table,advanced-counter,timeline,timeline-item',
			flush: '1',
		} );

		const pages = {};
		for ( const [ key, url ] of Object.entries( {
			front: '/',
			plugins: '/wp-admin/plugins.php',
			editor: '/wp-admin/post-new.php',
		} ) ) {
			pages[ key ] = await client.request( url );
		}
		const fatal = Object.entries( pages ).filter(
			( [ , r ] ) =>
				r.status >= 500 || /critical error|Fatal error/.test( r.text )
		);
		report.check(
			label(
				'front end, Plugins screen and editor load without a fatal error'
			),
			! fatal.length && ! site.fatals().length,
			[
				fatal.map( ( [ k, r ] ) => `${ k } ${ r.status }` ),
				site.fatals(),
			]
		);
		const notices = (
			pages.plugins.text.match(
				/<div[^>]*class="[^"]*\bnotice\b[^"]*"[^>]*>[\s\S]*?<\/div>/g
			) || []
		).map( ( n ) =>
			n
				.replace( /<[^>]+>/g, ' ' )
				.replace( /\s+/g, ' ' )
				.trim()
		);
		if ( spec.expect.notice ) {
			report.check(
				label( 'the Plugins screen shows an actionable notice' ),
				notices.some( ( n ) => spec.expect.notice.test( n ) ),
				notices
			);
		}

		const cat = await catalog( client );
		if ( spec.expect.library ) {
			const sources = ( cat.data.sources || [] ).map( ( s ) => s.id );
			report.check(
				label(
					`library: catalog 200 with ${
						spec.expect.proSource ? 'free and Pro' : 'only free'
					} patterns`
				),
				cat.status === 200 &&
					sources.includes( 'lite' ) &&
					sources.includes( 'pro' ) === spec.expect.proSource,
				sources
			);
		} else {
			report.check(
				label( 'library: not offered (no routes), no error' ),
				cat.status === 404,
				cat.status
			);
		}

		const {
			page,
			errors,
			console: messages,
		} = await newPage( browser, site.url );
		await openEditor(
			page,
			site.url,
			'/wp-admin/post-new.php?post_type=page'
		);
		const state = await page.evaluate(
			( names ) => ( {
				registered: names.filter(
					( n ) => !! wp.blocks.getBlockType( n )
				),
				library: !! wp.data.select( 'wpmozo/library' ),
			} ),
			[ LITE_BLOCK, PRO_BLOCK ]
		);
		await page.evaluate(
			( names ) =>
				wp.data
					.dispatch( 'core/block-editor' )
					.insertBlocks(
						names.map( ( n ) => wp.blocks.createBlock( n ) )
					),
			state.registered
		);
		await page.waitForTimeout( 5000 );
		const warnings = await blockWarnings( page );
		if ( spec.expect.liteBlocks ) {
			report.check(
				label( 'a Lite block mounts in the editor' ),
				state.registered.includes( LITE_BLOCK ) &&
					! warnings.some( ( w ) => CRASH.test( w ) ),
				[ state.registered, warnings ]
			);
		}
		if ( spec.expect.proBlocks ) {
			report.check(
				label( 'a Pro block mounts in the editor' ),
				state.registered.includes( PRO_BLOCK ) &&
					! warnings.some( ( w ) => CRASH.test( w ) ),
				[ state.registered, warnings ]
			);
		}
		if ( spec.expect.noProCrash ) {
			report.check(
				label( 'no block crashes in the editor' ),
				! warnings.some( ( w ) => CRASH.test( w ) ) && ! errors.length,
				[
					// The blocks inserted: a block not registered in the editor can't crash.
					state.registered,
					warnings,
					errors,
					messages.filter( ( m ) => /TypeError/.test( m ) ),
				]
			);
		}
		if ( spec.expect.editorNotice ) {
			const shown = await editorNotices( page );
			report.check(
				label(
					'the editor explains that WPMozo Blocks and Addons must be updated'
				),
				shown.some( ( n ) => /WPMozo Blocks and Addons/.test( n ) ),
				shown
			);
		}
		if ( spec.expect.library && spec.expect.card !== undefined ) {
			await page.evaluate( () =>
				wp.data.dispatch( 'wpmozo/library' ).open()
			);
			await page.waitForSelector( '.wpmozo-library', { timeout: 60000 } );
			await page.waitForTimeout( 5000 );
			const card = await page.evaluate( () => {
				const el = document.querySelector( '.wpmozo-library__upsell' );
				return el ? el.innerText.replace( /\s+/g, ' ' ) : null;
			} );
			report.check(
				label(
					`library card: ${
						spec.expect.card
							? spec.expect.card.source
							: 'none (Pro patterns present)'
					}`
				),
				spec.expect.card
					? spec.expect.card.test( card || '' )
					: card === null,
				card
			);
			await page.keyboard.press( 'Escape' );
		}
		if ( spec.expect.liteBlocks || spec.expect.proBlocks ) {
			const saved = await save( page, `Matrix ${ spec.name }` );
			await openEditor(
				page,
				site.url,
				`/wp-admin/post.php?post=${ saved.id }&action=edit`
			);
			const after = await blocksState( page );
			report.check(
				label( 'save and reload: every block valid' ),
				after.count >= state.registered.length &&
					! after.invalid.length &&
					! after.missing,
				after
			);
			const front = await client.request( saved.link );
			report.check(
				label( 'the saved page renders on the front end' ),
				front.status === 200 && ! /critical error/.test( front.text ),
				front.status
			);
		}
		const relevant = errors.concat(
			messages.filter(
				( m ) => /^error/.test( m ) && /wpmozo/i.test( m )
			)
		);
		if ( ! spec.expect.noProCrash ) {
			report.check(
				label(
					'no page errors or WPMozo console errors in the editor'
				),
				! relevant.length,
				relevant
			);
		}
		await page.context().close();
		const probe = await client.driver( { wpmozo_test: 'probe' } );
		report.check(
			label( 'no PHP notices, warnings or errors' ),
			! ( probe.debug_log || [] ).length,
			( probe.debug_log || [] ).slice( -5 )
		);
		networkChecks( report, site, `${ spec.name }: ` );
	} finally {
		await site.stop();
	}
}

async function run( { cli, report } ) {
	const only = cli.only ? cli.only.split( ',' ) : null;
	const browser = await launch();
	try {
		for ( const spec of specs( cli ) ) {
			if ( ! only || only.includes( spec.name ) ) {
				try {
					await combination( spec, cli, report, browser );
				} catch ( error ) {
					report.check(
						`${ spec.name }: ran to the end`,
						false,
						String( error.stack || error ).slice( 0, 1500 )
					);
				}
			}
		}
	} finally {
		await browser.close();
	}
}

module.exports = {
	description:
		'Lite/Pro version combinations: supported ones work, the others fail safely',
	run,
};
