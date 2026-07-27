import { convertInlineStyleStr, wpmozo_get_text_shadow } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {
    const toConvertStyles = [
        'percentage',
		'bar',
    ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    const percentShadow = wpmozo_get_text_shadow(attributes, 'percentageTextShadow');

    const blockId = clientId || attributes.ID;
    const id = `#block-${blockId}`;
    let styles = '';


    // Percentage styling
	styles += `
		${id} .wpmozo-bna-progress-bar-percent {
			${attributes.percentageColor ? `color: ${attributes.percentageColor} !important;` : ''}
			${convertedStyle.percentage}
			${percentShadow ? `text-shadow: ${percentShadow} !important;` : ''}
		}
	`;
	// Percentage Hover styling
	if (attributes.percentageHoverColor) {
		styles += `
			${id} .wpmozo-bna-progress-bar-wrapper:hover .wpmozo-bna-progress-bar-percent {
				color : ${attributes.percentageHoverColor} !important;
			}
		`;
	}


    if ('bar' === attributes.layout) {
        const sizeProp = ('vertical' === attributes.barDirection) ? 'width' : 'height';
        styles += `
			${id} .wpmozo-bna-progress-bar-wrapper.wpmozo-bna-progress-bar-layout-bar {
				background-color: ${attributes.barEmptyColor || '#eeeeee'} !important;
				${sizeProp}: ${attributes.barSize || 30}px !important;
				${convertedStyle.bar}
			}
			${id} .wpmozo-bna-progress-bar-wrapper.wpmozo-bna-progress-bar-layout-bar:hover {
				background-color: ${attributes.barEmptyHoverColor || attributes.barEmptyColor || '#eeeeee'} !important;
			}
			${id} .wpmozo-bna-progress-bar-layout-bar .wpmozo-bna-progress-bar-inner {
				background-color: ${attributes.barFilledColor || '#007bff'} !important;
				${'vertical' === attributes.barDirection ? `align-items: ${attributes.percentAlign === 'left' ? 'flex-start' : (attributes.percentAlign === 'right' ? 'flex-end' : 'center')} !important;` : `justify-content: ${attributes.percentAlign === 'left' ? 'flex-start' : (attributes.percentAlign === 'right' ? 'flex-end' : 'center')} !important;`}
			}
			${id} .wpmozo-bna-progress-bar-layout-bar:hover .wpmozo-bna-progress-bar-inner {
				background-color: ${attributes.barFilledHoverColor || attributes.barFilledColor || '#007bff'} !important;
			}
		`;

        if ('vertical' === attributes.barDirection) {
            styles += `
				${id} .wpmozo-bna-progress-bar-wrapper[data-bar_direction="vertical"] {
					height: ${attributes.barHeight || 500}px !important;
				}
			`;
        }
    } else {
        styles += `
			${id} .wpmozo-bna-progress-bar-wrapper {
				width: ${attributes.circleSize || 150}px !important;
			}
			${id} .wpmozo-bna-progress-bar-inner svg .wpmozo-bna-circle-bg {
				fill: ${attributes.circleFillColor || '#a5a5a5'} !important;
				stroke: ${attributes.barEmptyColor || '#eeeeee'} !important;
			}
			${id} .wpmozo-bna-progress-bar-inner:hover svg .wpmozo-bna-circle-bg {
				fill: ${attributes.circleFillHoverColor || attributes.circleFillColor || '#a5a5a5'} !important;
				stroke: ${attributes.barEmptyHoverColor || attributes.barEmptyColor || '#eeeeee'} !important;
			}
			${id} .wpmozo-bna-progress-bar-inner svg .wpmozo-bna-circle-fg {
				stroke: ${attributes.barFilledColor || '#007bff'} !important;
			}
			${id} .wpmozo-bna-progress-bar-inner:hover svg .wpmozo-bna-circle-fg {
				stroke: ${attributes.barFilledHoverColor || attributes.barFilledColor || '#007bff'} !important;
			}
		`;
    }

    return styles;
};

export default generateDynamicStyle;
