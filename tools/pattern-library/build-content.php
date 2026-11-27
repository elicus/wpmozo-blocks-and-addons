<?php
/**
 * Turn exported markup into a pattern's content file (Pattern Library authoring tool, CLI only).
 *
 * Usage:
 *   php tools/pattern-library/build-content.php --source=lite|pro --library=<source includes/library/>
 *       --lite-library=<Lite includes/library/> --slug=<slug> --in=<exported.html>
 *
 * Writes patterns/<slug>/content.json (plain JSON, for every source), wrapping the markup as
 * { schema, id, revision, content }. The revision comes from the pattern's pattern.xml when it exists.
 * Then run compile.php to check pattern.xml (including its declared blocks) and update catalog.json.
 *
 * Replaces site-specific and repeated values with library tokens, using the central maps:
 * - content images under <plugin>/includes/library/media/ => {{wpmozo:media:<source>/<key>}};
 * - demo link placeholders "#wpmozo-link-<key>"           => {{wpmozo:link:lite/<key>}};
 * - icon classes listed in Lite's data/icons.json          => {{wpmozo:icon:lite/<key>}};
 * - repeated demo text in Lite's data/demo-text.json       => {{wpmozo:text:lite/<key>}}.
 *
 * It fails when a value can't be tokenized (an image outside the media maps, a site URL, an unknown
 * link key), and checks that putting the original values back gives the exported markup exactly.
 * Not shipped: the release zip contains only build/, includes/, the main file and the readme.
 *
 * @package WPMozo_Blocks_And_Addons
 */

// phpcs:disable WordPress.WP.AlternativeFunctions -- A CLI tool that runs outside WordPress: plain file and JSON functions are correct here.

if ( 'cli' !== PHP_SAPI ) {
	exit( 1 );
}

require __DIR__ . '/lib/library-files.php';

$opts = getopt( '', array( 'source:', 'library:', 'lite-library:', 'slug:', 'in:' ) );
foreach ( array( 'source', 'library', 'lite-library', 'slug', 'in' ) as $required ) {
	if ( empty( $opts[ $required ] ) ) {
		fwrite( STDERR, "Missing --$required\n" );
		exit( 2 );
	}
}
$source  = $opts['source'];
$slug    = $opts['slug'];
$library = rtrim( $opts['library'], '/' ) . '/';
$lite    = rtrim( $opts['lite-library'], '/' ) . '/';
if ( ! preg_match( '/^[a-z0-9]+(-[a-z0-9]+)*$/', $slug ) || ! in_array( $source, array( 'lite', 'pro' ), true ) ) {
	fwrite( STDERR, "Invalid --slug or --source\n" );
	exit( 2 );
}

/**
 * Load a JSON map, or an empty array when it doesn't exist.
 *
 * @param string $file Path.
 * @return array
 */
function wpmozo_tool_map( $file ) {
	if ( ! is_file( $file ) ) {
		return array();
	}
	$map = wpmozo_pl_read_json( $file, false, $error );
	if ( null === $map ) {
		fwrite( STDERR, "$file: $error\n" );
		exit( 1 );
	}
	return $map;
}

$maps = array(
	'media' => array(
		'lite' => wpmozo_tool_map( $lite . 'data/media.json' ),
		'pro'  => 'pro' === $source ? wpmozo_tool_map( $library . 'data/media.json' ) : array(),
	),
	'links' => wpmozo_tool_map( $lite . 'data/links.json' ),
	'icons' => wpmozo_tool_map( $lite . 'data/icons.json' ),
	'text'  => wpmozo_tool_map( $lite . 'data/demo-text.json' ),
);

$original = file_get_contents( $opts['in'] );
if ( false === $original || '' === trim( $original ) ) {
	fwrite( STDERR, "Empty input\n" );
	exit( 1 );
}
if ( false !== strpos( $original, '{{wpmozo:' ) ) {
	fwrite( STDERR, "The input already contains library tokens\n" );
	exit( 1 );
}

$markup       = rtrim( $original, "\n" );
$replacements = array(); // token => original value, for the round-trip check.
$problems     = array();
$used         = array();

// Content images.
$markup = preg_replace_callback(
	'#https?://[^"\'\s<>()\\\\]+?/(wpmozo-blocks-and-addons(?:-pro)?)/includes/library/(media/[A-Za-z0-9._-]+)#',
	function ( $m ) use ( $maps, &$replacements, &$problems, &$used ) {
		$from = 'wpmozo-blocks-and-addons-pro' === $m[1] ? 'pro' : 'lite';
		foreach ( $maps['media'][ $from ] as $key => $entry ) {
			if ( is_array( $entry ) && isset( $entry['file'] ) && $entry['file'] === $m[2] ) {
				$token                  = '{{wpmozo:media:' . $from . '/' . $key . '}}';
				$replacements[ $token ] = $m[0];
				$used[]                 = $token;
				return $token;
			}
		}
		$problems[] = "Image not in the $from media map: {$m[2]}";
		return $m[0];
	},
	$markup
);

// Demo link placeholders.
$markup = preg_replace_callback(
	'/#wpmozo-link-([a-z0-9]+(?:-[a-z0-9]+)*)/',
	function ( $m ) use ( $maps, &$replacements, &$problems, &$used ) {
		if ( ! isset( $maps['links'][ $m[1] ] ) ) {
			$problems[] = "Unknown link key: {$m[1]}";
			return $m[0];
		}
		$token                  = '{{wpmozo:link:lite/' . $m[1] . '}}';
		$replacements[ $token ] = $m[0];
		$used[]                 = $token;
		return $token;
	},
	$markup
);

// Icon classes, as whole class lists inside quotes or class attributes.
foreach ( $maps['icons'] as $key => $value ) {
	$pattern = '/(?<=["\s])' . preg_quote( $value, '/' ) . '(?=["\s])/';
	$count   = 0;
	$markup  = preg_replace( $pattern, '{{wpmozo:icon:lite/' . $key . '}}', $markup, -1, $count );
	if ( $count ) {
		$replacements[ '{{wpmozo:icon:lite/' . $key . '}}' ] = $value;
		$used[] = '{{wpmozo:icon:lite/' . $key . '}}';
	}
}

// Repeated demo text, longest values first so "Northwind Studio" wins over "Northwind".
$texts = $maps['text'];
uksort(
	$texts,
	function ( $a, $b ) use ( $texts ) {
		return strlen( $texts[ $b ] ) - strlen( $texts[ $a ] );
	}
);
foreach ( $texts as $key => $value ) {
	if ( ! is_string( $value ) || strlen( $value ) < 4 ) {
		continue;
	}
	$count  = 0;
	$markup = preg_replace( '/(?<![\w{:\/.@-])' . preg_quote( $value, '/' ) . '(?![\w}])/u', '{{wpmozo:text:lite/' . $key . '}}', $markup, -1, $count );
	if ( $count ) {
		$replacements[ '{{wpmozo:text:lite/' . $key . '}}' ] = $value;
		$used[] = '{{wpmozo:text:lite/' . $key . '}}';
	}
}

// Nothing site-specific may remain.
foreach ( array( '#/wp-content/#', '#https?://(127\.0\.0\.1|localhost|[^/"\']+\.(local|test))#', '/#wpmozo-link-/' ) as $forbidden ) {
	if ( preg_match( $forbidden, $markup, $m ) ) {
		$problems[] = "Site-specific or reserved value left in the content: {$m[0]}";
	}
}

// Round trip: putting the original values back must give the exported markup exactly.
if ( strtr( $markup, $replacements ) !== rtrim( $original, "\n" ) ) {
	$problems[] = 'Round-trip check failed: replacing the tokens does not restore the export';
}

if ( $problems ) {
	fwrite( STDERR, implode( "\n", array_unique( $problems ) ) . "\n" );
	exit( 1 );
}

$file = wpmozo_pl_content_path( $library, $slug );
if ( ! is_dir( dirname( $file ) ) && ! mkdir( dirname( $file ), 0755, true ) ) {
	fwrite( STDERR, "Cannot create the pattern folder\n" );
	exit( 1 );
}
$revision = 1;
$xml      = dirname( $file ) . '/pattern.xml';
if ( is_file( $xml ) && preg_match( '#<revision>\s*(\d+)\s*</revision>#', (string) file_get_contents( $xml ), $m ) ) {
	$revision = (int) $m[1];
}
file_put_contents( $file, wpmozo_pl_content_file_body( $source, $slug, $revision, $markup ) );

$counts = array_count_values( $used );
echo json_encode(
	array(
		'file'     => $file,
		'revision' => $revision,
		'bytes'    => strlen( $markup ),
		'tokens'   => $counts,
		// Paste into pattern.xml <requires><blocks> if it differs; compile.php checks it.
		'blocks'   => wpmozo_pl_block_names( $markup ),
	),
	JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT
) . "\n";
