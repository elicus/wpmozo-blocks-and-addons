/**
 * Shared editor script (`wpmozo-blocks-and-addons-shared`).
 *
 * Loaded in every block editor, whichever blocks are disabled, so the globals that
 * add-ons read (`window.WPMozoBNAComponents`, `window.WPMozoBNAUtils`) always exist.
 * Block bundles keep setting the same globals as before.
 *
 * `window.WPMozoBNA` holds the contract details printed by PHP (contract version,
 * Lite version, features) plus references to those globals.
 */
import '../common/components';
import '../common/utils';

window.WPMozoBNA = window.WPMozoBNA || {};
Object.assign( window.WPMozoBNA, {
	components: window.WPMozoBNAComponents,
	utils: window.WPMozoBNAUtils,
} );
