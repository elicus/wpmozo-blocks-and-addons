<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'post_ticker_render_callback' ) ) {
	function post_ticker_render_callback( $attributes ) {

		$helpers       = new Mozo_Bna_Helpers();
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$layout             = $attributes['layout'] ?? 'layout1';
		$posts_to_show      = $attributes['postsToShow'] ?? 5;
		$ignore_sticky_post = $attributes['ignoreStickyPosts'] ?? false;
		$post_order         = $attributes['postOrder'] ?? 'DESC';
		$post_order_by      = $attributes['postOrderBy'] ?? 'date';
		$postType           = $attributes['postType'] ?? 'post';
		$sticky_posts        = get_option( 'sticky_posts' );
		$sticky_posts        = is_array( $sticky_posts ) ? array_map( 'absint', $sticky_posts ) : array();

		$all_post_ids = array();

		$is_ignore_sticky = $ignore_sticky_post;

		// Editor mode fix for sticky behavior.
		if ( ! $is_ignore_sticky && ! empty( $sticky_posts ) ) {
			// Remove excluded sticky posts.
			$valid_sticky_ids = $sticky_posts;

			// Query sticky posts first.
			$sticky_query = get_posts(
				array(
					'post_type'      => $postType,
					'post_status'    => 'publish',
					'post__in'       => $valid_sticky_ids,
					'orderby'        => $post_order_by,
					'order'          => $post_order,
					'fields'         => 'ids'
				)
			);

			// Then query remaining normal posts.
			$normal_query = get_posts(
				array(
					'post_type'           => $postType,
					'post_status'         => 'publish',
					'post__not_in'        => $sticky_posts,
					'orderby'             => $post_order_by,
					'order'               => $post_order,
					'fields'              => 'ids',
					'ignore_sticky_posts' => 1,
					'posts_per_page'      => $posts_to_show,
				)
			);

			$all_post_ids = array_merge( $sticky_query, $normal_query );
			$all_post_ids = array_unique( $all_post_ids );

			if ( $posts_to_show > 0 ) {
				$all_post_ids = array_slice( $all_post_ids, 0, $posts_to_show );
			}

			$query_args = array(
				'post_type'      => $postType,
				'post__in'       => $all_post_ids,
				'post_status'    => 'publish',
				'orderby'        => 'post__in',
				'posts_per_page' => count( $all_post_ids ),
			);
		} else {
			// Frontend or ignore_sticky = yes.
			$query_args = array(
				'post_type'           => $postType,
				'post_status'         => 'publish',
				'posts_per_page'      => $posts_to_show,
				'orderby'             => $post_order_by,
				'order'               => $post_order,
				'ignore_sticky_posts' => $is_ignore_sticky ? 1 : 0,
			);
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
			wp_reset_postdata();
			// Get wrapper attributes.
			$wrapper_attributes = get_block_wrapper_attributes(array(
				'class'=>'wpmozo-wrap-'.$attributes['ID'] . ' ' . 'wpmozo-advanced-tooltip' . ' ' .(isset($attributes['wrapCustomClass']) ? $attributes['wrapCustomClass'] :''). ' ' .(isset($attributes['className']) ? $attributes['className'] :'')
			));

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
					$slider_start = '<div class="swiper-container swiper-container-fade swiper-' . esc_attr( $attributes['tickerEffect'] ) . '" data-order-id='.esc_attr( $attributes['ID'] ).'><div class="swiper-wrapper">';
				} else {
					$slider_start = '<div class="swiper-container swiper-container-' . esc_attr( $attributes['tickerEffect'] ) . '"><div class="swiper-wrapper">';
				}
				if ( true === $attributes['showArrows'] ) {
					$slider_end = '</div></div><div class="wpmozo_swiper_navigation wpmozo_arrows_position">
						<span class="swiper-button-prev wpmozo_swiper_icon_prev">
							<i class="' . esc_attr( $attributes['previousArrow'] ) . '"></i>
						</span>
						<span class="swiper-button-next wpmozo_swiper_icon_next">
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
							%5$s
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
				'' !== $attributes['tickerLabel'] ? '<div class="wpmozo_post_ticker_label">'.esc_html( $attributes['tickerLabel'] ).'</div>' : '',
				$slider_start,
				$testimonials,
				$slider_end,
				$block_helpers::get_block_dynamic_style( 'post-ticker', $attributes )
			);
		}else{
			$render_output = sprintf(
				'<div id="block-%1$s" %2$s>
					<div class="wpmozo_post_ticker">
						<div class="wpmozo_post_ticker_wrap wpmozo_ticker_effect_%3$s" data-attr=\'%4$s\'>
							<div className="wpmozo_post_ticker_items">
								<span className="no_result">
									%5$s
								</span>
							</div>	
						</div>
					</div>
				</div>',
				esc_attr( $attributes['ID'] ),
				$helpers::esc_previously( $wrapper_attributes ),
				isset( $attributes['tickerEffect'] ) ? esc_attr( $attributes['tickerEffect'] ) : 'slide',
				esc_attr( wp_json_encode( $dataAttr ) ),
				!empty( $attributes['noResultText'] ) ? esc_html( $attributes['noResultText'] ) : 'No Results Found',
			);
		}

		return $render_output;
	}
}

echo post_ticker_render_callback( $attributes );
