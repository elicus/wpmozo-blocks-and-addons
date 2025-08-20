import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ( { attributes, clientId } ) => {

	const {iconFontSize, separatorColor} = attributes,
		toConvertStyles = [
			'title',
			'subTitle',
			'icon',
			'headerGraphicsDimensions',
			'mainDimensions',
			'currency',
			'price',
			'period',
			'features',
			'featuresDimensions',
			'borderDimensions',
			'wrapper'
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.wpmozo-bna-pricing-table-wrapper{
			background-color : ${attributes.backgroundColor};
			${convertedStyle.mainDimensions}
			${convertedStyle.wrapper}
			border-color: ${attributes.wrapperBorderColor};
		}
		.wpmozo-bna-pricing-table-title{
			color: ${attributes.titleColor};
			text-align: ${attributes.titleAlign};
			${convertedStyle.title}
		}
		.wpmozo-bna-pricing-table-subtitle{
			color: ${attributes.subTitleColor};
			text-align: ${attributes.subTitleAlign};
			${convertedStyle.subTitle}
		}

		.wpmozo-bna-pricing-table-header-graphic{
			text-align: ${attributes.iconAlign};
			font-size: ${attributes.iconFontSize};
			color: ${attributes.iconColor};
			${convertedStyle.icon}
			${convertedStyle.headerGraphicsDimensions}
		}

		.wpmozo-bna-pricing-table-header-graphic-inner img{
			width: ${attributes.imageWidth};
			height: ${attributes.imageHeight};
			${convertedStyle.headerGraphicsDimensions}
		}

		.wpmozo-bna-pricing-table-pricing{
			text-align: ${attributes.pricealign};
			${convertedStyle.currency}
		}
		.wpmozo-bna-pricing-table-currency-symbol{
			color: ${attributes.currencyColor};
		}

		.wpmozo-bna-pricing-table-price{
			color: ${attributes.periodColor};
			${convertedStyle.price}
		}
		.wpmozo-bna-pricing-table-period{
			color: ${attributes.periodColor};
			${convertedStyle.period}
		}

		.wpmozo-bna-pricing-table-feature-text{
			color: ${attributes.featuresColor};
			${convertedStyle.features}
		}

		.wpmozo-bna-pricing-table-features{
			background-color: ${attributes.featuresBackground};
			text-align: ${attributes.feturesAlign};
			${convertedStyle.featuresDimensions}
		}

		.wpmozo-bna-pricing-table-feature-icon {
			color: ${attributes.featuresIconsColor};
			margin-right: ${attributes.featuresIconsSpacing};
		}

		.wpmozo-bna-pricing-table-button-wrapper {
			text-align: ${attributes.buttonAlign};
		}

		.wpmozo-bna-button{
			${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : ''}
			${attributes.buttonTextBackground ? `background-color: ${attributes.buttonTextBackground};` : ''}
			${attributes.borderSelection ? `border-style: ${attributes.borderSelection};` : ''}
			${attributes.borderWidth ? `border-width: ${attributes.borderWidth};` : ''}
			${attributes.borderRadius ? `border-radius: ${attributes.borderRadius};` : ''}
			${attributes.borderColor ? `border-color: ${attributes.borderColor};` : ''}
			${convertedStyle.borderDimensions}
		}
		.wpmozo-bna-button:hover{
			${attributes.buttonTextHoverColor ? `color: ${attributes.buttonTextHoverColor};` : ''}
			${attributes.buttonTextHoverBackground ? `background-color: ${attributes.buttonTextHoverBackground};` : ''}
			${attributes.borderSelectionHover ? `border-style: ${attributes.borderSelectionHover};` : ''}
			${attributes.borderWidthHover ? `border-width: ${attributes.borderWidthHover};` : ''}
			${attributes.borderRadiusHover ? `border-radius: ${attributes.borderRadiusHover};` : ''}
			${attributes.borderHoverColor ? `border-color: ${attributes.borderHoverColor};` : ''}
		}

		.wpmozo-bna-button-icon{
			color: ${attributes.iconTextColor};
			background-color: ${attributes.iconTextBackground};
		}

		.wpmozo-bna-pricing-table-button-wrapper .wpmozo-bna-button{
			font-size: ${attributes.buttonFontSize}px;
		}
		.wpmozo-bna-pricing-table-feature-icon{
			font-size: ${attributes.featuresIconFontSize}px;
		}
		.wpmozo-bna-pricing-table-features-list{
			padding: ${attributes.featuresSpacing}px 0;
		}
		.wpmozo-bna-pricing-table-features div{
			margin: ${attributes.featuresMargin}px 0;
		}

	`;

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
