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
}?>

<div class="wpmozo_bna_panel_field wpmozo_bna_panel_licensefield">
	<div class="wpmozo_bna_panel_label_control">
		<label for="license_key">Enter License Key</label>
	</div>
	<div class="wpmozo_bna_panel_field_control">
		<input type="text" id="license_key" class="wpmozo_bna_panel_textfield" name="license_key" value="">
		<a href="#" id="wpmozo_bna_panel_deactivate_license" class="wpmozo_bna_panel_button wpmozo_bna_panel_button_deactivate disabled" data-id="/">Deactivate</a>
		<a href="#" id="wpmozo_bna_panel_activate_license" class="wpmozo_bna_panel_button wpmozo_bna_panel_button_activate" data-id="/">Activate</a>
		<span class="wpmozo_bna_panel_license_response"></span>
	</div>
	<span class="wpmozo_bna_panel_settings_info"></span>
</div>
