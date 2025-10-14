<?php
/**
 * The Template for displaying Team member detail pupup.
 *
 * @author     Elicus Technologies <hello@elicus.com>
 * @link       https://www.elicus.com/
 * @copyright  2025 Elicus Technologies Private Limited
 * @version    1.6.0
 */

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;

$helpers = new Mozo_Bna_Helpers();

// Add image html.
$member_output .= $helpers::esc_previously( $thumbnail );

$member_output .= '<div class="wpmozo_bna_team_member_content_wrapper">';

	// Member name.
	$member_output .= sprintf(
		'<%1$s class="wpmozo_bna_team_member_name">%2$s</%1$s>',
		esc_html( $popup_name_level ),
		esc_html( get_the_title( $id ) )
	);

	// Member degination.
	if ( 'on' === $show_designation ) {
		$member_output .= sprintf(
			'<div class="wpmozo_bna_team_member_designation">%1$s</div>',
			esc_html( $designation )
		);
	}

	// Social Icons.
	if ( 'on' === $show_social_icons && ! empty( $social_icons ) ) {
		$member_output .= sprintf(
			'<div class="wpmozo_bna_team_social_wrapper">%1$s</div>',
			$helpers::esc_previously( $social_icons )
		);
	}

	// Content.
	if ( 'on' === $show_content && ! empty( $member_content ) ) {
		$member_output .= sprintf(
			'<div class="wpmozo_bna_team_member_description">%1$s</div>',
			wp_kses_post( $member_content )
		);
	}

	// Skill bars.
	if ( 'on' === $show_skills_bars && ! empty( $skill_bars ) ) {
		$member_output .= sprintf(
			'<div class="wpmozo_bna_skill_bar_wrapper">%1$s</div>',
			$helpers::esc_previously( $skill_bars )
		);
	}

$member_output .= '</div>';
