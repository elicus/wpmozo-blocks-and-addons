<?php
/**
 * Pattern Library service.
 *
 * Builds the source registry lazily (only when a library request needs it),
 * analyses pattern content, and decides availability per user on the server.
 * See docs/pattern-library/architecture.md.
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
 * Pattern Library service.
 *
 * @since n.e.x.t
 */
final class Mozo_Bna_Library {

	/**
	 * Version of the `library` integration feature.
	 *
	 * @var int
	 */
	const FEATURE_VERSION = 1;

	/**
	 * Lifetime of the cached content analysis.
	 *
	 * @var int
	 */
	const CACHE_TTL = WEEK_IN_SECONDS;

	/**
	 * The single instance.
	 *
	 * @var Mozo_Bna_Library|null
	 */
	private static $instance = null;

	/**
	 * Registry, built on first use.
	 *
	 * @var Mozo_Bna_Library_Registry|null
	 */
	private $registry = null;

	/**
	 * Resolver.
	 *
	 * @var Mozo_Bna_Library_Resolver|null
	 */
	private $resolver = null;

	/**
	 * Validator.
	 *
	 * @var Mozo_Bna_Library_Validator|null
	 */
	private $validator = null;

	/**
	 * Analysis cache per source: [ source => [ 'key' => string, 'items' => array, 'dirty' => bool ] ].
	 *
	 * @var array
	 */
	private $analysis = array();

	/**
	 * Entitlement state per source for the current request.
	 *
	 * @var array
	 */
	private $entitlements = array();

	/**
	 * Main instance.
	 *
	 * @return Mozo_Bna_Library
	 */
	public static function instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Hook the REST routes. Nothing else runs until a library request arrives.
	 */
	public function init_hooks() {
		add_action( 'rest_api_init', array( new Mozo_Bna_Library_Rest( $this ), 'register_routes' ) );
	}

	/**
	 * Whether an administrator has switched the library off (default: on).
	 *
	 * @return bool
	 */
	public static function is_enabled() {
		$options = Mozo_Bna_Blocks_And_Addons::get_plugin_options();
		return ! ( is_array( $options ) && isset( $options['wpmozo_pattern_library'] ) && 'off' === $options['wpmozo_pattern_library'] );
	}

	/**
	 * Capability needed to use the library.
	 *
	 * @return string
	 */
	public static function capability() {
		/**
		 * Filters the capability needed to browse and insert library patterns.
		 *
		 * @since n.e.x.t
		 * @param string $capability Default 'edit_posts'.
		 */
		$capability = apply_filters( 'wpmozo_bna_library_capability', 'edit_posts' );
		return is_string( $capability ) && '' !== $capability ? $capability : 'edit_posts';
	}

	/**
	 * The registry, with Lite's own source and every add-on source registered.
	 *
	 * @return Mozo_Bna_Library_Registry
	 */
	public function registry() {
		if ( null === $this->registry ) {
			$this->registry = new Mozo_Bna_Library_Registry();
			$this->register_lite_source( $this->registry );

			/**
			 * Fires when the Pattern Library needs its sources (only on library requests).
			 *
			 * Add-ons call $registry->register_source(). See registry-and-contract.md.
			 *
			 * @since n.e.x.t
			 * @param Mozo_Bna_Library_Registry $registry Source registry.
			 */
			do_action( 'wpmozo_bna_library_register_sources', $this->registry );
		}
		return $this->registry;
	}

	/**
	 * The resolver.
	 *
	 * @return Mozo_Bna_Library_Resolver
	 */
	public function resolver() {
		if ( null === $this->resolver ) {
			$this->resolver = new Mozo_Bna_Library_Resolver( $this->registry() );
		}
		return $this->resolver;
	}

	/**
	 * The validator.
	 *
	 * @return Mozo_Bna_Library_Validator
	 */
	public function validator() {
		if ( null === $this->validator ) {
			$this->validator = new Mozo_Bna_Library_Validator();
		}
		return $this->validator;
	}

	/**
	 * Content analysis of one pattern (validation after token resolution), cached
	 * per source until the plugin version, a central map or the content file changes.
	 *
	 * @param array $pattern Pattern metadata.
	 * @return array Validator result, plus 'errors' for token problems.
	 */
	public function analyse( $pattern ) {
		$source = $pattern['source'];
		$this->load_analysis_cache( $source );
		$mtime = $this->registry()->get_content_mtime( $source, $pattern['slug'] );
		$items = $this->analysis[ $source ]['items'];
		if ( isset( $items[ $pattern['slug'] ] ) && $items[ $pattern['slug'] ]['revision'] === $pattern['revision'] && $items[ $pattern['slug'] ]['mtime'] === $mtime ) {
			return $items[ $pattern['slug'] ]['result'];
		}

		$content = $this->resolved_content( $pattern );
		if ( is_wp_error( $content ) ) {
			$result           = $this->validator()->validate( '' );
			$result['errors'] = array( $content->get_error_code() );
		} else {
			$result = $this->validator()->validate( $content );
		}

		$this->analysis[ $source ]['items'][ $pattern['slug'] ] = array(
			'revision' => $pattern['revision'],
			'mtime'    => $mtime,
			'result'   => $result,
		);
		$this->analysis[ $source ]['dirty']                     = true;
		return $result;
	}

	/**
	 * Save analysis caches that changed during this request.
	 */
	public function save_analysis_cache() {
		foreach ( $this->analysis as $source => $cache ) {
			if ( $cache['dirty'] ) {
				set_transient( $cache['key'], $cache['items'], self::CACHE_TTL );
				$this->analysis[ $source ]['dirty'] = false;
			}
		}
	}

	/**
	 * Pattern content with tokens resolved.
	 *
	 * @param array $pattern Pattern metadata.
	 * @return string|WP_Error
	 */
	public function resolved_content( $pattern ) {
		$content = $this->registry()->get_content( $pattern['source'], $pattern['slug'] );
		if ( is_wp_error( $content ) ) {
			return $content;
		}
		return $this->resolver()->resolve_tokens( $content );
	}

	/**
	 * Availability of a pattern for the current user, decided on the server.
	 *
	 * @param array $pattern  Pattern metadata.
	 * @param array $analysis Content analysis.
	 * @return array { state: 'available'|'locked'|'unavailable', reasons: string[] }
	 */
	public function availability( $pattern, $analysis ) {
		$reasons = array();
		$locked  = false;

		if ( 'pro' === $pattern['access'] ) {
			$entitlement = $this->entitlement( $pattern['source'] );
			if ( ! $this->is_entitled( $entitlement, $pattern ) ) {
				$locked    = true;
				$reasons[] = $entitlement['state'];
			}
		}

		if ( ! $analysis['valid'] ) {
			$reasons[] = 'invalid_content';
		}

		$disabled = array();
		foreach ( array_filter( Mozo_Bna_Blocks_And_Addons::get_deactivate_blocks() ) as $slug ) {
			$disabled[ 'wpmozo/' . $slug ] = true;
		}
		$block_registry = WP_Block_Type_Registry::get_instance();
		foreach ( $analysis['blocks'] as $name ) {
			if ( isset( $disabled[ $name ] ) ) {
				$reasons[] = 'block_disabled:' . $name;
			} elseif ( ! $block_registry->is_registered( $name ) ) {
				$reasons[] = 'block_missing:' . $name;
			}
		}

		foreach ( $pattern['requires']['plugins'] as $plugin => $constraint ) {
			if ( ! $this->plugin_available( $plugin, $constraint ) ) {
				$reasons[] = 'plugin_missing:' . $plugin;
			}
		}
		if ( '' !== $pattern['requires']['lite'] && ! self::satisfies( WPMOZO_BNA_VERSION, $pattern['requires']['lite'] ) ) {
			$reasons[] = 'lite_outdated';
		}
		if ( '' !== $pattern['requires']['wp'] && ! self::satisfies( get_bloginfo( 'version' ), $pattern['requires']['wp'] ) ) {
			$reasons[] = 'wp_outdated';
		}

		if ( $analysis['requires_unfiltered_html'] && ! current_user_can( 'unfiltered_html' ) ) {
			$reasons[] = 'role_unfiltered_html';
		}

		if ( $locked ) {
			$state = 'locked';
		} elseif ( ! empty( $reasons ) ) {
			$state = 'unavailable';
		} else {
			$state = 'available';
		}

		return array(
			'state'   => $state,
			'reasons' => $reasons,
		);
	}

	/**
	 * Entitlement state of a premium source for the current user, asked once per request.
	 *
	 * Fails closed: a missing callback, an exception or an unknown answer locks the source.
	 *
	 * @param string $source Source id.
	 * @return array { state: string, cutoff: string|null, manage: bool }
	 */
	public function entitlement( $source ) {
		if ( isset( $this->entitlements[ $source ] ) ) {
			return $this->entitlements[ $source ];
		}
		$state = array(
			'state'  => 'entitlement_unavailable',
			'cutoff' => null,
			'manage' => false,
		);
		$data  = $this->registry()->get_source( $source );
		if ( null !== $data && is_callable( $data['entitlement'] ) ) {
			try {
				$answer = call_user_func( $data['entitlement'], array( 'user_id' => get_current_user_id() ) );
			} catch ( Throwable $e ) {
				$answer = null;
			}
			$known = array( 'entitled', 'license_inactive', 'license_expired', 'license_revoked' );
			if ( is_array( $answer ) && isset( $answer['state'] ) && in_array( $answer['state'], $known, true ) ) {
				$state = array(
					'state'  => $answer['state'],
					'cutoff' => isset( $answer['cutoff'] ) && is_string( $answer['cutoff'] ) && preg_match( '/^\d{4}-\d{2}-\d{2}$/', $answer['cutoff'] ) ? $answer['cutoff'] : null,
					'manage' => ! empty( $answer['manage'] ),
				);
			}
		}
		$this->entitlements[ $source ] = $state;
		return $state;
	}

	/**
	 * Whether a pattern is covered by the entitlement. After expiry, patterns first
	 * published on or before the cutoff date stay available.
	 *
	 * @param array $entitlement Entitlement state.
	 * @param array $pattern     Pattern metadata.
	 * @return bool
	 */
	private function is_entitled( $entitlement, $pattern ) {
		if ( 'entitled' === $entitlement['state'] ) {
			return true;
		}
		return 'license_expired' === $entitlement['state']
			&& null !== $entitlement['cutoff']
			&& null !== $pattern['published']
			&& $pattern['published'] <= $entitlement['cutoff'];
	}

	/**
	 * Whether a required plugin is available. Unknown plugins count as missing.
	 *
	 * @param string $plugin     Plugin key.
	 * @param string $constraint Version constraint such as ">=8.0", or empty.
	 * @return bool
	 */
	private function plugin_available( $plugin, $constraint ) {
		if ( 'woocommerce' === $plugin ) {
			if ( ! class_exists( 'WooCommerce' ) ) {
				return false;
			}
			return '' === $constraint || ! defined( 'WC_VERSION' ) || self::satisfies( WC_VERSION, $constraint );
		}
		return false;
	}

	/**
	 * Whether a version satisfies a ">=x.y" style constraint (a bare version means >=).
	 *
	 * @param string $version    Installed version.
	 * @param string $constraint Constraint.
	 * @return bool
	 */
	public static function satisfies( $version, $constraint ) {
		if ( ! preg_match( '/^(>=|>|<=|<|=)?\s*(\d+(?:\.\d+){0,2})$/', trim( $constraint ), $match ) ) {
			return false;
		}
		$operator = '' === $match[1] ? '>=' : $match[1];
		return version_compare( $version, $match[2], '=' === $operator ? '==' : $operator );
	}

	/**
	 * Register Lite's own source, categories and tags.
	 *
	 * @param Mozo_Bna_Library_Registry $registry Registry.
	 */
	private function register_lite_source( $registry ) {
		$path = WPMOZO_BNA_INC_DIR_PATH . 'library/';
		foreach ( self::include_file( $path . 'data/categories.php' ) as $id => $category ) {
			$registry->add_category( $id, $category['label'], 'lite', $category['order'] );
		}
		foreach ( self::include_file( $path . 'data/tags.php' ) as $id => $label ) {
			$registry->add_tag( $id, $label );
		}
		$registry->register_source(
			'lite',
			array(
				'contract' => Mozo_Bna_Library_Registry::CONTRACT,
				'label'    => __( 'Free', 'wpmozo-blocks-and-addons' ),
				'version'  => WPMOZO_BNA_VERSION,
				'path'     => $path,
				'url'      => WPMOZO_BNA_INC_DIR_URL . 'library/',
				'access'   => 'free',
			)
		);
	}

	/**
	 * Load the cached analysis of one source.
	 *
	 * @param string $source Source id.
	 */
	private function load_analysis_cache( $source ) {
		if ( isset( $this->analysis[ $source ] ) ) {
			return;
		}
		$data   = $this->registry()->get_source( $source );
		$stamps = array( $source, $data ? $data['version'] : '' );
		foreach ( array( 'media', 'links', 'icons', 'demo-text' ) as $map ) {
			$file     = $data ? $data['path'] . 'data/' . $map . '.php' : '';
			$stamps[] = '' !== $file && is_file( $file ) ? filemtime( $file ) : 0;
		}
		$key                       = 'wpmozo_bna_lib_' . md5( implode( '|', $stamps ) );
		$items                     = get_transient( $key );
		$this->analysis[ $source ] = array(
			'key'   => $key,
			'items' => is_array( $items ) ? $items : array(),
			'dirty' => false,
		);
	}

	/**
	 * Include a data file in an isolated scope; arrays only.
	 *
	 * @param string $file Absolute path.
	 * @return array
	 */
	private static function include_file( $file ) {
		$value = is_file( $file ) ? include $file : array();
		return is_array( $value ) ? $value : array();
	}
}
