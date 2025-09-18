import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'block','text','textHover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;

	// If scroll type color or blur.
	if ( 'color' === attributes.scrollEffect && attributes.activeTextColor ) {
		styles += `.wpmozo_scroll_word_color .wpmozo_st_word.visible, .wpmozo_scroll_letter_color .wpmozo_st_letter.visible{
			color: ${attributes.activeTextColor} !important;
		}`;
	}
	if ( 'blur' === attributes.scrollEffect && attributes.textBlurLevel ) {
		styles += `.wpmozo_scroll_word_blur .wpmozo_st_word, .wpmozo_scroll_letter_blur .wpmozo_st_letter{
			filter: blur( ${attributes.textBlurLevel}px );
		}`;
	}
	if ( 'slide' === attributes.scrollEffect && attributes.slideEffectStart ) {
		styles += `.wpmozo_scroll_word_slide .wpmozo_st_word, .wpmozo_scroll_letter_slide .wpmozo_st_letter{
			transform: translateY( ${attributes.slideEffectStart}px );
		}`;
	}
	if ( 'skew' === attributes.scrollEffect && attributes.skewEffectStart ) {
		styles += `.wpmozo_scroll_word_skew .wpmozo_st_word, .wpmozo_scroll_letter_slide .wpmozo_st_letter{
			skewY( ${attributes.skewEffectStart}deg );
		}`;
	}

	styles +=`
		.wpmozo-scroll-text-wrap{
			text-align:${attributes.textAlign};
			${convertedStyle.block}
		}
		.wpmozo-scroll-text-inner .wpmozo_st_word,
		.wpmozo-scroll-text-inner .wpmozo_st_letter{
			color:${attributes.textColor} !important;
			${convertedStyle.text}
		}

		.wpmozo-scroll-text-inner:hover .wpmozo_st_word,
		.wpmozo-scroll-text-inner:hover .wpmozo_st_letter{
			color:${attributes.textHoverColor} !important;
			${convertedStyle.textHover}
		}
	`;

    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
