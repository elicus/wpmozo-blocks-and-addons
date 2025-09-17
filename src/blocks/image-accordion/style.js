import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

	const toConvertStyles = [
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${clientId}{`;
	styles += `}`;


	return styles;
};

export default generateDynamicStyle;