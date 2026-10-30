import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId, isEdit } ) => {
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
		'arrow'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.imageHeight || convertedStyle.image ) 
		? `.wpmozo_swiper_wrapper .wpmozo_bna_team_member_image img{
				${attributes.imageHeight ? `height:${attributes.imageHeight}px;` : ''}
				${convertedStyle.image || ''}
			}`
		: ''
	);
	
	normalcss.push(
		( attributes.nameAlign || attributes.nameColor || convertedStyle.name ) 
		? `.wpmozo_bna_team_member_name :is(h1, h2, h3, h4, h5, h6){
				${attributes.nameAlign ? `text-align:${attributes.nameAlign};` : ''}
				${attributes.nameColor ? `color:${attributes.nameColor};` : ''}
				${convertedStyle.name || ''}
			}`
		: ''
	);

	if ( attributes.showDesignation ) {
		normalcss.push(
			( attributes.designationAlign || attributes.designationColor || convertedStyle.designation ) 
			? `.wpmozo_bna_team_member_designation :is(h1, h2, h3, h4, h5, h6){
					${attributes.designationAlign ? `text-align:${attributes.designationAlign};` : ''}
					${attributes.designationColor ? `color:${attributes.designationColor};` : ''}
					${convertedStyle.designation || ''}
				}`
			: ''
		);
	}

	if ( attributes.showShortDesc ) {
		normalcss.push(
			( attributes.descriptionAlign || attributes.descriptionColor || convertedStyle.description ) 
			? `.wpmozo_bna_team_member_short_desc, .wpmozo_bna_team_member_short_desc a{
					${attributes.descriptionAlign ? `text-align:${attributes.descriptionAlign};` : ''}
					${attributes.descriptionColor ? `color:${attributes.descriptionColor};` : ''}
					${convertedStyle.description || ''}
				}`
			: ''
		);
	}

	if ( attributes.showSkills ) {

		// Skill Text.
		normalcss.push(
			( attributes.skillAlign || attributes.skillColor || convertedStyle.skill ) 
			? `.wpmozo_bna_skill_bar_wrapper_inner .wpmozo_bna_skill_name{
					${attributes.skillAlign ? `text-align:${attributes.skillAlign};` : ''}
					${attributes.skillColor ? `color:${attributes.skillColor};` : ''}
					${convertedStyle.skill || ''}
				}`
			: ''
		);

		// Skill bar.
		normalcss.push(
			( attributes.barHeight || attributes.barEmptyColor ) 
			? `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_empty_bar{
					${attributes.barHeight ? `height:${attributes.barHeight}px;` : ''}
					${attributes.barEmptyColor ? `background-color:${attributes.barEmptyColor};` : ''}
				}`
			: ''
		);
		normalcss.push(attributes.barFilledColor ? `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_filled_bar{ background-color: ${attributes.barFilledColor}; }` : '');
	}

	// Social icons.
	if ( attributes.showSocialIcon ) {
		normalcss.push(
			( attributes.socialIconAlign || attributes.socialSeparatorColor || attributes.socialSeparatorSize ) 
			? `.layout1 .wpmozo_bna_team_social_wrapper{
				${'layout1' === attributes.layout ? `${attributes.socialSeparatorSize ? `border-width: ${attributes.socialSeparatorSize}px;` : ''}${attributes.socialSeparatorColor ? `border-color: ${attributes.socialSeparatorColor};` : ''}`: ''}
				justify-content: ${ ( 'left' === attributes.socialIconAlign ? 'flex-start' : ( ( 'right' === attributes.socialIconAlign ) ? 'flex-end' : attributes.socialIconAlign ) ) };
			}`
			: ''
		);
		// Social icon color set, then rest instagram color.
		normalcss.push(attributes.socialIconColor ? `.wpmozo_bna_team_instagram{
				background: none; -webkit-background-clip: unset; background-clip: unset; -webkit-text-fill-color: unset;
			}`: '');
		// Social icon.
		normalcss.push(
			( attributes.socialIconSize || attributes.socialIconColor || attributes.socialIconBgColor || convertedStyle.socialIcon ) 
			? `.wpmozo_bna_team_member_social_icon{
					${attributes.socialIconSize ? `font-size:${attributes.socialIconSize}px;` : ''}
					${attributes.socialIconColor ? `color:${attributes.socialIconColor};` : ''}
					${attributes.socialIconBgColor ? `background-color:${attributes.socialIconBgColor};` : ''}
					${convertedStyle.socialIcon || ''}
				}`
			: ''
		);
	}
	// Link Button.
	if ( attributes.enableLink && 'button' === attributes.linkType ) {
		normalcss.push(
			( attributes.buttonBGGradient || attributes.buttonBackground || attributes.buttonColor || convertedStyle.button ) 
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button{
					${attributes.buttonBGGradient ? `background:${attributes.buttonBGGradient};` : ''}
					${attributes.buttonBackground ? `background:${attributes.buttonBackground};` : ''}
					${attributes.buttonColor ? `color:${attributes.buttonColor};` : ''}
					${convertedStyle.button || ''}
				}`
			: ''
		);
		hovercss.push(
			( attributes.buttonHoverBGGradient || attributes.buttonHoverBackground || attributes.buttonHoverColor || convertedStyle.buttonHover ) 
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover${isEditor('.wpmozo-bna-button-wrap .wpmozo-bna-button')}{
					${attributes.buttonHoverBGGradient ? `background:${attributes.buttonHoverBGGradient};` : ''}
					${attributes.buttonHoverBackground ? `background:${attributes.buttonHoverBackground};` : ''}
					${attributes.buttonHoverColor ? `color:${attributes.buttonHoverColor};` : ''}
					${convertedStyle.buttonHover || ''}
				}`
			: ''
		);
	}

	// Slider arrows.
	if ( attributes.showArrows ) {
		normalcss.push(
			( attributes.arrowBackground || attributes.arrowColor || convertedStyle.arrow ) 
			? `.swiper-button-next, .swiper-button-prev{
					${attributes.arrowBackground ? `background-color:${attributes.arrowBackground};` : ''}
					${attributes.arrowColor ? `color:${attributes.arrowColor};` : ''}
					${convertedStyle.arrow || ''}
				}`
			: ''
		);
		normalcss.push(attributes.arrowIconSize ? `.wpmozo_swiper_wrapper .swiper-button-next:before, .wpmozo_swiper_wrapper .swiper-button-prev:before{ font-size: ${attributes.arrowIconSize}px;}`: '');

		normalcss.push(attributes.showArrowOnHover ? `
			.swiper-button-next, .swiper-button-prev{ visibility: hidden; opacity: 0; transition: all 300ms ease; }
			.wpmozo_swiper_wrapper:hover .swiper-button-next,.wpmozo_swiper_wrapper:hover .swiper-button-prev{ visibility: visible; opacity: 1; }
			.wpmozo_swiper_wrapper:hover .swiper-button-next.swiper-button-disabled,.wpmozo_swiper_wrapper:hover .swiper-button-prev.swiper-button-disabled{ opacity: 0.35; }
			.wpmozo_arrows_outside .swiper-button-prev{ left: 50px; }
			.wpmozo_arrows_outside .swiper-button-next{ right: 50px; }
			.wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-prev{ left: 0; }
			.wpmozo_swiper_wrapper:hover .wpmozo_arrows_outside .swiper-button-next{ right: 0; }
			.wpmozo_arrows_inside .swiper-button-prev{ left: -50px; }
			.wpmozo_arrows_inside .swiper-button-next{ right: -50px; }
			.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-prev{ left: 0; }
			.wpmozo_swiper_wrapper:hover .wpmozo_arrows_inside .swiper-button-next{ right: 0; }`: ''
		);
	}
	// Control dot color.
	if ( attributes.showControlDot ) {
		if ( attributes.controlDotColorInactive && 'transparent_dot' != attributes.controlDotStyle ) {
			normalcss.push(`.swiper-pagination-bullet{ background: ${attributes.controlDotColorInactive}; }`);
		} else {
			normalcss.push(`.transparent_dot .swiper-pagination-bullet{ border-color: ${attributes.controlDotColorInactive} !important; }`);
		}
		if ( attributes.controlDotColorActive && 'transparent_dot' != attributes.controlDotStyle) {
			normalcss.push(`.swiper-pagination-bullet-active{ background: ${attributes.controlDotColorActive}; }`);
		} else {
			normalcss.push(`.transparent_dot .swiper-pagination-bullet-active{ border-color: ${attributes.controlDotColorActive} !important;border-width: 2px;border-style: solid;background: transparent; }`);
		}
		if ( 'stretched_dot' === attributes.controlDotStyle && attributes.transDuration ) {
			normalcss.push(`.stretched_dot .swiper-pagination-bullet{ transition: all ${attributes.transDuration}ms ease; }`);
		}
	}
	// Coverflow shadow.
	if ( attributes.enableCoverflowShadow ) {
		normalcss.push(attributes.coverflowShadowColor 
			? `
			.swiper-3d .swiper-slide-shadow-left{ 
				background-image: linear-gradient( to left, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
			}.swiper-3d .swiper-slide-shadow-right{
				background-image: linear-gradient( to right, ${attributes.coverflowShadowColor}, rgba(0,0,0,0) );
			}` 
			: ''
		);
	} else {
		normalcss.push(`.swiper-3d .swiper-slide-shadow-left, .swiper-3d .swiper-slide-shadow-right{ background-image: none; }`);
	}
	// Slider container.
	normalcss.push(convertedStyle.container ? `.swiper-container{ ${convertedStyle.container} }` : '');
	// Linear transition.
	normalcss.push(attributes.enableLinearTran ? `.swiper-wrapper{ transition-timing-function : linear !important; }` : '');

	// Item.
	normalcss.push(
		( attributes.itemBGGradient || attributes.itemBackground || convertedStyle.item ) 
		? `.wpmozo_bna_team_member_card{
				${attributes.itemBGGradient ? `background:${attributes.itemBGGradient};` : ''}
				${attributes.itemBackground ? `background:${attributes.itemBackground};` : ''}
				${convertedStyle.item || ''}
			}`
		: ''
	);

	// Lightbox style.
	if ( attributes.enableLink && attributes.usePopup ) {
		cssExtras.push(
			( attributes.popupCloseIconColor || attributes.popupCloseIconSize ) 
			? `.mfp-close{
					${attributes.popupCloseIconColor ? `color:${attributes.popupCloseIconColor};` : ''}
					${attributes.popupCloseIconSize ? `font-size:${attributes.popupCloseIconSize}px;` : ''}
				}`
			: ''
		);
		cssExtras.push(
			( attributes.popupWidth || attributes.popupBackground || convertedStyle.popup ) 
			? `.wpmozo_bna_team_member_wrapper_lightbox{
					${attributes.popupWidth ? `width:${attributes.popupWidth}%;` : ''}
					${attributes.popupBackground ? `background-color:${attributes.popupBackground};` : ''}
					${convertedStyle.popup || ''}
				}`
			: ''
		);

		cssExtras.push(
			( attributes.popupNameColor || attributes.popupNameAlign || convertedStyle.popupName ) 
			? `.wpmozo_bna_team_member_name{
					${attributes.popupNameColor ? `color:${attributes.popupNameColor};` : ''}
					${attributes.popupNameAlign ? `text-align:${attributes.popupNameAlign};` : ''}
					${convertedStyle.popupName || ''}
				}`
			: ''
		);

		if ( ( attributes.displayInPopup ).includes( 'designation' ) ) {
			cssExtras.push(
				( attributes.popupDesignationColor || attributes.popupDesignationAlign || convertedStyle.popupDesignation ) 
				? `.wpmozo_bna_team_member_designation{
						${attributes.popupDesignationColor ? `color:${attributes.popupDesignationColor};` : ''}
						${attributes.popupDesignationAlign ? `text-align:${attributes.popupDesignationAlign};` : ''}
						${convertedStyle.popupDesignation || ''}
					}`
				: ''
			);
		}
		if ( ( attributes.displayInPopup ).includes( 'content' ) ) {
			cssExtras.push(
				( attributes.popupDescriptionColor || attributes.popupDescriptionAlign || convertedStyle.popupDescription ) 
				? `.wpmozo_bna_team_member_description{
						${attributes.popupDescriptionColor ? `color:${attributes.popupDescriptionColor};` : ''}
						${attributes.popupDescriptionAlign ? `text-align:${attributes.popupDescriptionAlign};` : ''}
						${convertedStyle.popupDescription || ''}
					}`
				: ''
			);
		}

		// Popup skill bars.
		if ( ( attributes.displayInPopup ).includes( 'skills_bars' ) ) {
			cssExtras.push(
				( attributes.popupSkillColor || attributes.popupSkillAlign || convertedStyle.popupSkill ) 
				? `.wpmozo_bna_skill_bar_wrapper_inner .wpmozo_bna_skill_name, .wpmozo_bna_bar_counter_wrapper_inner .wpmozo_bna_skill_name{
						${attributes.popupSkillColor ? `color:${attributes.popupSkillColor};` : ''}
						${attributes.popupSkillAlign ? `text-align:${attributes.popupSkillAlign};` : ''}
						${convertedStyle.popupSkill || ''}
					}`
				: ''
			);

			// Layout 2 skill bars.
			if ( 'layout2' === attributes.popupBarLayout ) {
				
				cssExtras.push(attributes.popupBarHeight ? `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_chunks{ height: ${attributes.popupBarHeight}px; }` : '');
				
				cssExtras.push(attributes.popupBarEmptyColor ? `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_empty_chunks{ background-color: ${attributes.popupBarEmptyColor}; }` : '');

				cssExtras.push(attributes.popupBarFilledColor ? `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_bar_counter_filled_chunks:before{ background-color: ${attributes.popupBarFilledColor}; }` : '');
				
			} else {

				cssExtras.push(attributes.popupBarHeight ? `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_empty_bar{ height: ${attributes.popupBarHeight}px; }` : '');

				cssExtras.push(attributes.popupBarFilledColor ? `.wpmozo_bna_skill_bar_wrapper .wpmozo_bna_filled_bar{ background-color: ${attributes.popupBarFilledColor}; }` : '');
				
				// Bar Animation.
				if ( attributes.popupBarUseStripe ) {

					cssExtras.push(attributes.popupBarStripeUseAnim && attributes.popupBarStripeAnimSpeed ? `.wpmozo_bna_bar_counter_animated_striped_bar:before{ animation-duration: ${attributes.popupBarStripeAnimSpeed}s; }` : '');
					
					cssExtras.push(attributes.popupBarStripeColor ? `
						.wpmozo_bna_bar_counter_striped_bar:before, 
						.wpmozo_bna_bar_counter_animated_striped_bar:before{
							background-image: -webkit-linear-gradient(-45deg, ${attributes.popupBarStripeColor} 25%, transparent 25%, transparent 50%, ${attributes.popupBarStripeColor} 50%, ${attributes.popupBarStripeColor} 75%, transparent 75%, transparent);
							background-image: -moz-linear-gradient(-45deg, ${attributes.popupBarStripeColor} 25%, transparent 25%, transparent 50%, ${attributes.popupBarStripeColor} 50%, ${attributes.popupBarStripeColor} 75%, transparent 75%, transparent);
							background-image: linear-gradient(-45deg, ${attributes.popupBarStripeColor} 25%, transparent 25%, transparent 50%, ${attributes.popupBarStripeColor} 50%, ${attributes.popupBarStripeColor} 75%, transparent 75%, transparent);
						}` : ''
					);
				}
			}
		}
		// Popup social icons.
		if ( ( attributes.displayInPopup ).includes( 'social_icons' ) ) {
			cssExtras.push(attributes.popupSocialIconAlign ? `
				.wpmozo_bna_team_social_wrapper{
					justify-content: ${ ( 'left' === attributes.popupSocialIconAlign ? 'flex-start' : ( ( 'right' === attributes.popupSocialIconAlign ) ? 'flex-end' : attributes.popupSocialIconAlign ) ) };
				}` : ''
			);
			cssExtras.push(attributes.popupSocialIconColor ? `
				.wpmozo_bna_team_instagram{
					background: none;-webkit-background-clip: unset;background-clip: unset;-webkit-text-fill-color: unset;
				}` : ''
			);
			cssExtras.push(
				( attributes.popupSocialIconSize || attributes.popupSocialIconColor || attributes.popupSocialIconBgColor || convertedStyle.popupSocialIcon ) 
				? `.wpmozo_bna_team_member_social_icon{
						${attributes.popupSocialIconSize ? `font-size:${attributes.popupSocialIconSize}px;` : ''}
						${attributes.popupSocialIconColor ? `color:${attributes.popupSocialIconColor};` : ''}
						${attributes.popupSocialIconBgColor ? `background-color:${attributes.popupSocialIconBgColor};` : ''}
						${convertedStyle.popupSocialIcon || ''}
					}`
				: ''
			);
		}

		cssExtras.push(attributes.enableLink && attributes.usePopup && attributes.popupOverlayBackground ? `.block-${attributes.ID}_lightbox.mfp-bg{ background-color: ${ attributes.popupOverlayBackground };}`: '');
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID} {${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) 
		? `.block-${attributes.ID}_lightbox{
				${cssExtras.filter(Boolean).join('\n')}
			}
			${ (attributes.enableLink && attributes.usePopup && attributes.popupOverlayBackground) 
				? `.block-${attributes.ID}_lightbox.mfp-bg{ 
					background-color: ${ attributes.popupOverlayBackground };
				}`
				:''
			} 
		}` : '';
	styles = styles.replace(/\s+/g, ' ')
	.replace(/\s*{\s*/g, '{')
	.replace(/\s*}\s*/g, '}')
	.replace(/\s*;\s*/g, ';')
	.replace(/\s*,\s*/g, ',')    
	.trim();

	return styles;
}

export default generateDynamicStyle;