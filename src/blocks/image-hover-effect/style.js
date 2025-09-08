import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId}) => {

	const toConvertStyles = [
		'image'
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

	styles += `.wpmozo-bna-image-hover-effect-inner{ ${convertedStyle.image} }`;

	styles += `}`;

	if ( attributes.forceFullwidth ) {
		styles += `#block-${attributes.ID}{width: 100%; max-width: 100% !important;}.wpmozo-bna-image-hover-effect-inner, .wpmozo-bna-image-hover-effect-inner img{width: 100%;}`;
	}

	return styles;
};

export default generateDynamicStyle;
