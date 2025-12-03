<?php
/**
 * The file that handles plugin's,
 * admin side functionality.
 *
 * @link       https://elicus.com
 * @since      1.1.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/admin
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Mozo_Bna_Admin {

	// Construction.
	public function __construct() {
		// Add custom metaboxes.
		add_action( 'add_meta_boxes', array( __class__, 'add_custom_metaboxes' ), 50 );

		// Save metaboxes.
		add_action( 'save_post', array( __class__, 'save_testimonial_meta_fields' ) );
		add_action( 'save_post', array( __class__, 'save_team_member_meta_fields' ) );
	}

	/**
	 * Add custom metaboxes.
	 *
	 * @since  1.1.0
	 */
	public static function add_custom_metaboxes() {

		if ( ! self::meta_box_exists( 'wpmozo_ae_testimonial_metabox', 'wpmozoae-testimonial', 'normal' ) ) {
			add_meta_box(
				'wpmozo_ae_testimonial_metabox',
				'<img class="wpmozo_ae_meta_image" src="'.WPMOZO_BNA_ASSETS_DIR_URL.'images/favicon-for-wpmozo-addons-for-blocks.png'.'"/>Testimonial Meta Fields',
				array( __class__, 'testimonial_metabox_callback' ),
				'wpmozoae-testimonial',
				'normal',
				'high'
			);
		}

		if ( ! self::meta_box_exists( 'wpmozo_ae_team_member_metabox', 'wpmozoae-team-member', 'normal' ) ) {
			add_meta_box(
				'wpmozo_ae_team_member_metabox',
				'<img class="wpmozo_ae_meta_image" src="'.WPMOZO_BNA_ASSETS_DIR_URL.'images/favicon-for-wpmozo-addons-for-blocks.png'.'"/>Team Member Information',
				array( __class__, 'team_member_metabox_callback' ),
				'wpmozoae-team-member',
				'normal',
				'high'
			);
		}
	}

	/**
	 * Testimonial metaboxes form/fields.
	 *
	 * @since  1.1.0
	 */
	public static function testimonial_metabox_callback() {
		require_once WPMOZO_BNA_INC_DIR_PATH . 'admin/metaboxes/mozo-bna-testimonial.php';
	}

	/**
	 * Testimonial metaboxes form/fields.
	 *
	 * @since  1.6.0
	 */
	public static function team_member_metabox_callback() {
		require_once WPMOZO_BNA_INC_DIR_PATH . 'admin/metaboxes/mozo-bna-team-member.php';
	}

	/**
	 * Save testimonial metaboxes.
	 *
	 * @since  1.1.0
	 */
	public static function save_testimonial_meta_fields( $post_id ) {
		// doing an auto save.
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		// verify nonce.
		if ( ! isset( $_POST['wpmozo_testimonial_metabox_nonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['wpmozo_testimonial_metabox_nonce'] ) ), 'wpmozo_metaboxes_nonce' ) ) {
			return;
		}
		// if current user can not edit the post.
		if ( ! current_user_can( 'edit_posts', $post_id ) ) {
			return;
		}

		$fields = array(
			'wpmozo_ae_testimonial_author_name',
			'wpmozo_ae_testimonial_author_email',
			'wpmozo_ae_testimonial_author_designation',
			'wpmozo_ae_testimonial_author_company',
			'wpmozo_ae_testimonial_author_company_url',
			'wpmozo_ae_testimonial_author_rating',
		);

		foreach ( $fields as $field ) {
			if ( isset( $_POST[ $field ] ) ) {
				${$field} = sanitize_text_field( wp_unslash( $_POST[ $field ] ) );
				update_post_meta( $post_id, $field, ${$field} );
			}
		}
	}

	/**
	 * Save team member metaboxes.
	 *
	 * @since  1.6.0
	 */
	public static function save_team_member_meta_fields( $post_id ) {
		// doing an auto save.
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}
		// verify nonce.
		if ( ! isset( $_POST['wpmozo_team_member_metabox_nonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['wpmozo_team_member_metabox_nonce'] ) ), 'wpmozo_metaboxes_nonce' ) ) {
			return;
		}
		// if current user can not edit the post.
		if ( ! current_user_can( 'edit_posts', $post_id ) ) {
			return;
		}

		$fields = array(
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
		);

		foreach ( $fields as $field ) {
			if ( isset( $_POST[ $field ] ) ) {
				${$field} = sanitize_text_field( wp_unslash( $_POST[ $field ] ) );
				update_post_meta( $post_id, $field, ${$field} );
			}
		}


		// Skill value.
		if ( ! empty( $_POST['wpmozo_ae_team_member_skills'] ) && is_array( $_POST['wpmozo_ae_team_member_skills'] ) ) {

			// Fetch existing skills from the database
			$existing_titles = get_post_meta( $post_id, 'wpmozo_ae_team_member_skills', true );
			$existing_values = get_post_meta( $post_id, 'wpmozo_ae_team_member_skills_value', true );

			// Parse them into arrays, if possible
			$existing_titles_array = !empty($existing_titles) ? array_map('trim', explode(',', $existing_titles)) : array();
			$existing_values_array = !empty($existing_values) ? array_map('trim', explode(',', $existing_values)) : array();

			// Prepare new arrays by appending $_POST values
			$skills_input = isset($_POST['wpmozo_ae_team_member_skills']) && is_array($_POST['wpmozo_ae_team_member_skills']) ? $_POST['wpmozo_ae_team_member_skills'] : array();

			$new_titles_array = array();
			$new_values_array = array();

			foreach ( $skills_input as $skill ) {
				if ( isset($skill['title']) && $skill['title'] !== '' ) {
					$new_titles_array[] = sanitize_text_field($skill['title']);
				}
				if ( isset($skill['value']) && $skill['value'] !== '' ) {
					$new_values_array[] = sanitize_text_field($skill['value']);
				}
			}

			// Merge existing with new (if you want to append; or you can replace entirely if that's the logic)
			$merged_titles = array_merge($existing_titles_array, $new_titles_array);
			$merged_values = array_merge($existing_values_array, $new_values_array);

			// Clean empty items
			$merged_titles = array_filter(array_map('trim', $merged_titles), function($val){ return $val !== ''; });
			$merged_values = array_filter(array_map('trim', $merged_values), function($val){ return $val !== ''; });

			if ( ! empty( $merged_titles ) ) {
				update_post_meta( $post_id, 'wpmozo_ae_team_member_skills', implode( ', ', $merged_titles ) );
			} else {
				delete_post_meta( $post_id, 'wpmozo_ae_team_member_skills' );
			}

			if ( ! empty( $merged_values ) ) {
				update_post_meta( $post_id, 'wpmozo_ae_team_member_skills_value', implode( ', ', $merged_values ) );
			} else {
				delete_post_meta( $post_id, 'wpmozo_ae_team_member_skills_value' );
			}
		} else {
			delete_post_meta( $post_id, 'wpmozo_ae_team_member_skills' );
			delete_post_meta( $post_id, 'wpmozo_ae_team_member_skills_value' );
		}
	}

	/**
	 * Check metabox exists.
	 *
	 * @since  1.6.1
	 */
	public static function meta_box_exists( $id, $screen = null, $context = 'advanced' ) {
		global $wp_meta_boxes;

		if ( ! isset( $screen ) ) {
			$screen = get_current_screen()->id;
		}

		return isset( $wp_meta_boxes[ $screen ][ $context ]['default'][ $id ] )
		       || isset( $wp_meta_boxes[ $screen ][ $context ]['high'][ $id ] )
		       || isset( $wp_meta_boxes[ $screen ][ $context ]['core'][ $id ] )
		       || isset( $wp_meta_boxes[ $screen ][ $context ]['low'][ $id ] );
	}
}

return new Mozo_Bna_Admin();
