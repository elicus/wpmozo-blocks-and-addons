<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link https://elicus.com
 * @since 1.0.0
 *
 * @package WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/admin
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The admin-specific functionality of the plugin.
 *
 * @package WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/admin
 * @author Elicus <hello@wpmozo.com>
 */
class WPMozo_Blocks_And_Addons_Admin {

	/**
     * The unique identifier of this plugin.
     *
     * @since 1.0.0
     * @access protected
     * @var string $plugin_name The string used to uniquely identify this plugin.
     */
    protected $plugin_name;

    /**
	 * The array of allowed post types to enqueue scripts.
	 *
	 * @since 1.0.0
	 * @access private
	 * @var array $allowed_post_types The array of post types.
	 */
	private $allowed_post_types;

    /**
     * Initialize the class and set its properties.
     *
     * @since 1.0.0
     */
    public function __construct() {

        $wpmozo_bna = WPMozo_Blocks_And_Addons::instance();
        $this->plugin_name = $wpmozo_bna->get_plugin_name();
        $this->allowed_post_types        = array(
			'wpmozo-team-member',
		);

    }

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since 1.0.0
	 * @param string $hook_suffix The curent page id.
	 */
	public function enqueue_styles( $hook_suffix ) {

		$post_type = get_post_type();

		wp_register_style(
			$this->plugin_name . '-admin-style',
			WPMOZO_BLOCKS_AND_ADDONS_ADMIN_DIR_URL . 'css/admin.css',
			array(),
			time()
		);

		if ( in_array( $post_type, $this->allowed_post_types, true ) ) {
			wp_enqueue_style( $this->plugin_name . '-admin-style' );
		}

	}

	/**
	 * Register the scripts for the admin area.
	 *
	 * @since 1.0.0
	 * @param string $hook_suffix The curent page id.
	 */
	public function enqueue_scripts( $hook_suffix ) {

		$post_type = get_post_type();

		wp_register_script(
			$this->plugin_name . '-admin-script',
			WPMOZO_BLOCKS_AND_ADDONS_ADMIN_DIR_URL . 'js/admin.js',
			array(
				'jquery',
			),
			time(),
			false
		);

		if ( in_array( $post_type, $this->allowed_post_types, true ) ) {

			wp_enqueue_script( $this->plugin_name . '-admin-script' );

		}

	}

	/**
	 * Add the custom meta boxes.
	 *
	 * @since 1.0.0
	 * @param string $post_type The curent post type.
	 */
	public function add_meta_boxes( $post_type ) {

		add_meta_box(
	        'wpmozo_team_member_metabox',
	        __('Team Member Meta Fields', 'wpmozo-blocks-and-addons'),
	        array( $this, 'render_team_member_metabox' ),
	        'wpmozo-team-member',
	        'normal',
	        'high',
	    );

	}

	/**
	 * Meta box display callback.
	 *
	 * @since 1.0.0
	 * @param WP_Post $post Current post object.
	 */
	public function render_team_member_metabox( $post ) {

		include_once WPMOZO_BLOCKS_AND_ADDONS_ADMIN_PARTIALS_DIR_PATH . 'metaboxes/team-member.php';

	}

	/**
	 * Save meta data on edit post.
	 *
	 * @since 1.0.0
	 * @param int $post_id Post ID.
	 */
	public function save_team_member_meta_fields( $post_id ) {
        // doing an auto save.
        if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
            return;
        }

        // verify nonce.
        if ( ! isset( $_POST['wpmozo_team_member_metabox_nonce'] ) || ! wp_verify_nonce( sanitize_key( wp_unslash( $_POST['wpmozo_team_member_metabox_nonce'] ) ), 'wpmozo_metaboxes_nonce' ) ) {
            return;
        }

        // if current user can not edit the post.
        if ( ! current_user_can( 'edit_posts', $post_id ) ) {
            return;
        }

        $fields = array(
            'wpmozo_team_member_short_desc',
            'wpmozo_team_member_designation',
            'wpmozo_team_member_website',
            'wpmozo_team_member_linkedin',
            'wpmozo_team_member_facebook',
            'wpmozo_team_member_twitter',
            'wpmozo_team_member_instagram',
            'wpmozo_team_member_youtube',
            'wpmozo_team_member_email',
            'wpmozo_team_member_skills',
            'wpmozo_team_member_skills_value',
            'wpmozo_team_member_phone',
        );

        $allowed_html = array(
            'p' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'ul' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'ol' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'li' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'span' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'strong' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'b' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'a' => array(
                'href'  => array(),
                'id'    => array(),
                'class' => array(),
            ),
            'br' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'h1' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'h2' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'h3' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'h4' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'h5' => array(
                'id'    => array(),
                'class' => array(),
            ),
            'h6' => array(
                'id'    => array(),
                'class' => array(),
            ),
        );

        foreach ( $fields as $field ) {
            if ( isset( $_POST[ $field ] ) ) {
                if ( 'wpmozo_team_member_short_desc' === $field ) {
                    ${$field} = wp_kses( wp_unslash( $_POST[$field] ), $allowed_html );
                } else {
                    ${$field} = wpmozo_bna_sanitize_text_field( $_POST[ $field ] );
                }
                update_post_meta( $post_id, $field, ${$field} );
            }
        }
    }

	/**
	 * Add all hooks.
	 *
	 * @since 1.0.0
	 * @param array                         $loader The instance of loader class.
	 * @param WPMozo_Blocks_And_Addons_Admin $instance The instance of this class.
	 */
	public function add_hooks( $loader, $instance ) {

		$loader->add_action( 'admin_enqueue_scripts', $instance, 'enqueue_styles' );
		$loader->add_action( 'admin_enqueue_scripts', $instance, 'enqueue_scripts' );
		$loader->add_action( 'add_meta_boxes', $instance, 'add_meta_boxes' );
		$loader->add_action( 'save_post', $instance, 'save_team_member_meta_fields' );

	}

}