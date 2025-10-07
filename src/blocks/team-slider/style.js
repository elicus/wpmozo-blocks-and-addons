import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'button',
		'buttonHover',
		'image',
		'name',
		'designation',
		'description',
		'skill',
		'socialIcon',
		'popup',
		'popupName',
		'popupDesignation',
		'popupDescription',
		'popupSkill',
		'popupSocialIcon',
		'container',
		'item',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	// Image.
	styles += `.wpmozo_swiper_wrapper .wpmozo_bna_team_member_image img{
		${attributes.imageHeight ? `height:`+ attributes.imageHeight + `px;` : ''}
		${convertedStyle.image}
	}`;

	// Name.
	styles += `.wpmozo_bna_team_member_name :is(h1, h2, h3, h4, h5, h6){
		${attributes.nameAlign ? `text-align: ${attributes.nameAlign};` : ''}
		${attributes.nameColor ? `color: ${attributes.nameColor};` : ''}
		${convertedStyle.name}
	}`;
	// Designation.
	if ( attributes.showDesignation ) {
		styles += `.wpmozo_bna_team_member_designation :is(h1, h2, h3, h4, h5, h6){
			${attributes.designationAlign ? `text-align: ${attributes.designationAlign};` : ''}
			${attributes.designationColor ? `color: ${attributes.designationColor};` : ''}
			${convertedStyle.designation}
		}`;
	}
	// Description.
	if ( attributes.showShortDesc ) {
		styles += `.wpmozo_bna_team_member_short_desc, .wpmozo_bna_team_member_short_desc a{
			${attributes.descriptionAlign ? `text-align: ${attributes.descriptionAlign};` : ''}
			${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
			${convertedStyle.description}
		}`;
	}
	// Skills.
	if ( attributes.showSkills ) {
		// Skill Text.
		styles += `.wpmozo_bna_skill_bar_wrapper_inner .wpmozo_bna_skill_name{
			${attributes.skillAlign ? `text-align: ${attributes.skillAlign};` : ''}
			${attributes.skillColor ? `color: ${attributes.skillColor};` : ''}
			${convertedStyle.skill}
		}`;
		// Skill bar.
		styles += `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_empty_bar{
			${attributes.barHeight ? `height: ${attributes.barHeight}px;` : ''}
			${attributes.barEmptyColor ? `background-color: ${attributes.barEmptyColor};` : ''}
		}`;
		if ( attributes.barFilledColor ) {
			styles += `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_filled_bar{
				background-color: ${attributes.barFilledColor};
			}`;
		}
	}
	// Social icons.
	if ( attributes.showSocialIcon ) {
		styles += `.layout1 .wpmozo_bna_team_social_wrapper{`;
			// Separator.
			if ( 'layout1' === attributes.layout ) { 
				styles += `${attributes.socialSeparatorSize ? `border-width: ${attributes.socialSeparatorSize}px;` : ''}`;
				styles += `${attributes.socialSeparatorColor ? `border-color: ${attributes.socialSeparatorColor};` : ''}`;
			}
			// Align.
			styles += `justify-content: ${ ( 'left' === attributes.socialIconAlign ? 'flex-start' : ( ( 'right' === attributes.socialIconAlign ) ? 'flex-end' : attributes.socialIconAlign ) ) };`;
		styles += `}`;

		// Social icon color set, then rest instagram color.
		if ( attributes.socialIconColor ) {
			styles += `.wpmozo_bna_team_instagram{
				background: none; -webkit-background-clip: unset; background-clip: unset; -webkit-text-fill-color: unset;
			}`;
		}
		// Social icon.
		styles += `.wpmozo_bna_team_member_social_icon{
			${attributes.socialIconSize ? `font-size: ${attributes.socialIconSize}px;` : ''}
			${attributes.socialIconColor ? `color: ${attributes.socialIconColor};` : ''}
			${attributes.socialIconBgColor ? `background-color: ${attributes.socialIconBgColor};` : ''}
			${convertedStyle.socialIcon}
		}`;
	}
	// Link Button.
	if ( attributes.enableLink && 'button' === attributes.linkType ) {
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button{
			${attributes.buttonBGGradient ? `background:`+ attributes.buttonBGGradient + `;` : ''}
			${attributes.buttonBackground ? `background:`+ attributes.buttonBackground + `;` : ''}
			${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
			${convertedStyle.button}
		}`;
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover{
			${attributes.buttonHoverBGGradient ? `background:`+ attributes.buttonHoverBGGradient + `;` : ''}
			${attributes.buttonHoverBackground ? `background:`+ attributes.buttonHoverBackground + `;` : ''}
			${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
			${convertedStyle.buttonHover}
		}`;
	}

	// Slider arrows.
	if ( attributes.showArrows ) {
		styles += `.swiper-button-next, .swiper-button-prev{
			${attributes.arrowBackground ? `background-color: ${attributes.arrowBackground};` : ''}
			${attributes.arrowColor ? `color: ${attributes.arrowColor};` : ''}
			${convertedStyle.arrow}
		}
		.wpmozo_swiper_wrapper .swiper-button-next:after,
		.wpmozo_swiper_wrapper .swiper-button-prev:after{
			${attributes.arrowIconSize ? `font-size: ${attributes.arrowIconSize}px;` : ''}
		}`;
		if ( attributes.showArrowOnHover ) {
			styles += `.swiper-button-next, .swiper-button-prev{
				visibility: hidden; opacity: 0; transition: all 300ms ease;
			}`;
			styles += `.wpmozo_swiper_wrapper:hover .swiper-button-next,.wpmozo_swiper_wrapper:hover .swiper-button-prev{
				visibility: visible; opacity: 1;
			}`;
			styles += `.wpmozo_swiper_wrapper:hover .swiper-button-next.swiper-button-disabled,.wpmozo_swiper_wrapper:hover .swiper-button-prev.swiper-button-disabled{
				opacity: 0.35;
			}`;
			// Outside arrows.
			styles += `.wpmozo_arrows_outside .swiper-button-prev{ left: 50px; }`;
			styles += `.wpmozo_arrows_outside .swiper-button-next{ right: 50px; }`;
			styles += `.wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-prev{ left: 0; }`;
			styles += `.wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-next{ right: 0; }`;
			// Inside arrows.
			styles += `.wpmozo_arrows_inside .swiper-button-prev{ left: -50px; }`;
			styles += `.wpmozo_arrows_inside .swiper-button-next{ right: -50px; }`;
			styles += `.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-prev{ left: 0; }`;
			styles += `.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-next{ right: 0; }`;
		}
	}
	// Control dot color.
	if ( attributes.showControlDot ) {
		if ( attributes.controlDotColorInactive && 'transparent_dot' != attributes.controlDotStyle ) {
			styles += `.swiper-pagination-bullet{
				background: ${attributes.controlDotColorInactive};
			}`;

		} else {
			styles += `.transparent_dot .swiper-pagination-bullet{
				border-color: ${attributes.controlDotColorInactive} !important;
			}`;
		}
		if ( attributes.controlDotColorActive && 'transparent_dot' != attributes.controlDotStyle) {
			styles += `.swiper-pagination-bullet-active{
				background: ${attributes.controlDotColorActive};
			}`;
		} else {
			styles += `.transparent_dot .swiper-pagination-bullet-active{
				border-color: ${attributes.controlDotColorActive} !important;border-width: 2px;border-style: solid;background: transparent;
			}`;
		}
		if ( 'stretched_dot' === attributes.controlDotStyle && attributes.transDuration ) {
			styles += `.stretched_dot .swiper-pagination-bullet{
				transition: all ${attributes.transDuration}ms ease;
			}`;
		}
	}
	// Coverflow shadow.
	if ( attributes.enableCoverflowShadow ) {
		styles += `.swiper-3d .swiper-slide-shadow-left{
			background-image: linear-gradient( to left, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
		}`;
		styles += `.swiper-3d .swiper-slide-shadow-right{
			background-image: linear-gradient( to right, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
		}`;
	} else {
		styles += `.swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right{
			background-image: none;
		}`;
	}
	// Slider container.
	styles += `.swiper-container{
		${convertedStyle.container}
	}`;
	// Linear transition.
	if ( attributes.enableLinearTrans ) {
		styles += `.swiper-wrapper{ transition-timing-function : linear !important; }`;
	}

	// Item.
	styles += `.wpmozo_bna_team_member_card{
		${attributes.itemBGGradient ? `background:`+ attributes.itemBGGradient + `;` : ''}
		${attributes.itemBackground ? `background:`+ attributes.itemBackground + `;` : ''}
		${convertedStyle.item}
	}`;

	styles += `}`;

	// Lightbox style.
	if ( attributes.enableLink && attributes.usePopup ) {
		// Popup overlay background.
		if ( attributes.popupOverlayBackground ) {
			styles += `.block-${attributes.ID}_lightbox.mfp-bg{
				background-color: ${ attributes.popupOverlayBackground };
			}`;
		}

		styles += `.block-${attributes.ID}_lightbox{`;
			styles += `.mfp-close{
				${attributes.popupCloseIconColor ? `color: ${ attributes.popupCloseIconColor };` : ''}
				${attributes.popupCloseIconSize ? `font-size: ${ attributes.popupCloseIconSize }px;` : ''}
			}`;
			styles += `.wpmozo_bna_team_member_wrapper_lightbox{
				${attributes.popupWidth ? `width: ${ attributes.popupWidth }%;` : ''}
				${attributes.popupBackground ? `background-color: ${ attributes.popupBackground };` : ''}
				${convertedStyle.popup}
			}`;
			// Popup name.
			styles += `.wpmozo_bna_team_member_name{
				${attributes.popupNameColor ? `color: ${attributes.popupNameColor};` : ''}
				${attributes.popupNameAlign ? `text-align: ${attributes.popupNameAlign};` : ''}
				${convertedStyle.popupName}
			}`;
			// Popup designation.
			if ( ( attributes.displayInPopup ).includes( 'designation' ) ) {
				styles += `.wpmozo_bna_team_member_designation{
					${attributes.popupDesignationColor ? `color: ${attributes.popupDesignationColor};` : ''}
					${attributes.popupDesignationAlign ? `text-align: ${attributes.popupDesignationAlign};` : ''}
					${convertedStyle.popupDesignation}
				}`;
			}
			// Popup description.
			if ( ( attributes.displayInPopup ).includes( 'content' ) ) {
				styles += `.wpmozo_bna_team_member_description{
					${attributes.popupDescriptionColor ? `color: ${attributes.popupDescriptionColor};` : ''}
					${attributes.popupDescriptionAlign ? `text-align: ${attributes.popupDescriptionAlign};` : ''}
					${convertedStyle.popupDescription}
				}`;
			}
			// Popup skill bars.
			if ( ( attributes.displayInPopup ).includes( 'skills_bars' ) ) {
				styles += `.wpmozo_bna_skill_bar_wrapper_inner .wpmozo_bna_skill_name, .wpmozo_bna_bar_counter_wrapper_inner .wpmozo_bna_skill_name{
					${attributes.popupSkillColor ? `color: ${attributes.popupSkillColor};` : ''}
					${attributes.popupSkillAlign ? `text-align: ${attributes.popupSkillAlign};` : ''}
					${convertedStyle.popupSkill}
				}`;

				// Layout 2 skill bars.
				if ( 'layout2' === attributes.popupBarLayout ) {
					if ( attributes.popupBarHeight ) {
						styles += `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_chunks{
							height: ${attributes.popupBarHeight}px;
						}`;
					}
					if ( attributes.popupBarEmptyColor ) {
						styles += `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_empty_chunks{
							background-color: ${attributes.popupBarEmptyColor};
						}`;
					}
					if ( attributes.popupBarFilledColor ) {
						styles += `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_filled_chunks:before{
							background-color: ${attributes.popupBarFilledColor};
						}`;
					}
				} else {
					if ( attributes.popupBarHeight ) {
						styles += `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_empty_bar{
							height: ${attributes.popupBarHeight}px;
						}`;
					}
					if ( attributes.popupBarEmptyColor ) {
						styles += `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_empty_bar{
							background-color: ${attributes.popupBarEmptyColor};
						}`;
					}
					if ( attributes.popupBarFilledColor ) {
						styles += `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_filled_bar{
							background-color: ${attributes.popupBarFilledColor};
						}`;
					}
					// Bar Animation.
					if ( attributes.popupBarUseStripe ) {
						if ( attributes.popupBarStripeUseAnim && attributes.popupBarStripeAnimSpeed ) {
							styles += `.wpmozo_bna_bar_counter_animated_striped_bar:before{
								animation-duration: ${attributes.popupBarStripeAnimSpeed}s;
							}`;
						}
						if ( attributes.popupBarStripeColor ) {
							styles += `.wpmozo_bna_bar_counter_striped_bar:before, .wpmozo_bna_bar_counter_animated_striped_bar:before{
								background-image: -webkit-linear-gradient(-45deg, ${attributes.popupBarStripeColor} 25%, transparent 25%, transparent 50%, ${attributes.popupBarStripeColor} 50%, ${attributes.popupBarStripeColor} 75%, transparent 75%, transparent);
								background-image: -moz-linear-gradient(-45deg, ${attributes.popupBarStripeColor} 25%, transparent 25%, transparent 50%, ${attributes.popupBarStripeColor} 50%, ${attributes.popupBarStripeColor} 75%, transparent 75%, transparent);
								background-image: linear-gradient(-45deg, ${attributes.popupBarStripeColor} 25%, transparent 25%, transparent 50%, ${attributes.popupBarStripeColor} 50%, ${attributes.popupBarStripeColor} 75%, transparent 75%, transparent);
							}`;
						}
					}
				}
			}
			// Popup social icons.
			if ( ( attributes.displayInPopup ).includes( 'social_icons' ) ) {
				// Align.
				if ( attributes.popupSocialIconAlign ) {
					styles += `.wpmozo_bna_team_social_wrapper{
						justify-content: ${ ( 'left' === attributes.popupSocialIconAlign ? 'flex-start' : ( ( 'right' === attributes.popupSocialIconAlign ) ? 'flex-end' : attributes.popupSocialIconAlign ) ) };
					}`;
				}
				// Social icon color set, then rest instagram color.
				if ( attributes.popupSocialIconColor ) {
					styles += `.wpmozo_bna_team_instagram{
						background: none;-webkit-background-clip: unset;background-clip: unset;-webkit-text-fill-color: unset;
					}`;
				}
				// Social icon.
				styles += `.wpmozo_bna_team_member_social_icon{
					${attributes.popupSocialIconSize ? `font-size: ${attributes.popupSocialIconSize}px;` : ''}
					${attributes.popupSocialIconColor ? `color: ${attributes.popupSocialIconColor};` : ''}
					${attributes.popupSocialIconBgColor ? `background-color: ${attributes.popupSocialIconBgColor};` : ''}
					${convertedStyle.popupSocialIcon}
				}`;
			}
		styles += `}`;
	}

	return styles;
}

export default generateDynamicStyle;
