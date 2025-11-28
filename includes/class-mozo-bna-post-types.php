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
		add_action( 'init', array( __class__, 'register_team_member_post_type' ) );
		add_action( 'init', array( __class__, 'register_team_member_taxonomies' ) );

		// Disabled block editor for custom post types.
		add_filter( 'use_block_editor_for_post_type', array( __class__, 'manage_block_editor_for_post_type' ), 10, 2 );

		// Update the rest endpoint return data.
		add_filter( 'rest_mozo-testimonial_query', array( __class__, 'update_testimonial_rest_query' ), 10, 2 );
		add_filter( 'rest_prepare_mozo-testimonial', array( __class__, 'update_testimonials_rest_endpoint_data' ), 10, 3 );

		add_filter( 'rest_mozo-team-member_query', array( __class__, 'update_team_member_rest_query' ), 10, 2 );
		add_filter( 'rest_prepare_mozo-team-member', array( __class__, 'update_team_member_rest_endpoint_data' ), 10, 3 );
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
			'supports'              => array( 'title', 'editor', 'thumbnail' ),
			'taxonomies'            => array( 'wpmozo-ae-testimonial-category' ),
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

		register_post_type( 'wpmozoae-testimonial', $args );
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

		register_taxonomy( 'wpmozo-ae-testimonial-category', array( 'wpmozoae-testimonial' ), $args );
	}

	/**
	 * Register team member post types.
	 * @since  1.6.0
	 */
	public static function register_team_member_post_type() {
		$labels = array(
			'name'                  => esc_html_x( 'Mozo Team Members', 'Post Type General Name', 'wpmozo-blocks-and-addons' ),
			'singular_name'         => esc_html_x( 'Mozo Team Member', 'Post Type Singular Name', 'wpmozo-blocks-and-addons' ),
			'menu_name'             => esc_html__( 'Team Members', 'wpmozo-blocks-and-addons' ),
			'name_admin_bar'        => esc_html__( 'Mozo Team Member', 'wpmozo-blocks-and-addons' ),
			'archives'              => esc_html__( 'Mozo Team Member Archives', 'wpmozo-blocks-and-addons' ),
			'attributes'            => esc_html__( 'Mozo Team Member Attributes', 'wpmozo-blocks-and-addons' ),
			'parent_item_colon'     => esc_html__( 'Parent Member:', 'wpmozo-blocks-and-addons' ),
			'all_items'             => esc_html__( 'All Team Members', 'wpmozo-blocks-and-addons' ),
			'add_new_item'          => esc_html__( 'Add New Member', 'wpmozo-blocks-and-addons' ),
			'add_new'               => esc_html__( 'Add New', 'wpmozo-blocks-and-addons' ),
			'new_item'              => esc_html__( 'New Member', 'wpmozo-blocks-and-addons' ),
			'edit_item'             => esc_html__( 'Edit Member', 'wpmozo-blocks-and-addons' ),
			'update_item'           => esc_html__( 'Update Member', 'wpmozo-blocks-and-addons' ),
			'view_item'             => esc_html__( 'View Member', 'wpmozo-blocks-and-addons' ),
			'view_items'            => esc_html__( 'View Member', 'wpmozo-blocks-and-addons' ),
			'search_items'          => esc_html__( 'Search Members', 'wpmozo-blocks-and-addons' ),
			'not_found'             => esc_html__( 'No member found', 'wpmozo-blocks-and-addons' ),
			'not_found_in_trash'    => esc_html__( 'No members found in Trash', 'wpmozo-blocks-and-addons' ),
			'featured_image'        => esc_html__( 'Team Member Image', 'wpmozo-blocks-and-addons' ),
			'set_featured_image'    => esc_html__( 'Set team member image', 'wpmozo-blocks-and-addons' ),
			'remove_featured_image' => esc_html__( 'Remove team member image', 'wpmozo-blocks-and-addons' ),
			'use_featured_image'    => esc_html__( 'Use as team member image', 'wpmozo-blocks-and-addons' ),
			'insert_into_item'      => esc_html__( 'Insert into item', 'wpmozo-blocks-and-addons' ),
			'uploaded_to_this_item' => esc_html__( 'Uploaded to this item', 'wpmozo-blocks-and-addons' ),
			'items_list'            => esc_html__( 'Team Members list', 'wpmozo-blocks-and-addons' ),
			'items_list_navigation' => esc_html__( 'Team Members list navigation', 'wpmozo-blocks-and-addons' ),
			'filter_items_list'     => esc_html__( 'Filter team member list', 'wpmozo-blocks-and-addons' ),
		);
		$args = array(
			'label'                 => esc_html__( 'Mozo Team Members', 'wpmozo-blocks-and-addons' ),
			'description'           => esc_html__( 'WP Mozo Team Members Custom Post', 'wpmozo-blocks-and-addons' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'editor', 'author', 'thumbnail' ),
			'taxonomies'            => array( 'wpmozo-ae-team-member-category' ),
			'hierarchical'          => false,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 20,
			'menu_icon'             => 'dashicons-businessman',
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'show_in_rest'          => true,
			'capability_type'       => 'post',
		);

		register_post_type( 'wpmozoae-team-member', $args );
	}

	/**
	 * Register team taxonomies.
	 * @since  1.6.0
	 */
	public static function register_team_member_taxonomies() {
		$labels = array(
			'name'                       => esc_html_x( 'Mozo Team Member Categories', 'Taxonomy General Name', 'wpmozo-blocks-and-addons' ),
			'singular_name'              => esc_html_x( 'Mozo Team Member Category', 'Taxonomy Singular Name', 'wpmozo-blocks-and-addons' ),
			'menu_name'                  => esc_html__( 'Team Member Categories', 'wpmozo-blocks-and-addons' ),
			'all_items'                  => esc_html__( 'All Team Member Categories', 'wpmozo-blocks-and-addons' ),
			'parent_item'                => esc_html__( 'Parent Team Member Category', 'wpmozo-blocks-and-addons' ),
			'parent_item_colon'          => esc_html__( 'Parent Team Member Category:', 'wpmozo-blocks-and-addons' ),
			'new_item_name'              => esc_html__( 'New Team Member Category Name', 'wpmozo-blocks-and-addons' ),
			'add_new_item'               => esc_html__( 'Add New Team Member Category', 'wpmozo-blocks-and-addons' ),
			'edit_item'                  => esc_html__( 'Edit Team Member Category', 'wpmozo-blocks-and-addons' ),
			'update_item'                => esc_html__( 'Update Team Member Category', 'wpmozo-blocks-and-addons' ),
			'view_item'                  => esc_html__( 'View Team Member Category', 'wpmozo-blocks-and-addons' ),
			'separate_items_with_commas' => esc_html__( 'Separate categories with commas', 'wpmozo-blocks-and-addons' ),
			'add_or_remove_items'        => esc_html__( 'Add or remove categories', 'wpmozo-blocks-and-addons' ),
			'choose_from_most_used'      => esc_html__( 'Choose from the most used', 'wpmozo-blocks-and-addons' ),
			'popular_items'              => esc_html__( 'Popular Team Member Categories', 'wpmozo-blocks-and-addons' ),
			'search_items'               => esc_html__( 'Search Team Member Categories', 'wpmozo-blocks-and-addons' ),
			'not_found'                  => esc_html__( 'Not Found', 'wpmozo-blocks-and-addons' ),
			'no_terms'                   => esc_html__( 'No Team Member Categories', 'wpmozo-blocks-and-addons' ),
			'items_list'                 => esc_html__( 'Team Member Categories list', 'wpmozo-blocks-and-addons' ),
			'items_list_navigation'      => esc_html__( 'Team Member Categories list navigation', 'wpmozo-blocks-and-addons' ),
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

		register_taxonomy( 'wpmozo-ae-team-member-category', array( 'wpmozoae-team-member' ), $args );
	}

	/**
	 * Enable/Disable block editor for custom post type.
	 * @since 1.1.0
	 */
	public static function manage_block_editor_for_post_type( $use_block_editor, $post_type ) {
		if ( $post_type === 'wpmozoae-testimonial' || $post_type === 'wpmozoae-team-member' ) {
			return false; // disable block editor for this post type
		}
		return $use_block_editor;
	}

	/**
	 * Update posts data query in rest api endpoint.
	 * /wp-json/wp/v2/posts
	 * @since 1.1.0
	 */
	public static function update_testimonial_rest_query( $args, $request ) {

		// Only modify for post type 'post'.
		if ( ! empty( $args['post_type'] ) && 'wpmozoae-testimonial' !== $args['post_type'] ) {
			return $args;
		}

		// Check if categories are not empty.
		if ( ! empty( $request['categories'] ) ) {
			$term_ids = array_map( 'absint', explode( ',', $request['categories'] ) );
			$args['tax_query'][] = array(
				'taxonomy' => 'wpmozo-ae-testimonial-category',
				'field'    => 'term_id',
				'terms'    => $term_ids,
				'operator' => 'IN', // use 'AND' if you want all categories to match.
			);
		}

		return $args;
	}

	/**
	 * Update posts data in rest api endpoint.
	 * /wp-json/wp/v2/posts
	 * @since 1.1.0
	 */
	public static function update_testimonials_rest_endpoint_data( $response, $post, $request ) {
		// Only modify for post type 'post'
		if ( 'wpmozoae-testimonial' !== $post->post_type  ) {
			return $response;
		}

		// Proceed to add custom meta
		$data = $response->get_data();

		$data['author_name']        = get_post_meta( $post->ID, '_author_name', true );
		$data['author_designation'] = get_post_meta( $post->ID, '_author_designation', true );
		$data['author_company']     = get_post_meta( $post->ID, '_author_company', true );
		$data['author_company_url'] = get_post_meta( $post->ID, '_author_company_url', true );
		$data['author_rating']      = get_post_meta( $post->ID, '_author_rating', true );

		// Email can't be display as public.
		// $data['author_email']       = get_post_meta( $post->ID, '_author_email', true );

		$response->set_data( $data );

		return $response;
	}

	/**
	 * Update posts data query in rest api endpoint.
	 * /wp-json/wp/v2/posts
	 * @since 1.6.0
	 */
	public static function update_team_member_rest_query( $args, $request ) {

		// Only modify for post type 'post'.
		if ( ! empty( $args['post_type'] ) && 'wpmozoae-team-member' !== $args['post_type'] ) {
			return $args;
		}

		// Check if categories are not empty.
		if ( ! empty( $request['categories'] ) ) {
			$term_ids = array_map( 'absint', explode( ',', $request['categories'] ) );
			$args['tax_query'][] = array(
				'taxonomy' => 'wpmozo-ae-team-member-category',
				'field'    => 'term_id',
				'terms'    => $term_ids,
				'operator' => 'IN', // use 'AND' if you want all categories to match.
			);
		}

		return $args;
	}

	/**
	 * Update posts data in rest api endpoint.
	 * /wp-json/wp/v2/posts
	 * @since 1.6.0
	 */
	public static function update_team_member_rest_endpoint_data( $response, $post, $request ) {
		// Only modify for post type 'post'.
		if ( 'wpmozoae-team-member' !== $post->post_type  ) {
			return $response;
		}

		// Proceed to add custom meta.
		$data = $response->get_data();

		$data['short_description'] = get_post_meta( $post->ID, '_short_description', true );
		$data['designation']       = get_post_meta( $post->ID, '_designation', true );
		$data['phone_number']      = get_post_meta( $post->ID, '_phone_number', true );
		$data['email_address']     = get_post_meta( $post->ID, '_email_address', true );
		$data['website']           = get_post_meta( $post->ID, '_website', true );
		$data['facebook']          = get_post_meta( $post->ID, '_facebook', true );
		$data['twitter']           = get_post_meta( $post->ID, '_twitter', true );
		$data['linkedin']          = get_post_meta( $post->ID, '_linkedin', true );
		$data['instagram']         = get_post_meta( $post->ID, '_instagram', true );
		$data['youtube']           = get_post_meta( $post->ID, '_youtube', true );
		$data['member_skills']     = get_post_meta( $post->ID, '_member_skills', true );

		$response->set_data( $data );

		return $response;
	}
}

return new Mozo_Bna_Post_Types();
