<?php
/**
 * General core functions available on both the front-end and admin.
 *
 * @link https://elicus.com
 * @since 1.0.0
 *
 * @package WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Get sanitized value.
 *
 * @since 1.0.0
 * @param mixed $value The value to sanitize.
 * @return mixed The sanitized value.
 */
function wpmozo_adfgu_sanitize_text_field( $value ) {

	if ( ! empty( $value ) && is_array( $value ) ) {
		$sanitize_arr = array();
		foreach ( $value as $skey => $svalue ) {
			$sanitize_arr[ $skey ] = wpmozo_adfgu_sanitize_text_field( $svalue );
		}
		$value = $sanitize_arr;

	} else {
		$value = wp_unslash( $value );
		$value = sanitize_text_field( $value );
	}

	return $value;
}

function team_slider_render_callback( $attributes ) {

		return "<h1>Hello World</h1>";

	}