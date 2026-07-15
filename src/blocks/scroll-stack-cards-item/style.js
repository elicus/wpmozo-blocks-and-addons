import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, isEdit }) => {

	const toConvertStyles = [
		"title",
		"description",
		"button",
		"icon",
		"card"
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	parentAtts = attributes.parentAtts;

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push( `${ attributes.cardBackground ? `background: ${attributes.cardBackground};` : ''} ${convertedStyle.card || ''}`);

	normalcss.push(
		( attributes.titleColor || attributes.titleAlign || convertedStyle.title ) 
		? `.wpmozo-bna-scroll-stack-cards-title {
				${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
				${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
				${convertedStyle.title || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.descriptionColor || attributes.descriptionAlign || convertedStyle.description ) 
		? `.wpmozo-bna-scroll-stack-cards-content {
				${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
				${attributes.descriptionAlign ? `text-align: ${attributes.descriptionAlign};` : ''}
				${convertedStyle.description || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.iconColor || attributes.iconFontSize ) 
		? `.wpmozo-bna-scroll-stack-cards-icon-wrapper .icon-wrapper i {
				${attributes.iconColor ? `color: ${attributes.iconColor};` : ''}
				${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize};` : ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.iconAlign || convertedStyle.icon ) 
		? `.wpmozo-bna-scroll-stack-cards-icon-wrapper {
				${attributes.iconAlign ? `text-align: ${attributes.iconAlign};` : ''}
				${convertedStyle.icon || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.buttonTextColor || attributes.buttonBackgroundColor || convertedStyle.button ) 
		? `.wpmozo-bna-button {
				${attributes.buttonTextColor ? `color: ${attributes.buttonTextColor};` : ''}
				${attributes.buttonBackgroundColor ? `background-color: ${attributes.buttonBackgroundColor};` : ''}
				${convertedStyle.button || ''}
			}`
		: ''
	);

	normalcss.push(attributes.buttonAlignment ? `.wpmozo-bna-button-wrap{ text-align: ${attributes.buttonAlignment}; }` : '');
	normalcss.push(attributes.buttonIconColor ? `.wpmozo-bna-button i{ color: ${attributes.buttonIconColor}; }` : '');

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `.wp-block-wpmozo-scroll-stack-cards #block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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