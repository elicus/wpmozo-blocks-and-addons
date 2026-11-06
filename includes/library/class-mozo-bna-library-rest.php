<?php
/**
 * Pattern Library REST routes (read-only).
 *
 * GET wpmozo/v1/library/catalog                   Metadata only, availability per user.
 * GET wpmozo/v1/library/patterns/<source>/<slug>  Content, after every check is repeated.
 *
 * See docs/pattern-library/rest-api.md.
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
 * REST controller for the Pattern Library.
 *
 * @since n.e.x.t
 */
final class Mozo_Bna_Library_Rest {

	/**
	 * REST namespace (existing plugin namespace).
	 *
	 * @var string
	 */
	const REST_NAMESPACE = 'wpmozo/v1';

	/**
	 * Library service.
	 *
	 * @var Mozo_Bna_Library
	 */
	private $library;

	/**
	 * Constructor.
	 *
	 * @param Mozo_Bna_Library $library Library service.
	 */
	public function __construct( $library ) {
		$this->library = $library;
	}

	/**
	 * Register the routes.
	 */
	public function register_routes() {
		register_rest_route(
			self::REST_NAMESPACE,
			'/library/catalog',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_catalog' ),
				'permission_callback' => array( $this, 'check_permission' ),
			)
		);
		register_rest_route(
			self::REST_NAMESPACE,
			'/library/patterns/(?P<source>[a-z0-9-]+)/(?P<slug>[a-z0-9-]+)',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_pattern' ),
				'permission_callback' => array( $this, 'check_permission' ),
				'args'                => array(
					'source' => array(
						'type'    => 'string',
						'pattern' => '^[a-z0-9]+(-[a-z0-9]+)*$',
					),
					'slug'   => array(
						'type'    => 'string',
						'pattern' => '^[a-z0-9]+(-[a-z0-9]+)*$',
					),
				),
			)
		);
	}

	/**
	 * Logged-in users with the library capability only.
	 *
	 * @return true|WP_Error
	 */
	public function check_permission() {
		if ( ! is_user_logged_in() ) {
			return new WP_Error( 'rest_forbidden', __( 'You must be logged in to use the pattern library.', 'wpmozo-blocks-and-addons' ), array( 'status' => 401 ) );
		}
		if ( ! current_user_can( Mozo_Bna_Library::capability() ) ) {
			return new WP_Error( 'rest_forbidden', __( 'You are not allowed to use the pattern library.', 'wpmozo-blocks-and-addons' ), array( 'status' => 403 ) );
		}
		if ( ! Mozo_Bna_Library::is_enabled() ) {
			return new WP_Error( 'wpmozo_library_disabled', __( 'The pattern library is turned off.', 'wpmozo-blocks-and-addons' ), array( 'status' => 404 ) );
		}
		return true;
	}

	/**
	 * Catalog: metadata and availability only, never content or licence data.
	 *
	 * @param WP_REST_Request $request Request.
	 * @return WP_REST_Response
	 */
	public function get_catalog( $request ) {
		$registry = $this->library->registry();
		$resolver = $this->library->resolver();
		$patterns = array();
		$counts   = array();
		$problems = array();

		foreach ( $registry->get_patterns() as $pattern ) {
			if ( 'active' !== $pattern['status'] ) {
				continue;
			}
			$analysis     = $this->library->analyse( $pattern );
			$availability = $this->library->availability( $pattern, $analysis );
			if ( ! empty( $analysis['errors'] ) ) {
				$problems[] = array(
					'item' => $pattern['id'],
					'code' => implode( ',', $analysis['errors'] ),
				);
			}
			$counts[ $pattern['category'] ] = isset( $counts[ $pattern['category'] ] ) ? $counts[ $pattern['category'] ] + 1 : 1;
			$patterns[]                     = $this->catalog_item( $pattern, $analysis, $availability, $resolver );
		}
		$this->library->save_analysis_cache();

		usort(
			$patterns,
			function ( $a, $b ) {
				return $a['order'] === $b['order'] ? strcmp( $a['id'], $b['id'] ) : $a['order'] - $b['order'];
			}
		);

		$categories = array();
		foreach ( $registry->get_categories() as $category ) {
			$categories[] = array(
				'id'    => $category['id'],
				'label' => $category['label'],
				'count' => isset( $counts[ $category['id'] ] ) ? $counts[ $category['id'] ] : 0,
			);
		}

		$sources = array();
		foreach ( $registry->get_sources() as $source ) {
			$item = array(
				'id'     => $source['id'],
				'label'  => $source['label'],
				'access' => $source['access'],
			);
			if ( 'pro' === $source['access'] ) {
				$entitlement   = $this->library->entitlement( $source['id'] );
				$item['state'] = $entitlement['state'];
				$item['links'] = $entitlement['manage'] ? $source['links'] : array();
			}
			$sources[] = $item;
		}

		$lite_links = $resolver->get_map( 'lite', 'links' );
		$data       = array(
			'schema'     => Mozo_Bna_Library_Registry::SCHEMA,
			'context'    => array(
				'lite'                => WPMOZO_BNA_VERSION,
				'contract'            => wpmozo_bna_integration()->contract_version(),
				'newer_schema'        => $registry->get_newer_schema_count(),
				'can_unfiltered_html' => current_user_can( 'unfiltered_html' ),
				'pro'                 => $this->pro_context( $registry ),
				'links'               => array(
					'pro_upgrade' => isset( $lite_links['pro-upgrade'] ) && is_string( $lite_links['pro-upgrade'] ) ? esc_url_raw( $lite_links['pro-upgrade'] ) : '',
				),
			),
			'sources'    => $sources,
			'categories' => $categories,
			'tags'       => $registry->get_tags(),
			'patterns'   => $patterns,
		);
		if ( current_user_can( 'manage_options' ) ) {
			$data['issues'] = array_merge( $registry->get_issues(), $problems );
		}

		$etag     = '"' . md5( wp_json_encode( $data ) ) . '"';
		$response = new WP_REST_Response( $data );
		if ( $request->get_header( 'if_none_match' ) === $etag ) {
			$response = new WP_REST_Response( null, 304 );
		}
		$response->header( 'ETag', $etag );
		$response->header( 'Cache-Control', 'private, no-cache' );
		return $response;
	}

	/**
	 * Content of one pattern, after every availability check is repeated.
	 *
	 * @param WP_REST_Request $request Request.
	 * @return WP_REST_Response|WP_Error
	 */
	public function get_pattern( $request ) {
		$pattern = $this->library->registry()->get_pattern( $request['source'], $request['slug'] );
		if ( null === $pattern || 'hidden' === $pattern['status'] ) {
			return new WP_Error( 'wpmozo_library_not_found', __( 'Pattern not found.', 'wpmozo-blocks-and-addons' ), array( 'status' => 404 ) );
		}

		// Analyse again rather than trusting the cache, so this answer always matches the content
		// sent; the fresh result also updates the cache the catalog reads.
		$analysis     = $this->library->analyse( $pattern, true );
		$availability = $this->library->availability( $pattern, $analysis );
		$this->library->save_analysis_cache();

		if ( 'locked' === $availability['state'] ) {
			return new WP_Error(
				'wpmozo_library_locked',
				__( 'This pattern needs WPMozo Pro with an activated licence.', 'wpmozo-blocks-and-addons' ),
				array(
					'status'  => 403,
					'reasons' => $availability['reasons'],
				)
			);
		}
		if ( in_array( 'role_unfiltered_html', $availability['reasons'], true ) ) {
			return new WP_Error(
				'wpmozo_library_role',
				__( 'Your role cannot save this pattern without breaking it.', 'wpmozo-blocks-and-addons' ),
				array(
					'status'  => 403,
					'reasons' => $availability['reasons'],
				)
			);
		}
		if ( in_array( 'invalid_content', $availability['reasons'], true ) ) {
			return new WP_Error( 'wpmozo_library_invalid', __( 'This pattern failed validation.', 'wpmozo-blocks-and-addons' ), array( 'status' => 422 ) );
		}
		if ( 'available' !== $availability['state'] ) {
			return new WP_Error(
				'wpmozo_library_unavailable',
				__( 'This pattern is not available on this site.', 'wpmozo-blocks-and-addons' ),
				array(
					'status'  => 409,
					'reasons' => $availability['reasons'],
				)
			);
		}

		// Delivery re-validates the exact content that is sent, not the cached analysis.
		$content = $this->library->resolved_content( $pattern );
		$check   = is_wp_error( $content ) ? array( 'valid' => false ) : $this->library->validator()->validate( $content );
		if ( ! empty( $check['requires_unfiltered_html'] ) && ! current_user_can( 'unfiltered_html' ) ) {
			return new WP_Error( 'wpmozo_library_role', __( 'Your role cannot save this pattern without breaking it.', 'wpmozo-blocks-and-addons' ), array( 'status' => 403 ) );
		}
		if ( empty( $check['valid'] ) ) {
			return new WP_Error( 'wpmozo_library_invalid', __( 'This pattern failed validation.', 'wpmozo-blocks-and-addons' ), array( 'status' => 422 ) );
		}

		$response = new WP_REST_Response(
			array(
				'id'       => $pattern['id'],
				'revision' => $pattern['revision'],
				'blocks'   => $check['blocks'],
				'content'  => $content,
			)
		);
		$response->header( 'Cache-Control', 'no-store' );
		return $response;
	}

	/**
	 * One catalog entry.
	 *
	 * @param array                     $pattern      Pattern metadata.
	 * @param array                     $analysis     Content analysis.
	 * @param array                     $availability Availability.
	 * @param Mozo_Bna_Library_Resolver $resolver     Resolver.
	 * @return array
	 */
	private function catalog_item( $pattern, $analysis, $availability, $resolver ) {
		$image = function ( $image ) use ( $pattern, $resolver ) {
			if ( empty( $image ) ) {
				return null;
			}
			return array(
				'url'    => $image['exists'] ? $resolver->asset_url( $pattern['source'], $image['file'] ) : '',
				'width'  => $image['width'],
				'height' => $image['height'],
			);
		};
		return array(
			'id'           => $pattern['id'],
			'source'       => $pattern['source'],
			'slug'         => $pattern['slug'],
			'type'         => $pattern['type'],
			'title'        => $pattern['title'],
			'description'  => $pattern['description'],
			'category'     => $pattern['category'],
			'tags'         => $pattern['tags'],
			'keywords'     => $pattern['keywords'],
			'access'       => $pattern['access'],
			'revision'     => $pattern['revision'],
			'since'        => $pattern['since'],
			'layout'       => $pattern['layout'],
			'order'        => $pattern['order'],
			'thumbnail'    => $image( $pattern['thumbnail'] ),
			'preview'      => $image( $pattern['preview'] ),
			'blocks'       => $analysis['blocks'],
			'availability' => $availability,
		);
	}

	/**
	 * What the UI needs to know about Pro (for its messages only; never used for access).
	 *
	 * @param Mozo_Bna_Library_Registry $registry Registry.
	 * @return array
	 */
	private function pro_context( $registry ) {
		$installed = null;
		if ( current_user_can( 'activate_plugins' ) ) {
			// Found by its file name or text domain, so a renamed plugin folder still counts.
			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}
			$installed = false;
			foreach ( get_plugins() as $file => $plugin ) {
				if ( 'wpmozo-blocks-and-addons-pro.php' === basename( $file ) || ( isset( $plugin['TextDomain'] ) && 'wpmozo-blocks-and-addons-pro' === $plugin['TextDomain'] ) ) {
					$installed = true;
					break;
				}
			}
		}
		return array(
			'active'    => defined( 'WPMOZO_BNA_PRO_VERSION' ),
			'version'   => defined( 'WPMOZO_BNA_PRO_VERSION' ) ? WPMOZO_BNA_PRO_VERSION : null,
			'source'    => null !== $registry->get_source( 'pro' ),
			'installed' => $installed,
		);
	}
}
