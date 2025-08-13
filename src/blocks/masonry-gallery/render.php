<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'masonry_gallery_render_callback' ) ) {
	function masonry_gallery_render_callback( $attributes ) {

		$render_output = '';
		if ( ! empty( $attributes['images_data'] ) ) {
			$extra_class = array();

			if ( ! empty( $attributes['showLightbox'] ) ) {
				$extra_class[] = 'wpmozo-masonry-image-lightbox';
			}
			if ( ! empty( $attributes['enableOverlay'] ) ) {
				$extra_class[] = 'wpmozo-masonry-image-overlay';
			}

			$extra_class        = implode( ' ', $extra_class );
			$wrapper_attributes = get_block_wrapper_attributes( array(
				'class' => trim( ( $attributes['className'] ?? '' ) . ' ' . $extra_class )
			) );

			$gallery_images = '';
			foreach ( $attributes['images_data'] as $image ) {
				if (
					isset( $image['attributes'] ) && ! empty( $image['attributes'] ) &&
					isset( $image['attributes']['url'] ) && ! empty( $image['attributes']['url'] )
				) {
					$url            = esc_url( $image['attributes']['url'] );
					$gallery_images .= '
					<a class="wpmozo_masonry_gallery_item" href="' . $url . '">
						<div class="wpmozo_masonry_gallery_image_wrapper">
							<img src="' . $url . '" alt="' . $image['attributes']['alt'] . '">
							<span class="wpmozo_overlay wpmozo_pb_inline_icon" data-icon="0">
								<i class="' . esc_attr( $attributes['overlayIcon'] ?? '' ) . '"></i>
							</span>
						</div>
						' . ( isset( $image['attributes']['caption'] ) && ! empty( $image['attributes']['caption'] )
							? '<div class="wpmozo_masonry_gallery_title_caption_wrapper">
									<figcaption class="wp-element-caption">' . $image['attributes']['caption'] . '</figcaption>
								</div>'
							: ''
						) . '
					</a>';
				}
			}

			$render_output = sprintf(
				'<div %1$s id="block-%2$s" >
							<div class="wpmozo_pb_module_inner">
								<div class="wpmozo_masonry_gallery_wrapper">
								<div class="wpmozo_masonry_gallery_item_gutter"></div>
								%3$s
						</div>
					</div>
				</div>%4$s',
				wpmozo_esc_previously( $wrapper_attributes ),
				esc_attr( $attributes['ID'] ),
				$gallery_images,
				wpmozo_bna_get_module_dynamic_style( 'masonry-gallery', $attributes )
			);
		}

		return $render_output;
	}
}
echo masonry_gallery_render_callback( $attributes );
