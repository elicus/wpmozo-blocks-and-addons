import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"description",
		"image",
		"imageWrap",
		"contentWrap",
		"cardItem"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	textColorStyle = ( 'dark' === attributes.textColor ) ? '#666' : '#fff';;

	let styles = `#block-${attributes.ID}{`;

		// Text style
		styles += `
			text-alignment: ${attributes.textAlignment};
			color: ${textColorStyle};
		`;

		// Title style
		styles += `
			.wpmozo-bna-scroll-stack-cards-title {
			color: ${attributes.titleColor};
			text-align: ${attributes.titleAlign};
			${convertedStyle.title}
		}`;

		// Description style
		styles += `
		.wpmozo-bna-scroll-stack-cards-content {
			color: ${attributes.descriptionColor};
			text-align: ${attributes.descriptionAlign};
			${convertedStyle.description}
		}`;

		// Icon style
		styles += `
		.wpmozo-bna-scroll-stack-cards-icon-wrapper .icon-wrapper i {
			color: ${attributes.iconColor};
			font-size: ${attributes.iconFontSize};
		}`;

		//Image style
		styles += `
		.wpmozo-bna-scroll-stack-cards-image-wrapper{
			${convertedStyle.imageWrap}
		}
		.wpmozo-bna-scroll-stack-cards-image {
			${convertedStyle.image}
		}`;
		if ( 'vertical' === attributes.layout  ) {
			styles += `
				.wpmozo-bna-scroll-stack-cards-image-wrapper{
					flex: 0 0 ${attributes.imageSize} !important;
				}
			`;
		}

		// Content wrapper style
		styles += `
		.wpmozo-bna-scroll-stack-cards-content-wrapper{
		`;
			if ( 'vertical' === attributes.layout  ) {
				styles += `
					margin-right: ${attributes.contentWrapMarginRight};
				`;
			}
			if ( attributes.contentWrapUseBackgroundImage && ! wpmozo_is_empty( attributes.contentWrapBackgroundImage ) ) {
				let bgColor = ! wpmozo_is_empty( attributes.contentWrapBackground ) ? ', ' + attributes.contentWrapBackground : '';
				styles += `
					background: url('${attributes.contentWrapBackgroundImage}')${bgColor};
				`;
			}
			if ( ! attributes.contentWrapUseBackgroundImage && ! wpmozo_is_empty( attributes.contentWrapBackground ) ) {
				styles += `
					background-color: ${attributes.contentWrapBackground};
				`;
			}
			styles += `${attributes.contentWrapItemBGImageSize ? `background-size: ${attributes.contentWrapItemBGImageSize};` : '' }
				${attributes.contentWrapItemBGImagePosition ? `background-position: ${attributes.contentWrapItemBGImagePosition.replace(/_/g, ' ')};` : '' }
				${attributes.contentWrapItemBGImageRepeat ? `background-repeat: ${attributes.contentWrapItemBGImageRepeat};` : '' }
				${attributes.contentWrapItemBGImageBlend ? `background-blend-mode: ${attributes.contentWrapItemBGImageBlend};` : '' }
			`;
		styles += `
			${convertedStyle.contentWrap}
		}
		`;

		//Card Item style
		styles += `
		.wp-block-wpmozo-scroll-stack-cards-item{
			${convertedStyle.cardItem}
		}`
		if ( 'horizontal' === attributes.layout  ) {
			styles += `
			.wpmozo-bna-scroll-stack-cards-item-inner {
				width: ${attributes.cardItemWidth};
			}`;
		}
		

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;