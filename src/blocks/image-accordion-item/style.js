import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, ID }) => {

	const toConvertStyles = [
		"title",
		"description",
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


	let styles = `#block-${ID}.wp-block-wpmozo-image-accordion-item{`;

		if ( normalUseBackgroundImage && ! wpmozo_is_empty( normalBackgroundImage ) ) {
			styles += `
				background-image: url('${normalBackgroundImage}');
			`;
		}
		if ( ! normalUseBackgroundImage && ! wpmozo_is_empty( normalAccordionBackground ) ) {
			styles += `
				background: ${normalAccordionBackground};
			`;
		}

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
			.wpmozo-bna-image-accordion-item-icon .icon-wrapper i{
				color: ${iconColor};
				font-size: ${iconFontSize};
			}
			.wpmozo-bna-btn{
				color: ${buttonTextColor};
				background-color: ${buttonBackgroundColor};
				${convertedStyle.button}
			}
			.wpmozo-bna-image-accordion-item-btn-wrapper{
				text-align: ${buttonAlignment};
			}
			.wpmozo-bna-btn i{
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
			#block-${ID}.wpmozo-bna-active-image-accordion-item {
				text-align: ${textAlignment};
			}
		`;
	}

	if ( activeUseBackgroundImage && ! wpmozo_is_empty( activeBackgroundImage ) ) {
		styles += `
			#block-${ID}.wpmozo-bna-active-image-accordion-item {
				background-image: url('${activeBackgroundImage}');
			}
		`;
	}
	if ( ! activeUseBackgroundImage && ! wpmozo_is_empty( activeAccordionBackground ) ) {
		styles += `
			#block-${ID}.wpmozo-bna-active-image-accordion-item {
				background: ${activeAccordionBackground};
			}
		`;
	}

	return styles;
};

export default generateDynamicStyle;