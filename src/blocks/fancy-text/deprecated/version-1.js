// deprecated/version-1.js
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

const V1 = {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: "string", }, fancyText: { type: "string", default: __('Here you can set text.', 'wpmozo-blocks-and-addons'), },
        textStyle: { type: "string", default: 'gradient', }, fancyTextBackground: { type: "string", default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)", },
        fancyTextBackgroundImg: { type: "string", default: "/wp-content/plugins/wpmozo-blocks-and-addons/includes/assets/images/placeholder.webp", },
        textBgSize: { type: "string", default: "cover", },
        textBgPosition: { type: "string", default: "center", },
        textBgRepeat: { type: "string", default: "initial", }, textBgOverlay: { type: "string", default: "none", },
        textBgOverlayColor: { type: "string", },
        textBgOverlayColorSolid: { type: "string", },
        textBgOverlayColorGradient: { type: "string", },
        textBgDimensionspadding: { type: "object", },
        textAlignment: { type: "string", default: "center", },
        textFontSize: { type: "string", },
        textFontAppearance: { type: "object", fontStyle: { type: "string", }, fontWeight: { type: "string", }, default: { fontStyle: "", fontWeight: "", } },
        textLetterSpacing: { type: "string", },
        textDecoration: { type: "string", },
        textLetterCase: { type: "string", },
        textLineHeight: { type: "string", },
    },
    save( { attributes } ) {
        const ID = attributes.ID;

        return (
            <div {...useBlockProps.save({className: 'wpmozo-bna-fancy-text-wrap'})} id={`block-${ID}`}>
                <div
                    className={`wpmozo-bna-fancy-text-inner ${attributes.textStyle}`}
                >
                <RichText.Content
                    tagName=''
                    value={ attributes.fancyText }
                />
                </div>
            </div>
        );
    },
};

export default V1;
