import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {
	const toConvertStyles = [
		'global',
		'prePost',
		'animated',
		'prePostDimensions',
		'animatedDimensions'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;

	// Display in stack.
	if ( attributes?.displayInStack ) {
		styles += `.pre_text_wrapper, .post_text_wrapper{ display: block; }`;
	}

	// Animation duration.
	if ( 'typing' !== attributes.selectAnimation ) {
		styles += `.animated_text{
			${attributes.animationDuration ? `animation-duration: ${attributes.animationDuration}ms;` : ''}
		}`;
	}

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
