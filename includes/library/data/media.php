<?php
/**
 * Pattern Library central map: shared demo media.
 *
 * Key => file in includes/library/media/. Token: {{wpmozo:media:lite/<key>}}.
 * These images end up in saved pages, so a released file is permanent: never rename
 * or delete it. Publish a changed image under a new revision and point the key at it.
 *
 * Entry format: 'team-portrait-1' => array( 'file' => 'media/team-portrait-1.1.webp', 'width' => 800, 'height' => 800, 'alt' => '…' ).
 * 'alt' is the reference text for patterns that use the image (alt text is written into the content).
 * Sources of original illustrations: tools/pattern-library/art/ (docs/pattern-library/pattern-authoring.md).
 *
 * @package WPMozo_Blocks_And_Addons
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'hero-dashboard' => array(
		'file'   => 'media/hero-dashboard.1.webp',
		'width'  => 1200,
		'height' => 1000,
		'alt'    => 'Analytics dashboard with revenue, active users, conversion and a rising sign-ups chart',
	),
);
