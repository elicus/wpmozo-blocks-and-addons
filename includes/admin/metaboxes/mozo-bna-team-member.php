<?php
/**
 * The file that handles testimonial's
 * metaboxes form fields.
 *
 * @link       https://elicus.com
 * @since      1.6.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/admin
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

global $post;

$short_description = get_post_meta( $post->ID, '_short_description', true );
$designation       = get_post_meta( $post->ID, '_designation', true );
$email_address     = get_post_meta( $post->ID, '_email_address', true );
$phone_number      = get_post_meta( $post->ID, '_phone_number', true );
$website           = get_post_meta( $post->ID, '_website', true );
$facebook          = get_post_meta( $post->ID, '_facebook', true );
$twitter           = get_post_meta( $post->ID, '_twitter', true );
$linkedin          = get_post_meta( $post->ID, '_linkedin', true );
$instagram         = get_post_meta( $post->ID, '_instagram', true );
$youtube           = get_post_meta( $post->ID, '_youtube', true );
$skills            = get_post_meta( $post->ID, '_member_skills', true );

wp_nonce_field( 'mozo_metaboxes_nonce', 'mozo_team_member_metabox_nonce' );
?>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_short_description">
		<?php esc_html_e( 'Short Description', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<textarea id="wpmozo_member_short_description" name="_short_description"><?php echo esc_textarea( $short_description ); ?></textarea>
	<!-- <span class="info"> -->
		<?php //esc_html_e( 'Support for few HTML tags like h1,h2,h3,h4,h5,h6,p,ul,ol,li,span,strong,b,a,br', 'wpmozo-blocks-and-addons' ); ?>
	<!-- </span> -->
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_designation">
		<?php esc_html_e( 'Designation', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_designation" name="_designation" value="<?php echo esc_attr( $designation ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_email_address">
		<?php esc_html_e( 'Email Address', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_email_address" name="_email_address" value="<?php echo esc_attr( $email_address ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_phone_number">
		<?php esc_html_e( 'Phone Number', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_phone_number" name="_phone_number" value="<?php echo esc_attr( $phone_number ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_website">
		<?php esc_html_e( 'Website URL', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_website" name="_website" value="<?php echo esc_attr( $website ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_facebook">
		<?php esc_html_e( 'Facebook URL', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_facebook" name="_facebook" value="<?php echo esc_attr( $facebook ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_twitter">
		<?php esc_html_e( 'Twitter URL', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_twitter" name="_twitter" value="<?php echo esc_attr( $twitter ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_linkedin">
		<?php esc_html_e( 'LinkedIn URL', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_linkedin" name="_linkedin" value="<?php echo esc_attr( $linkedin ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_instagram">
		<?php esc_html_e( 'Instagram URL', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_instagram" name="_instagram" value="<?php echo esc_attr( $instagram ); ?>" />
</div>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_member_youtube">
		<?php esc_html_e( 'YouTube URL', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_member_youtube" name="_youtube" value="<?php echo esc_attr( $youtube ); ?>" />
</div>

<div class="wpmozo_meta_fields">
	<label><?php esc_html_e( 'Skills', 'wpmozo-blocks-and-addons' ); ?></label>
	<div class="wpmozo_bna_repeator_meta_fields">
		<?php
		$lastI = 0;
		if ( is_array( $skills ) && ! empty( array_filter( $skills ) ) ) {
			for ( $i=0; $i < count($skills); $i++ ) { ?>
				<div class="wpmozo_bna_repeator_meta_field_row">
					<div class="wpmozo_bna_repeator_meta_field">
						<input type="text" name="_member_skills[<?php echo $i; ?>][title]" value="<?php echo esc_attr( $skills[$i]['title'] ); ?>" placeholder="<?php esc_html_e( 'Skill', 'wpmozo-blocks-and-addons' ); ?>" />
						<input type="number" name="_member_skills[<?php echo $i; ?>][value]" value="<?php echo esc_attr( $skills[$i]['value'] ); ?>" placeholder="<?php esc_html_e( 'Skill Value Between 0 to 100', 'wpmozo-blocks-and-addons' ); ?>" step="1" min="0" max="100" />
					</div>
					<p class="wpmozo_bna_repeator_meta_field_row_controls">
						<span class="wpmozo_bna_repeator_meta_field_add_row_control wpmozo_bna_repeator_meta_field_remove_row">-</span>
						<span class="wpmozo_bna_repeator_meta_field_add_row_control wpmozo_bna_repeator_meta_field_add_row">+</span>
					</p>
				</div>
				<?php
				$lastI = $i + 1;
			}
		} ?>
		<div class="wpmozo_bna_repeator_meta_field_row">
			<div class="wpmozo_bna_repeator_meta_field">
				<input type="text" name="_member_skills[<?php echo $lastI; ?>][title]" placeholder="<?php esc_html_e( 'Skill', 'wpmozo-blocks-and-addons' ); ?>" />
				<input type="number" name="_member_skills[<?php echo $lastI; ?>][value]" placeholder="<?php esc_html_e( 'Skill Value Between 0 to 100', 'wpmozo-blocks-and-addons' ); ?>" step="1" min="0" max="100" />
			</div>
			<p class="wpmozo_bna_repeator_meta_field_row_controls">
				<span class="wpmozo_bna_repeator_meta_field_add_row_control wpmozo_bna_repeator_meta_field_remove_row">-</span>
				<span class="wpmozo_bna_repeator_meta_field_add_row_control wpmozo_bna_repeator_meta_field_add_row">+</span>
			</p>
		</div>
	</div> 
</div>
<?php
