import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"description",
		"icon",
		"button"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let { 
    	inactiveState,
    	accordionOrientation,
    	activeAccordionSize,
    	accordionTransitionDuration,
    	textAlignment,
    	textColor,
    	titleColor,
    	titleAlign,
    	descriptionColor,
		descriptionAlign,
		iconColor,
		iconFontSize,
		buttonTextColor,
		buttonBackgroundColor,
		buttonAlignment,
		buttonIconColor,
		buttonIconHover,
		buttonIconPlacement,
		accordionSpacing
    } = attributes,
    flexDirection = ( 'horizontal' === accordionOrientation ) ? 'row' : 'column',
    textColorStyle = ( 'dark' === textColor ) ? '#666' : '#fff';

	let styles = `#block-${attributes.ID}.wp-block-wpmozo-image-accordion{`;
		styles += `
		.wpmozo-bna-image-accordion-wrapper .block-editor-block-list__layout {
			flex-direction: ${flexDirection};
			height: ${attributes.accordionHeight};
		}
		.wpmozo-bna-image-accordion-wrapper {
			flex-direction: ${flexDirection};
		}
		.wpmozo-bna-image-accordion-wrapper .wpmozo-bna-active-image-accordion-item {
			flex: ${activeAccordionSize} 0 auto !important;
		}
		.wpmozo-bna-image-accordion-wrapper {
			height: ${attributes.accordionHeight};
		}
		.wp-block-wpmozo-image-accordion-item {
			transition-duration: ${accordionTransitionDuration}ms !important;
		}
		.wpmozo-bna-image-accordion-item-title {
			color: ${titleColor};
			text-align: ${titleAlign};
			${convertedStyle.title}
		}
		.wpmozo-bna-image-accordion-item-desc {
			color: ${descriptionColor};
			text-align: ${descriptionAlign};
			${convertedStyle.description}
		}
		.wpmozo-bna-image-accordion-item-icon {
			${convertedStyle.icon}
		}
		.wpmozo-bna-image-accordion-item-icon .icon-wrapper i{
			color: ${iconColor};
			font-size: ${iconFontSize};
		}
		.wpmozo-bna-button{
			color: ${buttonTextColor};
			background-color: ${buttonBackgroundColor};
			${convertedStyle.button}
		}
		.wpmozo-bna-button-wrap{
			text-align: ${buttonAlignment};
		}
		.wpmozo-bna-button i{
			color: ${buttonIconColor};
		}
		`; 

		! wpmozo_is_empty(textAlignment) && (styles += `text-align: ${textAlignment};`);

		styles += `
			color: ${textColorStyle};
		`;
		styles += `h1, h2, h3, h4, h5, h6, a {
			color: ${textColorStyle};
		}
		`;

		if ( ! wpmozo_is_empty( accordionSpacing ) ) {
			if ( 'horizontal' === accordionOrientation ) {
				styles += `
				.wp-block-wpmozo-image-accordion-item{
					margin-right: ${accordionSpacing} !important;
				}
				.wp-block-wpmozo-image-accordion-item:last-of-type, 
				.block-editor-block-list__layout .wp-block-wpmozo-image-accordion-item:not(:has(~ .wp-block-wpmozo-image-accordion-item)){
					margin-right: 0px !important;
				}
				`;
			}else{
				styles += `
				.wp-block-wpmozo-image-accordion-item{
					margin-bottom: ${accordionSpacing} !important;
				}
				.wp-block-wpmozo-image-accordion-item:last-of-type, 
				.block-editor-block-list__layout .wp-block-wpmozo-image-accordion-item:not(:has(~ .wp-block-wpmozo-image-accordion-item)){
					margin-bottom: 0px !important;
				}
				`;
			}
		}

		if ( ! wpmozo_is_empty( inactiveState ) ) {
			styles += `
			.wpmozo-bna-image-accordion-item-content-wrapper {
				visibility: visible !important;
				opacity: 1 !important;
			}
			.wp-block-wpmozo-image-accordion-item:not(.wpmozo-bna-active-image-accordion-item) .wpmozo-bna-image-accordion-item-icon, 
			.wp-block-wpmozo-image-accordion-item:not(.wpmozo-bna-active-image-accordion-item) .wpmozo-bna-image-accordion-item-title, 
			.wp-block-wpmozo-image-accordion-item .wpmozo-bna-image-accordion-item-desc, 
			.wp-block-wpmozo-image-accordion-item .wpmozo-bna-button-wrap {
				display: none;
			}
			.wpmozo-bna-active-image-accordion-item .wpmozo-bna-image-accordion-item-desc, 
			.wpmozo-bna-active-image-accordion-item .wpmozo-bna-button-wrap {
				display: block !important;
			}
			`;

			if ( inactiveState.includes( 'title' ) ) {
				styles += `
				.wp-block-wpmozo-image-accordion-item .wpmozo-bna-image-accordion-item-title {
					display: block !important;
				}
				`;
			}

			if ( inactiveState.includes( 'icon' ) ) {
				styles += `
				.wp-block-wpmozo-image-accordion-item .wpmozo-bna-image-accordion-item-icon {
					display: block !important;
				}
				`;
			}
		}
		if ( buttonIconHover ) {
			styles += `
			.wpmozo-bna-btn i {
				opacity: 0 !important;
			}
			.wpmozo-bna-btn:hover i {
				opacity: 1 !important;
			}
			`;
			if ( 'after' === buttonIconPlacement ) {
				styles += `
				.wpmozo-bna-btn i {
					margin-left: -15px !important;
				}
				.wpmozo-bna-btn:hover i {
					margin-left: 0px !important;
				}
				`;
			}else{
				styles += `
				.wpmozo-bna-btn i {
					margin-right: -15px !important;
				}
				.wpmozo-bna-btn:hover i {
					margin-right: 0px !important;
				}
				`;
			}
		}
	styles += `}`;

	return styles;
};

export default generateDynamicStyle;