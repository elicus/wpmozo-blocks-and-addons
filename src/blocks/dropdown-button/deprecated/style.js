import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'button',
		'buttonHover',
		'submenu',
		'linkText',
		'linkTextHover',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;

	//alignment
	styles +=`.wpmozo_dropdown_button_wrap{
		text-align:${attributes.buttonAlign};
	}`;

	// Dropdown button.
	styles += `.wpmozo_dropdown_button_wrap .wpmozo_dropdown_button{
		${attributes.buttonBGGradient ? `background:`+ attributes.buttonBGGradient + `;` : ''}
		${attributes.buttonBackground ? `background:`+ attributes.buttonBackground + `;` : ''}
		${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
		${convertedStyle.button}
	}`;
	styles += `.wpmozo_dropdown_button_wrap .wpmozo_dropdown_button:hover{
		${attributes.buttonHoverBGGradient ? `background:`+ attributes.buttonHoverBGGradient + `;` : ''}
		${attributes.buttonHoverBackground ? `background:`+ attributes.buttonHoverBackground + `;` : ''}
		${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
		${convertedStyle.buttonHover}
	}`;

	// Submenu.
	styles += `.wpmozo_dropdown_menu_items{
		${attributes.submenuMinwidth ? `min-width:`+ attributes.submenuMinwidth + `px !important;` : ''}
		${attributes.submenuBGGradient ? `background:`+ attributes.submenuBGGradient + `;` : ''}
		${attributes.submenuBackground ? `background:`+ attributes.submenuBackground + `;` : ''}
		${convertedStyle.submenu}
	}`;

	// Submenu item.
	styles += `.wpmozo_dropdown_button_item a{
		${attributes.linkTextColor ? `color:`+ attributes.linkTextColor + `;` : ''}
		${attributes.linkTextBackground ? `background:`+ attributes.linkTextBackground + `;` : ''}
		${convertedStyle.linkText}
	}`;
	// Submenu item Hover.
	styles += `.wpmozo_dropdown_button_item a:hover{
		${attributes.linkTextHoverColor ? `color:`+ attributes.linkTextHoverColor + `;` : ''}
		${attributes.linkTextHoverBackground ? `background:`+ attributes.linkTextHoverBackground + `;` : ''}
		${convertedStyle.linkTextHover}
	}`;

    styles += `}`;
	return styles;
}

export default generateDynamicStyle;