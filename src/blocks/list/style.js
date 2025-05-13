import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'text',
        'link',
        'divider'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.wpmozo-bna-list-icon i {
			color : ${attributes.iconColor};
			font-size: ${attributes.iconFontSize}px;
		}
		.wpmozo-bna-list-layout.wpmozo-bna-list-default, .wpmozo-bna-list-layout.wpmozo-bna-list-default .block-editor-block-list__layout {
			align-items: ${'right' === attributes.listAlignment ? 'flex-end' : ( 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment )}
		}
		.wpmozo-bna-list-layout.wpmozo-bna-list-inline, .wpmozo-bna-list-layout.wpmozo-bna-list-inline .block-editor-block-list__layout {
				display : 'flex;
                justify-content: ${'right' === attributes.listAlignment ? 'flex-end' : ( 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment )};
                flex-flow: 'row wrap';
		}
		.wpmozo-bna-list-item-text {
				color: attributes.textColor;
                text-indent : ${attributes.indentation}px;
				${convertedStyle.text}
		}
		.wpmozo-bna-list-item-text a {
				color: ${attributes.linkColor};
				${convertedStyle.link}
		}
		.wpmozo-bna-marker-image {
				width: ${attributes.imageWidth}px;
		}
	`;
	if ( 'default' === attributes.layout ) {
		styles += `
			.wpmozo-bna-list-divider {
				border-top-width: ${attributes.dividerSize}px;
				border-style: ${attributes.dividerStyle};
                border-color: ${attributes.dividerColor};
				${convertedStyle.divider}
			}
		`;
	} else {
        styles += `.wpmozo-bna-list-divider {
            border-right-width: ${attributes.dividerSize}px;
            border-style: ${attributes.dividerStyle};
            border-color: ${attributes.dividerColor};
        	${convertedStyle.divider}
        }`;
	}

	if ( undefined === attributes.globalItemBackgroundColor ) {
		styles += `
			.wpmozo-bna-list-item {
				background: ${attributes.globalItemBackgroundGradient};
			}
		`;
	} else {
        styles += `.wpmozo-bna-list-item {
            background: ${attributes.globalItemBackgroundColor};
        }`;
	}
	
	styles += `}`;

	return styles;
};

export default generateDynamicStyle;