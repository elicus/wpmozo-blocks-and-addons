import {wpmozo_is_empty,convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {

	const {iconFontSize, separatorColor} = attributes,
		toConvertStyles = [
			'logo',
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${clientId}{`;

	styles += `
		.logo-wrap {
			background: ${attributes.logoBackground};
			${convertedStyle.logo}
		}
	`;

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
