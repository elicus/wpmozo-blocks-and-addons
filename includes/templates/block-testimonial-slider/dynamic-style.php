<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'testimonial_slider_generate_dynamic_style' ) ) {
	function testimonial_slider_generate_dynamic_style( $attrs ) {
		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );

		$styles = '';

		// Global text align.
		if ( ! empty( $attrs['globalTextAlign'] ) ) {
			$styles .= "{$mainSelector}{text-align: {$attrs['globalTextAlign']};}";
		}

		// Testimonial content body.
		$styles .= "{$mainSelector} .wpmozo_testimonial_desc, {$mainSelector} .wpmozo_testimonial_desc p{";
		$styles .= ( ! empty( $attrs['bodyColor'] ) ? "color: {$attrs['bodyColor']};" : '' );
		$styles .= wpmozo_ban_get_font_style( 'body', $attrs );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_testimonial_desc:hover, {$mainSelector} .wpmozo_testimonial_desc:hover p{";
		$styles .= ( ! empty( $attrs['bodyHoverColor'] ) ? "color: {$attrs['bodyHoverColor']};" : '' );
		$styles .= wpmozo_ban_get_font_style( 'bodyHover', $attrs );
		$styles .= "}";

		// Author Image.
		if ( true === $attrs['showAuthorImage'] ) {
			$styles .= "{$mainSelector} .wpmozo_testimonial_author_image img{";
			$styles .= wpmozo_ban_get_border_style( 'authorImage', $attrs );
			$styles .= "}";
		}

		// Author Name.
		$styles .= "{$mainSelector} .wpmozo_testimonial_author_name{";
		$styles .= ( ! empty( $attrs['authorNameColor'] ) ? "color: {$attrs['authorNameColor']};" : '' );
		$styles .= wpmozo_ban_get_font_style( 'authorName', $attrs );
		$styles .= "}";
		$styles .= "{$mainSelector} .wpmozo_testimonial_author_name:hover{";
		$styles .= ( ! empty( $attrs['authorNameHoverColor'] ) ? "color: {$attrs['authorNameHoverColor']};" : '' );
		$styles .= wpmozo_ban_get_font_style( 'authorNameHover', $attrs );
		$styles .= "}";

		// Designation.
		if ( true === $attrs['showDesignation'] ) {
			$styles .= "{$mainSelector} .wpmozo_testimonial_author_designation{";
			$styles .= ( ! empty( $attrs['designationColor'] ) ? "color: {$attrs['designationColor']};" : '' );
			$styles .= wpmozo_ban_get_font_style( 'designation', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_testimonial_author_designation:hover{";
			$styles .= ( ! empty( $attrs['designationHoverColor'] ) ? "color: {$attrs['designationHoverColor']};" : '' );
			$styles .= wpmozo_ban_get_font_style( 'designationHover', $attrs );
			$styles .= "}";
		}

		// Company Name.
		if ( true === $attrs['showCompany'] ) {
			$styles .= "{$mainSelector} .wpmozo_testimonial_author_company, {$mainSelector} .wpmozo_testimonial_author_company a{";
			$styles .= ( ! empty( $attrs['companyNameColor'] ) ? "color: {$attrs['companyNameColor']};" : '' );
			$styles .= wpmozo_ban_get_font_style( 'companyName', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo_testimonial_author_company:hover, {$mainSelector} .wpmozo_testimonial_author_company:hover a{";
			$styles .= ( ! empty( $attrs['companyNameHoverColor'] ) ? "color: {$attrs['companyNameHoverColor']};" : '' );
			$styles .= wpmozo_ban_get_font_style( 'companyNameHover', $attrs );
			$styles .= "}";
		}

		// Star Rating.
		if ( true === $attrs['showRating'] ) {
			if ( ! empty( $attrs['starFontSize'] ) ) {
				$styles .= "{$mainSelector} .wpmozo_testimonial_star{font-size: {$attrs['starFontSize']}px;}";
			}
			if ( ! empty( $attrs['starFilledColor'] ) ) {
				$styles .= "{$mainSelector} .wpmozo_testimonial_filled_star, {$mainSelector} .wpmozo_testimonial_half_filled_star{";
				$styles .= "color: {$attrs['starFilledColor']};";
				$styles .= "}";
			}
			if ( ! empty( $attrs['starEmptyColor'] ) ) {
				$styles .= "{$mainSelector} .wpmozo_testimonial_empty_star{color: {$attrs['starEmptyColor']};}";
			}
		}

		// Opening quote.
		if ( true === $attrs['showOpenQuoteIcon'] ) {
			$styles .= "{$mainSelector} .wpmozo_testimonial_opening_quote_icon svg{";
			$styles .= ( ! empty( $attrs['openQuoteIconSize'] ) ? "width: {$attrs['openQuoteIconSize']}px;" : '' );
			$styles .= ( ! empty( $attrs['openQuoteIconColor'] ) ? "fill: {$attrs['openQuoteIconColor']};" : '' );
			$styles .= "}";
		}
		// Closing quote.
		if ( true === $attrs['showCloseQuoteIcon'] ) {
			$styles .= "{$mainSelector} .wpmozo_testimonial_closing_quote_icon svg{";
			$styles .= ( ! empty( $attrs['closeQuoteIconSize'] ) ? "width: {$attrs['closeQuoteIconSize']}px;" : '' );
			$styles .= ( ! empty( $attrs['closeQuoteIconColor'] ) ? "fill: {$attrs['closeQuoteIconColor']};" : '' );
			$styles .= "}";
		}

		// Meta.
		if ( 'layout1' === $attrs['layout'] && ! empty( $attrs['metaSeparatorColor'] ) ) {
			$styles .= "{$mainSelector} .wpmozo_testimonial_meta{border-color: {$attrs['metaSeparatorColor']} !important;}";
		}

		// Simple testimonial.
		$styles .= "{$mainSelector} .wpmozo_testimonial_slide{";
		$styles .= ( ! empty( $attrs['testimonialBGGradient'] ) ? "background: {$attrs['testimonialBGGradient']};" : '' );
		$styles .= ( ! empty( $attrs['testimonialBackground'] ) ? "background-color: {$attrs['testimonialBackground']};" : '' );
		$styles .= wpmozo_ban_get_border_style( 'testimonial', $attrs, true );
		$styles .= wpmozo_ban_get_padding_style( 'testimonial', $attrs );
		$styles .= "}";

		// Slider arrows.
		if ( true === $attrs['showArrows'] ) {
			$styles .= "{$mainSelector} .swiper-button-next, {$mainSelector} .swiper-button-prev{";
			$styles .= ( ! empty( $attrs['arrowIconSize'] ) ? "font-size: {$attrs['arrowIconSize']}px;" : '' );
			$styles .= ( ! empty( $attrs['arrowBackground'] ) ? "background-color: {$attrs['arrowBackground']};" : '' );
			$styles .= ( ! empty( $attrs['arrowColor'] ) ? "color: {$attrs['arrowColor']};" : '' );
			$styles .= ( ! empty( $attrs['arrowborderColor'] ) ? "border-color: {$attrs['arrowborderColor']} !important;" : '' );
			$styles .= wpmozo_ban_get_border_style( 'arrow', $attrs );
			$styles .= wpmozo_ban_get_padding_style( 'arrow', $attrs );
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
		if ( true === $attrs['showControlDot'] ) {
			if ( ! empty( $attrs['controlDotColorInactive'] ) ) {
				if(  'transparent_dot' != $attrs['controlDotStyle'] ){
					$styles .= "{$mainSelector} .swiper-pagination-bullet{";
					$styles .= "background: {$attrs['controlDotColorInactive']};";
					$styles .= "}";
				} else {
					$styles .= "{$mainSelector} .transparent_dot .swiper-pagination-bullet{";
					$styles .= "border-color: {$attrs['controlDotColorInactive']} !important;";
					$styles .= "}";
				}
			}
			if ( ! empty( $attrs['controlDotColorActive'] ) && 'transparent_dot' != $attrs['controlDotStyle'] ) {
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
		if ( true === $attrs['enableCoverflowShadow'] && ! empty( $attrs['coverflowShadowColor'] ) ) {
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
		$styles .= wpmozo_ban_get_padding_style( 'testimonial', $attrs );
		$styles .= "}";

		// Linear transition.
		if ( true === $attrs['enableLinearTrans'] ) {
			$styles .= "{$mainSelector} .swiper-wrapper{ transition-timing-function : linear !important; }";
		}

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}
