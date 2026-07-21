<?php
/**
 * Dynamic Style Template for Portfolio Slider
 *
 * @author     Elicus Technologies <hello@elicus.com>
 * @link       https://www.elicus.com/
 * @copyright  2026 Elicus Technologies Private Limited
 * @version    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'portfolio_slider_generate_dynamic_style' ) ) {
	function portfolio_slider_generate_dynamic_style( $attrs ) {
		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

		$block_helpers = new Mozo_Bna_Block_Helpers();

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );

		$styles = '';

		// Global text align and container width.
		$styles .= "{$mainSelector}{";
			if ( ! empty( $attrs['globalTextAlign'] ) ) {
				$styles .= "text-align: {$attrs['globalTextAlign']};";
			}
			if ( ! empty( $attrs['containerWidth'] ) ) {
				$styles .= "width: {$attrs['containerWidth']}%;";
			}
			if ( ! empty( $attrs['containerMaxWidth'] ) ) {
				$styles .= "max-width: {$attrs['containerMaxWidth']}px;";
			}
			if ( ! empty( $attrs['containerWidth'] ) || ! empty( $attrs['containerMaxWidth'] ) ) {
				$styles .= "margin-left: auto; margin-right: auto;";
			}
		$styles .= "}";

		// Featured Image.
		if ( isset( $attrs['showFeaturedImage'] ) && true === $attrs['showFeaturedImage'] ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_layout.layout1 .wpmozo_portfolio_slider_image_wrap{";
				$styles .= ( ! empty( $attrs['featuredImageWidth'] ) ? "width: {$attrs['featuredImageWidth']}px !important; max-width: 100%;" : '' );
				$styles .= ( ! empty( $attrs['featuredImageHeight'] ) ? "height: {$attrs['featuredImageHeight']}px !important;" : '' );
				$styles .= $block_helpers::get_border_style( 'featuredImage', $attrs );
				$styles .= $block_helpers::get_padding_style( 'featuredImage', $attrs );
				$styles .= $block_helpers::get_margin_style( 'featuredImage', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_layout.layout1 .wpmozo_portfolio_slider_image_wrap img{";
				$styles .= ( ! empty( $attrs['featuredImageWidth'] ) ? "width: {$attrs['featuredImageWidth']}px !important; max-width: 100%;" : '' );
				$styles .= ( ! empty( $attrs['featuredImageHeight'] ) ? "height: {$attrs['featuredImageHeight']}px !important;" : '' );
				$styles .= ( ! empty( $attrs['featuredImageObjectFit'] ) ? "object-fit: {$attrs['featuredImageObjectFit']} !important;" : '' );
			$styles .= "}";
		}

		// Title.
		if ( isset( $attrs['showTitle'] ) && true === $attrs['showTitle'] ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_title, {$mainSelector} .wpmozo_portfolio_slider_title a{";
				$styles .= ( ! empty( $attrs['titleColor'] ) ? "color: {$attrs['titleColor']};" : '' );
				$styles .= $block_helpers::get_font_style( 'title', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_title:hover, {$mainSelector} .wpmozo_portfolio_slider_title:hover a{";
				$styles .= ( ! empty( $attrs['titleHoverColor'] ) ? "color: {$attrs['titleHoverColor']};" : '' );
				$styles .= $block_helpers::get_font_style( 'titleHover', $attrs );
			$styles .= "}";
		}

		// Categories.
		$styles .= "{$mainSelector} .wpmozo_portfolio_slider_cat{";
			$styles .= ( ! empty( $attrs['categoriesBackground'] ) ? "background-color: {$attrs['categoriesBackground']};" : '' );
			$styles .= $block_helpers::get_padding_style( 'categories', $attrs );
			$styles .= $block_helpers::get_margin_style( 'categories', $attrs );
			$styles .= $block_helpers::get_border_style( 'categories', $attrs );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_portfolio_slider_cat:hover{";
			$styles .= ( ! empty( $attrs['categoriesHoverBackground'] ) ? "background-color: {$attrs['categoriesHoverBackground']} !important;" : '' );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_portfolio_slider_cat a{";
			$styles .= ( ! empty( $attrs['categoriesColor'] ) ? "color: {$attrs['categoriesColor']};" : '' );
			$styles .= $block_helpers::get_font_style( 'categories', $attrs );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_portfolio_slider_cat:hover a{";
			$styles .= ( ! empty( $attrs['categoriesHoverColor'] ) ? "color: {$attrs['categoriesHoverColor']};" : '' );
			$styles .= $block_helpers::get_font_style( 'categoriesHover', $attrs );
		$styles .= "}";

		// Content.
		if ( isset( $attrs['showContent'] ) && true === $attrs['showContent'] ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_content, {$mainSelector} .wpmozo_portfolio_slider_content p{";
				$styles .= ( ! empty( $attrs['contentColor'] ) ? "color: {$attrs['contentColor']};" : '' );
				$styles .= $block_helpers::get_font_style( 'content', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_content:hover, {$mainSelector} .wpmozo_portfolio_slider_content:hover p{";
				$styles .= ( ! empty( $attrs['contentHoverColor'] ) ? "color: {$attrs['contentHoverColor']};" : '' );
				$styles .= $block_helpers::get_font_style( 'contentHover', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_content{";
				$styles .= $block_helpers::get_padding_style( 'content', $attrs );
				$styles .= $block_helpers::get_margin_style( 'content', $attrs );
			$styles .= "}";
		}

		// Excerpt.
		if ( isset( $attrs['showExcerpt'] ) && true === $attrs['showExcerpt'] ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_excerpt, {$mainSelector} .wpmozo_portfolio_slider_excerpt p{";
				$styles .= ( ! empty( $attrs['excerptColor'] ) ? "color: {$attrs['excerptColor']};" : '' );
				$styles .= $block_helpers::get_font_style( 'excerpt', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_excerpt:hover, {$mainSelector} .wpmozo_portfolio_slider_excerpt:hover p{";
				$styles .= ( ! empty( $attrs['excerptHoverColor'] ) ? "color: {$attrs['excerptHoverColor']};" : '' );
				$styles .= $block_helpers::get_font_style( 'excerptHover', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_excerpt{";
				$styles .= $block_helpers::get_padding_style( 'excerpt', $attrs );
				$styles .= $block_helpers::get_margin_style( 'excerpt', $attrs );
			$styles .= "}";
		}

		// Read More Button.
		if ( isset( $attrs['showReadMore'] ) && true === $attrs['showReadMore'] ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_readmore{";
				$styles .= ( ! empty( $attrs['readMoreColor'] ) ? "color: {$attrs['readMoreColor']} !important;" : '' );
				$styles .= ( ! empty( $attrs['readMoreBackground'] ) ? "background-color: {$attrs['readMoreBackground']} !important;" : '' );
				$styles .= $block_helpers::get_font_style( 'readMore', $attrs );
				$styles .= $block_helpers::get_border_style( 'readMore', $attrs );
				$styles .= $block_helpers::get_padding_style( 'readMore', $attrs );
				$styles .= $block_helpers::get_margin_style( 'readMore', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_readmore:hover{";
				$styles .= ( ! empty( $attrs['readMoreHoverColor'] ) ? "color: {$attrs['readMoreHoverColor']} !important;" : '' );
				$styles .= ( ! empty( $attrs['readMoreHoverBackground'] ) ? "background-color: {$attrs['readMoreHoverBackground']} !important;" : '' );
				$styles .= $block_helpers::get_font_style( 'readMoreHover', $attrs );
			$styles .= "}";
		}

		// Project URL Button.
		if ( isset( $attrs['showProjectUrl'] ) && true === $attrs['showProjectUrl'] ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_projecturl{";
				$styles .= ( ! empty( $attrs['projectUrlColor'] ) ? "color: {$attrs['projectUrlColor']} !important;" : '' );
				$styles .= ( ! empty( $attrs['projectUrlBackground'] ) ? "background-color: {$attrs['projectUrlBackground']} !important;" : '' );
				$styles .= $block_helpers::get_font_style( 'projectUrl', $attrs );
				$styles .= $block_helpers::get_border_style( 'projectUrl', $attrs );
				$styles .= $block_helpers::get_padding_style( 'projectUrl', $attrs );
				$styles .= $block_helpers::get_margin_style( 'projectUrl', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_projecturl:hover{";
				$styles .= ( ! empty( $attrs['projectUrlHoverColor'] ) ? "color: {$attrs['projectUrlHoverColor']} !important;" : '' );
				$styles .= ( ! empty( $attrs['projectUrlHoverBackground'] ) ? "background-color: {$attrs['projectUrlHoverBackground']} !important;" : '' );
				$styles .= $block_helpers::get_font_style( 'projectUrlHover', $attrs );
			$styles .= "}";
		}

		// Portfolio card wrapper.
		$layout = $attrs['layout'] ?? 'layout1';
		if ( 'layout2' === $layout ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_content_wrap{";
				$styles .= ( ! empty( $attrs['overlayBGGradient'] ) ? "background: {$attrs['overlayBGGradient']};" : '' );
				$styles .= ( ! empty( $attrs['overlayBackground'] ) ? "background-color: {$attrs['overlayBackground']};" : '' );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_item_card{";
				$styles .= $block_helpers::get_border_style( 'portfolio', $attrs, true );
				$styles .= $block_helpers::get_padding_style( 'portfolio', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_content_wrap:hover{";
				$styles .= ( ! empty( $attrs['overlayBackgroundHover'] ) ? "background-color: {$attrs['overlayBackgroundHover']} !important;" : '' );
				$styles .= ( ! empty( $attrs['overlayBGGradientHover'] ) ? "background: {$attrs['overlayBGGradientHover']} !important;" : '' );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_item_card:hover{";
				$styles .= $block_helpers::get_border_style( 'portfolioHover', $attrs, true );
			$styles .= "}";
		} else {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_item_card{";
				$styles .= ( ! empty( $attrs['portfolioBGGradient'] ) ? "background: {$attrs['portfolioBGGradient']};" : '' );
				$styles .= ( ! empty( $attrs['portfolioBackground'] ) ? "background-color: {$attrs['portfolioBackground']};" : '' );
				$styles .= $block_helpers::get_border_style( 'portfolio', $attrs, true );
				$styles .= $block_helpers::get_padding_style( 'portfolio', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_item_card:hover{";
				$styles .= ( ! empty( $attrs['portfolioBackgroundHover'] ) ? "background-color: {$attrs['portfolioBackgroundHover']} !important;" : '' );
				$styles .= ( ! empty( $attrs['portfolioBGGradientHover'] ) ? "background: {$attrs['portfolioBGGradientHover']} !important;" : '' );
				$styles .= $block_helpers::get_border_style( 'portfolioHover', $attrs, true );
			$styles .= "}";
		}

		// Slider arrows.
		if ( isset( $attrs['showArrows'] ) && true === $attrs['showArrows'] ) {
			$arrow_bg_size   = $attrs['arrowBgSize'] ?? 36;
			$arrow_icon_size = $attrs['arrowIconSize'] ?? 24;
			$final_bg_size   = max( $arrow_bg_size, $arrow_icon_size );
			$enable_bg       = $attrs['arrowEnableBg'] ?? true;

			$styles .= "{$mainSelector} .swiper-button-next, {$mainSelector} .swiper-button-prev{";
				$styles .= ( ! empty( $attrs['arrowIconSize'] ) ? "font-size: {$attrs['arrowIconSize']}px;" : '' );
				$styles .= ( ! empty( $attrs['arrowColor'] ) ? "color: {$attrs['arrowColor']};" : '' );
				if ( $enable_bg ) {
					$styles .= "width: {$final_bg_size}px; height: {$final_bg_size}px;";
					if ( ! empty( $attrs['arrowBackground'] ) ) {
						$styles .= "background-color: {$attrs['arrowBackground']};";
					}
					$styles .= $block_helpers::get_border_style( 'arrow', $attrs );
					$styles .= $block_helpers::get_padding_style( 'arrow', $attrs );
				}
			$styles .= "}
				.wpmozo_swiper_wrapper .swiper-button-next:after,
				.wpmozo_swiper_wrapper .swiper-button-prev:after{
						font-size: {$arrow_icon_size}px;
				}
			";
			if ( true === $attrs['showArrowOnHover'] ) {
				$styles .= "{$mainSelector} .swiper-button-next, {$mainSelector} .swiper-button-prev{";
					$styles .= "visibility: hidden; opacity: 0; transition: all 300ms ease;";
				$styles .= "}";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .swiper-button-next, {$mainSelector} .wpmozo_swiper_wrapper:hover .swiper-button-prev{";
					$styles .= "visibility: visible; opacity: 1;";
				$styles .= "}";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .swiper-button-next.swiper-button-disabled, {$mainSelector} .wpmozo_swiper_wrapper:hover .swiper-button-prev.swiper-button-disabled{";
					$styles .= "opacity: 0.35;";
				$styles .= "}";
				// Outside arrows.
				$styles .= "{$mainSelector} .wpmozo_arrows_outside .swiper-button-prev{ left: 50px; }";
				$styles .= "{$mainSelector} .wpmozo_arrows_outside .swiper-button-next{ right: 50px; }";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-prev{ left: 0; }";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-next{ right: 0; }";
				// Inside arrows.
				$styles .= "{$mainSelector} .wpmozo_arrows_inside .swiper-button-prev{ left: -50px; }";
				$styles .= "{$mainSelector} .wpmozo_arrows_inside .swiper-button-next{ right: -50px; }";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-prev{ left: 0; }";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-next{ right: 0; }";
			}
		}

		// Control dot color.
		if ( isset( $attrs['showControlDot'] ) && true === $attrs['showControlDot'] ) {
			if ( ! empty( $attrs['controlDotColorInactive'] ) && 'transparent_dot' !== $attrs['controlDotStyle'] ) {
				$styles .= "{$mainSelector} .swiper-pagination-bullet{";
					$styles .= "background: {$attrs['controlDotColorInactive']};";
				$styles .= "}";
			} else {
				$styles .= "{$mainSelector} .transparent_dot .swiper-pagination-bullet{";
					$styles .= "border-color: {$attrs['controlDotColorInactive']} !important;";
				$styles .= "}";
			}
			if ( ! empty( $attrs['controlDotColorActive'] ) && 'transparent_dot' !== $attrs['controlDotStyle'] ) {
				$styles .= "{$mainSelector} .swiper-pagination-bullet-active{";
					$styles .= "background: {$attrs['controlDotColorActive']};";
				$styles .= "}";
			} else {
				$styles .= "{$mainSelector} .transparent_dot .swiper-pagination-bullet-active{";
					$styles .= "border-color: {$attrs['controlDotColorActive']} !important;border-width: 2px;border-style: solid;background: transparent;";
				$styles .= "}";
			}
			if ( 'stretched_dot' === $attrs['controlDotStyle'] && ! empty( $attrs['transDuration'] ) ) {
				$styles .= "{$mainSelector} .stretched_dot .swiper-pagination-bullet{";
					$styles .= "transition: all {$attrs['transDuration']}ms ease;";
				$styles .= "}";
			}
		}

		// Coverflow shadow.
		if ( isset( $attrs['enableCoverflowShadow'] ) && true === $attrs['enableCoverflowShadow'] && ! empty( $attrs['coverflowShadowColor'] ) ) {
			$styles .= "{$mainSelector} .swiper-3d .swiper-slide-shadow-left{";
				$styles .= "background-image: linear-gradient( to left, {$attrs['coverflowShadowColor']}, rgba(0,0,0,0) );";
			$styles .= "}";
			$styles .= "{$mainSelector} .swiper-3d .swiper-slide-shadow-right{";
				$styles .= "background-image: linear-gradient( to right, {$attrs['coverflowShadowColor']}, rgba(0,0,0,0) );";
			$styles .= "}";
		} else {
			$styles .= "{$mainSelector} .swiper-3d .swiper-slide-shadow-left, {$mainSelector} .swiper-3d .swiper-slide-shadow-right{";
				$styles .= "background-image: none;";
			$styles .= "}";
		}

		// Slider container.
		$styles .= "{$mainSelector} .swiper-container{";
			$styles .= $block_helpers::get_padding_style( 'container', $attrs );
		$styles .= "}";

		// Linear transition.
		if ( isset( $attrs['enableLinearTrans'] ) && true === $attrs['enableLinearTrans'] ) {
			$styles .= "{$mainSelector} .swiper-wrapper{ transition-timing-function : linear !important; }";
		}

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
		: '' );
	}
}
