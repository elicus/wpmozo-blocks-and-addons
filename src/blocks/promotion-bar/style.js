
import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'image',
		'title',
		'titleHover',
		'description',
		'descriptionHover',
		'button',
		'buttonHover',
		'timerBox',
		'digits',
		'labels',
		'separator',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	// Content box align.
	if ( attributes.contentBoxAlign ) {
		normalcss.push(
			attributes.contentBoxAlign || ( ! attributes.layout && attributes.timerBoxBGGradient ) 
			? `
			.wpmozo-promotion-bar-content{
				${attributes.contentBoxAlign ? `text-align: ${attributes.contentBoxAlign};` : ''}
				${ !attributes.layout && attributes.timerBoxBGGradient ? `background:${attributes.timerBoxBGGradient};` : '' }
			}`
			: ''
		);
		// Content box width.
		if ( attributes.layout && 'layout1' !== attributes.layout && attributes.contentBoxWidth ) {
			normalcss.push(`.wpmozo-promotion-bar-wrap.layout2 .wpmozo-promotion-bar-content, .wpmozo-promotion-bar-wrap.layout3 .wpmozo-promotion-bar-content{
				width: ${attributes.contentBoxWidth}%;
			}`);
		}
	}

	// Timer box align.
	normalcss.push(attributes.timerBoxAlign ? `
		.wpmozo-promotion-bar-timer{
			justify-content: ${ ( 'left' === attributes.timerBoxAlign ? 'flex-start' : ( ( 'right' === attributes.timerBoxAlign ) ? 'flex-end' : attributes.timerBoxAlign ) ) };
		}` : '' 
	);

	// Stack labels.
	normalcss.push(!attributes.stackLabel ? '.wpmozo-pb-timer-box{display: flex; align-items: center; justify-content: center;}' : '');

	//Timerbox
	normalcss.push(
		( attributes.timerBoxBGGradient || attributes.timerBoxBackground || convertedStyle.timerBox )
		? `.wpmozo-pb-timer-box{
				${attributes.timerBoxBGGradient ? `background: ${attributes.timerBoxBGGradient};` : ''}
				${attributes.timerBoxBackground ? `background-color: ${attributes.timerBoxBackground};` : ''}
				${convertedStyle.timerBox || ''}
		  }`
		: ''
	);

	// Image.
	normalcss.push(
		( attributes.imageEnableCustomSize || attributes.imageMinWidth || attributes.imageMaxWidth || convertedStyle.image )
		? `.wpmozo-image-wrap .wpmozo-promotion-bar-image{
				${ ( attributes.imageEnableCustomSize && attributes.imageMinWidth ) ? `min-width: ${attributes.imageMinWidth}px;` : '' }
				${ ( attributes.imageEnableCustomSize && attributes.imageMaxWidth ) ? `max-width: ${attributes.imageMaxWidth}px;` : '' }
				${convertedStyle.image || ''}
		  }`
		: ''
	);

	// Title
	normalcss.push(
		( attributes.titleColor || convertedStyle.title )
		? `.wpmozo-pb-title{
				${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
				${convertedStyle.title || ''}
		  }`
		: ''
	);
	hovercss.push(
		( attributes.titleHoverColor || convertedStyle.titleHover )
		? `.wpmozo-pb-title:hover${isEditor('.wpmozo-pb-title')}{
				${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
				${convertedStyle.titleHover || ''}
		  }`
		: ''
	);

	//Description
	normalcss.push(
		( attributes.descriptionColor || convertedStyle.description )
		? `.wpmozo-pb-desc{
				${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
				${convertedStyle.description || ''}
			}`
		: ''
	);
	hovercss.push(
		( attributes.descriptionHoverColor || convertedStyle.descriptionHover )
		? `.wpmozo-pb-desc:hover${isEditor('.wpmozo-pb-desc')}{
				${attributes.descriptionHoverColor ? `color: ${attributes.descriptionHoverColor};` : ''}
				${convertedStyle.descriptionHover || ''}
			}`
		: ''
	);

	// Digits CSS
	normalcss.push(
		( attributes.digitsColor || attributes.digitsBoxWidth || attributes.digitsBackgroundColor || convertedStyle.digits )
		? `.wpmozo-pb-timer-box .wpmozo-pb-number{
				${attributes.digitsColor ? `color: ${attributes.digitsColor};` : ''}
				${attributes.digitsBoxWidth ? `min-width: ${attributes.digitsBoxWidth}px;` : ''}
				${attributes.digitsBackgroundColor ? `background-color: ${attributes.digitsBackgroundColor};` : ''}
				${convertedStyle.digits || ''}
			}`
		: ''
	);

	// Labels CSS.
	if ( attributes.displayLabel && 'none' !== attributes.displayLabel ) {
		normalcss.push(
			( attributes.labelsColor || attributes.labelsBackgroundColor || convertedStyle.labels )
			? `.wpmozo-pb-timer-box .wpmozo-pb-label{
					${attributes.labelsColor ? `color: ${attributes.labelsColor};` : ''}
					${attributes.labelsBackgroundColor ? `background-color: ${attributes.labelsBackgroundColor};` : ''}
					${convertedStyle.labels || ''}
				}`
			: ''
		);
	}

	// Separator.
	if ( attributes.showSeparator ) {
		normalcss.push(
			( attributes.separatorColor || convertedStyle.separator )
			? `.wpmozo-promotion-bar-timer .wpmozo-pb-separator{
					${attributes.separatorColor ? `color: ${attributes.separatorColor};` : ''}
					${convertedStyle.separator || ''}
			}`
			: ''
		);
	}

	// Sale Button.
	if ( attributes.showButton ) {
		normalcss.push(
			( attributes.buttonBGGradient || attributes.buttonBackground || attributes.buttonColor || convertedStyle.button )
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button{
					${attributes.buttonBGGradient ? `background: ${attributes.buttonBGGradient};` : ''}
					${attributes.buttonBackground ? `background: ${attributes.buttonBackground};` : ''}
					${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
					${convertedStyle.button || ''}
			}`
			: ''
		);
		hovercss.push(
			( attributes.buttonHoverBGGradient || attributes.buttonHoverBackground || attributes.buttonHoverColor || convertedStyle.buttonHover )
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover${isEditor('.wpmozo-bna-button-wrap .wpmozo-bna-button')}{
					${attributes.buttonHoverBGGradient ? `background: ${attributes.buttonHoverBGGradient};` : ''}
					${attributes.buttonHoverBackground ? `background: ${attributes.buttonHoverBackground};` : ''}
					${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
					${convertedStyle.buttonHover || ''}
			}`
			: ''
		);
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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