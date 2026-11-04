<?php
/**
 * Pattern Library central map: repeated demo text.
 *
 * Key => text. Token: {{wpmozo:text:lite/<key>}}. Plain text only: no quotes,
 * ampersands or markup (the value is used unchanged in block JSON and HTML).
 *
 * @package WPMozo_Blocks_And_Addons
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'company' => 'Northwind Studio',
	'product' => 'Northwind',
	'email'   => 'hello@example.com',
	'phone'   => '+1 (555) 010-0100',
	'address' => '123 Example Street, Springfield',
);
