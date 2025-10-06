import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes}) => {

    const toConvertStyles = [
            'button',
			'TriggerText',
			'tooltip'
        ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    let styles = `#block-${attributes.ID}{`;

    styles += `
		.wpmozo_readmore_button_wrapper {
			text-align : ${attributes.buttonAlign};
		}
	`;

	//Button
	if('button' === attributes.trigerElement && attributes.customButtonStyle){
		styles +=`
			.wpmozo_readmore_button{
				color:${attributes.buttonColor};
				background-color:${attributes.buttonBackground};
				${convertedStyle.button}
			}
			.wpmozo_readmore_button:hover{
				color:${attributes.buttonHoverColor};
				background-color:${attributes.buttonHoverBackground};
			}

		`;
	}

	//Button
	if('image' === attributes.trigerElement && attributes.customButtonStyle){
		styles +=`
			.wpmozo_tooltip_trigger_image{
				cursor:pointer;
				width:${attributes.triggerImageWidth}%;
			}
		`
	}

	//Icon
	if('icon' === attributes.trigerElement && attributes.customButtonStyle){
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
			.wpmozo_tooltip_trigger_icon:hover{
				cursor:pointer;
				color:${attributes.triggerIconHoverColor};
				font-size:${attributes.triggerIconSizeHover}px;
				transition:all 300ms;
			}
		`
	}

	//Text
	if('text' === attributes.trigerElement && attributes.customButtonStyle){
		styles +=`
			.trigger_type_text{
				text-align:${attributes.TriggerTextAlign};
				color:${attributes.TriggerTextColor};
				${convertedStyle.TriggerText}
			}
			.trigger_type_text:hover{
				color:${attributes.triggerTextHoverColor};
			}
		`
	}

	//Tooltip
	if(attributes.tooltipBackgroundColor){
		styles += `
			.tooltip-inner-blocks{
				background-color:${attributes.tooltipBackgroundColor};
				${convertedStyle.tooltip}
			}
		`;
	}

	styles +=`
			.tippy-box[data-theme='wpmozo-tippy-adt-block-${attributes.ID}']{
				display:block !important;
			}
	`;


    styles += `}`;

    return styles;
};

export default generateDynamicStyle;
