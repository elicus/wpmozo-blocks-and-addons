<?php
/**
 * Define the hooks for WP initialization.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

/**
 * This class responsible for defining all actions for WP initialization of the plugin.
 *
 * @since      1.0.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Blocks_And_Addons_Init {

	/**
	 * The instance of blocks class.
	 *
	 * @since 1.0.0
	 * @var WPMozo_Blocks_And_Addons_Blocks $wpmozo_blocks The instance of blocks class.
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

		$wpmozo_bna       = WPMozo_Blocks_And_Addons::instance();
		$this->plugin_name  = $wpmozo_bna->get_plugin_name();

		require_once WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_PATH . 'class-wpmozo-blocks-and-addons-blocks.php';
		$this->wpmozo_blocks = WPMozo_Blocks_And_Addons_Blocks::instance();

	}

	/**
	 * Register the blocks on init wp.
	 *
	 * @since 1.0.0
	 */
	public function wpmozo_register_blocks() {

		wp_register_script(
			$this->plugin_name . '-common-function-script',
			WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'js/common/wpmozo-common-functions.js',
			array(),
			time(),
			true
		);

		wp_register_script(
			$this->plugin_name . '-editor-script',
			WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'js/editor/editor.js',
			array('jquery'),
			time(),
			true
		);

		wp_register_script(
			$this->plugin_name . '-build-script',
			WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_URL . 'build/index.js',
			array( 'react', 'wp-polyfill', 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api', 'wp-api-fetch', 'lodash', 'wp-editor', 'wp-dom-ready', 'jquery' ),
			time(),
			true
		);

		wp_register_style(
			$this->plugin_name . '-editor-style',
			WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'css/editor/wpmozo-blocks-and-addons-editor.css',
			array( 'wp-edit-blocks' ),
			time()
		);

		wp_register_script(
			$this->plugin_name . '-blocks-script',
			WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'js/frontend/frontend.js',
			array( 'wp-i18n', 'jquery' ),
			time(),
			true
		);

		wp_register_style(
			$this->plugin_name . '-blocks-style',
			WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'css/frontend/frontend.css',
			array(),
			time()
		);

		wp_register_style(
			$this->plugin_name . '-fontawesome-style',
			WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'libs/fontawesome/all.min.css',
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
			'placeholderImg' => WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL . 'images/placeholder.webp',
			'icons'          => $icons,
			'url'			 => get_site_url()
		);
		wp_localize_script( $this->plugin_name . '-build-script', 'wpmozo_bna_editor_object', $all_options );

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
					'title' => __( 'WPMozo', 'wpmozo-blocks-and-addons' ),
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
		$file_path = WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_PATH . 'libs/fontawesome/fonts.json';

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
		$icons            = apply_filters( 'wpmozo_blocks_and_addons_block_icons', $default_icons );
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
	    $post_id = wpmozo_bna_sanitize_text_field( $post_id_param );
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
	 * Register custom post types.
	 *
	 * @since 1.0.0
	 */
	public function register_custom_post_types() {

		$labels = array(
            'name'                  => esc_html__( 'WPMozo Team Members', 'wpmozo-blocks-and-addons' ),
            'singular_name'         => esc_html__( 'WPMozo Team Member', 'wpmozo-blocks-and-addons' ),
            'menu_name'             => esc_html__( 'WPMozo Team Members', 'wpmozo-blocks-and-addons' ),
            'add_new'               => esc_html__( 'Add New', 'wpmozo-blocks-and-addons' ),
            'add_new_item'          => esc_html__( 'Add New Member', 'wpmozo-blocks-and-addons' ),
            'edit_item'             => esc_html__( 'Edit Member', 'wpmozo-blocks-and-addons' ),
            'new_item'              => esc_html__( 'New Member', 'wpmozo-blocks-and-addons' ),
            'view_item'             => esc_html__( 'View Member', 'wpmozo-blocks-and-addons' ),
            'all_items'             => esc_html__( 'All Members', 'wpmozo-blocks-and-addons' ),
            'search_items'          => esc_html__( 'Search Members', 'wpmozo-blocks-and-addons' ),
            'not_found'             => esc_html__( 'No member found', 'wpmozo-blocks-and-addons' ),
            'not_found_in_trash'    => esc_html__( 'No members found in Trash', 'wpmozo-blocks-and-addons' ),
            'featured_image'        => esc_html__( 'Team Member Image', 'wpmozo-blocks-and-addons' ),
            'set_featured_image'    => esc_html__( 'Set team member image', 'wpmozo-blocks-and-addons' ),
            'remove_featured_image' => esc_html__( 'Remove team member image', 'wpmozo-blocks-and-addons' ),
            'use_featured_image'    => esc_html__( 'Use as team member image', 'wpmozo-blocks-and-addons' ),
            'parent_item_colon'     => esc_html__( 'Parent Member:', 'wpmozo-blocks-and-addons' ),
        );

        $args = array(
            'labels'            => $labels,
            'description'       => esc_html__( 'WPMozo Team Members Custom Post', 'wpmozo-blocks-and-addons' ),
            'public'            => true,
            'supports'          => array( 'title', 'editor', 'author', 'thumbnail', 'revisions' ),
            'taxonomies'        => array( 'wpmozo-team-member-category' ),
            'hierarchical'      => false,
            'menu_position'     => 20,
            'menu_icon'         => 'dashicons-admin-users',
            'show_ui'           => true,
            'show_in_menu'      => true,
            'show_in_nav_menus' => true,
            'show_in_rest'      => true,
            'has_archive'       => true,
            'query_var'         => true,
            'capability_type'   => 'post',
        );

        register_post_type( 'wpmozo-team-member', $args );

	}

	/**
	 * Register custom taxonomies.
	 *
	 * @since 1.0.0
	 */
	public function register_custom_taxonomies() {

		$labels = array(
            'name'                       => esc_html_x( 'WPMozo Team Member Categories', 'Taxonomy General Name', 'wpmozo-blocks-and-addons' ),
            'singular_name'              => esc_html_x( 'WPMozo Team Member Category', 'Taxonomy Singular Name', 'wpmozo-blocks-and-addons' ),
            'menu_name'                  => esc_html__( 'WPMozo Team Member Categories', 'wpmozo-blocks-and-addons' ),
            'all_items'                  => esc_html__( 'All Team Member Categories', 'wpmozo-blocks-and-addons' ),
            'parent_item'                => esc_html__( 'Parent Team Member Category', 'wpmozo-blocks-and-addons' ),
            'parent_item_colon'          => esc_html__( 'Parent Team Member Category:', 'wpmozo-blocks-and-addons' ),
            'new_item_name'              => esc_html__( 'New Team Member Category Name', 'wpmozo-blocks-and-addons' ),
            'add_new_item'               => esc_html__( 'Add New Team Member Category', 'wpmozo-blocks-and-addons' ),
            'edit_item'                  => esc_html__( 'Edit Team Member Category', 'wpmozo-blocks-and-addons' ),
            'update_item'                => esc_html__( 'Update Team Member Category', 'wpmozo-blocks-and-addons' ),
            'view_item'                  => esc_html__( 'View Team Member Category', 'wpmozo-blocks-and-addons' ),
            'separate_items_with_commas' => esc_html__( 'Separate categories with commas', 'wpmozo-blocks-and-addons' ),
            'add_or_remove_items'        => esc_html__( 'Add or remove categories', 'wpmozo-blocks-and-addons' ),
            'choose_from_most_used'      => esc_html__( 'Choose from the most used', 'wpmozo-blocks-and-addons' ),
            'popular_items'              => esc_html__( 'Popular Team Member Categories', 'wpmozo-blocks-and-addons' ),
            'search_items'               => esc_html__( 'Search Team Member Categories', 'wpmozo-blocks-and-addons' ),
            'not_found'                  => esc_html__( 'Not Found', 'wpmozo-blocks-and-addons' ),
            'no_terms'                   => esc_html__( 'No Team Member Categories', 'wpmozo-blocks-and-addons' ),
            'items_list'                 => esc_html__( 'Team Member Categories list', 'wpmozo-blocks-and-addons' ),
            'items_list_navigation'      => esc_html__( 'Team Member Categories list navigation', 'wpmozo-blocks-and-addons' ),
        );

        $args = array(
            'labels'                     => $labels,
            'hierarchical'               => true,
            'public'                     => true,
            'show_in_rest'				 => true,
            'show_ui'                    => true,
            'show_admin_column'          => true,
            'show_in_nav_menus'          => true,
            'show_tagcloud'              => true,
        );
            
        register_taxonomy( 'wpmozo-team-member-category', array( 'wpmozo-team-member' ), $args );

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
		$loader->add_action( 'init', $instance, 'register_custom_post_types' );
		$loader->add_action( 'init', $instance, 'register_custom_taxonomies' );

	}

}
