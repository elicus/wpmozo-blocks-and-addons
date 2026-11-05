#!/usr/bin/env node
/**
 * Pattern Library regression suites (development tool; not shipped). See README.md.
 *
 * Usage:
 *   node tools/pattern-library/tests/run.cjs <suite> [<suite> …] [--lite=<spec>] [--pro=<spec>]
 *       [--wp=<version>] [--php=<version>]
 *
 * <spec>: "worktree" (default), a commit, branch or tag, an absolute plugin folder, or "none".
 * Exit code 1 when any check fails.
 */
/* eslint-disable no-console -- A command-line tool reports on the console. */
const fs = require( 'fs' );
const path = require( 'path' );
const env = require( './lib/env.cjs' );
const { Report } = require( './lib/report.cjs' );
const { cleanup } = require( './lib/copies.cjs' );

const args = process.argv.slice( 2 );
const options = Object.fromEntries(
	args
		.filter( ( a ) => a.startsWith( '--' ) )
		.map( ( a ) => {
			const [ key, ...value ] = a.slice( 2 ).split( '=' );
			return [ key, value.join( '=' ) ];
		} )
);
const cli = {
	lite: options.lite || 'worktree',
	pro: options.pro || 'worktree',
	wp: options.wp || '7.1.3',
	php: options.php || '8.2',
	...options,
};
const available = fs
	.readdirSync( path.join( __dirname, 'suites' ) )
	.filter( ( f ) => f.endsWith( '.cjs' ) )
	.map( ( f ) => f.replace( /\.cjs$/, '' ) );
const suites = args.filter( ( a ) => ! a.startsWith( '--' ) );
if ( ! suites.length || suites.some( ( s ) => ! available.includes( s ) ) ) {
	console.error(
		`Usage: node run.cjs <suite> … [--lite=…] [--pro=…] [--wp=…] [--php=…]\nSuites: ${ available.join(
			', '
		) }`
	);
	process.exit( 2 );
}

( async () => {
	let failed = 0;
	for ( const name of suites ) {
		const suite = require( `./suites/${ name }.cjs` );
		const report = new Report( name );
		report.context = { cli, started: new Date().toISOString() };
		console.log(
			`== ${ name }: ${ suite.description } (Lite ${ cli.lite }, Pro ${ cli.pro }, WordPress ${ cli.wp }, PHP ${ cli.php })`
		);
		try {
			await suite.run( { cli, report } );
		} catch ( error ) {
			report.check(
				`${ name }: suite ran to the end`,
				false,
				String( error.stack || error ).slice( 0, 2000 )
			);
		}
		report.write( path.join( env.CACHE, 'results' ) );
		failed += report.failed.length;
	}
	cleanup();
	process.exit( failed ? 1 : 0 );
} )();
