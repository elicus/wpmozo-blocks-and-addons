<?php
/**
 * Define the hooks for WP initialization.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all actions for WP initialization of the plugin.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Addons_Lite_Gutenberg_Init {

	/**
	 * The instance of blocks class.
	 *
	 * @since 1.0.0
	 * @var WPMozo_Addons_Lite_Gutenberg_Blocks $wpmozo_blocks The instance of blocks class.
	 */
	public $wpmozo_blocks;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	public $plugin_name;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		$wpmozo_adfgu       = wpmozo_adfgu();
		$this->plugin_name  = $wpmozo_adfgu->get_plugin_name();

		require_once WPMOZO_ADDONS_LITE_GUTENBERG_INC_DIR_PATH . 'class-wpmozo-addons-lite-for-gutenberg-blocks.php';
		$this->wpmozo_blocks = WPMozo_Addons_Lite_Gutenberg_Blocks::instance();

	}

	/**
	 * Register the blocks on init wp.
	 *
	 * @since 1.0.0
	 */
	public function wpmozo_register_blocks() {

		wp_register_script(
			$this->plugin_name . '-common-function-script',
			WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'js/wpmozo-common-functions.js',
			array(),
			time(),
			true
		);

		wp_register_script(
			$this->plugin_name . '-editor-script',
			WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'js/editor.js',
			array('jquery'),
			time(),
			true
		);

		wp_register_script(
			$this->plugin_name . '-build-script',
			WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_URL . 'build/index.js',
			array( 'react', 'wp-polyfill', 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api', 'wp-api-fetch', 'lodash', 'wp-editor', 'wp-dom-ready', 'jquery' ),
			time(),
			true
		);

		wp_register_style(
			$this->plugin_name . '-editor-style',
			WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'css/wpmozo-addons-lite-for-gutenberg-editor.css',
			array( 'wp-edit-blocks' ),
			time()
		);

		wp_register_script(
			$this->plugin_name . '-blocks-script',
			WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'js/frontend.js',
			array( 'wp-i18n', 'jquery' ),
			time(),
			true
		);

		wp_register_style(
			$this->plugin_name . '-blocks-style',
			WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'css/frontend.css',
			array(),
			time()
		);

		wp_register_style(
			$this->plugin_name . '-fontawesome-style',
			WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'libs/fontawesome/all.min.css',
			array(),
			time()
		);

		$this->wpmozo_blocks->register_blocks();

	}

	/**
	 * Enqueue block editor assets.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_block_editor_assets() {

		wp_enqueue_script( $this->plugin_name . '-common-function-script' );
		wp_enqueue_script( $this->plugin_name . '-editor-script' );
		wp_enqueue_script( $this->plugin_name . '-build-script' );

		$icons = $this->wpmozo_get_icons();

		$all_options = array(
			'placeholderImg' => WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'images/placeholder.webp',
			'icons'          => $icons,
			'url'			 => get_site_url()
		);
		wp_localize_script( $this->plugin_name . '-build-script', 'wpmozo_adfgu_editor_object', $all_options );

		wp_enqueue_style( $this->plugin_name . '-editor-style' );
		wp_enqueue_style( $this->plugin_name . '-blocks-style' );

	}

	/**
	 * Enqueue frontend block assets.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_block_assets() {

		wp_enqueue_script( $this->plugin_name . '-common-function-script' );
		wp_enqueue_script( $this->plugin_name . '-blocks-script' );
		wp_enqueue_style( $this->plugin_name . '-blocks-style' );

	}

	/**
	 * Add block category.
	 *
	 * @since 1.0.0
	 * @param array $categories The block categories.
	 * @return array The block categories.
	 */
	public function wpmozo_block_category( $categories ) {

		$found = array_search( 'wpmozo', array_column( $categories, 'slug' ) );

		if ( false !== $found ) {
			return $categories;
		}

		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'wpmozo',
					'title' => __( 'WPMozo', 'wpmozo-addons-lite-for-gutenberg' ),
				),
			)
		);
	}

	/**
	 * Get font awesome icons array.
	 *
	 * @since 1.0.0
	 * @return array $icons All icons.
	 */
	public function wpmozo_get_icons() {

		global $wp_filesystem;
		require_once ABSPATH . 'wp-admin/includes/file.php';
		WP_Filesystem();

		$json      = array();
		$file_path = WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_PATH . 'libs/fontawesome/fonts.json';

		if ( $wp_filesystem->exists( $file_path ) ) {
			$json = $wp_filesystem->get_contents( $file_path );
		}

		$default_icons 	  = json_decode( $json );
		$icons            = array();
		$none_obj         = new stdClass();
		$none_obj->label  = 'None';
		$none_obj->value  = '';
		$icons[]          = $none_obj;
		$default_icons    = array_merge( $icons, $default_icons );
		$icons            = apply_filters( 'wpmozo_addons_lite_gutenberg_block_icons', $default_icons );
		return $icons;
	}

	/**
	 * Callback fun to save dynamic style.
	 *
	 * @since 1.0.0
	 * @return a new WP_REST_Response instance.
	 */
	public function handle_save_dynamic_style( WP_REST_Request $request ) {

	    $post_id_param = $request->get_param('post_id');
	    $style_param = $request->get_param('style');
	    $post_id = wpmozo_adfgu_sanitize_text_field( $post_id_param );
	    $style = wp_kses_post( $style_param );

	    update_post_meta( $post_id, 'wpmozo_dynamic_style', $style );

	    $get_style = get_post_meta( $post_id, 'wpmozo_dynamic_style', true );

	    if ( ! empty( trim( $get_style ) ) ) {
	    	$response = array(
	    		'success' => true,
	    		'message' => esc_html( 'Style saved successfully' )
	    	);
	    }else{
	    	$response = array(
	    		'success' => false,
	    		'message' => esc_html( 'Style not saved successfully' )
	    	);
	    }

	    return rest_ensure_response( $response );
	}

	/**
	 * Register rest api endpoints.
	 *
	 * @since 1.0.0
	 */
	public function register_rest_api_endpoints() {

		register_rest_route('wpmozo/v1', '/save-dynamic-style/', array(
	        'methods'  => 'POST',
	        'callback' => array( $this, 'handle_save_dynamic_style' ),
	        'permission_callback' => '__return_true'
	    ));

	}

	/**
	 * Enqueue frontend dynamic assets.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_dynamic_assets() {

		global $post,$_wp_current_template_id;

		if ( empty( $post ) ) {
			return;
		}

		$post_ID = $post->ID;
		$block_data = get_block_template( $_wp_current_template_id );
		$wp_id = null;
		$inline_style = '';

		if ( ! empty( $block_data ) && isset( $block_data->wp_id ) ) {
			$wp_id = $block_data->wp_id;
		}

		if ( ! empty( $wp_id ) ) {
			$inline_style .= get_post_meta( $wp_id, 'wpmozo_dynamic_style', true );
		}

		$inline_style .= get_post_meta( $post_ID, 'wpmozo_dynamic_style', true );

		wp_add_inline_style( $this->plugin_name . '-blocks-style', $inline_style );

	}

	/**
	 * Add all hooks.
	 *
	 * @since 1.0.0
	 * @param array $loader The instance of loader class.
	 * @param array $instance The instance of this class.
	 */
	public function add_hooks( $loader, $instance ) {

		$loader->add_filter( 'block_categories_all', $instance, 'wpmozo_block_category', 10, 2 );
		$loader->add_action( 'init', $instance, 'wpmozo_register_blocks' );
		$loader->add_action( 'enqueue_block_editor_assets', $instance, 'enqueue_block_editor_assets' );
		$loader->add_action( 'wp_enqueue_scripts', $instance, 'enqueue_block_assets' );
		$loader->add_action( 'wp_enqueue_scripts', $instance, 'enqueue_dynamic_assets' );
		$loader->add_action( 'rest_api_init', $instance, 'register_rest_api_endpoints' );

	}

}
