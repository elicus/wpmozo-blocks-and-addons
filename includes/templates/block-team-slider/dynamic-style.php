<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! function_exists( 'team_slider_generate_dynamic_style' ) ) {
	function team_slider_generate_dynamic_style( $attrs ) {
		if ( empty( $attrs['ID'] ) ) {
			return '';
		}

		$mainSelector = '#block-' . esc_attr( $attrs['ID'] );

		$styles = '';

		// Image.
		$styles .= "{$mainSelector} .wpmozo_swiper_wrapper .wpmozo_bna_team_member_image img{";
			$styles .= ( ! empty( $attrs['imageHeight'] ) ? "height: {$attrs['imageHeight']}px;" : '' );
			$styles .= wpmozo_ban_get_border_style( 'image', $attrs );
		$styles .= "}";

		// Name.
		$styles .= "{$mainSelector} .wpmozo_bna_team_member_name :is(h1, h2, h3, h4, h5, h6){";
			$styles .= ( ! empty( $attrs['nameAlign'] ) ? "text-align: {$attrs['nameAlign']};" : '' );
			$styles .= ( ! empty( $attrs['nameColor'] ) ? "color: {$attrs['nameColor']};" : '' );
			$styles .= wpmozo_ban_get_font_style( 'name', $attrs );
		$styles .= "}";
		// Designation.
		if ( true === $attrs['showDesignation'] ) {
			$styles .= "{$mainSelector} .wpmozo_bna_team_member_designation :is(h1, h2, h3, h4, h5, h6){";
				$styles .= ( ! empty( $attrs['designationAlign'] ) ? "text-align: {$attrs['designationAlign']};" : '' );
				$styles .= ( ! empty( $attrs['designationColor'] ) ? "color: {$attrs['designationColor']};" : '' );
				$styles .= wpmozo_ban_get_font_style( 'designation', $attrs );
			$styles .= "}";
		}
		// Description.
		if ( true === $attrs['showShortDesc'] ) {
			$styles .= "{$mainSelector} .wpmozo_bna_team_member_short_desc, {$mainSelector} .wpmozo_bna_team_member_short_desc a{";
				$styles .= ( ! empty( $attrs['descriptionAlign'] ) ? "text-align: {$attrs['descriptionAlign']};" : '' );
				$styles .= ( ! empty( $attrs['descriptionColor'] ) ? "color: {$attrs['descriptionColor']};" : '' );
				$styles .= wpmozo_ban_get_font_style( 'description', $attrs );
			$styles .= "}";
		}
		// Skills.
		if ( true === $attrs['showSkills'] ) {
			// Skill Text.
			$styles .= "{$mainSelector} .wpmozo_bna_skill_bar_wrapper_inner .wpmozo_bna_skill_name{";
				$styles .= ( ! empty( $attrs['skillAlign'] ) ? "text-align: {$attrs['skillAlign']};" : '' );
				$styles .= ( ! empty( $attrs['skillColor'] ) ? "color: {$attrs['skillColor']};" : '' );
				$styles .= wpmozo_ban_get_font_style( 'skill', $attrs );
			$styles .= "}";
			// Skill bar.
			$styles .= "{$mainSelector} .wpmozo_bna_skill_bar_wrapper .wpmozo_bna_empty_bar{";
				$styles .= ( ! empty( $attrs['barHeight'] ) ? "height: {$attrs['barHeight']}px;" : '' );
				$styles .= ( ! empty( $attrs['barEmptyColor'] ) ? "background-color: {$attrs['barEmptyColor']};" : '' );
			$styles .= "}";
			if ( ! empty( $attrs['barFilledColor'] ) ) {
				$styles .= "{$mainSelector} .wpmozo_bna_skill_bar_wrapper .wpmozo_bna_filled_bar{";
					$styles .= ( ! empty( $attrs['barFilledColor'] ) ? "background-color: {$attrs['barFilledColor']};" : '' );
				$styles .= "}";
			}
		}
		// Social icons.
		if ( true === $attrs['showSocialIcon'] ) {
			$styles .= "{$mainSelector} .layout1 .wpmozo_bna_team_social_wrapper{";
				if ( 'layout1' === $attrs['layout'] ) { 
					$styles .= ( ! empty( $attrs['socialSeparatorSize'] ) ? "border-width: {$attrs['socialSeparatorSize']}px;" : '' );
					$styles .= ( ! empty( $attrs['socialSeparatorColor'] ) ? "border-color: {$attrs['socialSeparatorColor']};" : '' );
				}
				// Align.
				$styles .= 'justify-content: ' . ( 'left' === $attrs['socialIconAlign'] ? 'flex-start'
					: ( 'right' === $attrs['socialIconAlign'] ? 'flex-end' : $attrs['socialIconAlign'] )
				) . ';';
			$styles .= "}";

			// Social icon color set, then rest instagram color.
			if ( ! empty( $attrs['socialIconColor'] ) ) {
				$styles .= "{$mainSelector} .wpmozo_bna_team_instagram{
					background: none; -webkit-background-clip: unset; background-clip: unset; -webkit-text-fill-color: unset;
				}";
			}
			// Social icon.
			$styles .= "{$mainSelector} .wpmozo_bna_team_member_social_icon{";
				$styles .= ( ! empty( $attrs['socialIconSize'] ) ? "font-size: {$attrs['socialIconSize']}px;" : '' );
				$styles .= ( ! empty( $attrs['socialIconColor'] ) ? "color: {$attrs['socialIconColor']};" : '' );
				$styles .= ( ! empty( $attrs['socialIconBgColor'] ) ? "background-color: {$attrs['socialIconBgColor']};" : '' );
				$styles .= wpmozo_ban_get_border_style( 'socialIcon', $attrs );
			$styles .= "}";
		}

		// Link Button.
		if ( true === $attrs['enableLink'] && 'button' === $attrs['linkType'] ) {
			$styles .= "{$mainSelector} .wpmozo-bna-button-wrap .wpmozo-bna-button{";
				$styles .= ( ! empty( $attrs['buttonBGGradient'] ) ? "background: {$attrs['buttonBGGradient']};" : '' );
				$styles .= ( ! empty( $attrs['buttonBackground'] ) ? "background: {$attrs['buttonBackground']};" : '' );
				$styles .= ( ! empty( $attrs['buttonColor'] ) ? "color: {$attrs['buttonColor']};" : '' );
				$styles .= wpmozo_ban_get_margin_style( 'button', $attrs );
				$styles .= wpmozo_ban_get_padding_style( 'button', $attrs );
				$styles .= wpmozo_ban_get_border_style( 'button', $attrs );
				$styles .= wpmozo_ban_get_font_style( 'button', $attrs );
			$styles .= "}";
			$styles .= "{$mainSelector} .wpmozo-bna-button-wrap .wpmozo-bna-button:hover{";
				$styles .= ( ! empty( $attrs['buttonHoverBGGradient'] ) ? "background: {$attrs['buttonHoverBGGradient']};" : '' );
				$styles .= ( ! empty( $attrs['buttonHoverBackground'] ) ? "background: {$attrs['buttonHoverBackground']};" : '' );
				$styles .= ( ! empty( $attrs['buttonHoverColor'] ) ? "color: {$attrs['buttonHoverColor']};" : '' );
				$styles .= wpmozo_ban_get_border_style( 'buttonHover', $attrs );
				$styles .= wpmozo_ban_get_font_style( 'buttonHover', $attrs );
			$styles .= "}";
		}

		// Change cursor when whole item link.
		if ( true === $attrs['enableLink'] && 'item' === $attrs['linkType'] ) {
			$styles .= "{$mainSelector} .wpmozo_bna_team_member_slide{ cursor: pointer; }";
		}

		// Slider arrows.
		if ( true === $attrs['showArrows'] ) {
			$styles .= "{$mainSelector} .swiper-button-next, {$mainSelector} .swiper-button-prev{";
				$styles .= ( ! empty( $attrs['arrowIconSize'] ) ? "font-size: {$attrs['arrowIconSize']}px;" : '' );
				$styles .= ( ! empty( $attrs['arrowBackground'] ) ? "background-color: {$attrs['arrowBackground']};" : '' );
				$styles .= ( ! empty( $attrs['arrowColor'] ) ? "color: {$attrs['arrowColor']};" : '' );
				// $styles .= ( ! empty( $attrs['arrowborderColor'] ) ? "border-color: {$attrs['arrowborderColor']} !important;" : '' );
				$styles .= wpmozo_ban_get_border_style( 'arrow', $attrs );
				$styles .= wpmozo_ban_get_padding_style( 'arrow', $attrs );
			$styles .= "}
				.wpmozo_swiper_wrapper .swiper-button-next:after,
				.wpmozo_swiper_wrapper .swiper-button-prev:after{
						font-size: {$attrs['arrowIconSize']}px;
				}
			";
			if ( true === $attrs['showArrowOnHover'] ) {
				$styles .= "{$mainSelector} .swiper-button-next, {$mainSelector} .swiper-button-prev{";
					$styles .= "visibility: hidden; opacity: 0; transition: all 300ms ease;";
				$styles .= "}";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .swiper-button-next, {$mainSelector} .wpmozo_swiper_wrapper:hover .swiper-button-prev{";
					$styles .= "visibility: visible; opacity: 1;";
				$styles .= "}";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .swiper-button-next.swiper-button-disabled, {$mainSelector} .wpmozo_swiper_wrapper:hover .swiper-button-prev.swiper-button-disabled{";
					$styles .= "opacity: 0.35;";
				$styles .= "}";
				// Outside arrows.
				$styles .= "{$mainSelector} .wpmozo_arrows_outside .swiper-button-prev{ left: 50px; }";
				$styles .= "{$mainSelector} .wpmozo_arrows_outside .swiper-button-next{ right: 50px; }";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-prev{ left: 0; }";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-next{ right: 0; }";
				// Inside arrows.
				$styles .= "{$mainSelector} .wpmozo_arrows_inside .swiper-button-prev{ left: -50px; }";
				$styles .= "{$mainSelector} .wpmozo_arrows_inside .swiper-button-next{ right: -50px; }";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-prev{ left: 0; }";
				$styles .= "{$mainSelector} .wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-next{ right: 0; }";
			}
		}

		// Control dot color.
		if ( true === $attrs['showControlDot'] ) {
			if ( ! empty( $attrs['controlDotColorInactive'] ) ) {
				if(  'transparent_dot' != $attrs['controlDotStyle'] ){
					$styles .= "{$mainSelector} .swiper-pagination-bullet{";
						$styles .= "background: {$attrs['controlDotColorInactive']};";
					$styles .= "}";
				} else {
					$styles .= "{$mainSelector} .transparent_dot .swiper-pagination-bullet{";
						$styles .= "border-color: {$attrs['controlDotColorInactive']} !important;";
					$styles .= "}";
				}
			}
			if ( ! empty( $attrs['controlDotColorActive'] ) && 'transparent_dot' != $attrs['controlDotStyle'] ) {
				$styles .= "{$mainSelector} .swiper-pagination-bullet-active{";
					$styles .= "background: {$attrs['controlDotColorActive']};";
				$styles .= "}";
			} else {
				$styles .= "{$mainSelector} .transparent_dot .swiper-pagination-bullet-active{";
					$styles .= "border-color: {$attrs['controlDotColorActive']} !important;border-width: 2px;border-style: solid;background: transparent;";
				$styles .= "}";
			}
			if ( 'stretched_dot' === $attrs['controlDotStyle'] && ! empty( $attrs['transDuration'] ) ) {
				$styles .= "{$mainSelector} .stretched_dot .swiper-pagination-bullet{";
					$styles .= "transition: all {$attrs['transDuration']}ms ease;";
				$styles .= "}";
			}
		}

		// Coverflow shadow.
		if ( true === $attrs['enableCoverflowShadow'] && ! empty( $attrs['coverflowShadowColor'] ) ) {
			$styles .= "{$mainSelector} .swiper-3d .swiper-slide-shadow-left{";
			$styles .= "background-image: linear-gradient( to left, {$attrs['coverflowShadowColor']}, rgba(0,0,0,0) )";
			$styles .= "}";
			$styles .= "{$mainSelector} .swiper-3d .swiper-slide-shadow-right{";
			$styles .= "background-image: linear-gradient( to right, {$attrs['coverflowShadowColor']}, rgba(0,0,0,0) )";
			$styles .= "}";
		} else {
			$styles .= "{$mainSelector} .swiper-3d .swiper-slide-shadow-left, {$mainSelector} .swiper-3d .swiper-slide-shadow-right{";
			$styles .= "background-image: none";
			$styles .= "}";
		}

		// Slider container.
		$styles .= "{$mainSelector} .swiper-container{";
			$styles .= wpmozo_ban_get_padding_style( 'container', $attrs );
		$styles .= "}";

		// Linear transition.
		if ( true === $attrs['enableLinearTrans'] ) {
			$styles .= "{$mainSelector} .swiper-wrapper{ transition-timing-function : linear !important; }";
		}

		// Item.
		$styles .= "{$mainSelector} .wpmozo_bna_team_member_card{";
			$styles .= ( ! empty( $attrs['itemBGGradient'] ) ? "background: {$attrs['itemBGGradient']};" : '' );
			$styles .= ( ! empty( $attrs['itemBackground'] ) ? "background: {$attrs['itemBackground']};" : '' );
			$styles .= wpmozo_ban_get_padding_style( 'item', $attrs );
			$styles .= wpmozo_ban_get_border_style( 'item', $attrs );
		$styles .= "}";

		// Lightbox style.
		if ( true === $attrs['enableLink'] && true === $attrs['usePopup'] ) {

			$in_popup = $attrs['displayInPopup'] ?? [ "image", "designation", "social_icons", "content", "skills_bars" ];

			// Popup main selector.
			$popupSelector = '.block-' . esc_attr( $attrs['ID'] );

			// Close button.
			$styles .= "{$popupSelector}_lightbox .mfp-close{";
				$styles .= ( ! empty( $attrs['popupCloseIconColor'] ) ? "color: {$attrs['popupCloseIconColor']};" : '' );
				$styles .= ( ! empty( $attrs['popupCloseIconSize'] ) ? "font-size: {$attrs['popupCloseIconSize']}px;" : '' );
			$styles .= "}";

			// Popup wrapper.
			$styles .= "{$popupSelector}_lightbox .wpmozo_bna_team_member_wrapper_lightbox{";
				$styles .= ( ! empty( $attrs['popupWidth'] ) ? "width: {$attrs['popupWidth']}%;" : '' );
				$styles .= ( ! empty( $attrs['popupBackground'] ) ? "background-color: {$attrs['popupBackground']};" : '' );
				$styles .= wpmozo_ban_get_padding_style( 'popup', $attrs );
				$styles .= wpmozo_ban_get_border_style( 'popup', $attrs );
			$styles .= "}";

			// Popup name.
			$styles .= "{$popupSelector}_lightbox .wpmozo_bna_team_member_name{";
				$styles .= ( ! empty( $attrs['popupNameColor'] ) ? "color: {$attrs['popupNameColor']};" : '' );
				$styles .= ( ! empty( $attrs['popupNameAlign'] ) ? "text-align: {$attrs['popupNameAlign']};" : '' );
				$styles .= wpmozo_ban_get_font_style( 'popupName', $attrs );
			$styles .= "}";
			// Popup designation.
			if ( in_array( 'designation', $in_popup ) ) {
				$styles .= "{$popupSelector}_lightbox .wpmozo_bna_team_member_designation{";
					$styles .= ( ! empty( $attrs['popupDesignationColor'] ) ? "color: {$attrs['popupDesignationColor']};" : '' );
					$styles .= ( ! empty( $attrs['popupDesignationAlign'] ) ? "text-align: {$attrs['popupDesignationAlign']};" : '' );
					$styles .= wpmozo_ban_get_font_style( 'popupDesignation', $attrs );
				$styles .= "}";
			}
			// Popup description.
			if ( in_array( 'content', $in_popup ) ) {
				$styles .= "{$popupSelector}_lightbox .wpmozo_bna_team_member_description{";
					$styles .= ( ! empty( $attrs['popupDescriptionColor'] ) ? "color: {$attrs['popupDescriptionColor']};" : '' );
					$styles .= ( ! empty( $attrs['popupDescriptionAlign'] ) ? "text-align: {$attrs['popupDescriptionAlign']};" : '' );
					$styles .= wpmozo_ban_get_font_style( 'popupDescription', $attrs );
				$styles .= "}";
			}
			// Popup skill bars.
			if ( in_array( 'skills_bars', $in_popup ) ) {
				$styles .= "{$popupSelector}_lightbox .wpmozo_bna_skill_bar_wrapper_inner .wpmozo_bna_skill_name,";
				$styles .= "{$popupSelector}_lightbox .wpmozo_bna_bar_counter_wrapper_inner .wpmozo_bna_skill_name{";
					$styles .= ( ! empty( $attrs['popupSkillColor'] ) ? "color: {$attrs['popupSkillColor']};" : '' );
					$styles .= ( ! empty( $attrs['popupSkillAlign'] ) ? "text-align: {$attrs['popupSkillAlign']};" : '' );
					$styles .= wpmozo_ban_get_font_style( 'popupSkill', $attrs );
				$styles .= "}";

				// Layout 2 skill bars.
				if ( 'layout2' === $attrs['popupBarLayout'] ) {
					if ( ! empty( $attrs['popupBarHeight'] ) ) {
						$styles .= "{$popupSelector}_lightbox .wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_chunks{
							height: {$attrs['popupBarHeight']}px;
						}";
					}
					if ( ! empty( $attrs['popupBarEmptyColor'] ) ) {
						$styles .= "{$popupSelector}_lightbox .wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_empty_chunks{
							background-color: {$attrs['popupBarEmptyColor']};
						}";
					}
					if ( ! empty( $attrs['popupBarFilledColor'] ) ) {
						$styles .= "{$popupSelector}_lightbox .wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_filled_chunks:before{
							background-color: {$attrs['popupBarFilledColor']};
						}";
					}
				} else {
					if ( ! empty( $attrs['popupBarHeight'] ) ) {
						$styles .= "{$popupSelector}_lightbox .wpmozo_bna_skill_bar_wrapper .wpmozo_bna_empty_bar{
							height: {$attrs['popupBarHeight']}px;
						}";
					}
					if ( ! empty( $attrs['popupBarEmptyColor'] ) ) {
						$styles .= "{$popupSelector}_lightbox .wpmozo_bna_skill_bar_wrapper .wpmozo_bna_empty_bar{
							background-color: {$attrs['popupBarEmptyColor']};
						}";
					}
					if ( ! empty( $attrs['popupBarFilledColor'] ) ) {
						$styles .= "{$popupSelector}_lightbox .wpmozo_bna_skill_bar_wrapper .wpmozo_bna_filled_bar{
							background-color: {$attrs['popupBarFilledColor']};
						}";
					}
					// Bar Animation.
					if ( true === $attrs['popupBarUseStripe'] ) {
						if ( true === $attrs['popupBarStripeUseAnim'] && ! empty( $attrs['popupBarStripeAnimSpeed'] ) ) {
							$styles .= "{$popupSelector}_lightbox .wpmozo_bna_bar_counter_animated_striped_bar:before{
								animation-duration: {$attrs['popupBarStripeAnimSpeed']}s;
							}";
						}
						if ( ! empty( $attrs['popupBarStripeColor'] ) ) {
							$styles .= "{$popupSelector}_lightbox .wpmozo_bna_bar_counter_striped_bar:before, .wpmozo_bna_bar_counter_animated_striped_bar:before{
								background-image: -webkit-linear-gradient(-45deg, {$attrs['popupBarStripeColor']} 25%, transparent 25%, transparent 50%, {$attrs['popupBarStripeColor']} 50%, {$attrs['popupBarStripeColor']} 75%, transparent 75%, transparent);
								background-image: -moz-linear-gradient(-45deg, {$attrs['popupBarStripeColor']} 25%, transparent 25%, transparent 50%, {$attrs['popupBarStripeColor']} 50%, {$attrs['popupBarStripeColor']} 75%, transparent 75%, transparent);
								background-image: linear-gradient(-45deg, {$attrs['popupBarStripeColor']} 25%, transparent 25%, transparent 50%, {$attrs['popupBarStripeColor']} 50%, {$attrs['popupBarStripeColor']} 75%, transparent 75%, transparent);
							}";
						}

					}
				}
			}
			// Popup social icons.
			if ( in_array( 'social_icons', $in_popup ) ) {
				// Align.
				if ( ! empty( $attrs['socialIconAlign'] ) ) {
					$styles .= "{$popupSelector}_lightbox .wpmozo_bna_team_social_wrapper{";
						$styles .= 'justify-content: ' . ( 'left' === $attrs['socialIconAlign'] ? 'flex-start'
							: ( 'right' === $attrs['socialIconAlign'] ? 'flex-end' : $attrs['socialIconAlign'] )
						) . ';';
					$styles .= "}";
				}
				// Social icon color set, then rest instagram color.
				if ( ! empty( $attrs['popupSocialIconColor'] ) ) {
					$styles .= "{$popupSelector}_lightbox .wpmozo_bna_team_instagram{
						background: none;-webkit-background-clip: unset;background-clip: unset;-webkit-text-fill-color: unset;
					}";
				}
				// Social icon.
				$styles .= "{$popupSelector}_lightbox .wpmozo_bna_team_member_social_icon{";
					$styles .= ( ! empty( $attrs['popupSocialIconSize'] ) ? "font-size: {$attrs['popupSocialIconSize']}px;" : '' );
					$styles .= ( ! empty( $attrs['popupSocialIconColor'] ) ? "color: {$attrs['popupSocialIconColor']};" : '' );
					$styles .= ( ! empty( $attrs['popupSocialIconBgColor'] ) ? "background-color: {$attrs['popupSocialIconBgColor']};" : '' );
					$styles .= wpmozo_ban_get_border_style( 'popupSocialIcon', $attrs );
				$styles .= "}";
			}
		}

		return ( ! empty( $styles ) ?
			"<style>{$styles}</style>"
		: '' );
	}
}
