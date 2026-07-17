import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId, isEdit}) => {
	const toConvertStyles = [
		'item'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);
	let alignment = (attributes.alighment) ?? 'center';
	alignment = ('left' === alignment) ? 'flex-start' : (('right' === alignment) ? 'flex-end' : alignment);

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		alignment 
		? `.wpmozo-image-stack-wrap{justify-content: ${alignment};}` : ''
	);

	normalcss.push(
		( attributes.itemBorderWidth || attributes.itemBorderType || attributes.borderColor || attributes.itemBorderRadius || convertedStyle.item )
		? `.wpmozo-image-stack-item{
				${attributes.itemBorderWidth || attributes.itemBorderType || attributes.borderColor ? `border: ${attributes.itemBorderWidth}px ${attributes.itemBorderType} ${attributes.borderColor};` : ''}
				${attributes.itemBorderRadius ? `border-radius: ${attributes.itemBorderRadius}%;` : ''}
				${convertedStyle.item || ''}
			}`
		: ''
	);

	normalcss.push(`
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
	`);

	if (attributes.showTooltip) {
		cssExtras.push(`.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}'] {
				display: block !important;
			}
			.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}']:before {
				content: "" !important;
			}`
		);
		cssExtras.push(
			(attributes.tooltipColor || attributes.tooltipBackgroundColor) 
			? `.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}']{
					${attributes.titleColor ? `background-color: ${attributes.tooltipBackgroundColor} !important;` : ''}
					${attributes.titleAlign ? `color: ${attributes.tooltipColor} !important;` : ''}
				}`
			: ''
		);
	} else {

		cssExtras.push(`
			.tippy-box[data-theme='wpmozo-tippy-block-${attributes.ID}'] {
				display: none !important;
			}`
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