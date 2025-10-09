<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'breadcrumb_render_callback' ) ) {
	function breadcrumb_render_callback( $attributes ) {

		$breadcrumb_layout                     = esc_attr($attributes['breadcrumb_layout'] );
		$link_target                           = ( 'on' === esc_attr($attributes['link_target'] ) ) ? 'target="_blank"' : '';
		$enable_fade                           = esc_attr($attributes['enable_fade'] );
		$fade_range                            = esc_attr($attributes['fade_range'] );
		$separator_icon                        = esc_attr($attributes['separator_icon'] );
		$home_link_text                        = ! empty($attributes['home_link_text'] ) ? sprintf( esc_html__( '%s', 'divi-plus' ),$attributes['home_link_text'] ) : esc_html__( 'Home', 'divi-plus' );
		$use_home_link_icon                    = esc_attr($attributes['use_home_link_icon'] );
		$hide_home_text                        = esc_attr($attributes['hide_home_text'] );
		$home_link_icon                        = esc_attr($attributes['home_link_icon'] );
		$breadcrumb_list                       = '';
		$output                                = '';
		$opacity                               = 1;
		$opacity_style                         = '';

		$breadcrumb = traverse_breadcrumbs( $attributes );

		$breadcrumb_size = (int) esc_attr( count( $breadcrumb ) );
			for ( $i = 0; $i < $breadcrumb_size; $i++ ) {
				$breadcrumbs_keys = array_keys( $breadcrumb[ $i ] );
				$title            = $breadcrumbs_keys[0];
				$link             = $breadcrumb[ $i ][ $title ];

				if ( 'on' === $enable_fade && '' !== $fade_range ) {
					$opacity_style = sprintf( 'style="opacity: %1$s;"', esc_attr( $opacity ) );
				}

				if ( 0 === $i ) {
					$title = ( '' !== $title ) ? $title : $home_link_text;
					if ( 'on' === $use_home_link_icon && '' !== $home_link_icon && 'off' === $hide_home_text ) {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" %1$s>
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %6$s>
									<span class="breadcrumb-page" property="name">
										<span class="breadcrumb-home-icon et-pb-icon">%3$s</span>
										%4$s
									</span>
								</a>
								<meta property="position" content="%5$s" />
							</li>',
							$opacity_style,
							$link,
							esc_attr( et_pb_process_font_icon( $home_link_icon ) ),
							$title,
							( $i + 1 ),
							$link_target
						);
					} elseif ( 'on' === $use_home_link_icon && '' !== $home_link_icon && 'on' === $hide_home_text ) {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" %1$s>
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %5$s>
									<span class="breadcrumb-page" property="name">
										<span class="breadcrumb-home-icon et-pb-icon">
											%3$s
										</span>
									</span>
								</a>
								<meta property="position" content="%4$s" />
							</li>',
							$opacity_style,
							$link,
							esc_attr( et_pb_process_font_icon( $home_link_icon ) ),
							( $i + 1 ),
							$link_target
						);

					} else {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" %1$s>
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %5$s>
									<span class="breadcrumb-page" property="name">%3$s</span>
								</a>
								<meta property="position" content="%4$s" />
							</li>',
							$opacity_style,
							$link,
							$title,
							( $i + 1 ),
							$link_target
						);
					}
				} elseif ( ( $i + 1 ) === $breadcrumb_size ) {
					$breadcrumb_list .= sprintf(
						'<li property="itemListElement" typeof="ListItem" %1$s>
							<span class="breadcrumb-page dipl-last-page" property="name">%2$s</span>
							<meta property="position" content="%3$s" />
						</li>',
						$opacity_style,
						$title,
						( $i + 1 )
					);
				} else {
					$breadcrumb_list .= sprintf(
						'<li property="itemListElement" typeof="ListItem" %1$s>
							<a class="breadcrumb-item" href="%2$s" property="item" typeof="WebPage" %5$s>
								<span class="breadcrumb-page" property="name">%3$s</span>
							</a>
							<meta property="position" content="%4$s" />
						</li>',
						$opacity_style,
						$link,
						$title,
						( $i + 1 ),
						$link_target
					);
				}
			}
		
		if ( 'layout2' === $breadcrumb_layout && '' !== $breadcrumb ) {

			$breadcrumb_size = (int) esc_attr( count( $breadcrumb ) );
			for ( $i = 0; $i < $breadcrumb_size; $i++ ) {
				$breadcrumbs_keys = array_keys( $breadcrumb[ $i ] );
				$title            = $breadcrumbs_keys[0];
				$link             = $breadcrumb[ $i ][ $title ];

				if ( 0 === $i ) {
					$title = ( '' !== $title ) ? $title : $home_link_text;
					if ( 'on' === $use_home_link_icon && '' !== $home_link_icon && 'off' === $hide_home_text ) {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %6$s>
									<span class="breadcrumb-page" property="name">
										<span class="breadcrumb-home-icon et-pb-icon">%3$s</span>
										%4$s
									</span>
								</a>
								<meta property="position" content="%5$s" />
							</li>',
							esc_attr( et_pb_process_font_icon( $separator_icon ) ),
							$link,
							esc_attr( et_pb_process_font_icon( $home_link_icon ) ),
							$title,
							( $i + 1 ),
							$link_target
						);

					} elseif ( 'on' === $use_home_link_icon && '' !== $home_link_icon && 'on' === $hide_home_text ) {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %5$s>
									<span class="breadcrumb-page" property="name">
										<span class="breadcrumb-home-icon et-pb-icon">%3$s</span>
									</span>
								</a>
								<meta property="position" content="%4$s" />
							</li>',
							esc_attr( et_pb_process_font_icon( $separator_icon ) ),
							$link,
							esc_attr( et_pb_process_font_icon( $home_link_icon ) ),
							( $i + 1 ),
							$link_target
						);

					} else {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %5$s>
									<span class="breadcrumb-page" property="name">%3$s</span>
								</a>
								<meta property="position" content="%4$s" />
							</li>',
							esc_attr( et_pb_process_font_icon( $separator_icon ) ),
							$link,
							$title,
							( $i + 1 ),
							$link_target
						);
					}
				} elseif ( ( $i + 1 ) === $breadcrumb_size ) {
					$breadcrumb_list .= sprintf(
						'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
							<span class="breadcrumb-page dipl-last-page" property="name">%2$s</span>
							<meta property="position" content="%3$s" />
						</li>',
						esc_attr( et_pb_process_font_icon( $separator_icon ) ),
						$title,
						( $i + 1 )
					);
				} else {
					$breadcrumb_list .= sprintf(
						'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
							<a class="breadcrumb-item" href="%2$s" property="item" typeof="WebPage" %5$s>
								<span class="breadcrumb-page" property="name">%3$s</span>
							</a>
							<meta property="position" content="%4$s" />
						</li>',
						esc_attr( et_pb_process_font_icon( $separator_icon ) ),
						$link,
						$title,
						( $i + 1 ),
						$link_target
					);
				}
			}
		}

		$output = sprintf(
			'<div class="dipl-breadcrumb-wrapper %1$s">
				<ol class="dipl-breadcrumb-inner" vocab="https://schema.org/" typeof="BreadcrumbList">
					%2$s
				</ol>
			</div>',
			$breadcrumb_layout,
			$breadcrumb_list
		);

		return $output;
	}
}

function traverse_breadcrumbs( $args = array(), $conditional_tags = array(), $current_page = array() ) {
		global $paged, $wp_query;
		$defaults = array(
			'home_link_text' => '',
		);
		$args     = wp_parse_args( $args, $defaults );
		$page_id  = isset( $current_page['id'] ) ? (int) $current_page['id'] : 0;

		$home_link_text = $args['home_link_text'];
		$query_object   = $wp_query->get_queried_object();
		$breadcrumb     = array();

		if ( ! is_front_page() || ! is_home()
			|| et_fb_conditional_tag( 'is_front_page', $conditional_tags )
			|| et_fb_conditional_tag( 'is_home', $conditional_tags ) ) {
			$breadcrumb[] = array(
				$home_link_text => get_home_url(),
			);

			if ( is_singular() || et_fb_conditional_tag( 'is_singular', $conditional_tags ) ) {
				$post_object = get_post( $page_id );
				$post_type   = $post_object->post_type;
				$post_parent = $post_object->post_parent;

				if ( 'post' === $post_type ) {
					$categories = get_the_category( $post_object->ID );

					if ( ! empty( $categories ) ) {

						$indexed_categories = array_values( $categories );
						$category           = end( $indexed_categories );
						$category_parent    = $category->parent;
						$category_trail[]   = array( $category->name => get_term_link( $category->term_id ) );

						if ( 0 !== $category_parent ) {

							while ( $category_parent ) {
								$parent_category  = get_term( $category_parent, 'category' );
								$category_trail[] = array( $parent_category->name => get_term_link( $parent_category->term_id ) );
								$category_parent  = $parent_category->parent;
							}
							$category_trail = array_reverse( $category_trail );
						}
						$category_trail_size = (int) count( $category_trail );
						for ( $i = 0; $category_trail_size > $i; $i++ ) {
							array_push( $breadcrumb, $category_trail[ $i ] );
						}
					}
				}

				if ( ! in_array( $post_type, array( 'post', 'page', 'attachment' ), true ) ) {
					$post_type_object = get_post_type_object( $post_type );
					$archive_link     = esc_url( get_post_type_archive_link( $post_type ) );
					$archive_trail    = array( $post_type_object->labels->singular_name => $archive_link );
					array_push( $breadcrumb, $archive_trail );
				}

				if ( 0 !== $post_parent ) {
					$post_trail[] = array( $post_object->post_title => get_permalink( $post_object ) );
					while ( $post_parent ) {
						$parent       = get_post( $post_parent );
						$post_trail[] = array( get_the_title( $parent->ID ) => esc_url( get_permalink( $parent->ID ) ) );
						$post_parent  = wp_get_post_parent_id( $parent->ID );
					}

					$post_trail      = array_reverse( $post_trail );
					$post_trail_size = (int) count( $post_trail );

					for ( $i = 0; $post_trail_size > $i; $i++ ) {
						array_push( $breadcrumb, $post_trail[ $i ] );
					}
				} else {
					if ( ! is_front_page( $post_object ) ) {
						$breadcrumb[] = array( $post_object->post_title => get_permalink( $post_object ) );
					}
				}
			}

			if ( is_archive() || et_fb_conditional_tag( 'is_archive', $conditional_tags ) ) {
				if ( is_category() || is_tag() || is_tax() || et_fb_conditional_tag( 'is_category', $conditional_tags ) || et_fb_conditional_tag( 'is_tag', $conditional_tags ) || et_fb_conditional_tag( 'is_tax', $conditional_tags ) ) {
					$term_object   = get_term( $query_object );
					$taxonomy      = $term_object->taxonomy;
					$terms_name    = $term_object->name;
					$term_parent   = $term_object->parent;
					$term_link     = get_term_link( $term_object->term_id );
					$terms_trail[] = array( $term_object->name => get_term_link( $term_object->term_id ) );

					if ( 0 !== $term_parent ) {
						while ( $term_parent ) {
							$term          = get_term( $term_parent, $taxonomy );
							$terms_trail[] = array( $term->name => get_term_link( $term->term_id ) );
							$term_parent   = $term->parent;
						}
						$terms_trail = array_reverse( $terms_trail );
					}
					$terms_trail_size = (int) count( $terms_trail );
					for ( $i = 0; $terms_trail_size > $i; $i++ ) {
						array_push( $breadcrumb, $terms_trail[ $i ] );
					}
				} elseif ( is_author() || et_fb_conditional_tag( 'is_author', $conditional_tags ) ) {
					global $author;
					$author_data  = get_userdata( $author );
					$breadcrumb[] = array( 'Author archive for: ' . $author_data->display_name => '#' );

				} elseif ( is_day() || et_fb_conditional_tag( 'is_day', $conditional_tags ) ) {
					$breadcrumb[] = array( get_the_time( 'Y' ) => get_year_link( get_the_time( 'Y' ) ) );
					$breadcrumb[] = array( get_the_time( 'M' ) . ' Archives' => get_month_link( get_the_time( 'Y' ), get_the_time( 'm' ) ) );
					$breadcrumb[] = array( get_the_time( 'j' ) . ' ' . get_the_time( 'M' ) . ' Archives' => '#' );

				} elseif ( is_month() || et_fb_conditional_tag( 'is_month', $conditional_tags ) ) {
					$breadcrumb[] = array( get_the_time( 'Y' ) . ' Archives' => get_year_link( get_the_time( 'Y' ) ) );
					$breadcrumb[] = array( get_the_time( 'M' ) . ' Archives' => '#' );

				} elseif ( is_year() || et_fb_conditional_tag( 'is_year', $conditional_tags ) ) {
					$breadcrumb[] = array( get_the_time( 'Y' ) . ' Archives' => '#' );

				} elseif ( is_post_type_archive() || et_fb_conditional_tag( 'is_post_type_archive', $conditional_tags ) ) {
					$post_type        = $wp_query->query_vars['post_type'];
					$post_type_object = get_post_type_object( $post_type );
					$breadcrumb[]     = array( $post_type_object->labels->singular_name => '#' );

				}
			}

			if ( is_paged() || et_fb_conditional_tag( 'is_paged', $conditional_tags ) ) {
					$current_page = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : get_query_var( 'page' );
					$breadcrumb[] = array( 'Page ' . number_format_i18n( absint( $current_page ) ) => '#' );
			}
			if ( is_search() || et_fb_conditional_tag( 'is_search', $conditional_tags ) ) {
					$breadcrumb[] = array( 'Search results for: ' . get_search_query() => '#' );
			}
			if ( is_404() || et_fb_conditional_tag( 'is_404', $conditional_tags ) ) {
					$breadcrumb[] = array( 'Error 404' => '#' );
			}
		} else {
			$breadcrumb = '';
		}
		return $breadcrumb;
	}

echo breadcrumb_render_callback( $attributes );
