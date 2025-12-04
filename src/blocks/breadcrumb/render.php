<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;
use WPMOZO\BNA\Helpers\Mozo_Bna_Block_Helpers;

if ( ! function_exists( 'breadcrumb_render_callback' ) ) {
	function breadcrumb_render_callback( $attributes ) {

		$helpers       = new Mozo_Bna_Helpers();
		$block_helpers = new Mozo_Bna_Block_Helpers();

		$breadcrumb_layout  = esc_attr( $attributes['breadcrumbLayout'] );
		$link_target        = ( "1" === esc_attr( $attributes['linkTarget'] ) ) ? 'target="_blank"' : '';
		$enable_fade        = esc_attr( $attributes['enableFade'] );
		$fade_range         = esc_attr( $attributes['fadeRange'] );
		$separator_icon     = ( 'layout2' === $breadcrumb_layout && ! empty( $attributes['separatorIcon'] ) ) ? esc_attr( $attributes['separatorIcon'] ) : '';
		$home_link_text     = ! empty( $attributes['homeLinkText'] ) ? sprintf( esc_html__( '%s', 'wpmozo-blocks-and-addons' ), $attributes['homeLinkText'] ) : esc_html__( 'Home', 'wpmozo-blocks-and-addons' );
		$use_home_link_icon = esc_attr( $attributes['useHomeLinkIcon'] );
		$hide_home_text     = esc_attr( $attributes['hideHomeText'] );
		$home_link_icon     = ( $use_home_link_icon ) ? esc_attr( $attributes['homeLinkIcon'] ) : '';
		$breadcrumb_list    = '';
		$output             = '';
		$opacity            = 1;
		$opacity_style      = '';

		$hide_home_text     = empty( $hide_home_text ) ? 'off' : 'on';
		$use_home_link_icon = empty( $use_home_link_icon ) ? 'off' : 'on';
		$Seprator_Icon      = ( 'icon_separator' === $attributes['separatorType'] ) ? '<span class="breadcrumb-home-icon"><i class="' . $attributes['separatorIcon'] . '"></i></span>' : '';

		$breadcrumb = traverse_breadcrumbs( $attributes );

		$breadcrumb_size = (int) esc_attr( count( $breadcrumb ) );
		for ( $i = 0; $i < $breadcrumb_size; $i ++ ) {
			$breadcrumbs_keys = array_keys( $breadcrumb[ $i ] );
			$title            = $breadcrumbs_keys[0];
			$link             = $breadcrumb[ $i ][ $title ];

			if ( 'on' === $enable_fade && '' !== $fade_range ) {
				$opacity_style = sprintf( 'style="opacity: %1$s;"', esc_attr( $opacity ) );
			}

			//layout1
			if ( 'layout1' === $breadcrumb_layout && '' !== $breadcrumb ) {
				if ( 0 === $i ) {
					$title = ( '' !== $title ) ? $title : $home_link_text;
					if ( 'on' === $use_home_link_icon && 'off' === $hide_home_text ) {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" %1$s>
								<a class="breadcrumb-item wpmozo-bna-home-page" href="%2$s" property="item" typeof="WebPage" %6$s>
									<span class="breadcrumb-page" property="name">
										<span class="breadcrumb-home-icon">
						                    <div class="icon-wrapper">
						                        <i class="%3$s"></i>
						                    </div>
						                </span>
										%4$s
									</span>
								</a>
								<meta property="position" content="%5$s" />
							</li>',
							$opacity_style,
							$link,
							$home_link_icon,
							$title,
							( $i + 1 ),
							$link_target
						);
					} elseif ( 'on' === $use_home_link_icon && 'on' === $hide_home_text ) {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" %1$s>
								<a class="breadcrumb-item wpmozo-bna-home-page" href="%2$s" property="item" typeof="WebPage" %5$s>
									<span class="breadcrumb-page" property="name">
										<span class="breadcrumb-home-icon">
						                    <div class="icon-wrapper">
						                        <i class="%3$s"></i>
						                    </div>
						                </span>
									</span>
								</a>
								<meta property="position" content="%4$s" />
							</li>',
							$opacity_style,
							$link,
							$home_link_icon,
							( $i + 1 ),
							$link_target
						);

					} else {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" %1$s>
								<a class="breadcrumb-item wpmozo-bna-home-page" href="%2$s" property="item" typeof="WebPage" %5$s>
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
							<span class="breadcrumb-page wpmozo-bna-last-page" property="name">%2$s</span>
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

			//layout2
			if ( 'layout2' === $breadcrumb_layout && '' !== $breadcrumb ) {
				if ( 0 === $i ) {
					$title = ( '' !== $title ) ? $title : $home_link_text;
					if ( 'on' === $use_home_link_icon && 'off' === $hide_home_text ) {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %6$s>
									<span class="breadcrumb-home-icon et-pb-icon"><i class="%3$s"></i></span>
									<span class="breadcrumb-page" property="name">%4$s</span>
								</a>
								<meta property="position" content="%5$s" />
							</li>',
							isset( $attributes['separatorIcon'] ) ? $attributes['separatorIcon'] : '',
							$link,
							$home_link_icon,
							$title,
							( $i + 1 ),
							$link_target
						);

					} elseif ( 'on' === $use_home_link_icon && 'on' === $hide_home_text ) {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %5$s>
									<span class="breadcrumb-page" property="name">
										<span class="breadcrumb-home-icon et-pb-icon"><i class="%3$s"></i></span>
									</span>
								</a>
								<meta property="position" content="%4$s" />
							</li>',
							isset( $attributes['separatorIcon'] ) ? $attributes['separatorIcon'] : '',
							$link,
							$home_link_icon,
							( $i + 1 ),
							$link_target
						);

					} else {
						$breadcrumb_list .= sprintf(
							'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
								<span class="breadcrumb-home-icon et-pb-icon"><i class="%6$s"></i></span>
								<a class="breadcrumb-item dipl-home-page" href="%2$s" property="item" typeof="WebPage" %5$s>
									<span class="breadcrumb-page" property="name">%3$s</span>
								</a>
								<meta property="position" content="%4$s" />
							</li>',
							isset( $attributes['separatorIcon'] ) ? $attributes['separatorIcon'] : '',
							$link,
							$title,
							( $i + 1 ),
							$link_target,
							$home_link_icon
						);
					}
				} elseif ( ( $i + 1 ) === $breadcrumb_size ) {
					$breadcrumb_list .= sprintf(
						'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
							%4$s
							<span class="breadcrumb-page dipl-last-page" property="name">%2$s</span>
							<meta property="position" content="%3$s" />
						</li>',
						isset( $attributes['separatorIcon'] ) ? $attributes['separatorIcon'] : '',
						$title,
						( $i + 1 ),
						$Seprator_Icon
					);
				} else {
					$breadcrumb_list .= sprintf(
						'<li property="itemListElement" typeof="ListItem" data-icon="%1$s">
							<a class="breadcrumb-item" href="%2$s" property="item" typeof="WebPage" %5$s>
								<span class="breadcrumb-page" property="name">%3$s</span>
							</a>
							<meta property="position" content="%4$s" />
						</li>',
						isset( $attributes['separatorIcon'] ) ? $attributes['separatorIcon'] : '',
						$link,
						$title,
						( $i + 1 ),
						$link_target
					);
				}
			}
		}

		// Get wrapper attributes.
		$wrapper_attributes = get_block_wrapper_attributes( array(
			'class' => ( $attributes['className'] ) ?? ''
		) );


		// Render final output.
		$render_output = sprintf(
			'<div id="block-%1$s" %2$s>
				<div class="wpmozo-bna-breadcrumb-wrapper %3$s">
					<ol class="wpmozo-bna-breadcrumb-inner" vocab="https://schema.org/" typeof="BreadcrumbList">
						%4$s
					</ol>
				</div>
			</div>%5$s',
			esc_attr( $attributes['ID'] ),
			$helpers::esc_previously( $wrapper_attributes ),
			$breadcrumb_layout,
			$breadcrumb_list,
			$block_helpers::get_block_dynamic_style( 'breadcrumb', $attributes )
		);

		return $render_output;
	}
}

if ( ! function_exists( 'traverse_breadcrumbs' ) ) {
	function traverse_breadcrumbs( $args = array(), $conditional_tags = array(), $current_page = array() ) {
		global $paged, $wp_query;
		$defaults = array(
			'homeLinkText' => '',
		);
		$args     = wp_parse_args( $args, $defaults );
		$page_id  = isset( $current_page['id'] ) ? (int) $current_page['id'] : 0;

		$home_link_text = $args['homeLinkText'];
		$query_object   = $wp_query->get_queried_object();
		$breadcrumb     = array();

		if ( ! is_front_page() || ! is_home() ) {
			$breadcrumb[] = array(
				$home_link_text => get_home_url(),
			);

			if ( is_singular() || ( defined( 'REST_REQUEST' ) && REST_REQUEST && isset( $_REQUEST['context'] ) && 'edit' === $_REQUEST['context'] ) ) {
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
						for ( $i = 0; $category_trail_size > $i; $i ++ ) {
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

					for ( $i = 0; $post_trail_size > $i; $i ++ ) {
						array_push( $breadcrumb, $post_trail[ $i ] );
					}
				} else {
					if ( ! is_front_page( $post_object ) ) {
						$breadcrumb[] = array( $post_object->post_title => get_permalink( $post_object ) );
					}
				}
			}


			if ( is_archive() ) {
				if ( is_category() || is_tag() || is_tax() ) {
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
					for ( $i = 0; $terms_trail_size > $i; $i ++ ) {
						array_push( $breadcrumb, $terms_trail[ $i ] );
					}
				} elseif ( is_author() ) {
					global $author;
					$author_data  = get_userdata( $author );
					$breadcrumb[] = array( 'Author archive for: ' . $author_data->display_name => '#' );

				} elseif ( is_day() ) {
					$breadcrumb[] = array( get_the_time( 'Y' ) => get_year_link( get_the_time( 'Y' ) ) );
					$breadcrumb[] = array( get_the_time( 'M' ) . ' Archives' => get_month_link( get_the_time( 'Y' ), get_the_time( 'm' ) ) );
					$breadcrumb[] = array( get_the_time( 'j' ) . ' ' . get_the_time( 'M' ) . ' Archives' => '#' );

				} elseif ( is_month() ) {
					$breadcrumb[] = array( get_the_time( 'Y' ) . ' Archives' => get_year_link( get_the_time( 'Y' ) ) );
					$breadcrumb[] = array( get_the_time( 'M' ) . ' Archives' => '#' );

				} elseif ( is_year() ) {
					$breadcrumb[] = array( get_the_time( 'Y' ) . ' Archives' => '#' );

				} elseif ( is_post_type_archive() ) {
					$post_type        = $wp_query->query_vars['post_type'];
					$post_type_object = get_post_type_object( $post_type );
					$breadcrumb[]     = array( $post_type_object->labels->singular_name => '#' );

				}
			}

			if ( is_paged() ) {
				$current_page = get_query_var( 'paged' ) ? get_query_var( 'paged' ) : get_query_var( 'page' );
				$breadcrumb[] = array( 'Page ' . number_format_i18n( absint( $current_page ) ) => '#' );
			}
			if ( is_search() ) {
				$breadcrumb[] = array( 'Search results for: ' . get_search_query() => '#' );
			}
			if ( is_404() ) {
				$breadcrumb[] = array( 'Error 404' => '#' );
			}
		} else {
			$breadcrumb = '';
		}

		return $breadcrumb;
	}
}

echo breadcrumb_render_callback( $attributes );
