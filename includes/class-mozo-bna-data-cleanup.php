<?php
/**
 * Data cleanup used on deactivation and on uninstall.
 *
 * This file must stay self-contained: uninstall.php loads it without the
 * rest of the plugin, so it may only use WordPress core functions and the
 * literal key names below (no WPMOZO_BNA_* constants, no plugin classes).
 *
 * NEVER delete here (user content that saved blocks depend on, or data
 * owned by WordPress core, the Pro add-on or other WPMozo plugins):
 * - Posts of `wpmozoae-team-member`, `wpmozoae-testimonial`, `wpmozoae-portfolio`.
 * - Their `wpmozo_ae_*` post meta.
 * - Terms of `wpmozo-ae-*-category` and their `*_children` options.
 * - Core per-user screen options (`meta-box-order_wpmozoae-*` etc.).
 * - Media Library files.
 * - Any Pro data (`wpmozo_bna_pro_*`, licence key, `attachment-category`,
 *   `wpmozo_attachment_link`, `wpmozo_category_thumbnail`) and any
 *   WPMozo Elementor add-on data.
 *
 * @link       https://elicus.com
 * @since      1.9.2
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Mozo_Bna_Data_Cleanup' ) ) {
	class Mozo_Bna_Data_Cleanup {

		/**
		 * Site option: 'yes' when the user chose to remove plugin settings
		 * when the plugin is deleted. Default 'no'.
		 */
		const DELETE_ON_UNINSTALL_OPTION = 'wpmozo_bna_delete_data_on_uninstall';

		/** Plugin settings option (per site). Same value as WPMOZO_BNA_OPTION. */
		const SETTINGS_OPTION = 'wpmozo-blocks-and-addons-option';

		/** core/preferences scope used by the icon picker's recent icons. */
		const PREFERENCES_SCOPE = 'wpmozo/icon-picker';

		/**
		 * Whether the user opted in to removing data on uninstall.
		 *
		 * @return bool
		 */
		public static function is_delete_on_uninstall() {
			return 'yes' === get_site_option( self::DELETE_ON_UNINSTALL_OPTION, 'no' );
		}

		/**
		 * Delete the per-site caches of the current site.
		 *
		 * Deleting `rewrite_rules` makes WordPress rebuild them on the next
		 * request, without this plugin's post types once it is inactive.
		 *
		 * @return void
		 */
		public static function clear_site_caches() {
			delete_option( 'rewrite_rules' );
		}

		/**
		 * Delete the plugin settings of the current site.
		 *
		 * @return void
		 */
		public static function remove_site_settings() {
			global $wpdb;

			delete_option( self::SETTINGS_OPTION );

			// Remove only our scope from each user's persisted editor
			// preferences for this site. The rest of the array belongs to
			// WordPress core and other plugins.
			$meta_key = $wpdb->get_blog_prefix() . 'persisted_preferences';
			// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
			$user_ids = $wpdb->get_col(
				$wpdb->prepare(
					"SELECT user_id FROM {$wpdb->usermeta} WHERE meta_key = %s AND meta_value LIKE %s",
					$meta_key,
					'%' . $wpdb->esc_like( self::PREFERENCES_SCOPE ) . '%'
				)
			);

			foreach ( $user_ids as $user_id ) {
				$preferences = get_user_meta( (int) $user_id, $meta_key, true );
				if ( ! is_array( $preferences ) || ! array_key_exists( self::PREFERENCES_SCOPE, $preferences ) ) {
					continue;
				}

				unset( $preferences[ self::PREFERENCES_SCOPE ] );

				// Keep core's `_modified` timestamp out of the emptiness check.
				$remaining = array_diff_key( $preferences, array( '_modified' => true ) );
				if ( empty( $remaining ) ) {
					delete_user_meta( (int) $user_id, $meta_key );
				} else {
					update_user_meta( (int) $user_id, $meta_key, $preferences );
				}
			}
		}

		/**
		 * Run a callback on every site (or just the current one on a single site).
		 *
		 * @param callable $callback Callback to run.
		 * @return void
		 */
		public static function for_each_site( $callback ) {
			if ( ! is_multisite() ) {
				call_user_func( $callback );
				return;
			}

			$offset = 0;
			$batch  = 100;
			do {
				$site_ids = get_sites(
					array(
						'fields' => 'ids',
						'number' => $batch,
						'offset' => $offset,
					)
				);
				foreach ( $site_ids as $site_id ) {
					switch_to_blog( $site_id );
					call_user_func( $callback );
					restore_current_blog();
				}
				$offset += $batch;
			} while ( count( $site_ids ) === $batch );
		}

		/**
		 * Full uninstall routine. Called from uninstall.php only.
		 *
		 * @return void
		 */
		public static function uninstall() {
			// Always: caches.
			self::for_each_site( array( __CLASS__, 'clear_site_caches' ) );

			// Opt-in only: settings and the gate itself.
			if ( ! self::is_delete_on_uninstall() ) {
				return;
			}

			self::for_each_site( array( __CLASS__, 'remove_site_settings' ) );
			delete_site_option( self::DELETE_ON_UNINSTALL_OPTION );
		}
	}
}
