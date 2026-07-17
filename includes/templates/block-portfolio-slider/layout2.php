<?php
/**
 * Template for displaying Portfolio Card Layout 2
 *
 * @author     Elicus Technologies <hello@elicus.com>
 * @link       https://www.elicus.com/
 * @copyright  2026 Elicus Technologies Private Limited
 * @version    1.8.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$portfolio_image = '';
if ( true === $show_featured_image ) {
	if ( has_post_thumbnail( $post_id ) ) {
		$portfolio_image = sprintf(
			'<div class="wpmozo_portfolio_slider_image_wrap">
				<a href="%1$s">%2$s</a>
			</div>',
			esc_url( $permalink ),
			get_the_post_thumbnail( $post_id, 'large', array( 'class' => 'wpmozo_portfolio_slider_image' ) )
		);
	}
}

// Post categories
$portfolio_cats = '';
$categories = wp_get_post_terms( $post_id, 'wpmozo-ae-portfolio-category' );
if ( ! empty( $categories ) && ! is_wp_error( $categories ) ) {
	$cat_links = array();
	foreach ( $categories as $category ) {
		$cat_links[] = sprintf(
			'<span class="wpmozo_portfolio_slider_cat"><a href="%1$s">%2$s</a></span>',
			esc_url( get_term_link( $category->term_id ) ),
			esc_html( $category->name )
		);
	}
	$portfolio_cats = sprintf(
		'<div class="wpmozo_portfolio_slider_categories">%1$s</div>',
		implode( ' ', $cat_links )
	);
}

// Title
$portfolio_title = '';
if ( true === $show_title ) {
	$portfolio_title = sprintf(
		'<h3 class="wpmozo_portfolio_slider_title"><a href="%1$s">%2$s</a></h3>',
		esc_url( $permalink ),
		esc_html( get_the_title( $post_id ) )
	);
}

// Content
$portfolio_content = '';
if ( true === $show_content ) {
	$raw_content_full = get_the_content();
	if ( ! empty( $raw_content_full ) ) {
		$portfolio_content = sprintf(
			'<div class="wpmozo_portfolio_slider_content">%1$s</div>',
			wp_kses_post( apply_filters( 'the_content', $raw_content_full ) )
		);
	}
}

// Excerpt
$portfolio_excerpt = '';
if ( true === $show_excerpt ) {
	$raw_content = get_the_excerpt( $post_id );
	if ( empty( $raw_content ) ) {
		$raw_content = get_the_content( null, false, $post_id );
	}
	$excerpt_text = $helpers::truncate_content( $raw_content, $excerpt_length );
	if ( ! empty( $excerpt_text ) ) {
		$portfolio_excerpt = sprintf(
			'<div class="wpmozo_portfolio_slider_excerpt">%1$s</div>',
			wp_kses_post( $excerpt_text )
		);
	}
}

// Buttons wrapper
$portfolio_buttons = '';
$buttons_html = '';
if ( true === $show_read_more ) {
	$buttons_html .= sprintf(
		'<a href="%1$s" class="wpmozo_portfolio_slider_btn wpmozo_portfolio_slider_readmore">%2$s</a>',
		esc_url( $permalink ),
		esc_html( $read_more_text )
	);
}
if ( true === $show_project_url ) {
	$project_url = get_post_meta( $post_id, 'wpmozo_ae_portfolio_project_url', true );
	if ( ! empty( $project_url ) ) {
		$buttons_html .= sprintf(
			'<a href="%1$s" class="wpmozo_portfolio_slider_btn wpmozo_portfolio_slider_projecturl" target="_blank" rel="noopener noreferrer">%2$s</a>',
			esc_url( $project_url ),
			esc_html( $project_url_text )
		);
	}
}
if ( ! empty( $buttons_html ) ) {
	$portfolio_buttons = sprintf(
		'<div class="wpmozo_portfolio_slider_button_wrap">%1$s</div>',
		$helpers::esc_previously( $buttons_html )
	);
}

// Content wrap
$content_wrapper = '';
if ( ! empty( $portfolio_cats ) || ! empty( $portfolio_title ) || ! empty( $portfolio_content ) || ! empty( $portfolio_excerpt ) || ! empty( $portfolio_buttons ) ) {
	$content_wrapper = sprintf(
		'<div class="wpmozo_portfolio_slider_content_wrap">%1$s%2$s%3$s%4$s%5$s</div>',
		$helpers::esc_previously( $portfolio_cats ),
		$helpers::esc_previously( $portfolio_title ),
		$helpers::esc_previously( $portfolio_content ),
		$helpers::esc_previously( $portfolio_excerpt ),
		$helpers::esc_previously( $portfolio_buttons )
	);
}

$portfolios .= sprintf(
	'<div class="wpmozo_portfolio_slider_item_card">
		%1$s%2$s
	</div>',
	$helpers::esc_previously( $portfolio_image ),
	$helpers::esc_previously( $content_wrapper )
);
