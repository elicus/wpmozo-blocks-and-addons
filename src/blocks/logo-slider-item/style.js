import {wpmozo_is_empty,convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({attributes, clientId, isEdit}) => {

	const toConvertStyles = [
			'logo',
			'logoHover'
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let normalcss = [],
	hovercss = [],
	cssExtras = [];

	const itemID = `#block-${attributes.ID || clientId}`;

	normalcss.push(
		( attributes.logoBackground || convertedStyle.logo )
		? `${itemID} .logo-wrap {
				${attributes.logoBackground ? `background: ${attributes.logoBackground};` : ''}
				${convertedStyle.logo || ''}
			}`
		: ''
	);

	if ( attributes.logoHoverBackground || convertedStyle.logoHover ) {
		hovercss.push(
			`${itemID} .logo-wrap:hover, ${itemID}.is_hover .logo-wrap {
				${attributes.logoHoverBackground ? `background: ${attributes.logoHoverBackground};` : ''}
				${convertedStyle.logoHover || ''}
			}`
		);
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `${normalcss.filter(Boolean).join('\n')}\n${hovercss.filter(Boolean).join('\n')}` : '';
	
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