import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'global',
		'prePost',
		'animated',
		'prePostDimensions',
		'animatedDimensions'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let alignItems;
	if ('left' === attributes.globalTextAlignment) {
		alignItems = 'flex-start';
	} else if ('right' === attributes.globalTextAlignment) {
		alignItems = 'flex-end';
	} else {
		alignItems = 'center';
	}

    let styles = `#block-${attributes.ID} {`;

	// Display in stack.
	if ( attributes?.displayInStack ) {
		styles += `
		.wpmozo-animated-text{display: flex;flex-direction: column;place-items: ${alignItems};}
		.pre_text_wrapper, .post_text_wrapper{ vertical-align: -webkit-baseline-middle; }`;
	}

	// Animation duration.
	if ( 'typing' !== attributes.selectAnimation ) {
		styles += `.animated_text{
			${attributes.animationDuration ? `animation-duration: ${attributes.animationDuration}ms;` : ''}
		}`;
	}

	// Global text.
	styles += `.wpmozo-animated-text{
		${attributes.globalTextColor ? `color: ${attributes.globalTextColor};` : ''}
		${attributes.globalTextAlignment ? `text-align: ${attributes.globalTextAlignment};` : ''}
		${convertedStyle.global}
	}`;

	// Pre/Post text.
	styles += `.pre_text_wrapper, .post_text_wrapper{
		${attributes.prePostTextColor ? `color: ${attributes.prePostTextColor};` : ''}
		${convertedStyle.prePost}

		${ ( attributes.useBackgroundPrepost && 'classic' === attributes.prePostBackgroundType ) ?
			( attributes.prePostBackgroundColor ) ? `background-color: ${attributes.prePostBackgroundColor};` : ''
		: '' }
		${ ( attributes.useBackgroundPrepost && 'gradient' === attributes.prePostBackgroundType ) ?
			( attributes.prePostBackgroundGradient ) ? `background-image: ${attributes.prePostBackgroundGradient}` : ''
		: '' }
	}`;
	// Animated text.
	styles += `.animated_text{
		${attributes.animatedTextColor ? `color: ${attributes.animatedTextColor};` : ''}
		${convertedStyle.animated}

		${ ( attributes.useBackgroundAnimated && 'classic' === attributes.animatedBackgroundType ) ?
			( attributes.animatedBackgroundColor ) ? `background-color: ${attributes.animatedBackgroundColor};` : ''
		: '' }
		${ ( attributes.useBackgroundAnimated && 'gradient' === attributes.animatedBackgroundType ) ?
			( attributes.animatedBackgroundGradient ) ? `background-image: ${attributes.animatedBackgroundGradient}` : ''
		: '' }
	}`;

    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
