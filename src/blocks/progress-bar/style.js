import { convertInlineStyleStr, wpmozo_get_text_shadow } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {
    const toConvertStyles = [
        'title',
        'percentage',
    ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    const titleShadow = wpmozo_get_text_shadow(attributes, 'titleTextShadow');
    const percentShadow = wpmozo_get_text_shadow(attributes, 'percentageTextShadow');

    let styles = `#block-${attributes.ID} {`;

    styles += `
		.wpmozo-bna-progress-bar-title {
			color : ${attributes.titleColor};
			text-align: ${attributes.titleAlign};
			${convertedStyle.title}
			${titleShadow ? `text-shadow: ${titleShadow};` : ''}
		}
	`;

    styles += `
		.wpmozo-bna-progress-bar-percent {
			color : ${attributes.percentageColor};
			${convertedStyle.percentage}
			${percentShadow ? `text-shadow: ${percentShadow};` : ''}
		}
	`;

    if ('bar' === attributes.layout) {
        const sizeProp = ('vertical' === attributes.barDirection) ? 'width' : 'height';
        styles += `
			.wpmozo-bna-progress-bar-wrapper.wpmozo-bna-progress-bar-layout-bar {
				background-color: ${attributes.barEmptyColor};
				${sizeProp}: ${attributes.barSize}px !important;
			}
			.wpmozo-bna-progress-bar-wrapper.wpmozo-bna-progress-bar-layout-bar:hover {
				background-color: ${attributes.barEmptyHoverColor || attributes.barEmptyColor};
			}
			.wpmozo-bna-progress-bar-layout-bar .wpmozo-bna-progress-bar-inner {
				background-color: ${attributes.barFilledColor};
				${'vertical' === attributes.barDirection ? `align-items: ${attributes.percentAlign === 'left' ? 'flex-start' : (attributes.percentAlign === 'right' ? 'flex-end' : 'center')};` : `justify-content: ${attributes.percentAlign === 'left' ? 'flex-start' : (attributes.percentAlign === 'right' ? 'flex-end' : 'center')};`}
			}
			.wpmozo-bna-progress-bar-layout-bar:hover .wpmozo-bna-progress-bar-inner {
				background-color: ${attributes.barFilledHoverColor || attributes.barFilledColor};
			}
		`;

        if ('vertical' === attributes.barDirection) {
            styles += `
				.wpmozo-bna-progress-bar-wrapper[data-bar_direction="vertical"] {
					height: ${attributes.barHeight}px !important;
				}
			`;
        }
    } else {
        styles += `
			.wpmozo-bna-progress-bar-wrapper {
				width: ${attributes.circleSize}px !important;
			}
			.wpmozo-bna-progress-bar-inner svg .wpmozo-bna-circle-bg {
				fill: ${attributes.circleFillColor};
				stroke: ${attributes.barEmptyColor};
			}
			.wpmozo-bna-progress-bar-inner:hover svg .wpmozo-bna-circle-bg {
				fill: ${attributes.circleFillHoverColor || attributes.circleFillColor};
				stroke: ${attributes.barEmptyHoverColor || attributes.barEmptyColor};
			}
			.wpmozo-bna-progress-bar-inner svg .wpmozo-bna-circle-fg {
				stroke: ${attributes.barFilledColor};
			}
			.wpmozo-bna-progress-bar-inner:hover svg .wpmozo-bna-circle-fg {
				stroke: ${attributes.barFilledHoverColor || attributes.barFilledColor};
			}
		`;
    }

    styles += `}`;

    return styles;
};

export default generateDynamicStyle;
