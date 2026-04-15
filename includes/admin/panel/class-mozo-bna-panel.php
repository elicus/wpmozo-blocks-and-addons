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
	 * @since  1.8.0
	 * @access private
	 * @var    Object
	 */
	private $proactive;
	
	// Construction.
	public function __construct() {
		if ( defined( 'WPMOZO_BNA_PRO_VERSION' ) ){
			$this->proactive = 'proactive';
		}
		
		add_action( 'admin_menu', array( $this, 'admin_menu' ) );
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

}

return new Mozo_Bna_Panel();
