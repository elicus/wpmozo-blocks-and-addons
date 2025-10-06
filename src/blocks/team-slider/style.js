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
		'popupName'
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

	styles += `}`;

	// Lightbox style.
	if ( attributes.enableLink && attributes.usePopup ) {

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
			styles += `.wpmozo_bna_team_member_name{
				${attributes.popupNameColor ? `color: ${attributes.popupNameColor};` : ''}
				${attributes.popupNameAlign ? `text-align: ${attributes.popupNameAlign};` : ''}
				${attributes.popupName}
			}`;
		styles += `}`;
	}

	return styles;
}

export default generateDynamicStyle;
