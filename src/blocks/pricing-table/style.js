import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId}) => {

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
            'borderDimensions'
        ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    let styles = `#block-${attributes.ID}{`;

    styles += `
		.wpmozo-bna-pricing-table-wrapper {
			background-color : ${attributes.backgroundColor};
			text-align: ${attributes.align};
			${convertedStyle.mainDimensions}
		}
		.wpmozo-bna-pricing-table-title {
            color: ${attributes.titleColor};
            text-align: ${attributes.titleAlign};
            ${convertedStyle.title}
        }

        .wpmozo-bna-pricing-table-subtitle {
            color: ${attributes.subTitleColor};
            text-align: ${attributes.subTitleAlign};
            ${convertedStyle.subTitle}
        }

        .wpmozo-bna-pricing-table-header-graphic {
            text-align: ${attributes.iconAlign};
            font-size: ${attributes.iconFontSize};
            color: ${attributes.iconColor};
            ${convertedStyle.icon}
            ${convertedStyle.headerGraphicsDimensions}
        }

        .wpmozo-bna-pricing-table-header-graphic-inner img {
            width: ${attributes.imageWidth};
            height: ${attributes.imageHeight};
            ${convertedStyle.headerGraphicsDimensions}
        }

        .wpmozo-bna-pricing-table-currency-symbol {
            color: ${attributes.currencyColor};
            ${convertedStyle.currency}
        }

        .wpmozo-bna-pricing-table-price {
            color: ${attributes.priceColor};
            ${convertedStyle.price}
        }

        .wpmozo-bna-pricing-table-period {
            color: ${attributes.periodColor};
            ${convertedStyle.period}
        }

        .wpmozo-bna-pricing-table-feature-text {
            color: ${attributes.featuresColor};
            ${convertedStyle.features}
        }

        .wpmozo-bna-pricing-table-features {
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

        .wpmozo-bna-button {
            color: ${attributes.buttonTextColor};
            background-color: ${attributes.buttonTextBackground};
            border-style: ${attributes.borderSelection};
            border-width: ${attributes.borderWidth};
            border-radius: ${attributes.borderRadius};
            border-color: ${attributes.borderColor};
            ${convertedStyle.borderDimensions}
        }

        .wpmozo-bna-button:hover {
            color: ${attributes.buttonTextHoverColor};
            background-color: ${attributes.buttonTextHoverBackground};
            border-style: ${attributes.borderSelectionHover};
            border-width: ${attributes.borderWidthHover};
            border-radius: ${attributes.borderRadiusHover};
            border-color: ${attributes.borderHoverColor};
        }

        .wpmozo-bna-button-icon {
            color: ${attributes.iconTextColor};
            background-color: ${attributes.iconTextBackground};
        }
		
	`;

    styles += `}`;

    return styles;
};

export default generateDynamicStyle;