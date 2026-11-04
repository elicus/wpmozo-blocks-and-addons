<?php
/**
 * Pattern Library metadata: lite/pricing-three-plans (schema 1, docs/pattern-library/registry-and-contract.md in Lite).
 *
 * Pilot pattern (LPL-T): temporary design, to be replaced or refined. To change its design, copy,
 * images or thumbnail, see docs/pattern-library/pattern-authoring.md in the Lite repository.
 *
 * @package WPMozo_Blocks_And_Addons
 */

defined( 'ABSPATH' ) || exit;

return array(
	'schema'      => 1,
	'slug'        => 'pricing-three-plans',
	'revision'    => 1,
	'title'       => __( 'Three pricing plans', 'wpmozo-blocks-and-addons' ),
	'description' => __( 'Three plan cards with prices, feature lists and buttons, with the middle plan highlighted.', 'wpmozo-blocks-and-addons' ),
	'category'    => 'pricing',
	'tags'        => array( 'light' ),
	'keywords'    => array( __( 'pricing', 'wpmozo-blocks-and-addons' ), __( 'plans', 'wpmozo-blocks-and-addons' ), __( 'price', 'wpmozo-blocks-and-addons' ), __( 'subscription', 'wpmozo-blocks-and-addons' ), __( 'compare', 'wpmozo-blocks-and-addons' ) ),
	'access'      => 'free',
	'layout'      => 'full',
	'thumbnail'   => array(
		'file'   => 'previews/pricing-three-plans.1.webp',
		'width'  => 800,
		'height' => 600,
	),
	'preview'     => array(
		'file'   => 'previews/pricing-three-plans.1-full.webp',
		'width'  => 1200,
		'height' => 863,
	),
	// Provisional: set to the first plugin release that ships this pattern.
	'since'       => '1.10.0',
	'order'       => 20,
);
