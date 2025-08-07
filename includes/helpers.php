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
function wpmozo_bna_get_module_dynamic_style( $module, $attributes ) {
	if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'src/blocks/' . esc_attr( $module ) . '/dynamic-style.php' ) ) {
		include WPMOZO_BNA_PLUGIN_DIR_PATH . 'src/blocks/' . esc_attr( $module ) . '/dynamic-style.php';

		$callback_function = str_replace( '-', '_', $module ) . '_generate_dynamic_style';
		if ( function_exists( $callback_function ) ) {
			return $callback_function( $attributes );
		}
	}
	return '';
}

/**
 * Get font styles from props.
 * 
 * @since 1.1.0
 * 
 * @param string $pre     Prefix for the props.
 * @param array  $props   All props or attributes.
 * @param bool   $useImp  Whether to add !important.
 * 
 * @return string CSS font styles.
 */
function wpmozo_ban_get_font_style( $pre, $props, $use_imp = false ) {
	$imp = $use_imp ? ' !important' : '';
	$map = array(
		'FontSize'      => 'font-size',
		'Decoration'    => 'text-decoration',
		'LetterSpacing' => 'letter-spacing',
		'LetterCase'    => 'text-transform',
		'LineHeight'    => 'line-height',
	);

	$styles = '';
	foreach ( $map as $key => $css_prop ) {
		if ( ! empty( $props[ $pre . $key ] ) ) {
			$styles .= sprintf( '%s: %s%s;', $css_prop, $props[ $pre . $key ], $imp );
		}
	}

	$appearance = isset( $props[ $pre . 'FontAppearance' ] ) ? $props[ $pre . 'FontAppearance' ] : array();
	if ( ! empty( $appearance['fontStyle'] ) ) {
		$styles .= sprintf( 'font-style: %s%s;', $appearance['fontStyle'], $imp );
	}
	if ( ! empty( $appearance['fontWeight'] ) ) {
		$styles .= sprintf( 'font-weight: %s%s;', $appearance['fontWeight'], $imp );
	}

	return $styles;
}

/**
 * Get border styles from props.
 * 
 * @since 1.1.0
 * 
 * @param string $pre     Prefix for the props.
 * @param array  $props   All props or attributes.
 * @param bool   $useImp  Whether to add !important.
 * 
 * @return string CSS border styles.
 */
function wpmozo_ban_get_border_style( $pre, $props, $use_imp = false ) {
	$imp = $use_imp ? ' !important' : '';

	$styles = '';

	// Border width.
	$border_key = $pre . 'border';
	if ( isset( $props[ $border_key ] ) && is_array( $props[ $border_key ] ) ) {
		$border = $props[ $border_key ];

		// Directional (top, right, etc.)
		if ( isset( $border['top'], $border['right'], $border['bottom'], $border['left'] ) ) {
			foreach ( array( 'top', 'right', 'bottom', 'left' ) as $side ) {
				if ( isset( $border[ $side ]['width'] ) ) {
					$styles .= sprintf( 'border-%s-width: %s%s;', $side, $border[ $side ]['width'], $imp );
				}
			}
		}
		// Shorthand (single width)
		elseif ( isset( $border['width'] ) ) {
			$styles .= sprintf( 'border-width: %s%s;', $border['width'], $imp );
		}
	}

	// Border color.
	$border_color_key = $pre . 'borderColor';
	if ( ! empty( $props[ $border_color_key ] ) ) {
		$styles .= sprintf( 'border-color: %s%s;', $props[ $border_color_key ], $imp );
	}

	// Border radius.
	$radius_key = $pre . 'borderRadius';
	if ( isset( $props[ $radius_key ] ) ) {
		$radius = $props[ $radius_key ];

		// Full object
		if ( is_array( $radius ) ) {
			$map = array(
				'topLeft'     => 'border-top-left-radius',
				'topRight'    => 'border-top-right-radius',
				'bottomLeft'  => 'border-bottom-left-radius',
				'bottomRight' => 'border-bottom-right-radius',
			);
			foreach ( $map as $key => $css_prop ) {
				if ( ! empty( $radius[ $key ] ) ) {
					$styles .= sprintf( '%s: %s%s;', $css_prop, $radius[ $key ], $imp );
				}
			}
		}
		// Shorthand
		elseif ( is_string( $radius ) || is_numeric( $radius ) ) {
			$styles .= sprintf( 'border-radius: %s%s;', $radius, $imp );
		}
	}

	return $styles;
}

/**
 * Get padding styles from props.
 * 
 * @since 1.1.0
 * 
 * @param string $pre     Prefix for the props.
 * @param array  $props   All props or attributes.
 * @param bool   $useImp  Whether to add !important.
 * 
 * @return string CSS padding styles.
 */
function wpmozo_ban_get_padding_style( $pre, $props, $use_imp = false ) {
	$imp = $use_imp ? ' !important' : '';

	// Get if padding.
	if ( empty( $props[ $pre . 'padding' ] ) ) {
		return '';
	}

	$styles = '';

	$paddingArr = $props[ $pre . 'padding' ];
	foreach ( $paddingArr as $key => $padding ) {
		// Replace preset value.
		if ( false !== strpos( $padding, 'var' ) ) {
			$padding = str_replace( '|', '--', str_replace( 'var:', 'var(--wp--', $padding ) ) . ')';
		}

		$styles .= sprintf( 'padding-%1$s: %2$s%3$s;', $key, $padding, $imp );
	}

	return $styles;
}
