import {convertInlineStyleStr} from "../../common/utils";

const generateDynamicStyle = ({attributes, clientId}) => {

	const toConvertStyles = [
		'image'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${attributes.ID}{`;

	// Background color
	styles += attributes.itemBackground ? `background:`+ attributes.itemBackground + `;` : ''
	styles += attributes.itemBGGradient ? `background-image:`+ attributes.itemBGGradient + `;` : ''

	styles +=`
			${convertedStyle.image}
	`;
	styles += `}`;
	return styles;
};

export default generateDynamicStyle;
