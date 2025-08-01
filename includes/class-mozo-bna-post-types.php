<?php
/**
 * The file that handles plugin's custom,
 * post types and taxonomies.
 *
 * @link       https://elicus.com
 * @since      1.1.0
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Mozo_Bna_Post_Types {

	// Construction.
	public function __construct() {
		// Register post types.
		add_action( 'init', array( __class__, 'register_testimonial_post_type' ) );
		add_action( 'init', array( __class__, 'register_testimonial_taxonomies' ) );

		// Disabled block editor for custom post types.
		add_filter( 'use_block_editor_for_post_type', array( __class__, 'manage_block_editor_for_post_type' ), 10, 2 );
	}

	/**
	 * Register testimonial post types.
	 * @since  1.1.0
	 */
	public static function register_testimonial_post_type() {
		$labels = array(
			'name'                  => esc_html_x( 'Mozo Testimonials', 'Post Type General Name', 'wpmozo-blocks-and-addons' ),
			'singular_name'         => esc_html_x( 'Mozo Testimonial', 'Post Type Singular Name', 'wpmozo-blocks-and-addons' ),
			'menu_name'             => esc_html__( 'Testimonials', 'wpmozo-blocks-and-addons' ),
			'name_admin_bar'        => esc_html__( 'Mozo Testimonial', 'wpmozo-blocks-and-addons' ),
			'archives'              => esc_html__( 'Mozo Testimonial Archives', 'wpmozo-blocks-and-addons' ),
			'attributes'            => esc_html__( 'Mozo Testimonial Attributes', 'wpmozo-blocks-and-addons' ),
			'parent_item_colon'     => esc_html__( 'Parent Testimonial:', 'wpmozo-blocks-and-addons' ),
			'all_items'             => esc_html__( 'All Testimonials', 'wpmozo-blocks-and-addons' ),
			'add_new_item'          => esc_html__( 'Add New Testimonial', 'wpmozo-blocks-and-addons' ),
			'add_new'               => esc_html__( 'Add New', 'wpmozo-blocks-and-addons' ),
			'new_item'              => esc_html__( 'New Testimonial', 'wpmozo-blocks-and-addons' ),
			'edit_item'             => esc_html__( 'Edit Testimonial', 'wpmozo-blocks-and-addons' ),
			'update_item'           => esc_html__( 'Update Testimonial', 'wpmozo-blocks-and-addons' ),
			'view_item'             => esc_html__( 'View Testimonial', 'wpmozo-blocks-and-addons' ),
			'view_items'            => esc_html__( 'View Testimonial', 'wpmozo-blocks-and-addons' ),
			'search_items'          => esc_html__( 'Search Testimonial', 'wpmozo-blocks-and-addons' ),
			'not_found'             => esc_html__( 'Not found', 'wpmozo-blocks-and-addons' ),
			'not_found_in_trash'    => esc_html__( 'Not found in Trash', 'wpmozo-blocks-and-addons' ),
			'featured_image'        => esc_html__( 'Testimonial Author Image', 'wpmozo-blocks-and-addons' ),
			'set_featured_image'    => esc_html__( 'Set testimonial author image', 'wpmozo-blocks-and-addons' ),
			'remove_featured_image' => esc_html__( 'Remove testimonial author image', 'wpmozo-blocks-and-addons' ),
			'use_featured_image'    => esc_html__( 'Use as testimonial author image', 'wpmozo-blocks-and-addons' ),
			'insert_into_item'      => esc_html__( 'Insert into item', 'wpmozo-blocks-and-addons' ),
			'uploaded_to_this_item' => esc_html__( 'Uploaded to this item', 'wpmozo-blocks-and-addons' ),
			'items_list'            => esc_html__( 'Testimonials list', 'wpmozo-blocks-and-addons' ),
			'items_list_navigation' => esc_html__( 'Testimonials list navigation', 'wpmozo-blocks-and-addons' ),
			'filter_items_list'     => esc_html__( 'Filter testimonial list', 'wpmozo-blocks-and-addons' ),
		);
		$args = array(
			'label'                 => esc_html__( 'Mozo Testimonials', 'wpmozo-blocks-and-addons' ),
			'description'           => esc_html__( 'WP Mozo Testimonials Custom Post', 'wpmozo-blocks-and-addons' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'editor', 'thumbnail', ),
			'taxonomies'            => array( 'mozo-testimonial-category' ),
			'hierarchical'          => false,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 20,
			'menu_icon'             => 'dashicons-format-quote',
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'show_in_rest'          => true,
			'capability_type'       => 'post',
		);

		register_post_type( 'mozo-testimonial', $args );
	}

	/**
	 * Register testimonial taxonomies.
	 * @since  1.1.0
	 */
	public static function register_testimonial_taxonomies() {
		$labels = array(
			'name'                       => esc_html_x( 'Mozo Testimonial Categories', 'Taxonomy General Name', 'wpmozo-blocks-and-addons' ),
			'singular_name'              => esc_html_x( 'Mozo Testimonial Category', 'Taxonomy Singular Name', 'wpmozo-blocks-and-addons' ),
			'menu_name'                  => esc_html__( 'Testimonial Categories', 'wpmozo-blocks-and-addons' ),
			'all_items'                  => esc_html__( 'All Testimonial Categories', 'wpmozo-blocks-and-addons' ),
			'parent_item'                => esc_html__( 'Parent Testimonial Category', 'wpmozo-blocks-and-addons' ),
			'parent_item_colon'          => esc_html__( 'Parent Testimonial Category:', 'wpmozo-blocks-and-addons' ),
			'new_item_name'              => esc_html__( 'New Testimonial Category Name', 'wpmozo-blocks-and-addons' ),
			'add_new_item'               => esc_html__( 'Add New Testimonial Category', 'wpmozo-blocks-and-addons' ),
			'edit_item'                  => esc_html__( 'Edit Testimonial Category', 'wpmozo-blocks-and-addons' ),
			'update_item'                => esc_html__( 'Update Testimonial Category', 'wpmozo-blocks-and-addons' ),
			'view_item'                  => esc_html__( 'View Testimonial Category', 'wpmozo-blocks-and-addons' ),
			'separate_items_with_commas' => esc_html__( 'Separate categories with commas', 'wpmozo-blocks-and-addons' ),
			'add_or_remove_items'        => esc_html__( 'Add or remove categories', 'wpmozo-blocks-and-addons' ),
			'choose_from_most_used'      => esc_html__( 'Choose from the most used', 'wpmozo-blocks-and-addons' ),
			'popular_items'              => esc_html__( 'Popular Testimonial Categories', 'wpmozo-blocks-and-addons' ),
			'search_items'               => esc_html__( 'Search Testimonial Categories', 'wpmozo-blocks-and-addons' ),
			'not_found'                  => esc_html__( 'Not Found', 'wpmozo-blocks-and-addons' ),
			'no_terms'                   => esc_html__( 'No Testimonial Categories', 'wpmozo-blocks-and-addons' ),
			'items_list'                 => esc_html__( 'Testimonial Categories list', 'wpmozo-blocks-and-addons' ),
			'items_list_navigation'      => esc_html__( 'Testimonial Categories list navigation', 'wpmozo-blocks-and-addons' ),
		);
		$args = array(
			'labels'            => $labels,
			'hierarchical'      => true,
			'public'            => true,
			'show_ui'           => true,
			'show_admin_column' => true,
			'show_in_nav_menus' => true,
			'show_in_rest'      => true,
			'show_tagcloud'     => true,
		);

		register_taxonomy( 'mozo-testimonial-category', array( 'mozo-testimonial' ), $args );
	}

	/**
	 * Enable/Disable block editor for custom post type.
	 * @since 1.1.0
	 */
	public static function manage_block_editor_for_post_type( $use_block_editor, $post_type ) {
		if ( $post_type === 'mozo-testimonial' ) {
			return false; // disable block editor for this post type
		}
		return $use_block_editor;
	}
}

return new Mozo_Bna_Post_Types();
