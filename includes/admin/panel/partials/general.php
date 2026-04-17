<?php
/**
 * Settings main file.
 *
 * @link       https://elicus.com
 * @since      1.8.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/panel
 */

// if this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Get blocks.
$blocks = glob( WPMOZO_BNA_PLUGIN_DIR_PATH . 'build/blocks/*', GLOB_ONLYDIR );
if ( is_array( $blocks ) && ! empty( $blocks ) ) {
	$plugin_option = get_option( WPMOZO_BNA_OPTION );
	$blocks        = array_map( 'basename', $blocks );
	$inactives     = ! empty( $plugin_option['wpmozo_inactive_widgets'] ) ? array_diff( explode( ',', $plugin_option['wpmozo_inactive_widgets'] ), $blocks ) : array();
	$blocks_list = array();
	foreach ( $blocks as $block ) {
		// Skip child or item blocks.
		if ( strpos( $block, '-child' ) !== false || strpos( $block, '-item' ) !== false ) {
			continue;
		}

		$mod                 = trim( preg_replace( '/[A-Z]([A-Z](?![a-z]))*/', ' $0', $block ) );
		$key                 = sanitize_text_field( $mod );
		$blocks_list[ $key ] = esc_html( str_replace( '-', ' ', $mod ) );
	}

	// Pro blocks list.
	$pro_blocks = array(
		'advanced-tabs'           => 'Advanced Tabs',
		'ajax-search'             => 'AJAX Search',
		'blog-slider'             => 'Blog Slider',
		'dynamic-gallery'         => 'Product Carousel',
		'image-hotspot'           => 'Image Hotspot',
		'instagram-feed'          => 'Instagram Feed',
		'instagram-feed-caroudel' => 'Instagram Feed Carousel',
		'modal-popup'             => 'Modal Popup',
		'team-grid'               => 'Team Grid',
		'timeline'                => 'Timeline',
		'woo-product-carousel'    => 'Woo Product Carousel',
		'woo-product-categories'  => 'Woo Product Categories',
		'woo-product-gallery'     => 'Woo Product Gallery',
		'woo-product-grid'        => 'Woo Product Grid',
		'woo-product-accordion'   => 'Woo Product Accordion',
	);

	$pro_blocks  = apply_filters( 'wpmozo_bna_add_pro_blocks_to_panel', $pro_blocks );
	$blocks_list = array_merge( $blocks_list, array_unique( $pro_blocks )  ) ;
	ksort( $blocks_list );

	$atts = array(
		'label'            => esc_html__( 'Blocks', 'wpmozo-blocks-and-addons' ),
		'name'             => 'wpmozo_active_blocks',
		'widgets'          => $blocks,
		'inactive_name'    => 'wpmozo_inactive_blocks',
		'inactive_default' => $inactives,
		'options'          => $blocks_list,
		'pros'             => $pro_blocks,
		'info'             => esc_html__( 'Mark the blocks you want to display in the editor.', 'wpmozo-blocks-and-addons' ),
	);
	$allowed_tags = array(
		'div'   => array( 'class' => array() ),
		'label' => array( 'for'   => array() ),
		'span'  => array( 'class' => array() ),
		'input' => array(
			'type'     => array(),
			'class'    => array(),
			'id'       => array(),
			'value'    => array(),
			'name'     => array(),
			'checked'  => array(),
			'disabled' => array(),
		),
	);
	echo wp_kses( $this->settings->render( 'multiple_checkbox', $atts ), $allowed_tags );
} ?>

<div class="wpmozo_bna_panel_save_button">
	<a class="wpmozo_bna_panel_save_options" href="javascript:void(0)">
		<span class="wpmozo_bna_panel_save_text" data-text="<?php echo esc_html__( 'Save', 'wpmozo-blocks-and-addons' ); ?>"><?php echo esc_html__( 'Save', 'wpmozo-blocks-and-addons' ); ?></span>
	</a>
</div>
