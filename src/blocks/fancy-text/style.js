import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {

	const {iconFontSize, separatorColor} = attributes,
		parent = '#block-' + clientId,
		toConvertStyles = [
			'text',
			'textBgDimensions'
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.wpmozo-bna-fancy-text-inner {
			background-clip : border-box;
			-webkit-background-clip: text;
    		-webkit-text-fill-color: transparent;
    		text-align: ${attributes.textAlignment};
			${convertedStyle.text}
		}
	`;

	if ('gradient' === attributes.textStyle) {
		styles += `
			.wpmozo-bna-fancy-text-inner {
				background-color: transparent;
				background-image: ${attributes.fancyTextBackground};
			}
		`;
	} else {
		let escURL = encodeURI(attributes.fancyTextBackgroundImg);

		styles += `
			.wpmozo-bna-fancy-text-inner {
				background-image: url(${escURL});
				background-size: ${attributes.textBgSize};
				background-position: ${attributes.textBgPosition};
				background-repeat: ${attributes.textBgRepeat};
			}
		`;

		if ('none' !== attributes.textBgOverlay) {
			styles += `
				.wpmozo-bna-fancy-text-inner:before {
					content: "";
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					z-index: -2;
					background-image: inherit;
					background-size: ${attributes.textBgSize};
					background-position: ${attributes.textBgPosition};
					background-repeat: ${attributes.textBgRepeat};
				}
			`;
			styles += `
				.wpmozo-bna-fancy-text-inner:after {
					content: "";
					position: absolute;
					top: 0;
					right: 0;
					bottom: 0;
					left: 0;
					z-index: -1;
					${(attributes.textBgOverlayColorSolid) ? `background-color: ${attributes.textBgOverlayColorSolid};` : ''}
					${(!attributes.textBgOverlayColorSolid) ? `background: ${attributes.textBgOverlayColorGradient};` : ''}
				}
			`;
		}
	}

	styles += `}`;

	styles += `
		    	${parent} {
		    		z-index: 0;
		    		position: relative;
		    	}
		    `;

	if (!wpmozo_is_empty(convertedStyle.textBgDimensions) && 'none' !== attributes.textBgOverlay) {
		styles += `
	    	${parent} {
	    		${convertedStyle.textBgDimensions}
	    	}
	    `;
	}

	return styles;
};

export default generateDynamicStyle;
