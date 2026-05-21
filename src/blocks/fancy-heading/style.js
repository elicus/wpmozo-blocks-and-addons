import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {
	const toConvertStyles = [
		'preText',
		'preTextDimensions',
		'mainText',
		'mainTextDimensions',
		'postText',
		'postTextDimensions',
	];
	const convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	const alignMap = {
		left: 'flex-start',
		center: 'center',
		right: 'flex-end'
	};

	let	flexDirection     = attributes.displayInStack ? 'column' : 'initial',
		headingAlignment  = alignMap[ attributes.headingAlignment ] || '',
		preTextAlignment  = alignMap[ attributes.preTextAlignment ] || '',
		mainTextAlignment = alignMap[ attributes.mainTextAlignment ] || '',
		postTextAlignment = alignMap[ attributes.postTextAlignment ] || '',
		preTextAddi       = convertedStyle.preText + convertedStyle.preTextDimensions,
		mainTextAddi      = convertedStyle.mainText + convertedStyle.mainTextDimensions,
		postTextAddi      = convertedStyle.postText + convertedStyle.postTextDimensions;

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.wpmozo-bna-fancy-heading-inner {
			display: flex;
			align-items: center;
			line-height: 1;
			padding: 0;
			margin: 0;
			white-space: pre-wrap;
			flex-wrap: wrap;
			flex-direction: ${flexDirection};
			${ attributes.headingAlignment ? `text-align: ${headingAlignment};` : ''}
			${ attributes.headingAlignment ? `justify-content: ${headingAlignment};` : ''}
			${ ( attributes.displayInStack && attributes.headingAlignment ) ? `align-items: ${headingAlignment};` : ''}
		}
		.wpmozo-bna-fancy-heading-inner span {
			display: inline-block;
			color: ${attributes.headingColor};
			background: ${attributes.headingBackground};
		}
		span.wpmozo-bna-pre-text {
            transition: all 300ms;
			color: ${attributes.preTextColor};
    		background: ${attributes.preTextBackground};
            ${ ( attributes.displayInStack && attributes.preTextAlignment ) ? `align-self: ${preTextAlignment};`: ''}
            ${ attributes.preTextAlignment ? `text-align: ${preTextAlignment};` : ''}
			${preTextAddi}
		}
		span.wpmozo-bna-pre-text:hover {
			color: ${attributes.preTextHoverColor};
    		background: ${attributes.preTextHoverBackground};
		}
		span.wpmozo-bna-main-text {
    		transition: all 300ms;
			color: ${attributes.mainTextColor};
    		background: ${attributes.mainTextBackground};
    		${ ( attributes.displayInStack && attributes.mainTextAlignment ) ? `align-self: ${mainTextAlignment};`: ''}
    		${attributes.mainTextAlignment ? `text-align: ${attributes.mainTextAlignment};` : ''}
    		${mainTextAddi}
		}
		span.wpmozo-bna-main-text:hover {
			color: ${attributes.mainTextHoverColor};
    		background: ${attributes.mainTextHoverBackground};
		}
		span.wpmozo-bna-post-text {
    		transition: all 300ms;
			color: ${attributes.postTextColor};
    		background: ${attributes.postTextBackground};
    		${ ( attributes.displayInStack && attributes.postTextAlignment ) ? `align-self: ${postTextAlignment};`: ''}
    		${attributes.postTextAlignment ? `text-align: ${attributes.postTextAlignment};`: ''}
    		${postTextAddi}
		}
		span.wpmozo-bna-post-text:hover {
			color: ${attributes.postTextHoverColor};
    		background: ${attributes.postTextHoverBackground};
		}
	`;

	styles += `}`;
	return styles;
};

export default generateDynamicStyle;
