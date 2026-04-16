<?php
/**
 * Settings main file.
 * 
 * @link       https://elicus.com
 * @since      1.8.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/panel
 */

// if this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>

<div class="wpmozo_bna_panel_wrapper <?php echo esc_attr($this->proactive)?>">
	<div class="wpmozo_bna_panel_header">
		<div class="wpmozo_bna_panel_logo">
			<img src="<?php echo esc_url( 'https://wpmozoblocks.com/wp-content/uploads/2025/07/wpmozo-blocks-logo.webp' ); ?>" />
		</div>
		<ul class="wpmozo_bna_panel_menu">
			<?php if (!defined('WPMOZO_BNA_PRO_VERSION')){ ?>
			<span class="wpmozo_bna_upgrade_to_pro"><a href="https://wpmozoblocks.com/pricing/" target="_blank">Upgrade to Pro</a></span>

			<?php }
			?>
			<li class="wpmozo_bna_panel_menu_item wpmozo_bna_panel_active_menu_item" data-href="#wpmozo_bna_panel_general_section">
				<?php echo esc_html__( 'General', 'wpmozo-blocks-and-addons' ); ?>
					
			</li>
			<?php
			/**
			 * Allow pro version to add more tabs to the menu.
			 *
			 * @since 1.8.0
			 */
			echo apply_filters( 'wpmozo_bna_settings_tabs', '' );
			?>
		</ul>
	</div>
	<?php //if ( !defined( 'WPMOZO_BNA_PRO_VERSION' ) ) { ?>
	<!-- <div class="wpmozo_bna_banner">
		<a href="https://wpmozo.com/black-friday#wpmz-bna-bf-sale" target="_blank">
			<img src="https://cdn.wpmozoblocks.com/wpmozo-blocks-and-addons/thumbnails/sale-banner/wpmozo-sale-banner.webp">
		</a>
	</div> -->
	<?php // } ?>
	<div class="wpmozo_bna_panel_section_wrapper" >
		
		<!-- Generatl tab. -->
		<div id="wpmozo_bna_panel_general_section" class="wpmozo_bna_panel_section wpmozo_bna_panel_active_section">
			<?php require_once plugin_dir_path( __FILE__ ) . 'partials/general.php'; ?>
		</div>

		<?php
		/**
		 * Allow Pro version to add more tab sections.
		 *
		 * @since 1.8.0
		 */
		do_action( 'wpmozo_bna_settings_tab_content' ); ?>

		<div class="wpmozo_bna_panel_ajax_processor wpmozo_bna_panel_loader">
			<div class="wpmozo_bna_panel_processor"></div>
		</div>
	</div>
</div>
