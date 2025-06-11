import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {

	const {iconFontSize, separatorColor} = attributes,
		parent = '#block-' + clientId,
		toConvertStyles = [
			'preText',
			'preTextDimensions',
			'mainText',
			'mainTextDimensions',
			'postText',
			'postTextDimensions',
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes),
		flexDirection = attributes.displayInStack ? 'column' : 'initial',
		headingAlignment = ('left' === attributes.headingAlignment) ? 'flex-start' : 'flex-end',
		preTextAlignment = ('left' === attributes.preTextAlignment) ? 'flex-start' : 'flex-end',
		mainTextAlignment = ('left' === attributes.mainTextAlignment) ? 'flex-start' : 'flex-end',
		postTextAlignment = ('left' === attributes.postTextAlignment) ? 'flex-start' : 'flex-end',
		preTextAddi = convertedStyle.preText + convertedStyle.preTextDimensions,
		mainTextAddi = convertedStyle.mainText + convertedStyle.mainTextDimensions,
		postTextAddi = convertedStyle.postText + convertedStyle.postTextDimensions;

	if ('center' === attributes.headingAlignment) {
		headingAlignment = 'center';
	}
	if ('center' === attributes.preTextAlignment) {
		preTextAlignment = 'center';
	}
	if ('center' === attributes.mainTextAlignment) {
		mainTextAlignment = 'center';
	}
	if ('center' === attributes.postTextAlignment) {
		postTextAlignment = 'center';
	}

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.wpmozo-bna-fancy-heading-inner {
			display: flex;
			line-height: 1;
			padding: 0;
			margin: 0;
			${ ( attributes.displayInStack && attributes.headingAlignment ) ? `align-items: ${headingAlignment};` : ''}
			${ attributes.headingAlignment ? `text-align: ${headingAlignment};` : ''}
			white-space: pre-wrap;
			flex-wrap: wrap;
			${ attributes.headingAlignment ? `justify-content: ${headingAlignment};` : ''}
			flex-direction: ${flexDirection};
		}
		.wpmozo-bna-fancy-heading-inner span {
			display: inline-block;
			color: ${attributes.headingColor};
			background: ${attributes.headingBackground};
		}
		span.wpmozo-bna-pre-text {
			color: ${attributes.preTextColor};
    		background: ${attributes.preTextBackground};
            ${ ( attributes.displayInStack && attributes.preTextAlignment ) ? `align-self: ${preTextAlignment};`: ''}
            ${ attributes.preTextAlignment ? `text-align: ${preTextAlignment};` : ''}
            transition: all 300ms;
           	${preTextAddi}
		}
		span.wpmozo-bna-pre-text:hover {
			color: ${attributes.preTextHoverColor};
    		background: ${attributes.preTextHoverBackground};
		}
		span.wpmozo-bna-main-text {
			color: ${attributes.mainTextColor};
    		background: ${attributes.mainTextBackground};
    		${ ( attributes.displayInStack && attributes.mainTextAlignment ) ? `align-self: ${mainTextAlignment};`: ''}
    		${attributes.mainTextAlignment ? `text-align: ${attributes.mainTextAlignment};` : ''}
    		transition: all 300ms;
    		${mainTextAddi}
		}
		span.wpmozo-bna-main-text:hover {
			color: ${attributes.mainTextHoverColor};
    		background: ${attributes.mainTextHoverBackground};
		}
		span.wpmozo-bna-post-text {
			color: ${attributes.postTextColor};
    		background: ${attributes.postTextBackground};
    		${ ( attributes.displayInStack && attributes.postTextAlignment ) ? `align-self: ${postTextAlignment};`: ''}
    		${attributes.postTextAlignment ? `text-align: ${attributes.postTextAlignment};`: ''}
    		transition: all 300ms;
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
