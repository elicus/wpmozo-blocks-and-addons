
import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
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

	let styles = `#block-${attributes.ID} {`;

	// Content box align.
	if ( attributes.contentBoxAlign ) {
		styles += `.wpmozo-promotion-bar-content{
			text-align: ${attributes.contentBoxAlign};
			${ !attributes.layout ? `background:`+ attributes.timerBoxBGGradient + `;` : ''}
		}`;
		// Content box width.
		if ( attributes.layout && 'layout1' !== attributes.layout && attributes.contentBoxWidth ) {
			styles += `.wpmozo-promotion-bar-wrap.layout2 .wpmozo-promotion-bar-content, .wpmozo-promotion-bar-wrap.layout3 .wpmozo-promotion-bar-content{
				width: ${attributes.contentBoxWidth}%;
			}`;
		}
	}
	// Timer box align.
	if ( attributes.timerBoxAlign ) {
		styles += `.wpmozo-promotion-bar-timer{
			justify-content: ${ ( 'left' === attributes.timerBoxAlign ? 'flex-start' : ( ( 'right' === attributes.timerBoxAlign ) ? 'flex-end' : attributes.timerBoxAlign ) ) };
		}`;
	}

	// Stack labels.
	if ( false === attributes.stackLabel ) {
		styles += `.wpmozo-pb-timer-box{display: flex; align-items: center; justify-content: center;}`;
	}
	// Timerbox.
	styles += `.wpmozo-pb-timer-box{
		${attributes.timerBoxBGGradient ? `background:`+ attributes.timerBoxBGGradient + `;` : ''}
		${attributes.timerBoxBackground ? `background-color:`+ attributes.timerBoxBackground + `;` : ''}
		${convertedStyle.timerBox}
	}`;

	// Image.
	if ( attributes.showImage ) {
		styles += `.wpmozo-image-wrap .wpmozo-promotion-bar-image{
			${ ( attributes.imageEnableCustomSize && attributes.imageMinWidth ) ? `min-width: ${attributes.imageMinWidth}px;` : '' }
			${ ( attributes.imageEnableCustomSize && attributes.imageMaxWidth ) ? `max-width: ${attributes.imageMaxWidth}px;` : '' }
			${convertedStyle.image}
		}`;
	}

	// Title.
	styles += `.wpmozo-pb-title{
		${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
		${convertedStyle.title}
	}`;
	styles += `.wpmozo-pb-title:hover{
		${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
		${convertedStyle.titleHover}
	}`;

	// Description.
	styles += `.wpmozo-pb-desc{
		${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
		${convertedStyle.description}
	}`;
	styles += `.wpmozo-pb-desc:hover{
		${attributes.descriptionHoverColor ? `color: ${attributes.descriptionHoverColor};` : ''}
		${convertedStyle.descriptionHover}
	}`;

	// Digits CSS.
	styles += `.wpmozo-pb-timer-box .wpmozo-pb-number{
		${attributes.digitsColor ? `color: ${attributes.digitsColor};` : ''}
		${attributes.digitsBoxWidth ? `min-width: ${attributes.digitsBoxWidth}px;` : ''}
		${attributes.digitsBackgroundColor ? `background-color: ${attributes.digitsBackgroundColor};` : ''}
		${convertedStyle.digits}
	}`;

	// Labels CSS.
	if ( attributes.displayLabel && 'none' !== attributes.displayLabel ) {
		styles += `.wpmozo-pb-timer-box .wpmozo-pb-label{
			${attributes.labelsColor ? `color: ${attributes.labelsColor};` : ''}
			${attributes.labelsBackgroundColor ? `background-color: ${attributes.labelsBackgroundColor};` : ''}
			${convertedStyle.labels}
		}`;
	}

	// Separator.
	if ( attributes.showSeparator ) {
		styles += `.wpmozo-promotion-bar-timer .wpmozo-pb-separator{
			${attributes.separatorColor ? `color: ${attributes.separatorColor};` : ''}
			${convertedStyle.separator}
		}`;
	}

	// Sale Button.
	if ( attributes.showButton ) {
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button{
			${attributes.buttonBGGradient ? `background:`+ attributes.buttonBGGradient + `;` : ''}
			${attributes.buttonBackground ? `background:`+ attributes.buttonBackground + `;` : ''}
			${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
			${convertedStyle.button}
		}`;
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover{
			${attributes.buttonHoverBGGradient ? `background:`+ attributes.buttonHoverBGGradient + `;` : ''}
			${attributes.buttonHoverBackground ? `background:`+ attributes.buttonHoverBackground + `;` : ''}
			${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
			${convertedStyle.buttonHover}
		}`;
	}

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;