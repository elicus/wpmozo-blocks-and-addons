import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'image','imageContainer'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let alignment = '';
	if ('left' === attributes.imageAlignment) {
		alignment = 'margin-left: 0px !important;margin-right: auto !important;';
	} else if ('center' === attributes.imageAlignment) {
		alignment = 'margin-left: auto !important;margin-right: auto !important;';
	} else if ('right' === attributes.imageAlignment) {
		alignment = 'margin-left: auto !important;margin-right: 0px !important;';
	} else {
		alignment = '';
	}

	let styles = `#block-${attributes.ID} { ${alignment || ''}.wpmozo_split_image_portion { ${attributes.splitImg ? `background-image: url(${attributes.splitImg});` : ''}${convertedStyle.image || ''} } .wpmozo_split_image_wrapper { aspect-ratio: 1/1; ${attributes.gap ? `gap: ${attributes.gap}px;` : ''} ${convertedStyle.imageContainer || ''} }`;

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
