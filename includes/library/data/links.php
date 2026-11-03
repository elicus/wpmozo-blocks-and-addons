<?php
/**
 * Pattern Library central map: links.
 *
 * Key => URL. Token: {{wpmozo:link:lite/<key>}}. Demo links point to '#' until replaced.
 * 'pro-upgrade' is where the Lite-to-Pro card leads. It stays empty until the final
 * URL is decided; while empty, the card shows no link.
 *
 * @package WPMozo_Blocks_And_Addons
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'pro-upgrade'    => '',
	'demo-primary'   => '#',
	'demo-secondary' => '#',
	'demo-contact'   => '#contact',
);
