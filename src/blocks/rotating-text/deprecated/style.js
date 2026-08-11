import {convertInlineStyleStr} from '../../../common/utils.js';
const generateDynamicStyle = ({attributes}) => {

	const toConvertStyles = [
		'wrapper',
		'text',
		'element'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	// Determine text rotation direction class
	let textRotation;
	if (attributes.textRotation === 'clockwise') {
		textRotation = 'wpmozo-bna-text-rotation';
	} else {
		textRotation = 'wpmozo-bna-text-rotation-reverse';
	}

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.wpmozo-bna-rotating-text-wrap{
			background: ${attributes.wrapperBackground};
			width: ${attributes.circleSize};
			height: ${attributes.circleSize};
			justify-self: ${attributes.rotatingAlign};
			${convertedStyle.wrapper}
		}
		.wpmozo-bna-rotating-text-inner{
			animation: ${textRotation} ${attributes.circleAnimationSpeed}ms linear infinite !important;
		}
		.wpmozo-bna-rotating-text-inner span{
			color: ${attributes.textColor};
			${convertedStyle.text}
		}
		.wpmozo-bna-rotating-text-icon-wrapper{
			background: ${attributes.elementBackground};
			width: ${attributes.elementWrapperSize};
			height: ${attributes.elementWrapperSize};
			${convertedStyle.element}
		}
	`;

	if ( ! attributes.useImage ) {
		styles += `
			.icon-wrapper i{
				font-size: ${attributes.iconSize} !important;
				color: ${attributes.elementColor} !important;
			}
		`;
	}

	styles += `}`;
	return styles;
};

export default generateDynamicStyle;