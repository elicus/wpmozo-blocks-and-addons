<?php
/**
 * The file that handles testimonial's
 * metaboxes form fields.
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

global $post;

$author_name        = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_name', true );
$author_email       = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_email', true );
$author_designation = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_designation', true );
$author_company     = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_company', true );
$author_company_url = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_company_url', true );
$author_rating      = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_rating', true );
$author_rating      = $author_rating ? $author_rating : '5';

wp_nonce_field( 'wpmozo_metaboxes_nonce', 'wpmozo_testimonial_metabox_nonce' );

// Getting ratings.
$ratings = array( '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5' );
?>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_testimonial_author_name">
		<?php esc_html_e( 'Author Name', 'divi-plus' ); ?>
	</label>
	<input type="text" id="wpmozo_ae_testimonial_author_name" name="wpmozo_ae_testimonial_author_name" value="<?php echo esc_attr( $author_name ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_testimonial_author_email">
		<?php esc_html_e( 'Author Email', 'divi-plus' ); ?>
	</label>
	<input type="email" id="wpmozo_ae_testimonial_author_email" name="wpmozo_ae_testimonial_author_email" value="<?php echo esc_attr( $author_email ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_testimonial_author_designation">
		<?php esc_html_e( 'Author Designation', 'divi-plus' ); ?>
	</label>
	<input type="text" id="wpmozo_ae_testimonial_author_designation" name="wpmozo_ae_testimonial_author_designation" value="<?php echo esc_attr( $author_designation ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_testimonial_author_company">
		<?php esc_html_e( 'Author Company', 'divi-plus' ); ?>
	</label>
	<input type="text" id="wpmozo_ae_testimonial_author_company" name="wpmozo_ae_testimonial_author_company" value="<?php echo esc_attr( $author_company ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_testimonial_author_company_url">
		<?php esc_html_e( 'Author Company Url', 'divi-plus' ); ?>
	</label>
	<input type="text" id="wpmozo_ae_testimonial_author_company_url" name="wpmozo_ae_testimonial_author_company_url" value="<?php echo esc_attr( $author_company_url ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_testimonial_author_rating">
		<?php esc_html_e( 'Author Rating', 'divi-plus' ); ?>
	</label>
	<select id="wpmozo_ae_testimonial_author_rating" name="wpmozo_ae_testimonial_author_rating">
		<?php
		foreach( $ratings as $rating ) { ?>
			<option value="<?php echo esc_attr( $rating ); ?>" <?php selected( $author_rating, esc_attr( $rating ) ); ?>><?php echo esc_html( $rating ); ?></option>
		<?php } ?>
	</select>
</div>
<?php
