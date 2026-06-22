// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "../style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		tweetId: { type: "string" },
		fallbackContent: { type: "string" },
		doNotTrack: { type: "boolean", default: false },

		cards: { type: "boolean", default: true },
		conversation: { type: "boolean", default: true },
		theme: { type: "string", default: "light" },
		maxWidth: { type: "number", default: 350 },

		tweetAlign: { type: "string", default: "" },
		tweetborder: { type: "object" },
		tweetborderRadius: { type: "string" }

    },
    save( { attributes } ) {
        const { ID, className } = attributes;

        // Get attributes.
        const tweetId      = attributes.tweetId ?? '';
        const cards        = ( false === attributes.cards ) ? 'hidden' : 'visible';
        const conversation = ( false === attributes.conversation ) ? 'none' : 'all';
        const doNotTrack   = ( false === attributes.doNotTrack ) ? 0 : 1;
        const theme        = attributes.theme ?? 'light';
        const maxWidth     = attributes.maxWidth ?? 350;

        // Only add ID attribute if it exists.
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
                { ( attributes.tweetId && '' !== attributes.tweetId ) && (
                    <div className="wpmozo_twitter_embedded_tweet_wrapper">
                        <blockquote className="wpmozo_tweet"
                            data-id={ tweetId }
                            data-cards={ cards }
                            data-conversation={ conversation }
                            data-theme={ theme }
                            data-dnt={ doNotTrack }
                            data-width={ maxWidth }
                        >{ attributes.fallbackContent }</blockquote>
                    </div>
                ) }
            </div>
        </> );
    },
};

export default V1;