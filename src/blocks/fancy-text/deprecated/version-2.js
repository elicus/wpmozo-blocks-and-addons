// deprecated/version-2.js
import { useBlockProps, RichText } from "@wordpress/block-editor";
import generateDynamicStyle from './style';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
		
		fancyText: { type: "string", default: "Here you can set text." },
		textStyle: { type: "string", default: "gradient" },
		fancyTextBackground: { type: "string", default: "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)" },
		
		fancyTextBackgroundImg: { type: "string", default: "/wp-content/plugins/wpmozo-blocks-and-addons/includes/assets/images/placeholder.webp" },
		textBgSize: { type: "string", default: "cover" },
		textBgPosition: { type: "string", default: "center" },
		textBgRepeat: { type: "string", default: "initial" },
		
		textBgOverlay: { type: "string", default: "none" },
		textBgOverlayColor: { type: "string" },
		textBgOverlayColorSolid: { type: "string" },
		textBgOverlayColorGradient: { type: "string" },
		textBgDimensionspadding: { type: "object" },
		
		textAlignment: { type: "string", default: "center" },
		textFontSize: { type: "string" },
		textFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
		textLetterSpacing: { type: "string" },
		textDecoration: { type: "string" },
		textLetterCase: { type: "string" },
		textLineHeight: { type: "string" }
    },
    save( { attributes } ) {
        const ID = attributes.ID;
        return ( <>
            <style>{ generateDynamicStyle( { attributes } ) }</style>

            <div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-fancy-text-wrap ' + attributes.className } ) }>
                <div className={`wpmozo-bna-fancy-text-inner ${attributes.textStyle}`}>
                    <RichText.Content
                        tagName=''
                        value={ attributes.fancyText }
                    />
                </div>
            </div>
        </> );
    },
};

export default V2;
