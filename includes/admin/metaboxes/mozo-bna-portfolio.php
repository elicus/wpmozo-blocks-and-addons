<?php
/**
 * The file that handles portfolio's
 * metaboxes form fields.
 *
 * @link       https://elicus.com
 * @since      1.8.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/admin
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

global $post;

$project_url = get_post_meta( $post->ID, 'wpmozo_ae_portfolio_project_url', true );

wp_nonce_field( 'wpmozo_metaboxes_nonce', 'wpmozo_portfolio_metabox_nonce' );
?>
<div class="wpmozo_meta_fields">
	<label for="wpmozo_ae_portfolio_project_url">
		<?php esc_html_e( 'Project URL', 'wpmozo-blocks-and-addons' ); ?>
	</label>
	<input type="text" id="wpmozo_ae_portfolio_project_url" name="wpmozo_ae_portfolio_project_url" value="<?php echo esc_url( $project_url ); ?>" />
</div>
