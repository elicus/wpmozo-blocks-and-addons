<?php
/**
 * Pattern Library central map: categories.
 *
 * Category id => label and sort order. Add-ons may add categories; they can never override these.
 * See docs/pattern-library/pattern-authoring.md.
 *
 * @package WPMozo_Blocks_And_Addons
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'hero'           => array(
		'label' => __( 'Hero', 'wpmozo-blocks-and-addons' ),
		'order' => 10,
	),
	'features'       => array(
		'label' => __( 'Features', 'wpmozo-blocks-and-addons' ),
		'order' => 20,
	),
	'about'          => array(
		'label' => __( 'About & services', 'wpmozo-blocks-and-addons' ),
		'order' => 30,
	),
	'testimonials'   => array(
		'label' => __( 'Testimonials', 'wpmozo-blocks-and-addons' ),
		'order' => 40,
	),
	'team'           => array(
		'label' => __( 'Team', 'wpmozo-blocks-and-addons' ),
		'order' => 50,
	),
	'pricing'        => array(
		'label' => __( 'Pricing', 'wpmozo-blocks-and-addons' ),
		'order' => 60,
	),
	'call-to-action' => array(
		'label' => __( 'Call to action', 'wpmozo-blocks-and-addons' ),
		'order' => 70,
	),
	'faq'            => array(
		'label' => __( 'FAQ', 'wpmozo-blocks-and-addons' ),
		'order' => 80,
	),
	'contact'        => array(
		'label' => __( 'Contact', 'wpmozo-blocks-and-addons' ),
		'order' => 90,
	),
);
