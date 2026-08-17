<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'masonry_gallery_get_typography_styles' ) ) {
	function masonry_gallery_get_typography_styles( $attrs, $key ) {
		$css = '';
		if ( ! empty( $attrs[ $key . 'FontSize' ] ) ) {
			$fontSize = is_numeric( $attrs[ $key . 'FontSize' ] ) ? $attrs[ $key . 'FontSize' ] . 'px' : $attrs[ $key . 'FontSize' ];
			$css .= "font-size: {$fontSize};";
		}
		if ( ! empty( $attrs[ $key . 'LineHeight' ] ) ) {
			$css .= "line-height: {$attrs[ $key . 'LineHeight' ]};";
		}
		if ( ! empty( $attrs[ $key . 'LetterSpacing' ] ) ) {
			$css .= "letter-spacing: {$attrs[ $key . 'LetterSpacing' ]};";
		}
		if ( ! empty( $attrs[ $key . 'Decoration' ] ) ) {
			$css .= "text-decoration: {$attrs[ $key . 'Decoration' ]};";
		}
		if ( ! empty( $attrs[ $key . 'LetterCase' ] ) ) {
			$css .= "text-transform: {$attrs[ $key . 'LetterCase' ]};";
		}
		if ( ! empty( $attrs[ $key . 'FontAppearance' ] ) && is_array( $attrs[ $key . 'FontAppearance' ] ) ) {
			if ( ! empty( $attrs[ $key . 'FontAppearance' ]['fontWeight'] ) ) {
				$css .= "font-weight: {$attrs[ $key . 'FontAppearance' ]['fontWeight']};";
			}
			if ( ! empty( $attrs[ $key . 'FontAppearance' ]['fontStyle'] ) ) {
				$css .= "font-style: {$attrs[ $key . 'FontAppearance' ]['fontStyle']};";
			}
		}
		return $css;
	}
}

if ( ! function_exists( 'masonry_gallery_generate_dynamic_style' ) ) {
	function masonry_gallery_generate_dynamic_style( $attrs ) {

		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );

		$numberOfColumns = ! empty( $attrs['numberOfColumns'] ) ? intval( $attrs['numberOfColumns'] ) : 1;
		$gutterSizeVal   = isset( $attrs['customGutterSize'] ) ? intval( $attrs['customGutterSize'] ) : 0;
		$finalWidth      = 100 / $numberOfColumns;
		if ( $gutterSizeVal > 0 ) {
			$gutterSize = ( $gutterSizeVal * ( $numberOfColumns - 1 ) ) / $numberOfColumns;
			$finalWidth = "calc({$finalWidth}% - {$gutterSize}px)";
		} else {
			$finalWidth = "{$finalWidth}%";
		}

		$styles = '';

		if ( ! empty( $attrs['numberOfColumns'] ) ) {
			$styles .= "
				{$mainSelector} .wpmozo_masonry_gallery_item_gutter {
					width: {$gutterSizeVal}px !important;
				}
				{$mainSelector} .wpmozo_masonry_gallery_item {
					width: {$finalWidth};
					" . ( $gutterSizeVal > 0 ? "margin-bottom: {$gutterSizeVal}px;" : "" ) . "
				}
			";
		}
		if ( isset( $attrs['showCaption'] ) && false === $attrs['showCaption'] ) {
			$styles .= "{$mainSelector} .wpmozo_masonry_gallery_wrapper figcaption.wp-element-caption{display:none}";
		}

		// Image Border & Border Radius (Normal)
		$imageBorderCss = '';
		if ( ! empty( $attrs['imageborder'] ) ) {
			if ( ! empty( $attrs['imageborder']['width'] ) ) {
				$borderStyle = ! empty( $attrs['imageborder']['style'] ) ? $attrs['imageborder']['style'] : 'solid';
				$borderColor = ! empty( $attrs['imageborder']['color'] ) ? $attrs['imageborder']['color'] : '';
				$imageBorderCss .= "border: {$attrs['imageborder']['width']} {$borderStyle} {$borderColor};";
			}
		}
		if ( ! empty( $attrs['imageborderRadius'] ) ) {
			if ( is_array( $attrs['imageborderRadius'] ) ) {
				if ( isset( $attrs['imageborderRadius']['topLeft'] ) ) $imageBorderCss .= "border-top-left-radius: {$attrs['imageborderRadius']['topLeft']};";
				if ( isset( $attrs['imageborderRadius']['topRight'] ) ) $imageBorderCss .= "border-top-right-radius: {$attrs['imageborderRadius']['topRight']};";
				if ( isset( $attrs['imageborderRadius']['bottomLeft'] ) ) $imageBorderCss .= "border-bottom-left-radius: {$attrs['imageborderRadius']['bottomLeft']};";
				if ( isset( $attrs['imageborderRadius']['bottomRight'] ) ) $imageBorderCss .= "border-bottom-right-radius: {$attrs['imageborderRadius']['bottomRight']};";
			} else {
				$imageBorderCss .= "border-radius: {$attrs['imageborderRadius']};";
			}
		}
		if ( empty( $attrs['imageborder'] ) && ! empty( $attrs['imagehoverborder'] ) ) {
			$imageBorderCss .= "border-color: transparent !important;";
		}
		if ( ! empty( $imageBorderCss ) ) {
			$styles .= "{$mainSelector} .wpmozo_masonry_gallery_image_wrapper { {$imageBorderCss} }";
		}

		// Image Border & Border Radius (Hover)
		$imageHoverBorderCss = '';
		if ( ! empty( $attrs['imagehoverborder'] ) ) {
			if ( ! empty( $attrs['imagehoverborder']['width'] ) ) {
				$borderStyle = ! empty( $attrs['imagehoverborder']['style'] ) ? $attrs['imagehoverborder']['style'] : 'solid';
				$borderColor = ! empty( $attrs['imagehoverborder']['color'] ) ? $attrs['imagehoverborder']['color'] : '';
				$imageHoverBorderCss .= "border: {$attrs['imagehoverborder']['width']} {$borderStyle} {$borderColor};";
			}
		}
		if ( ! empty( $attrs['imagehoverborderRadius'] ) ) {
			if ( is_array( $attrs['imagehoverborderRadius'] ) ) {
				if ( isset( $attrs['imagehoverborderRadius']['topLeft'] ) ) $imageHoverBorderCss .= "border-top-left-radius: {$attrs['imagehoverborderRadius']['topLeft']};";
				if ( isset( $attrs['imagehoverborderRadius']['topRight'] ) ) $imageHoverBorderCss .= "border-top-right-radius: {$attrs['imagehoverborderRadius']['topRight']};";
				if ( isset( $attrs['imagehoverborderRadius']['bottomLeft'] ) ) $imageHoverBorderCss .= "border-bottom-left-radius: {$attrs['imagehoverborderRadius']['bottomLeft']};";
				if ( isset( $attrs['imagehoverborderRadius']['bottomRight'] ) ) $imageHoverBorderCss .= "border-bottom-right-radius: {$attrs['imagehoverborderRadius']['bottomRight']};";
			} else {
				$imageHoverBorderCss .= "border-radius: {$attrs['imagehoverborderRadius']};";
			}
		}
		if ( ! empty( $imageHoverBorderCss ) ) {
			$styles .= "{$mainSelector} .wpmozo_masonry_gallery_image_wrapper:hover { {$imageHoverBorderCss} }";
		}

		// Overlay (Native Static Behavior)
		if ( ! empty( $attrs['enableOverlay'] ) ) {
			$overlayBg = ! empty( $attrs['overlayBackgroundColor'] ) ? $attrs['overlayBackgroundColor'] : '';
			$iconSize  = ! empty( $attrs['overlayIconSize'] ) ? intval( $attrs['overlayIconSize'] ) : 24;
			$iconColor = ! empty( $attrs['overlayIconColor'] ) ? $attrs['overlayIconColor'] : '';
			
			$overlayStyle = '';
			if ( ! empty( $overlayBg ) ) $overlayStyle .= "background: {$overlayBg} !important;";
			if ( ! empty( $iconSize ) ) $overlayStyle .= "font-size: {$iconSize}px;";
			if ( ! empty( $iconColor ) ) $overlayStyle .= "color: {$iconColor} !important;";

			if ( ! empty( $overlayStyle ) ) {
				$styles .= "{$mainSelector} .wpmozo_overlay.wpmozo_pb_inline_icon { {$overlayStyle} }";
			}
		} else {
			$styles .= "{$mainSelector} .wpmozo_overlay.wpmozo_pb_inline_icon { background: transparent !important; color: transparent !important; }";
		}

		// Caption Colors & Typography (Normal)
		$captionNormalCss = '';
		if ( ! empty( $attrs['captionColor'] ) ) {
			$captionNormalCss .= "color: {$attrs['captionColor']};";
		}
		$captionNormalCss .= masonry_gallery_get_typography_styles( $attrs, 'caption' );
		if ( ! empty( $captionNormalCss ) ) {
			$styles .= "{$mainSelector} figcaption.wp-element-caption, .block-{$attrs['ID']}-lightbox .mfp-title figcaption.wp-element-caption { {$captionNormalCss} }";
		}

		// Caption Colors & Typography (Hover)
		$captionHoverCss = '';
		if ( ! empty( $attrs['captionHoverColor'] ) ) {
			$captionHoverCss .= "color: {$attrs['captionHoverColor']};";
		}
		$captionHoverCss .= masonry_gallery_get_typography_styles( $attrs, 'captionHover' );
		if ( ! empty( $captionHoverCss ) ) {
			$styles .= "{$mainSelector} figcaption.wp-element-caption:hover, .block-{$attrs['ID']}-lightbox .mfp-title figcaption.wp-element-caption:hover { {$captionHoverCss} }";
		}

		// Lightbox Normal & Hover Colors
		if ( ! empty( $attrs['showLightbox'] ) ) {
			if ( ! empty( $attrs['lightboxBackgroundColor'] ) ) {
				$styles .= ".block-{$attrs['ID']}-lightbox.mfp-bg, .block-{$attrs['ID']}-lightbox { background: {$attrs['lightboxBackgroundColor']} !important; }";
			}
			if ( ! empty( $attrs['lightboxHoverBackgroundColor'] ) ) {
				$styles .= ".block-{$attrs['ID']}-lightbox.mfp-bg:hover, body:has(.block-{$attrs['ID']}-lightbox.mfp-wrap:hover) .block-{$attrs['ID']}-lightbox.mfp-bg, .block-{$attrs['ID']}-lightbox:hover { background: {$attrs['lightboxHoverBackgroundColor']} !important; }";
			}
			if ( ! empty( $attrs['lightboxExitIconColor'] ) ) {
				$styles .= ".block-{$attrs['ID']}-lightbox .mfp-close { color: {$attrs['lightboxExitIconColor']} !important; }";
			}
			if ( ! empty( $attrs['lightboxHoverExitIconColor'] ) ) {
				$styles .= ".block-{$attrs['ID']}-lightbox .mfp-close:hover { color: {$attrs['lightboxHoverExitIconColor']} !important; }";
			}
			if ( ! empty( $attrs['lightboxArrowColor'] ) ) {
				$styles .= ".block-{$attrs['ID']}-lightbox .mfp-arrow-left:after { border-right-color: {$attrs['lightboxArrowColor']} !important; }";
				$styles .= ".block-{$attrs['ID']}-lightbox .mfp-arrow-right:after { border-left-color: {$attrs['lightboxArrowColor']} !important; }";
			}
			if ( ! empty( $attrs['lightboxHoverArrowColor'] ) ) {
				$styles .= ".block-{$attrs['ID']}-lightbox .mfp-arrow-left:hover:after, .block-{$attrs['ID']}-lightbox .mfp-arrow-left:hover:before { border-right-color: {$attrs['lightboxHoverArrowColor']} !important; }";
				$styles .= ".block-{$attrs['ID']}-lightbox .mfp-arrow-right:hover:after, .block-{$attrs['ID']}-lightbox .mfp-arrow-right:hover:before { border-left-color: {$attrs['lightboxHoverArrowColor']} !important; }";
			}
		}

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
			: '' );
	}
}