// deprecated/version-1.js
import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
        layout: { type: "string", default: "layout1" },
        columnSpacing: { type: "string", default: "15px" },
        numberOfColumns: { type: "string", default: "1" },
        bottomSpacing: { type: "string", default: "20px" },

        itemBackground: { type: "string" },
        itemborder: { type: "object" },
        itemborderRadius: { type: "string" },

        dividerColor: { type: "string" },
        textAlignment: { type: "string" },
        nameHeadingLavel: { type: "string", default: "h4" },
        currencySymbolPosition: { type: "string" },
        dividerStyle: { type: "string" },

        iconColor: { type: "string" },
        iconShapBackground: { type: "string", default: "#9E9E9E" },

        iconFontSize: { type: "string", default: "100px" },

        thumbnailWidth: { type: "string", default: "100px" },
        thumbnailborder: { type: "object" },
        thumbnailborderRadius: { type: "string" },

        nameColor: { type: "string" },
        nameFontSize: { type: "string", default: "20px" },
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
        priceFontSize: { type: "string", default: "18px" },
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
        currencyFontSize: { type: "string", default: "18px" },
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
        descriptionFontSize: { type: "string", default: "14px" },
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

        dividerColor: { type: "string" },
        dividerWidth: { type: "string", default: "1px" },

        periodColor: { type: "string" },
        periodFontSize: { type: "string",  default: "16px" },
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
        const clientId = attributes.ID,
            TEMPLATE = [
                [ 'wpmozo/price-list-item', {} ] // Prefills a child block when parent is inserted
            ];

        return (
            <>
                <style>
                    { generateDynamicStyle({ attributes, clientId }) }
                </style>
                <div {...useBlockProps.save({ className: 'wpmozo-bna-price-list' })} id={`block-${clientId}`}>
                    <InnerBlocks.Content/>
                </div>
            </>
        );
    },
};

export default V1;