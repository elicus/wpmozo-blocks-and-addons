<?php
/**
 * Integration contract accessor.
 *
 * @link       https://elicus.com
 * @since      n.e.x.t
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! function_exists( 'wpmozo_bna_integration' ) ) {
	/**
	 * Access the integration contract.
	 *
	 * @since n.e.x.t
	 * @return Mozo_Bna_Integration
	 */
	function wpmozo_bna_integration() {
		return Mozo_Bna_Integration::instance();
	}
}
