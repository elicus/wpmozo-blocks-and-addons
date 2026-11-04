<?php
/**
 * Pattern Library central map: links.
 *
 * Key => URL. Token: {{wpmozo:link:lite/<key>}}. Demo links point to '#' until replaced.
 * 'pro-upgrade' is where the Lite-to-Pro card leads. While empty, the card shows no link.
 * TEMPORARY: it points to a placeholder on the reserved example.com domain until the final
 * destination is confirmed. Replacing it is a release blocker (docs/pattern-library/handoff.md).
 *
 * @package WPMozo_Blocks_And_Addons
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'pro-upgrade'    => 'https://example.com/wpmozo-pro-upgrade-placeholder',
	'demo-primary'   => '#',
	'demo-secondary' => '#',
	'demo-contact'   => '#contact',
);
