<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'team_slider_render_callback' ) ) {
	function team_slider_render_callback( $attributes ) {

		$helpers       = new Mozo_Bna_Helpers();
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$layout              = $attributes['layout'] ?? 'layout1';
		$posts_to_show       = $attributes['postsNumber'] ?? 10;
		$post_order          = $attributes['postOrder'] ?? 'DESC';
		$post_order_by       = $attributes['postOrderBy'] ?? 'date';
		$includes_categories = $attributes['includesCategories'] ?? [];

		$query_args = array(
			'post_type'      => 'wpmozoae-team-member',
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
				'taxonomy' => 'wpmozo-ae-team-member-category',
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

			// Get attrs.
			$show_skills      = boolval( $attributes['showSkills'] ) ?? true;
			$show_social_icon = boolval( $attributes['showSocialIcon'] ) ?? true;
			$enable_link      = boolval( $attributes['enableLink'] ) ?? false;
			$link_type        = $attributes['linkType'] ?? 'item';
			$link_target      = $attributes['linkTarget'] ?? 'same';
			$use_popup        = boolval( $attributes['usePopup'] ) ?? false;

			$team_members = '';
			while ( $query->have_posts() ) {
				$query->the_post();

				$post_id          = esc_attr( get_the_ID() );
				$has_member_image = has_post_thumbnail( $post_id );

				$skills           = get_post_meta( $post_id, 'wpmozo_ae_team_member_skills', true );
				$email_address    = get_post_meta( $post_id, 'wpmozo_ae_team_member_email', true );
				$phone_number     = get_post_meta( $post_id, 'wpmozo_ae_team_member_phone', true );
				$website          = get_post_meta( $post_id, 'wpmozo_ae_team_member_website', true );
				$facebook         = get_post_meta( $post_id, 'wpmozo_ae_team_member_facebook', true );
				$twitter          = get_post_meta( $post_id, 'wpmozo_ae_team_member_twitter', true );
				$linkedin         = get_post_meta( $post_id, 'wpmozo_ae_team_member_linkedin', true );
				$instagram        = get_post_meta( $post_id, 'wpmozo_ae_team_member_instagram', true );
				$youtube          = get_post_meta( $post_id, 'wpmozo_ae_team_member_youtube', true );

				// Member base image.
				$member_image = '';
				if ( $has_member_image ) {
					$member_image = sprintf(
						'<div class="wpmozo_bna_team_member_image">%1$s</div>',
						get_the_post_thumbnail( $post_id, 'large' )
					);
				}

				// Member skills.
				$skill_bars = '';
				if ( true === $show_skills && ! empty( $skills ) ) {
					$skills = explode( ',', $skills );
					$skills_value = get_post_meta( $post_id, 'wpmozo_ae_team_member_skills_value', true );
					$skills_value = explode( ',', $skills_value );
					foreach ( $skills as $key => $skill_title ) {
						$skill_value = array_key_exists( $key, $skills_value ) ? intval( $skills_value[ $key ] ) : 100;
						$skill_bars .= sprintf(
							'<div class="wpmozo_bna_skill_bar_wrapper_inner">
								<div class="wpmozo_bna_skill_name">%1$s</div>
								<div class="wpmozo_bna_empty_bar">
									<div class="wpmozo_bna_filled_bar" data-skill="%2$s"></div>
								</div>
							</div>',
							esc_html( $skill_title ),
							$skill_value . '%'
						);
					}
				}

				// Link Button.
				$link_button = '';
				if ( true === $enable_link && 'button' === $link_type ) {

					$button_icon     = $attributes['buttonIcon'] ?? 'fas fa-arrow-right';
					$button_text     = $attributes['linkButtonText'] ?? esc_html__( 'Read More', 'wpmozo-blocks-and-addons' );
					$icon_position   = $attributes['buttonIconPosition'] ?? 'after';

					// Button Classes.
					$btn_classes = array( 'wpmozo-bna-button', 'wpmozo-bna-team-item-link-btn' );

					$button_icon_html = '';
					if ( $attributes['buttonUseIcon'] && ! empty( $button_icon ) ) {
						$button_icon_html = sprintf(
							'<i class="wpmozo-bna-icon %1$s"></i>',
							esc_attr( $button_icon )
						);

						// Icon hover class.
						if ( true === $attributes['buttonIconOnHover'] ) {
							$btn_classes[] = 'wpmozo-icon-on-hover';
						}

						// Icon position class.
						$btn_classes[] = ( 'before' === $icon_position ) ? 'wpmozo-icon-at-before' : 'wpmozo-icon-at-after';
					}

					// Add popup class.
					if ( true === $use_popup ) {
						$btn_classes[] = 'wpmozo_bna_team_popup';
					}

					// Button.
					$link_button = sprintf(
						'<div class="wpmozo-bna-button-wrap wpmozo-bna-team-item-link-btn-wrap">
							<a href="%1$s" class="%4$s">
								<span class="wpmozo-bna-btn-text">%2$s</span>
								%3$s
							</a>
						</div>',
						get_the_permalink(),
						esc_html( $button_text ),
						$helpers::esc_previously( $button_icon_html ),
						implode( ' ', $btn_classes )
					);
				}

				// Member social icon.
				$social_icons = '';
				$social_target = $attributes['socialIconTarget'] ?? 'same';
				if ( true === $show_social_icon ) {
					$social_icons .= $helpers::get_team_member_social( 'website', $website, 'fas fa-globe', $social_target );
					$social_icons .= $helpers::get_team_member_social( 'facebook', $facebook, 'fab fa-facebook-f', $social_target );
					$social_icons .= $helpers::get_team_member_social( 'twitter', $twitter, 'fab fa-x-twitter', $social_target );
					$social_icons .= $helpers::get_team_member_social( 'linkedin', $linkedin, 'fab fa-linkedin-in', $social_target );
					$social_icons .= $helpers::get_team_member_social( 'instagram', $instagram, 'fab fa-instagram', $social_target );
					$social_icons .= $helpers::get_team_member_social( 'youtube', $youtube, 'fab fa-youtube', $social_target );
					$social_icons .= $helpers::get_team_member_social( 'email', $email_address, 'fas fa-envelope', $social_target );
					$social_icons .= $helpers::get_team_member_social( 'phone', $phone_number, 'fas fa-phone', $social_target );
				}

				// Class list.
				$item_attrs = array();
				$class_list = get_post_class( 'wpmozo_bna_team_member_card' );
				if ( true === $enable_link ) {
					if ( true === $use_popup ) {
						$item_attrs['id'] = esc_attr( $post_id );
					} elseif ( 'item' === $link_type ) {
						$item_attrs['link']        = get_the_permalink();
						$item_attrs['link_target'] = esc_attr( $link_target );
					}

					if ( 'item' === $link_type ) {
						if ( $use_popup ) {
							$class_list[] = 'wpmozo_bna_team_popup';
						} else {
							$class_list[] = 'wpmozo_bna_team_link';
						}
					}
				}

				$item_attr_str = '';
				foreach ( $item_attrs as $key => $val ) {
					$item_attr_str .= ' data-' . esc_attr( $key ) . '="' . esc_attr( $val ) . '"';
				}

				$team_members .= '<div class="wpmozo_bna_team_member_slide swiper-slide">';
				if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-team-slider/' . sanitize_file_name( $layout ) . '.php' ) ) {
					include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-team-slider/' . sanitize_file_name( $layout ) . '.php';
				}
				$team_members .= '</div>';
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
					'<div class="wpmozo-bna-team-slider-pagination">
						<div class="swiper-pagination %1$s %2$s"></div>
					</div>',
					esc_attr( $attributes['controlDotStyle'] ),
					esc_attr( $pagination_class )
				);
			}

			// Data attrs.
			$in_popup = $attrs['displayInPopup'] ?? [ "image", "designation", "social_icons", "content", "skills_bars" ];

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
				'coverflow_rotate'            => $attributes['coverflowRotate'] ?? '40',
				'coverflow_depth'             => $attributes['coverflowDepth'] ?? '100',

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

				'show_designation'            => in_array( 'designation', $in_popup ) ? 'on' : 'off',
				'show_content'                => in_array( 'content', $in_popup ) ? 'on' : 'off',
				'show_skills_bars'            => in_array( 'skills_bars', $in_popup ) ? 'on' : 'off',
				'show_social_icons'           => in_array( 'social_icons', $in_popup ) ? 'on' : 'off',
				'show_image'                  => in_array( 'image', $in_popup ) ? 'on' : 'off',
				'bar_layout'                  => $attributes['popupBarLayout'] ?? 'layout1',
				'use_stripes'                 => $attributes['popupBarUseStripe'] ? 'on' : 'off',
				'popup_name_level'            => $attributes['popupNameLevel'] ?? 'h2',
			);
			$data_attr_str = '';
			foreach ( $data_attrs as $key => $val ) {
				$data_attr_str .= ' data-' . esc_attr( $key ) . '="' . esc_attr( $val ) . '"';
			}

			// Get wrapper attributes.
			$wrapper_attributes = get_block_wrapper_attributes(array(
				'class'=>'wpmozo-wrap-'.$attributes['ID'] . ' ' . 'wpmozo-team-slider' . ' ' .$attributes['wrapCustomClass']. ' ' .$attributes['className']
			));

			// Equal height team class.
			$equal_height_class = ( true === $attributes['equalHeight'] ) ? ' wpmozo_equal_team_member_height' : '';

			// Render final output.
			$render_output = sprintf(
				'<div id="block-%1$s" %2$s>
					<div class="wpmozo_swiper_wrapper%3$s" %4$s>
						<div class="wpmozo_bna_team_slider_container wpmozo_swiper_inner_wrap %5$s">
							<div class="swiper swiper-container">
								<div class="swiper-wrapper">%6$s</div>
							</div>
							%7$s %8$s
						</div>
					</div>
				</div>%9$s',
				esc_attr( $attributes['ID'] ),
				$helpers::esc_previously( $wrapper_attributes ),
				esc_attr( $equal_height_class ),
				$helpers::esc_previously( $data_attr_str ),
				esc_attr( $layout ),
				$helpers::esc_previously( $team_members ),
				$helpers::esc_previously( $slider_arrows ),
				$helpers::esc_previously( $pagination_dots ),
				$block_helpers::get_block_dynamic_style( 'team-slider', $attributes )
			);
		}

		return $render_output;
	}
}

echo team_slider_render_callback( $attributes );

