<?php
/**
 * Pattern Library central map: tags.
 *
 * Controlled tag vocabulary used as filters. Tag id => label.
 *
 * @package WPMozo_Blocks_And_Addons
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'light'       => __( 'Light', 'wpmozo-blocks-and-addons' ),
	'dark'        => __( 'Dark', 'wpmozo-blocks-and-addons' ),
	'image-heavy' => __( 'Image heavy', 'wpmozo-blocks-and-addons' ),
);
