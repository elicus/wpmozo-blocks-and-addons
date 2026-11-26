<?php
/**
 * Compile a source's pattern metadata (Pattern Library authoring tool, CLI only, not shipped).
 *
 * Usage:
 *   php tools/pattern-library/compile.php --source=lite|pro --library=<source includes/library/>
 *       [--lite-library=<Lite includes/library/>] [--textdomain=<domain>] [--check]
 *
 * Reads every patterns/<slug>/pattern.xml (the file authors edit), checks it against
 * schema/pattern.xsd and against its content file, and writes:
 * - catalog.json: the runtime index the library reads (WordPress never parses XML);
 * - data/strings.php: the translatable strings as __() calls, for translation tools only (never loaded).
 *
 * Checks, besides the schema: the slug matches its folder; access matches the source (Lite is
 * free, any other source premium); the category and tags exist in Lite's maps; the images exist;
 * the content file has the right form (content.json for free sources, content.json.php behind the
 * guard line for premium ones, never both) and matches the pattern's id and revision; the blocks
 * declared in <requires><blocks> are exactly the blocks the content uses; no old PHP data file
 * (pattern.php, content.php, data/*.php maps) remains.
 *
 * --check writes nothing and fails when catalog.json or data/strings.php is out of date.
 * Exit codes: 0 done, 1 problems found (listed on stderr), 2 usage error.
 *
 * @package WPMozo_Blocks_And_Addons
 */

// phpcs:disable WordPress.WP.AlternativeFunctions, WordPress.Security.EscapeOutput -- A CLI tool that runs outside WordPress.

if ( 'cli' !== PHP_SAPI ) {
	exit( 1 );
}

require __DIR__ . '/lib/compile-catalog.php';

$opts = getopt( '', array( 'source:', 'library:', 'lite-library:', 'textdomain:', 'check' ) );
if ( empty( $opts['source'] ) || empty( $opts['library'] ) || ! preg_match( '/^[a-z0-9]+(-[a-z0-9]+)*$/', $opts['source'] ) ) {
	fwrite( STDERR, "Usage: php compile.php --source=<id> --library=<includes/library/> [--lite-library=<Lite includes/library/>] [--textdomain=<domain>] [--check]\n" );
	exit( 2 );
}
$source     = $opts['source'];
$library    = rtrim( $opts['library'], '/' ) . '/';
$lite       = rtrim( isset( $opts['lite-library'] ) ? $opts['lite-library'] : $opts['library'], '/' ) . '/';
$check      = isset( $opts['check'] );
$textdomain = isset( $opts['textdomain'] ) ? $opts['textdomain'] : ( 'lite' === $source ? 'wpmozo-blocks-and-addons' : 'wpmozo-blocks-and-addons-' . $source );
if ( ! is_dir( $library ) || ! preg_match( '/^[a-z0-9]+(-[a-z0-9]+)*$/', $textdomain ) ) {
	fwrite( STDERR, "Invalid --library or --textdomain\n" );
	exit( 2 );
}

$result = wpmozo_pl_compile( $source, $library, $lite, $textdomain, $check );
if ( $result['problems'] ) {
	fwrite( STDERR, implode( "\n", $result['problems'] ) . "\n" );
	exit( 1 );
}
foreach ( $result['written'] as $file ) {
	echo "written $file\n";
}
if ( $result['stale'] ) {
	fwrite( STDERR, "Out of date (run compile.php without --check):\n  " . implode( "\n  ", $result['stale'] ) . "\n" );
	exit( 1 );
}
echo json_encode(
	array(
		'source'   => $source,
		'patterns' => $result['patterns'],
		'strings'  => $result['strings'],
		'check'    => $check,
	)
) . "\n";
