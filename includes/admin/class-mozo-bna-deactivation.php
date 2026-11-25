<?php
/**
 * "Deactivate options" page: lets the user choose, before deactivating,
 * whether the plugin settings are removed when the plugin is deleted.
 *
 * WordPress loads no plugin code once a plugin is inactive, so every
 * message has to be shown while the plugin is still active: on the
 * options page itself, and on a confirmation screen printed in the same
 * request that deactivates the plugin.
 *
 * The stock "Deactivate" link keeps working and is data-safe: uninstall.php
 * only removes settings when the user opted in here.
 *
 * While a plugin that requires this one (WPMozo Blocks and Addons Pro) is
 * active, WordPress disables the stock "Deactivate" link. This page follows
 * the same rule and refuses to deactivate.
 *
 * @link       https://elicus.com
 * @since      1.9.2
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes/admin
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

require_once WPMOZO_BNA_INC_DIR_PATH . 'class-mozo-bna-data-cleanup.php';

if ( ! class_exists( 'Mozo_Bna_Deactivation' ) ) {
	class Mozo_Bna_Deactivation {

		const PAGE_SLUG    = 'wpmozo-bna-deactivation';
		const POST_ACTION  = 'wpmozo_bna_deactivate';
		const NONCE_ACTION = 'wpmozo_bna_deactivate';
		const NONCE_NAME   = 'wpmozo_bna_deactivate_nonce';

		/**
		 * Register hooks.
		 */
		public function __construct() {
			add_action( 'admin_menu', array( __CLASS__, 'register_page' ) );
			add_action( 'network_admin_menu', array( __CLASS__, 'register_page' ) );
			add_action( 'admin_post_' . self::POST_ACTION, array( __CLASS__, 'handle_post' ) );

			add_filter( 'plugin_action_links_' . WPMOZO_BNA_BASENAME, array( __CLASS__, 'filter_action_links' ) );
			add_filter( 'network_admin_plugin_action_links_' . WPMOZO_BNA_BASENAME, array( __CLASS__, 'filter_action_links' ) );
		}

		/**
		 * Whether the plugin is network-activated.
		 *
		 * @return bool
		 */
		private static function is_network_wide() {
			if ( ! function_exists( 'is_plugin_active_for_network' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}
			return is_multisite() && is_plugin_active_for_network( WPMOZO_BNA_BASENAME );
		}

		/**
		 * Whether an active plugin requires this one (WP 6.5+).
		 *
		 * @return bool
		 */
		private static function has_active_dependents() {
			if ( ! class_exists( 'WP_Plugin_Dependencies' ) || ! method_exists( 'WP_Plugin_Dependencies', 'has_active_dependents' ) ) {
				return false;
			}
			if ( method_exists( 'WP_Plugin_Dependencies', 'initialize' ) ) {
				WP_Plugin_Dependencies::initialize();
			}
			return WP_Plugin_Dependencies::has_active_dependents( WPMOZO_BNA_BASENAME );
		}

		/**
		 * Capability needed to deactivate from this page.
		 *
		 * @return string
		 */
		private static function deactivate_cap() {
			return self::is_network_wide() ? 'manage_network_plugins' : 'activate_plugins';
		}

		/**
		 * Whether the current user may choose "remove on uninstall". Uninstall
		 * is network-wide on multisite, so only network admins may choose it.
		 *
		 * @return bool
		 */
		private static function can_choose_remove() {
			return is_multisite() ? current_user_can( 'manage_network_plugins' ) : current_user_can( 'activate_plugins' );
		}

		/**
		 * Plugins screen URL matching where the plugin is active.
		 *
		 * @return string
		 */
		private static function plugins_url() {
			return self::is_network_wide() ? network_admin_url( 'plugins.php' ) : admin_url( 'plugins.php' );
		}

		/**
		 * Options page URL matching where the plugin is active.
		 *
		 * @param array $args Extra query args.
		 * @return string
		 */
		private static function page_url( $args = array() ) {
			$base = self::is_network_wide() ? network_admin_url( 'admin.php' ) : admin_url( 'admin.php' );
			return add_query_arg( array_merge( array( 'page' => self::PAGE_SLUG ), $args ), $base );
		}

		/**
		 * Register the hidden options page.
		 */
		public static function register_page() {
			add_submenu_page(
				'', // Hidden from the menu.
				esc_html__( 'Before you deactivate', 'wpmozo-blocks-and-addons' ),
				esc_html__( 'WPMozo deactivation', 'wpmozo-blocks-and-addons' ),
				self::deactivate_cap(),
				self::PAGE_SLUG,
				array( __CLASS__, 'render_page' )
			);
		}

		/**
		 * Add "Deactivate options" before the stock "Deactivate" link.
		 *
		 * @param array $links Plugin row links.
		 * @return array
		 */
		public static function filter_action_links( $links ) {
			if ( ! current_user_can( self::deactivate_cap() ) || ! isset( $links['deactivate'] ) || self::has_active_dependents() ) {
				return $links;
			}

			$link = sprintf(
				'<a href="%1$s" aria-label="%2$s">%3$s</a>',
				esc_url( self::page_url() ),
				esc_attr__( 'Open WPMozo Blocks and Addons deactivation options', 'wpmozo-blocks-and-addons' ),
				esc_html__( 'Deactivate options', 'wpmozo-blocks-and-addons' )
			);

			return array_merge( array( 'wpmozo_bna_deactivate_options' => $link ), $links );
		}

		/**
		 * Render the options page.
		 */
		public static function render_page() {
			if ( ! current_user_can( self::deactivate_cap() ) ) {
				wp_die( esc_html__( 'You do not have permission to access this page.', 'wpmozo-blocks-and-addons' ) );
			}

			$plugins_url = self::plugins_url();
			?>
			<div class="wrap">
				<h1><?php esc_html_e( 'Before you deactivate WPMozo Blocks and Addons', 'wpmozo-blocks-and-addons' ); ?></h1>
			<?php

			if ( self::has_active_dependents() ) {
				?>
				<div class="notice notice-warning inline"><p><?php esc_html_e( 'WPMozo Blocks and Addons Pro requires this plugin and is still active. Deactivate WPMozo Blocks and Addons Pro first.', 'wpmozo-blocks-and-addons' ); ?></p></div>
				<p><a href="<?php echo esc_url( $plugins_url ); ?>" class="button"><?php esc_html_e( 'Back to Plugins', 'wpmozo-blocks-and-addons' ); ?></a></p>
				</div>
				<?php
				return;
			}

			$remove     = Mozo_Bna_Data_Cleanup::is_delete_on_uninstall();
			$can_remove = self::can_choose_remove();
			// phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Read-only flag set by our own redirect.
			$needs_confirm = ! empty( $_GET['wpmozo_bna_needs_confirmation'] );
			?>
				<?php if ( $needs_confirm ) : ?>
					<div class="notice notice-error"><p><?php esc_html_e( 'Please tick the confirmation checkbox to remove the plugin settings when the plugin is deleted.', 'wpmozo-blocks-and-addons' ); ?></p></div>
				<?php endif; ?>

				<p style="font-size:14px;max-width:720px">
					<?php esc_html_e( 'Choose what should happen to the plugin settings when you later delete this plugin. Your content is always kept: team member, testimonial and portfolio posts, their details and categories stay in your database because blocks in your pages use them.', 'wpmozo-blocks-and-addons' ); ?>
				</p>

				<form method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" style="max-width:720px;margin-top:24px">
					<input type="hidden" name="action" value="<?php echo esc_attr( self::POST_ACTION ); ?>" />
					<?php wp_nonce_field( self::NONCE_ACTION, self::NONCE_NAME ); ?>

					<div style="background:#fff;border:1px solid #dcdcde;border-radius:4px;padding:16px;margin-bottom:12px">
						<label style="display:block;font-weight:600;font-size:14px;margin-bottom:6px">
							<input type="radio" name="choice" value="keep" <?php checked( ! $remove || ! $can_remove ); ?> />
							<?php esc_html_e( 'Keep settings and deactivate', 'wpmozo-blocks-and-addons' ); ?>
							<span style="margin-left:6px;color:#00a32a;font-size:12px">(<?php esc_html_e( 'Recommended', 'wpmozo-blocks-and-addons' ); ?>)</span>
						</label>
						<p style="margin:0;color:#646970">
							<?php esc_html_e( 'Everything stays. If you reactivate or reinstall, your settings are still there.', 'wpmozo-blocks-and-addons' ); ?>
						</p>
					</div>

					<?php if ( $can_remove ) : ?>
						<div style="background:#fff;border:1px solid #d63638;border-radius:4px;padding:16px;margin-bottom:12px">
							<label style="display:block;font-weight:600;font-size:14px;margin-bottom:6px">
								<input type="radio" name="choice" value="remove_on_uninstall" <?php checked( $remove ); ?> />
								<?php esc_html_e( 'Remove settings when the plugin is deleted, and deactivate', 'wpmozo-blocks-and-addons' ); ?>
							</label>
							<p style="margin:0 0 8px;color:#646970">
								<?php esc_html_e( 'The plugin deactivates now. Nothing is removed until you delete it from the Plugins screen. At that moment the block on/off settings and the editor\'s recently used icons are removed. Your content is kept.', 'wpmozo-blocks-and-addons' ); ?>
							</p>
							<label style="display:flex;align-items:flex-start;gap:8px;color:#b32d2e">
								<input type="checkbox" name="confirm_remove" value="1" />
								<span><?php esc_html_e( 'I understand that deleting the plugin will remove its settings from this site.', 'wpmozo-blocks-and-addons' ); ?></span>
							</label>
						</div>
					<?php endif; ?>

					<div style="background:#fff;border:1px solid #dcdcde;border-radius:4px;padding:16px;margin-bottom:20px">
						<label style="display:block;font-weight:600;font-size:14px;margin-bottom:6px">
							<input type="radio" name="choice" value="cancel" />
							<?php esc_html_e( 'Cancel', 'wpmozo-blocks-and-addons' ); ?>
						</label>
						<p style="margin:0;color:#646970">
							<?php esc_html_e( 'Go back without changing anything. The plugin stays active.', 'wpmozo-blocks-and-addons' ); ?>
						</p>
					</div>

					<p>
						<button type="submit" class="button button-primary"><?php esc_html_e( 'Continue', 'wpmozo-blocks-and-addons' ); ?></button>
						<a href="<?php echo esc_url( $plugins_url ); ?>" class="button" style="margin-left:8px"><?php esc_html_e( 'Back to Plugins', 'wpmozo-blocks-and-addons' ); ?></a>
					</p>
				</form>
			</div>
			<?php
		}

		/**
		 * Handle the form post.
		 */
		public static function handle_post() {
			if ( ! current_user_can( self::deactivate_cap() ) ) {
				wp_die( esc_html__( 'You do not have permission to perform this action.', 'wpmozo-blocks-and-addons' ), '', array( 'response' => 403 ) );
			}

			check_admin_referer( self::NONCE_ACTION, self::NONCE_NAME );

			$choice = isset( $_POST['choice'] ) ? sanitize_key( wp_unslash( $_POST['choice'] ) ) : '';

			if ( in_array( $choice, array( 'keep', 'remove_on_uninstall' ), true ) && self::has_active_dependents() ) {
				wp_die(
					esc_html__( 'WPMozo Blocks and Addons Pro requires this plugin and is still active. Deactivate WPMozo Blocks and Addons Pro first.', 'wpmozo-blocks-and-addons' ),
					esc_html__( 'Plugin not deactivated', 'wpmozo-blocks-and-addons' ),
					array(
						'response'  => 409,
						'link_url'  => esc_url( self::plugins_url() ),
						'link_text' => esc_html__( 'Go to Plugins', 'wpmozo-blocks-and-addons' ),
					)
				);
			}

			if ( 'remove_on_uninstall' === $choice ) {
				if ( ! self::can_choose_remove() ) {
					wp_die( esc_html__( 'You do not have permission to perform this action.', 'wpmozo-blocks-and-addons' ), '', array( 'response' => 403 ) );
				}
				if ( empty( $_POST['confirm_remove'] ) ) {
					wp_safe_redirect( self::page_url( array( 'wpmozo_bna_needs_confirmation' => '1' ) ) );
					exit;
				}
				update_site_option( Mozo_Bna_Data_Cleanup::DELETE_ON_UNINSTALL_OPTION, 'yes' );
				self::deactivate_and_confirm( true );
			}

			if ( 'keep' === $choice ) {
				if ( self::can_choose_remove() ) {
					update_site_option( Mozo_Bna_Data_Cleanup::DELETE_ON_UNINSTALL_OPTION, 'no' );
				}
				self::deactivate_and_confirm( false );
			}

			// Cancel or unknown choice: change nothing.
			wp_safe_redirect( self::plugins_url() );
			exit;
		}

		/**
		 * Deactivate the plugin and print a confirmation screen in this same
		 * request, while the plugin's code is still loaded.
		 *
		 * @param bool $remove Whether the user chose to remove settings on uninstall.
		 */
		private static function deactivate_and_confirm( $remove ) {
			$network_wide = self::is_network_wide();
			$plugins_url  = self::plugins_url();

			if ( ! function_exists( 'deactivate_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}
			deactivate_plugins( WPMOZO_BNA_BASENAME, false, $network_wide );

			$message = '<h1>' . esc_html__( 'WPMozo Blocks and Addons was deactivated', 'wpmozo-blocks-and-addons' ) . '</h1>';
			if ( $remove ) {
				$message .= '<p><strong>' . esc_html__( 'Before you delete the plugin, please note:', 'wpmozo-blocks-and-addons' ) . '</strong> '
					. esc_html__( 'deleting it from the Plugins screen will remove the block on/off settings and the editor\'s recently used icons. Your content is kept.', 'wpmozo-blocks-and-addons' ) . '</p>'
					. '<p>' . esc_html__( 'Changed your mind? Reactivating the plugin cancels this choice.', 'wpmozo-blocks-and-addons' ) . '</p>';
			} else {
				$message .= '<p>' . esc_html__( 'Your settings and content were kept.', 'wpmozo-blocks-and-addons' ) . '</p>';
			}

			wp_die(
				wp_kses_post( $message ),
				esc_html__( 'Plugin deactivated', 'wpmozo-blocks-and-addons' ),
				array(
					'response'  => 200,
					'link_url'  => esc_url( $plugins_url ),
					'link_text' => esc_html__( 'Go to Plugins', 'wpmozo-blocks-and-addons' ),
				)
			);
		}
	}
}

return new Mozo_Bna_Deactivation();
