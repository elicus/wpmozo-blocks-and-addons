<?php
/**
 * The Template for displaying Layout 1
 *
 * @author     Elicus Technologies <hello@elicus.com>
 * @link       https://www.elicus.com/
 * @copyright  2025 Elicus Technologies Private Limited
 * @version    1.6.0
 */

// Attributes.
$name_level        = $attributes['nameLevel'] ?? 'h2';
$designation_level = $attributes['designationLevel'] ?? 'h4';
$show_designation  = boolval( $attributes['showDesignation'] ) ?? true;
$show_short_desc   = boolval( $attributes['showShortDesc'] ) ?? true;

// Post data.
$post_title        = get_the_title( $post_id );
$designation       = get_post_meta( $post_id, '_designation', true );
$short_description = get_post_meta( $post_id, '_short_description', true );

// Member name.
$member_name = '';
if ( ! empty( $post_title ) ) {
	$member_name = sprintf(
		'<div class="wpmozo_bna_team_member_name"><%2$s>%1$s</%2$s></div>',
		esc_html( $post_title ),
		esc_html( $name_level )
	);
}

// Designation.
$member_designation = '';
if ( true === $show_designation && ! empty( $designation ) ) {
	$member_designation = sprintf(
		'<div class="wpmozo_bna_team_member_designation"><%2$s>%1$s</%2$s></div>',
		esc_html( $designation ),
		esc_html( $designation_level )
	);
}

// Description.
$member_description = '';
if ( true === $show_short_desc && ! empty( $short_description ) ) {
	$member_description = sprintf(
		'<div class="wpmozo_bna_team_member_short_desc">%1$s</div>',
		esc_html( $short_description )
	);
}

// Skill Bars.
$member_skill_bars = '';
if ( '' !== $skill_bars ) {
	$member_skill_bars = sprintf(
		'<div class="wpmozo_bna_skill_bar_wrapper">%1$s</div>',
		wpmozo_esc_previously( $skill_bars )
	);
}

// Social Icons.
$member_social_icons = '';
if ( ! empty( $social_icons ) ) {
	$member_social_icons = sprintf(
		'<div class="wpmozo_bna_team_social_wrapper">%1$s</div>',
		wpmozo_esc_previously( $social_icons )
	);
}

// Final team member.
$team_members .= sprintf(
	'<div id="wpmozo_bna_team_member_%1$s" class="%9$s" %10$s>
		<div class="wpmozo_bna_team_image_wrapper">%2$s</div>
		<div class="wpmozo_bna_team_content_wrapper">
			%3$s %4$s %5$s %6$s
			<div class="wpmozo_bna_team_content_footer">
				%7$s %8$s
			</div>
		</div>
	</div>',
	esc_attr( $post_id ),
	wpmozo_esc_previously( $member_image ),
	wpmozo_esc_previously( $member_name ),
	wpmozo_esc_previously( $member_designation ),
	wpmozo_esc_previously( $member_description ),
	wpmozo_esc_previously( $member_skill_bars ),
	wpmozo_esc_previously( $link_button ),
	wpmozo_esc_previously( $member_social_icons ),
	implode( ' ', $class_list ),
	wpmozo_esc_previously( $item_attr_str )
);
