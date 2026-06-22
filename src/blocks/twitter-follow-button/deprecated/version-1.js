// deprecated/version-1.js
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "../style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		twitterUsername: { type: "string" },
		doNotTrack: { type: "boolean", default: false },
		showUsername: { type: "boolean", default: false },
		buttonSize: { type: "string", default: "small" },

		buttonAlign: { type: "string" },
		
		fallbackTextColor: { type: "string" },
		fallbackTextFontSize: { type: "string", default: "14px" },
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
        const twitterUsername = attributes.twitterUsername ?? '';
        const buttonSize      = attributes.buttonSize ?? 'small';
        const doNotTrack      = ( false === attributes.doNotTrack ) ? 0 : 1;
        const showUsername    = attributes.showUsername ?? false;

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
                { ( twitterUsername && '' !== twitterUsername ) && (
                    <div className="wpmozo_twitter_embedded_follow_button">
                        <a className="wpmozo_twitter_embed_follow_button"
                            href={ "https://twitter.com/" + twitterUsername }
                            data-show-screen-name={ showUsername }
                            data-size={ buttonSize }
                            data-dnt={ doNotTrack }
                            data-name={ twitterUsername }
                        >
                            { __( 'Follow', 'wpmozo-blocks-and-addons' ) }
                            { ( true === showUsername ) && ' @' + twitterUsername }
                        </a>
                    </div>
                ) }
            </div>
        </> );
    },
};

export default V1;