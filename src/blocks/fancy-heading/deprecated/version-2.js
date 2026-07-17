// deprecated/version-2.js
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { createElement } from "@wordpress/element";
import generateDynamicStyle from '../style';

const V2 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },
		
		displayInStack: { type: "boolean", default: false },
		headingLevel: { type: "string", default: "h2" },
		headingAlignment: { type: "string", default: "" },
		headingColor: { type: "string" },
		headingBackground: { type: "string" },
		
		preHeading: { type: "string", default: "Pre" },
		preTextAlignment: { type: "string", default: "" },
		preTextColor: { type: "string" },
		preTextBackground: { type: "string" },
		preTextHoverColor: { type: "string" },
		preTextHoverBackground: { type: "string" },
		preTextDimensionspadding: { type: "object" },
		preTextDimensionsmargin: { type: "object" },
		preTextFontSize: { type: "string" },
		preTextFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: { fontStyle: "", fontWeight: "" }
		},
		preTextLetterSpacing: { type: "string" },
		preTextDecoration: { type: "string" },
		preTextLetterCase: { type: "string" },
		preTextLineHeight: { type: "string" },
		
		mainHeading: { type: "string", default: "Main" },
		mainTextColor: { type: "string" },
		mainTextAlignment: { type: "string", default: "" },
		mainTextBackground: { type: "string" },
		mainTextHoverColor: { type: "string" },
		mainTextHoverBackground: { type: "string" },
		mainTextDimensionspadding: { type: "object" },
		mainTextDimensionsmargin: { type: "object" },
		mainTextFontSize: { type: "string" },
		mainTextFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
		mainTextLetterSpacing: { type: "string" },
		mainTextDecoration: { type: "string" },
		mainTextLetterCase: { type: "string" },
		mainTextLineHeight: { type: "string" },
		
		postHeading: { type: "string", default: "Post" },
		postTextColor: { type: "string" },
		postTextAlignment: { type: "string", default: "" },
		postTextBackground: { type: "string" },
		postTextHoverColor: { type: "string" },
		postTextHoverBackground: { type: "string" },
		postTextDimensionspadding: { type: "object" },
		postTextDimensionsmargin: { type: "object" },
		postTextFontSize: { type: "string" },
		postTextFontAppearance: { type: "object", fontStyle: { type: "string" }, fontWeight: { type: "string" }, default: { fontStyle: "", fontWeight: "" } },
		postTextLetterSpacing: { type: "string" },
		postTextDecoration: { type: "string" },
		postTextLetterCase: { type: "string" },
		postTextLineHeight: { type: "string" }
    },
    save( { attributes } ) {
        const ID = attributes.ID;

        const allText = ( <>
            <span className="wpmozo-bna-pre-text"><RichText.Content value={attributes.preHeading} /></span>
            <span className="wpmozo-bna-main-text"><RichText.Content value={attributes.mainHeading} /></span>
            <span className="wpmozo-bna-post-text"><RichText.Content value={attributes.postHeading} /></span>
        </> );

        const heading = createElement( attributes.headingLevel, {
            className: 'wpmozo-bna-fancy-heading-inner'
        }, allText );

        return ( <>
            <style>{ generateDynamicStyle( { attributes, ID } ) }</style>

            <div id={`block-${ID}`} { ...useBlockProps.save( { className: 'wpmozo-bna-fancy-heading-wrap ' + attributes.className } ) }>
                { heading }
            </div>
        </> );
    },
};

export default V2;