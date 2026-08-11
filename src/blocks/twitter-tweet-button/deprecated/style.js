
import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'fallbackText',
		'button',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	// Alignment.
	if ( attributes.buttonAlign ) {
		styles += `text-align: ${attributes.buttonAlign};`;
	}

	styles += `.wpmozo_twitter_embedded_tweet_button{ display: inline-block; max-width: 100%; line-height: 0; }`;

	styles += `.wpmozo_twitter_embedded_tweet_button{
		text-decoration: none;
		border: 0 solid #000000;
		${convertedStyle.button}
	}`;

	styles += `.wpmozo_twitter_embed_tweet_button{
		${attributes.fallbackTextColor ? `color: ${attributes.fallbackTextColor};` : ''}
		${convertedStyle.fallbackText}
	}`;

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;