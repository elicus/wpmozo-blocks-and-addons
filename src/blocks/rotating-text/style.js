import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, isEdit}) => {

	const toConvertStyles = [
		'wrapper',
		'text',
		'element'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	// Determine text rotation direction class
	let textRotation;
	if (attributes.textRotation === 'clockwise') {
		textRotation = 'wpmozo-bna-text-rotation';
	} else {
		textRotation = 'wpmozo-bna-text-rotation-reverse';
	}

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	
	normalcss.push(
		( attributes.wrapperBackground || attributes.circleSize || attributes.rotatingAlign || convertedStyle.wrapper )
		? `.wpmozo-bna-rotating-text-wrap{
				${attributes.wrapperBackground ? `background: ${attributes.wrapperBackground};` : ''}
				${attributes.circleSize ? `width: ${attributes.circleSize}; height: ${attributes.circleSize};` : ''}
				${attributes.rotatingAlign ? `justify-self: ${attributes.rotatingAlign};` : ''}
				${convertedStyle.wrapper || ''}
		  }`
		: ''
	);
	
	normalcss.push(
		( textRotation && attributes.circleAnimationSpeed )
		? `.wpmozo-bna-rotating-text-inner{
			animation: ${textRotation} ${attributes.circleAnimationSpeed}ms linear infinite !important;
		}`
		: ''
	);

	normalcss.push(
		( attributes.textColor || convertedStyle.text )
		? `.wpmozo-bna-rotating-text-inner span{
				${attributes.textColor ? `color: ${attributes.textColor};` : ''}
				${convertedStyle.text || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.elementBackground || attributes.elementWrapperSize || convertedStyle.element )
		? `.wpmozo-bna-rotating-text-icon-wrapper{
				${attributes.elementBackground ? `background: ${attributes.elementBackground};` : ''}
				${attributes.elementWrapperSize ? `width: ${attributes.elementWrapperSize}; height: ${attributes.elementWrapperSize};` : ''}
				${convertedStyle.element || ''}
		  }`
		: ''
	);
	if ( ! attributes.useImage ) {
		normalcss.push(
			( attributes.iconSize || attributes.elementColor )
			? `.icon-wrapper i{
				${attributes.iconSize ? `font-size: ${attributes.iconSize} !important;` : ''}
				${attributes.elementColor ? `color: ${attributes.elementColor} !important;` : ''}
		  	}`
			: ''
		);
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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