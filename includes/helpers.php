<?php
/**
 * General core functions available on both the front-end and admin.
 *
 * @link https://elicus.com
 * @since 1.1.0
 *
 * @package WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Get sanitized value.
 *
 * @since 1.1.0
 * @param mixed $value The value to sanitize.
 * @return mixed The sanitized value.
 */
function mozo_bna_sanitize_text_field( $value ) {

	if ( ! empty( $value ) && is_array( $value ) ) {
		$sanitize_arr = array();
		foreach ( $value as $skey => $svalue ) {
			$sanitize_arr[ $skey ] = mozo_bna_sanitize_text_field( $svalue );
		}
		$value = $sanitize_arr;

	} else {
		$value = wp_unslash( $value );
		$value = sanitize_text_field( $value );
	}

	return $value;
}

/**
 * Pass thru semantical previously escaped acknowledgement.
 *
 * @since 1.1.0
 *
 * @param string value being passed through
 * @return string
 */
if ( ! function_exists( 'wpmozo_esc_previously' ) ) :
function wpmozo_esc_previously( $passthru ) {
	return $passthru;
}
endif;
