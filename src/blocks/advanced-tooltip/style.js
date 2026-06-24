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

    let styles = `#block-${attributes.ID}{`;

    styles += `
		.wpmozo-bna-button-wrap {
			text-align : ${attributes.buttonAlign};
		}
	`;

	//Button
	if('button' === attributes.trigerElement){
		styles +=`
			.wpmozo-bna-button{
				color:${attributes.buttonColor};
				background-color:${attributes.buttonBackground};
				${convertedStyle.button}
			}
			.wpmozo-bna-button:hover, &.is_hover .wpmozo-bna-button{
				color:${attributes.buttonHoverColor};
				${convertedStyle.buttonHover}
				background-color:${attributes.buttonHoverBackground};
			}

		`;
	}

	//Image
	if('image' === attributes.trigerElement){
		styles +=`
			.wpmozo_tooltip_trigger_image{
				cursor:pointer;
				width:${attributes.triggerImageWidth}%;
			}
		`
	}

	//Icon
	if('icon' === attributes.trigerElement){
		styles +=`
			.trigger_type_icon{
				text-align:${attributes.triggerIconAlign};
			}
			.wpmozo_tooltip_trigger_icon{
				cursor:pointer;
				color:${attributes.triggerIconColor};
				font-size:${attributes.triggerIconSize}px;
				transition:all 300ms;
			}
			.wpmozo_tooltip_trigger_icon:hover, &.is_hover .wpmozo_tooltip_trigger_icon{
				cursor:pointer;
				color:${attributes.triggerIconHoverColor};
				font-size:${attributes.triggerIconSizeHover}px;
			}
		`
	}

	//Text
	if('text' === attributes.trigerElement){
		styles +=`
			.trigger_type_text{
				text-align:${attributes.TriggerTextAlign};
				color:${attributes.TriggerTextColor};
				transition:all 300ms;
				${convertedStyle.TriggerText}
			}
			.trigger_type_text:hover, &.is_hover .trigger_type_text{
				color:${attributes.triggerTextHoverColor};
				${convertedStyle.triggerTextHover}
			}
		`
	}
	styles += `}`;

	//Tooltip
	if(attributes.tooltipBackgroundColor){
		styles += `
			.tippy-box[data-theme='wpmozo-tippy-adt-block-${attributes.ID}']{
				background-color:${attributes.tooltipBackgroundColor};
			}
		`;
	}

	styles +=`
			.tippy-box[data-theme='wpmozo-tippy-adt-block-${attributes.ID}']{
				display:block !important;
				${convertedStyle.tooltip}
			}
	`;
	styles +=`
			.wpmozo_advanced_tooltip_content_wrap{
				display:none;
			}
	`;



    return styles;
};

export default generateDynamicStyle;
