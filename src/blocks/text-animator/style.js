import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
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

    let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	if ( attributes?.displayInStack ) {
		normalcss.push(`
			.wpmozo-animated-text{
				display: flex;
				flex-direction: column;
				${alignItems ? `place-items: ${alignItems};` :''}
			}
			.pre_text_wrapper, 
			.post_text_wrapper{ 
				vertical-align: -webkit-baseline-middle; 
			}`
		);	
	}

	if ( 'typing' !== attributes.selectAnimation ) {
		normalcss.push(attributes.animationDuration ? `.animated_text{ animation-duration: ${attributes.animationDuration}ms; }` : '');
	}

	normalcss.push(
		( attributes.globalTextColor || attributes.globalTextAlignment || convertedStyle.global ) 
		? `.wpmozo-animated-text{
				${attributes.globalTextColor ? `color: ${attributes.globalTextColor};` : ''}
				${attributes.globalTextAlignment ? `text-align: ${attributes.globalTextAlignment};` : ''}
				${convertedStyle.global || ''}
			}`
		: ''
	);
	
	normalcss.push(
		( attributes.prePostTextColor || convertedStyle.prePost || ( attributes.useBackgroundPrepost && attributes.prePostBackgroundType === 'classic' && attributes.prePostBackgroundColor ) || ( attributes.useBackgroundPrepost && attributes.prePostBackgroundType === 'gradient' && attributes.prePostBackgroundGradient ) )
		? `.pre_text_wrapper, .post_text_wrapper{
			${attributes.prePostTextColor ? `color: ${attributes.prePostTextColor};` : ''}
			${convertedStyle.prePost || ''}

			${ ( attributes.useBackgroundPrepost && 'classic' === attributes.prePostBackgroundType ) 
				? ( attributes.prePostBackgroundColor ? `background-color: ${attributes.prePostBackgroundColor};` : '' )
				: '' 
			}
			${ ( attributes.useBackgroundPrepost && 'gradient' === attributes.prePostBackgroundType ) 
				? ( attributes.prePostBackgroundGradient ? `background-image: ${attributes.prePostBackgroundGradient};` : '' )
				: '' 
			}
		}`
		: ''
	);
	normalcss.push(
		( attributes.animatedTextColor || convertedStyle.animated || ( attributes.useBackgroundAnimated && attributes.animatedBackgroundType === 'classic' && attributes.animatedBackgroundColor ) || ( attributes.useBackgroundAnimated && attributes.animatedBackgroundType === 'gradient' && attributes.animatedBackgroundGradient ) )
		? `.animated_text{
			${attributes.animatedTextColor ? `color: ${attributes.animatedTextColor};` : ''}
			${convertedStyle.animated || ''}

			${ ( attributes.useBackgroundAnimated && 'classic' === attributes.animatedBackgroundType ) 
				? ( attributes.animatedBackgroundColor ? `background-color: ${attributes.animatedBackgroundColor};` : '' )
				: '' 
			}
			${ ( attributes.useBackgroundAnimated && 'gradient' === attributes.animatedBackgroundType ) 
				? ( attributes.animatedBackgroundGradient ? `background-image: ${attributes.animatedBackgroundGradient};` : '' )
				: '' 
			}
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