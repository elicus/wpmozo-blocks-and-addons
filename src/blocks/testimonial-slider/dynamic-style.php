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

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
		: '' );
	}
}
