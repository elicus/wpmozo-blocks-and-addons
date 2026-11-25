<?php
/**
 * Runs when the plugin is deleted from the Plugins screen. NOT called on
 * deactivation.
 *
 * Always clears the cached rewrite rules on every site of a network, so the
 * plugin's post type URLs are not kept.
 *
 * Only when the user chose "Remove settings" in Deactivate options (site
 * option `wpmozo_bna_delete_data_on_uninstall` = 'yes', default 'no'), it
 * also deletes the plugin settings option and the icon picker's recent
 * icons from each user's editor preferences, then that site option.
 *
 * Content is never deleted (see the list in
 * includes/class-mozo-bna-data-cleanup.php), and data of WPMozo Blocks and
 * Addons Pro is never touched. The plugin's main file is not loaded here.
 *
 * @link       https://elicus.com
 * @since      1.9.1
 * @package    WPMozo_Blocks_And_Addons
 */

defined( 'WP_UNINSTALL_PLUGIN' ) || exit;

require_once __DIR__ . '/includes/class-mozo-bna-data-cleanup.php';

Mozo_Bna_Data_Cleanup::uninstall();
