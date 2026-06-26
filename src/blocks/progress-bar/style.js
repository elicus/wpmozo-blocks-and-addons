import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId}) => {

    const {iconFontSize, separatorColor} = attributes,
        toConvertStyles = [
            'title',
            'percentage',
            'bar',
        ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    let styles = `#block-${attributes.ID}{`;

    styles += `
		.wpmozo-bna-progress-bar-title {
			color : ${attributes.titleColor};
			text-align: ${attributes.titleAlign};
			${convertedStyle.title}
		}
		.wpmozo-bna-progress-bar-percent {
			color : ${attributes.percentageColor};
			text-align : ${attributes.percentageAlign};
			${convertedStyle.percentage}
		}
		.wpmozo-bna-progress-bar .layout1 .wpmozo-bna-progress-bar-bar-wrapper, .wpmozo-bna-progress-bar .wpmozo-bna-progress-bar-chunks {
			${convertedStyle.bar}
		}
	`;

    if (true === attributes.stripeAnimation) {
        styles += `
			.wpmozo-bna-progress-bar-animated-striped-bar:before {
				animation-duration: ${attributes.stripeAnimationSpeed}s !important;
				animation-name: wpmozo-animated-stripe;
			}
		`;
    }

    if ('classic' === attributes.filledBackgroundType) {
        styles += `
			.wpmozo-bna-progress-bar-filled-bar, .wpmozo-bna-progress-bar-filled-chunks:before {
				background-color: ${attributes.filledBackgroundColor};
			}
		`;
    }

    if ('gradient' === attributes.filledBackgroundType) {
        styles += `
			.wpmozo-bna-progress-bar-filled-bar, .wpmozo-bna-progress-bar-filled-chunks:before {
				background-image: ${attributes.filledBackgroundGradient};
			}
		`;
    }

    if ('classic' === attributes.backgroundType) {
        styles += `
			.wpmozo-bna-progress-bar .wpmozo-bna-progress-bar-bar, .wpmozo-bna-progress-bar .wpmozo-bna-progress-bar-chunks.wpmozo-bna-progress-bar-empty-chunks {
				background-color: ${attributes.backgroundColor};
			}
		`;
    }

    if ('gradient' === attributes.backgroundType) {
        styles += `
			.wpmozo-bna-progress-bar .wpmozo-bna-progress-bar-bar, .wpmozo-bna-progress-bar .wpmozo-bna-progress-bar-chunks.wpmozo-bna-progress-bar-empty-chunks {
				background-image: ${attributes.backgroundGradient};
			}
		`;
    }

    if (attributes.useCustomChunksSize) {
        styles += `
			.wpmozo-bna-progress-bar-bar-wrapper .wpmozo-bna-progress-bar-chunks {
				max-width: ${attributes.useChunksWidth};
				height: ${attributes.useChunksHeight};
			}
		`;
    }

    styles += `}`;

    return styles;
};

export default generateDynamicStyle;
