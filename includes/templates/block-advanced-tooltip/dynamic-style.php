<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'advanced_tooltip_generate_dynamic_style' ) ) {
	function advanced_tooltip_generate_dynamic_style( $attrs ) {

		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

		$block_helpers = new Mozo_Bna_Block_Helpers();

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );
		$theme        = 'wpmozo-tippy-adt-block-' . esc_attr( $attrs['ID'] );

		$styles = '';

		if ( ! empty( $attrs['ID'] ) && ! empty( $attrs['buttonAlign'] ) ) {
			$align  = esc_attr( $attrs['buttonAlign'] );
			$styles .= "
				.wpmozo-bna-button-wrap {
					text-align: {$align};
				}
			";
		}

		//Button
		if ( 'button' === $attrs['trigerElement'] ) {
			$styles .= "{$mainSelector} .wpmozo-bna-button{";
			$styles .= ( ! empty( $attrs['buttonColor'] ) ? "color: {$attrs['buttonColor']};" : '' );
			$styles .= ( ! empty( $attrs['buttonBackground'] ) ? "background-color: {$attrs['buttonBackground']};" : '' );
			$styles .= $block_helpers::get_font_style( 'button', $attrs );
			$styles .= $block_helpers::get_padding_style( 'button', $attrs );
			$styles .= $block_helpers::get_border_style( 'button', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo-bna-button:hover{";
			$styles .= ( ! empty( $attrs['buttonHoverColor'] ) ? "color: {$attrs['buttonHoverColor']};" : '' );
			$styles .= ( ! empty( $attrs['buttonHoverBackground'] ) ? "background-color: {$attrs['buttonHoverBackground']};" : '' );
			$styles .= "}";
		}

		//Image
		if ( 'image' === $attrs['trigerElement'] ) {
			$styles .= "{$mainSelector} .wpmozo_tooltip_trigger_image{";
			$styles .= "cursor:pointer;";
			$styles .= ( ! empty( $attrs['triggerImageWidth'] ) ? "cursor:pointer;width: {$attrs['triggerImageWidth']}%;" : '' );
			$styles .= "}";
		}

		//Icon
		if ( 'icon' === $attrs['trigerElement'] ) {
			$styles .= "{$mainSelector} .trigger_type_icon{";
			$styles .= ( ! empty( $attrs['triggerIconAlign'] ) ? "text-align: {$attrs['triggerIconAlign']};" : '' );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_tooltip_trigger_icon{";
			$styles .= "cursor:pointer;transition:all 300ms;";
			$styles .= ( ! empty( $attrs['triggerIconColor'] ) ? "color: {$attrs['triggerIconColor']};" : '' );
			$styles .= ( ! empty( $attrs['triggerIconSize'] ) ? "font-size: {$attrs['triggerIconSize']}px;" : '' );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_tooltip_trigger_icon:hover{";
			$styles .= "cursor:pointer;transition:all 300ms;";
			$styles .= ( ! empty( $attrs['triggerIconHoverColor'] ) ? "color: {$attrs['triggerIconHoverColor']};" : '' );
			$styles .= ( ! empty( $attrs['triggerIconSizeHover'] ) ? "font-size: {$attrs['triggerIconSizeHover']}px;" : '' );
			$styles .= "}";
		}

		//Text
		if ( 'text' === $attrs['trigerElement'] ) {
			$styles .= "{$mainSelector} .trigger_type_text{";
			$styles .= ( ! empty( $attrs['TriggerTextAlign'] ) ? "text-align: {$attrs['TriggerTextAlign']};" : '' );
			$styles .= ( ! empty( $attrs['TriggerTextColor'] ) ? "color: {$attrs['TriggerTextColor']};" : '' );
			$styles .= $block_helpers::get_font_style( 'TriggerText', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .trigger_type_text:hover{";
			$styles .= ( ! empty( $attrs['triggerTextHoverColor'] ) ? "color: {$attrs['triggerTextHoverColor']};" : '' );
			$styles .= $block_helpers::get_font_style( 'triggerTextHover', $attrs );
			$styles .= "}";
		}

		if ( ! empty( $attrs['ID'] ) && ! empty( $attrs['tooltipBackgroundColor'] ) ) {
			$bg     = esc_attr( $attrs['tooltipBackgroundColor'] );
			$styles .= "
				.tippy-box[data-theme='{$theme}'] {
					background-color: {$bg};
				}
			";
		}
		$styles .= ".tippy-box[data-theme='{$theme}']{";
		$styles .= $block_helpers::get_border_style( 'tooltip', $attrs );
		$styles .= $block_helpers::get_padding_style( 'tooltip', $attrs );
		$styles .= "}";

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}
