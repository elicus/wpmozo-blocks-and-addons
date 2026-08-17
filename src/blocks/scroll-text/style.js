import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'block','text','textHover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	// If scroll type color or blur.
	normalcss.push( 'color' === attributes.scrollEffect && attributes.activeTextColor ? `.wpmozo-scroll-text-inner.wpmozo_scroll_word_color .wpmozo_st_word.visible, .wpmozo-scroll-text-inner.wpmozo_scroll_letter_color .wpmozo_st_letter.visible{ color: ${attributes.activeTextColor}; }` : '');
	
	normalcss.push( 'blur' === attributes.scrollEffect && attributes.textBlurLevel  ? `.wpmozo_scroll_word_blur .wpmozo_st_word, .wpmozo_scroll_letter_blur .wpmozo_st_letter{ filter: blur( ${attributes.textBlurLevel}px ); }` : '');

	normalcss.push( 'slide' === attributes.scrollEffect && attributes.slideEffectStart  ? `.wpmozo_scroll_word_slide .wpmozo_st_word, .wpmozo_scroll_letter_slide .wpmozo_st_letter{ transform: translateY( ${attributes.slideEffectStart}px ); }` : '');

	normalcss.push( 'skew' === attributes.scrollEffect && attributes.skewEffectStart  ? `.wpmozo_scroll_word_skew .wpmozo_st_word, .wpmozo_scroll_letter_skew .wpmozo_st_letter{ transform:skewY( ${attributes.skewEffectStart}deg );}` : '');

	normalcss.push(
		( attributes.textAlign || convertedStyle.block ) 
		? `.wpmozo-scroll-text-wrap {
				${attributes.textAlign ? `text-align: ${attributes.textAlign};` : ''}
				${convertedStyle.block || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.textColor || convertedStyle.text ) 
		? `.wpmozo-scroll-text-inner .wpmozo_st_word,
		   .wpmozo-scroll-text-inner .wpmozo_st_letter {
				${attributes.textColor ? `color: ${attributes.textColor};` : ''}
				${convertedStyle.text || ''}
			}`
		: ''
	);

	hovercss.push(
		( attributes.textHoverColor || convertedStyle.textHover ) 
		? `.wpmozo-scroll-text-inner:hover .wpmozo_st_word${isEditor('.wpmozo-scroll-text-inner .wpmozo_st_word')},
		   .wpmozo-scroll-text-inner:hover .wpmozo_st_letter${isEditor('.wpmozo-scroll-text-inner .wpmozo_st_letter')} {
				${attributes.textHoverColor ? `color: ${attributes.textHoverColor};` : ''}
				${convertedStyle.textHover || ''}
			}`
		: ''
	);

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID} {${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
	styles = styles.replace(/\s+/g, ' ')
	.replace(/\s*{\s*/g, '{')
	.replace(/\s*}\s*/g, '}')
	.replace(/\s*:\s*/g, ':')
	.replace(/\s*;\s*/g, ';')
	.replace(/\s*,\s*/g, ',')    
	.trim();
	return styles;
}

export default generateDynamicStyle;