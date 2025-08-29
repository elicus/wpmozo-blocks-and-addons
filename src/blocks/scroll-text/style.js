import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {
	const toConvertStyles = [
		'block'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;

	// If scroll type color.
	if ( 'color' === attributes.scrollEffect && attributes.activeTextColor ) {
		styles += `.wpmozo_scroll_word_color .wpmozo_st_word.visible, .wpmozo_scroll_letter_color .wpmozo_st_letter.visible{
			color: ${attributes.activeTextColor} !important;
		}`;
	}

    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
