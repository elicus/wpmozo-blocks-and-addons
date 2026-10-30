import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {
	const { iconFontSize, separatorColor } = attributes,
		parent = '#block-' + clientId,
		toConvertStyles = [];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);
	let styles = `#block-${clientId}{`;

	styles += `
		.wpmozo-mystery-image-anchor .wpmozo-overlay-icon{
			background:${attributes.overlayBackgroundColor}!important;
			color:${attributes.overlayIconColor}!important;
			font-size: ${attributes.overlayIconSize}px!important;
		}
		`;
	styles += `}`;

	if(true === attributes.showLightbox){
		styles += `.block-block-${clientId}_lightbox{
			background:${attributes.lightboxBackgroundColor};
		}
		.block-block-${clientId}_lightbox .mfp-close{
			color:${attributes.lightboxCloseIconColor} !important;
		}`;
	}

	return styles;
};

export default generateDynamicStyle;