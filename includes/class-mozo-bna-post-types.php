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
		add_action( 'init', array( __class__, 'register_testimonial_post_type' ), 50 );
		add_action( 'init', array( __class__, 'register_testimonial_taxonomies' ), 50 );

		add_action( 'init', array( __class__, 'register_team_member_post_type' ), 50 );
		add_action( 'init', array( __class__, 'register_team_member_taxonomies' ), 50 );

		add_action( 'init', array( __class__, 'register_portfolio_post_type' ), 50 );
		add_action( 'init', array( __class__, 'register_portfolio_taxonomies' ), 50 );

		// Disabled block editor for custom post types.
		add_filter( 'use_block_editor_for_post_type', array( __class__, 'manage_block_editor_for_post_type' ), 10, 2 );

		// Update the rest endpoint return data.
		add_filter( 'rest_wpmozoae-testimonial_query', array( __class__, 'update_testimonial_rest_query' ), 10, 2 );
		add_filter( 'rest_prepare_wpmozoae-testimonial', array( __class__, 'update_testimonials_rest_endpoint_data' ), 10, 3 );

		add_filter( 'rest_wpmozoae-team-member_query', array( __class__, 'update_team_member_rest_query' ), 10, 2 );
		add_filter( 'rest_prepare_wpmozoae-team-member', array( __class__, 'update_team_member_rest_endpoint_data' ), 10, 3 );

		add_filter( 'rest_wpmozoae-portfolio_query', array( __class__, 'update_portfolio_rest_query' ), 10, 2 );
		add_filter( 'rest_prepare_wpmozoae-portfolio', array( __class__, 'update_portfolio_rest_endpoint_data' ), 10, 3 );
	}

	/**
	 * Register testimonial post types.
	 * @since  1.1.0
	 */
	public static function register_testimonial_post_type() {
		//check post type exists.
		if( post_type_exists('wpmozoae-testimonial') ){
			return;
		}
		$labels = array(
			'name'                  => esc_html__( 'WPMozo Testimonials', 'wpmozo-blocks-and-addons' ),
			'singular_name'         => esc_html__( 'WPMozo Testimonial', 'wpmozo-blocks-and-addons' ),
			'menu_name'             => esc_html__( 'WPMozo Testimonials', 'wpmozo-blocks-and-addons' ),
			'add_new'               => esc_html__( 'Add New', 'wpmozo-blocks-and-addons' ),
			'add_new_item'          => esc_html__( 'Add New Testimonial', 'wpmozo-blocks-and-addons' ),
			'edit_item'             => esc_html__( 'Edit Testimonial', 'wpmozo-blocks-and-addons' ),
			'new_item'              => esc_html__( 'New Testimonial', 'wpmozo-blocks-and-addons' ),
			'view_item'             => esc_html__( 'View Testimonial', 'wpmozo-blocks-and-addons' ),
			'all_items'             => esc_html__( 'All Testimonials', 'wpmozo-blocks-and-addons' ),
			'search_items'          => esc_html__( 'Search Testimonials', 'wpmozo-blocks-and-addons' ),
			'not_found'             => esc_html__( 'No testimonial found', 'wpmozo-blocks-and-addons' ),
			'not_found_in_trash'    => esc_html__( 'No testimonial found in Trash', 'wpmozo-blocks-and-addons' ),
			'featured_image'        => esc_html__( 'Testimonial Image', 'wpmozo-blocks-and-addons' ),
			'set_featured_image'    => esc_html__( 'Set testimonial image', 'wpmozo-blocks-and-addons' ),
			'remove_featured_image' => esc_html__( 'Remove testimonial member image', 'wpmozo-blocks-and-addons' ),
			'use_featured_image'    => esc_html__( 'Use as testimonial image', 'wpmozo-blocks-and-addons' ),
			'parent_item_colon'     => esc_html__( 'Parent Testimonial:', 'wpmozo-blocks-and-addons' ),
			'name_admin_bar'        => esc_html__( 'Mozo Testimonial', 'wpmozo-blocks-and-addons' ),
			'archives'              => esc_html__( 'Mozo Testimonial Archives', 'wpmozo-blocks-and-addons' ),
			'attributes'            => esc_html__( 'Mozo Testimonial Attributes', 'wpmozo-blocks-and-addons' ),
			'update_item'           => esc_html__( 'Update Testimonial', 'wpmozo-blocks-and-addons' ),
			'view_items'            => esc_html__( 'View Testimonial', 'wpmozo-blocks-and-addons' ),
			'insert_into_item'      => esc_html__( 'Insert into item', 'wpmozo-blocks-and-addons' ),
			'uploaded_to_this_item' => esc_html__( 'Uploaded to this item', 'wpmozo-blocks-and-addons' ),
			'items_list'            => esc_html__( 'Testimonials list', 'wpmozo-blocks-and-addons' ),
			'items_list_navigation' => esc_html__( 'Testimonials list navigation', 'wpmozo-blocks-and-addons' ),
			'filter_items_list'     => esc_html__( 'Filter testimonial list', 'wpmozo-blocks-and-addons' ),
		);
		$args = array(
			'labels'              => $labels,
			'description'         => esc_html__( 'WPMozo Testimonial Custom Post', 'wpmozo-blocks-and-addons' ),
			'label'               => esc_html__( 'Mozo Testimonials', 'wpmozo-blocks-and-addons' ),
			'taxonomies'          => array( 'wpmozo-ae-testimonial-category' ),
			'public'              => true,
			'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'revisions' ),
			'hierarchical'        => false,
			'menu_position'       => 20,
			'menu_icon'           => 'data:image/svg+xml;base64,' . base64_encode( file_get_contents( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/admin/assets/images/testimonial-icon.svg' ) ),
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'has_archive'         => true,
			'query_var'           => true,
			'capability_type'     => 'post',
			'show_in_admin_bar'   => true,
			'can_export'          => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'show_in_rest'        => true,
		);

		register_post_type( 'wpmozoae-testimonial', $args );
	}

	/**
	 * Register testimonial taxonomies.
	 * @since  1.1.0
	 */
	public static function register_testimonial_taxonomies() {
		//check taxonomy exists.
		if ( taxonomy_exists( 'wpmozo-ae-testimonial-category' ) ) {
			return;
		}
		$labels = array(
			'name'                       => esc_html_x( 'Categories', 'Taxonomy General Name', 'wpmozo-blocks-and-addons' ),
			'singular_name'              => esc_html_x( 'Category', 'Taxonomy Singular Name', 'wpmozo-blocks-and-addons' ),
			'menu_name'                  => esc_html__( 'Categories', 'wpmozo-blocks-and-addons' ),
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

		//check post type exists.
		if( post_type_exists('wpmozoae-team-member') ){
			return;
		}
		$labels = array(
			'name'                  => esc_html__( 'WPMozo Team Members', 'wpmozo-blocks-and-addons' ),
			'singular_name'         => esc_html__( 'WPMozo Team Member', 'wpmozo-blocks-and-addons' ),
			'menu_name'             => esc_html__( 'WPMozo Team Members', 'wpmozo-blocks-and-addons' ),
			'add_new'               => esc_html__( 'Add New', 'wpmozo-blocks-and-addons' ),
			'add_new_item'          => esc_html__( 'Add New Member', 'wpmozo-blocks-and-addons' ),
			'edit_item'             => esc_html__( 'Edit Member', 'wpmozo-blocks-and-addons' ),
			'new_item'              => esc_html__( 'New Member', 'wpmozo-blocks-and-addons' ),
			'view_item'             => esc_html__( 'View Member', 'wpmozo-blocks-and-addons' ),
			'all_items'             => esc_html__( 'All Members', 'wpmozo-blocks-and-addons' ),
			'search_items'          => esc_html__( 'Search Members', 'wpmozo-blocks-and-addons' ),
			'not_found'             => esc_html__( 'No member found', 'wpmozo-blocks-and-addons' ),
			'not_found_in_trash'    => esc_html__( 'No members found in Trash', 'wpmozo-blocks-and-addons' ),
			'featured_image'        => esc_html__( 'Team Member Image', 'wpmozo-blocks-and-addons' ),
			'set_featured_image'    => esc_html__( 'Set team member image', 'wpmozo-blocks-and-addons' ),
			'remove_featured_image' => esc_html__( 'Remove team member image', 'wpmozo-blocks-and-addons' ),
			'use_featured_image'    => esc_html__( 'Use as team member image', 'wpmozo-blocks-and-addons' ),
			'parent_item_colon'     => esc_html__( 'Parent Member:', 'wpmozo-blocks-and-addons' ),
			'name_admin_bar'        => esc_html__( 'Mozo Team Member', 'wpmozo-blocks-and-addons' ),
			'archives'              => esc_html__( 'Mozo Team Member Archives', 'wpmozo-blocks-and-addons' ),
			'attributes'            => esc_html__( 'Mozo Team Member Attributes', 'wpmozo-blocks-and-addons' ),
			'update_item'           => esc_html__( 'Update Member', 'wpmozo-blocks-and-addons' ),
			'view_items'            => esc_html__( 'View Member', 'wpmozo-blocks-and-addons' ),
			'insert_into_item'      => esc_html__( 'Insert into item', 'wpmozo-blocks-and-addons' ),
			'uploaded_to_this_item' => esc_html__( 'Uploaded to this item', 'wpmozo-blocks-and-addons' ),
			'items_list'            => esc_html__( 'Team Members list', 'wpmozo-blocks-and-addons' ),
			'items_list_navigation' => esc_html__( 'Team Members list navigation', 'wpmozo-blocks-and-addons' ),
			'filter_items_list'     => esc_html__( 'Filter team member list', 'wpmozo-blocks-and-addons' ),
		);
		$args = array(
			'labels'              => $labels,
			'label'               => esc_html__( 'Mozo Team Members', 'wpmozo-blocks-and-addons' ),
			'description'         => esc_html__( 'WPMozo Team Members Custom Post', 'wpmozo-blocks-and-addons' ),
			'public'              => true,
			'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'revisions' ),
			'taxonomies'          => array( 'wpmozo-ae-team-member-category' ),
			'hierarchical'        => false,
			'menu_position'       => 20,
			'menu_icon'           => 'data:image/svg+xml;base64,' . base64_encode( file_get_contents( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/admin/assets/images/team-member-icon.svg' ) ),
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'has_archive'         => true,
			'query_var'           => true,
			'capability_type'     => 'post',
			'show_in_admin_bar'   => true,
			'can_export'          => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'show_in_rest'        => true,
		);
		register_post_type( 'wpmozoae-team-member', $args );
	}

	/**
	 * Register team taxonomies.
	 * @since  1.6.0
	 */
	public static function register_team_member_taxonomies() {

		//check taxonomy exists.
		if ( taxonomy_exists( 'wpmozo-ae-team-member-category' ) ) {
			return;
		}
		$labels = array(
			'name'                       => esc_html_x( 'Categories', 'Taxonomy General Name', 'wpmozo-blocks-and-addons' ),
			'singular_name'              => esc_html_x( 'Category', 'Taxonomy Singular Name', 'wpmozo-blocks-and-addons' ),
			'menu_name'                  => esc_html__( 'Categories', 'wpmozo-blocks-and-addons' ),
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
			'show_tagcloud'     => true,
			'show_in_rest'      => true,
		);

		register_taxonomy( 'wpmozo-ae-team-member-category', array( 'wpmozoae-team-member' ), $args );
	}

	/**
	 * Enable/Disable block editor for custom post type.
	 * @since 1.1.0
	 */
	public static function manage_block_editor_for_post_type( $use_block_editor, $post_type ) {
		if ( $post_type === 'wpmozoae-testimonial' || $post_type === 'wpmozoae-team-member'|| $post_type === 'wpmozoae-portfolio' ) {
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

		$data['author_name']        = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_name', true );
		$data['author_designation'] = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_designation', true );
		$data['author_company']     = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_company', true );
		$data['author_company_url'] = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_company_url', true );
		$data['author_rating']      = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_rating', true );

		// Email can't be display as public.
		// $data['author_email']       = get_post_meta( $post->ID, 'wpmozo_ae_testimonial_author_email', true );

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

		$data['short_description']    = get_post_meta( $post->ID, 'wpmozo_ae_team_member_short_desc', true );
		$data['designation']          = get_post_meta( $post->ID, 'wpmozo_ae_team_member_designation', true );
		$data['phone_number']         = get_post_meta( $post->ID, 'wpmozo_ae_team_member_phone_number', true );
		$data['email_address']        = get_post_meta( $post->ID, 'wpmozo_ae_team_member_email', true );
		$data['website']              = get_post_meta( $post->ID, 'wpmozo_ae_team_member_website', true );
		$data['facebook']             = get_post_meta( $post->ID, 'wpmozo_ae_team_member_facebook', true );
		$data['twitter']              = get_post_meta( $post->ID, 'wpmozo_ae_team_member_twitter', true );
		$data['linkedin']             = get_post_meta( $post->ID, 'wpmozo_ae_team_member_linkedin', true );
		$data['instagram']            = get_post_meta( $post->ID, 'wpmozo_ae_team_member_instagram', true );
		$data['youtube']              = get_post_meta( $post->ID, 'wpmozo_ae_team_member_youtube', true );
		$data['member_skills']        = get_post_meta( $post->ID, 'wpmozo_ae_team_member_skills', true );
		$data['member_skills_values'] = get_post_meta( $post->ID, 'wpmozo_ae_team_member_skills_value', true );

		$response->set_data( $data );

		return $response;
	}


	/**
	 * Register portfolio post types.
	 * @since  1.8.0
	 */
	public static function register_portfolio_post_type() {
		//check post type exists.
		if( post_type_exists('wpmozoae-portfolio') ){
			return;
		}
		$labels = array(
			'name'                  => esc_html__( 'WPMozo Portfolios', 'wpmozo-blocks-and-addons' ),
			'singular_name'         => esc_html__( 'WPMozo Portfolio', 'wpmozo-blocks-and-addons' ),
			'menu_name'             => esc_html__( 'WPMozo Portfolios', 'wpmozo-blocks-and-addons' ),
			'add_new'               => esc_html__( 'Add New', 'wpmozo-blocks-and-addons' ),
			'add_new_item'          => esc_html__( 'Add New Portfolio', 'wpmozo-blocks-and-addons' ),
			'edit_item'             => esc_html__( 'Edit Portfolio', 'wpmozo-blocks-and-addons' ),
			'new_item'              => esc_html__( 'New Portfolio', 'wpmozo-blocks-and-addons' ),
			'view_item'             => esc_html__( 'View Portfolio', 'wpmozo-blocks-and-addons' ),
			'all_items'             => esc_html__( 'All Portfolios', 'wpmozo-blocks-and-addons' ),
			'search_items'          => esc_html__( 'Search Portfolios', 'wpmozo-blocks-and-addons' ),
			'not_found'             => esc_html__( 'No portfolio found', 'wpmozo-blocks-and-addons' ),
			'not_found_in_trash'    => esc_html__( 'No portfolio found in Trash', 'wpmozo-blocks-and-addons' ),
			'featured_image'        => esc_html__( 'Portfolio Image', 'wpmozo-blocks-and-addons' ),
			'set_featured_image'    => esc_html__( 'Set portfolio image', 'wpmozo-blocks-and-addons' ),
			'remove_featured_image' => esc_html__( 'Remove portfolio image', 'wpmozo-blocks-and-addons' ),
			'use_featured_image'    => esc_html__( 'Use as portfolio image', 'wpmozo-blocks-and-addons' ),
			'parent_item_colon'     => esc_html__( 'Parent Portfolio:', 'wpmozo-blocks-and-addons' ),
			'name_admin_bar'        => esc_html__( 'Mozo Portfolio', 'wpmozo-blocks-and-addons' ),
			'archives'              => esc_html__( 'Mozo Portfolio Archives', 'wpmozo-blocks-and-addons' ),
			'attributes'            => esc_html__( 'Mozo Portfolio Attributes', 'wpmozo-blocks-and-addons' ),
			'update_item'           => esc_html__( 'Update Portfolio', 'wpmozo-blocks-and-addons' ),
			'view_items'            => esc_html__( 'View Portfolio', 'wpmozo-blocks-and-addons' ),
			'insert_into_item'      => esc_html__( 'Insert into item', 'wpmozo-blocks-and-addons' ),
			'uploaded_to_this_item' => esc_html__( 'Uploaded to this item', 'wpmozo-blocks-and-addons' ),
			'items_list'            => esc_html__( 'Portfolios list', 'wpmozo-blocks-and-addons' ),
			'items_list_navigation' => esc_html__( 'Portfolios list navigation', 'wpmozo-blocks-and-addons' ),
			'filter_items_list'     => esc_html__( 'Filter portfolio list', 'wpmozo-blocks-and-addons' ),
		);
		$args = array(
			'labels'              => $labels,
			'description'         => esc_html__( 'WPMozo Portfolio Custom Post', 'wpmozo-blocks-and-addons' ),
			'label'               => esc_html__( 'Mozo Portfolios', 'wpmozo-blocks-and-addons' ),
			'taxonomies'          => array( 'wpmozo-ae-portfolio-category' ),
			'public'              => true,
			'supports'            => array( 'title', 'editor', 'author', 'thumbnail', 'revisions', 'excerpt' ),
			'hierarchical'        => false,
			'menu_position'       => 20,
			'menu_icon'           => 'data:image/svg+xml;base64,' . base64_encode( file_get_contents( WPMOZO_BNA_PLUGIN_DIR_PATH . 'includes/admin/assets/images/portfolio-icon.svg' ) ),
			'show_ui'             => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => true,
			'has_archive'         => true,
			'query_var'           => true,
			'capability_type'     => 'post',
			'show_in_admin_bar'   => true,
			'can_export'          => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'show_in_rest'        => true,
		);

		register_post_type( 'wpmozoae-portfolio', $args );
	}

	/**
	 * Register portfolio taxonomies.
	 * @since  1.8.0
	 */
	public static function register_portfolio_taxonomies() {
		//check taxonomy exists.
		if ( taxonomy_exists( 'wpmozo-ae-portfolio-category' ) ) {
			return;
		}
		$labels = array(
			'name'                       => esc_html_x( 'Categories', 'Taxonomy General Name', 'wpmozo-blocks-and-addons' ),
			'singular_name'              => esc_html_x( 'Category', 'Taxonomy Singular Name', 'wpmozo-blocks-and-addons' ),
			'menu_name'                  => esc_html__( 'Categories', 'wpmozo-blocks-and-addons' ),
			'all_items'                  => esc_html__( 'All Portfolio Categories', 'wpmozo-blocks-and-addons' ),
			'parent_item'                => esc_html__( 'Parent Portfolio Category', 'wpmozo-blocks-and-addons' ),
			'parent_item_colon'          => esc_html__( 'Parent Portfolio Category:', 'wpmozo-blocks-and-addons' ),
			'new_item_name'              => esc_html__( 'New Portfolio Category Name', 'wpmozo-blocks-and-addons' ),
			'add_new_item'               => esc_html__( 'Add New Portfolio Category', 'wpmozo-blocks-and-addons' ),
			'edit_item'                  => esc_html__( 'Edit Portfolio Category', 'wpmozo-blocks-and-addons' ),
			'update_item'                => esc_html__( 'Update Portfolio Category', 'wpmozo-blocks-and-addons' ),
			'view_item'                  => esc_html__( 'View Portfolio Category', 'wpmozo-blocks-and-addons' ),
			'separate_items_with_commas' => esc_html__( 'Separate categories with commas', 'wpmozo-blocks-and-addons' ),
			'add_or_remove_items'        => esc_html__( 'Add or remove categories', 'wpmozo-blocks-and-addons' ),
			'choose_from_most_used'      => esc_html__( 'Choose from the most used', 'wpmozo-blocks-and-addons' ),
			'popular_items'              => esc_html__( 'Popular Portfolio Categories', 'wpmozo-blocks-and-addons' ),
			'search_items'               => esc_html__( 'Search Portfolio Categories', 'wpmozo-blocks-and-addons' ),
			'not_found'                  => esc_html__( 'Not Found', 'wpmozo-blocks-and-addons' ),
			'no_terms'                   => esc_html__( 'No Portfolio Categories', 'wpmozo-blocks-and-addons' ),
			'items_list'                 => esc_html__( 'Portfolio Categories list', 'wpmozo-blocks-and-addons' ),
			'items_list_navigation'      => esc_html__( 'Portfolio Categories list navigation', 'wpmozo-blocks-and-addons' ),
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
		register_taxonomy( 'wpmozo-ae-portfolio-category', array( 'wpmozoae-portfolio' ), $args );
	}

	/**
	 * Update posts data query in rest api endpoint.
	 * @since 1.8.0
	 */
	public static function update_portfolio_rest_query( $args, $request ) {

		// Only modify for post type 'wpmozoae-portfolio'.
		if ( ! empty( $args['post_type'] ) && 'wpmozoae-portfolio' !== $args['post_type'] ) {
			return $args;
		}

		// Check if categories are not empty.
		if ( ! empty( $request['categories'] ) ) {
			$term_ids = array_map( 'absint', explode( ',', $request['categories'] ) );
			$args['tax_query'][] = array(
				'taxonomy' => 'wpmozo-ae-portfolio-category',
				'field'    => 'term_id',
				'terms'    => $term_ids,
				'operator' => 'IN',
			);
		}

		return $args;
	}

	/**
	 * Update posts data in rest api endpoint.
	 * @since 1.8.0
	 */
	public static function update_portfolio_rest_endpoint_data( $response, $post, $request ) {
		// Only modify for post type 'wpmozoae-portfolio'.
		if ( 'wpmozoae-portfolio' !== $post->post_type  ) {
			return $response;
		}

		// Proceed to add custom meta.
		$data = $response->get_data();

		$data['project_url'] = get_post_meta( $post->ID, 'wpmozo_ae_portfolio_project_url', true );

		$response->set_data( $data );

		return $response;
	}
}

return new Mozo_Bna_Post_Types();
