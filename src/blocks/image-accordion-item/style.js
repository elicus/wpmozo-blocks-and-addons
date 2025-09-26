import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"description",
		"icon",
		"button"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	parentAtts = attributes.parentAtts;

    let { 
    	normalAccordionBackground,
    	normalUseBackgroundImage,
    	normalBackgroundImage,
    	activeAccordionBackground,
    	activeUseBackgroundImage,
    	activeBackgroundImage,
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
		iconShapBackground,
		itemIcon,
		buttonIconColor
    } = attributes;


	let styles = `.wp-block-wpmozo-image-accordion #block-${attributes.ID}{`;

		if ( normalUseBackgroundImage && ! wpmozo_is_empty( normalBackgroundImage ) ) {
			let bgColor = ! wpmozo_is_empty( normalAccordionBackground ) ? ', ' + normalAccordionBackground : '';
			styles += `
				background: url('${normalBackgroundImage}')${bgColor};
			`;
		}
		if ( ! normalUseBackgroundImage && ! wpmozo_is_empty( normalAccordionBackground ) ) {
			styles += `
				background-color: ${normalAccordionBackground};
			`;
		}

		styles += `${attributes.normalItemBGImageSize ? `background-size: ${attributes.normalItemBGImageSize};` : '' }
			${attributes.normalItemBGImagePosition ? `background-position: ${attributes.normalItemBGImagePosition.replace(/_/g, ' ')};` : '' }
			${attributes.normalItemBGImageRepeat ? `background-repeat: ${attributes.normalItemBGImageRepeat};` : '' }
			${attributes.normalItemBGImageBlend ? `background-blend-mode: ${attributes.normalItemBGImageBlend};` : '' }
		`;

		styles += `
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

		if ( ! wpmozo_is_empty( itemIcon ) ) {

			styles += `
			.wpmozo-bna-image-accordion-item-icon i{
				color: ${attributes.iconColor};
			}`;

			if ( attributes.styleIcon ){
				styles += `
				.wpmozo-bna-icon-shape-circle, 
				.wpmozo-bna-icon-shape-square, 
				.wpmozo-bna-icon-hexagon {
					background-color: ${attributes.iconShapBackground};
				}`;
			}

		}

	styles += `}`;

	if ( ! wpmozo_is_empty( textAlignment ) ) {
		styles += `
			#block-${attributes.ID}.wpmozo-bna-active-image-accordion-item {
				text-align: ${textAlignment};
			}
		`;
	}

	if ( activeUseBackgroundImage && ! wpmozo_is_empty( activeBackgroundImage ) ) {
		let bgColor = ! wpmozo_is_empty( activeAccordionBackground ) ? ', ' + activeAccordionBackground : '';
		styles += `
			#block-${attributes.ID}.wpmozo-bna-active-image-accordion-item {
				background: url('${activeBackgroundImage}')${bgColor};
			}
		`;
	}
	if ( ! activeUseBackgroundImage && ! wpmozo_is_empty( activeAccordionBackground ) ) {
		styles += `
			#block-${attributes.ID}.wpmozo-bna-active-image-accordion-item {
				background-color: ${activeAccordionBackground};
			}
		`;
	}

	styles += `#block-${attributes.ID}.wpmozo-bna-active-image-accordion-item {
		${attributes.activeItemBGImageSize ? `background-size: ${attributes.activeItemBGImageSize};` : '' }
		${attributes.activeItemBGImagePosition ? `background-position: ${attributes.activeItemBGImagePosition.replace(/_/g, ' ')};` : '' }
		${attributes.activeItemBGImageRepeat ? `background-repeat: ${attributes.activeItemBGImageRepeat};` : '' }
		${attributes.activeItemBGImageBlend ? `background-blend-mode: ${attributes.activeItemBGImageBlend};` : '' }
		}
	`;

	return styles;
};

export default generateDynamicStyle;