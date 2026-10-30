import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'block',
		'blockHover',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	    hovercss  = [];
	const isEditor = (selector) => { return isEdit ? `,&.is_hover ${selector}` : '' };

	normalcss.push(
		`#block-${attributes.ID} {
			transition: all 300ms ease;
			${ attributes.buttonAlign ? `text-align: ${attributes.buttonAlign};` : '' }
			${ attributes.blockBGGradient ? `background: ${attributes.blockBGGradient};` : '' }
			${ attributes.blockBackground ? `background: ${attributes.blockBackground};` : '' }
			${ convertedStyle.block || '' }
		}`
	);

	hovercss.push(
		(attributes.blockHoverBackground || attributes.blockHoverBGGradient || convertedStyle.blockHover) 
		? `#block-${attributes.ID}:hover${isEditor('#block-' + attributes.ID)} {
				${ attributes.blockHoverBGGradient ? `background: ${attributes.blockHoverBGGradient};` : '' }
				${ attributes.blockHoverBackground ? `background: ${attributes.blockHoverBackground};` : '' }
				${ convertedStyle.blockHover || '' }
			}`
		: ''
	);

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	let styles = hasStyles ? `${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}` : '';

	styles = styles.replace(/\s+/g, ' ')
		.replace(/\s*{\s*/g, '{')
		.replace(/\s*}\s*/g, '}')
		.replace(/\s*:\s*/g, ':')
		.replace(/\s*;\s*/g, ';')
		.replace(/\s*,\s*/g, ',')    
		.trim();

	return styles;
};

export default generateDynamicStyle;
