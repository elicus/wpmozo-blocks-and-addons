import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {

	const toConvertStyles = [
		'image'
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

	styles += `.wpmozo-bna-image-hover-effect-inner{ ${convertedStyle.image} }`;
	
	styles += `}`;
	return styles;
};

export default generateDynamicStyle;
