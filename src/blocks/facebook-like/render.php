<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Server-side rendering for Facebook Embed block.
 *
 * @param array $attributes Block attributes.
 * @return string
 */
if ( ! function_exists( 'facebook_embed_render_callback' ) ) {
	function facebook_embed_render_callback( $attributes ) {
		$url   = isset( $attributes['url'] ) ? esc_url( $attributes['url'] ) : '';
		$layout = isset( $attributes['layout'] ) ? sanitize_text_field( $attributes['layout'] ) : 'standard';
		$size   = isset( $attributes['size'] ) ? sanitize_text_field( $attributes['size'] ) : 'small';
		$share  = ! empty( $attributes['share'] ) ? 'true' : 'false';

		if ( empty( $url ) ) {
			return '<p>' . esc_html__( 'No Facebook URL provided.', 'wpmozo-blocks-and-addons' ) . '</p>';
		}

		if ( ! preg_match( '#^https?://(www\.)?facebook\.com/.+#i', $url ) ) {
			return '<p>' . esc_html__( 'Invalid Facebook URL.', 'wpmozo-blocks-and-addons' ) . '</p>';
		}

		$output  = '<div class="wpmozo-fb-like-embed">';
		$output .= '<div class="fb-like"'
		           . ' data-href="' . esc_attr( $url ) . '"'
		           . ' data-layout="' . esc_attr( $layout ) . '"'
		           . ' data-action="like"'
		           . ' data-size="' . esc_attr( $size ) . '"'
		           . ' data-share="' . esc_attr( $share ) . '"'
		           . '></div>';
		$output .= '</div>';

		return $output;
}
}

echo facebook_embed_render_callback( $attributes );
