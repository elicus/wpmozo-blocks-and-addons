<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'horizontal_scrolling_post_render_callback' ) ) {
	function horizontal_scrolling_post_render_callback( $attributes ) {

		$helpers       = new Mozo_Bna_Helpers();
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$layout             = $attributes['layout'] ?? 'layout1';
		$posts_to_show      = $attributes['postsToShow'] ?? 5;
		$ignore_sticky_post = $attributes['ignoreStickyPosts'] ?? false;
		$post_order         = $attributes['postOrder'] ?? 'DESC';
		$post_order_by      = $attributes['postOrderBy'] ?? 'date';
		$postType           = $attributes['postType'] ?? 'post';

		$query_args = array(
			'post_type'      => $postType,
			'posts_per_page' => $posts_to_show,
			'post_status'    => 'publish',
			'orderby'        => 'date',
			'order'          => 'DESC',
		);
		if ( is_user_logged_in() ) {
			$query_args['post_status'] = array( 'publish', 'private' );
		}

		//check sticky post
		if ( is_bool( $ignore_sticky_post ) ) {
			$query_args['sticky'] = false;
		}

		if ( '' !== $post_order_by ) {
			$query_args['orderby'] = sanitize_text_field( $post_order_by );
		}

		if ( '' !== $post_order ) {
			$query_args['order'] = sanitize_text_field( $post_order );
		}

		global $wp_the_query;
		$query_backup = $wp_the_query;

		$query = new WP_Query( $query_args );


		$swiper_slide = '';
		if('scroll'!== $attributes['tickerEffect']){
			$swiper_slide = 'swiper-slide';
		}

		// If posts exists.
		$render_output = '';
		if ( $query->have_posts() ) {

			$testimonials = '';
			while ( $query->have_posts() ) {
				$query->the_post();

				$post_id = esc_attr( get_the_ID() );

				$testimonials .= '<div class="wpmozo_post_ticker_item '.$swiper_slide.'">';
				if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-post-ticker/layout.php' ) ) {
					include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-post-ticker/layout.php';
				}
				$testimonials .= '</div>';
			}

			// Get wrapper attributes.
			$wrapper_attributes = get_block_wrapper_attributes( array(
				'class' => ( $attributes['className'] ) ?? ''
			) );

			// Get data attrs.
			$data_attrs    = array(
				'clientId' => $attributes['ID'] ?? '',
			);
			$data_attr_str = '';
			foreach ( $data_attrs as $key => $val ) {
				$data_attr_str .= ' data-' . esc_attr( $key ) . '="' . esc_attr( $val ) . '"';
			}

			$dataAttr = array();
			if ( isset( $attributes['tickerEffect'] ) && 'scroll' === $attributes['tickerEffect'] ) {
				$dataAttr['ticker_effect']        = $attributes['tickerEffect'];
				$dataAttr['scroll_effect_delay']  = $attributes['scrollEffectSpeed'] ?? '';
			} elseif ( isset( $attributes['tickerEffect'] ) && 'fade' === $attributes['tickerEffect'] ) {
				$dataAttr['ticker_effect']         = $attributes['tickerEffect'];
				$dataAttr['fade_effect_delay']     = $attributes['effectDelay'] ?? '';
				$dataAttr['fade_effect_transition']= $attributes['transitionDuration'] ?? '';
				$dataAttr['show_arrow']            = $attributes['showArrows'] ?? '';
			} else {
				$dataAttr['ticker_effect']         = $attributes['tickerEffect'] ?? '';
				$dataAttr['fade_effect_delay']     = $attributes['effectDelay'] ?? '';
				$dataAttr['fade_effect_transition']= $attributes['transitionDuration'] ?? '';
				$dataAttr['show_arrow']            = $attributes['showArrows'] ?? '';
				$dataAttr['slide_align']           = $attributes['slideAlignment'] ?? '';
			}
			$slider_start = '';
			$slider_end = '';
			if('scroll'!==$attributes['tickerEffect']){
				if('fade' === $attributes['tickerEffect']){
					$slider_start = '<div class="swiper-container swiper-container-fade swiper-' . esc_attr( $attributes['tickerEffect'] ) . '"><div class="swiper-wrapper">';
				} else {
					$slider_start = '<div class="swiper-container swiper-container-' . esc_attr( $attributes['tickerEffect'] ) . '"><div class="swiper-wrapper">';
				}
				if ( true === $attributes['showArrows'] ) {
					$slider_end = '</div></div><div class="wpmozo_swiper_navigation wpmozo_arrows_position">
						<span class="wpmozo_swiper_icon_prev">
							<i class="' . esc_attr( $attributes['previousArrow'] ) . '"></i>
						</span>
						<span class="wpmozo_swiper_icon_next">
							<i class="' . esc_attr( $attributes['nextArrow'] ) . '"></i>
						</span>
					</div>';
				} else {
					$slider_end = '</div></div>';
				}
			}

			// Render final output.
			$render_output = sprintf(
				'<div id="block-%1$s" %2$s>
					<div class="wpmozo_post_ticker">
						<div class="wpmozo_post_ticker_wrap wpmozo_ticker_effect_%3$s" data-attr=\'%4$s\'>
							<div class="wpmozo_post_ticker_label">%5$s</div>
							<div class="wpmozo_post_ticker_items">
								<div class="wpmozo_post_ticker_bar" style="animation-duration:11.89s;">
									%6$s
									%7$s
									%8$s
								</div>
							</div>
						</div>
					</div>
				</div>%9$s',
				esc_attr( $attributes['ID'] ),
				$helpers::esc_previously( $wrapper_attributes ),
				isset( $attributes['tickerEffect'] ) ? esc_attr( $attributes['tickerEffect'] ) : 'slide',
				esc_attr( wp_json_encode( $dataAttr ) ),
				!empty( $attributes['tickerLabel'] ) ? esc_html( $attributes['tickerLabel'] ) : 'Breaking News',
				$slider_start,
				$testimonials,
				$slider_end,
				$block_helpers::get_block_dynamic_style( 'post-ticker', $attributes )
			);
		}

		return $render_output;
	}
}

echo horizontal_scrolling_post_render_callback( $attributes );
