<?php
/**
 * The Template for displaying Layout 1
 *
 * This template can be overridden by copying it to yourtheme/wpmozo/layouts/team-slider/layout1.php
 *
 * HOWEVER, on occasion wpmozo will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen.
 *
 * @link https://elicus.com
 * @since 1.0.0
 *
 * @package WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes/blocks/layouts/team-slider
 */

$social_icons = '';
if ( 'on' === $show_social_icon ) {
	if (
		'' !== $website_url ||
		'' !== $facebook_url ||
		'' !== $twitter_url ||
		'' !== $linkedin_url ||
		'' !== $instagram_url ||
		'' !== $youtube_url ||
		'' !== $email ||
		'' !== $phone_number
	) {
		$social_icons = sprintf(
			'<div class="wpmozo_team_social_wrapper">%1$s%2$s%3$s%4$s%5$s%6$s%7$s%8$s</div>',
			$website_url,
			$facebook_url,
			$twitter_url,
			$linkedin_url,
			$instagram_url,
			$youtube_url,
			$email,
			$phone_number
		);
	}
}

if ( '' !== $skill_bar ) {
	$skill_bar = sprintf(
		'<div class="wpmozo_skill_bar_wrapper">%1$s</div>',
		$skill_bar
	);
}

$output .= sprintf(
	'<div id="wpmozo_team_member_%7$s" class="wpmozo_team_member_card%8$s" data-link="%9$s" data-link_target="%10$s">
		<div class="wpmozo_team_image_wrapper">%1$s</div>
		<div class="wpmozo_team_content_wrapper">%2$s%3$s%4$s%5$s%6$s</div>
	</div>', 
	$member_image,
	$member_name,
	$designation,
	$short_description,
	$skill_bar,
	$social_icons,
	esc_attr( $post_id ),
	'on' === $enable_member_link ? ' wpmozo_team_link' : '',
	esc_url( get_permalink( $post_id ) ),
	'on' === $link_target ? '_blank' : '_self'
);