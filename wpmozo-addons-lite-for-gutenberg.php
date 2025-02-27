<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://elicus.com
 * @since             1.0.0
 * @package           WPMozo_Addons_Lite_For_Gutenberg
 *
 * @wordpress-plugin
 * Plugin Name:       WPMozo Addons Lite For Gutenberg
 * Plugin URI:        https://wpmozo.com/product/wpmozo-addons-lite-for-gutenberg
 * Description:       This plugin will create gutenberg blocks.
 * Version:           1.0.0
 * Author:            Elicus
 * Author URI:        https://elicus.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wpmozo-addons-lite-for-gutenberg
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Current plugin version.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_VERSION', '1.0.0' );

// Plugin main file.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_FILE', __FILE__ );

// Plugin dir path.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );

// Plugin dir url.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );

// Includes dir path.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_INC_DIR_PATH', WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_PATH . 'includes/' );

// Includes dir url.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_INC_DIR_URL', WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_URL . 'includes/' );

// Blocks dir path.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_BLOCKS_DIR_PATH', WPMOZO_ADDONS_LITE_GUTENBERG_INC_DIR_PATH . 'blocks/' );

// Blocks dir url.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_BLOCKS_DIR_URL', WPMOZO_ADDONS_LITE_GUTENBERG_INC_DIR_URL . 'blocks/' );

// Assets dir path.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_PATH', WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_PATH . 'assets/' );

// Assets dir url.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL', WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_URL . 'assets/' );

// Includes dir path.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_ADMIN_DIR_PATH', WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_PATH . 'admin/' );

// Includes dir url.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_ADMIN_DIR_URL', WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_URL . 'admin/' );

// Admin partials dir path.
define( 'WPMOZO_ADDONS_LITE_GUTENBERG_ADMIN_PARTIALS_DIR_PATH', WPMOZO_ADDONS_LITE_GUTENBERG_ADMIN_DIR_PATH . 'partials/' );


/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wpmozo-addons-lite-for-gutenberg.php';

/**
 * Returns the instance of WPMozo_Addons_Lite_For_Gutenberg.
 *
 * The main function responsible for returning the one true,
 * WPMozo_Addons_Lite_For_Gutenberg instance to functions everywhere.
 *
 * @since 1.0.0
 * @return WPMozo_Addons_Lite_For_Gutenberg The instance of main class.
 */
function wpmozo_adfgu() {
	return WPMozo_Addons_Lite_For_Gutenberg::instance();
}

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function wpmozo_addons_lite_gutenberg_run() {

	global $wp_version;
	$wpmozo_adfgu = wpmozo_adfgu();

	if ( version_compare( $wp_version, '5.0' ) >= 0 ) {
		$wpmozo_adfgu->run();
	} else {
		$wpmozo_adfgu->deactivate();
	}

}
add_action( 'plugins_loaded', 'wpmozo_addons_lite_gutenberg_run' );
