import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {
	const toConvertStyles = [
		'global',
		'prePost',
		'animated',
		'post',
		'prePostDimensions',
		'animatedDimensions'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;
	
    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
