import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId}) => {
	const toConvertStyles = [
		'item'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${attributes.ID}{`;

	let alignment = ( attributes.alighment ) ?? 'center';
		alignment = ( 'left' === alignment ) ? 'flex-start' : ( ( 'right' === alignment ) ? 'flex-end' : alignment );
	styles += `.wpmozo-image-stack-wrap{`;
		styles += `justify-content: ${alignment};`;
	styles += `}`;

	if ( attributes.itemBorderWidth > 0 ) {
		styles += `.wpmozo-image-stack-item{
			border: ${attributes.itemBorderWidth}px ${attributes.itemBorderType} ${attributes.borderColor};
			border-radius: ${attributes.itemBorderRadius}%;
			${convertedStyle.item}
		}`;
	}
	styles += `	
		.wpmozo-image-stack-item .stack-item-type-icon{
			width: ${attributes.stackItemSize}px;
			height: ${attributes.stackItemSize}px;
			line-height: ${attributes.stackItemSize}px !important;
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
			font-size: ${attributes.iconSize}px !important;
			color: ${attributes.iconColor} !important;
		}
		.wpmozo-stack-item-img{
			width: ${attributes.stackItemSize}px !important;
			height: ${attributes.stackItemSize}px !important;
		}
	}
	${ true === attributes.showTooltip ?  `
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
	}`;

	return styles;
};

export default generateDynamicStyle;
