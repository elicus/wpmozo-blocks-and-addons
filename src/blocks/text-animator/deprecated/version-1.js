// deprecated/version-1.js
import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from "./style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		preText: { type: "string", default: "Pre" },
		animatedText: { type: "string", default: "Animated|Text" },
		postText: { type: "string", default: "Post" },
		selectDisplayTag: { type: "string", default: "p" },

		selectAnimation: { type: "string", default: "fade" },
		typingSpeed: { type: "number", default: 100 },
		erasingSpeed: { type: "number", default: 100 },
		animationDuration: { type: "number", default: 500 },
		animationDelay: { type: "number", default: 2000 },
		displayInStack: { type: "boolean", default: false },
		stopAnimationOnHover: { type: "boolean", default: false },
		animateOnlyOnce: { type: "boolean", default: false },

		globalTextColor: { type: "string" },
		globalTextAlignment: { type: "string" },
		globalFontSize: { type: "string" },
		globalFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		globalLetterSpacing: { type: "string" },
		globalLetterCase: { type: "string" },
		globalLineHeight: { type: "string" },

		prePostTextColor: { type: "string" },
		prePostFontSize: { type: "string" },
		prePostFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		prePostLetterSpacing: { type: "string" },
		prePostDecoration: { type: "string" },
		prePostLetterCase: { type: "string" },
		prePostLineHeight: { type: "string" },

		animatedTextColor: { type: "string" },
		animatedFontSize: { type: "string" },
		animatedFontAppearance: {
			type: "object",
			fontStyle: { type: "string" },
			fontWeight: { type: "string" },
			default: {
				fontStyle: "",
				fontWeight: ""
			}
		},
		animatedLetterSpacing: { type: "string" },
		animatedDecoration: { type: "string" },
		animatedLetterCase: { type: "string" },
		animatedLineHeight: { type: "string" },

		typeBackgroundSettings: { type: "string" },
		useBackgroundPrepost: { type: "boolean", default: false },
		useBackgroundAnimated: { type: "boolean", default: false },
		prePostBackgroundType: { type: "string", default: "classic" },
		prePostBackgroundColor: { type: "string" },
		prePostBackgroundGradient: { type: "string" },
		animatedBackgroundType: { type: "string", default: "classic" },
		animatedBackgroundColor: { type: "string" },
		animatedBackgroundGradient: { type: "string" },

		prePostpadding: { type: "object" },
		prePostmargin: { type: "object" },
		animatedpadding: { type: "object" },
		animatedmargin: { type: "object" }

    },
    save( { attributes } ) {
        const clientId = attributes.ID;

        const Tag          = attributes.selectDisplayTag || 'p'; // fallback to "p" if not set.
        const animation    = attributes.selectAnimation ?? 'fade';
        const animatedText = attributes.animatedText ?? '';

        // Get first part before "|"
        const initialText = animatedText.split('|')[0];

        let $animatedPhrase = '';
        switch ( animation ) {
            case "typing":
                $animatedPhrase = (
                    <span className="animated_text wpmozo_main_part"
                        data-wait-time={ parseInt( attributes?.animationDelay ?? 2000 ) }
                        data-typing-time={ parseInt( attributes?.typingSpeed ?? 100 ) }
                        data-erasing-time={ parseInt( attributes?.erasingSpeed ?? 100 ) }
                        data-stop-animation-on-hover={ attributes?.stopAnimationOnHover ?? 'false' }
                        data-animate-only-once={ attributes?.animateOnlyOnce ?? 'false' }
                        data-text={ animatedText }
                        data-interval-id="0"
                    />
                );
            break;
            default:
                $animatedPhrase = (
                    <span className="animated_text wpmozo_main_part"
                        data-wait-time={ parseInt( attributes?.animationDelay ?? 2000 ) }
                        data-animation-time={ parseInt( attributes.animationDuration ?? 500 ) }
                        data-stop-animation-on-hover={ attributes?.stopAnimationOnHover ?? 'false' }
                        data-animate-only-once={ attributes?.animateOnlyOnce ?? 'false' }
                        data-text={ animatedText }
                    >{ initialText }</span>
                );
            break;
        }

        return ( <>
            <style>{ generateDynamicStyle( { attributes } ) }</style>

            <div id={`block-${clientId}`} { ...useBlockProps.save( { className: attributes.className } ) }>
                <div className={`animated_text_wrapper wpmozo-${attributes.selectAnimation}`}>
                    <Tag className={`wpmozo-animated-text`}>
                        {/* Post text. */}
                        { ( attributes.preText && '' !== attributes.preText ) && (
                            <span className="pre_text_wrapper wpmozo_pre_post">{ attributes.preText }</span>
                        ) }
                        { $animatedPhrase }
                        {/* Post text. */}
                        { ( attributes.postText && '' !== attributes.postText ) && (
                            <span className="post_text_wrapper wpmozo_pre_post">{ attributes.postText }</span>
                        ) }
                    </Tag>
                </div>
            </div>
        </> );
    },
};

export default V1;