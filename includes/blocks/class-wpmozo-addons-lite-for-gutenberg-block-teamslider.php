<?php
/**
 * Define methods for team slider block.
 *
 * @link       https://elicus.com
 * @since      1.0.0
 *
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 */

/**
 * This class responsible for defining all methods for before after slider block.
 *
 * @since      1.0.0
 * @package    WPMozo_Addons_Lite_For_Gutenberg
 * @subpackage WPMozo_Addons_Lite_For_Gutenberg/includes
 * @author     Elicus <hello@elicus.com>
 */
class WPMozo_Addons_Lite_Gutenberg_Block_Teamslider extends WPMozo_Addons_Lite_Gutenberg_Block {

	/**
	 * The name of block.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var string $block_name The name of block.
	 */
	protected $block_name = 'team-slider';

	/**
	 * The single instance of the class.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var WPMozo_Addons_Lite_Gutenberg_Block $_instance The instances of this class.
	 */
	protected static $_instance = null;

	/**
	 * The instance of this class.
	 *
	 * Ensures only one instance of WPMozo_Addons_Lite_Gutenberg_Block is loaded or can be loaded.
	 *
	 * @since 1.0.0
	 * @return WPMozo_Addons_Lite_Gutenberg_Block - Main instance.
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			self::$_instance = new self();
		}
		return self::$_instance;
	}

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		parent::__construct();

		$this->scripts[] = array(
			'handle' => $this->plugin_name . '-swiper-script',
			'src'    => WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'js/swiper-bundle.min.js',
			'deps'   => array( 'jquery' ),
			'ver'    => time(),
		);

		$this->styles[] = array(
			'handle' => $this->plugin_name . '-swiper-style',
			'src'    => WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'css/swiper-bundle.min.css',
			'deps'   => array(),
			'ver'    => time(),
		);

		$this->styles[] = array(
			'handle' => $this->plugin_name . '-team-slider-style',
			'src'    => WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'css/blocks/team-slider.css',
			'deps'   => array(),
			'ver'    => time(),
		);

		$attributes = $this->get_attributes();

		$this->args = array(
			'script_handles' => array(
				$this->plugin_name . '-swiper-script',
			),
			'style_handles'  => array(
				$this->plugin_name . '-swiper-style',
				$this->plugin_name . '-team-slider-style',
			),
			'attributes' => $attributes,
			'render_callback' => array( $this, 'team_slider_render_callback' )
		);

	}

	/**
	 * Get attributes.
	 *
	 * @since 1.0.0
	 */
	public function get_attributes() {

		global $wp_filesystem;
		require_once ABSPATH . 'wp-admin/includes/file.php';
		WP_Filesystem();

		$attributes = array();
		$file_path  = WPMOZO_ADDONS_LITE_GUTENBERG_PLUGIN_DIR_PATH . 'src/blocks/team-slider/attributes.json';

		if ( $wp_filesystem->exists( $file_path ) ) {
			$json = $wp_filesystem->get_contents( $file_path );
			$attributes = json_decode( $json, true );
		}

		return $attributes;

	}

	/**
	 * Render team slider markup.
	 *
	 * @since 1.0.0
	 * @param array $attributes The arguments of block.
	 */
	public function team_slider_render_callback( $attributes, $content ) {

		$posts_number = $attributes['postsNumber'];
		$include_categories = $attributes['includeCategories'];
		$post_order_by = $attributes['postOrderBy'];
		$post_order = $attributes['postOrder'];
		$processed_name_level = $attributes['nameHeadingLavel'];
		$show_short_desc = $attributes['showShortDesc'];
		$show_designation = $attributes['showDesignation'];
		$show_social_icon = $attributes['showSocialIcon'];
		$social_icon_link_target = $attributes['socialIconLinkTarget'];
		$show_arrow = $attributes['showArrow'];
		$show_control_dot = $attributes['showControlDot'];
		$control_dot_style = $attributes['controlDotStyle'];
		$arrows_position = $attributes['arrowsPosition'];
		$slider_layout = $attributes['sliderLayout'];
		$show_skills = $attributes['showSkills'];

		$args = array(
			'post_type'      => 'wpmozo-team-member',
			'posts_per_page' => intval( $posts_number ),
			'post_status'    => 'publish',
			'orderby'        => 'date',
			'order'          => 'DESC',
		);

		if ( is_user_logged_in() ) {
			$args['post_status'] = array( 'publish', 'private' );
		}

		if ( ! empty( $include_categories ) ) {
			$args['tax_query'] = array(
				array(
					'taxonomy' => 'wpmozo-team-member-category',
					'field'    => 'term_id',
					'terms'    => $include_categories,
					'operator' => 'IN',
				),
			);
		}

		if ( isset( $post_order_by ) && '' !== $post_order_by ) {
			$args['orderby'] = sanitize_text_field( $post_order_by );
		}

		if ( isset( $post_order ) && '' !== $post_order ) {
			$args['order'] = sanitize_text_field( $post_order );
		}

		global $wp_the_query;
		$query_backup = $wp_the_query;

		$args = apply_filters( 'wpmozo_team_slider_args', $args, $this );

		$query = new WP_Query( $args );

		$output  = '<div class="wpmozo_adfgu_swiper_wrapper">';
			$output .= sprintf(
				'<div class="wpmozo_adfgu_team_slider_container wpmozo_adfgu_swiper_inner_wrap %1$s">',
				esc_attr( $slider_layout )
			);
			$output .= '<div class="swiper-container">';
			$output .= '<div class="swiper-wrapper">';

			while ( $query->have_posts() ) {
				$query->the_post();

				$post_id           = intval( get_the_ID() );
				$member_name       = esc_html( get_the_title( $post_id ) );
				$has_member_image  = has_post_thumbnail( $post_id );
				$meta_fields       = get_post_meta( $post_id );
				$skill_bar         = '';

				if ( $show_skills && '' !== $meta_fields['wpmozo_team_member_skills'][0] && '' !== $meta_fields['wpmozo_team_member_skills_value'][0] ) {
					$team_skills       = explode( ',', $meta_fields['wpmozo_team_member_skills'][0] );
					$team_skills_value = explode( ',', $meta_fields['wpmozo_team_member_skills_value'][0] );

					for ( $i = 0; $i < count( $team_skills ); $i++ ) {
						$filled_bar_size = $team_skills_value[ $i ] . '%';

						$skill_bar .= sprintf(
							'<div class="wpmozo_adfgu_skill_bar_wrapper_inner">
												<div class="wpmozo_adfgu_skill_name">
													%1$s
												</div>
												<div class="wpmozo_adfgu_empty_bar">
													<div class="wpmozo_adfgu_filled_bar" data-skill="%2$s"></div>
												</div>
											</div>',
							$team_skills[ $i ],
							$filled_bar_size
						);
					}
				}

				if ( '' !== $member_name ) {
					$member_name = sprintf(
						'<div class="wpmozo_adfgu_team_member_name">
							<%2$s>%1$s</%2$s>
						</div>',
						esc_html( $member_name ),
						esc_html( $processed_name_level )
					);
				} else {
					$member_name = '';
				}

				if ( $has_member_image ) {
					$member_image = sprintf(
						'<div class="wpmozo_adfgu_team_member_image">%1$s</div>',
						get_the_post_thumbnail( $post_id, 'large' )
					);
				} else {
					$member_image = '';
				}

				if ( $show_short_desc && '' !== $meta_fields['wpmozo_team_member_short_desc'][0] ) {
					$short_description = sprintf(
						'<div class="wpmozo_adfgu_team_member_short_desc">%1$s</div>',
						$meta_fields['wpmozo_team_member_short_desc'][0]
					);
				} else {
					$short_description = '';
				}

				if ( $show_designation && '' !== $meta_fields['wpmozo_team_member_designation'][0] ) {
					$designation = sprintf(
						'<div class="wpmozo_adfgu_team_member_designation">
							<%2$s>%1$s</%2$s>
						</div>',
						$meta_fields['wpmozo_team_member_designation'][0], $processed_designation_level );
				} else {
					$designation = '';
				}

				if ( $show_social_icon ) {
					$website_url	= '';
					$facebook_url   = '';
					$twitter_url    = '';
					$linkedin_url   = '';
					$instagram_url  = '';
					$youtube_url    = '';
					$email          = '';
					$phone_number   = '';

					if ( isset( $meta_fields['wpmozo_team_member_website'] ) && '' !== $meta_fields['wpmozo_team_member_website'][0] ) {
						$website_url = sprintf(
							'<a href="%1$s" target="%2$s">
								<span class="wpmozo_adfgu_team_member_social_icon wpmozo_adfgu_team_website et-pb-icon">&#xe0e3;</span>
							</a>',
							$meta_fields['wpmozo_team_member_website'][0],
							'external' === $social_icon_link_target ? '_blank' : '_self'
						);
					}

					if ( isset( $meta_fields['wpmozo_team_member_facebook'] ) && '' !== $meta_fields['wpmozo_team_member_facebook'][0] ) {
						$facebook_url = sprintf(
							'<a href="%1$s" target="%2$s">
								<span class="wpmozo_adfgu_team_member_social_icon wpmozo_adfgu_team_facebook et-pb-icon">&#xe093;</span>
							</a>',
							$meta_fields['wpmozo_team_member_facebook'][0],
							'external' === $social_icon_link_target ? '_blank' : '_self'
						);
					}

					if ( isset( $meta_fields['wpmozo_team_member_twitter'] ) && '' !== $meta_fields['wpmozo_team_member_twitter'][0] ) {
						$twitter_url = sprintf(
							'<a href="%1$s" target="%2$s">
								<span class="wpmozo_adfgu_team_member_social_icon wpmozo_adfgu_team_twitter fa-brands fa-x-twitter"></span>
							</a>',   
							$meta_fields['wpmozo_team_member_twitter'][0],
							'external' === $social_icon_link_target ? '_blank' : '_self'
						);
					}

					if ( isset( $meta_fields['wpmozo_team_member_linkedin'] ) && '' !== $meta_fields['wpmozo_team_member_linkedin'][0] ) {
						$linkedin_url = sprintf(
							'<a href="%1$s" target="%2$s">
								<span class="wpmozo_adfgu_team_member_social_icon wpmozo_adfgu_team_linkedin et-pb-icon">&#xe09d;</span>
							</a>',
							$meta_fields['wpmozo_team_member_linkedin'][0],
							'external' === $social_icon_link_target ? '_blank' : '_self'
						);
					}

					if ( isset( $meta_fields['wpmozo_team_member_instagram'] ) && '' !== $meta_fields['wpmozo_team_member_instagram'][0] ) {
						$instagram_url = sprintf(
							'<a href="%1$s" target="%2$s">
								<span class="wpmozo_adfgu_team_member_social_icon wpmozo_adfgu_team_instagram et-pb-icon">&#xe09a;</span>
							</a>',
							$meta_fields['wpmozo_team_member_instagram'][0],
							'external' === $social_icon_link_target ? '_blank' : '_self'
						);
					}

					if ( isset( $meta_fields['wpmozo_team_member_youtube'] ) && '' !== $meta_fields['wpmozo_team_member_youtube'][0] ) {
						$youtube_url = sprintf(
							'<a href="%1$s" target="%2$s">
								<span class="wpmozo_adfgu_team_member_social_icon wpmozo_adfgu_team_youtube et-pb-icon">&#xe0a3;</span>
							</a>',
							$meta_fields['wpmozo_team_member_youtube'][0],
							'external' === $social_icon_link_target ? '_blank' : '_self'
						);
					}

					if ( isset( $meta_fields['wpmozo_team_member_email'] ) && '' !== $meta_fields['wpmozo_team_member_email'][0] ) {
						$email = sprintf(
							'<a href="mailto:%1$s" target="%2$s">
								<span class="wpmozo_adfgu_team_member_social_icon wpmozo_adfgu_team_email et-pb-icon">&#xe076;</span>
							</a>',
							$meta_fields['wpmozo_team_member_email'][0],
							'external' === $social_icon_link_target ? '_blank' : '_self'
						);
					}

					if ( isset( $meta_fields['wpmozo_team_member_phone'] ) && '' !== $meta_fields['wpmozo_team_member_phone'][0] ) {
						$phone_number = sprintf(
							'<a href="tel:%1$s" target="%2$s">
								<span class="wpmozo_adfgu_team_member_social_icon wpmozo_adfgu_team_phone et-pb-icon">&#xe090;</span>
							</a>',
							$meta_fields['wpmozo_team_member_phone'][0],
							'external' === $social_icon_link_target ? '_blank' : '_self'
						);
					}
				}

				$output .= '<div class="wpmozo_adfgu_team_member_slide swiper-slide">';
				
				if ( file_exists( get_stylesheet_directory() . '/wpmozo/layouts/team-slider/' . sanitize_file_name( $slider_layout ) . '.php' ) ) {
					include get_stylesheet_directory() . '/wpmozo/layouts/team-slider/' . sanitize_file_name( $slider_layout ) . '.php';
				} elseif ( file_exists( WPMOZO_ADDONS_LITE_GUTENBERG_BLOCKS_DIR_PATH . 'layouts/team-slider/' . sanitize_file_name( $slider_layout ) . '.php' ) ) {
					include WPMOZO_ADDONS_LITE_GUTENBERG_BLOCKS_DIR_PATH . 'layouts/team-slider/' . sanitize_file_name( $slider_layout ) . '.php';
				}

				$output .= '</div>';
			}

			wp_reset_postdata();

			//phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
			$wp_the_query = $query_backup;

			$output .= '</div> <!-- swiper-wrapper -->';

			$output .= '</div> <!-- swiper-container -->';

			if ( $show_arrow ) {
				$next = sprintf(
					'<div class="swiper-button-next"%1$s></div>',
					''
				);

				$prev = sprintf(
					'<div class="swiper-button-prev"%1$s></div>',
					''
				);

				$output .= sprintf(
					'<div class="wpmozo_adfgu_swiper_navigation"%3$s>%1$s %2$s</div>',
					$next,
					$prev,
					$arrows_position
				);
			}

			$output .= '</div> <!-- wpmozo_adfgu_team_slider_container -->';

			if ( $show_control_dot ) {
				$output .= sprintf(
					'<div class="wpmozo_adfgu_swiper_pagination"><div class="swiper-pagination %1$s"></div></div>',
					esc_attr( $control_dot_style )
				);
			}

			$output .= '</div> <!--- wpmozo_adfgu_swiper_wrapper -->';

		return $output;

	}

}
