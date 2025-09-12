
import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {
	const toConvertStyles = [
		'fallbackText'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${clientId} {`;

	// Alignment.
	if ( attributes.buttonAlign ) {
		styles += `text-align: ${attributes.buttonAlign};`;
	}

	styles += `.wpmozo_twitter_embedded_follow_button{ display: inline-block; line-height: 0; }`;

	styles += `.wpmozo_twitter_embed_follow_button{
		text-decoration: none;
		${attributes.fallbackTextColor ? `color: ${attributes.fallbackTextColor};` : ''}
		${convertedStyle.fallbackText}
	}`;

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
