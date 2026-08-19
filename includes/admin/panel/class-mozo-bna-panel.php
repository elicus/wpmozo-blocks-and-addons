<?php
/**
 * The file that handles plugin's,
 * admin side settings.
 *
 * @link       https://elicus.com
 * @since      1.8.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/admin
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Mozo_Bna_Panel {
	/**
	 * Add Class if pro version active.
	 *
	 * @since   1.8.0
	 * @access  private
	 * @var     Object
	 */
	private $proactive;

	/**
	 * Settings Class Object.
	 *
	 * @since   1.8.0
	 * @access  private
	 * @var     Object
	 */
	private $settings;
	
	// Construction.
	public function __construct() {
		if ( defined( 'WPMOZO_BNA_PRO_VERSION' ) ){
			$this->proactive = 'proactive';
		}

		// Get plugin settings.
		$this->settings = $this->get_settings();
		
		add_action( 'admin_enqueue_scripts', array( __class__, 'enqueue_panel_scripts' ) );
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
		add_action( 'wp_ajax_wpmozo_bna_panel_save_settings', array( __class__, 'save_options' ) );
	}

	/**
	 * Settings object.
	 */
	public function get_settings() {
		if ( ! class_exists( 'Mozo_Bna_Panel_Settings' ) ) {
			require_once WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/admin/panel/class-mozo-bna-panel-settings.php';
		}
		return new Mozo_Bna_Panel_Settings( WPMOZO_BNA_OPTION );
	}

	/**
	 * Register the admin menu for the plugin.
	 *
	 * @since 1.8.0
	 */
	public function admin_menu() {
		$svg_path = WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/admin/assets/images/brandicon.svg';
		add_menu_page(
			esc_html__( 'WPMozo Blocks and Addons', 'wpmozo-blocks-and-addons' ),
			esc_html__( 'Blocks and Addons', 'wpmozo-blocks-and-addons' ),
			'manage_options',
			'wpmozo-blocks-and-addons',
			array( $this, 'plugin_settings' ),
			'data:image/svg+xml;base64,' . base64_encode( file_get_contents( $svg_path ) ),
			85
		);
	}

	/**
	 * Display settings in the admin area.
	 *
	 * @since 1.8.0
	 */
	public function plugin_settings() {
		// Load plugin settings file.
		include_once WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/admin/panel/settings.php';
	}

	/**
	 * Save panel settings.
	 * 
	 * @since 1.8.0
	 */
	static function save_options() {
		// Check nonce.
		check_ajax_referer( 'wpmozo-bna-admin-panel-nonce', 'security', true );

		// Check capability.
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => __( 'Unauthorized access.', 'wpmozo-blocks-and-addons' ) ), 403 );
			exit;
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized.
		$options       = isset( $_POST['options'] ) ? $_POST['options'] : array();
		$plugin_option = get_option( WPMOZO_BNA_OPTION, array() );

		if ( is_array( $options ) && ! empty( $options ) ) {
			foreach ( $options as $option ) {
				$name                   = sanitize_text_field( $option['name'] );
				$value                  = sanitize_text_field( $option['value'] );
				$plugin_option[ $name ] = $value;
			}
		}

		update_option( WPMOZO_BNA_OPTION, $plugin_option );
		echo 'success';
		exit;
	}

	/**
	 * Load panel style
	 *
	 * @since 1.8.0
	 */
	static function enqueue_panel_scripts( $hook_suffix ) {
		// If current screen is not a panel screen.
		$allowed_hook_suffix = array( 'toplevel_page_wpmozo-blocks-and-addons' );
		if( ! in_array(  $hook_suffix, $allowed_hook_suffix ) ) {
			return;
		}

		// Load panel styles.
		wp_enqueue_style( 'wpmozo-bna-blocks-icons', WPMOZO_BNA_PLUGIN_DIR_URL . 'includes/assets/css/wpmozoicon/wpmozoicon.min.css', array(), WPMOZO_BNA_VERSION );
		wp_enqueue_style( 'wpmozo-bna-admin-panel', WPMOZO_BNA_PLUGIN_DIR_URL . 'includes/admin/assets/css/panel.min.css', array(), WPMOZO_BNA_VERSION );

		// Load panel scripts.
		wp_enqueue_script( 'wpmozo-bna-admin-panel', WPMOZO_BNA_PLUGIN_DIR_URL . 'includes/admin/assets/js/panel.min.js', array('jquery'), WPMOZO_BNA_VERSION, true );
		wp_localize_script( 'wpmozo-bna-admin-panel', 'WPMozoPanel', array(
			'ajaxurl'    => admin_url( 'admin-ajax.php' ),
			'ajax_nonce' => wp_create_nonce( 'wpmozo-bna-admin-panel-nonce' ),
		) );
	}

}

return new Mozo_Bna_Panel();
