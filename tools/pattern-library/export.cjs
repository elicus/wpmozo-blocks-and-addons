#!/usr/bin/env node
/**
 * Export a designed page as Pattern Library markup (Pattern Library authoring tool).
 *
 * Usage: node tools/pattern-library/export.cjs <site-url> <post-id> <output.html> [--storage-state=<file>]
 *
 * Opens the post in the block editor of a development site and serializes its blocks the way the
 * library expects them:
 * - every block is rebuilt with createBlock(), so the markup is what the installed blocks save now;
 * - attributes derived from the block's editor ID are removed: `ID` (the WPMozo CSS scope) and
 *   `wrapStyle` (Lite's wrapper CSS, which contains the ID). The importer sets a fresh ID on insert
 *   and the block's editor recalculates wrapStyle from it;
 * - the export fails if any editor client ID is still present anywhere in the markup.
 *
 * Then run build-content.php to replace site URLs and demo values with library tokens.
 * Export on the minimum supported WordPress version: newer versions migrate older block markup,
 * older versions can't read newer markup (docs/pattern-library/pattern-authoring.md).
 *
 * Network: the browser can reach only the site's own host. Authentication: the site must log the
 * browser in (the offline test harness does), or pass a Playwright storage state with a logged-in
 * session. Not shipped: the release zip contains only build/, includes/, the main file and the readme.
 */
/* eslint-disable no-console -- A command-line tool reports on the console. */
const fs = require( 'fs' );
const path = require( 'path' );
const { chromium } = require(
	path.join( __dirname, '../../node_modules/playwright' )
);

const args = process.argv.slice( 2 );
const options = Object.fromEntries(
	args
		.filter( ( a ) => a.startsWith( '--' ) )
		.map( ( a ) => a.slice( 2 ).split( '=' ) )
);
const [ site, postId, output ] = args.filter( ( a ) => ! a.startsWith( '--' ) );
if ( ! site || ! /^\d+$/.test( postId || '' ) || ! output ) {
	console.error(
		'Usage: node export.cjs <site-url> <post-id> <output.html> [--storage-state=<file>]'
	);
	process.exit( 2 );
}

( async () => {
	const origin = new URL( site ).origin;
	const host = new URL( site ).hostname;
	const browser = await chromium.launch( {
		channel: 'chrome',
		headless: true,
		// Only the development site resolves; nothing else can be contacted.
		args: [ `--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE ${ host }` ],
	} );
	const context = await browser.newContext(
		options[ 'storage-state' ]
			? { storageState: options[ 'storage-state' ] }
			: {}
	);
	const page = await context.newPage();
	await page.goto( origin + '/' );
	await page.goto(
		`${ origin }/wp-admin/post.php?post=${ postId }&action=edit`
	);
	await page.waitForFunction(
		() =>
			window.wp &&
			wp.blocks &&
			wp.data &&
			wp.blocks.getBlockTypes().length > 0 &&
			wp.data.select( 'core/block-editor' ).getBlocks().length > 0,
		null,
		{ timeout: 120000 }
	);
	// Let blocks finish their on-mount updates before reading them.
	await page.waitForTimeout( 3000 );

	const result = await page.evaluate( () => {
		const invalid = [];
		const strip = ( block ) => {
			if ( block.isValid === false ) {
				invalid.push( block.name );
			}
			const { ID, wrapStyle, ...attributes } = block.attributes; // eslint-disable-line no-unused-vars
			return wp.blocks.createBlock(
				block.name,
				attributes,
				block.innerBlocks.map( strip )
			);
		};
		const blocks = wp.data
			.select( 'core/block-editor' )
			.getBlocks()
			.map( strip );
		return { markup: wp.blocks.serialize( blocks ), invalid };
	} );
	await browser.close();

	const leftover = result.markup.match(
		/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
	);
	if ( leftover ) {
		const at = result.markup.indexOf( leftover[ 0 ] );
		console.error(
			'An editor client ID is still in the markup (an attribute derived from it?): …' +
				result.markup.slice( Math.max( 0, at - 120 ), at + 40 ) +
				'…'
		);
		process.exit( 1 );
	}
	if ( result.invalid.length ) {
		console.error(
			'Invalid blocks in the source post, fix them first: ' +
				result.invalid.join( ', ' )
		);
		process.exit( 1 );
	}
	fs.mkdirSync( path.dirname( path.resolve( output ) ), { recursive: true } );
	fs.writeFileSync( output, result.markup + '\n' );
	console.log(
		JSON.stringify( { output, bytes: Buffer.byteLength( result.markup ) } )
	);
} )().catch( ( error ) => {
	console.error( error.message );
	process.exit( 1 );
} );
