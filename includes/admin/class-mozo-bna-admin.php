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
		add_action( 'add_meta_boxes', array( __class__, 'add_custom_metaboxes' ) );

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

		// Add Testimonial metaboxes.
		add_meta_box(
			'mozo_testimonial_metabox',
			esc_html__( 'Testimonial Meta Fields', 'divi-plus' ),
			array( __class__, 'testimonial_metabox_callback' ),
			'mozo-testimonial', 'normal', 'high'
		);

		// Add Team Member metaboxes.
		add_meta_box(
			'mozo_team_member_metabox',
			esc_html__( 'Team Member Meta Fields', 'divi-plus' ),
			array( __class__, 'team_member_metabox_callback' ),
			'mozo-team-member', 'normal', 'high'
		);
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
		if ( ! isset( $_POST['mozo_testimonial_metabox_nonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['mozo_testimonial_metabox_nonce'] ) ), 'mozo_metaboxes_nonce' ) ) {
			return;
		}
		// if current user can not edit the post.
		if ( ! current_user_can( 'edit_posts', $post_id ) ) {
			return;
		}

		$fields = array(
			'_author_name',
			'_author_email',
			'_author_designation',
			'_author_company',
			'_author_company_url',
			'_author_rating',
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
		if ( ! isset( $_POST['mozo_team_member_metabox_nonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['mozo_team_member_metabox_nonce'] ) ), 'mozo_metaboxes_nonce' ) ) {
			return;
		}
		// if current user can not edit the post.
		if ( ! current_user_can( 'edit_posts', $post_id ) ) {
			return;
		}

		$fields = array(
			'_short_description',
			'_designation',
			'_email_address',
			'_phone_number',
			'_website',
			'_facebook',
			'_twitter',
			'_linkedin',
			'_instagram',
			'_youtube',
		);

		foreach ( $fields as $field ) {
			if ( isset( $_POST[ $field ] ) ) {
				${$field} = sanitize_text_field( wp_unslash( $_POST[ $field ] ) );
				update_post_meta( $post_id, $field, ${$field} );
			}
		}

		// Skill value.
		if ( ! empty( $_POST['_member_skills'] ) && is_array( $_POST['_member_skills'] ) ) {
			$skills = array_map( function( $row ) {
				return [
					'title' => sanitize_text_field( $row['title'] ?? '' ),
					'value' => sanitize_text_field( $row['value'] ?? '' ),
				];
			}, $_POST['_member_skills'] );

			// Remove rows where both title and value are empty.
			$skills = array_filter( $skills, function( $row ) {
				return ! ( $row['title'] === '' && $row['value'] === '' );
			} );

			if ( ! empty( $skills ) ) {
				update_post_meta( $post_id, '_member_skills', $skills );
			} else {
				delete_post_meta( $post_id, '_member_skills' );
			}
		} else {
			delete_post_meta( $post_id, '_member_skills' );
		}
	}
}

return new Mozo_Bna_Admin();
