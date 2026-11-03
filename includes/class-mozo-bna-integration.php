<?php
/**
 * Integration contract for add-ons such as WPMozo Blocks and Addons Pro.
 *
 * Add-ons call wpmozo_bna_integration()->supports() to detect features instead of
 * relying on version numbers or internal classes. The contract only grows: features
 * are added or their version raised, and existing ones keep their meaning.
 * See docs/pattern-library/registry-and-contract.md.
 *
 * @link       https://elicus.com
 * @since      n.e.x.t
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Mozo_Bna_Integration' ) ) {

	/**
	 * Public integration contract of the plugin.
	 *
	 * Available from the `wpmozo_bna_loaded` action (plugins_loaded, priority 20) onward.
	 *
	 * @since n.e.x.t
	 */
	final class Mozo_Bna_Integration {

		/**
		 * Contract revision. Raised whenever a feature is added or extended.
		 *
		 * @var int
		 */
		const CONTRACT_VERSION = 1;

		/**
		 * The single instance of the class.
		 *
		 * @var Mozo_Bna_Integration|null
		 */
		private static $instance = null;

		/**
		 * Main instance.
		 *
		 * @return Mozo_Bna_Integration
		 */
		public static function instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Plugin version.
		 *
		 * @return string
		 */
		public function version() {
			return WPMOZO_BNA_VERSION;
		}

		/**
		 * Contract revision.
		 *
		 * @return int
		 */
		public function contract_version() {
			return self::CONTRACT_VERSION;
		}

		/**
		 * Features this installation provides, as feature name => feature version.
		 *
		 * A feature's version only increases for backward-compatible additions;
		 * a breaking change gets a new feature name.
		 *
		 * @return array<string,int>
		 */
		public function features() {
			$features = array(
				'integration' => 1,
			);

			// Shared editor script: needs its build file.
			if ( file_exists( WPMOZO_BNA_PLUGIN_DIR_PATH . 'build/shared/index.asset.php' ) ) {
				$features['shared-js'] = 1;
			}

			return $features;
		}

		/**
		 * Whether a feature is available, at least at the given version.
		 *
		 * @param string $feature Feature name.
		 * @param int    $version Minimum feature version.
		 * @return bool
		 */
		public function supports( $feature, $version = 1 ) {
			$features = $this->features();
			$feature  = (string) $feature;

			return isset( $features[ $feature ] ) && $features[ $feature ] >= (int) $version;
		}
	}
}
