<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'advanced_tooltip_generate_dynamic_style' ) ) {
	function advanced_tooltip_generate_dynamic_style( $attrs ) {

		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );
		$theme = 'wpmozo-tippy-adt-block-' . esc_attr( $attrs['ID'] );

		$styles = '';

		if ( ! empty( $attrs['ID'] ) && ! empty( $attrs['buttonAlign'] ) ) {
			$align = esc_attr( $attrs['buttonAlign'] );
			$styles .= "
				.wpmozo_readmore_button_wrapper {
					text-align: {$align};
				}
			";
		}

		if ( ! empty( $attrs['ID'] ) && ! empty( $attrs['tooltipBackgroundColor'] ) ) {
			$bg = esc_attr( $attrs['tooltipBackgroundColor'] );
			$styles .= "
				.tippy-box[data-theme='{$theme}'] {
					background-color: {$bg};
				}
			";
		}

		$styles .= ".tippy-box[data-theme='{$theme}']{";
		$styles .= wpmozo_ban_get_border_style( 'tooltip', $attrs );
		$styles .= wpmozo_ban_get_padding_style( 'tooltip', $attrs );
		$styles .= "}";

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}
