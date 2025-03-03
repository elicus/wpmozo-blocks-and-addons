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

		$this->args = array(
			'script_handles' => array(
				$this->plugin_name . '-swiper-script',
			),
			'style_handles'  => array(
				$this->plugin_name . '-swiper-style',
				$this->plugin_name . '-team-slider-style',
			),
			'attributes' => 
			array(
				'ID' => 
				array(
					'type' => 'string'), 
				'postsNumber' => array(
					'type' => 'string', 'default' => '10'), 
				'postOrder' => array(
					'type' => 'string', 'default' => 'DESC'), 
				'postOrderBy' => array(
					'type' => 'string', 'default' => 'date'), 
				'includeCategories' => array(
					'type' => 'array'), 
				'noResultText' => array(
					'type' => 'string', 'default' => 'The team member you requested could not be found. Try changing your module settings or create	 some new team members.'), 
			'showShortDesc' => array(
					'type' => 'boolean', 'default' => true), 
				'showDesignation' => array(
					'type' => 'boolean', 'default' => true), 
				'showSocialIcon' => array(
					'type' => 'boolean', 'default' => true), 
				'socialIconLinkTarget' => array(
					'type' => 'string'), 
				'showSkills' => array(
					'type' => 'boolean', 'default' => true), 
				'sliderLayout' => array(
					'type' => 'string', 'default' => 'layout1'), 
				'slideEffect' => array(
					'type' => 'string', 'default' => 'slide'), 
				'memberPerSlide' => array(
					'type' => 'string', 'default' => '4'), 
				'slidesPerGroup' => array(
					'type' => 'string', 'default' => '1'), 
				'enableCoverflowShadow' => array(
					'type' => 'boolean', 'default' => false), 
				'coverflowShadowColor' => array(
					'type' => 'string', 'default' => '#ccc'), 
				'coverflowRotate' => array(
					'type' => 'number', 'default' => 40), 
				'coverflowDepth' => array(
					'type' => 'number', 'default' => 100), 
				'spaceBetweenSlides' => array(
					'type' => 'number', 'default' => 20), 
				'equalizeHeight' => array(
					'type' => 'boolean', 'default' => true), 
				'autoHeightSlider' => array(
					'type' => 'boolean', 'default' => false), 
				'sliderLoop' => array(
					'type' => 'boolean', 'default' => false), 
				'autoplay' => array(
					'type' => 'boolean', 'default' => true), 
				'enableLinearTransition' => array(
					'type' => 'boolean', 'default' => false), 
				'autoplaySpeed' => array(
					'type' => 'string', 'default' => '3000'), 
				'pauseOnHover' => array(
					'type' => 'boolean', 'default' => true), 
				'transitionDuration' => array(
					'type' => 'string', 'default' => '1000'), 
				'showArrow' => array(
					'type' => 'boolean', 'default' => true), 
				'previousSlideArrow' => array(
					'type' => 'string'), 
				'nextSlideArrow' => array(
					'type' => 'string'), 
				'showArrowOnHover' => array(
					'type' => 'boolean', 'default' => false), 
				'arrowsPosition' => array(
					'type' => 'string', 'default' => 'inside'), 
				'showControlDot' => array(
					'type' => 'boolean', 'default' => true), 
				'controlDotStyle' => array(
					'type' => 'string', 'default' => 'solid_dot'), 
				'enableDynamicDots' => array(
					'type' => 'boolean', 'default' => false), 
				'containerbackground' => array(
					'type' => 'string'), 
				'containerpadding' => array(
					'type' => 'object'), 
				'sliderArrowColor' => array(
					'type' => 'string'), 
				'sliderArrowBackground' => array(
					'type' => 'string'), 
				'sliderActiveDoteColor' => array(
					'type' => 'string'), 
				'sliderInactiveDoteColor' => array(
					'type' => 'string'), 
				'arrowFontSize' => array(
					'type' => 'string'), 
				'arrowpadding' => array(
					'type' => 'object'), 
				'tabletMemberPerSlide' => array(
					'type' => 'string', 'default' => '3'), 
				'tabletSlidesPerGroup' => array(
					'type' => 'string', 'default' => '1'), 
				'tabletSpaceBetweenSlides' => array(
					'type' => 'number', 'default' => 20), 
				'mobileMemberPerSlide' => array(
					'type' => 'string', 'default' => '1'), 
				'mobileSlidesPerGroup' => array(
					'type' => 'string', 'default' => '1'), 
				'mobileSpaceBetweenSlides' => array(
					'type' => 'number', 'default' => 20), 
				'textAlignment' => array(
					'type' => 'string', 'default' => 'left'), 
				'imageHeight' => array(
					'type' => 'string'), 
				'imageborderRadius' => array(
					'type' => 'string'), 
				'imageborder' => array(
					'type' => 'object'), 
				'nametext' => array(
					'type' => 'string'), 
				'nameFontSize' => array(
					'type' => 'string'), 
				'nameFontAppearance' => array(
					'type' => 'object', 'fontStyle' => array(
							'type' => 'string'), 
					'fontWeight' => array(
					'type' => 'string'), 
				'default' => array(
					'fontStyle' => '', 'fontWeight' => '')), 
				'nameLetterSpacing' => array(
					'type' => 'string'), 
				'nameDecoration' => array(
					'type' => 'string'), 
				'nameLetterCase' => array(
					'type' => 'string'), 
				'nameLineHeight' => array(
					'type' => 'string'), 
				'nameTextAlignment' => array(
					'type' => 'string', 'default' => 'left'), 
				'nameHeadingLavel' => array(
					'type' => 'string', 'default' => 'h2'), 
				'designationtext' => array(
					'type' => 'string'), 
				'designationFontSize' => array(
					'type' => 'string'), 
				'designationFontAppearance' => array(
					'type' => 'object', 'fontStyle' => array(
							'type' => 'string'), 
					'fontWeight' => array(
					'type' => 'string'), 
				'default' => array(
					'fontStyle' => '', 'fontWeight' => '')), 
				'designationLetterSpacing' => array(
					'type' => 'string'), 
				'designationDecoration' => array(
					'type' => 'string'), 
				'designationLetterCase' => array(
					'type' => 'string'), 
				'designationLineHeight' => array(
					'type' => 'string'), 
				'designationTextAlignment' => array(
					'type' => 'string', 'default' => 'left'), 
				'designationHeadingLavel' => array(
					'type' => 'string', 'default' => 'h4'), 
				'skilltext' => array(
					'type' => 'string'), 
				'skillFontSize' => array(
					'type' => 'string'), 
				'skillFontAppearance' => array(
					'type' => 'object', 'fontStyle' => array(
							'type' => 'string'), 
					'fontWeight' => array(
					'type' => 'string'), 
				'default' => array(
					'fontStyle' => '', 'fontWeight' => '')), 
				'skillLetterSpacing' => array(
					'type' => 'string'), 
				'skillDecoration' => array(
					'type' => 'string'), 
				'skillLetterCase' => array(
					'type' => 'string'), 
				'skillLineHeight' => array(
					'type' => 'string'), 
				'skillTextAlignment' => array(
					'type' => 'string', 'default' => 'left'), 
				'descriptiontext' => array(
					'type' => 'string'), 
				'descriptionFontSize' => array(
					'type' => 'string'), 
				'descriptionFontAppearance' => array(
					'type' => 'object', 'fontStyle' => array(
							'type' => 'string'), 
					'fontWeight' => array(
					'type' => 'string'), 
				'default' => array(
					'fontStyle' => '', 'fontWeight' => '')), 
				'descriptionLetterSpacing' => array(
					'type' => 'string'), 
				'descriptionDecoration' => array(
					'type' => 'string'), 
				'descriptionLetterCase' => array(
					'type' => 'string'), 
				'descriptionLineHeight' => array(
					'type' => 'string'), 
				'descriptionTextAlignment' => array(
					'type' => 'string', 'default' => 'left'), 
				'barHeight' => array(
					'type' => 'string', 'default' => '12px'), 
				'barEmptyColor' => array(
					'type' => 'string', 'default' => '#ccc'), 
				'barFilledColor' => array(
					'type' => 'string', 'default' => '#0c71c3'), 
				'iconSeparatorColor' => array(
					'type' => 'string', 'default' => '#cccccc'), 
				'iconColor' => array(
					'type' => 'string'), 
				'iconBackgroundColor' => array(
					'type' => 'string'), 
				'separatorSize' => array(
					'type' => 'string', 'default' => '10px'), 
				'iconSize' => array(
					'type' => 'string', 'default' => '16px'), 
				'socialIconsAlignment' => array(
					'type' => 'string', 'default' => 'center'), 
				'iconborderRadius' => array(
					'type' => 'string'), 
				'iconborder' => array(
					'type' => 'object'), 
				'arrowborderRadius' => array(
					'type' => 'string'), 
				'arrowborder' => array(
					'type' => 'object'), 
				'slideborderRadius' => array(
					'type' => 'string'), 
				'slideborder' => array(
					'type' => 'object'), 
				'slidepadding' => array(
					'type' => 'object')	
		    ),

			'render_callback' => array( $this, 'team_slider_render_callback' )
		);

	}

	/**
	 * Render team slider markup.
	 *
	 * @since 1.0.0
	 * @param array $attributes The arguments of block.
	 */
	public function team_slider_render_callback( $attributes, $content ) {

		ob_start();
		echo "<pre>";
		var_dump( $attributes );
		echo "</pre>";

		return ob_get_clean();

	}

}
