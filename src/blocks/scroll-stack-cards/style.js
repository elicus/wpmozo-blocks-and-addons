import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"description",
		"button"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;