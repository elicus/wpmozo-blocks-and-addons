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
		.wpmozo-bna-bar-counter-title {
			color : ${attributes.titleColor};
			text-align: ${attributes.titleAlign};
			${convertedStyle.title}
		}
		.wpmozo-bna-bar-counter-filled-bar-wrapper .wpmozo-bna-bar-counter-filled-bar.wpmozo-bna-bar-counter-animated-striped-bar:before {
			background-image : ${attributes.stripeColor};
		}
		.wpmozo-bna-bar-counter-percent {
			color : ${attributes.percentageColor};
			text-align : ${attributes.percentageAlign};
			${convertedStyle.percentage}
		}
		.wpmozo-bna-bar-counter .layout1 .wpmozo-bna-bar-counter-bar-wrapper, .wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-chunks {
			${convertedStyle.bar}
		}
	`;

    if (true === attributes.stripeAnimation) {
        styles += `
			.wpmozo-bna-bar-counter-animated-striped-bar:before {
				animation-duration: ${attributes.stripeAnimationSpeed}s !important;
				animation-name: wpmozo-animated-stripe;
			}
		`;
    }

    if ('classic' === attributes.filledBackgroundType) {
        styles += `
			.wpmozo-bna-bar-counter-filled-bar, .wpmozo-bna-bar-counter-filled-chunks:before {
				background-color: ${attributes.filledBackgroundColor};
			}
		`;
    }

    if ('gradient' === attributes.filledBackgroundType) {
        styles += `
			.wpmozo-bna-bar-counter-filled-bar, .wpmozo-bna-bar-counter-filled-chunks:before {
				background-image: ${attributes.filledBackgroundGradient};
			}
		`;
    }

    if ('classic' === attributes.backgroundType) {
        styles += `
			.wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-bar, .wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-chunks.wpmozo-bna-bar-counter-empty-chunks {
				background-color: ${attributes.backgroundColor};
			}
		`;
    }

    if ('gradient' === attributes.backgroundType) {
        styles += `
			.wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-bar, .wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-chunks.wpmozo-bna-bar-counter-empty-chunks {
				background-image: ${attributes.backgroundGradient};
			}
		`;
    }

    if (attributes.useCustomChunksSize) {
        styles += `
			.wpmozo-bna-bar-counter-bar-wrapper .wpmozo-bna-bar-counter-chunks {
				max-width: ${attributes.useChunksWidth};
				height: ${attributes.useChunksHeight};
			}
		`;
    }

    styles += `}`;

    return styles;
};

export default generateDynamicStyle;