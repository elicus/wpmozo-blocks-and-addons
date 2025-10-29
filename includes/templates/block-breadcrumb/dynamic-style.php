<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'breadcrumb_generate_dynamic_style' ) ) {
	function breadcrumb_generate_dynamic_style( $attrs ) {

		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

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
		";

		$styles .= "
			{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page {";
				$styles .= wpmozo_ban_get_padding_style( 'breadcrumbItem', $attrs );
		$styles .= "}";

		if ( $attrs['enableDifferentBg'] ) {
			$styles .= "
				{$mainSelector} .wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page.wpmozo-bna-last-page{
					background-color: {$attrs['breadcrumbsNavLastItemBackground']};
				}
				{$mainSelector} .layout1 li .breadcrumb-page.wpmozo-bna-last-page::after{
					border-color: transparent transparent transparent {$attrs['breadcrumbsNavLastItemBackground']} !important;
				}
				{$mainSelector} .layout1 li .breadcrumb-page..wpmozo-bna-last-page::before{
					border-color: {$attrs['breadcrumbsNavLastItemBackground']} {$attrs['breadcrumbsNavLastItemBackground']} {$attrs['breadcrumbsNavLastItemBackground']} transparent !important;
				}
			";
		}

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}
