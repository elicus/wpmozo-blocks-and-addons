<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'horizontal_scrolling_post_render_callback' ) ) {
	function horizontal_scrolling_post_render_callback( $attributes ) {

		$helpers = new Mozo_Bna_Helpers();
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$layout              = $attributes['layout'] ?? 'layout1';
		$posts_to_show       = $attributes['postsToShow'] ?? 5;
		$ignore_sticky_posts = $attributes['ignoreStickyPosts'] ?? false;
		$post_order          = $attributes['postOrder'] ?? 'DESC';
		$post_order_by       = $attributes['postOrderBy'] ?? 'date';
		$includes_categories = $attributes['includesCategories'] ?? [];
		$sticky_posts        = get_option( 'sticky_posts' );
		$sticky_posts        = is_array( $sticky_posts ) ? array_map( 'absint', $sticky_posts ) : array();

		$all_post_ids = array();

		$is_ignore_sticky = $ignore_sticky_posts;

		// Editor mode fix for sticky behavior.
		if ( ! $is_ignore_sticky && ! empty( $sticky_posts ) ) {
			// Remove excluded sticky posts.
			$valid_sticky_ids = $sticky_posts;

			// Query sticky posts first.
			$sticky_query = get_posts(
				array(
					'post_type'      => 'post',
					'post_status'    => 'publish',
					'post__in'       => $valid_sticky_ids,
					'orderby'        => $post_order_by,
					'order'          => $post_order,
					'fields'         => 'ids',
					'posts_per_page' => $posts_to_show,
				)
			);

			// Then query remaining normal posts.
			$normal_query = get_posts(
				array(
					'post_type'           => 'post',
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
				'post_type'      => 'post',
				'post__in'       => $all_post_ids,
				'post_status'    => 'publish',
				'orderby'        => 'post__in',
				'posts_per_page' => count( $all_post_ids ),
			);
		} else {
			// Frontend or ignore_sticky = yes.
			$query_args = array(
				'post_type'           => 'post',
				'post_status'         => 'publish',
				'posts_per_page'      => $posts_to_show,
				'orderby'             => $post_order_by,
				'order'               => $post_order,
				'ignore_sticky_posts' => $is_ignore_sticky ? 1 : 0,
			);
		}

		$query = new WP_Query( $query_args );
		$render_output = '';
		if ( $query->have_posts() ) {

			$horizontal_scrolling_posts = '';
			while ( $query->have_posts() ) {
				$query->the_post();

				$post_id = esc_attr( get_the_ID() );

				$horizontal_scrolling_posts .= '<div class="wpmozo_horizontal_scrolling_post_item item_'.$layout.'">';
				if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-horizontal-scrolling-posts/' . sanitize_file_name( $layout ) . '.php' ) ) {
					include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-horizontal-scrolling-posts/' . sanitize_file_name( $layout ) . '.php';
				}
				$horizontal_scrolling_posts .= '</div>';
			}

			// Get wrapper attributes.
			$wrapper_attributes = get_block_wrapper_attributes( array(
				'class' => ( $attributes['className'] ) ?? ''
			) );

			// Get data attrs.
			$data_attrs    = array(
				'clientId'                    => $attributes['ID'] ?? '',
			);
			$data_attr_str = '';
			foreach ( $data_attrs as $key => $val ) {
				$data_attr_str .= ' data-' . esc_attr( $key ) . '="' . esc_attr( $val ) . '"';
			}

			// Render final output.
			$render_output = sprintf(
				'<div id="block-%4$s" %1$s>
					<div id="womozo_single_post_%4$s" class="wpmozo-sticky-posts-scroller">
						<div class="wpmozo-sticky-posts-wrapper %2$s">
							<div class="wpmozo-sticky-posts-inner">
								%3$s
							</div>
						</div>
					</div>
				</div>%5$s',
				$helpers::esc_previously( $wrapper_attributes ),
				esc_attr( $layout ),
				$helpers::esc_previously( $horizontal_scrolling_posts ),
				esc_attr( $attributes['ID'] ),
				$block_helpers::get_block_dynamic_style( 'horizontal-scrolling-posts', $attributes )
			);
		}
		wp_reset_postdata();

		return $render_output;
	}
}

echo horizontal_scrolling_post_render_callback( $attributes );
