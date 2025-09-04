import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

	const toConvertStyles = [
		'thumbnail',
		'name',
		'price',
		'currency',
		'description',
		'period',
		'item'
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${clientId}{`;
		styles += `
		.wpmozo-bna-image-accordion-item{
			margin-bottom: ${attributes.bottomSpacing};
			background-color: ${attributes.itemBackground};
			${convertedStyle.item}
		}
		.wpmozo-bna-image-accordion-icon:not(.hexagon){
			background-color: ${attributes.iconShapBackground};
		}
		.wpmozo-bna-image-accordion-icon i{
			color: ${attributes.iconColor};
			font-size: ${attributes.iconFontSize};
		}
		.wpmozo-bna-image-accordion-item-thumbnail img{
			width: ${attributes.thumbnailWidth};
			${convertedStyle.thumbnail}
		}
		.wpmozo-bna-image-accordion-item-name{
			color: ${attributes.nameColor};
			${convertedStyle.name}
		}
		.wpmozo-bna-image-accordion-item-price{
			color: ${attributes.priceColor};
			${convertedStyle.price}
		}
		.wpmozo-bna-image-accordion-item-currency{
			color: ${attributes.currencyColor};
			${convertedStyle.currency}
		}
		.wpmozo-bna-image-accordion-item-description{
			color: ${attributes.descriptionColor};
			${convertedStyle.description}
		}
		.wpmozo-bna-image-accordion-item-price-period{
			color: ${attributes.periodColor};
			${convertedStyle.period}
		}
		.wpmozo-bna-image-accordion-item-price-divider{
			border-top-color: ${attributes.dividerColor} !important;
			border-top-style: ${attributes.dividerStyle} !important;
			border-top-width: ${attributes.dividerWidth} !important;
		}
		`;
	styles += `}`;

	styles += `
	html:not(.block-editor-iframe__html) #block-${clientId}, 
	.editor-styles-wrapper #block-${clientId}.wpmozo-bna-image-accordion .block-editor-inner-blocks > div{
		grid-template-columns: repeat(${attributes.numberOfColumns}, 1fr);
		gap: ${attributes.columnSpacing};
	}`;

	if ( ! wpmozo_is_empty(attributes.textAlignment) ) {
		styles += `#block-${clientId}{
			text-align: ${attributes.textAlignment};
		}`;
	}

	return styles;
};

export default generateDynamicStyle;