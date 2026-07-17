import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

const Save = ( { attributes } ) => {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-twitter-tweet-button' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	// Get attributes.
	const customText = attributes.customText ?? '';
	const customUrl  = attributes.customUrl ?? '';
	const hashtags   = attributes.hashtags ?? '';
	const via        = attributes.via ?? '';
	const related    = attributes.related ?? '';
	const doNotTrack = ( false === attributes.doNotTrack ) ? 0 : 1;
	
	const buttonSize = attributes.buttonSize ?? 'small';
	
	return ( <>
		{/* Only output <style> if ID exists. */}
		{ ( ID && '' !== ID ) && (
			<style>{ generateDynamicStyle( { attributes } ) }</style>
		) }

		<div { ...blockProps } id={`block-${ ID }`}>
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
