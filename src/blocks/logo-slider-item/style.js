import {wpmozo_is_empty,convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {

	const {iconFontSize, separatorColor} = attributes,
		toConvertStyles = [
			'logo',
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = (attributes.logoBackground || convertedStyle.logo) ? `
	#block-${clientId}{
		.logo-wrap {
			${attributes.logoBackground ? `background: ${attributes.logoBackground}` : ''};
			${convertedStyle.logo ?? ''}
		}
	}` : '';

	return styles;
};

export default generateDynamicStyle;
