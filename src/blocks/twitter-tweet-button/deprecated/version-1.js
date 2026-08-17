// deprecated/version-1.js
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		customText: { type: "string" },
		customUrl: { type: "string" },
		hashtags: { type: "string" },
		via: { type: "string" },
		related: { type: "string" },
		doNotTrack: { type: "boolean", default: false },

		buttonSize: { type: "string", default: "small" },
		buttonAlign: { type: "string" },
		buttonborder: { type: "object" },
		buttonborderRadius: { type: "string" },

		fallbackTextColor: { type: "string" },
		fallbackTextFontSize: { type: "string", default: "16px" },
		fallbackTextLetterSpacing: { type: "string" },
		fallbackTextDecoration: { type: "string" },
		fallbackTextLetterCase: { type: "string" },
		fallbackTextLineHeight: { type: "string" },
		fallbackTextFontAppearance: {
			type: "object",
			default: { fontStyle: "", fontWeight: "" }
		},
		fallbackTextFontStyle: { type: "string" },
		fallbackTextFontWeight: { type: "string" }

    },
    save( { attributes } ) {
        const { ID, className } = attributes;

        // Get attributes.
        const customText = attributes.customText ?? '';
        const customUrl  = attributes.customUrl ?? '';
        const hashtags   = attributes.hashtags ?? '';
        const via        = attributes.via ?? '';
        const related    = attributes.related ?? '';
        const doNotTrack = ( false === attributes.doNotTrack ) ? 0 : 1;
        
        const buttonSize = attributes.buttonSize ?? 'small';

        // Only add ID attribute if it exists
        const blockProps = useBlockProps.save( {
            className: className,
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );
        
        return ( <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes } ) }</style>
            ) }

            <div { ...blockProps }>
                <div className="wpmozo_twitter_embedded_tweet_button">
                    <a className="wpmozo_twitter_embed_tweet_button"
                        href="https://x.com/intent/tweet"
                        data-text={ customText }
                        data-url={ customUrl }
                        data-size={ buttonSize }
                        data-dnt={ doNotTrack }
                        data-hashtags={ hashtags }
                        data-via={ via }
                        data-related={ related }
                    >Tweet</a>
                </div>
            </div>
        </> );
    },
};

export default V1;