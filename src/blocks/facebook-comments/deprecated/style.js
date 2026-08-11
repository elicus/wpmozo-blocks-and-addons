import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'block'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {
		${attributes.blockBGGradient ? `background:`+ attributes.blockBGGradient + `;` : ''}
		${attributes.blockBackground ? `background:`+ attributes.blockBackground + `;` : ''}

		${ convertedStyle.block }`;

	styles += `}`;

	return styles;
}

export default generateDynamicStyle;