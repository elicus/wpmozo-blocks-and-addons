<?php

namespace WPMOZO\BNA\Helpers;

/**
 * Trait class, handles the helper functions.
 * @link       https://elicus.com
 * @since      1.5.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Mozo_Bna_Block_Helpers {

	/**
	 * Get block dynamic style.
	 *
	 * @param string module name/slug/folder name.
	 * @param array attributes of module.
	 *
	 * @return string style for the module
	 * @since 1.1.0
	 */
	public static function get_block_dynamic_style( $module, $attributes ) {
		if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-' . esc_attr( $module ) . '/dynamic-style.php' ) ) {
			include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-' . esc_attr( $module ) . '/dynamic-style.php';

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
	 * @param string $pre    Prefix for the props.
	 * @param array  $props  All props or attributes.
	 * @param bool   $useImp Whether to add !important.
	 *
	 * @return string CSS font styles.
	 * @since 1.1.0
	 */
	public static function get_font_style( $pre, $props, $use_imp = false ) {
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
	 * @param string $pre    Prefix for the props.
	 * @param array  $props  All props or attributes.
	 * @param bool   $useImp Whether to add !important.
	 *
	 * @return string CSS border styles.
	 * @since 1.1.0
	 */
	public static function get_border_style( $pre, $props, $use_imp = false ) {
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
			} // Shorthand (single width)
			elseif ( isset( $border['width'] ) ) {
				$styles .= sprintf( 'border-width: %s%s;', $border['width'], $imp );
			}
		}

		// Border color.
		if ( isset( $border['color'] ) ) {
			$styles .= sprintf( 'border-color: %s%s;', $border['color'], $imp );
		} else {
			$styles .= sprintf( 'border-color: inherit%s;', $imp );
		}

		// Border Style
		if ( isset( $border['style'] ) ) {
			$styles .= sprintf( 'border-style: %s%s;', $border['style'], $imp );
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
			} // Shorthand
			elseif ( is_string( $radius ) || is_numeric( $radius ) ) {
				$styles .= sprintf( 'border-radius: %s%s;', $radius, $imp );
			}
		}

		return $styles;
	}

	/**
	 * Get padding styles from props.
	 *
	 * @param string $pre    Prefix for the props.
	 * @param array  $props  All props or attributes.
	 * @param bool   $useImp Whether to add !important.
	 *
	 * @return string CSS padding styles.
	 * @since 1.1.0
	 */
	public static function get_padding_style( $pre, $props, $use_imp = false ) {
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

	/**
	 * Get padding styles from props.
	 *
	 * @since 1.6.0
	 *
	 * @param string $pre     Prefix for the props.
	 * @param array  $props   All props or attributes.
	 * @param bool   $useImp  Whether to add !important.
	 *
	 * @return string CSS margin styles.
	 */
	public static function get_margin_style( $pre, $props, $use_imp = false ) {
		$imp = $use_imp ? ' !important' : '';

		// Get if margin.
		if ( empty( $props[ $pre . 'margin' ] ) ) {
			return '';
		}

		$styles = '';

		$marginArr = $props[ $pre . 'margin' ];
		foreach ( $marginArr as $key => $margin ) {
			// Replace preset value.
			if ( false !== strpos( $margin, 'var' ) ) {
				$margin = str_replace( '|', '--', str_replace( 'var:', 'var(--wp--', $margin ) ) . ')';
			}

			$styles .= sprintf( 'margin-%1$s: %2$s%3$s;', $key, $margin, $imp );
		}

		return $styles;
	}
}
