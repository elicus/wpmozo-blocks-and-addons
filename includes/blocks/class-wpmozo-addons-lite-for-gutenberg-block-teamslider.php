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
			'handl e' => $this->plugin_name . '-swiper-style',
			'src'    => WPMOZO_ADDONS_LITE_GUTENBERG_ASSETS_DIR_URL . 'css/swiper-bundle.min.css',
			'deps'   => array(),
			'ver'    => time(),
		);

		$json = `
		'lsdkjf': {
		    'ID': {
		        'type': "string",
		    },
		    'postsNumber': {
				'type': "string",
				'default': "10"
			},
			'postOrder': {
				'type': "string",
				'default': "DESC"
			},
			'postOrderBy': {
				'type': "string",
				'default': "date"
			},
			'includeCategories': {
				'type': "array"
			},
			'noResultText': {
				'type': "string",
				'default': "The team member you requested could not be found. Try changing your module settings or create some new team members."
			},
			'showShortDesc': {
				'type': "boolean",
				'default': true
			},
			'showDesignation': {
				'type': "boolean",
				'default': true
			},
			'showSocialIcon': {
				'type': "boolean",
				'default': true
			},
			'socialIconLinkTarget': {
				'type': "string"
			},
			'showSkills': {
				'type': "boolean",
				'default': true
			},
			'sliderLayout': {
				'type': "string",
				'default': "layout1"
			},
			'slideEffect': {
				'type': "string",
				'default': "slide"
			},
			'memberPerSlide': {
				'type': "string",
				'default': "4"
			},
			'slidesPerGroup': {
				'type': "string",
				'default': "1"
			},
			'enableCoverflowShadow': {
				'type': "boolean",
				'default': false
			},
			'coverflowShadowColor': {
				'type': "string",
				'default': "#ccc"
			},
			'coverflowRotate': {
				'type': "number",
				'default': 40
			},
			'coverflowDepth': {
				'type': "number",
				'default': 100
			},
			'spaceBetweenSlides': {
				'type': "number",
				'default': 20
			},
			'equalizeHeight': {
				'type': "boolean",
				'default': true
			},
			'autoHeightSlider': {
				'type': "boolean",
				'default': false
			},
			'sliderLoop': {
				'type': "boolean",
				'default': false
			},
			'autoplay': {
				'type': "boolean",
				'default': true
			},
			'enableLinearTransition': {
				'type': "boolean"
			},
			'autoplaySpeed': {
				'type': "string",
				'default': "3000"
			},
			'pauseOnHover': {
				'type': "boolean",
				'default': true
			},
			'transitionDuration': {
				'type': "string",
				'default': "1000"
			},
			'showArrow': {
				'type': "boolean",
				'default': true
			},
			'previousSlideArrow': {
				'type': "string"
			},
			'nextSlideArrow': {
				'type': "string"
			},
			'showArrowOnHover': {
				'type': "boolean"
			},
			'arrowsPosition': {
				'type': "string",
				'default': "inside"
			},
			'showControlDot': {
				'type': "boolean",
				'default': true
			},
			'controlDotStyle': {
				'type': "string",
				'default': "solid_dot"
			},
			'enableDynamicDots': {
				'type': "boolean",
				'default': false
			},
			'containerbackground': {
				'type': "string"
			},
			'containerpadding': {
				'type': "object"
			},
			'sliderArrowColor': {
				'type': "string"
			},
			'sliderArrowBackground': {
				'type': "string"
			},
			'sliderActiveDoteColor': {
				'type': "string"
			},
			'sliderInactiveDoteColor': {
				'type': "string"
			},
			'arrowFontSize': {
		        'type': "string"
		    },
			'arrowpadding': {
				'type': "object"
			},
			'tabletMemberPerSlide': {
				'type': "string",
				'default': "3"
			},
			'tabletSlidesPerGroup': {
				'type': "string",
				'default': "1"
			},
			'tabletSpaceBetweenSlides': {
				'type': "number",
				'default': 20
			},
			'mobileMemberPerSlide': {
				'type': "string",
				'default': "1"
			},
			'mobileSlidesPerGroup': {
				'type': "string",
				'default': "1"
			},
			'mobileSpaceBetweenSlides': {
				'type': "number",
				'default': 20
			},
			'textAlignment': {
				'type': "string",
				'default': "left"
			},
			'imageHeight': {
				'type': "string"
			},
			'imageborderRadius': {
		        'type': "string",
		    },
		    'imageborder': {
		        'type': "object",
		    },
			'nametext': {
		        'type': "string",
		    },
		    'nameFontSize': {
		        'type': "string",
		    },
		    'nameFontAppearance': {
		        'type': "object",
		        'fontStyle': {
		            'type': "string",
		        },
		        'fontWeight': {
		            'type': "string",
		        },
		        'default': {
		            fontStyle: "",
		            fontWeight: "",
		        }
		    },
		    'nameLetterSpacing': {
		        'type': "string",
		    },
		    'nameDecoration': {
		        'type': "string",
		    },
		    'nameLetterCase': {
		        'type': "string",
		    },
		    'nameLineHeight': {
		        'type': "string",
		    },
		    'nameTextAlignment': {
		        'type': "string",
		        'default': "left"
		    },
		    'nameHeadingLavel': {
		        'type': "string",
		        'default': "h2"
		    },
		    'designationtext': {
		        'type': "string",
		    },
		    'designationFontSize': {
		        'type': "string",
		    },
		    'designationFontAppearance': {
		        'type': "object",
		        'fontStyle': {
		            'type': "string",
		        },
		        'fontWeight': {
		            'type': "string",
		        },
		        'default': {
		            fontStyle: "",
		            fontWeight: "",
		        }
		    },
		    'designationLetterSpacing': {
		        'type': "string",
		    },
		    'designationDecoration': {
		        'type': "string",
		    },
		    'designationLetterCase': {
		        'type': "string",
		    },
		    'designationLineHeight': {
		        'type': "string",
		    },
		    'designationTextAlignment': {
		        'type': "string",
		        'default': "left"
		    },
		    'designationHeadingLavel': {
		        'type': "string",
		        'default': "h4"
		    },
		    'skilltext': {
		        'type': "string",
		    },
		    'skillFontSize': {
		        'type': "string",
		    },
		    'skillFontAppearance': {
		        'type': "object",
		        'fontStyle': {
		            'type': "string",
		        },
		        'fontWeight': {
		            'type': "string",
		        },
		        'default': {
		            fontStyle: "",
		            fontWeight: "",
		        }
		    },
		    'skillLetterSpacing': {
		        'type': "string",
		    },
		    'skillDecoration': {
		        'type': "string",
		    },
		    'skillLetterCase': {
		        'type': "string",
		    },
		    'skillLineHeight': {
		        'type': "string",
		    },
		    'skillTextAlignment': {
		        'type': "string",
		        'default': "left"
		    },
		    'descriptiontext': {
		        'type': "string",
		    },
		    'descriptionFontSize': {
		        'type': "string",
		    },
		    'descriptionFontAppearance': {
		        'type': "object",
		        'fontStyle': {
		            'type': "string",
		        },
		        'fontWeight': {
		            'type': "string",
		        },
		        'default': {
		            fontStyle: "",
		            fontWeight: "",
		        }
		    },
		    'descriptionLetterSpacing': {
		        'type': "string",
		    },
		    'descriptionDecoration': {
		        'type': "string",
		    },
		    'descriptionLetterCase': {
		        'type': "string",
		    },
		    'descriptionLineHeight': {
		        'type': "string",
		    },
		    'descriptionTextAlignment': {
		        'type': "string",
		        'default': "left"
		    },
		    'barHeight': {
		        'type': "string",
		        'default': "12px"
		    },
		    'barEmptyColor': {
		        'type': "string",
		        'default': "#ccc"
		    },
		    'barFilledColor': {
		        'type': "string",
		        'default': "#0c71c3"
		    },
		    'iconSeparatorColor': {
		        'type': "string",
		        'default': "#cccccc"
		    },
		    'iconColor': {
		        'type': "string"
		    },
		    'iconBackgroundColor': {
		        'type': "string"
		    },
		    'separatorSize': {
		        'type': "string",
		        'default': "10px"
		    },
		    'iconSize': {
		        'type': "string",
		        'default': "16px"
		    },
		    'socialIconsAlignment': {
		        'type': "string",
		        'default': "center"
		    },
		    'iconborderRadius': {
		        'type': "string"
		    },
		    'iconborder': {
		        'type': "object"
		    },
		    'arrowborderRadius': {
		        'type': "string"
		    },
		    'arrowborder': {
		        'type': "object"
		    },
		    'slideborderRadius': {
		        'type': "string"
		    },
		    'slideborder': {
		        'type': "object"
		    },
		    'slidepadding': {
				'type': "object"
			}
		}
		`;

		$attributes = [
   "postsNumber" => "10", 
   "postOrder" => "DESC", 
   "postOrderBy" => "date", 
   "noResultText" => "The team member you requested could not be found. Try changing your module settings or create some new team members.", 
   "showShortDesc" => true, 
   "showDesignation" => true, 
   "showSocialIcon" => true, 
   "showSkills" => true, 
   "sliderLayout" => "layout1", 
   "slideEffect" => "slide", 
   "memberPerSlide" => "4", 
   "slidesPerGroup" => "1", 
   "enableCoverflowShadow" => false, 
   "coverflowShadowColor" => "#ccc", 
   "coverflowRotate" => 40, 
   "coverflowDepth" => 100, 
   "spaceBetweenSlides" => 20, 
   "equalizeHeight" => true, 
   "autoHeightSlider" => false, 
   "sliderLoop" => false, 
   "autoplay" => true, 
   "autoplaySpeed" => "3000", 
   "pauseOnHover" => true, 
   "transitionDuration" => "1000", 
   "showArrow" => true, 
   "arrowsPosition" => "inside", 
   "showControlDot" => true, 
   "controlDotStyle" => "solid_dot", 
   "enableDynamicDots" => false, 
   "tabletMemberPerSlide" => "3", 
   "tabletSlidesPerGroup" => "1", 
   "tabletSpaceBetweenSlides" => 20, 
   "mobileMemberPerSlide" => "1", 
   "mobileSlidesPerGroup" => "1", 
   "mobileSpaceBetweenSlides" => 20, 
   "textAlignment" => "left", 
   "nameFontAppearance" => [
         "fontStyle" => "", 
         "fontWeight" => "" 
      ], 
   "nameTextAlignment" => "left", 
   "nameHeadingLavel" => "h2", 
   "designationFontAppearance" => [
            "fontStyle" => "", 
            "fontWeight" => "" 
         ], 
   "designationTextAlignment" => "left", 
   "designationHeadingLavel" => "h4", 
   "skillFontAppearance" => [
               "fontStyle" => "", 
               "fontWeight" => "" 
            ], 
   "skillTextAlignment" => "left", 
   "descriptionFontAppearance" => [
                  "fontStyle" => "", 
                  "fontWeight" => "" 
               ], 
   "descriptionTextAlignment" => "left", 
   "barHeight" => "12px", 
   "barEmptyColor" => "#ccc", 
   "barFilledColor" => "#0c71c3", 
   "iconSeparatorColor" => "#cccccc", 
   "separatorSize" => "10px", 
   "iconSize" => "16px", 
   "socialIconsAlignment" => "center", 
   "UAGHideDesktop" => false, 
   "UAGHideMob" => false, 
   "UAGHideTab" => false, 
   "UAGLoggedIn" => false, 
   "UAGLoggedOut" => false, 
   "UAGDay" => [
                  ], 
   "UAGResponsiveConditions" => false, 
   "UAGAnimationType" => "", 
   "UAGAnimationTime" => 400, 
   "UAGAnimationDelay" => 0, 
   "UAGAnimationEasing" => "ease", 
   "UAGAnimationRepeat" => false, 
   "UAGPosition" => "", 
   "UAGStickyLocation" => "top", 
   "UAGStickyRestricted" => false, 
   "UAGStickyOffset" => 0, 
   "ID" => "054dae5305f6" 
];

		// echo "<pre>";
		// var_dump( $attributes );
		// echo "</pre>";
		// die();

		$this->args = array(
			'script_handles' => array(
				$this->plugin_name . '-swiper-script',
			),
			'style_handles'  => array(
				$this->plugin_name . '-swiper-style',
				$this->plugin_name . '-team-slider-style',
			),
			'render_callback' => 'team_slider_render_callback'
		);

	}

	/**
	 * Render team slider markup.
	 *
	 * @since 1.0.0
	 * @param array $attributes The arguments of block.
	 */
	public function team_slider_render_callback( $attributes ) {

		return "<h1>Hello World</h1>";

	}

}
