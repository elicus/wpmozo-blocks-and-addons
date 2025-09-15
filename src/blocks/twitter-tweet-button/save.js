import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	// Get attributes.
	const customText = attributes.customText ?? '';
	const customUrl  = attributes.customUrl ?? '';
	const hashtags   = attributes.hashtags ?? '';
	const via        = attributes.via ?? '';
	const related    = attributes.related ?? '';
	const doNotTrack = ( false === attributes.doNotTrack ) ? 0 : 1;
	
	const buttonSize = attributes.buttonSize ?? 'small';
	
	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div {...useBlockProps.save( { className: attributes.className } )} id={`block-${clientId}`}>
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
}

export default Save;
