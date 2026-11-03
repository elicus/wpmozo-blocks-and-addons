<?php
/**
 * Pattern Library: pattern sources and pattern metadata.
 *
 * A source (Lite itself, or an add-on such as Pro) supplies a folder with
 * `patterns/<slug>/pattern.php` (metadata) and `patterns/<slug>/content.php`
 * (block markup). See docs/pattern-library/registry-and-contract.md.
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
	 *     @type string   $path        Absolute path of the source's library folder.
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
		$file = $this->safe_file( $this->sources[ $source ]['path'], 'patterns/' . $slug . '/content.php' );
		if ( false === $file ) {
			return new WP_Error( 'wpmozo_library_invalid_content', __( 'Pattern content is missing.', 'wpmozo-blocks-and-addons' ) );
		}
		$content = self::include_file( $file );
		if ( ! is_string( $content ) || '' === trim( $content ) ) {
			return new WP_Error( 'wpmozo_library_invalid_content', __( 'Pattern content is empty or not a string.', 'wpmozo-blocks-and-addons' ) );
		}
		return $content;
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
		$file   = $source ? $this->safe_file( $source['path'], 'patterns/' . $slug . '/content.php' ) : false;
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
		$folders = glob( $source['path'] . 'patterns/*', GLOB_ONLYDIR );
		if ( empty( $folders ) ) {
			return;
		}
		sort( $folders );
		foreach ( $folders as $folder ) {
			$slug = basename( $folder );
			$id   = $source['id'] . '/' . $slug;
			if ( ! preg_match( self::ID_PATTERN, $slug ) || strlen( $slug ) > 64 ) {
				$this->issue( $id, 'invalid_slug' );
				continue;
			}
			$file = $this->safe_file( $source['path'], 'patterns/' . $slug . '/pattern.php' );
			$meta = false === $file ? null : self::include_file( $file );
			if ( ! is_array( $meta ) ) {
				$this->issue( $id, 'metadata_missing' );
				continue;
			}
			$pattern = $this->normalise( $meta, $source, $slug );
			if ( null !== $pattern ) {
				$this->patterns[ $id ] = $pattern;
			}
		}
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
		$published = isset( $meta['published'] ) && is_string( $meta['published'] ) && preg_match( '/^\d{4}-\d{2}-\d{2}$/', $meta['published'] ) ? $meta['published'] : null;
		if ( 'pro' === $access && null === $published ) {
			return $this->issue( $id, 'missing_published' );
		}

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
					$keywords[] = $keyword;
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
			'id'          => $id,
			'source'      => $source['id'],
			'slug'        => $slug,
			'schema'      => $schema,
			'revision'    => $revision,
			'type'        => $type,
			'title'       => $meta['title'],
			'description' => isset( $meta['description'] ) && is_string( $meta['description'] ) ? $meta['description'] : '',
			'category'    => $meta['category'],
			'tags'        => $tags,
			'keywords'    => $keywords,
			'access'      => $access,
			'thumbnail'   => $thumbnail,
			'preview'     => $this->image( $meta, 'preview', $source ),
			'since'       => $meta['since'],
			'published'   => $published,
			'requires'    => $requires,
			'layout'      => $layout,
			'order'       => isset( $meta['order'] ) ? (int) $meta['order'] : 1000,
			'status'      => $status,
			'replaced_by' => $replaced_by,
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
	 * Include a pattern file in an isolated scope and return its value.
	 *
	 * @param string $file Absolute path.
	 * @return mixed
	 */
	private static function include_file( $file ) {
		return include $file;
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
