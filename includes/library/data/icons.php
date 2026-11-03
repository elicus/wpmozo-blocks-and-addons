<?php
/**
 * Pattern Library central map: icons.
 *
 * Semantic key => icon value as WPMozo blocks store it (Font Awesome classes today).
 * Token: {{wpmozo:icon:lite/<key>}}. Switching icon sets later changes only this file.
 *
 * @package WPMozo_Blocks_And_Addons
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'check'       => 'fas fa-check',
	'star'        => 'fas fa-star',
	'arrow-right' => 'fas fa-arrow-right',
	'phone'       => 'fas fa-phone',
	'email'       => 'fas fa-envelope',
	'location'    => 'fas fa-location-dot',
);
