<?php
/**
 * The Template for displaying Layout 1
 * @author     Elicus Technologies <hello@elicus.com>
 * @link       https://www.elicus.com/
 * @copyright  2025 Elicus Technologies Private Limited
 * @version    1.1.0
 */

$post_title = sprintf(
	'<a href="%1$s">%2$s</a>',
	esc_url( get_permalink( $post_id ) ),
	esc_html( get_the_title( $post_id ) )
);

$seprator_icon = '';
if('scroll' === $attributes['tickerEffect'] && 'icon' === $attributes['separatorType']){
	$seprator_icon = sprintf('<span class="wpmozo_ticker_icon_separator"><i class="%s"></i></span>', $attributes['separatorIcon']);
}


$testimonials .= sprintf(
	'<a class="wpmozo_post_ticker_post_title" href="%1$s">%2$s</a>%3$s',
	esc_url( get_permalink( $post_id ) ),
	esc_html( get_the_title( $post_id ) ),
	$seprator_icon
);
