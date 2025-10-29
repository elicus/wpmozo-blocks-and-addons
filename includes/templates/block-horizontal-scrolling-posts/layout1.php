<?php
/**
 * The Template for displaying Layout 1
 * @author     Elicus Technologies <hello@elicus.com>
 * @link       https://www.elicus.com/
 * @copyright  2025 Elicus Technologies Private Limited
 * @version    1.1.0
 */
$post_tag = '';
if ( ! empty( $attributes['showCategories'] ) ) {
	$categories = get_the_category( $post_id );
	if ( ! empty( $categories ) && is_array( $categories ) ) {
		$cat_tags = array();
		foreach ( $categories as $category ) {
			$cat_tags[] = sprintf(
				'<span class="wpmozo_horizontal_scrolling_post_tag"><a href="%1$s">%2$s</a></span>',
				esc_url( get_category_link( $category->term_id ) ),
				esc_html( $category->name )
			);
		}
		$post_tag = sprintf(
			'<div class="wpmozo_horizontal_scrolling_post_tag_wrapper">%1$s</div>',
			implode( '', $cat_tags )
		);
	}
}

$featured_image = '';
if ( ! empty( $attributes['showFeaturedImage'] ) && has_post_thumbnail( $post_id ) ) {
	$featured_image = get_the_post_thumbnail( $post_id, 'large', array( 'class' => 'wpmozo_horizontal_scrolling_post_image' ) );
	$featuredImage  = sprintf( '<div class="wpmozo_horizontal_scrolling_post_image_wrapper">
					<a href="%1$s">%2$s</a>
			</div>',
		esc_url( get_permalink( $post_id ) ),
		$featured_image
	);
}

$post_title = sprintf(
	'<%1$s class="wpmozo_horizontal_scrolling_post_title"><a href="%2$s">%3$s</a></%1$s>',
	esc_attr( $attributes['nameHeadingLevel'] ),
	esc_url( get_permalink( $post_id ) ),
	esc_html( get_the_title( $post_id ) )
);

$post_excerpt = sprintf(
	'<div class="wpmozo_horizontal_scrolling_post_excerpt">%s</div>',
	wp_kses_post( wp_trim_words( get_the_excerpt( $post_id ), $attributes['excerptLength'], $more = null ) )
);

$author_id       = get_post_field( 'post_author', $post_id );
$author_name     = get_the_author_meta( 'display_name', $author_id );
$author_link     = get_author_posts_url( $author_id );
$date            = get_the_date( 'M j, Y', $post_id );
$comments_number = get_comments_number( $post_id );

$meta_parts = array();

if ( $attributes['showAuthorName'] ) {
	$meta_parts[] = sprintf(
		'<span class="author"><i class="fas fa-user"></i><a href="%1$s" rel="author">%2$s</a></span>',
		esc_url( $author_link ),
		esc_html( $author_name )
	);
}

if ( $attributes['showDate'] ) {
	$meta_parts[] = sprintf(
		'<span class="published"><i class="fas fa-calendar"></i>%s</span>',
		esc_html( $date )
	);
}

if ( $attributes['showCommentCount'] ) {
	$meta_parts[] = sprintf(
		'<i class="fas fa-comment"></i><span class="comments">%d</span>',
		intval( $comments_number )
	);
}

$meta_html = '';
if ( ! empty( $meta_parts ) ) {
	$meta_html = '<div class="wpmozo_horizontal_scrolling_post_meta_wrapper">' . implode( '<span class="wpmozo_post_meta_divider">|</span>', $meta_parts ) . '</div>';
}

$button_html = '';
if ( ! empty( $attributes['showButton'] ) ) {
	$buttonIcon = '';
	if ( ! empty( $attributes['showButtonIcon'] ) && ! empty( $attributes['icon'] ) ) {
		$buttonIcon = sprintf(
			'<i class="wpmozo-bna-icon %s"></i>',
			esc_attr( $attributes['icon'] )
		);
	}
	$button_text = ! empty( $attributes['buttonText'] ) ? esc_html( $attributes['buttonText'] ) : esc_html__( 'Read More', 'wpmozo-blocks-and-addons' );
	$button_classes = array( 'wpmozo-bna-button' );
	if ( ! empty( $attributes['showButtonIcon'] ) && ! empty( $attributes['showOnHover'] ) ) {
		$button_classes[] = 'wpmozo-icon-on-hover';
	}
	if ( ! empty( $attributes['showButtonIcon'] ) ) {
		if ( ! empty( $attributes['buttonIconPosition'] ) && $attributes['buttonMediaPosition'] === 'before' ) {
			$button_classes[] = 'wpmozo-icon-at-before';
		} else {
			$button_classes[] = 'wpmozo-icon-at-after';
		}
	}
	$button_html = sprintf(
		'<div class="wpmozo-bna-button-wrap">
			<a href="%1$s" class="%2$s">
				<span class="wpmozo-bna-btn-text">%3$s</span>
				%4$s
			</a>
		</div>',
		esc_url( get_permalink( $post_id ) ),
		esc_attr( implode( ' ', $button_classes ) ),
		$button_text,
		$buttonIcon
	);
}

$show_featured_image = ! empty( $featuredImage ) ? $featuredImage : '';

$testimonials .= sprintf(
	'<div id="wpmozo_single_post_%1$s" class="wpmozo_horizontal_scrolling_post_wrapper">
		%2$s
		<div class="wpmozo_horizontal_scrolling_post_content_wrapper">
			%3$s
			%4$s
			%5$s
			%6$s
		</div>
		%7$s
	</div>',
	esc_attr( $post_id ),
	// Show categories and featured image if image is present, else show categories above content
	! empty( $show_featured_image ) ? ( $post_tag . $show_featured_image ) : $post_tag,
	empty( $show_featured_image ) ? $post_tag : '',
	$post_title,
	$post_excerpt,
	$button_html,
	$meta_html
);
