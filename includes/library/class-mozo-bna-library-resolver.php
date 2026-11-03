<?php
/**
 * Pattern Library: asset URLs, central maps and content tokens.
 *
 * The only place that builds library asset URLs (see the CDN and asset
 * requirement) and resolves `{{wpmozo:<type>:<source>/<key>}}` tokens from each
 * source's central maps (`data/media.php`, `links.php`, `icons.php`, `demo-text.php`).
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
 * Asset and token resolver.
 *
 * @since n.e.x.t
 */
final class Mozo_Bna_Library_Resolver {

	/**
	 * Token format: {{wpmozo:<type>:<source>/<key>}}.
	 *
	 * @var string
	 */
	const TOKEN_PATTERN = '/\{\{wpmozo:(media|link|icon|text):([a-z0-9]+(?:-[a-z0-9]+)*)\/([a-z0-9]+(?:-[a-z0-9]+)*)\}\}/';

	/**
	 * Map file for each token type.
	 *
	 * @var array
	 */
	const MAPS = array(
		'media' => 'media',
		'link'  => 'links',
		'icon'  => 'icons',
		'text'  => 'demo-text',
	);

	/**
	 * Characters allowed in a resolved value, per token type. Values must be safe
	 * unchanged inside both block comment JSON and HTML attributes: no quotes,
	 * ampersands, angle brackets or braces.
	 *
	 * @var array
	 */
	const SAFE_VALUE = array(
		'media' => '#^https?://[A-Za-z0-9.:-]+(/[A-Za-z0-9/._~%-]*)?$#',
		'link'  => '#^(\#[A-Za-z0-9_-]*|/[A-Za-z0-9/._~%-]*|https?://[A-Za-z0-9.:-]+(/[A-Za-z0-9/._~%-]*)?|mailto:[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+|tel:\+?[0-9 ()-]+)$#',
		'icon'  => '#^[a-z0-9 _-]+$#',
		'text'  => '#^[\p{L}\p{N}\p{Zs}.,:;!?@+()/\#%’–—-]*$#u',
	);

	/**
	 * Registry.
	 *
	 * @var Mozo_Bna_Library_Registry
	 */
	private $registry;

	/**
	 * Loaded maps, keyed by "<source>:<map>".
	 *
	 * @var array
	 */
	private $maps = array();

	/**
	 * Constructor.
	 *
	 * @param Mozo_Bna_Library_Registry $registry Registry.
	 */
	public function __construct( $registry ) {
		$this->registry = $registry;
	}

	/**
	 * URL of a file in a source's library folder.
	 *
	 * Development: each source's own plugin URL. A future production CDN setting
	 * changes only this method (cdn-and-asset-requirements.md, section 1).
	 *
	 * @param string $source   Source id.
	 * @param string $relative Path relative to the source's library folder.
	 * @return string Empty string when the source or path is invalid.
	 */
	public function asset_url( $source, $relative ) {
		$source = $this->registry->get_source( $source );
		if ( null === $source || ! preg_match( Mozo_Bna_Library_Registry::FILE_PATTERN, $relative ) || false !== strpos( $relative, '..' ) ) {
			return '';
		}
		return $source['url'] . $relative;
	}

	/**
	 * One of a source's central maps.
	 *
	 * @param string $source Source id.
	 * @param string $map    Map name (media, links, icons, demo-text, categories, tags).
	 * @return array
	 */
	public function get_map( $source, $map ) {
		$cache_key = $source . ':' . $map;
		if ( ! isset( $this->maps[ $cache_key ] ) ) {
			$this->maps[ $cache_key ] = array();
			$data                     = $this->registry->get_source( $source );
			$allowed                  = array( 'media', 'links', 'icons', 'demo-text', 'categories', 'tags' );
			if ( null !== $data && in_array( $map, $allowed, true ) ) {
				$file = $data['path'] . 'data/' . $map . '.php';
				if ( is_file( $file ) ) {
					$value = self::include_file( $file );
					if ( is_array( $value ) ) {
						$this->maps[ $cache_key ] = $value;
					}
				}
			}
		}
		return $this->maps[ $cache_key ];
	}

	/**
	 * Replace every token in pattern content. Fails closed on any unknown or unsafe token.
	 *
	 * @param string $content Block markup.
	 * @return string|WP_Error
	 */
	public function resolve_tokens( $content ) {
		$error    = null;
		$resolved = preg_replace_callback(
			self::TOKEN_PATTERN,
			function ( $token ) use ( &$error ) {
				$value = $this->token_value( $token[1], $token[2], $token[3] );
				if ( is_wp_error( $value ) ) {
					$error = $value;
					return '';
				}
				return $value;
			},
			$content
		);
		if ( null !== $error ) {
			return $error;
		}
		if ( null === $resolved || false !== strpos( $resolved, '{{wpmozo:' ) ) {
			return new WP_Error( 'wpmozo_library_invalid_token', __( 'Pattern content has a malformed token.', 'wpmozo-blocks-and-addons' ) );
		}
		return $resolved;
	}

	/**
	 * Value of one token.
	 *
	 * @param string $type   Token type.
	 * @param string $source Source id.
	 * @param string $key    Map key.
	 * @return string|WP_Error
	 */
	private function token_value( $type, $source, $key ) {
		$map = $this->get_map( $source, self::MAPS[ $type ] );
		if ( ! isset( $map[ $key ] ) ) {
			return new WP_Error( 'wpmozo_library_unknown_token', sprintf( 'Unknown %s token: %s/%s', $type, $source, $key ) );
		}
		$entry = $map[ $key ];
		if ( 'media' === $type ) {
			$value = is_array( $entry ) && isset( $entry['file'] ) ? $this->asset_url( $source, $entry['file'] ) : '';
		} else {
			$value = is_string( $entry ) ? $entry : '';
		}
		if ( ! preg_match( self::SAFE_VALUE[ $type ], $value ) ) {
			return new WP_Error( 'wpmozo_library_unsafe_token', sprintf( 'Unsafe value for %s token: %s/%s', $type, $source, $key ) );
		}
		return $value;
	}

	/**
	 * Include a map file in an isolated scope.
	 *
	 * @param string $file Absolute path.
	 * @return mixed
	 */
	private static function include_file( $file ) {
		return include $file;
	}
}
