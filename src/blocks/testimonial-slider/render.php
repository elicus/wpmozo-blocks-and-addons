<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'testimonial_slider_render_callback' ) ) {
	function testimonial_slider_render_callback( $attributes ) {

		$helpers = new Mozo_Bna_Helpers();
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$layout              = $attributes['layout'] ?? 'layout1';
		$posts_to_show       = $attributes['postsToShow'] ?? 5;
		$post_order          = $attributes['postOrder'] ?? 'DESC';
		$post_order_by       = $attributes['postOrderBy'] ?? 'date';
		$includes_categories = $attributes['includesCategories'] ?? [];

		$query_args = array(
			'post_type'      => 'mozo-testimonial',
			'posts_per_page' => $posts_to_show,
			'post_status'    => 'publish',
			'orderby'        => 'date',
			'order'          => 'DESC',
		);
		if ( is_user_logged_in() ) {
			$query_args['post_status'] = array( 'publish', 'private' );
		}
		if ( ! empty( $includes_categories ) ) {
			$query_args['tax_query'] = array( array(
				'taxonomy' => 'mozo-testimonial-category',
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

		// If posts exists.
		$render_output = '';
		if ( $query->have_posts() ) {

			// Start quote.
			$start_quote_svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M13 6v6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H13zm-9 6h5.2v4c0 .8-.2 1.4-.5 1.7-.6.6-1.6.6-2.5.5h-.3v1.5h.5c1 0 2.3-.1 3.3-1 .6-.6 1-1.6 1-2.8V6H4v6z"></path></svg>';
			$opening_quote   = '';
			if ( true === $attributes['showOpenQuoteIcon'] ) {
				$opening_quote = sprintf(
					'<span class="wpmozo_testimonial_quote_icon wpmozo_testimonial_opening_quote_icon">%1$s</span>',
					$helpers::esc_previously( $start_quote_svg )
				);
			}
			$closing_quote = '';
			if ( true === $attributes['showCloseQuoteIcon'] ) {
				$closing_quote = sprintf(
					'<span class="wpmozo_testimonial_quote_icon wpmozo_testimonial_closing_quote_icon">%1$s</span>',
					$helpers::esc_previously( $start_quote_svg )
				);
			}

			// Get other attributes.
			$show_rating       = $attributes['showRating'] ?? true;
			$show_author_image = $attributes['showAuthorImage'] ?? true;
			$show_designation  = $attributes['showDesignation'] ?? true;
			$show_company      = $attributes['showCompany'] ?? true;

			$testimonials = '';
			while ( $query->have_posts() ) {
				$query->the_post();

				$post_id = esc_attr( get_the_ID() );

				// Get Star Rating.
				$rating_num = floatval( get_post_meta( $post_id, '_author_rating', true ) );
				$rating     = '';
				if ( true === $show_rating && $rating_num > 0 ) {
					$stars = '';
					for ( $i = 1; $i <= absint( $rating_num ); $i++ ) {
		                $stars .= '<span class="wpmozo_testimonial_star wpmozo_testimonial_filled_star"></span>';
		            }
		            if ( $rating_num != absint( $rating_num ) ) {
		                $stars .= '<span class="wpmozo_testimonial_star wpmozo_testimonial_half_filled_star"></span>';
		                $unfilled_stars  = 5 - absint( $rating_num ) - 1;
		            } else {
		                $unfilled_stars  = 5 - absint( $rating_num );
		            }
		            for ( $i = 1; $i <= $unfilled_stars; $i++ ) {
		                $stars .= '<span class="wpmozo_testimonial_star wpmozo_testimonial_empty_star"></span>';
		            }

					$rating = sprintf(
						'<div class="wpmozo_testimonial_rating">
							<span itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating">
								<span class="wpmozo_testimonial_rating_value" itemprop="ratingValue">%1$s</span>
								%2$s
							</span>
						</div>',
						$helpers::esc_previously( $rating_num ),
						$helpers::esc_previously( $stars )
					);
				}

				$author_image = '';
				if ( true === $show_author_image ) {
					if ( has_post_thumbnail( $post_id ) ) {
						$image = get_the_post_thumbnail( $post_id, 'full' );
					} else {
						$image = sprintf(
							'<img src="%1$s" class="wpmozo_testimonial_mystery_person" alt="%2$s" />',
							esc_url( WPMOZO_BNA_ASSETS_DIR_URL . 'images/mystery-person.jpg' ),
							esc_html__( 'Mystery Person', 'wpmozo-blocks-and-addons' )
						);
					}
					$author_image = sprintf(
						'<div class="wpmozo_testimonial_author_image">%1$s</div>',
						$helpers::esc_previously( $image, 'html' )
					);
				}

				$author_name = get_post_meta( $post_id, '_author_name', true );
				if ( ! empty( $author_name ) ) {
					$author_name = sprintf(
						'<div class="wpmozo_testimonial_author_name">%1$s</div>',
						esc_html( $author_name )
					);
				}

				$author_designation = '';
				if ( true === $show_designation ) {
					$desgination = get_post_meta( $post_id, '_author_designation', true );
					if ( ! empty( $desgination ) ) {
						$author_designation = sprintf(
							'<div class="wpmozo_testimonial_author_designation">%1$s</div>',
							esc_html( $desgination )
						);
					}
				}

				$author_company = '';
				if ( true === $show_company ) {
					$company_name = get_post_meta( $post_id, '_author_company', true );
					$company_url  = get_post_meta( $post_id, '_author_company_url', true );
					if ( ! empty( $company_url ) && ! empty( $company_name )  ) {
						$author_company = sprintf(
							'<div class="wpmozo_testimonial_author_company">
								<a href="%1$s" target="_blank" rel="nofollow">%2$s</a>
							</div>',
							esc_url( $company_url ),
							esc_html( $company_name )
						);
					} elseif ( ! empty( $company_name ) ) {
						$author_company = sprintf(
							'<div class="wpmozo_testimonial_author_company">%1$s</div>',
							esc_html( $company_name )
						);
					}
				}

				$testimonials .= '<div class="wpmozo_testimonial_slide swiper-slide">';
				if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-testimonial-slider/' . sanitize_file_name( $layout ) . '.php' ) ) {
					include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-testimonial-slider/' . sanitize_file_name( $layout ) . '.php';
				}
				$testimonials .= '</div>';
			}

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

				$slider_arrows = sprintf(
					'<div class="wpmozo_swiper_navigation wpmozo_arrows_%1$s" data-arrows_desktop="%4$s">
						<div class="%2$s"></div><div class="%3$s"></div>
					</div>',
					esc_attr( $attributes['arrowsPosition'] ),
					esc_attr( $button_next_class ),
					esc_attr( $button_prev_class ),
					esc_attr( $attributes['arrowsPosition'] )
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
					'<div class="wpmozo-bna-testimonial-slider-pagination">
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

				'show_arrows'                 => $attributes['showArrows'] ? 'true' : 'false',
				'show_control_dot'            => $attributes['showControlDot'] ? 'true' : 'false',
				'control_dot_style'           => $attributes['controlDotStyle'] ?? 'solid_dot',
				'enable_dynamic_dots'         => $attributes['enableDynamicDots'] ? 'true' : 'false',
			);
			$data_attr_str = '';
			foreach ( $data_attrs as $key => $val ) {
				$data_attr_str .= ' data-' . esc_attr( $key ) . '="' . esc_attr( $val ) . '"';
			}

			// Equal height testimonial class.
			$equal_height_class = ( true === $attributes['equalHeight'] ) ? ' wpmozo_equal_testimonial_height' : '';

			// Render final output.
			$render_output = sprintf(
				'<div id="block-%5$s" %1$s>
					<div class="wpmozo_swiper_wrapper %8$s" %4$s>
						<div class="wpmozo_testimonial_layout wpmozo_swiper_inner_wrap %2$s">
							<div class="swiper swiper-container">
								<div class="swiper-wrapper">%3$s</div>
							</div>
							%6$s %7$s
						</div>
					</div>
				</div>%9$s',
				$helpers::esc_previously( $wrapper_attributes ),
				esc_attr( $layout ),
				$helpers::esc_previously( $testimonials ),
				$helpers::esc_previously( $data_attr_str ),
				esc_attr( $attributes['ID'] ),
				$helpers::esc_previously( $slider_arrows ),
				$helpers::esc_previously( $pagination_dots ),
				esc_attr( $equal_height_class ),
				$block_helpers::get_block_dynamic_style( 'testimonial-slider', $attributes )
			);
		}

		return $render_output;
	}
}

echo testimonial_slider_render_callback( $attributes );
