<?php
/**
 * The file that defines the core plugin class
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 * @link       https://elicus.com
 * @since      1.1.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The plugin assets registration class.
 * This is used to register and enqueue styles and scripts for the plugin.
 * @since      1.0.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 * @author     Elicus <hello@elicus.com>
 */
class Mozo_Bna_Blocks_And_Addons_Assets {
	/**
	 * The unique identifier of this plugin.
	 * @since    1.0.0
	 * @access   protected
	 * @var      string $plugin_name The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * Set the plugin name and the plugin version that can be used throughout the class.
	 * @since    1.0.0
	 */
	public function __construct() {
		$this->plugin_name = 'wpmozo-blocks-and-addons';
	}

	/**
	 * Register the scripts and stylesheets required on the editor and frontend.
	 * @since 1.0.0
	 */
	public function wpmozo_register_scripts_and_styles() {

		wp_register_style(
			$this->plugin_name . '-editor-style',
			WPMOZO_BNA_ASSETS_DIR_URL . 'css/editor/wpmozo-blocks-and-addons-editor.css',
			array( 'wp-edit-blocks' ),
			WPMOZO_BNA_VERSION
		);

		wp_register_script(
			$this->plugin_name . '-editor-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/editor/editor.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_style(
			$this->plugin_name . '-swiper-style',
			WPMOZO_BNA_ASSETS_DIR_URL . 'css/vendors/swiper-bundle.css',
			array( 'wp-edit-blocks' ),
			WPMOZO_BNA_VERSION
		);
		wp_register_style(
			$this->plugin_name . '-swiper-wpmozo-style',
			WPMOZO_BNA_ASSETS_DIR_URL . 'css/vendors/wpmozo-swiper.css',
			array( 'wp-edit-blocks' ),
			WPMOZO_BNA_VERSION
		);

		wp_register_style(
			$this->plugin_name . '-magnificPopup-style',
			WPMOZO_BNA_ASSETS_DIR_URL . 'css/vendors/magnificPopup.css',
			array(),
			WPMOZO_BNA_VERSION
		);

		wp_register_script(
			$this->plugin_name . '-swiper-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/swiper-bundle.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_style(
			$this->plugin_name . '-twentytwenty-style',
			WPMOZO_BNA_ASSETS_DIR_URL . 'css/vendors/twentytwenty.css',
			array( 'wp-edit-blocks' ),
			WPMOZO_BNA_VERSION
		);

		wp_register_style(
			$this->plugin_name . '-tippy-animation-style',
			WPMOZO_BNA_ASSETS_DIR_URL . 'css/vendors/all-animation.css',
			array( 'wp-edit-blocks' ),
			WPMOZO_BNA_VERSION
		);

		wp_register_script(
			$this->plugin_name . '-imagesloaded-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/imagesloaded.pkgd.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-eventmove-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/jquery_event_move.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-twentytwenty-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/jquery_twentytwenty.js',
			array( 'jquery', $this->plugin_name . '-eventmove-script' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-tilt-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/tilt-jquery.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-lottie-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/lottie.min.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-isotope-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/isotope.pkgd.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-magnificPopup-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/magnificPopup.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-popper-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/popper.min.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION,
			true
		);
		wp_register_script(
			$this->plugin_name . '-tippy-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/tippy-bundle.umd.min.js',
			array( 'jquery', $this->plugin_name . '-popper-script' ),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-waypoints-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/waypoints.min.js',
			array( 'jquery'),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_script(
			$this->plugin_name . '-magnify-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/magnify.min.js',
			array( 'jquery'),
			WPMOZO_BNA_VERSION,
			true
		);

		wp_register_style(
			$this->plugin_name . '-blocks-style',
			WPMOZO_BNA_ASSETS_DIR_URL . 'css/blocks/block-style.css',
			array(),
			WPMOZO_BNA_VERSION
		);

		wp_register_style(
			$this->plugin_name . '-fontawesome-style',
			WPMOZO_BNA_ASSETS_DIR_URL . 'fonts/fontawesome/all.min.css',
			array(),
			WPMOZO_BNA_VERSION
		);

		// Text scroll animation GSAP 3.12.2
		wp_register_script(
			$this->plugin_name . '-scroll-trigger-script',
			WPMOZO_BNA_ASSETS_DIR_URL . "js/vendors/ScrollTrigger.min.js",
			array('jquery'),
			'3.12.2',
			true
		);
		wp_register_script(
			$this->plugin_name . '-gsap-script',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/vendors/gsap.min.js',
			array( $this->plugin_name . '-scroll-trigger-script' ),
			'3.12.2',
			true
		);

		// Tws Pagination.
		wp_register_script(
			$this->plugin_name . 'twbs-pagination-script',
			WPMOZO_BNA_ASSETS_DIR_URL . "js/vendors/twbsPagination.min.js",
			array('jquery'),
			'1.4.2',
			true
		);
	}

	/**
	 * Enqueue block editor assets.
	 * @since 1.0.0
	 */
	public function enqueue_block_editor_assets() {
		$icons = $this->wpmozo_get_icons();

		$all_options = array(
			'placeholderImg' => WPMOZO_BNA_ASSETS_DIR_URL . 'images/placeholder.webp',
			'icons'          => $icons,
			'url'            => rest_url( 'wpmozo/v1/save-dynamic-style' ),
			'assets_url'     => WPMOZO_BNA_ASSETS_DIR_URL,
			'themeName' 	 => wp_get_theme()->get( 'Name' ),
			'wordCountType'  => wp_get_word_count_type()
		);

		wp_localize_script( $this->plugin_name . '-editor-script', 'wpmozo_bna_editor_object', $all_options );

		wp_enqueue_style( $this->plugin_name . '-editor-style' );
		wp_enqueue_script( $this->plugin_name . '-editor-script' );
		wp_enqueue_style( $this->plugin_name . '-blocks-style' );
		wp_enqueue_script( $this->plugin_name . '-tilt-script' );
		wp_enqueue_script( $this->plugin_name . '-popper-script' );
		wp_enqueue_script( $this->plugin_name . '-tippy-script' );

		// Load frontend localize variables.
		$this->load_block_localize_variables();
	}

	/**
	 * Get font awesome icons array.
	 * @return array $icons All icons.
	 * @since 1.0.0
	 */
	public function wpmozo_get_icons() {

		global $wp_filesystem;
		require_once ABSPATH . 'wp-admin/includes/file.php';
		WP_Filesystem();

		$json      = array();
		$file_path = WPMOZO_BNA_ASSETS_DIR_PATH . 'fonts/fontawesome/fonts.json';

		if ( $wp_filesystem->exists( $file_path ) ) {
			$json = $wp_filesystem->get_contents( $file_path );
		}

		$default_icons   = json_decode( $json );
		$icons           = array();
		$none_obj        = new stdClass();
		$none_obj->label = 'None';
		$none_obj->value = '';
		$icons[]         = $none_obj;
		$default_icons   = array_merge( $icons, $default_icons );
		$icons           = apply_filters( 'wpmozo_blocks_and_addons_block_icons', $default_icons );

		return $icons;
	}

	/**
	 * Enqueue block frontend assets.
	 * @since 1.0.0
	 */
	public function enqueue_block_assets() {
		wp_enqueue_style( $this->plugin_name . '-fontawesome-style' );
		wp_enqueue_style( $this->plugin_name . '-blocks-style' );

		// Load frontend localize variables.
		$this->load_block_localize_variables();
	}

	/**
	 * Enqueue block localize variables.
	 * @since 1.6.0
	 */
	public function load_block_localize_variables() {
		// Team Slider: localize vars.
		wp_localize_script( 'wpmozo-team-slider-script', 'WPMozoTeamSliderData', array(
			'ajaxurl'   => admin_url( 'admin-ajax.php' ),
			'ajaxnonce' => wp_create_nonce( 'wpmozo-team-slider-nonce' ),
		) );
	}

	/**
	 * Enqueue block script in footer.
	 * @since 1.1.0
	 */
	public function enqueue_block_script_in_footer() {
		global $wp_scripts;

		$allBlocks = glob( WPMOZO_BNA_PLUGIN_DIR_PATH . 'build/blocks' . '/*' , GLOB_ONLYDIR );
		$allBlocks = array_map( function( $block ) {
			return 'wpmozo-' . basename( $block );
		}, $allBlocks );

		// Checking in all blocks.
		foreach ( $allBlocks as $block ) {
			$prefix = $block; // e.g., wpmozo-image-stack

			foreach ( $wp_scripts->registered as $handle => $script ) {
				if ( strpos( $handle, $prefix ) === 0 ) { // starts with prefix
					$wp_scripts->registered[ $handle ]->extra['group'] = 1; // load in footer
				}
			}
		}
	}

	/**
	 * Enqueue adminb side assets.
	 */
	public function enqueue_admin_assets( $hooks ) {

		// Get current screen
		$screen = get_current_screen();

		// Register styles.
		wp_register_style(
			$this->plugin_name . '-metaboxes',
			WPMOZO_BNA_ASSETS_DIR_URL . 'css/wpmozo-admin-metaboxes.css',
			array(),
			WPMOZO_BNA_VERSION
		);

		// Register scripts.
		wp_register_script(
			$this->plugin_name . '-metaboxes',
			WPMOZO_BNA_ASSETS_DIR_URL . 'js/wpmozo-admin-metaboxes.js',
			array( 'jquery' ),
			WPMOZO_BNA_VERSION
		);

		// Check if we're on post edit/add screen for a specific CPT
		if ( isset( $screen->post_type ) && ( $screen->base === 'post' || $screen->base === 'upload' ) &&
			( $screen->post_type === 'mozo-testimonial' || $screen->post_type === 'mozo-team-member' || 
			$screen->post_type === 'attachment' )
		) {
			wp_enqueue_script( $this->plugin_name . '-metaboxes' );
			wp_enqueue_style( $this->plugin_name . '-metaboxes' );
		}
	}

}
