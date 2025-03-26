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
 * @package           WPMozo_Blocks_And_Addons
 *
 * @wordpress-plugin
 * Plugin Name:       WPMozo Blocks and Addons
 * Plugin URI:        https://wpmozo.com/product/wpmozo-blocks-and-addons
 * Description:       This plugin will create gutenberg blocks.
 * Version:           1.0.0
 * Author:            Elicus
 * Author URI:        https://elicus.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wpmozo-blocks-and-addons
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
define( 'WPMOZO_BLOCKS_AND_ADDONS_VERSION', '1.0.0' );// Current plugin version.
define( 'WPMOZO_BLOCKS_AND_ADDONS_FILE', __FILE__ );// Plugin main file.
define( 'WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );// Plugin dir path.
define( 'WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );// Plugin dir url.
define( 'WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_PATH', WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_PATH . 'includes/' );// Includes dir path.
define( 'WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_URL', WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_URL . 'includes/' );// Includes dir url.
define( 'WPMOZO_BLOCKS_AND_ADDONS_BLOCKS_DIR_PATH', WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_PATH . 'blocks/' );// Blocks dir path.
define( 'WPMOZO_BLOCKS_AND_ADDONS_BLOCKS_DIR_URL', WPMOZO_BLOCKS_AND_ADDONS_INC_DIR_URL . 'blocks/' );// Blocks dir url.
define( 'WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_PATH', WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_PATH . 'assets/' );// Assets dir path.
define( 'WPMOZO_BLOCKS_AND_ADDONS_ASSETS_DIR_URL', WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_URL . 'assets/' );// Assets dir url.
define( 'WPMOZO_BLOCKS_AND_ADDONS_ADMIN_DIR_PATH', WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_PATH . 'admin/' );
define( 'WPMOZO_BLOCKS_AND_ADDONS_ADMIN_DIR_URL', WPMOZO_BLOCKS_AND_ADDONS_PLUGIN_DIR_URL . 'admin/' );
define( 'WPMOZO_BLOCKS_AND_ADDONS_ADMIN_PARTIALS_DIR_PATH', WPMOZO_BLOCKS_AND_ADDONS_ADMIN_DIR_PATH . 'partials/' );
define( 'WPMOZO_BLOCKS_AND_ADDONS_OPTION', 'wpmozo-blocks-and-addons-option' );// Option name.

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wpmozo-blocks-and-addons.php';

if ( ! function_exists( 'wpmozo_blocks_and_addons_run' ) ) {
	/**
	 * Begins execution of the plugin.
	 *
	 * Since everything within the plugin is registered via hooks,
	 * then kicking off the plugin from this point in the file does
	 * not affect the page life cycle.
	 *
	 * @since    1.0.0
	 */
	function wpmozo_blocks_and_addons_run() {

		global $wp_version;
		$wpmozo_bna = WPMozo_Blocks_And_Addons::instance();
		if ( version_compare( PHP_VERSION, '5.6' ) >= 0 ) {
			if ( version_compare( $wp_version, '5.0' ) >= 0 ) {
				$wpmozo_bna->run();
			} else {
				$wpmozo_bna->deactivate();
			}
		} else {
			$wpmozo_bna->deactivate(true);
		}

	}
	add_action( 'plugins_loaded', 'wpmozo_blocks_and_addons_run' );
}
