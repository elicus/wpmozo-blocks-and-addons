<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'horizontal_scrolling_post_render_callback' ) ) {
	function horizontal_scrolling_post_render_callback( $attributes ) {
		$layout              = $attributes['layout'] ?? 'layout1';
		$posts_to_show       = $attributes['postsToShow'] ?? 5;
		$ignore_sticky_post  = $attributes['ignoreStickyPosts'] ?? false;
		$post_order          = $attributes['postOrder'] ?? 'DESC';
		$post_order_by       = $attributes['postOrderBy'] ?? 'date';
		$includes_categories = $attributes['includesCategories'] ?? [];

		$query_args = array(
			'post_type'      => 'post',
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

		// If posts exists.
		$render_output = '';
		if ( $query->have_posts() ) {

			$testimonials = '';
			while ( $query->have_posts() ) {
				$query->the_post();

				$post_id = esc_attr( get_the_ID() );

				$testimonials .= '<div class="wpmozo_horizontal_scrolling_post_item item_'.$layout.'">';
				if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-horizontal-scrolling-posts/' . sanitize_file_name( $layout ) . '.php' ) ) {
					include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-horizontal-scrolling-posts/' . sanitize_file_name( $layout ) . '.php';
				}
				$testimonials .= '</div>';
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
				wpmozo_esc_previously( $wrapper_attributes ),
				esc_attr( $layout ),
				wpmozo_esc_previously( $testimonials ),
				esc_attr( $attributes['ID'] ),
				wpmozo_bna_get_module_dynamic_style( 'horizontal-scrolling-posts', $attributes )
			);
		}

		return $render_output;
	}
}

echo horizontal_scrolling_post_render_callback( $attributes );
