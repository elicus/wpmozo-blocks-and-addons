// deprecated/version-1.js
import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from "../style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

        scrollText: { type: "string", default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non augue eget est vestibulum ultrices eu in leo. Quisque sem diam, finibus ac condimentum eu, finibus id arcu." },
        textColor: { type: "string" },
		textFontSize: { type: "string", default: "55px" },
		textLetterSpacing: { type: "string" },
		textDecoration: { type: "string" },
		textLetterCase: { type: "string" },
		textLineHeight: { type: "string" },
		textFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		textFontStyle: { type: "string" },
		textFontWeight: { type: "string" },

        textHoverColor: { type: "string" },
		textHoverFontSize: { type: "string" },
		textHoverLetterSpacing: { type: "string" },
		textHoverDecoration: { type: "string" },
		textHoverLetterCase: { type: "string" },
		textHoverLineHeight: { type: "string" },
		textHoverFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		textHoverFontStyle: { type: "string" },
		textHoverFontWeight: { type: "string" },

        scrollEffect: { type: "string", default: "fade" },
        splitBy: { type: "string", default: "word" },

        slideEffectStart: { type: "number", default: 40 },
        skewEffectStart: { type: "number", default: 35 },
        animationStartElementPos: { type: "string", default: "0%" },
        animationStartViewportPos: { type: "string", default: "80%" },
        animationEndElementPos: { type: "string", default: "0%" },
        animationEndViewportPos: { type: "string", default: "40%" },

        activeTextColor: { type: "string", default: "#543EC4" },
        textBlurLevel: { type: "number", default: 6 },

        blockpadding: { type: "object" },
		blockmargin: { type: "object" },
        blockborder: { type: "object" },
		blockborderRadius: { type: "string" },

		textAlign: {type: "string",default: "left"}
    },
    save( { attributes } ) {
        const clientId = attributes.ID;

        return ( <>
            <style>{ generateDynamicStyle( { attributes } ) }</style>

            <div id={`block-${clientId}`} { ...useBlockProps.save( { className: attributes.className } ) }>
                <div className="wpmozo-scroll-text-wrap"
                    data-scroll_effect={ attributes.scrollEffect || 'fade' }
                    data-split={ attributes.splitBy || 'word' }
                    data-animation_start_element_pos={ attributes.animationStartElementPos || '0%' }
                    data-animation_start_viewport_pos={ attributes.animationStartViewportPos || '80%' }
                    data-animation_end_element_pos={ attributes.animationEndElementPos || '0%' }
                    data-animation_end_viewport_pos={ attributes.animationEndViewportPos || '40%' }
                >
                    <div className="wpmozo-scroll-text-inner">
                        { attributes.scrollText || __( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non augue eget est vestibulum ultrices eu in leo. Quisque sem diam, finibus ac condimentum eu, finibus id arcu', 'wpmozo-blocks-and-addons' ) }
                    </div>
                </div>
            </div>
        </> );
    },
};

export default V1;