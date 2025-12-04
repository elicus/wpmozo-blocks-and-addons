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

		$styles .= "
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper li .breadcrumb-page{
				background-color: {$attrs['breadcrumbsNavBackground']};
			}
			{$mainSelector} .layout1 li .breadcrumb-page::after{
				border-color: transparent transparent transparent {$attrs['breadcrumbsNavBackground']} !important;
			}
			{$mainSelector} .layout1 li .breadcrumb-page::before{
				border-color: {$attrs['breadcrumbsNavBackground']} {$attrs['breadcrumbsNavBackground']} {$attrs['breadcrumbsNavBackground']} transparent !important;
			}
			{$mainSelector} .breadcrumb-page {
				color:{$attrs['textColor']};
			}
			{$mainSelector} .layout2 li .breadcrumb-page{
				background-color: transparent !important;
			}
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper{
				justify-content: {$attrs['textAlign']};
			}
			{$mainSelector} .dipl-home-page{
				font-size: {$attrs['homeLinkIconSizeFontSize']};
			}
			{$mainSelector} .dipl-home-page .breadcrumb-home-icon i{
				color:initial;
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

		$height = floatval($textFontSize) + floatval($paddingTop) + floatval($paddingBottom);
		$height_f = ceil($height/2) . 'px';
		$height_c = ceil($height/2) . 'px';

		$styles .= "
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page{
				height: {$height}px;
			}
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page::before,
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page::after{
				border-width: {$height_f} 10px {$height_c} 10px;
			}
		";

		$styles .= "
			{$mainSelector} .breadcrumb-page {";
		$styles .= $block_helpers::get_font_style( 'text', $attrs );
		$styles .= "}";

		$styles .= "
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page {";
				$styles .= $block_helpers::get_padding_style( 'breadcrumbItem', $attrs );
		$styles .= "}";


		if ( 'text_separator' === $attrs['separatorType'] ) {
			$separatorText = isset($attrs['separatorText']) ? esc_attr($attrs['separatorText']) : '>';
			$separatorFontSize = !empty($attrs['separatorSizeFontSize']) ? $attrs['separatorSizeFontSize'] : 'inherit';
			$separatorColor = !empty($attrs['separatorColor']) ? $attrs['separatorColor'] : 'inherit';

			$styles .= "
				{$mainSelector} .layout2 li:after {
					content: '{$separatorText}';
					font-size: {$separatorFontSize};
					color: {$separatorColor};
				}";
		} elseif ( 'icon_separator' === $attrs['separatorType'] ) {
			$separatorFontSize = !empty($attrs['separatorSizeFontSize']) ? $attrs['separatorSizeFontSize'] : 'inherit';
			$separatorColor = !empty($attrs['separatorColor']) ? $attrs['separatorColor'] : 'inherit';

			$styles .= "
				{$mainSelector} .breadcrumb-item .breadcrumb-home-icon i {
					font-size: {$separatorFontSize};
					color: {$separatorColor};
				}";
		}

		if ( $attrs['enableDifferentBg'] ) {
			$styles .= "
				{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page.wpmozo-bna-last-page{
					background-color: {$attrs['breadcrumbsNavLastItemBackground']};
				}
				{$mainSelector} .layout1 li .breadcrumb-page.wpmozo-bna-last-page::after{
					border-color: transparent transparent transparent {$attrs['breadcrumbsNavLastItemBackground']} !important;
				}
				{$mainSelector} .layout1 li .breadcrumb-page.wpmozo-bna-last-page::before{
					border-color: {$attrs['breadcrumbsNavLastItemBackground']} {$attrs['breadcrumbsNavLastItemBackground']} {$attrs['breadcrumbsNavLastItemBackground']} transparent !important;
				}
			";
		}

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}
