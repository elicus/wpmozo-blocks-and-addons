import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes }) => {

	const toConvertStyles = [
		"title",
		"description",
		"button"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	parentAtts = attributes.parentAtts;


	let styles = `#block-${attributes.ID}.wp-block-wpmozo-scroll-stack-cards-item{`;


	styles += `}`;


	return styles;
};

export default generateDynamicStyle;