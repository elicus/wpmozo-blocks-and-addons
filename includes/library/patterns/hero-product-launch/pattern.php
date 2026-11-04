<?php
/**
 * Pattern Library metadata: lite/hero-product-launch (schema 1, docs/pattern-library/registry-and-contract.md in Lite).
 *
 * Pilot pattern (LPL-T): temporary design, to be replaced or refined. To change its design, copy,
 * images or thumbnail, see docs/pattern-library/pattern-authoring.md in the Lite repository.
 *
 * @package WPMozo_Blocks_And_Addons
 */

defined( 'ABSPATH' ) || exit;

return array(
	'schema'      => 1,
	'slug'        => 'hero-product-launch',
	'revision'    => 1,
	'title'       => __( 'Product launch hero', 'wpmozo-blocks-and-addons' ),
	'description' => __( 'Two-column launch hero with a stacked headline, two buttons, a star rating and a product illustration.', 'wpmozo-blocks-and-addons' ),
	'category'    => 'hero',
	'tags'        => array( 'light', 'image-heavy' ),
	'keywords'    => array( __( 'hero', 'wpmozo-blocks-and-addons' ), __( 'launch', 'wpmozo-blocks-and-addons' ), __( 'product', 'wpmozo-blocks-and-addons' ), __( 'saas', 'wpmozo-blocks-and-addons' ), __( 'header', 'wpmozo-blocks-and-addons' ) ),
	'access'      => 'free',
	'layout'      => 'full',
	'thumbnail'   => array(
		'file'   => 'previews/hero-product-launch.1.webp',
		'width'  => 800,
		'height' => 600,
	),
	'preview'     => array(
		'file'   => 'previews/hero-product-launch.1-full.webp',
		'width'  => 1200,
		'height' => 677,
	),
	// Provisional: set to the first plugin release that ships this pattern.
	'since'       => '1.10.0',
	'order'       => 10,
);
