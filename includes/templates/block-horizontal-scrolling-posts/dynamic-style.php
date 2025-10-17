<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'horizontal_scrolling_posts_generate_dynamic_style' ) ) {
	function horizontal_scrolling_posts_generate_dynamic_style( $attrs ) {

		if ( empty( $attrs['ID'] ) ) {
			return '';
		}
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );

		$styles = '';

		//Title Text
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_title, {$mainSelector} .wpmozo_horizontal_scrolling_post_title a{";
		$styles .= ( ! empty( $attrs['titleTextAlignment'] ) ? "text-align: {$attrs['titleTextAlignment']};" : '' );
		$styles .= ( ! empty( $attrs['titleTextColor'] ) ? "color: {$attrs['titleTextColor']};" : '' );
		$styles .= $block_helpers::get_font_style( 'titleText', $attrs );
		$styles .= "}";


		//Excerpt Text
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_excerpt{";
		$styles .= "margin: 16px 0;";
		$styles .= ( ! empty( $attrs['excerptTextAlignment'] ) ? "text-align: {$attrs['excerptTextAlignment']};" : '' );
		$styles .= ( ! empty( $attrs['excerptTextColor'] ) ? "color: {$attrs['excerptTextColor']};" : '' );
		$styles .= $block_helpers::get_font_style( 'excerptText', $attrs );
		$styles .= "}";

		//Post Item
		$styles .= "{$mainSelector} .postContent{";
		$styles .= $block_helpers::get_padding_style( 'postItem', $attrs );
		$styles .= $block_helpers::get_margin_style( 'postItem', $attrs );
		$styles .= $block_helpers::get_border_style( 'postItem', $attrs );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_inner::before{";
		$styles .= ( ! empty( $attrs['postItemColor'] ) ? "background-color: {$attrs['postItemColor']};" : '' );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_wrapper{";
		$styles .= ( ! empty( $attrs['postItemWidth'] ) ? "width: {$attrs['postItemWidth']}px;" : '' );
		$styles .= ( ! empty( $attrs['postItemWidth'] ) ? "min-width: {$attrs['postItemWidth']}px;" : '' );
		$styles .= "}";


		//Post Content
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_content_wrapper{";
		$styles .= ( ! empty( $attrs['postContentColor'] ) ? "background-color: {$attrs['postContentColor']};" : '' );
		$styles .= $block_helpers::get_padding_style( 'postContent', $attrs );
		$styles .= $block_helpers::get_margin_style( 'postContent', $attrs );
		$styles .= $block_helpers::get_border_style( 'postContent', $attrs );
		$styles .= "}";

		//Category
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_tag a{";
		$styles .= ( ! empty( $attrs['catTextColor'] ) ? "color: {$attrs['catTextColor']};" : '' );
		$styles .= ( ! empty( $attrs['catBKColor'] ) ? "background-color: {$attrs['catBKColor']};" : '' );
		$styles .= $block_helpers::get_font_style( 'catText', $attrs );
		$styles .= $block_helpers::get_padding_style( 'cat', $attrs );
		$styles .= $block_helpers::get_margin_style( 'cat', $attrs );
		$styles .= $block_helpers::get_border_style( 'cat', $attrs );
		$styles .= "}";

		//Post Image
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_wrapper .wpmozo_horizontal_scrolling_post_image{";
		$styles .= ( ! empty( $attrs['imageHeight'] ) ? "height: {$attrs['imageHeight']}px;" : '' );
		$styles .= $block_helpers::get_padding_style( 'postImage', $attrs );
		$styles .= $block_helpers::get_margin_style( 'postImage', $attrs );
		$styles .= $block_helpers::get_border_style( 'postImage', $attrs );
		$styles .= "}";

		//Meta Icon
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_meta_wrapper .et-pb-icon, {$mainSelector} .wpmozo_horizontal_scrolling_post_tag .et-pb-icon, .wpmozo_horizontal_scrolling_post_meta_wrapper .fas{";
		$styles .= ( ! empty( $attrs['metaIconFontSize'] ) ? "font-size: {$attrs['metaIconFontSize']}px;" : '' );
		$styles .= ( ! empty( $attrs['metaIconColor'] ) ? "color: {$attrs['metaIconColor']};" : '' );
		$styles .= "}";

		//Meta Text
		$styles .= "{$mainSelector} .wpmozo_horizontal_scrolling_post_meta_wrapper, {$mainSelector} .wpmozo_horizontal_scrolling_post_meta_wrapper span, {$mainSelector} .wpmozo_horizontal_scrolling_post_meta_wrapper a, {$mainSelector} .wpmozo_horizontal_scrolling_post_tag_wrapper span.published{";
		$styles .= ( ! empty( $attrs['metaTextColor'] ) ? "color: {$attrs['metaTextColor']};" : '' );
		$styles .= $block_helpers::get_font_style( 'metaText', $attrs );
		$styles .= "}";

		//Button
		if ( ! empty( $attrs['ID'] ) && ! empty( $attrs['buttonAlignment'] ) ) {
			$styles .= "{$mainSelector} .wpmozo-bna-button-wrap {";
			$styles .= ( ! empty( $attrs['buttonAlignment'] ) ? "text-align: {$attrs['buttonAlignment']};" : '' );
			$styles .= "}";
		}
		if($attrs['showButton']){
			$styles .= "{$mainSelector} .wpmozo-bna-button {";
			$styles .= ( ! empty( $attrs['buttonTextSize'] ) ? "font-size: {$attrs['buttonTextSize']}px;" : '' );
			$styles .= ( ! empty( $attrs['buttonTextColor'] ) ? "color: {$attrs['buttonTextColor']};" : '' );
			$styles .= ( ! empty( $attrs['buttonTextBackground'] ) ? "background: {$attrs['buttonTextBackground']};" : '' );
			$styles .= $block_helpers::get_font_style( 'button', $attrs );
			$styles .= $block_helpers::get_padding_style( 'button', $attrs );
			$styles .= $block_helpers::get_margin_style( 'button', $attrs );
			$styles .= $block_helpers::get_border_style( 'button', $attrs );
			$styles .= "}";
		}
		if($attrs['showButton'] && $attrs['showButtonIcon']){
			$styles .= "{$mainSelector} .wpmozo-bna-icon {";
			$styles .= ( ! empty( $attrs['buttonIconColor'] ) ? "color: {$attrs['buttonIconColor']};" : '' );
			$styles .= "}";
		}

		//Spacing
		$styles .= "{$mainSelector} .wpmozo-sticky-posts-scroller {";
		$styles .= $block_helpers::get_padding_style( 'container', $attrs );
		$styles .= $block_helpers::get_margin_style( 'container', $attrs );
		$styles .= "}";

		//Border
		$styles .= "{$mainSelector} .wpmozo-sticky-posts-scroller {";
		$styles .= $block_helpers::get_border_style( 'container', $attrs );
		$styles .= "}";

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}
