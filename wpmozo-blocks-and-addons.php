<?php
/**
 *
 * * @link            https://elicus.com
 * @since             1.0.0
 * @package           WPMozo_Blocks_And_Addons
 *
 * @wordpress-plugin
 * Plugin Name:       WPMozo Blocks And Addons
 * Plugin URI:        https://wpmozo.com/product/wpmozo-blocks-and-addons
 * Description:       WPMozo Blocks and Addons is a plugin designed to extend the functionality of the Gutenberg editor.
 * It provides a variety of blocks to help you create stunning and interactive content in WordPress effortlessly.
 * Version:           1.3.0
 * Requires at least: 5.0
 * Requires PHP:      5.6
 * Author:            Elicus
 * Author URI:        https://elicus.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wpmozo-blocks-and-addons
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
define( 'WPMOZO_BNA_VERSION', '1.3.0' );// Current plugin version.
define( 'WPMOZO_BNA_FILE', __FILE__ );// Plugin main file.
define( 'WPMOZO_BNA_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );// Plugin dir path.
define( 'WPMOZO_BNA_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );// Plugin dir url.
define( 'WPMOZO_BNA_INC_DIR_PATH', WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/' );// Includes dir path.
define( 'WPMOZO_BNA_INC_DIR_URL', WPMOZO_BNA_PLUGIN_DIR_URL . 'includes/' );// Includes dir url.
define( 'WPMOZO_BNA_ASSETS_DIR_PATH', WPMOZO_BNA_INC_DIR_PATH . 'assets/' );// Assets dir path.
define( 'WPMOZO_BNA_ASSETS_DIR_URL', WPMOZO_BNA_INC_DIR_URL . 'assets/' );// Assets dir url.
define( 'WPMOZO_BNA_OPTION', 'wpmozo-blocks-and-addons-option' );// Option name.

require_once WPMOZO_BNA_INC_DIR_PATH . 'class-mozo-bna-blocks-and-addons.php';

/**
 * Registers the block using a `blocks-manifest.php` file, which improves the performance of block type registration.
 * Behind the scenes, it also registers all assets so they can be enqueued
 * through the block editor in the corresponding context.
 */
function create_block_wpmozo_blocks_and_addons_block_init() {
	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` and registers the block type(s)
	 * based on the registered block metadata.
	 * Added in WordPress 6.8 to simplify the block metadata registration process added in WordPress 6.7.
	 */
	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) ) {
		wp_register_block_types_from_metadata_collection( __DIR__ . '/build/blocks', __DIR__ . '/build/blocks-manifest.php' );
		return;
	}

	/**
	 * Registers the block(s) metadata from the `blocks-manifest.php` file.
	 * Added to WordPress 6.7 to improve the performance of block type registration.
	 */
	if ( function_exists( 'wp_register_block_metadata_collection' ) ) {
		wp_register_block_metadata_collection( __DIR__ . '/build', __DIR__ . '/build/blocks-manifest.php' );
	}
	/**
	 * Registers the block type(s) in the `blocks-manifest.php` file.
	 */
	$manifest_data = require __DIR__ . '/build/blocks-manifest.php';
	foreach ( array_keys( $manifest_data ) as $block_type ) {
		register_block_type( __DIR__ . "/build/{$block_type}" );
	}
}

/**
 * Registers the block category
 */
function wpmozo_add_block_category($categories) {
	return array_merge(  $categories, array(
		array( 'slug' => 'wpmozo', 'title' => __( 'WPMozo', 'wpmozo-blocks-and-addons' ) )
	) );
}
add_filter( 'block_categories_all', 'wpmozo_add_block_category');
add_action( 'init', 'create_block_wpmozo_blocks_and_addons_block_init' );

/**
 * Runs init class which loads all the necessory resources
 *
 */
if( ! function_exists( "wpmozo_bna_run_init_class" ) ){
	function wpmozo_bna_run_init_class() {
		$wpmozo_bna = Mozo_Bna_Blocks_And_Addons::instance();
		$wpmozo_bna->run();
	}
	add_action( 'plugins_loaded', 'wpmozo_bna_run_init_class' );
}
