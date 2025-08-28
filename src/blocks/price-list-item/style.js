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
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	parentAtts = attributes.parentAtts,
    	iconFontSize = ( ! wpmozo_is_empty( attributes.iconFontSize ) ) ? attributes.iconFontSize : parentAtts.iconFontSize;

	let styles = `#block-${clientId}.wpmozo-bna-price-list-item{`;
		styles += `
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
		`;
	styles += `}`;

	if ( ! wpmozo_is_empty(attributes.textAlignment) ) {
		styles += `#block-${clientId}.wpmozo-bna-price-list-item{
			text-align: ${attributes.textAlignment};
		}`;
	}

	if ( ! wpmozo_is_empty(attributes.itemBackground) ) {
		styles += `#block-${clientId}.wpmozo-bna-price-list-item{
			background-color: ${attributes.itemBackground} !important;
		}`;
	}

	if ( ! wpmozo_is_empty(convertedStyle.item) ) {
		styles += `#block-${clientId}.wpmozo-bna-price-list-item{
			${convertedStyle.item}
		}`;
	}

	if ( attributes.styleIcon && 'circle' === attributes.iconShape ) {
		styles += `#block-${clientId}.wpmozo-bna-price-list-item .wpmozo-bna-price-list-icon{
			height: ${iconFontSize} !important;
		}
		#block-${clientId}.wpmozo-bna-price-list-item .wpmozo-bna-price-list-icon .icon-wrapper{
			display: inline-flex;
		    align-items: center;
		    justify-content: center;
		    width: calc(${iconFontSize} + 16%);
		    height: calc(${iconFontSize} + 16%);
		    border-radius: 50%;
		    background-color: ${attributes.iconShapBackground};
		}`;
	}

	return styles;
};

export default generateDynamicStyle;