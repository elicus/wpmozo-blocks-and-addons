<?php
/**
 * Pattern Library data files: the rules the authoring tools share (CLI only, not shipped).
 *
 * The runtime counterpart is Mozo_Bna_Library_Registry (includes/library/class-mozo-bna-library-registry.php):
 * the file names and the content wrapper here must match it exactly.
 * Format reference: docs/pattern-library/registry-and-contract.md.
 *
 * PHP 7.4 syntax (the tests run these tools on PHP 7.4 and 8.2).
 *
 * @package WPMozo_Blocks_And_Addons
 */

// phpcs:disable WordPress.WP.AlternativeFunctions -- Tools that run outside WordPress: plain file and JSON functions are correct here.

if ( 'cli' !== PHP_SAPI && ! defined( 'WPMOZO_PL_TOOL_TEST' ) ) {
	exit( 1 );
}

/**
 * Content file of every pattern: plain JSON. Same as Mozo_Bna_Library_Registry::CONTENT_FILE.
 */
const WPMOZO_PL_CONTENT_FILE = 'content.json';

/**
 * Files that must no longer exist in a pattern folder: the PHP pattern data of earlier versions
 * (pattern.php, content.php) and the guarded content.json.php used briefly on 2026-11-26.
 */
const WPMOZO_PL_LEGACY_FILES = array( 'pattern.php', 'content.php', 'content.json.php' );

/**
 * Encode data as the library's JSON files are written: pretty-printed, unescaped slashes and
 * Unicode, one trailing newline.
 *
 * @param mixed $data Data.
 * @return string
 */
function wpmozo_pl_json( $data ) {
	return json_encode( $data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . "\n";
}

/**
 * Read a JSON data file as an array.
 *
 * @param string      $file  Path.
 * @param string|null $error Problem, or null.
 * @return array|null
 */
function wpmozo_pl_read_json( $file, &$error = null ) {
	$error = null;
	if ( ! is_file( $file ) ) {
		$error = 'missing';
		return null;
	}
	$raw   = file_get_contents( $file );
	$value = json_decode( $raw, true, 64 );
	if ( JSON_ERROR_NONE !== json_last_error() || ! is_array( $value ) ) {
		$error = 'not a JSON object (' . json_last_error_msg() . ')';
		return null;
	}
	return $value;
}

/**
 * Path of a pattern's content file.
 *
 * @param string $library Library folder with trailing slash.
 * @param string $slug    Pattern slug.
 * @return string
 */
function wpmozo_pl_content_path( $library, $slug ) {
	return $library . 'patterns/' . $slug . '/' . WPMOZO_PL_CONTENT_FILE;
}

/**
 * The body of a content file: the JSON wrapper.
 *
 * @param string $source   Source id.
 * @param string $slug     Pattern slug.
 * @param int    $revision Pattern revision.
 * @param string $markup   Serialized block markup with library tokens.
 * @return string
 */
function wpmozo_pl_content_file_body( $source, $slug, $revision, $markup ) {
	return wpmozo_pl_json(
		array(
			'schema'   => 1,
			'id'       => $source . '/' . $slug,
			'revision' => (int) $revision,
			'content'  => $markup,
		)
	);
}

/**
 * Names of every block in serialized markup, sorted and unique, as WordPress's parse_blocks()
 * names them (a name without a namespace is a core block). Uses WordPress's block delimiter
 * expression (WP_Block_Parser).
 *
 * @param string $markup Block markup.
 * @return array
 */
function wpmozo_pl_block_names( $markup ) {
	preg_match_all(
		'/<!--\s+(?P<closer>\/)?wp:(?P<namespace>[a-z][a-z0-9_-]*\/)?(?P<name>[a-z][a-z0-9_-]*)\s+(?P<attrs>{(?:(?:[^}]+|}+(?=})|(?!}\s+\/?-->).)*+)?}\s+)?(?P<void>\/)?-->/s',
		$markup,
		$matches,
		PREG_SET_ORDER
	);
	$names = array();
	foreach ( $matches as $match ) {
		if ( '' === $match['closer'] ) {
			$names[ ( '' === $match['namespace'] ? 'core/' : $match['namespace'] ) . $match['name'] ] = true;
		}
	}
	$names = array_keys( $names );
	sort( $names );
	return $names;
}
