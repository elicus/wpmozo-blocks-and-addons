import {convertInlineStyleStr} from "../../common/utils";

const generateDynamicStyle = ({attributes, clientId, isEdit}) => {
	const borderPrefix = 'icon' === attributes.stackType ? 'icon' : 'image';
	const toConvertStyles = [
		borderPrefix,
		`${borderPrefix}Hover`
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let normalcss = [],
		hovercss = [],
		cssExtras = [];

	normalcss.push(
		`#block-${attributes.ID}.wpmozo-image-stack-item {
			${convertedStyle[borderPrefix] || ''}
			${attributes.itemBackground ? `background: ${attributes.itemBackground};` : ''}
			${attributes.itemBGGradient ? `background-image: ${attributes.itemBGGradient};` : ''}
			transition: border 300ms ease-in-out, border-radius 300ms ease-in-out, background 300ms ease-in-out;
		}`
	);

	hovercss.push(
		`#block-${attributes.ID}.wpmozo-image-stack-item:hover, #block-${attributes.ID}.wpmozo-image-stack-item.is_hover {
			${convertedStyle[`${borderPrefix}Hover`] || ''}
			${attributes.itemHoverBackground ? `background: ${attributes.itemHoverBackground};` : ''}
			${attributes.itemHoverBGGradient ? `background-image: ${attributes.itemHoverBGGradient};` : ''}
		}`
	);

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);

	let styles = hasStyles ? `${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}` : '';

	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
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
