<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'post_ticker_generate_dynamic_style' ) ) {
	function post_ticker_generate_dynamic_style( $attrs ) {

		if ( empty( $attrs['ID'] ) ) {
			return '';
		}
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );

		$styles = '';

		//Ticker Label
		$styles .= "{$mainSelector} .wpmozo_post_ticker_label{";
		$styles .= ( ! empty( $attrs['tickerLabelColor'] ) ? "color: {$attrs['tickerLabelColor']};" : '' );
		$styles .= ( ! empty( $attrs['tickerLabelBackground'] ) ? "background-color: {$attrs['tickerLabelBackground']};" : '' );
		$styles .= $block_helpers::get_font_style( 'tickerLabel', $attrs );
		$styles .= $block_helpers::get_padding_style( 'tickerLabel', $attrs );
		$styles .= $block_helpers::get_margin_style( 'tickerLabel', $attrs );
		$styles .= $block_helpers::get_border_style( 'tickerLabel', $attrs );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_post_ticker_label:hover{";
		$styles .= ( ! empty( $attrs['tickerLabelColorHover'] ) ? "color: {$attrs['tickerLabelColorHover']};" : '' );
		$styles .= ( ! empty( $attrs['tickerLabelBackgroundHover'] ) ? "background-color: {$attrs['tickerLabelBackgroundHover']};" : '' );
		$styles .= $block_helpers::get_font_style( 'tickerLabelHover', $attrs );
		$styles .= $block_helpers::get_padding_style( 'tickerLabelHover', $attrs );
		$styles .= $block_helpers::get_margin_style( 'tickerLabelHover', $attrs );
		$styles .= $block_helpers::get_border_style( 'tickerLabelHover', $attrs );
		$styles .= "}";

		//Post Items Bar
		$styles .= "{$mainSelector} .wpmozo_post_ticker_items{";
		$styles .= ( ! empty( $attrs['postItemsBackground'] ) ? "background-color: {$attrs['postItemsBackground']};" : '' );
		$styles .= $block_helpers::get_padding_style( 'postItems', $attrs );
		$styles .= $block_helpers::get_margin_style( 'postItems', $attrs );
		$styles .= $block_helpers::get_border_style( 'postItems', $attrs );
		$styles .= "min-height: 1.2em;";
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_post_ticker_items:hover{";
		$styles .= ( ! empty( $attrs['postItemsHoverBackground'] ) ? "background-color: {$attrs['postItemsHoverBackground']};" : '' );
		$styles .= $block_helpers::get_font_style( 'postItemsHover', $attrs );
		$styles .= $block_helpers::get_padding_style( 'postItemsHover', $attrs );
		$styles .= $block_helpers::get_border_style( 'postItemsHover', $attrs );
		$styles .= "}";

		//Post Item
		$styles .= "{$mainSelector} .wpmozo_post_ticker_post_title{";
		$styles .= ( ! empty( $attrs['postItemColor'] ) ? "color: {$attrs['postItemColor']};" : '' );
		$styles .= $block_helpers::get_font_style( 'postItem', $attrs );
		$styles .= $block_helpers::get_padding_style( 'postItem', $attrs );
		$styles .= $block_helpers::get_margin_style( 'postItem', $attrs );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_post_ticker_post_title:hover{";
		$styles .= ( ! empty( $attrs['postItemHoverColor'] ) ? "color: {$attrs['postItemHoverColor']};" : '' );
		$styles .= $block_helpers::get_font_style( 'postItemHover', $attrs );
		$styles .= $block_helpers::get_padding_style( 'postItemHover', $attrs );
		$styles .= $block_helpers::get_margin_style( 'postItemHover', $attrs );
		$styles .= "}";

		//Seprator
		if('scroll' === $attrs['tickerEffect']){
			if('custom' ===  $attrs['separatorType']){
				$styles .= "{$mainSelector} .wpmozo_ticker_effect_scroll .wpmozo_post_ticker_item::after{";
				$styles .= ( ! empty( $attrs['customSeparator'] ) ? 'content: "' . ( $attrs['customSeparator'] ) . '" !important;' : '' );
				$styles .= ( ! empty( $attrs['separatorFontSize'] ) ? "font-size: {$attrs['separatorFontSize']}px;" : '' );
				$styles .= ( ! empty( $attrs['postSeparatorColor'] ) ? "color: {$attrs['postSeparatorColor']};" : '' );
				$styles .= $block_helpers::get_padding_style( 'postSeparator', $attrs );
				$styles .= $block_helpers::get_margin_style( 'postSeparator', $attrs );
				$styles .= "}";
			} else {
				$styles .= "{$mainSelector} .wpmozo_ticker_icon_separator{vertical-align:top;";
				$styles .= ( ! empty( $attrs['separatorFontSize'] ) ? "font-size: {$attrs['separatorFontSize']}px;" : '' );
				$styles .= ( ! empty( $attrs['postSeparatorColor'] ) ? "color: {$attrs['postSeparatorColor']};" : '' );
				$styles .= $block_helpers::get_padding_style( 'postSeparator', $attrs );
				$styles .= $block_helpers::get_margin_style( 'postSeparator', $attrs );
				$styles .= "}";
			}
		}

		//arrow
		$styles .= "{$mainSelector} .wpmozo_swiper_icon_prev i, {$mainSelector} .wpmozo_swiper_icon_next i{";
		$styles .= ( ! empty( $attrs['arrowFontSize'] ) ? "font-size: {$attrs['arrowFontSize']}px;" : '' );
		$styles .= ( ! empty( $attrs['arrowColor'] ) ? "color: {$attrs['arrowColor']};" : '' );
		$styles .= $block_helpers::get_border_style( 'arrow', $attrs );
		$styles .= $block_helpers::get_padding_style( 'arrow', $attrs );
		$styles .= $block_helpers::get_margin_style( 'arrow', $attrs );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_swiper_navigation{";
		$styles .= ( ! empty( $attrs['arrowBackground'] ) ? "background-color: {$attrs['arrowBackground']};" : '' );
		$styles .= "}";


		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}
