
import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'tweet'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	styles += `.wpmozo_tweet{ display: inline-block; margin: 0; padding: 10px; }`;
	styles += `.wpmozo_twitter_embedded_tweet_wrapper{
		max-width: 100%;
		${ 'center' === attributes.tweetAlign ? 'margin-left: auto; margin-right: auto;' : '' }
		${ 'right' === attributes.tweetAlign ? 'margin-left: auto;' : '' }
		${ attributes?.maxWidth ? `width: ${attributes?.maxWidth}px;` : '' }
	}`;
	styles += `.wpmozo_tweet, .twitter-tweet{
		${convertedStyle.tweet}
	}`;

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
