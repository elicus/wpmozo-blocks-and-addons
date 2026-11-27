<?php
/**
 * Compile a source's pattern metadata: the work behind tools/pattern-library/compile.php
 * (CLI only, not shipped). Also called by the `formats` test suite.
 *
 * @package WPMozo_Blocks_And_Addons
 */

// phpcs:disable WordPress.WP.AlternativeFunctions, WordPress.Security.EscapeOutput, WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase, WordPress.PHP.DevelopmentFunctions -- Runs outside WordPress; DOM properties are camelCase; set_error_handler() collects XML errors and var_export() writes PHP string literals.

if ( 'cli' !== PHP_SAPI && ! defined( 'WPMOZO_PL_TOOL_TEST' ) ) {
	exit( 1 );
}

require_once __DIR__ . '/library-files.php';

/**
 * Check every patterns/<slug>/pattern.xml of a source and write (or, with $check, compare)
 * catalog.json and data/strings.php. See compile.php for the checks.
 *
 * @param string $source     Source id ("lite", "pro", ...).
 * @param string $library    Source library folder with trailing slash.
 * @param string $lite       Lite library folder with trailing slash (categories and tags).
 * @param string $textdomain Text domain of the strings.
 * @param bool   $check      Compare only; write nothing.
 * @return array { problems: string[], stale: string[], written: string[], patterns: int, strings: int }
 */
function wpmozo_pl_compile( $source, $library, $lite, $textdomain, $check ) {
	$access  = 'lite' !== $source ? 'pro' : 'free';
	$package = 'wpmozo-blocks-and-addons' === $textdomain ? 'WPMozo_Blocks_And_Addons' : 'WPMozo_Blocks_And_Addons_Pro';

	$problems = array();
	$fail     = function ( $where, $message ) use ( &$problems ) {
		$problems[] = $where . ': ' . $message;
	};

	// Lite's categories and tags: the only ones a pattern may use.
	$categories = wpmozo_pl_read_json( $lite . 'data/categories.json', $error );
	if ( null === $categories ) {
		$fail( $lite . 'data/categories.json', $error );
		$categories = array();
	}
	$tags = wpmozo_pl_read_json( $lite . 'data/tags.json', $error );
	if ( null === $tags ) {
		$fail( $lite . 'data/tags.json', $error );
		$tags = array();
	}

	// This source's maps must be JSON; no old PHP map may remain.
	foreach ( glob( $library . 'data/*' ) as $file ) {
		$name = basename( $file );
		if ( 'strings.php' === $name || 'index.php' === $name ) {
			continue;
		}
		if ( '.json' === substr( $name, -5 ) ) {
			if ( null === wpmozo_pl_read_json( $file, $error ) ) {
				$fail( $file, $error );
			}
		} else {
			$fail( $file, 'not a JSON map (maps are data/<name>.json)' );
		}
	}

	$schema = dirname( __DIR__ ) . '/schema/pattern.xsd';
	if ( PHP_VERSION_ID < 80000 ) {
		libxml_disable_entity_loader( true ); // phpcs:ignore Generic.PHP.DeprecatedFunctions.Deprecated -- PHP 7.4 only; no external entity is ever loaded.
	}

	$entries = array();
	$strings = array();
	$folders = glob( $library . 'patterns/*', GLOB_ONLYDIR );
	sort( $folders );
	foreach ( $folders as $folder ) {
		$slug  = basename( $folder );
		$where = "$source/$slug";
		foreach ( WPMOZO_PL_LEGACY_FILES as $legacy ) {
			if ( file_exists( "$folder/$legacy" ) ) {
				$fail( $where, "old PHP data file $legacy: pattern data is pattern.xml and content.json" );
			}
		}

		$xml_file = "$folder/pattern.xml";
		if ( ! is_file( $xml_file ) ) {
			$fail( $where, 'pattern.xml is missing' );
			continue;
		}
		// XML problems arrive as PHP warnings: collect them (libxml's own error list is not used,
		// because clearing it crashes PHP 7.4 on WebAssembly, which the tests run on).
		$messages = array();
		set_error_handler(
			function ( $number, $message ) use ( &$messages ) {
				$messages[] = trim( preg_replace( '/^DOMDocument::\w+\(\):\s*/', '', $message ) );
				return true;
			}
		);
		$dom = new DOMDocument();
		// From a string: with PHP 7.4's entity loader disabled, load() can't open files at all.
		$loaded = $dom->loadXML( (string) file_get_contents( $xml_file ), LIBXML_NONET );
		restore_error_handler();
		if ( ! $loaded ) {
			$fail( $where, 'pattern.xml is not well-formed XML: ' . implode( '; ', $messages ) );
			continue;
		}
		if ( null !== $dom->doctype ) {
			// No DTD, so no entities: nothing to expand or fetch.
			$fail( $where, 'pattern.xml must not have a DOCTYPE' );
			continue;
		}
		$messages = array();
		set_error_handler(
			function ( $number, $message ) use ( &$messages ) {
				$messages[] = trim( preg_replace( '/^DOMDocument::\w+\(\):\s*/', '', $message ) );
				return true;
			}
		);
		$valid = $dom->schemaValidateSource( (string) file_get_contents( $schema ) );
		restore_error_handler();
		if ( ! $valid ) {
			foreach ( $messages ? $messages : array( 'invalid' ) as $message ) {
				$fail( $where, 'pattern.xml: ' . $message );
			}
			continue;
		}

		$xp    = new DOMXPath( $dom );
		$text  = function ( $query ) use ( $xp ) {
			$node = $xp->query( $query )->item( 0 );
			return null === $node ? null : $node->textContent;
		};
		$list  = function ( $query ) use ( $xp ) {
			$out = array();
			foreach ( $xp->query( $query ) as $node ) {
				$out[] = $node->textContent;
			}
			return $out;
		};
		$image = function ( $name ) use ( $xp ) {
			$node = $xp->query( "/pattern/$name" )->item( 0 );
			if ( null === $node ) {
				return null;
			}
			return array(
				'file'   => $node->getAttribute( 'file' ),
				'width'  => (int) $node->getAttribute( 'width' ),
				'height' => (int) $node->getAttribute( 'height' ),
			);
		};

		$entry = array(
			'schema'   => 1,
			'slug'     => $text( '/pattern/slug' ),
			'revision' => (int) $text( '/pattern/revision' ),
		);
		if ( null !== $text( '/pattern/type' ) ) {
			$entry['type'] = $text( '/pattern/type' );
		}
		$entry['title'] = $text( '/pattern/title' );
		if ( null !== $text( '/pattern/description' ) ) {
			$entry['description'] = $text( '/pattern/description' );
		}
		$entry['category'] = $text( '/pattern/category' );
		if ( $list( '/pattern/tags/tag' ) ) {
			$entry['tags'] = $list( '/pattern/tags/tag' );
		}
		if ( $list( '/pattern/keywords/keyword' ) ) {
			$entry['keywords'] = $list( '/pattern/keywords/keyword' );
		}
		$entry['access'] = $text( '/pattern/access' );
		if ( null !== $text( '/pattern/layout' ) ) {
			$entry['layout'] = $text( '/pattern/layout' );
		}
		$entry['thumbnail'] = $image( 'thumbnail' );
		if ( null !== $image( 'preview' ) ) {
			$entry['preview'] = $image( 'preview' );
		}
		$entry['since'] = $text( '/pattern/since' );
		foreach ( array( 'published', 'order', 'status' ) as $optional ) {
			if ( null !== $text( "/pattern/$optional" ) ) {
				$entry[ $optional ] = 'order' === $optional ? (int) $text( "/pattern/$optional" ) : $text( "/pattern/$optional" );
			}
		}
		if ( null !== $text( '/pattern/replaced-by' ) ) {
			$entry['replaced_by'] = $text( '/pattern/replaced-by' );
		}
		$plugins = array();
		foreach ( $xp->query( '/pattern/requires/plugin' ) as $node ) {
			$plugins[ $node->getAttribute( 'slug' ) ] = trim( $node->textContent );
		}
		if ( $plugins || null !== $text( '/pattern/requires/wordpress' ) || null !== $text( '/pattern/requires/lite' ) ) {
			$entry['requires'] = array(
				'plugins' => (object) $plugins,
				'lite'    => (string) $text( '/pattern/requires/lite' ),
				'wp'      => (string) $text( '/pattern/requires/wordpress' ),
			);
		}
		$declared = $list( '/pattern/requires/blocks/block' );

		// Checks the schema can't express.
		if ( $slug !== $entry['slug'] ) {
			$fail( $where, "slug {$entry['slug']} doesn't match the folder name" );
		}
		if ( $access !== $entry['access'] ) {
			$fail( $where, "access must be $access in the $source source" );
		}
		if ( ! isset( $categories[ $entry['category'] ] ) ) {
			$fail( $where, "unknown category {$entry['category']} (Lite data/categories.json)" );
		}
		foreach ( isset( $entry['tags'] ) ? $entry['tags'] : array() as $tag ) {
			if ( ! isset( $tags[ $tag ] ) ) {
				$fail( $where, "unknown tag $tag (Lite data/tags.json)" );
			}
		}
		foreach ( array( 'thumbnail', 'preview' ) as $name ) {
			if ( isset( $entry[ $name ] ) && ! is_file( $library . $entry[ $name ]['file'] ) ) {
				$fail( $where, "$name file {$entry[ $name ]['file']} is missing" );
			}
		}

		// Content: plain JSON (every source), matching this pattern.
		$wrapper = wpmozo_pl_read_json( wpmozo_pl_content_path( $library, $slug ), $error );
		if ( null === $wrapper ) {
			$fail( $where, WPMOZO_PL_CONTENT_FILE . ": $error" );
			continue;
		}
		$wrapper_schema   = isset( $wrapper['schema'] ) ? $wrapper['schema'] : null;
		$wrapper_id       = isset( $wrapper['id'] ) ? $wrapper['id'] : null;
		$wrapper_revision = isset( $wrapper['revision'] ) ? $wrapper['revision'] : null;
		if ( 1 !== $wrapper_schema || "$source/$slug" !== $wrapper_id || $wrapper_revision !== $entry['revision'] || ! isset( $wrapper['content'] ) || ! is_string( $wrapper['content'] ) || '' === trim( $wrapper['content'] ) ) {
			$fail( $where, 'the content file\'s schema, id, revision or content does not match pattern.xml' );
			continue;
		}
		$used = wpmozo_pl_block_names( $wrapper['content'] );
		$want = array_values( array_unique( $declared ) );
		sort( $want );
		if ( $used !== $want ) {
			$fail(
				$where,
				"<requires><blocks> must list exactly the blocks the content uses:\n    <blocks>\n" . implode(
					'',
					array_map(
						function ( $b ) {
							return "        <block>$b</block>\n";
						},
						$used
					)
				) . '    </blocks>'
			);
		}
		$entry['blocks']         = $used;
		$entry['content_sha256'] = hash( 'sha256', $wrapper['content'] );
		$entries[]               = $entry;

		$strings[] = array( $entry['title'], "Pattern Library: title of the pattern $where." );
		if ( isset( $entry['description'] ) ) {
			$strings[] = array( $entry['description'], "Pattern Library: description of the pattern $where." );
		}
		foreach ( isset( $entry['keywords'] ) ? $entry['keywords'] : array() as $keyword ) {
			$strings[] = array( $keyword, "Pattern Library: search keyword of the pattern $where." );
		}
	}

	// Lite's category and tag labels are translatable too.
	if ( 'lite' === $source ) {
		foreach ( $categories as $id => $category ) {
			$strings[] = array( isset( $category['label'] ) ? (string) $category['label'] : '', "Pattern Library: category label ($id)." );
		}
		foreach ( $tags as $id => $label ) {
			$strings[] = array( (string) $label, "Pattern Library: tag label ($id)." );
		}
	}

	if ( $problems ) {
		return array(
			'problems' => $problems,
			'stale'    => array(),
			'written'  => array(),
			'patterns' => count( $entries ),
			'strings'  => 0,
		);
	}

	$catalog = wpmozo_pl_json(
		array(
			'schema'     => 1,
			'source'     => $source,
			'textdomain' => $textdomain,
			'generator'  => 'tools/pattern-library/compile.php (Lite repository) from patterns/*/pattern.xml; do not edit',
			'patterns'   => $entries,
		)
	);

	$seen  = array();
	$calls = '';
	foreach ( $strings as $item ) {
		list( $string, $comment ) = $item;
		if ( '' === $string || isset( $seen[ $string ] ) ) {
			continue;
		}
		$seen[ $string ] = true;
		$calls          .= "\t/* translators: $comment */\n\t__( " . var_export( $string, true ) . ', ' . var_export( $textdomain, true ) . " ),\n";
	}
	$strings_php = "<?php\n/**\n * Translatable strings of the Pattern Library data in this folder (catalog.json and data/*.json).\n *\n"
		. " * Generated by tools/pattern-library/compile.php (Lite repository). Never loaded: it exists only so\n"
		. " * that translation tools (wp i18n make-pot) find these strings. Don't edit it: edit pattern.xml or\n"
		. " * the maps and compile again.\n *\n * @package $package\n */\n\n"
		. "defined( 'ABSPATH' ) || exit;\n\nreturn array(\n" . $calls . ");\n";

	$outputs = array(
		$library . 'catalog.json'     => $catalog,
		$library . 'data/strings.php' => $strings_php,
	);
	$stale   = array();
	$written = array();
	foreach ( $outputs as $file => $body ) {
		$current = is_file( $file ) ? file_get_contents( $file ) : null;
		if ( $current === $body ) {
			continue;
		}
		if ( $check ) {
			$stale[] = $file;
		} else {
			file_put_contents( $file, $body );
			$written[] = $file;
		}
	}
	return array(
		'problems' => array(),
		'stale'    => $stale,
		'written'  => $written,
		'patterns' => count( $entries ),
		'strings'  => count( $seen ),
	);
}
