import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes}) => {

    const toConvertStyles = [
            'button',
			'buttonHover',
			'TriggerText',
			'triggerTextHover',
			'tooltip'
        ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    let normalcss = [],
		hovercss = [],
		cssExtras = [];
		const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	
	normalcss.push(
		attributes.buttonAlign 
			? `.wpmozo-bna-button-wrap { text-align : ${attributes.buttonAlign};}` 
			: ''
	);

	//Button
	if('button' === attributes.trigerElement){

		normalcss.push(
			(attributes.buttonColor || attributes.buttonBackground || convertedStyle.button) 
			? `.wpmozo-bna-button{ 
					${attributes.buttonColor ? `color:${attributes.buttonColor};` : ''}
					${attributes.buttonBackground ? `background-color:${attributes.buttonBackground};` : ''}
					${convertedStyle.button || ''}
				}`
			: ''
		);

		hovercss.push(
			(attributes.buttonHoverColor || attributes.buttonHoverBackground || convertedStyle.buttonHover) 
			? `.wpmozo-bna-button:hover${isEditor('.wpmozo-bna-button')}{ 
					${attributes.buttonHoverColor ? `color:${attributes.buttonHoverColor};` : ''}
					${attributes.buttonHoverBackground ? `background-color:${attributes.buttonHoverBackground};` : ''} 
					${convertedStyle.buttonHover || ''}  
				}` 
			: '' 
		);
	}

	//Image
	if('image' === attributes.trigerElement){

		normalcss.push( 
			attributes.triggerImageWidth 
			? `.wpmozo_tooltip_trigger_image{cursor:pointer; width:${attributes.triggerImageWidth}%;}` 
			: '' 
		);
	}

	//Icon
	if('icon' === attributes.trigerElement){
		
		normalcss.push( 
			attributes.triggerIconAlign ? 
			`.trigger_type_icon{text-align:${attributes.triggerIconAlign};}` 
			: ''
		);
		
		normalcss.push(
			(attributes.triggerIconColor || attributes.triggerIconSize) 
			? `.wpmozo_tooltip_trigger_icon{
				cursor:pointer;
					${attributes.triggerIconColor ? `color:${attributes.triggerIconColor};` : ''} 
					${attributes.triggerIconSize ? `font-size:${attributes.triggerIconSize}px;` : ''} 
					transition:all 300ms;
				}` 
			: `.wpmozo_tooltip_trigger_icon{
					cursor:pointer;
					transition:all 300ms;
				}`
		);
		hovercss.push(
			(attributes.triggerIconHoverColor || attributes.triggerIconSizeHover) 
			? `.wpmozo_tooltip_trigger_icon:hover${isEditor('.wpmozo_tooltip_trigger_icon')}{
					${attributes.triggerIconHoverColor ? `color:${attributes.triggerIconHoverColor};` : ''} 
					${attributes.triggerIconSizeHover ? `font-size:${attributes.triggerIconSizeHover}px;` : ''} 
				}` 
			: ''
		);
	}

	//Text
	if('text' === attributes.trigerElement){
		normalcss.push(
			(attributes.TriggerTextAlign || attributes.TriggerTextColor || convertedStyle.TriggerText) 
			? `.trigger_type_text{
					${attributes.TriggerTextAlign ?  `text-align:${attributes.TriggerTextAlign};` : ''} 
					${attributes.TriggerTextColor ? `color:${attributes.TriggerTextColor};` : ''}
					${convertedStyle.TriggerText || ''}  
					transition:all 300ms;
				}` 
			: `.trigger_type_text{
					transition:all 300ms;
				}`
		);
		hovercss.push(
			(attributes.triggerTextHoverColor || convertedStyle.triggerTextHover) 
			? `.trigger_type_text:hover${isEditor('.trigger_type_text')}{
					${attributes.triggerTextHoverColor ? `color:${attributes.triggerTextHoverColor};` : ''}
					${convertedStyle.triggerTextHover || ''}  
					transition:all 300ms;
				}` 
			: ''
		);
	}

	//Tooltip
	if(attributes.tooltipBackgroundColor){
		cssExtras.push(
			(attributes.tooltipBackgroundColor) 
			? `.tippy-box[data-theme='wpmozo-tippy-adt-block-${attributes.ID}']{
				background-color:${attributes.tooltipBackgroundColor};
			}` 
			: ''
		);
	}
	cssExtras.push(
		(convertedStyle.tooltip) 
		? `.tippy-box[data-theme='wpmozo-tippy-adt-block-${attributes.ID}']{
				display:block !important;
				${convertedStyle.tooltip}
		}` 
		: ''
	);
	cssExtras.push( `.wpmozo_advanced_tooltip_content_wrap{ display:none; }` );

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
    styles += styles.replace(/\s+/g, ' ')
    .replace(/\s*{\s*/g, '{')
    .replace(/\s*}\s*/g, '}')
    .replace(/\s*:\s*/g, ':')
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*,\s*/g, ',')    
    .trim();

	return styles;
};

export default generateDynamicStyle;