import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {
	const toConvertStyles = [
		'global',
		'prePost',
		'animated',
<<<<<<< HEAD
=======
		'post',
>>>>>>> 5f7ae3c (WIP: imported module but does not working.)
		'prePostDimensions',
		'animatedDimensions'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;
<<<<<<< HEAD

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

=======
	
>>>>>>> 5f7ae3c (WIP: imported module but does not working.)
    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
