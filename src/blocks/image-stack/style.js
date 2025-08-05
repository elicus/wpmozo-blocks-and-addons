import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId}) => {

	const toConvertStyles = [
		'iconDimensions'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles =
		`#block-${attributes.ID}{`;
	styles += `
		.wpmozo-image-stack-item,
		.wpmozo-image-stack-item .stack-item-type-icon{
			width:${attributes.stackItemSize}px;
			height:${attributes.stackItemSize}px;
		}
		.wpmozo-image-stack-inner .wpmozo-image-stack-item:not(:first-child){
			margin-left:-${attributes.stackItemShrink}px;
			transition: all 300ms;
		}
		.wpmozo-image-stack-inner .wpmozo-image-stack-item:not(:last-child){
			margin-right:${attributes.stackItemSpacing}px;
			transition: all 300ms;
		}
		.wpmozo-stack-item-wrapper i {
			color: ${attributes.iconColor} !important;
			${convertedStyle.iconDimensions}

		}
		.wpmozo-stack-item-img{
			width:${attributes.imageSize}px !important;
			height:${attributes.imageSize}px !important;
			border:${attributes.imageBorderWidth}px ${attributes.imageBorderType} ${attributes.borderColor};
			border-radius: ${attributes.imageBorderRadius}%;
		}
	}
	${true === attributes.showTooltip ?  `
		.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}']{
			display:block !important;
		}
		.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}']:before {
			content: "" !important;
		}` : ""
	}
	.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}']{
			background-color: ${attributes.tooltipBackgroundColor} !important;
    		color: ${attributes.tooltipColor} !important;
	}
	`;
	return styles;
};

export default generateDynamicStyle;
