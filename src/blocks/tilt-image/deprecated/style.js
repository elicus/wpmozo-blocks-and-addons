import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {
	const toConvertStyles = [
		'title',
		'description',
		'content',
		'button',
		'buttonwrap'
	];
	const convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

	styles += `.wpmozo-bna-tilt-image-inner-wrapper:before {
		background-color: ${attributes.overlayColor};
	}
	.wpmozo-bna-tilt-icon {
		text-align: ${attributes.iconAlign};
	}
	.wpmozo-bna-tilt-icon i {
		color: ${attributes.iconColor};
		font-size: ${attributes.iconFontSize};
	}
	.wpmozo-bna-tilt-content-wrapper {
		${convertedStyle.content}
	}
	.wpmozo-bna-tilt-title {
		color: ${attributes.titleColor};
		text-align: ${attributes.titleAlign};
		${convertedStyle.title}
	}
	.wpmozo-bna-tilt-desc {
		color: ${attributes.descriptionColor};
		text-align: ${attributes.descriptionAlign};
		${convertedStyle.description}
	}
	.wpmozo-bna-tilt-image-button {
		color: ${attributes.buttonTextColor};
		background-color: ${attributes.buttonBackgroundColor};
		${convertedStyle.button}
	}
	.wpmozo-bna-tilt-image-button-wrapper {
		${convertedStyle.buttonwrap}
	}`;

	if ( attributes.use3dEffect ) {
		styles += `.wpmozo-bna-tilt-image-wrapper {
			transform-style: preserve-3d;
		}
		.wpmozo-bna-tilt-image-inner-wrapper {
			transform-style: preserve-3d;
		}
		.wpmozo-bna-tilt-content-wrapper {
			transform: translateZ(${attributes.tilt3dValue}px);
		}`;
	}
	if ( ! attributes.tiltMobile ) {
		styles += `.wpmozo-bna-tilt-image .wpmozo-bna-tilt-image-inner-wrapper {
			transform: unset !important;
		}`;
	}

	styles += `}`;
	return styles;
};

export default generateDynamicStyle;