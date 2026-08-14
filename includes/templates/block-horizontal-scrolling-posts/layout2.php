<?php
/**
 * The Template for displaying Layout 2
 * @author     Elicus Technologies <hello@elicus.com>
 * @link       https://www.elicus.com/
 * @copyright  2025 Elicus Technologies Private Limited
 * @version    1.1.0
 */

$author_id       = get_post_field( 'post_author', $post_id );
$author_name     = get_the_author_meta( 'display_name', $author_id );
$author_link     = get_author_posts_url( $author_id );
$date            = '';
$comments_number = get_comments_number( $post_id );

if ( isset($attributes['showDate']) && !empty($attributes['showDate']) ) {
	$date = sprintf('
		<span class="published">%1$s</span>',
		esc_html(get_the_date( 'M j, Y', $post_id ))
	);
}

$post_tag = '';
if ( isset($attributes['showCategories']) && ! empty( $attributes['showCategories'] ) ) {
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
			'<div class="wpmozo_horizontal_scrolling_post_tag_wrapper">
				%1$s
				%2$s
			</div>',
			implode( '', $cat_tags ),
			$date
		);
	}
} else if(isset($attributes['showDate']) && ! empty( $attributes['showDate'] )) {
	$post_tag = sprintf(
		'<div class="wpmozo_horizontal_scrolling_post_tag_wrapper">
			%1$s
		</div>',
		$date
	);
}

$featured_image = '';
if ( ! empty( $attributes['showFeaturedImage'] ) && has_post_thumbnail( $post_id ) ) {
	$featured_image = get_the_post_thumbnail_url($post_id,'full');

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



$meta_parts = array();

if ( $attributes['showAuthorName'] ) {
	$meta_parts[] = sprintf(
		'<span class="author"><i class="fas fa-user"></i><a href="%1$s" rel="author">%2$s</a></span>',
		esc_url( $author_link ),
		esc_html( $author_name )
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

$show_featured_image = ! empty( $featured_image ) ? $featured_image : '';
$content = sprintf(
	'<div class="wpmozo_horizontal_scrolling_post_content_wrapper">
		%1$s
		%2$s
		%3$s
		%4$s
		%5$s
	</div>',
	$post_tag,
	(isset($attributes['showTtile']) && true === $attributes['showTtile']) ? $post_title : '',
	(isset($attributes['showExcerpt']) && true === $attributes['showExcerpt']) ? $post_excerpt : '',
	(isset($attributes['showButton']) && true === $attributes['showButton']) ? $button_html : '',
	$meta_html
);
$testimonials .= sprintf(
	'<div id="wpmozo_single_post_%1$s" class="wpmozo_horizontal_scrolling_post_wrapper">
		<div class="wpmozo_horizontal_scrolling_post_inner" style="background-image: url(%2$s);">
			%3$s
		</div>
	</div>',
	esc_attr( $post_id ),
	// Show categories and featured image if image is present, else show categories above content
	$show_featured_image,
	($post_tag || (isset($attributes['showTtile']) && true === $attributes['showTtile']) || (isset($attributes['showExcerpt']) && true === $attributes['showExcerpt']) || (isset($attributes['showButton']) && true === $attributes['showButton']) || $meta_html) ? $content : ''
);
