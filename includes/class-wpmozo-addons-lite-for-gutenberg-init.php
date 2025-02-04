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

		$icons = $this->wpmozo_get_icons();

		$all_options = array(
			'placeholderImg' => WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'images/placeholder.webp',
			'icons'          => $icons,
		);
		wp_localize_script( $this->plugin_name . '-editor-script', 'wpmozo_adfgu_editor_object', $all_options );

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
		$icons            = apply_filters( 'wpmozo_addons_litegutenberg_block_icons', $default_icons );
		return $icons;
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

		add_action('wp', function(){

			global $post,$wpdb;
			$post_ID = $post->ID;
			$kjkl = get_post_meta( $post_ID, 'wpmozo_inline_style', true );

			wp_add_inline_style( $this->plugin_name . '-blocks-style', $kjkl );

		});

		add_filter( 'render_block', function( $block_content, $block ){

			if ( str_starts_with( $block['blockName'], 'wpmozo/' ) ) {

				$block_content = preg_replace('/<style\b[^>]*>.*?<\/style>/is', '', $block_content);

			}

			return $block_content;

		}, 10, 2 );

		add_filter( 'wp_insert_post_data', function( $data, $postarr ){

			 if (defined('REST_REQUEST') && REST_REQUEST) {
			        // Modify the content (example: remove certain words)
			        $content = $data['post_content'];

			        $targetClass = 'wpmozo-dynamic-style'; // The class you want to extract

$pattern = '/<style[^>]*class="wpmozo-dynamic-style"[^>]*>(.*?)<\/style>/s';  // Match <style> tags with specific class

preg_match_all($pattern, $html, $matches);

			        //$style = $matches[1];
			        echo '<pre>';
					var_dump($matches);
					echo '</pre>';
					die();


			    }

			

			return $data;

		}, 10, 2 );

	}

}
