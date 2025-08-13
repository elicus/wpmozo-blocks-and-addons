<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'masonry_gallery_generate_dynamic_style' ) ) {
	function masonry_gallery_generate_dynamic_style( $attrs ) {

		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );

		$numberOfColumns = ! empty( $attrs['numberOfColumns'] ) ? intval( $attrs['numberOfColumns'] ) : 1;
		$finalWidth      = 100 / $numberOfColumns;
		if ( ! empty( $attrs['customGutterSize'] ) ) {
			$gutterSize = ( intval( $attrs['customGutterSize'] ) * ( $numberOfColumns - 1 ) ) / $numberOfColumns;
			$finalWidth = "calc({$finalWidth}% - {$gutterSize}px)";
		} else {
			$finalWidth = "{$finalWidth}%";
		}

		$styles = '';


		if ( ! empty( $attrs['numberOfColumns'] ) ) {
			$styles .= "
				{$mainSelector} .wpmozo_masonry_gallery_wrapper{
					//column-count: {$attrs['numberOfColumns']}
				}
				{$mainSelector} .wpmozo_masonry_gallery_item_gutter {
					width: {$attrs['customGutterSize']}px !important;
				}
				{$mainSelector} .wpmozo_masonry_gallery_item {
					width: {$finalWidth};
					margin-bottom: {$attrs['customGutterSize']}px;
				}
			";
		}
		if ( false === $attrs['showCaption'] ) {
			$styles .= "{$mainSelector} .wpmozo_masonry_gallery_wrapper figcaption.wp-element-caption{display:none}";
		}

		//overlay
		if ( ! empty( $attrs['enableOverlay'] ) ) {
			$overlayBg = ! empty( $attrs['overlayBackgroundColor'] ) ? $attrs['overlayBackgroundColor'] : 'transparent';
			$iconSize  = ! empty( $attrs['overlayIconSize'] ) ? intval( $attrs['overlayIconSize'] ) : 24;
			$iconColor = ! empty( $attrs['overlayIconColor'] ) ? $attrs['overlayIconColor'] : '#fff';
			$styles    .= "{$mainSelector} .wpmozo_overlay.wpmozo_pb_inline_icon { background: {$overlayBg} !important; font-size: {$iconSize}px; color: {$iconColor}; }";
		} else {
			$styles .= "{$mainSelector} .wpmozo_overlay.wpmozo_pb_inline_icon { background: transparent !important; }";
		}

		//lightbox
		if ( ! empty( $attrs['showLightbox'] ) && ! empty( $attrs['lightboxBackgroundColor'] ) ) {
			$styles .= ".block-{$attrs['ID']}-lightbox { background: {$attrs['lightboxBackgroundColor']} !important; }";
			$styles .= ".block-{$attrs['ID']}-lightbox .mfp-arrow-left:after { border-right-color: {$attrs['lightboxArrowColor']} !important; }";
			$styles .= ".block-{$attrs['ID']}-lightbox .mfp-arrow-right:after { border-left-color: {$attrs['lightboxArrowColor']} !important; }";
			$styles .= ".block-{$attrs['ID']}-lightbox .mfp-close{ color: {$attrs['lightboxExitIconColor']} !important; }";
		}

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}
