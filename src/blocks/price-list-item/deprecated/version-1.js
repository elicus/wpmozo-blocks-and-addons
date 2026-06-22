// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from '../style';
import WPMozoPriceListLayout from "../save-layout";

const V1 = {
    attributes: {
        parentAtts: { type: "object" },

        ID: { type: "string" },
		className: { type: "string" },

        itemName: { type: "string", default: "Item Name" },
        itemCurrency: { type: "string", default: "$" },
        itemPrice: { type: "string", default: "10" },
        pricePeriod: { type: "string" },
        itemThumbnailOption: { type: "string", default: "use_image" },
        icon: { type: "string" },
        itemThumbnail: { type: "string" },
        content: { type: "string" },

        itemBackground: { type: "string" },
        itemborder: { type: "object" },
        itemborderRadius: { type: "string" },

        iconColor: { type: "string" },
        iconShapBackground: { type: "string" },
        styleIcon: { type: "boolean", default: false },
        iconShape: { type: "string", default: "square" },

        iconFontSize: { type: "string" },

		thumbnailAlignment: {type: "string",default: "center"},
        thumbnailborder: { type: "object" },
        thumbnailborderRadius: { type: "string" },

        nameHeadingLavel: { type: "string", default: "h4" },
        nameColor: { type: "string" },
        nameFontSize: { type: "string" },
        nameFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        nameLetterSpacing: { type: "string" },
        nameDecoration: { type: "string" },
        nameLetterCase: { type: "string" },
        nameLineHeight: { type: "string" },

        priceColor: { type: "string" },
        priceFontSize: { type: "string" },
        priceFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        priceLetterSpacing: { type: "string" },
        priceDecoration: { type: "string" },
        priceLetterCase: { type: "string" },
        priceLineHeight: { type: "string" },

        currencyColor: { type: "string" },
        currencyFontSize: { type: "string" },
        currencyFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        currencyLetterSpacing: { type: "string" },
        currencyDecoration: { type: "string" },
        currencyLetterCase: { type: "string" },
        currencyLineHeight: { type: "string" },

        descriptionColor: { type: "string" },
        descriptionFontSize: { type: "string" },
        descriptionFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        descriptionLetterSpacing: { type: "string" },
        descriptionDecoration: { type: "string" },
        descriptionLetterCase: { type: "string" },
        descriptionLineHeight: { type: "string" },

        periodColor: { type: "string" },
        periodFontSize: { type: "string" },
        periodFontAppearance: {
            type: "object",
            fontStyle: { type: "string" },
            fontWeight: { type: "string" },
            default: {
                fontStyle: "",
                fontWeight: ""
            }
        },
        periodLetterSpacing: { type: "string" },
        periodDecoration: { type: "string" },
        periodLetterCase: { type: "string" },
        periodLineHeight: { type: "string" }
    },
    save( { attributes } ) {
        const clientId   = attributes.ID;

        return (
            <>
                <style>
                    { generateDynamicStyle({ attributes, clientId }) }
                </style>
                <div {...useBlockProps.save({ className: "wpmozo-bna-price-list-item", id:`block-${clientId}` })}>
                    <WPMozoPriceListLayout attributes={attributes} />
                </div>
            </>
        );
    },
};

export default V1;