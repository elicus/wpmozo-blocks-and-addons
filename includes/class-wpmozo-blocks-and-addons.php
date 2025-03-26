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
class WPMozo_Blocks_And_Addons {

	/**
	 * The instances of classes.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @var    array    $classes    The instances of all classes.
	 */
	protected $classes;

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      WPMozo_Blocks_And_Addons_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

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
	 * @var WPMozo_Blocks_And_Addons $_instance The instances of this class.
	 */
	protected static $_instance = null;

	/**
	 * The instance of this class.
	 *
	 * Ensures only one instance of WPMozo_Blocks_And_Addons is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @return WPMozo_Blocks_And_Addons - Main instance.
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
			$this->version = WPMOZO_BLOCKS_AND_ADDONS_VERSION;
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
	 * - WPMozo_Blocks_And_Addons_Loader. Orchestrates the hooks of the plugin.
	 * - WPMozo_Blocks_And_Addons_i18n. Defines internationalization functionality.
	 * - WPMozo_Blocks_And_Addons_Init. Define the hooks for WP initialization.
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
		require_once WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_PATH . 'wpmozo-blocks-and-addons-functions.php';

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_PATH . 'class-wpmozo-blocks-and-addons-loader.php';
		$this->loader = new WPMozo_Blocks_And_Addons_Loader();

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_PATH . 'class-wpmozo-blocks-and-addons-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once WPMOZO_BLOCKS_AND_ADDONS_ADMIN_DIR_PATH . 'class-wpmozo-blocks-and-addons-admin.php';

		/**
		 * The class responsible for defining all actions for WP initialization of the plugin.
		 */
		include_once WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_PATH . 'class-wpmozo-blocks-and-addons-init.php';

		$wpmozo_i18n = new WPMozo_Blocks_And_Addons_I18n();
		$wpmozo_init = new WPMozo_Blocks_And_Addons_Init();
		$wpmozo_admin = new WPMozo_Blocks_And_Addons_Admin();

		$this->classes['i18n'] = $wpmozo_i18n;
		$this->classes['init'] = $wpmozo_init;
		$this->classes['admin'] = $wpmozo_admin;

	}

	/**
	 * Register all of the hooks of the plugin.
	 *
	 * @since  1.0.0
	 * @access private
	 */
	private function define_hooks() {

		if ( ! empty( $this->classes ) ) {
			foreach ( $this->classes as $key => $instance ) {
				if ( method_exists( $instance, 'add_hooks' ) ) {
					// Call method for register all hooks of plugin.
					$instance->add_hooks( $this->loader, $instance );
				}
			}
		}

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {

		$this->load_dependencies();
		$this->define_hooks();
		$this->loader->run();

	}

	/**
	 * Deactivate this plugin if WordPress version below 5.0 or PHP version below 5.6.
	 *
	 * @since    1.0.0
	 */
	public function deactivate( $php = false ) {

		if ( ! function_exists( 'deactivate_plugins' ) ) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		if ( isset( $_GET['activate'] ) ) { // phpcs:ignore 
			unset( $_GET['activate'] ); // phpcs:ignore 
			$_GET['deactivate'] = true;
		}
		if(!$php){
			add_action( 'admin_notices', array( $this, 'deactivation_notice' ) );
		} else{
			add_action( 'admin_notices', array( $this, 'deactivation_notice_php' ) );
		}

		deactivate_plugins( WPMOZO_BLOCKS_AND_ADDONS_FILE );

	}

	/**
	 * Display notice if WordPress version below 5.0.
	 *
	 * @since    1.0.0
	 */
	public function deactivation_notice() {

		$plugin_name = sprintf( '<strong>%s</strong>', esc_html( 'WPMozo Blocks and Addons' ) );
		$message     = esc_html( 'plugin requires WordPress 5.0 or later version in order to work. So please ensure that your WordPress installation is running on version 5.0 or later.' );
		$notice      = sprintf( '%s %s', $plugin_name, $message );

		?>
		<div class="error notice is-dismissible">
			<p>
			<?php
			echo wp_kses(
				$notice,
				array(
					'strong' => array(),
				)
			);
			?>
			</p>
		</div>
		<?php
	}
	/**
	 * Display notice if PHP version below 5.6.
	 *
	 * @since    1.0.0
	 */
	public function deactivation_notice_php() {

		$plugin_name = sprintf( '<strong>%s</strong>', esc_html( 'WPMozo Blocks and Addons' ) );
		$message     = esc_html( 'plugin requires PHP 5.6 or later version in order to work. So please ensure that your WordPress installation is running on PHP version 5.6 or later.' );
		$notice      = sprintf( '%s %s', $plugin_name, $message );

		?>
		<div class="error notice is-dismissible">
			<p>
			<?php
			echo wp_kses(
				$notice,
				array(
					'strong' => array(),
				)
			);
			?>
			</p>
		</div>
		<?php
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
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    WPMozo_Blocks_And_Addons_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
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

}
