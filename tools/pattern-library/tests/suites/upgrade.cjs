/**
 * In-place updates and plugin state changes on one running site (R5; compatibility.md).
 *
 * The site mounts writable folders for Lite and Pro; versions are swapped by replacing their
 * files while WordPress runs, as an update does. A page is saved by the editors of the old
 * versions, then, for each update order (Lite first, Pro first):
 * - the page's stored content and front-end markup stay byte-identical and its blocks valid;
 * - after both updates, a Pro pattern is inserted, saved and reloaded;
 * - licence deactivation, Pro deactivation and reactivation, and Lite deactivation never change
 *   saved content or cause a fatal error.
 *
 * Options: --from-lite=<spec> (default b91a5ec), --from-pro=<spec> (default ef1909d),
 * --mutation=1 (also prove that the validity check catches a saved-output change).
 */
const crypto = require( 'crypto' );
const fs = require( 'fs' );
const path = require( 'path' );
const env = require( '../lib/env.cjs' );
const { pluginCopy, replaceContents } = require( '../lib/copies.cjs' );
const { startSite } = require( '../lib/site.cjs' );
const { Client } = require( '../lib/client.cjs' );
const {
	catalog,
	content,
	pause,
	networkChecks,
} = require( '../lib/setup.cjs' );
const {
	launch,
	newPage,
	openEditor,
	blocksState,
	blockWarnings,
	save,
} = require( '../lib/browser.cjs' );

const FIXTURE = [
	'wpmozo/fancy-heading',
	'wpmozo/star-rating',
	'wpmozo/pricing-table',
	'wpmozo/advanced-counter',
	[ 'wpmozo/timeline', [ 'wpmozo/timeline-item', 'wpmozo/timeline-item' ] ],
];
const KEEP =
	'fancy-heading,star-rating,pricing-table,advanced-counter,timeline,timeline-item';

const mainHash = ( html ) => {
	const main = html.match( /<main[\s\S]*?<\/main>/ );
	return crypto
		.createHash( 'sha256' )
		.update( main ? main[ 0 ] : html )
		.digest( 'hex' )
		.slice( 0, 16 );
};

async function order( name, first, cli, report, browser ) {
	const label = ( text ) => `${ name }: ${ text }`;
	const copies = {
		oldLite: pluginCopy( 'lite', cli[ 'from-lite' ] || 'b91a5ec' ),
		oldPro: pluginCopy( 'pro', cli[ 'from-pro' ] || 'ef1909d' ),
		newLite: pluginCopy( 'lite', cli.lite ),
		newPro: pluginCopy( 'pro', cli.pro ),
	};
	const mount = {
		lite: path.join(
			env.CACHE,
			'mutable',
			`upgrade-${ name }-${ process.pid }`,
			'wpmozo-blocks-and-addons'
		),
		pro: path.join(
			env.CACHE,
			'mutable',
			`upgrade-${ name }-pro-${ process.pid }`,
			'wpmozo-blocks-and-addons-pro'
		),
	};
	replaceContents( copies.oldLite, mount.lite );
	replaceContents( copies.oldPro, mount.pro );
	const site = await startSite( {
		label: `upgrade-${ name }`,
		wp: cli.wp,
		php: cli.php,
		plugins: {
			'wpmozo-blocks-and-addons': mount.lite,
			'wpmozo-blocks-and-addons-pro': mount.pro,
		},
		activate: [ env.LITE_FILE, env.PRO_FILE ],
	} );
	const client = new Client( site.url );
	const { page } = await newPage( browser, site.url );
	const reopen = async ( id ) => {
		await openEditor(
			page,
			site.url,
			`/wp-admin/post.php?post=${ id }&action=edit`
		);
		return {
			blocks: await blocksState( page ),
			warnings: await blockWarnings( page ),
		};
	};
	const stored = async ( id ) =>
		( await client.driver( { wpmozo_test: 'content', id } ) ).content;
	const front = async ( link ) => {
		const r = await client.request( link );
		return {
			status: r.status,
			fatal: /critical error|Fatal error/.test( r.text ),
			hash: mainHash( r.text ),
		};
	};
	try {
		await client.login();
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			keep: KEEP,
			flush: '1',
		} );

		// A page saved by the old editors.
		await openEditor(
			page,
			site.url,
			'/wp-admin/post-new.php?post_type=page'
		);
		await page.evaluate( ( spec ) => {
			const make = ( item ) =>
				Array.isArray( item )
					? wp.blocks.createBlock(
							item[ 0 ],
							{},
							item[ 1 ].map( make )
					  )
					: wp.blocks.createBlock( item );
			wp.data
				.dispatch( 'core/block-editor' )
				.insertBlocks(
					spec
						.filter( ( item ) =>
							wp.blocks.getBlockType(
								Array.isArray( item ) ? item[ 0 ] : item
							)
						)
						.map( make )
				);
		}, FIXTURE );
		await page.waitForTimeout( 6000 );
		const a = await save( page, `Upgrade fixture ${ name }` );
		const aContent = await stored( a.id );
		const aFront = await front( a.link );
		const aOpen = await reopen( a.id );
		report.check(
			label( 'old versions: fixture saved and valid' ),
			aOpen.blocks.count >= 5 &&
				! aOpen.blocks.invalid.length &&
				! aFront.fatal,
			aOpen.blocks
		);

		const steps =
			first === 'lite'
				? [
						[ 'lite', copies.newLite ],
						[ 'pro', copies.newPro ],
				  ]
				: [
						[ 'pro', copies.newPro ],
						[ 'lite', copies.newLite ],
				  ];
		for ( const [ which, copy ] of steps ) {
			replaceContents( copy, mount[ which ] );
			await pause( 2000 );
			await client.login();
			const f = await front( a.link );
			const plugins = await client.request( '/wp-admin/plugins.php' );
			const open = await reopen( a.id );
			const unchanged = ( await stored( a.id ) ) === aContent;
			report.check(
				label(
					`${ which } updated: no fatal; stored content and front-end markup unchanged`
				),
				! f.fatal &&
					f.status === 200 &&
					plugins.status === 200 &&
					! /critical error/.test( plugins.text ) &&
					unchanged &&
					f.hash === aFront.hash &&
					! site.fatals().length,
				{ front: f, unchanged, fatals: site.fatals() }
			);
			report.check(
				label(
					`${ which } updated: no block crashes or invalid blocks in the editor`
				),
				! open.blocks.invalid.length &&
					! open.warnings.some( ( w ) =>
						/encountered an error|unexpected or invalid/i.test( w )
					),
				open
			);
		}
		const both = await reopen( a.id );
		report.check(
			label(
				'both updated: the old page is fully valid, nothing missing'
			),
			! both.blocks.invalid.length &&
				! both.blocks.missing &&
				! both.warnings.length,
			both
		);

		// A Pro pattern inserted after the updates.
		const cat = await catalog( client );
		const proItem = Object.values( cat.patterns ).find(
			( p ) => p.source === 'pro' && p.availability.state === 'available'
		);
		let b = null;
		if ( proItem ) {
			await client.driver( {
				wpmozo_test: 'set',
				keep: [
					...new Set(
						KEEP.split( ',' ).concat(
							proItem.blocks
								.filter( ( n ) => n.startsWith( 'wpmozo/' ) )
								.map( ( n ) => n.slice( 7 ) )
						)
					),
				].join( ',' ),
			} );
			await openEditor(
				page,
				site.url,
				'/wp-admin/post-new.php?post_type=page'
			);
			await page.evaluate( () =>
				wp.data.dispatch( 'wpmozo/library' ).open()
			);
			await page
				.locator(
					`.wpmozo-library button[aria-label="Insert ${ proItem.title }"]`
				)
				.click( { timeout: 60000 } );
			await page.waitForTimeout( 5000 );
			b = await save( page, `Upgrade Pro pattern ${ name }` );
			const bOpen = await reopen( b.id );
			report.check(
				label( `${ proItem.id } inserted, saved and reloaded valid` ),
				bOpen.blocks.count > 1 &&
					! bOpen.blocks.invalid.length &&
					! bOpen.blocks.missing,
				bOpen.blocks
			);
		}
		if ( b ) {
			const bContent = await stored( b.id );
			const bFront = await front( b.link );
			await client.driver( { wpmozo_test: 'set', licence: '' } );
			const locked = await content( client, proItem.id );
			report.check(
				label(
					'licence deactivated: Pro content refused, saved page and front end unchanged'
				),
				locked.status === 403 &&
					! locked.hasContent &&
					( await stored( b.id ) ) === bContent &&
					( await front( b.link ) ).hash === bFront.hash,
				locked.status
			);
			await client.driver( { wpmozo_test: 'set', licence: '1' } );
			await client.driver( {
				wpmozo_test: 'plugin',
				do: 'deactivate',
				file: env.PRO_FILE,
			} );
			const off = await front( b.link );
			const offCat = await catalog( client );
			report.check(
				label(
					'Pro deactivated: no fatal; saved markup unchanged; Pro patterns gone from the catalog'
				),
				! off.fatal &&
					off.hash === bFront.hash &&
					( await stored( b.id ) ) === bContent &&
					! Object.keys( offCat.patterns ).some( ( id ) =>
						id.startsWith( 'pro/' )
					),
				off
			);
			await client.driver( {
				wpmozo_test: 'plugin',
				do: 'activate',
				file: env.PRO_FILE,
			} );
			const back = await reopen( b.id );
			report.check(
				label(
					'Pro reactivated: the page is valid again and unchanged'
				),
				! back.blocks.invalid.length &&
					! back.blocks.missing &&
					( await front( b.link ) ).hash === bFront.hash,
				back.blocks
			);
			await client.driver( {
				wpmozo_test: 'active',
				list: env.PRO_FILE,
			} );
			const noLite = [ await front( a.link ), await front( b.link ) ];
			const plugins = await client.request( '/wp-admin/plugins.php' );
			report.check(
				label(
					'Lite deactivated while Pro is active: no fatal; notice; saved pages still served'
				),
				noLite.every( ( f ) => f.status === 200 && ! f.fatal ) &&
					/requires the/.test( plugins.text ) &&
					! site.fatals().length,
				{ noLite, fatals: site.fatals() }
			);
			await client.driver( {
				wpmozo_test: 'active',
				list: [ env.LITE_FILE, env.PRO_FILE ].join( ',' ),
			} );
		}

		if ( cli.mutation ) {
			const js = path.join(
				mount.lite,
				'build',
				'blocks',
				'fancy-heading',
				'index.js'
			);
			const source = fs.readFileSync( js, 'utf8' );
			const needle = '{className:"wpmozo-bna-fancy-heading-inner"}';
			fs.writeFileSync(
				js,
				source
					.split( needle )
					.join(
						'{className:"wpmozo-bna-fancy-heading-inner wpmozo-mutated"}'
					)
			);
			await pause( 2000 );
			const mutated = await reopen( a.id );
			fs.writeFileSync( js, source );
			report.check(
				label(
					'mutation proof: a changed Fancy Heading save output is reported as an invalid block'
				),
				source.includes( needle ) &&
					mutated.blocks.invalid.includes( 'wpmozo/fancy-heading' ),
				mutated.blocks
			);
		}
		const probe = await client.driver( { wpmozo_test: 'probe' } );
		report.check(
			label( 'no PHP notices, warnings or errors' ),
			! ( probe.debug_log || [] ).length,
			( probe.debug_log || [] ).slice( -5 )
		);
		networkChecks( report, site, `${ name }: ` );
	} finally {
		await page.context().close();
		await site.stop();
	}
}

async function run( { cli, report } ) {
	const browser = await launch();
	try {
		for ( const [ name, first ] of [
			[ 'lite-first', 'lite' ],
			[ 'pro-first', 'pro' ],
		] ) {
			if ( ! cli.only || cli.only.split( ',' ).includes( name ) ) {
				try {
					await order( name, first, cli, report, browser );
				} catch ( error ) {
					report.check(
						`${ name }: ran to the end`,
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
		'In-place updates in both orders, licence and plugin state changes',
	run,
};
