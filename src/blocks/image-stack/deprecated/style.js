import {convertInlineStyleStr} from '../../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId}) => {
	const toConvertStyles = [
		'item'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${attributes.ID}{`;

	let alignment = (attributes.alighment) ?? 'center';
	alignment = ('left' === alignment) ? 'flex-start' : (('right' === alignment) ? 'flex-end' : alignment);
	styles += `.wpmozo-image-stack-wrap{`;
	styles += `justify-content: ${alignment};`;
	styles += `}`;

	if (attributes.itemBorderWidth > 0) {
		styles += `.wpmozo-image-stack-item{
			border: ${attributes.itemBorderWidth}px ${attributes.itemBorderType} ${attributes.borderColor};
			border-radius: ${attributes.itemBorderRadius}%;
			${convertedStyle.item}
		}`;
	}
	// Clean and fix style string for image stack

	styles += `
		.wpmozo-image-stack-item .stack-item-type-icon {
			width: ${attributes.stackItemSize || 40}px;
			height: ${attributes.stackItemSize || 40}px;
			line-height: ${attributes.stackItemSize || 40}px !important;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.wpmozo-image-stack-inner .wpmozo-image-stack-item:not(:first-child) {
			margin-left: -${attributes.stackItemShrink || 10}px;
			transition: margin 300ms;
		}
		.wpmozo-image-stack-inner .wpmozo-image-stack-item:not(:last-child) {
			margin-right: ${attributes.stackItemSpacing || 10}px;
			transition: margin 300ms;
		}
		.wpmozo-image-stack-inner .wpmozo-image-stack-item:nth-last-child(2) {
			margin-right: 0;
		}
		.wpmozo-stack-item-wrapper i {
			font-size: ${attributes.iconSize || 18}px !important;
			color: ${attributes.iconColor || "#333"} !important;
		}
		.wpmozo-stack-item-img {
			width: ${attributes.stackItemSize || 40}px !important;
			height: ${attributes.stackItemSize || 40}px !important;
			object-fit: cover;
			display: block;
		}
	}`;

	if (attributes.showTooltip) {
		styles += `
			.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}'] {
				display: block !important;
			}
			.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}']:before {
				content: "" !important;
			}
			.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}']{
				background-color: ${attributes.tooltipBackgroundColor} !important;
				color: ${attributes.tooltipColor} !important;
			}
		`;
	} else {
		styles += `
			.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}'] {
				display: none !important;
			}
		`;
	}
	return styles;
};

export default generateDynamicStyle;