<?php
/**
 * The Template for displaying Layout 1
 *
 * @author     Elicus Technologies <hello@elicus.com>
 * @link       https://www.elicus.com/
 * @copyright  2025 Elicus Technologies Private Limited
 * @version    1.1.0
 */

$testimonial_author = '';
if ( ! empty( $author_name ) || ! empty( $author_designation ) || ! empty( $author_company )  ) {
	$testimonial_author = sprintf(
		'<div class="wpmozo_testimonial_author_details">%1$s%2$s%3$s</div>',
		! empty( $author_name ) ? wpmozo_esc_previously( $author_name ) : '',
		! empty( $author_designation ) ? wpmozo_esc_previously( $author_designation ) : '',
		! empty( $author_company ) ? wpmozo_esc_previously( $author_company ) : ''
	);
}

$testimonial_meta = '';
if ( ! empty( $author_image ) || ! empty( $testimonial_author ) ) {
	$testimonial_meta = sprintf(
		'<div class="wpmozo_testimonial_meta">%1$s%2$s</div>',
		! empty( $author_image ) ? wpmozo_esc_previously( $author_image ) : '',
		! empty( $testimonial_author ) ? wpmozo_esc_previously( $testimonial_author ) : ''
	);
}

$testimonials .= sprintf(
	'<div id="wpmozo_single_testimonial_%1$s" class="wpmozo_single_testimonial_card">
		<div class="wpmozo_testimonial_desc">%2$s%3$s%4$s</div>
		%5$s
		%6$s
	</div>',
	esc_attr( $post_id ),
	wpmozo_esc_previously( $opening_quote ),
	apply_filters( 'the_content', do_shortcode( get_the_content( null, false, $post_id ) ) ),
	wpmozo_esc_previously( $closing_quote ),
	! empty( $rating ) ? wpmozo_esc_previously( $rating ) : '',
	isset( $testimonial_meta ) ? wpmozo_esc_previously( $testimonial_meta ) : ''
);
