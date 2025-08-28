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
		.wpmozo-bna-price-list-item{
			margin-bottom: ${attributes.bottomSpacing};
			background-color: ${attributes.itemBackground};
			${convertedStyle.item}
		}
		.wpmozo-bna-price-list-icon:not(.hexagon){
			background-color: ${attributes.iconShapBackground};
		}
		.wpmozo-bna-price-list-icon i{
			color: ${attributes.iconColor};
			font-size: ${attributes.iconFontSize};
		}
		.wpmozo-bna-price-list-item-thumbnail img{
			width: ${attributes.thumbnailWidth};
			${convertedStyle.thumbnail}
		}
		.wpmozo-bna-price-list-item-name{
			color: ${attributes.nameColor};
			${convertedStyle.name}
		}
		.wpmozo-bna-price-list-item-price{
			color: ${attributes.priceColor};
			${convertedStyle.price}
		}
		.wpmozo-bna-price-list-item-currency{
			color: ${attributes.currencyColor};
			${convertedStyle.currency}
		}
		.wpmozo-bna-price-list-item-description{
			color: ${attributes.descriptionColor};
			${convertedStyle.description}
		}
		.wpmozo-bna-price-list-item-price-period{
			color: ${attributes.periodColor};
			${convertedStyle.period}
		}
		.wpmozo-bna-price-list-item-price-divider{
			border-top-color: ${attributes.dividerColor} !important;
			border-top-style: ${attributes.dividerStyle} !important;
			border-top-width: ${attributes.dividerWidth} !important;
		}
		`;
	styles += `}`;

	styles += `#block-${clientId}{
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