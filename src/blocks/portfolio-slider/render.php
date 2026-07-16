<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'portfolio_slider_render_callback' ) ) {
	function portfolio_slider_render_callback( $attributes ) {

		$helpers = new Mozo_Bna_Helpers();
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$layout              = $attributes['layout'] ?? 'layout1';
		$posts_to_show       = $attributes['postsToShow'] ?? 5;
		$offset_number       = $attributes['offsetNumber'] ?? 0;
		$post_order          = $attributes['postOrder'] ?? 'DESC';
		$post_order_by       = $attributes['postOrderBy'] ?? 'date';
		$includes_categories = $attributes['includesCategories'] ?? [];

		$query_args = array(
			'post_type'           => 'wpmozoae-portfolio',
			'posts_per_page'      => $posts_to_show,
			'post_status'         => 'publish',
			'orderby'             => 'date',
			'order'               => 'DESC',
			'ignore_sticky_posts' => true,
			'no_found_rows'        => true,
		);
		if ( $offset_number > 0 ) {
			$query_args['offset'] = $offset_number;
		}
		if ( is_user_logged_in() ) {
			$query_args['post_status'] = array( 'publish', 'private' );
		}
		if ( ! empty( $includes_categories ) ) {
			$query_args['tax_query'] = array( array(
				'taxonomy' => 'wpmozo-ae-portfolio-category',
				'field'    => 'term_id',
				'terms'    => array_map( 'intval', $includes_categories ),
				'operator' => 'IN',
			) );
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

		$render_output = '';
		if ( $query->have_posts() ) {

			// Display options.
			$show_title          = $attributes['showTitle'] ?? true;
			$show_content        = $attributes['showContent'] ?? false;
			$show_featured_image = $attributes['showFeaturedImage'] ?? true;
			$show_excerpt        = $attributes['showExcerpt'] ?? true;
			$excerpt_length      = $attributes['excerptLength'] ?? 120;
			$show_read_more      = $attributes['showReadMore'] ?? false;
			$read_more_text      = $attributes['readMoreText'] ?? 'Read more';
			$show_project_url    = $attributes['showProjectUrl'] ?? false;
			$project_url_text    = $attributes['projectUrlText'] ?? 'View live';

			$portfolios = '';
			while ( $query->have_posts() ) {
				$query->the_post();

				$post_id   = esc_attr( get_the_ID() );
				$permalink = get_the_permalink();

				$portfolios .= '<div class="wpmozo_portfolio_slide swiper-slide">';
				if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-portfolio-slider/' . sanitize_file_name( $layout ) . '.php' ) ) {
					include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-portfolio-slider/' . sanitize_file_name( $layout ) . '.php';
				}
				$portfolios .= '</div>';
			}
			wp_reset_postdata();

			// Slider arrows.
			$slider_arrows = '';
			if ( true === $attributes['showArrows'] ) {
				$button_next_class = 'swiper-button-next';
				if ( ! empty( $attributes['nextArrowIcon'] ) ) {
					$button_next_class .= ' custom-swiper-button-next ' . esc_attr( $attributes['nextArrowIcon'] );
				}
				$button_prev_class = 'swiper-button-prev';
				if ( ! empty( $attributes['prevArrowIcon'] ) ) {
					$button_prev_class .= ' custom-swiper-button-prev ' . esc_attr( $attributes['prevArrowIcon'] );
				}

				$arrow_bg_disabled_class = ( isset( $attributes['arrowEnableBg'] ) && ! $attributes['arrowEnableBg'] ) ? ' wpmozo_arrow_bg_disabled' : '';

				$slider_arrows = sprintf(
					'<div class="wpmozo_swiper_navigation wpmozo_arrows_%1$s%5$s" data-arrows_desktop="%4$s">
						<div class="%2$s"></div><div class="%3$s"></div>
					</div>',
					esc_attr( $attributes['arrowsPosition'] ),
					esc_attr( $button_next_class ),
					esc_attr( $button_prev_class ),
					esc_attr( $attributes['arrowsPosition'] ),
					esc_attr( $arrow_bg_disabled_class )
				);
			}

			// Control dots.
			$pagination_dots = '';
			if ( true === $attributes['showControlDot'] ) {
				$pagination_class = '';
				if ( true === $attributes['enableDynamicDots'] && (
					'solid_dot' === $attributes['controlDotStyle'] ||
					'transparent_dot' === $attributes['controlDotStyle'] ||
					'square_dot' === $attributes['controlDotStyle']
				) ) {
					$pagination_class = 'swiper-pagination-bullets-dynamic';
				}

				$pagination_dots = sprintf(
					'<div class="wpmozo_swiper_pagination wpmozo-bna-portfolio-slider-pagination">
						<div class="swiper-pagination %1$s %2$s"></div>
					</div>',
					esc_attr( $attributes['controlDotStyle'] ),
					esc_attr( $pagination_class )
				);
			}

			// Get wrapper attributes.
			$wrapper_attributes = get_block_wrapper_attributes( array(
				'class' => ( $attributes['className'] ) ?? ''
			) );

			$auto_height = ( $attributes['autoHeight'] ) ? 'true' : 'false';
			$auto_height = ( true === $attributes['equalHeight'] ) ? 'false' : $auto_height;

			// Get data attrs.
			$data_attrs = array(
				'clientId'                    => $attributes['ID'] ?? '',
				'clientid'                    => $attributes['ID'] ?? '',
				'slide_effect'                => $attributes['slideEffect'] ?? 'slide',
				'slides_per_view'             => $attributes['slidesPerView'] ?? '1',
				'slides_per_view_tablet'      => $attributes['slidesPerViewTablet'] ?? '1',
				'slides_per_view_mobile'      => $attributes['slidesPerViewMobile'] ?? '1',
				'slides_per_group'            => $attributes['slidesPerGroup'] ?? '1',
				'slides_per_group_tablet'     => $attributes['slidesPerGroupTablet'] ?? '1',
				'slides_per_group_mobile'     => $attributes['slidesPerGroupMobile'] ?? '1',
				'space_between_slides'        => $attributes['spaceBetweenSlides'] ?? '20',
				'space_between_slides_tablet' => $attributes['spaceBetweenSlidesTablet'] ?? '20',
				'space_between_slides_mobile' => $attributes['spaceBetweenSlidesMobile'] ?? '20',

				'auto_height'                 => esc_attr( $auto_height ),
				'enable_loop'                 => $attributes['enableLoop'] ? 'true' : 'false',
				'autoplay'                    => $attributes['autoplay'] ? 'true' : 'false',
				'autoplay_delay'              => $attributes['autoplayDelay'] ?? '3000',
				'pause_on_hover'              => $attributes['pauseOnHover'] ? 'true' : 'false',
				'enable_linear_trans'         => $attributes['enableLinearTrans'] ? 'true' : 'false',
				'trans_duration'              => $attributes['transDuration'] ?? '1000',
				'enable_coverflow_shadow'     => $attributes['enableCoverflowShadow'] ?? 'false',
				'coverflow_rotate'            => $attributes['coverflowRotate'] ?? '40',
				'coverflow_depth'             => $attributes['coverflowDepth'] ?? '100',

				'show_arrows'                 => $attributes['showArrows'] ? 'true' : 'false',
				'show_control_dot'            => $attributes['showControlDot'] ? 'true' : 'false',
				'control_dot_style'           => $attributes['controlDotStyle'] ?? 'solid_dot',
				'enable_dynamic_dots'         => $attributes['enableDynamicDots'] ? 'true' : 'false',
			);
			$data_attr_str = '';
			foreach ( $data_attrs as $key => $val ) {
				$data_attr_str .= ' data-' . esc_attr( $key ) . '="' . esc_attr( $val ) . '"';
			}

			// Equal height class.
			$equal_height_class = ( true === $attributes['equalHeight'] ) ? ' wpmozo_equal_portfolio_height' : '';

			// Render final output.
			$render_output = sprintf(
				'<div id="block-%5$s" %1$s>
					<div class="wpmozo_swiper_wrapper %8$s" %4$s>
						<div class="wpmozo_portfolio_layout wpmozo_swiper_inner_wrap %2$s">
							<div class="swiper swiper-container">
								<div class="swiper-wrapper">%3$s</div>
							</div>
							%6$s %7$s
						</div>
					</div>
				</div>%9$s',
				$helpers::esc_previously( $wrapper_attributes ),
				esc_attr( $layout ),
				$helpers::esc_previously( $portfolios ),
				$helpers::esc_previously( $data_attr_str ),
				esc_attr( $attributes['ID'] ),
				$helpers::esc_previously( $slider_arrows ),
				$helpers::esc_previously( $pagination_dots ),
				esc_attr( $equal_height_class ),
				$block_helpers::get_block_dynamic_style( 'portfolio-slider', $attributes )
			);
		} else {
			// No results output.
			$wrapper_attributes = get_block_wrapper_attributes( array(
				'class' => ( $attributes['className'] ) ?? ''
			) );
			$no_results_text = $attributes['noResultText'] ?? 'The portfolios you requested could not be found.';
			$render_output = sprintf(
				'<div id="block-%2$s" %1$s>
					<div class="wpmozo_no_results">%3$s</div>
				</div>',
				$helpers::esc_previously( $wrapper_attributes ),
				esc_attr( $attributes['ID'] ),
				esc_html( $no_results_text )
			);
		}

		return $render_output;
	}
}

echo portfolio_slider_render_callback( $attributes );
