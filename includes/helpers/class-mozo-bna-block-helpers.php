<?php
namespace WPMOZO\BNA\Helpers;

/**
 * Trait class, handles the helper functions.
 *
 * @link       https://elicus.com
 * @since      1.5.0
 *
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Mozo_Bna_Block_Helpers{

	/**
	 * Get module dynamic style.
	 *
	 * @since 1.1.0
	 *
	 * @param string module name/slug/folder name.
	 * @param array attributes of module.
	 *
	 * @return string style for the module
	 */
	public static function module_dynamic_style( $module, $attributes ) {
		if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-' . esc_attr( $module ) . '/dynamic-style.php' ) ) {
			include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-' . esc_attr( $module ) . '/dynamic-style.php';

			$callback_function = str_replace( '-', '_', $module ) . '_generate_dynamic_style';
			if ( function_exists( $callback_function ) ) {
				return $callback_function( $attributes );
			}
		}
		return '';
	}
}
