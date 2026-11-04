#!/usr/bin/env node
/**
 * Render an SVG illustration source to a WebP content image (Pattern Library authoring tool).
 *
 * Usage: node tools/pattern-library/render-art.cjs <source.svg> <output.webp> [quality]
 *
 * - Renders at the SVG's own width and height, with a transparent background, in the installed
 *   Google Chrome through Playwright (from this plugin's node_modules). Nothing is downloaded.
 * - Encodes with `cwebp` (libwebp; on macOS `brew install webp`).
 * - Output names follow `media/<key>.<revision>.webp` (docs/pattern-library/pattern-authoring.md).
 *
 * Not shipped: the release zip contains only build/, includes/, the main PHP file and the readme.
 */
/* eslint-disable no-console -- A command-line tool reports on the console. */
const fs = require( 'fs' );
const os = require( 'os' );
const path = require( 'path' );
const { execFileSync } = require( 'child_process' );
const { chromium } = require(
	path.join( __dirname, '../../node_modules/playwright' )
);

const [ source, output, quality = '82' ] = process.argv.slice( 2 );
if ( ! source || ! output || ! /\.webp$/.test( output ) ) {
	console.error(
		'Usage: node render-art.cjs <source.svg> <output.webp> [quality]'
	);
	process.exit( 2 );
}

( async () => {
	const svg = fs.readFileSync( source, 'utf8' );
	const width = Number(
		( svg.match( /<svg[^>]*\bwidth="(\d+)"/ ) || [] )[ 1 ]
	);
	const height = Number(
		( svg.match( /<svg[^>]*\bheight="(\d+)"/ ) || [] )[ 1 ]
	);
	if ( ! width || ! height ) {
		throw new Error( 'The SVG needs numeric width and height attributes.' );
	}

	const browser = await chromium.launch( {
		channel: 'chrome',
		headless: true,
	} );
	const page = await browser.newPage( {
		viewport: { width, height },
		deviceScaleFactor: 1,
	} );
	// The source must be self-contained: block every network request.
	await page.route( '**/*', ( route ) =>
		route.request().url().startsWith( 'data:' )
			? route.continue()
			: route.abort()
	);
	await page.setContent(
		`<!doctype html><html><head><style>html,body{margin:0;background:transparent}svg{display:block}</style></head><body>${ svg }</body></html>`
	);
	const png = path.join(
		fs.mkdtempSync( path.join( os.tmpdir(), 'wpmozo-art-' ) ),
		'art.png'
	);
	await page.screenshot( {
		path: png,
		omitBackground: true,
		clip: { x: 0, y: 0, width, height },
	} );
	await browser.close();

	fs.mkdirSync( path.dirname( output ), { recursive: true } );
	execFileSync( 'cwebp', [
		'-quiet',
		'-q',
		String( quality ),
		'-m',
		'6',
		'-alpha_q',
		'90',
		png,
		'-o',
		output,
	] );
	const bytes = fs.statSync( output ).size;
	console.log( JSON.stringify( { output, width, height, bytes } ) );
} )().catch( ( error ) => {
	console.error( error.message );
	process.exit( 1 );
} );
