import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'button',
		'buttonHover',
		'submenu',
		'submenuHover',
		'linkText',
		'linkTextHover',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let normalcss = [],
	    hovercss  = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};


    normalcss.push(
		attributes.buttonAlign 
        ? `.wpmozo_dropdown_button_wrap{text-align:${attributes.buttonAlign};}` 
		: ''
	);

	// Dropdown button.
	normalcss.push(
		(attributes.buttonBGGradient || attributes.buttonBackground || attributes.buttonColor  || convertedStyle.button) 
		? `.wpmozo_dropdown_button_wrap .wpmozo_dropdown_button{
				${attributes.buttonBGGradient ? `background:`+ attributes.buttonBGGradient + `;` : ''}
				${attributes.buttonBackground ? `background:`+ attributes.buttonBackground + `;` : ''}
				${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
				${convertedStyle.button || ''}
				transition: all 300ms;
			}`
		: ''
	);
	hovercss.push(
		(attributes.buttonHoverBGGradient || attributes.buttonHoverBackground || attributes.buttonHoverColor  || convertedStyle.buttonHover) 
		? `.wpmozo_dropdown_button_wrap .wpmozo_dropdown_button:hover${isEditor('.wpmozo_dropdown_button_wrap .wpmozo_dropdown_button')}{
				${attributes.buttonHoverBGGradient ? `background:`+ attributes.buttonHoverBGGradient + `;` : ''}
				${attributes.buttonHoverBackground ? `background:`+ attributes.buttonHoverBackground + `;` : ''}
				${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
				${convertedStyle.buttonHover || ''}
			}`
		: ''
	);

	// Submenu.
	normalcss.push(
		(attributes.submenuMinwidth || attributes.submenuBGGradient || attributes.submenuBackground  || convertedStyle.submenu) 
		? `.wpmozo_dropdown_menu_items{
				${attributes.submenuMinwidth ? `min-width:`+ attributes.submenuMinwidth + `px !important;` : ''}
				${attributes.submenuBGGradient ? `background:`+ attributes.submenuBGGradient + `;` : ''}
				${attributes.submenuBackground ? `background:`+ attributes.submenuBackground + `;` : ''}
				${convertedStyle.submenu || ''}
				transition: all 300ms;
			}`
		: ''
	);
	hovercss.push(
		(attributes.submenuHoverBGGradient || attributes.submenuHoverBackground || convertedStyle.submenuHover) 
		? `.wpmozo_dropdown_menu_items:hover${isEditor('.wpmozo_dropdown_menu_items')}{
				${attributes.submenuHoverBGGradient ? `background:`+ attributes.submenuHoverBGGradient + `;` : ''}
				${attributes.submenuHoverBackground ? `background:`+ attributes.submenuHoverBackground + `;` : ''}
				${convertedStyle.submenuHover || ''}
			}`
		: ''
	);

	// Submenu item.
	normalcss.push(
		(attributes.linkTextColor || attributes.linkTextBackground || convertedStyle.linkText) 
		? `.wpmozo_dropdown_button_item a{
				${attributes.linkTextColor ? `color:`+ attributes.linkTextColor + `;` : ''}
				${attributes.linkTextBackground ? `background:`+ attributes.linkTextBackground + `;` : ''}
				${convertedStyle.linkText || ''}
				transition: all 300ms;
			}`
		: ''
	);
	hovercss.push(
		(attributes.linkTextHoverColor || attributes.linkTextHoverBackground || convertedStyle.linkTextHover) 
		? `.wpmozo_dropdown_button_item a:hover${isEditor('.wpmozo_dropdown_button_item a')}{
				${attributes.linkTextHoverColor ? `color:`+ attributes.linkTextHoverColor + `;` : ''}
				${attributes.linkTextHoverBackground ? `background:`+ attributes.linkTextHoverBackground + `;` : ''}
				${convertedStyle.linkTextHover || ''}
			}`
		: ''
	);

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
}

export default generateDynamicStyle;