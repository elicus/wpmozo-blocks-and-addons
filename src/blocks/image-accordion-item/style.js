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

	let styles = `#block-${clientId}.wpmozo-bna-image-accordion-item{`;
	styles += `
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
	`;

	if ( 'use_icon' === attributes.itemThumbnailOption ) {

		styles += `
		.wpmozo-bna-price-list-icon i{
			color: ${attributes.iconColor};
		}`;

		if ( attributes.styleIcon ) {
			styles += `
			.wpmozo-bna-price-list-layout2 .wpmozo-bna-image-accordion-item-icon{
				display: inline-block;
			}`;
		}

		if ( 
			! attributes.styleIcon ||
			( attributes.styleIcon && 'hexagon' !== attributes.iconShape )
		) {
			styles += `
			.wpmozo-bna-price-list-icon i{
				font-size: ${iconFontSize};
				width: ${iconFontSize};
			}`;
		}

		// Icon shape style
		if ( attributes.styleIcon && 'circle' === attributes.iconShape ) {
			styles += `
			.wpmozo-bna-price-list-icon .icon-wrapper{
				padding: 12px;
	    		border-radius: 50%;
			    background-color: ${attributes.iconShapBackground};
			}`;
		}
		if ( attributes.styleIcon && 'square' === attributes.iconShape ) {
			styles += `
			.wpmozo-bna-price-list-icon .icon-wrapper{
				padding: 9px;
			    background-color: ${attributes.iconShapBackground};
			}`;
		}
		if ( attributes.styleIcon && 'hexagon' === attributes.iconShape ) {
			styles += `
			.wpmozo-bna-price-list-icon.hexagon{
				font-size: ${iconFontSize};
			}
			.wpmozo-bna-price-list-icon i{
				font-size: inherit !important;
			}
			.wpmozo-bna-price-list-icon.hexagon::before{
				background-color: ${attributes.iconShapBackground};
			}
			.wpmozo-bna-image-accordion-item-icon {
			  flex: 0 0 auto;
			}
			.wpmozo-bna-image-accordion-item-details {
			  flex: 1 1 0;
			  min-width: 0;
			}`;
		}
	}
	
	styles += `}`;

	if ( ! wpmozo_is_empty(attributes.textAlignment) ) {
		styles += `#block-${clientId}.wpmozo-bna-image-accordion-item{
			text-align: ${attributes.textAlignment};
		}`;
	}

	if ( ! wpmozo_is_empty(attributes.itemBackground) ) {
		styles += `#block-${clientId}.wpmozo-bna-image-accordion-item{
			background-color: ${attributes.itemBackground} !important;
		}`;
	}

	if ( ! wpmozo_is_empty(convertedStyle.item) ) {
		styles += `#block-${clientId}.wpmozo-bna-image-accordion-item{
			${convertedStyle.item}
		}`;
	}

	return styles;
};

export default generateDynamicStyle;