<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 * @author     Elicus <hello@elicus.com>
 */
class Mozo_Bna_Blocks_And_Addons {
	/**
	 * The instances of classes.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @var    array    $classes    The instances of all classes.
	 */
	protected $classes;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * The single instance of the class.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var Mozo_Bna_Blocks_And_Addons $_instance The instances of this class.
	 */
	protected static $_instance = null;

	/**
	 * The instance of this class.
	 *
	 * Ensures only one instance of Mozo_Bna_Blocks_And_Addons is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @return Mozo_Bna_Blocks_And_Addons - Main instance.
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'WPMOZO_BLOCKS_AND_ADDONS_VERSION' ) ) {
			$this->version = WPMOZO_BNA_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'wpmozo-blocks-and-addons';
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Defines core functions available on both the front-end and admin.
	 * - Mozo_Bna_Blocks_And_Addons_i18n. Defines internationalization functionality.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The core functions available on both the front-end and admin of the plugin.
		 */
		require_once WPMOZO_BNA_INC_DIR_PATH . 'helpers.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once WPMOZO_BNA_INC_DIR_PATH . 'class-mozo-bna-blocks-and-addons-i18n.php';

		/**
		 * The class responsible for registering and enqueuing scripts and styles
		 * for the plugin.
		 */
		require_once WPMOZO_BNA_INC_DIR_PATH . 'class-mozo-bna-blocks-and-addons-assets.php';

		$wpmozo_i18n   = new Mozo_Bna_Blocks_And_Addons_I18n();
		$wpmozo_assets = new Mozo_Bna_Blocks_And_Addons_Assets();

		$this->classes['i18n']  = $wpmozo_i18n;
		$this->classes['astreg']  = $wpmozo_assets;
	}


	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

	/**
	 * Add all hooks.
	 *
	 * @since 1.0.0
	 */
	public function add_hooks() {

		add_action( 'plugins_loaded', array( $this->classes['i18n'], 'load_plugin_textdomain' ) );
		add_action( 'init', array( $this->classes['astreg'], 'wpmozo_register_scripts_and_styles' ) );
		add_action( 'enqueue_block_editor_assets', array( $this->classes['astreg'], 'enqueue_block_editor_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this->classes['astreg'], 'enqueue_block_assets' ) );
		// add_action( 'rest_api_init', array( $this, 'register_rest_api_endpoints' ) );
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {

		$this->load_dependencies();
		$this->add_hooks();
	}
}