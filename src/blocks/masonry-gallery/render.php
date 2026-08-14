<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'masonry_gallery_render_callback' ) ) {
	function masonry_gallery_render_callback( $attributes ) {

		$helpers = new Mozo_Bna_Helpers();
		$block_helpers = new Mozo_Bna_Block_Helpers();

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
			$block_id           = esc_attr( $attributes['ID'] ?? '' );
			$wrap_custom_class  = esc_attr( $attributes['wrapCustomClass'] ?? '' );
			$wrapper_attributes = get_block_wrapper_attributes( array(
				'class' => trim( ( $attributes['className'] ?? '' ) . ' ' . $extra_class . ' wpmozo-wrap-' . $block_id . ' ' . $wrap_custom_class )
			) );

			$gallery_images = '';
			foreach ( $attributes['images_data'] as $image ) {
				if (
					isset( $image['attributes'] ) && ! empty( $image['attributes'] ) &&
					isset( $image['attributes']['url'] ) && ! empty( $image['attributes']['url'] )
				) {
					$url     = esc_url( $image['attributes']['url'] );
					$alt     = isset( $image['attributes']['alt'] ) ? esc_attr( $image['attributes']['alt'] ) : '';
					$caption = isset( $image['attributes']['caption'] ) ? wp_kses_post( $image['attributes']['caption'] ) : '';

					$gallery_images .= '
					<a class="wpmozo_masonry_gallery_item" href="' . $url . '">
						<div class="wpmozo_masonry_gallery_image_wrapper">
							<img src="' . $url . '" alt="' . $alt . '">
							' . ( ! empty( $attributes['enableOverlay'] ) && true === $attributes['enableOverlay']
								? '<span class="wpmozo_overlay wpmozo_pb_inline_icon" data-icon="0">
										<i class="' . esc_attr( $attributes['overlayIcon'] ?? '' ) . '"></i>
									</span>'
								: ''
							) . '
						</div>
						' . ( ! empty( $caption )
							? '<div class="wpmozo_masonry_gallery_title_caption_wrapper">
									<figcaption class="wp-element-caption">' . $caption . '</figcaption>
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
				$helpers::esc_previously( $wrapper_attributes ),
				esc_attr( $attributes['ID'] ),
				$gallery_images,
				$block_helpers::get_block_dynamic_style( 'masonry-gallery', $attributes )
			);
		}

		return $render_output;
	}
}
echo masonry_gallery_render_callback( $attributes );
