/**
 * Pattern data formats (PL-D37; registry-and-contract.md): metadata is XML (patterns/<slug>/pattern.xml,
 * the file authors edit), compiled into catalog.json; content is JSON (content.json for free
 * sources, content.json.php behind a guard line for premium ones); maps are data/*.json. No PHP
 * file holds pattern content or metadata.
 *
 * Checks, without starting a site:
 * - the files of every Lite and Pro pattern have the right form, and no old PHP data file remains;
 * - the runtime (Mozo_Bna_Library_Registry) and the tools share the same guard line;
 * - on PHP 7.4 and 8.2 (php-wasm), compile.php --check passes for Lite and Pro, so catalog.json and
 *   data/strings.php are up to date with every pattern.xml and content file;
 * - the compiler refuses: a schema error, a DOCTYPE (no entities, so no XXE or entity expansion),
 *   an unknown element, declared blocks that differ from the content, a content file that doesn't
 *   match its pattern, premium content stored as plain JSON, an old PHP data file; and --check
 *   reports a catalog that is out of date.
 * Runtime behaviour (catalog, content route, isolation, direct requests): suites robustness and rest.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const env = require( '../lib/env.cjs' );
const { pluginCopy } = require( '../lib/copies.cjs' );
const { GUARD } = require( '../lib/library-files.cjs' );

const LIB = ( folder ) => path.join( folder, 'includes', 'library' );

function walk( dir, out = [] ) {
	for ( const entry of fs.readdirSync( dir, { withFileTypes: true } ) ) {
		const full = path.join( dir, entry.name );
		if ( entry.isDirectory() ) {
			walk( full, out );
		} else {
			out.push( full );
		}
	}
	return out;
}

function staticChecks( report, folder, source ) {
	const lib = LIB( folder );
	const protect = source !== 'lite';
	const problems = [];
	const patterns = fs
		.readdirSync( path.join( lib, 'patterns' ), { withFileTypes: true } )
		.filter( ( d ) => d.isDirectory() )
		.map( ( d ) => d.name );
	for ( const slug of patterns ) {
		const dir = path.join( lib, 'patterns', slug );
		const files = fs.readdirSync( dir ).sort();
		const want = [
			protect ? 'content.json.php' : 'content.json',
			'pattern.xml',
		];
		if ( JSON.stringify( files ) !== JSON.stringify( want ) ) {
			problems.push( `${ slug }: files ${ files.join( ', ' ) }` );
		}
		if (
			protect &&
			fs.existsSync( path.join( dir, 'content.json.php' ) ) &&
			! fs
				.readFileSync( path.join( dir, 'content.json.php' ), 'utf8' )
				.startsWith( GUARD + '\n' )
		) {
			problems.push(
				`${ slug }: content.json.php without the guard line`
			);
		}
	}
	for ( const file of walk( lib ) ) {
		const rel = path.relative( lib, file );
		if ( /(^|\/)(pattern|content)\.php$/.test( rel ) ) {
			problems.push( `old PHP data file ${ rel }` );
		}
		if (
			rel.startsWith( 'data/' ) &&
			rel.endsWith( '.php' ) &&
			! [ 'data/strings.php', 'data/index.php' ].includes( rel )
		) {
			problems.push( `PHP map ${ rel }` );
		}
	}
	report.check(
		`files: every ${ source } pattern is pattern.xml + ${
			protect ? 'a guarded content.json.php' : 'content.json'
		}; maps are JSON; no old PHP data file (${ patterns.length } patterns)`,
		patterns.length > 0 && ! problems.length,
		problems
	);
}

function mount( php, from, to ) {
	for ( const file of walk( from ) ) {
		const target = path.join( to, path.relative( from, file ) );
		php.mkdir( path.dirname( target ) );
		php.writeFile( target, fs.readFileSync( file ) );
	}
}

async function compile( php, args ) {
	const [ source, library, lite, domain, check ] = args;
	const r = await php.run( {
		code: `<?php define( 'WPMOZO_PL_TOOL_TEST', true ); require '/w/tools/lib/compile-catalog.php'; echo "\\n@@" . json_encode( wpmozo_pl_compile( ${ JSON.stringify(
			source
		) }, ${ JSON.stringify( library ) }, ${ JSON.stringify(
			lite
		) }, ${ JSON.stringify( domain ) }, ${ check ? 'true' : 'false' } ) );`,
	} );
	const at = r.text.lastIndexOf( '\n@@' );
	if ( at < 0 ) {
		return { problems: [ `no result: ${ r.text.slice( 0, 500 ) }` ] };
	}
	return JSON.parse( r.text.slice( at + 3 ) );
}

async function run( { cli, report } ) {
	if ( ! env.PLAYGROUND_CLI ) {
		throw new Error(
			'Set WPMOZO_PLAYGROUND_CLI (its node_modules hold the php-wasm runtimes).'
		);
	}
	const lite = pluginCopy( 'lite', cli.lite );
	const pro = cli.pro === 'none' ? null : pluginCopy( 'pro', cli.pro );

	staticChecks( report, lite, 'lite' );
	if ( pro ) {
		staticChecks( report, pro, 'pro' );
	}
	const registry = fs.readFileSync(
		path.join( LIB( lite ), 'class-mozo-bna-library-registry.php' ),
		'utf8'
	);
	const tools = fs.readFileSync(
		path.join(
			lite,
			'tools',
			'pattern-library',
			'lib',
			'library-files.php'
		),
		'utf8'
	);
	report.check(
		'the runtime and the tools use the same guard line',
		registry.includes( `const PROTECTED_GUARD = '${ GUARD }';` ) &&
			tools.includes( `const WPMOZO_PL_GUARD = '${ GUARD }';` )
	);

	const nodeModules = path.resolve(
		path.dirname( env.PLAYGROUND_CLI ),
		'..'
	);
	const { loadPHPRuntime, PHP } = require(
		path.join( nodeModules, '@php-wasm', 'universal' )
	);
	for ( const version of [ '7.4', '8.2' ] ) {
		const { getPHPLoaderModule } = require(
			path.join(
				nodeModules,
				'@php-wasm',
				`node-${ version.replace( '.', '-' ) }`
			)
		);
		const php = new PHP(
			await loadPHPRuntime( await getPHPLoaderModule( version ) )
		);
		try {
			const toolDir = path.join( lite, 'tools', 'pattern-library' );
			for ( const rel of [
				'compile.php',
				'lib/library-files.php',
				'lib/compile-catalog.php',
				'schema/pattern.xsd',
			] ) {
				php.mkdir( path.dirname( `/w/tools/${ rel }` ) );
				php.writeFile(
					`/w/tools/${ rel }`,
					fs.readFileSync( path.join( toolDir, rel ) )
				);
			}
			mount( php, LIB( lite ), '/w/lite' );
			const lc = await compile( php, [
				'lite',
				'/w/lite/',
				'/w/lite/',
				'wpmozo-blocks-and-addons',
				true,
			] );
			report.check(
				`PHP ${ version }: Lite catalog.json and data/strings.php are up to date (compile.php --check: ${ lc.patterns } patterns, ${ lc.strings } strings)`,
				! ( lc.problems || [] ).length &&
					! ( lc.stale || [] ).length &&
					lc.patterns > 0,
				lc
			);
			if ( pro ) {
				mount( php, LIB( pro ), '/w/pro' );
				const pc = await compile( php, [
					'pro',
					'/w/pro/',
					'/w/lite/',
					'wpmozo-blocks-and-addons-pro',
					true,
				] );
				report.check(
					`PHP ${ version }: Pro catalog.json and data/strings.php are up to date (compile.php --check: ${ pc.patterns } patterns, ${ pc.strings } strings)`,
					! ( pc.problems || [] ).length &&
						! ( pc.stale || [] ).length &&
						pc.patterns > 0,
					pc
				);
			}

			// The compiler refuses broken data. Each case starts from a fresh copy of one source.
			const slug = fs
				.readdirSync( path.join( LIB( lite ), 'patterns' ) )
				.sort()[ 0 ];
			const proSlug = pro
				? fs
						.readdirSync( path.join( LIB( pro ), 'patterns' ) )
						.sort()[ 0 ]
				: null;
			const xmlOf = ( dir, s ) => `${ dir }patterns/${ s }/pattern.xml`;
			const edit = ( file, change ) =>
				php.writeFile( file, change( php.readFileAsText( file ) ) );
			const cases = [
				[
					'a pattern.xml without <title> (schema)',
					'lite',
					( d ) =>
						edit( xmlOf( d, slug ), ( x ) =>
							x.replace( /\s*<title>[^<]*<\/title>/, '' )
						),
					/title/i,
				],
				[
					'an unknown element (schema)',
					'lite',
					( d ) =>
						edit( xmlOf( d, slug ), ( x ) =>
							x.replace(
								'<access>',
								'<price>1</price>\n\t<access>'
							)
						),
					/price/,
				],
				[
					'a DOCTYPE with an external entity (no XXE)',
					'lite',
					( d ) =>
						edit( xmlOf( d, slug ), ( x ) =>
							x
								.replace(
									'<pattern schema="1">',
									'<!DOCTYPE pattern [ <!ENTITY x SYSTEM "file:///etc/passwd"> ]>\n<pattern schema="1">'
								)
								.replace(
									/<title>[^<]*<\/title>/,
									'<title>&x;</title>'
								)
						),
					/DOCTYPE/,
				],
				[
					'declared blocks that differ from the content',
					'lite',
					( d ) =>
						edit( xmlOf( d, slug ), ( x ) =>
							x.replace(
								'<blocks>',
								'<blocks>\n\t\t\t<block>core/quote</block>'
							)
						),
					/must list exactly the blocks/,
				],
				[
					"a content file whose revision doesn't match pattern.xml",
					'lite',
					( d ) =>
						edit( xmlOf( d, slug ), ( x ) =>
							x.replace(
								/<revision>\d+<\/revision>/,
								'<revision>99</revision>'
							)
						),
					/does not match pattern\.xml/,
				],
				[
					'an old PHP data file next to the pattern',
					'lite',
					( d ) =>
						php.writeFile(
							`${ d }patterns/${ slug }/content.php`,
							"<?php return '';"
						),
					/old PHP data file content\.php/,
				],
			];
			if ( pro ) {
				cases.push( [
					'premium content stored as plain content.json',
					'pro',
					( d ) =>
						php.writeFile(
							`${ d }patterns/${ proSlug }/content.json`,
							'{}'
						),
					/must not be stored as plain content\.json/,
				] );
			}
			let n = 0;
			for ( const [ label, source, change, expected ] of cases ) {
				const dir = `/w/case${ ++n }/`;
				mount( php, LIB( source === 'pro' ? pro : lite ), dir );
				change( dir );
				const r = await compile( php, [
					source,
					dir,
					'/w/lite/',
					source === 'pro'
						? 'wpmozo-blocks-and-addons-pro'
						: 'wpmozo-blocks-and-addons',
					true,
				] );
				const text = ( r.problems || [] ).join( '\n' );
				report.check(
					`PHP ${ version }: compile.php refuses ${ label }`,
					expected.test( text ) && ! /root:/.test( text ),
					text.slice( 0, 600 )
				);
			}

			// --check notices a catalog that no longer matches pattern.xml.
			const dir = `/w/case${ ++n }/`;
			mount( php, LIB( lite ), dir );
			edit( xmlOf( dir, slug ), ( x ) =>
				x.replace( /<order>\d+<\/order>/, '<order>777</order>' )
			);
			const stale = await compile( php, [
				'lite',
				dir,
				'/w/lite/',
				'wpmozo-blocks-and-addons',
				true,
			] );
			report.check(
				`PHP ${ version }: compile.php --check reports an out-of-date catalog.json`,
				! ( stale.problems || [] ).length &&
					( stale.stale || [] ).some( ( f ) =>
						f.endsWith( 'catalog.json' )
					),
				stale
			);
		} finally {
			php.exit();
		}
	}
}

module.exports = {
	description:
		'Pattern data formats: XML metadata compiled to catalog.json, JSON content (premium behind a guard), JSON maps',
	run,
};
