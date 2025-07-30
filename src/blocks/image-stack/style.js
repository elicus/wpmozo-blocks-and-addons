import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId}) => {

	const toConvertStyles = [];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);


	let styles =
		`#block-${attributes.ID}{`;
	styles += `
		.wpmozo-image-stack-item,
		.wpmozo-image-stack-item .stack-item-type-icon{
			width:${attributes.stackItemSize}px;
			height:${attributes.stackItemSize}px;
		}
		.wpmozo-image-stack-wrap .wpmozo-image-stack-item:not(:first-child){
			margin-left:-${attributes.stackItemShrink}px;
			transition: all 300ms;
		}
		.wpmozo-image-stack-wrap .wpmozo-image-stack-item:not(:last-child){
			margin-right:${attributes.stackItemSpacing}px;
			transition: all 300ms;
		}
	}`;
	return styles;
};

export default generateDynamicStyle;
