import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"description",
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
		buttonIconPlacement
    } = attributes,
    flexDirection = ( 'horizontal' === accordionOrientation ) ? 'row' : 'column',
    textColorStyle = ( 'dark' === textColor ) ? '#666' : '#fff';

	let styles = `#block-${attributes.ID}.wp-block-wpmozo-scroll-stack-cards{`;
		styles += `
		.wpmozo-bna-scroll-stack-cards-wrapper .block-editor-block-list__layout {
			flex-direction: ${flexDirection};
		}
		.wpmozo-bna-scroll-stack-cards-wrapper {
			flex-direction: ${flexDirection};
		}
		.wpmozo-bna-scroll-stack-cards-wrapper .wpmozo-bna-active-scroll-stack-cards-item {
			flex: ${activeAccordionSize} 0 auto !important;
		}
		.wp-block-wpmozo-scroll-stack-cards-item {
			transition-duration: ${accordionTransitionDuration}ms !important;
		}
		.wpmozo-bna-scroll-stack-cards-item-title {
			color: ${titleColor};
			text-align: ${titleAlign};
			${convertedStyle.title}
		}
		.wpmozo-bna-scroll-stack-cards-item-desc {
			color: ${descriptionColor};
			text-align: ${descriptionAlign};
			${convertedStyle.description}
		}
		.wpmozo-bna-scroll-stack-cards-item-icon .icon-wrapper i{
			color: ${iconColor};
			font-size: ${iconFontSize};
		}
		.wpmozo-bna-btn{
			color: ${buttonTextColor};
			background-color: ${buttonBackgroundColor};
			${convertedStyle.button}
		}
		.wpmozo-bna-scroll-stack-cards-item-btn-wrapper{
			text-align: ${buttonAlignment};
		}
		.wpmozo-bna-btn i{
			color: ${buttonIconColor};
		}
		`; 

		! wpmozo_is_empty(textAlignment) && (styles += `text-align: ${textAlignment};`);

		styles += `
			color: ${textColorStyle};
		`;

		if ( ! wpmozo_is_empty( inactiveState ) ) {
			styles += `
			.wpmozo-bna-scroll-stack-cards-item-content-wrapper {
				visibility: visible !important;
				opacity: 1 !important;
			}
			.wp-block-wpmozo-scroll-stack-cards-item:not(.wpmozo-bna-active-scroll-stack-cards-item) .wpmozo-bna-scroll-stack-cards-item-icon, 
			.wp-block-wpmozo-scroll-stack-cards-item:not(.wpmozo-bna-active-scroll-stack-cards-item) .wpmozo-bna-scroll-stack-cards-item-title, 
			.wp-block-wpmozo-scroll-stack-cards-item .wpmozo-bna-scroll-stack-cards-item-desc, 
			.wp-block-wpmozo-scroll-stack-cards-item .wpmozo-bna-scroll-stack-cards-item-btn-wrapper {
				display: none;
			}
			.wpmozo-bna-active-scroll-stack-cards-item .wpmozo-bna-scroll-stack-cards-item-desc, 
			.wpmozo-bna-active-scroll-stack-cards-item .wpmozo-bna-scroll-stack-cards-item-btn-wrapper {
				display: block !important;
			}
			`;

			if ( inactiveState.includes( 'title' ) ) {
				styles += `
				.wp-block-wpmozo-scroll-stack-cards-item .wpmozo-bna-scroll-stack-cards-item-title {
					display: block !important;
				}
				`;
			}

			if ( inactiveState.includes( 'icon' ) ) {
				styles += `
				.wp-block-wpmozo-scroll-stack-cards-item .wpmozo-bna-scroll-stack-cards-item-icon {
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