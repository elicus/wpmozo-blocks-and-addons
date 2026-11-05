/**
 * PHP syntax floor (R3): every PHP file of Lite and Pro must parse on the oldest PHP the
 * plugins declare. Static tools miss newer syntax (PHPCompatibility 9.3.5 doesn't flag `match`),
 * so this parses each file on the real PHP runtime (php-wasm, shipped with the Playground CLI)
 * with `token_get_all( …, TOKEN_PARSE )`.
 *
 * Options: --floor=<php> (default 7.4). No site is started.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const env = require( '../lib/env.cjs' );
const { pluginCopy } = require( '../lib/copies.cjs' );

const SKIP = new Set( [ 'node_modules', 'build', 'vendor', '.git' ] );

function phpFiles( dir, out = [] ) {
	for ( const entry of fs.readdirSync( dir, { withFileTypes: true } ) ) {
		if ( SKIP.has( entry.name ) ) {
			continue;
		}
		const full = path.join( dir, entry.name );
		if ( entry.isDirectory() ) {
			phpFiles( full, out );
		} else if ( entry.name.endsWith( '.php' ) ) {
			out.push( full );
		}
	}
	return out;
}

async function run( { cli, report } ) {
	const floor = cli.floor || '7.4';
	if ( ! env.PLAYGROUND_CLI ) {
		throw new Error(
			'Set WPMOZO_PLAYGROUND_CLI (its node_modules hold the php-wasm runtimes).'
		);
	}
	// WPMOZO_PLAYGROUND_CLI is node_modules/.bin/wp-playground-cli; php-wasm sits beside it.
	const nodeModules = path.resolve(
		path.dirname( env.PLAYGROUND_CLI ),
		'..'
	);
	if (
		! fs.existsSync( path.join( nodeModules, '@php-wasm', 'universal' ) )
	) {
		throw new Error( `No @php-wasm packages in ${ nodeModules }.` );
	}
	const { loadPHPRuntime, PHP } = require(
		path.join( nodeModules, '@php-wasm', 'universal' )
	);
	const { getPHPLoaderModule } = require(
		path.join(
			nodeModules,
			'@php-wasm',
			`node-${ floor.replace( '.', '-' ) }`
		)
	);
	const php = new PHP(
		await loadPHPRuntime( await getPHPLoaderModule( floor ) )
	);
	php.mkdir( '/check' );
	report.context.floor = floor;
	for ( const which of [ 'lite', 'pro' ] ) {
		const spec = cli[ which ];
		if ( spec === 'none' ) {
			continue;
		}
		// Source files only: build/ holds copies of render.php files from src/.
		const folder = pluginCopy( which, spec );
		const failures = [];
		const files = phpFiles( folder ).concat(
			phpFiles( path.join( folder, 'build' ) ).filter( ( f ) =>
				f.endsWith( 'blocks-manifest.php' )
			)
		);
		for ( const file of files ) {
			php.writeFile( '/check/f.php', fs.readFileSync( file, 'utf8' ) );
			const result = await php.run( {
				code: "<?php try { token_get_all( file_get_contents( '/check/f.php' ), TOKEN_PARSE ); echo 'OK'; } catch ( ParseError $e ) { echo $e->getMessage() . ' (line ' . $e->getLine() . ')'; }",
			} );
			const answer = new TextDecoder().decode( result.bytes );
			if ( answer !== 'OK' ) {
				failures.push(
					`${ path.relative( folder, file ) }: ${ answer }`
				);
			}
		}
		report.check(
			`${ which }: all ${ files.length } PHP files parse on PHP ${ floor }`,
			files.length > 0 && ! failures.length,
			failures
		);
	}
}

module.exports = {
	description: 'Every PHP file parses on the declared minimum PHP (R3)',
	run,
};
