<?php
/**
 * Pattern Library: pattern sources and pattern metadata.
 *
 * A source (Lite itself, or an add-on such as Pro) supplies a folder with data files only:
 * - `catalog.json`: every pattern's metadata, compiled from `patterns/<slug>/pattern.xml`;
 * - `patterns/<slug>/content.json`: the block markup in a JSON wrapper (every source);
 * - `data/*.json`: central maps.
 * These files are plain JSON, read as data and never executed. The local file names are defined
 * here only (CATALOG_FILE, content_path(), map_path()); the catalog is loaded in
 * load_source_patterns() and content in get_content(), so a later remote source replaces those
 * two places. See docs/pattern-library/registry-and-contract.md.
 *
 * @link       https://elicus.com
 * @since      n.e.x.t
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes/library
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Registry of pattern sources and their pattern metadata.
 *
 * @since n.e.x.t
 */
final class Mozo_Bna_Library_Registry {

	/**
	 * Highest source contract this version understands.
	 *
	 * @var int
	 */
	const CONTRACT = 1;

	/**
	 * Metadata schema this version understands.
	 *
	 * @var int
	 */
	const SCHEMA = 1;

	/**
	 * Allowed format of source ids, slugs, categories and tags.
	 *
	 * @var string
	 */
	const ID_PATTERN = '/^[a-z0-9]+(?:-[a-z0-9]+)*$/';

	/**
	 * Allowed format of relative file paths inside a source folder.
	 *
	 * @var string
	 */
	const FILE_PATTERN = '#^[a-z0-9][a-z0-9_-]*(?:/[a-z0-9][a-z0-9_.-]*)*\.(?:webp|png|jpe?g|svg)$#';

	/**
	 * Allowed format of a block name ("namespace/name").
	 *
	 * @var string
	 */
	const BLOCK_NAME_PATTERN = '#^[a-z][a-z0-9_-]*/[a-z][a-z0-9_-]*$#';

	/**
	 * A source's compiled metadata index, relative to its folder.
	 *
	 * @var string
	 */
	const CATALOG_FILE = 'catalog.json';

	/**
	 * Content file of every pattern (plain JSON), inside `patterns/<slug>/`.
	 *
	 * @var string
	 */
	const CONTENT_FILE = 'content.json';

	/**
	 * Folder of a source's central maps (`<map>.json`), relative to its folder.
	 *
	 * @var string
	 */
	const MAP_FOLDER = 'data/';

	/**
	 * Largest catalog and content file read, in bytes.
	 *
	 * @var int
	 */
	const MAX_JSON_BYTES = 1048576;

	/**
	 * Text domain of each source's catalog strings, keyed by source id.
	 *
	 * @var array
	 */
	private $textdomains = array();

	/**
	 * Registered sources, keyed by id.
	 *
	 * @var array
	 */
	private $sources = array();

	/**
	 * Categories, keyed by id.
	 *
	 * @var array
	 */
	private $categories = array();

	/**
	 * Tags, keyed by id.
	 *
	 * @var array
	 */
	private $tags = array();

	/**
	 * Loaded pattern metadata, keyed by "<source>/<slug>". Null until loaded.
	 *
	 * @var array|null
	 */
	private $patterns = null;

	/**
	 * Problems found while registering sources or loading metadata.
	 *
	 * @var array
	 */
	private $issues = array();

	/**
	 * Number of patterns skipped because they need a newer schema.
	 *
	 * @var int
	 */
	private $newer_schema = 0;

	/**
	 * Register a pattern source.
	 *
	 * @param string $id   Source id (lowercase letters, digits, hyphens).
	 * @param array  $args {
	 *     Source arguments.
	 *
	 *     @type int      $contract    Source contract version the caller was written for.
	 *     @type string   $label       Display name.
	 *     @type string   $version     Version of the plugin that provides the source.
	 *     @type string   $path        Absolute path of the source's library folder (catalog.json,
	 *                                 patterns/<slug>/content.json, data/*.json).
	 *     @type string   $url         URL of the same folder.
	 *     @type string   $access      'free' or 'pro'.
	 *     @type callable $entitlement Server-side entitlement check; required for 'pro'.
	 *     @type array    $links       Optional. Named URLs (for example 'license', 'upgrade').
	 *     @type array    $categories  Optional. Extra categories, id => label.
	 * }
	 * @return true|WP_Error
	 */
	public function register_source( $id, $args ) {
		$id   = is_string( $id ) ? $id : '';
		$args = is_array( $args ) ? $args : array();

		if ( ! preg_match( self::ID_PATTERN, $id ) || strlen( $id ) > 32 ) {
			return $this->refuse( $id, 'invalid_id', 'Source id must use lowercase letters, digits and hyphens (max 32).' );
		}
		if ( isset( $this->sources[ $id ] ) ) {
			return $this->refuse( $id, 'duplicate', 'A source with this id is already registered.' );
		}
		$contract = isset( $args['contract'] ) ? (int) $args['contract'] : 0;
		if ( $contract < 1 || $contract > self::CONTRACT ) {
			return $this->refuse( $id, 'contract_unsupported', 'This version supports source contract 1.' );
		}
		$path = isset( $args['path'] ) && is_string( $args['path'] ) ? realpath( $args['path'] ) : false;
		if ( false === $path || ! is_dir( $path ) ) {
			return $this->refuse( $id, 'invalid_path', 'Source path must be an existing folder.' );
		}
		$url = isset( $args['url'] ) && is_string( $args['url'] ) ? esc_url_raw( $args['url'] ) : '';
		if ( '' === $url ) {
			return $this->refuse( $id, 'invalid_url', 'Source URL is required.' );
		}
		$access = isset( $args['access'] ) ? $args['access'] : '';
		if ( ! in_array( $access, array( 'free', 'pro' ), true ) ) {
			return $this->refuse( $id, 'invalid_access', "Access must be 'free' or 'pro'." );
		}
		$entitlement = isset( $args['entitlement'] ) ? $args['entitlement'] : null;
		if ( 'pro' === $access && ! is_callable( $entitlement ) ) {
			return $this->refuse( $id, 'entitlement_missing', 'Premium sources need a server-side entitlement callback.' );
		}

		$links = array();
		if ( isset( $args['links'] ) && is_array( $args['links'] ) ) {
			foreach ( $args['links'] as $key => $link ) {
				if ( is_string( $key ) && is_string( $link ) && '' !== esc_url_raw( $link ) ) {
					$links[ sanitize_key( $key ) ] = esc_url_raw( $link );
				}
			}
		}

		$this->sources[ $id ] = array(
			'id'          => $id,
			'contract'    => $contract,
			'label'       => isset( $args['label'] ) && is_string( $args['label'] ) && '' !== $args['label'] ? $args['label'] : $id,
			'version'     => isset( $args['version'] ) && is_string( $args['version'] ) ? $args['version'] : '',
			'path'        => trailingslashit( $path ),
			'url'         => trailingslashit( $url ),
			'access'      => $access,
			'entitlement' => 'pro' === $access ? $entitlement : null,
			'links'       => $links,
		);

		if ( isset( $args['categories'] ) && is_array( $args['categories'] ) ) {
			foreach ( $args['categories'] as $category => $label ) {
				$this->add_category( $category, $label, $id );
			}
		}

		// Metadata is reloaded on next use.
		$this->patterns = null;

		return true;
	}

	/**
	 * Add a category. Existing categories are never overridden.
	 *
	 * @param string $id     Category id.
	 * @param string $label  Display label.
	 * @param string $source Source that added it.
	 * @param int    $order  Sort order.
	 */
	public function add_category( $id, $label, $source, $order = 100 ) {
		if ( is_string( $id ) && preg_match( self::ID_PATTERN, $id ) && is_string( $label ) && ! isset( $this->categories[ $id ] ) ) {
			$this->categories[ $id ] = array(
				'id'     => $id,
				'label'  => $label,
				'order'  => (int) $order,
				'source' => $source,
			);
		}
	}

	/**
	 * Add a tag. Existing tags are never overridden.
	 *
	 * @param string $id    Tag id.
	 * @param string $label Display label.
	 */
	public function add_tag( $id, $label ) {
		if ( is_string( $id ) && preg_match( self::ID_PATTERN, $id ) && is_string( $label ) && ! isset( $this->tags[ $id ] ) ) {
			$this->tags[ $id ] = array(
				'id'    => $id,
				'label' => $label,
			);
		}
	}

	/**
	 * Registered sources.
	 *
	 * @return array
	 */
	public function get_sources() {
		return $this->sources;
	}

	/**
	 * One source.
	 *
	 * @param string $id Source id.
	 * @return array|null
	 */
	public function get_source( $id ) {
		return isset( $this->sources[ $id ] ) ? $this->sources[ $id ] : null;
	}

	/**
	 * Categories, sorted by order then label.
	 *
	 * @return array
	 */
	public function get_categories() {
		$categories = array_values( $this->categories );
		usort(
			$categories,
			function ( $a, $b ) {
				return $a['order'] === $b['order'] ? strcmp( $a['label'], $b['label'] ) : $a['order'] - $b['order'];
			}
		);
		return $categories;
	}

	/**
	 * Tags.
	 *
	 * @return array
	 */
	public function get_tags() {
		return array_values( $this->tags );
	}

	/**
	 * All valid pattern metadata, keyed by "<source>/<slug>".
	 *
	 * @return array
	 */
	public function get_patterns() {
		if ( null === $this->patterns ) {
			$this->patterns = array();
			foreach ( $this->sources as $source ) {
				$this->load_source_patterns( $source );
			}
		}
		return $this->patterns;
	}

	/**
	 * One pattern's metadata.
	 *
	 * @param string $source Source id.
	 * @param string $slug   Pattern slug.
	 * @return array|null
	 */
	public function get_pattern( $source, $slug ) {
		$patterns = $this->get_patterns();
		$id       = $source . '/' . $slug;
		return isset( $patterns[ $id ] ) ? $patterns[ $id ] : null;
	}

	/**
	 * Raw block markup of one pattern (tokens not yet resolved).
	 *
	 * @param string $source Source id.
	 * @param string $slug   Pattern slug.
	 * @return string|WP_Error
	 */
	public function get_content( $source, $slug ) {
		$pattern = $this->get_pattern( $source, $slug );
		if ( null === $pattern ) {
			return new WP_Error( 'wpmozo_library_not_found', __( 'Pattern not found.', 'wpmozo-blocks-and-addons' ) );
		}
		$id   = $source . '/' . $slug;
		$file = $this->content_file( $this->sources[ $source ], $slug );
		if ( false === $file ) {
			return new WP_Error( 'wpmozo_library_invalid_content', __( 'Pattern content is missing.', 'wpmozo-blocks-and-addons' ) );
		}
		$wrapper = self::read_json( $file, self::MAX_JSON_BYTES, $error );
		if ( null !== $error ) {
			$this->issue( $id, 'content_' . $error );
			return new WP_Error( 'wpmozo_library_content_error', __( 'Pattern content could not be loaded.', 'wpmozo-blocks-and-addons' ) );
		}
		if ( ! isset( $wrapper['schema'], $wrapper['id'], $wrapper['revision'], $wrapper['content'] ) || self::SCHEMA !== $wrapper['schema'] || $id !== $wrapper['id'] || $pattern['revision'] !== $wrapper['revision'] || ! is_string( $wrapper['content'] ) ) {
			$this->issue( $id, 'content_mismatch' );
			return new WP_Error( 'wpmozo_library_invalid_content', __( 'Pattern content does not match its metadata.', 'wpmozo-blocks-and-addons' ) );
		}
		if ( '' === trim( $wrapper['content'] ) ) {
			return new WP_Error( 'wpmozo_library_invalid_content', __( 'Pattern content is empty or not a string.', 'wpmozo-blocks-and-addons' ) );
		}
		if ( ! hash_equals( $pattern['content_sha256'], hash( 'sha256', $wrapper['content'] ) ) ) {
			// The content changed without compiling the catalog again (or a partial deploy).
			$this->issue( $id, 'content_checksum' );
			return new WP_Error( 'wpmozo_library_invalid_content', __( 'Pattern content does not match its checksum.', 'wpmozo-blocks-and-addons' ) );
		}
		return $wrapper['content'];
	}

	/**
	 * A pattern's content file, relative to its source's folder.
	 *
	 * @param string $slug Pattern slug.
	 * @return string
	 */
	public static function content_path( $slug ) {
		return 'patterns/' . $slug . '/' . self::CONTENT_FILE;
	}

	/**
	 * A central map's file, relative to its source's folder.
	 *
	 * @param string $map Map name ('media', 'links', 'icons', 'demo-text', 'categories', 'tags').
	 * @return string
	 */
	public static function map_path( $map ) {
		return self::MAP_FOLDER . $map . '.json';
	}

	/**
	 * Absolute path of a pattern's content file; false when it is missing.
	 *
	 * @param array  $source Source.
	 * @param string $slug   Pattern slug.
	 * @return string|false
	 */
	private function content_file( $source, $slug ) {
		return $this->safe_file( $source['path'], self::content_path( $slug ) );
	}

	/**
	 * Modification time of a pattern's content file (for cache keys).
	 *
	 * @param string $source Source id.
	 * @param string $slug   Pattern slug.
	 * @return int
	 */
	public function get_content_mtime( $source, $slug ) {
		$source = $this->get_source( $source );
		$file   = $source ? $this->content_file( $source, $slug ) : false;
		return false === $file ? 0 : (int) filemtime( $file );
	}

	/**
	 * Problems found while registering or loading.
	 *
	 * @return array
	 */
	public function get_issues() {
		$this->get_patterns();
		return $this->issues;
	}

	/**
	 * Number of patterns skipped because they need a newer plugin version.
	 *
	 * @return int
	 */
	public function get_newer_schema_count() {
		$this->get_patterns();
		return $this->newer_schema;
	}

	/**
	 * Load and normalise the metadata of one source.
	 *
	 * @param array $source Source.
	 */
	private function load_source_patterns( $source ) {
		$item = 'catalog:' . $source['id'];
		$file = $this->safe_file( $source['path'], self::CATALOG_FILE );
		if ( false === $file ) {
			if ( is_dir( $source['path'] . 'patterns' ) ) {
				$this->issue( $item, 'catalog_missing' );
			}
			return;
		}
		// A broken catalog skips this source only; every other source keeps working.
		$catalog = self::read_json( $file, self::MAX_JSON_BYTES, $error );
		if ( null !== $error ) {
			$this->issue( $item, 'catalog_' . $error );
			return;
		}
		if ( ! isset( $catalog['source'], $catalog['patterns'] ) || $source['id'] !== $catalog['source'] || ! is_array( $catalog['patterns'] ) ) {
			$this->issue( $item, 'catalog_mismatch' );
			return;
		}
		$this->textdomains[ $source['id'] ] = isset( $catalog['textdomain'] ) && is_string( $catalog['textdomain'] ) && preg_match( self::ID_PATTERN, $catalog['textdomain'] ) ? $catalog['textdomain'] : '';

		foreach ( $catalog['patterns'] as $meta ) {
			// One invalid entry skips only that pattern.
			$slug = is_array( $meta ) && isset( $meta['slug'] ) && is_string( $meta['slug'] ) ? $meta['slug'] : '';
			$id   = $source['id'] . '/' . $slug;
			if ( ! preg_match( self::ID_PATTERN, $slug ) || strlen( $slug ) > 64 ) {
				$this->issue( $id, 'invalid_slug' );
				continue;
			}
			if ( isset( $this->patterns[ $id ] ) ) {
				$this->issue( $id, 'duplicate_slug' );
				continue;
			}
			$pattern = $this->normalise( $meta, $source, $slug );
			if ( null !== $pattern ) {
				$this->patterns[ $id ] = $pattern;
			}
		}
	}

	/**
	 * A catalog string in the user's language, from the source's text domain. The strings are
	 * listed for translation tools in the source's generated data/strings.php.
	 *
	 * @param string $text      English string from the catalog.
	 * @param string $source_id Source id.
	 * @return string
	 */
	private function translated( $text, $source_id ) {
		$domain = isset( $this->textdomains[ $source_id ] ) ? $this->textdomains[ $source_id ] : '';
		if ( '' === $domain ) {
			return $text;
		}
		// phpcs:ignore WordPress.WP.I18n.LowLevelTranslationFunction, WordPress.WP.I18n.NonSingularStringLiteralText, WordPress.WP.I18n.NonSingularStringLiteralDomain -- Catalog strings; data/strings.php lists them for translation tools.
		return translate( $text, $domain );
	}

	/**
	 * Validate and normalise metadata (schema 1).
	 *
	 * @param array  $meta   Raw metadata.
	 * @param array  $source Source.
	 * @param string $slug   Folder name.
	 * @return array|null Null when the pattern is skipped.
	 */
	private function normalise( $meta, $source, $slug ) {
		$id     = $source['id'] . '/' . $slug;
		$schema = isset( $meta['schema'] ) ? (int) $meta['schema'] : 0;
		if ( $schema > self::SCHEMA ) {
			++$this->newer_schema;
			return null;
		}
		if ( self::SCHEMA !== $schema ) {
			return $this->issue( $id, 'invalid_schema' );
		}
		if ( ! isset( $meta['slug'] ) || $slug !== $meta['slug'] ) {
			return $this->issue( $id, 'slug_mismatch' );
		}
		$revision = isset( $meta['revision'] ) ? (int) $meta['revision'] : 0;
		if ( $revision < 1 ) {
			return $this->issue( $id, 'invalid_revision' );
		}
		if ( empty( $meta['title'] ) || ! is_string( $meta['title'] ) ) {
			return $this->issue( $id, 'missing_title' );
		}
		if ( empty( $meta['category'] ) || ! isset( $this->categories[ $meta['category'] ] ) ) {
			return $this->issue( $id, 'unknown_category' );
		}
		$access = isset( $meta['access'] ) ? $meta['access'] : '';
		if ( $access !== $source['access'] ) {
			return $this->issue( $id, 'access_mismatch' );
		}
		$thumbnail = $this->image( $meta, 'thumbnail', $source );
		if ( null === $thumbnail ) {
			return $this->issue( $id, 'invalid_thumbnail' );
		}
		if ( empty( $meta['since'] ) || ! is_string( $meta['since'] ) || ! preg_match( '/^\d+\.\d+(\.\d+)?$/', $meta['since'] ) ) {
			return $this->issue( $id, 'invalid_since' );
		}
		// The blocks the content uses, declared in pattern.xml and checked against the content when
		// the catalog is compiled and again when the content is analysed.
		$blocks = array();
		if ( isset( $meta['blocks'] ) && is_array( $meta['blocks'] ) ) {
			foreach ( $meta['blocks'] as $block ) {
				if ( ! is_string( $block ) || ! preg_match( self::BLOCK_NAME_PATTERN, $block ) ) {
					$blocks = array();
					break;
				}
				$blocks[] = $block;
			}
		}
		if ( empty( $blocks ) ) {
			return $this->issue( $id, 'invalid_blocks' );
		}
		$blocks = array_values( array_unique( $blocks ) );
		sort( $blocks );
		if ( ! isset( $meta['content_sha256'] ) || ! is_string( $meta['content_sha256'] ) || ! preg_match( '/^[a-f0-9]{64}$/', $meta['content_sha256'] ) ) {
			return $this->issue( $id, 'invalid_checksum' );
		}
		// Optional information only; never used for access (PL-D34).
		$published = isset( $meta['published'] ) && is_string( $meta['published'] ) && preg_match( '/^\d{4}-\d{2}-\d{2}$/', $meta['published'] ) ? $meta['published'] : null;

		$tags = array();
		if ( isset( $meta['tags'] ) && is_array( $meta['tags'] ) ) {
			foreach ( $meta['tags'] as $tag ) {
				if ( is_string( $tag ) && isset( $this->tags[ $tag ] ) ) {
					$tags[] = $tag;
				}
			}
		}
		$keywords = array();
		if ( isset( $meta['keywords'] ) && is_array( $meta['keywords'] ) ) {
			foreach ( $meta['keywords'] as $keyword ) {
				if ( is_string( $keyword ) && '' !== $keyword ) {
					$keywords[] = $this->translated( $keyword, $source['id'] );
				}
			}
		}
		$requires = array(
			'plugins' => array(),
			'lite'    => '',
			'wp'      => '',
		);
		if ( isset( $meta['requires'] ) && is_array( $meta['requires'] ) ) {
			if ( isset( $meta['requires']['plugins'] ) && is_array( $meta['requires']['plugins'] ) ) {
				foreach ( $meta['requires']['plugins'] as $plugin => $constraint ) {
					if ( is_string( $plugin ) && preg_match( self::ID_PATTERN, $plugin ) ) {
						$requires['plugins'][ $plugin ] = is_string( $constraint ) ? $constraint : '';
					}
				}
			}
			foreach ( array( 'lite', 'wp' ) as $key ) {
				if ( isset( $meta['requires'][ $key ] ) && is_string( $meta['requires'][ $key ] ) ) {
					$requires[ $key ] = $meta['requires'][ $key ];
				}
			}
		}

		$status      = isset( $meta['status'] ) && in_array( $meta['status'], array( 'active', 'deprecated', 'hidden' ), true ) ? $meta['status'] : 'active';
		$type        = isset( $meta['type'] ) && in_array( $meta['type'], array( 'section', 'page', 'template' ), true ) ? $meta['type'] : 'section';
		$layout      = isset( $meta['layout'] ) && in_array( $meta['layout'], array( 'full', 'wide', 'content' ), true ) ? $meta['layout'] : '';
		$replaced_by = isset( $meta['replaced_by'] ) && is_string( $meta['replaced_by'] ) && preg_match( '#^[a-z0-9-]+/[a-z0-9-]+$#', $meta['replaced_by'] ) ? $meta['replaced_by'] : '';

		return array(
			'id'             => $id,
			'source'         => $source['id'],
			'slug'           => $slug,
			'schema'         => $schema,
			'revision'       => $revision,
			'type'           => $type,
			'title'          => $this->translated( $meta['title'], $source['id'] ),
			'description'    => isset( $meta['description'] ) && is_string( $meta['description'] ) && '' !== $meta['description'] ? $this->translated( $meta['description'], $source['id'] ) : '',
			'category'       => $meta['category'],
			'tags'           => $tags,
			'keywords'       => $keywords,
			'access'         => $access,
			'thumbnail'      => $thumbnail,
			'preview'        => $this->image( $meta, 'preview', $source ),
			'since'          => $meta['since'],
			'published'      => $published,
			'requires'       => $requires,
			'layout'         => $layout,
			'order'          => isset( $meta['order'] ) ? (int) $meta['order'] : 1000,
			'status'         => $status,
			'replaced_by'    => $replaced_by,
			'blocks'         => $blocks,
			'content_sha256' => $meta['content_sha256'],
		);
	}

	/**
	 * Validate an image entry ({ file, width, height }).
	 *
	 * @param array  $meta   Raw metadata.
	 * @param string $key    'thumbnail' or 'preview'.
	 * @param array  $source Source.
	 * @return array|null
	 */
	private function image( $meta, $key, $source ) {
		if ( empty( $meta[ $key ] ) || ! is_array( $meta[ $key ] ) ) {
			return null;
		}
		$image  = $meta[ $key ];
		$file   = isset( $image['file'] ) && is_string( $image['file'] ) ? $image['file'] : '';
		$width  = isset( $image['width'] ) ? (int) $image['width'] : 0;
		$height = isset( $image['height'] ) ? (int) $image['height'] : 0;
		if ( ! preg_match( self::FILE_PATTERN, $file ) || false !== strpos( $file, '..' ) || $width < 1 || $height < 1 ) {
			return null;
		}
		return array(
			'file'   => $file,
			'width'  => $width,
			'height' => $height,
			'exists' => false !== $this->safe_file( $source['path'], $file ),
		);
	}

	/**
	 * Resolve a relative path inside a base folder; false if missing or outside it.
	 *
	 * @param string $base     Base folder with trailing slash.
	 * @param string $relative Relative path.
	 * @return string|false
	 */
	private function safe_file( $base, $relative ) {
		$real = realpath( $base . $relative );
		if ( false === $real || 0 !== strpos( $real, $base ) || ! is_file( $real ) ) {
			return false;
		}
		return $real;
	}

	/**
	 * Read a library data file (catalog, content or map) as JSON. The file is read as text and never
	 * executed. A file that is missing, too large or not a JSON object returns null and sets $error,
	 * so one broken file can't take the library down.
	 *
	 * @param string      $file      Absolute path.
	 * @param int         $max_bytes Largest accepted file size.
	 * @param string|null $error     Set to the problem code ('missing', 'too_large', 'unreadable',
	 *                               'invalid_json'), or null.
	 * @return array|null
	 */
	public static function read_json( $file, $max_bytes, &$error = null ) {
		$error = null;
		$size  = is_file( $file ) ? filesize( $file ) : false;
		if ( false === $size ) {
			$error = 'missing';
			return null;
		}
		if ( $size > $max_bytes ) {
			$error = 'too_large';
			return null;
		}
		$raw = file_get_contents( $file ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents -- A local plugin data file.
		if ( ! is_string( $raw ) ) {
			$error = 'unreadable';
			return null;
		}
		$value = json_decode( $raw, true, 64 );
		if ( JSON_ERROR_NONE !== json_last_error() || ! is_array( $value ) ) {
			$error = 'invalid_json';
			return null;
		}
		return $value;
	}

	/**
	 * Record a problem found outside the registry (a central map, for example). Shown in the
	 * catalog's `issues` to administrators only.
	 *
	 * @param string $item Item id, such as "map:lite/icons".
	 * @param string $code Problem code.
	 */
	public function add_issue( $item, $code ) {
		$this->issue( (string) $item, (string) $code );
	}

	/**
	 * Record a refused registration.
	 *
	 * @param string $id      Source id.
	 * @param string $code    Problem code.
	 * @param string $message Message.
	 * @return WP_Error
	 */
	private function refuse( $id, $code, $message ) {
		$this->issues[] = array(
			'item' => 'source:' . $id,
			'code' => $code,
		);
		return new WP_Error( 'wpmozo_library_source_' . $code, $message );
	}

	/**
	 * Record a skipped pattern.
	 *
	 * @param string $id   Pattern id.
	 * @param string $code Problem code.
	 * @return null
	 */
	private function issue( $id, $code ) {
		$this->issues[] = array(
			'item' => $id,
			'code' => $code,
		);
		return null;
	}
}
