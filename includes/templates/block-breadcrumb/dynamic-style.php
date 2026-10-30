<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'breadcrumb_generate_dynamic_style' ) ) {
	function breadcrumb_generate_dynamic_style( $attrs ) {

		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

		$block_helpers = new Mozo_Bna_Block_Helpers();

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );

		$styles = '';

		$nav_bg     = isset( $attrs['breadcrumbsNavBackground'] ) ? $attrs['breadcrumbsNavBackground'] : '';
		$text_color = isset( $attrs['textColor'] ) ? $attrs['textColor'] : '';
		$text_align = isset( $attrs['textAlign'] ) ? $attrs['textAlign'] : 'left';
		$styles .= "
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper li .breadcrumb-page{
				background-color: {$nav_bg};
			}
			{$mainSelector} .layout1 li .breadcrumb-page::after{
				border-color: transparent transparent transparent {$nav_bg} !important;
			}
			{$mainSelector} .layout1 li .breadcrumb-page::before{
				border-color: {$nav_bg} {$nav_bg} {$nav_bg} transparent !important;
			}
			{$mainSelector} .breadcrumb-page {
				color:{$text_color};
			}
			{$mainSelector} .layout2 li .breadcrumb-page{
				background-color: transparent !important;
			}
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper{
				justify-content: {$text_align};
			}
			{$mainSelector} .wpmozo-home-page,
			{$mainSelector} .wpmozo-bna-home-page{
				font-size:  " . ( isset( $attrs['homeLinkIconSizeFontSize'] ) ? $attrs['homeLinkIconSizeFontSize'] : 'inherit' ) . ";
			}
			{$mainSelector} .wpmozo-home-page .breadcrumb-home-icon i,
			{$mainSelector} .wpmozo-bna-home-page .breadcrumb-page .breadcrumb-home-icon .icon-wrapper i{
				color:initial;
			}
			{$mainSelector} .wpmozo-home-page .breadcrumb-home-icon i,
			{$mainSelector} .wpmozo-bna-home-page .breadcrumb-page .breadcrumb-home-icon .icon-wrapper i{
				color:" . ( isset( $attrs['homeIconColor'] ) ? $attrs['homeIconColor'] : 'inherit' ) . ";
				font-size:" . ( isset( $attrs['homeLinkIconSizeFontSize'] ) ? $attrs['homeLinkIconSizeFontSize'] : 'inherit' ) . ";
			}
		";


		// Get textFontSize, strip 'px' if needed
		$textFontSize = isset($attrs['textFontSize']) ? $attrs['textFontSize'] : '';
		if (is_string($textFontSize)) {
			$textFontSize = str_replace('px', '', $textFontSize);
		}

		// Helper to convert padding values to px
		$parseToPx = function($val) {
			if (is_string($val)) {
				$cleanVal = trim(str_replace('var:preset|spacing|', '', $val));
				if (substr($cleanVal, -2) === 'px') {
					return floatval(str_replace('px', '', $cleanVal));
				} elseif (substr($cleanVal, -2) === 'em') {
					return floatval(str_replace('em', '', $cleanVal)) * 16;
				} elseif (substr($cleanVal, -3) === 'rem') {
					return floatval(str_replace('rem', '', $cleanVal)) * 16;
				} else {
					return floatval(preg_replace('/[^0-9.]/', '', $cleanVal)) ?: 0;
				}
			}
			return floatval($val);
		};

		// If attributes.breadcrumbItempadding is empty or not present, set to default values
		$defaultPadding = array(
			'top' => 20,
			'right' => 10,
			'bottom' => 20,
			'left' => 10
		);

		$breadcrumbItempadding = isset($attrs['breadcrumbItempadding']) && is_array($attrs['breadcrumbItempadding'])
			? $attrs['breadcrumbItempadding']
			: $defaultPadding;

		// If any item is missing, set all to default
		if (
			!isset($breadcrumbItempadding['top']) ||
			!isset($breadcrumbItempadding['right']) ||
			!isset($breadcrumbItempadding['bottom']) ||
			!isset($breadcrumbItempadding['left'])
		) {
			$breadcrumbItempadding = $defaultPadding;
		}

		$paddingTop = $parseToPx($breadcrumbItempadding['top']);
		$paddingBottom = $parseToPx($breadcrumbItempadding['bottom']);

		$height = floatval($paddingTop) + floatval($paddingBottom);
		$height_f = floor($height/2) . 'px';
		$height_c = ceil($height/2)  . 'px';

		$styles .= "
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page{
				height: {$height}px;
			}
		";

		$styles .= "
		{$mainSelector} .breadcrumb-page {";
		$styles .= $block_helpers::get_font_style( 'text', $attrs );
		$styles .= "}";

		if ( ! empty( $attrs['textDecoration'] ) ) {
			$styles .= "
				{$mainSelector} .breadcrumb-item {
					text-decoration: {$attrs['textDecoration']};
				}
			";
		}

		$styles .= "
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page {";
				$styles .= $block_helpers::get_padding_style( 'breadcrumbItem', $attrs );
		$styles .= "}";


		$sep_type = isset( $attrs['separatorType'] ) ? $attrs['separatorType'] : '';
		if ( 'text_separator' === $sep_type ) {
			$separatorText = isset($attrs['separatorText']) ? esc_attr($attrs['separatorText']) : '>';
			$separatorFontSize = !empty($attrs['separatorSizeFontSize']) ? $attrs['separatorSizeFontSize'] : 'inherit';
			$separatorColor = !empty($attrs['separatorColor']) ? $attrs['separatorColor'] : 'inherit';
			$styles .= "
				{$mainSelector} .layout2 li:after {
					content: '{$separatorText}';
					font-size: {$separatorFontSize};
					color: {$separatorColor};
				}";
		} elseif ( 'icon_separator' === $sep_type ) {
			$separatorFontSize = !empty($attrs['separatorSizeFontSize']) ? $attrs['separatorSizeFontSize'] : 'inherit';
			$separatorColor = !empty($attrs['separatorColor']) ? $attrs['separatorColor'] : 'inherit';
			$styles .= "
				{$mainSelector} .breadcrumb-home-icon i {
					font-size: {$separatorFontSize};
					color: {$separatorColor};
				}";
		}
		if ( ! empty( $attrs['enableDifferentBg'] ) ) {
			$last_bg = isset( $attrs['breadcrumbsNavLastItemBackground'] ) ? $attrs['breadcrumbsNavLastItemBackground'] : '';
			$styles .= "
				{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page.wpmozo-bna-last-page{
					background-color: {$last_bg};
				}
				{$mainSelector} .layout1 li .breadcrumb-page.wpmozo-bna-last-page::after{
					border-color: transparent transparent transparent {$last_bg} !important;
				}
				{$mainSelector} .layout1 li .breadcrumb-page.wpmozo-bna-last-page::before{
					border-color: {$last_bg} {$last_bg} {$last_bg} transparent !important;
				}
			";
		}

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}