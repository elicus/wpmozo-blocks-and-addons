import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId}) => {

	const toConvertStyles = [
		'wrapper',
		'text',
		'element'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);
	let styles = `#block-${clientId}{`;

	styles += `
		.wpmozo-bna-rotating-text-wrap{
			background: ${attributes.wrapperBackground};
			width: ${attributes.circleSize};
			height: ${attributes.circleSize};
			${convertedStyle.wrapper}
		}
		.wpmozo-bna-rotating-text-inner{
			animation: wpmozo-bna-text-rotation ${attributes.circleAnimationSpeed}ms linear infinite !important;
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
