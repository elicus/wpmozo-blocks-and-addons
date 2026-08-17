<?php
/**
 * The file that handles plugin's,
 * public side functionalities.
 * @link       https://elicus.com
 * @since      1.6.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use WPMOZO\BNA\Helpers\Mozo_Bna_Helpers;

class Mozo_Bna_Public {

	// Construction.
	public function __construct() {
		add_action( 'wp_ajax_wpmozo_bna_get_team_detail', array( __class__, 'wpmozo_bna_get_team_detail' ) );
		add_action( 'wp_ajax_nopriv_wpmozo_bna_get_team_detail', array( __class__, 'wpmozo_bna_get_team_detail' ) );
		add_action( 'wp_enqueue_scripts', array( __class__, 'wpmozo_inject_wrap_styles' ) );
		add_action('rest_api_init', function () {
			register_rest_route('wpmozo/v1', '/image-sizes', array(
				'methods'  => 'GET',
				'callback' => array(__class__,'wpmozo_get_image_sizes'),
				'permission_callback' => '__return_true',
			));
		});
	}

	public static function wpmozo_get_image_sizes() {
		global $_wp_additional_image_sizes;

		$sizes = [];

		// Default sizes
		foreach (get_intermediate_image_sizes() as $size) {
			$sizes[$size] = [
				'width'  => isset($_wp_additional_image_sizes[$size]['width']) ? $_wp_additional_image_sizes[$size]['width'] : get_option("{$size}_size_w"),
				'height' => isset($_wp_additional_image_sizes[$size]['height']) ? $_wp_additional_image_sizes[$size]['height'] : get_option("{$size}_size_h"),
				'crop'   => isset($_wp_additional_image_sizes[$size]['crop']) ? $_wp_additional_image_sizes[$size]['crop'] : false,
			];
		}

		return $sizes;
	}

	/**
	 * Get team details.
	 * @since  1.6.0
	 */
	public static function wpmozo_bna_get_team_detail() {
		if ( ! isset( $_POST['_ajax_nonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['_ajax_nonce'] ) ), 'wpmozo-team-slider-nonce' ) ) {
			return;
		}
		if ( ! isset( $_POST['props'] ) ) {
			return;
		}

		$helpers = new Mozo_Bna_Helpers();

		$defaults = array(
			'id'                   => 0,
			'show_designation'     => 'on',
			'show_content'         => 'on',
			'show_skills_bars'     => 'on',
			'show_social_icons'    => 'on',
			'show_image'           => 'on',
			'image_size'           => 'medium',
			'bar_layout'           => 'layout1',
			'use_stripes'          => 'off',
			'use_animated_stripes' => 'on',
			'popup_name_level'     => 'h2',
			'social_icons_target'  => 'same',
		);

		foreach ( $defaults as $key => $default ) {
			// phpcs:ignore ET.Sniffs.ValidatedSanitizedInput.InputNotSanitized
			${$key} = isset( $_POST['props'][ $key ] )
				? trim( sanitize_text_field( wp_unslash( $_POST['props'][ $key ] ) ) )
				: $default;
		}

		$id = intval( $id );
		if ( 0 === $id ) {
			return;
		}

		$valid_heading_tag = array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' );
		if ( ! in_array( $popup_name_level, $valid_heading_tag, true ) ) {
			$popup_name_level = esc_html( 'h2' );
		}

		// $member_content = get_the_content( null, false, $id );
		$member_content = apply_filters( 'the_content', get_post_field( 'post_content', $id ) );
		$values         = get_post_custom( $id );

		$meta_keys = [
			'wpmozo_ae_team_member_short_desc',
			'wpmozo_ae_team_member_designation',
			'wpmozo_ae_team_member_email',
			'wpmozo_ae_team_member_phone',
			'wpmozo_ae_team_member_website',
			'wpmozo_ae_team_member_facebook',
			'wpmozo_ae_team_member_twitter',
			'wpmozo_ae_team_member_linkedin',
			'wpmozo_ae_team_member_instagram',
			'wpmozo_ae_team_member_youtube',
			'wpmozo_ae_team_member_skills',
			'wpmozo_ae_team_member_skills_value',
		];
		foreach ( $meta_keys as $key ) {
			${$key} = isset( $values[$key][0] ) ? $values[$key][0] : '';
		}

		$thumbnail = '';
		if ( 'on' === $show_image ) {
			// Get image
			$thumbnail_image = get_the_post_thumbnail( $id, $image_size, array( 'class' => 'wpmozo_bna_team_member_image' ) );
			if ( ! empty( $thumbnail_image ) ) {
				$thumbnail = sprintf(
					'<div class="wpmozo_bna_team_member_image_wrapper">%1$s</div>',
					$helpers::esc_previously( $thumbnail_image )
				);
			}
		}

		// Social Icons.
		$social_icons = '';
		$linkTarget = '';
		if(isset($_POST['props']['social_icons_target']) && !empty($_POST['props']['social_icons_target'])){
			$linkTarget = $_POST['props']['social_icons_target'];
		}
		if ( 'on' === $show_social_icons ) {
			$social_icons .= $helpers::get_team_member_social( 'website', $wpmozo_ae_team_member_website, 'fas fa-globe', $linkTarget );
			$social_icons .= $helpers::get_team_member_social( 'facebook', $wpmozo_ae_team_member_facebook, 'fab fa-facebook-f', $linkTarget );
			$social_icons .= $helpers::get_team_member_social( 'twitter', $wpmozo_ae_team_member_twitter, 'fab fa-x-twitter', $linkTarget );
			$social_icons .= $helpers::get_team_member_social( 'linkedin', $wpmozo_ae_team_member_linkedin, 'fab fa-linkedin-in', $linkTarget );
			$social_icons .= $helpers::get_team_member_social( 'instagram', $wpmozo_ae_team_member_instagram, 'fab fa-instagram', $linkTarget );
			$social_icons .= $helpers::get_team_member_social( 'youtube', $wpmozo_ae_team_member_youtube, 'fab fa-youtube', $linkTarget );
			$social_icons .= $helpers::get_team_member_social( 'email', $wpmozo_ae_team_member_email, 'fas fa-envelope', $linkTarget );
			$social_icons .= $helpers::get_team_member_social( 'phone', $wpmozo_ae_team_member_phone, 'fas fa-phone', $linkTarget );
		}
		$wpmozo_ae_team_member_skills = explode(',',$wpmozo_ae_team_member_skills);
		$wpmozo_ae_team_member_skills_value = explode(',',$wpmozo_ae_team_member_skills_value);

		// Skill bars.
		$member_skills = [];

		foreach ($wpmozo_ae_team_member_skills as $index => $skill) {
			$member_skills[] = [
				'title' => $skill,
				'value' => $wpmozo_ae_team_member_skills_value[$index] ?? null
			];
		}
		$skill_bars    = '';
		if ( 'on' === $show_skills_bars && ! empty( $member_skills ) ) {
			foreach ( $member_skills as $key => $skill ) {
				if ( 'layout2' === $bar_layout ) {

					$filled_chunks = absint( round( $skill['value'] / 10 ) );
					$filled_chunks = $filled_chunks < 1 ? 1 : $filled_chunks;
					$empty_chunks  = 10 - $filled_chunks;

					$filled_chunks_output = '';
					for ( $c = 1; $c <= $filled_chunks; $c ++ ) {
						$filled_chunks_output .= '<div class="wpmozo_bna_bar_counter_chunks wpmozo_bna_bar_counter_filled_chunks"></div>';
					}
					$empty_chunks_output = '';
					if ( $empty_chunks > 0 ) {
						for ( $ec = 1; $ec <= $empty_chunks; $ec ++ ) {
							$empty_chunks_output .= '<div class="wpmozo_bna_bar_counter_chunks wpmozo_bna_bar_counter_empty_chunks"></div>';
						}
					}

					$skill_bars .= sprintf(
						'<div class="wpmozo_bna_bar_counter_wrapper_inner">
							<div class="wpmozo_bna_skill_name">%1$s</div>
							<div class="wpmozo_bna_bar_counter_bar_wrapper">
								%2$s %3$s
								<span class="wpmozo_bna_bar_counter_percent" data-percent="%4$s">%4$s</span>
							</div>
						</div>',
						esc_html( $skill['title'] ),
						$helpers::esc_previously( $filled_chunks_output ),
						$helpers::esc_previously( $empty_chunks_output ),
						intval( $skill['value'] ) . '%'
					);
				} else {
					$skill_bars .= sprintf(
						'<div class="wpmozo_bna_skill_bar_wrapper_inner">
							<div class="wpmozo_bna_skill_name">%1$s</div>
							<div class="wpmozo_bna_empty_bar">
								<div class="wpmozo_bna_filled_bar %3$s" data-skill="%2$s"></div>
							</div>
						</div>',
						esc_html( $skill['title'] ),
						intval( $skill['value'] ) . '%',
						'on' === $use_stripes ? ( 'on' === $use_animated_stripes ? 'wpmozo_bna_bar_counter_animated_striped_bar' : 'wpmozo_bna_bar_counter_striped_bar' ) : ''
					);
				}
			}
		}

		$wrapper_classes = 'wpmozo_bna_team_member_wrapper_lightbox';
		$wrapper_classes .= empty( $thumbnail ) ? ' wpmozo-bna-no-team-member' : '';

		$member_output = '<div id="wpmozo_bna_team_member_grid_' . esc_attr( $id ) . '" class="' . $wrapper_classes . '">';
		if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-team-slider/team-popup.php' ) ) {
			include WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/templates/block-team-slider/team-popup.php';
		}
		$member_output .= '</div>';

		wp_send_json_success( array(
			'html' => $member_output
		) );
		wp_die();
	}

	/**
	 * Frontend par saare wpmozo blocks ke wrapStyle ek saath inject karo.
	 */
	public static function wpmozo_inject_wrap_styles() {
		// Sirf frontend par
		if ( is_admin() ) {
			return;
		}

		global $post;
		if ( ! $post || ! has_blocks( $post->post_content ) ) {
			return;
		}

		$blocks      = parse_blocks( $post->post_content );
		$all_css     = self::wpmozo_collect_wrap_styles( $blocks );

		if ( empty( trim( $all_css ) ) ) {
			return;
		}

		// Plugin ke kisi bhi registered style handle ke saath attach karo
		wp_add_inline_style( 'wpmozo-blocks-and-addons-blocks-style', $all_css );
	}


	/**
	 * Recursively sabhi blocks (aur inner blocks) se wrapStyle collect karo.
	 *
	 * @param array $blocks parse_blocks() ka output
	 * @return string       Combined CSS string
	 */
	public static function wpmozo_collect_wrap_styles( array $blocks ): string {
		$css = '';

		foreach ( $blocks as $block ) {
			// Sirf wpmozo blocks
			if ( isset( $block['blockName'] ) && str_starts_with( $block['blockName'], 'wpmozo/' ) ) {
				$wrap_style = $block['attrs']['wrapStyle'] ?? '';
				if ( ! empty( trim( $wrap_style ) ) ) {
					$css .= $wrap_style . "\n";
				}
			}

			// InnerBlocks recursively handle karo
			if ( ! empty( $block['innerBlocks'] ) ) {
				$css .= self::wpmozo_collect_wrap_styles( $block['innerBlocks'] );
			}
		}

		return $css;
	}
}

return new Mozo_Bna_Public();
