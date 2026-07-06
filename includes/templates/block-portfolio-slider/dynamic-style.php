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

		// Global text align.
		if ( ! empty( $attrs['globalTextAlign'] ) ) {
			$styles .= "{$mainSelector}{text-align: {$attrs['globalTextAlign']};}";
		}

		// Excerpt Content body.
		if ( ( isset( $attrs['showExcerpt'] ) && true === $attrs['showExcerpt'] ) || ( isset( $attrs['showContent'] ) && true === $attrs['showContent'] ) ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_excerpt, {$mainSelector} .wpmozo_portfolio_slider_excerpt p, {$mainSelector} .wpmozo_portfolio_slider_content, {$mainSelector} .wpmozo_portfolio_slider_content p{";
				$styles .= ( ! empty( $attrs['bodyColor'] ) ? "color: {$attrs['bodyColor']};" : '' );
				$styles .= $block_helpers::get_font_style( 'body', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_excerpt:hover, {$mainSelector} .wpmozo_portfolio_slider_excerpt:hover p, {$mainSelector} .wpmozo_portfolio_slider_content:hover, {$mainSelector} .wpmozo_portfolio_slider_content:hover p{";
				$styles .= ( ! empty( $attrs['bodyHoverColor'] ) ? "color: {$attrs['bodyHoverColor']};" : '' );
				$styles .= $block_helpers::get_font_style( 'bodyHover', $attrs );
			$styles .= "}";
		}

		// Featured Image.
		if ( isset( $attrs['showFeaturedImage'] ) && true === $attrs['showFeaturedImage'] ) {
			$styles .= "{$mainSelector} .wpmozo_portfolio_slider_image{";
				$styles .= $block_helpers::get_border_style( 'featuredImage', $attrs );
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

		// Portfolio card wrapper.
		$styles .= "{$mainSelector} .wpmozo_portfolio_slider_item_card{";
			$styles .= ( ! empty( $attrs['portfolioBGGradient'] ) ? "background: {$attrs['portfolioBGGradient']};" : '' );
			$styles .= ( ! empty( $attrs['portfolioBackground'] ) ? "background-color: {$attrs['portfolioBackground']};" : '' );
			$styles .= $block_helpers::get_border_style( 'portfolio', $attrs, true );
			$styles .= $block_helpers::get_padding_style( 'portfolio', $attrs );
		$styles .= "}";

		// Slider arrows.
		if ( isset( $attrs['showArrows'] ) && true === $attrs['showArrows'] ) {
			$styles .= "{$mainSelector} .swiper-button-next, {$mainSelector} .swiper-button-prev{";
				$styles .= ( ! empty( $attrs['arrowIconSize'] ) ? "font-size: {$attrs['arrowIconSize']}px;" : '' );
				$styles .= ( ! empty( $attrs['arrowBackground'] ) ? "background-color: {$attrs['arrowBackground']};" : '' );
				$styles .= ( ! empty( $attrs['arrowColor'] ) ? "color: {$attrs['arrowColor']};" : '' );
				$styles .= $block_helpers::get_border_style( 'arrow', $attrs );
				$styles .= $block_helpers::get_padding_style( 'arrow', $attrs );
			$styles .= "}
				.wpmozo_swiper_wrapper .swiper-button-next:after,
				.wpmozo_swiper_wrapper .swiper-button-prev:after{
						font-size: {$attrs['arrowIconSize']}px;
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
			if ( ! empty( $attrs['controlDotColorInactive'] ) ) {
				if( 'transparent_dot' !== $attrs['controlDotStyle'] ){
					$styles .= "{$mainSelector} .swiper-pagination-bullet{";
						$styles .= "background: {$attrs['controlDotColorInactive']};";
					$styles .= "}";
				} else {
					$styles .= "{$mainSelector} .transparent_dot .swiper-pagination-bullet{";
						$styles .= "border-color: {$attrs['controlDotColorInactive']} !important;";
					$styles .= "}";
				}
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
			$styles .= "background-image: linear-gradient( to left, {$attrs['coverflowShadowColor']}, rgba(0,0,0,0) )";
			$styles .= "}";
			$styles .= "{$mainSelector} .swiper-3d .swiper-slide-shadow-right{";
			$styles .= "background-image: linear-gradient( to right, {$attrs['coverflowShadowColor']}, rgba(0,0,0,0) )";
			$styles .= "}";
		} else {
			$styles .= "{$mainSelector} .swiper-3d .swiper-slide-shadow-left, {$mainSelector} .swiper-3d .swiper-slide-shadow-right{";
			$styles .= "background-image: none";
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
