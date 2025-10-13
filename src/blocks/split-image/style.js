import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'image','imageContainer'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

	styles +=`
		.wpmozo_split_image_portion {
			background-image: url(${attributes.splitImg});
			${convertedStyle.image}
		}
		.wpmozo_split_image_wrapper {
			aspect-ratio: 1/1;
			gap: ${attributes.gap}px;
			${convertedStyle.imageContainer}
		}
	`;

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
