import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {
	const { iconFontSize, separatorColor } = attributes,
		parent = '#block-' + clientId,
		toConvertStyles = [];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let styles = `#block-${attributes.ID}{`;

	const numberOfColumns = attributes.numberOfColumns;

	let finalWidth= 100/numberOfColumns;
	if (attributes.customGutterSize) {
		const gutterSize = ( attributes.customGutterSize * (numberOfColumns - 1)) / numberOfColumns;
		finalWidth = `calc(${finalWidth}% - ${gutterSize}px)`;
	}


	styles += `
		.wpmozo_masonry_gallery_wrapper {
			column-count: ${numberOfColumns} !important;
			column-gap: 1rem;
			padding: 1rem;
		}
		.wpmozo_masonry_gallery_item_gutter {
			width: ${attributes.customGutterSize}px !important;
		}
		.wpmozo_masonry_gallery_item{
			width: ${finalWidth};
			margin-bottom: ${attributes.customGutterSize}px;
		}
	`;

	if (false === attributes.showCaption ) {
		styles += `.wpmozo_masonry_gallery_wrapper figcaption.wp-element-caption {display:none}`;
	}
	if (true === attributes.enableOverlay ) {
		styles += `.wpmozo_overlay.wpmozo_pb_inline_icon{background:${attributes.overlayBackgroundColor}!important;}`;
	} else {
		styles += `.wpmozo_overlay.wpmozo_pb_inline_icon{background:transparent !important;}`;
	}
	styles += `}`;

	if(true === attributes.showLightbox){
		styles += `.block-${clientId}-lightbox{
			background:${attributes.lightboxBackgroundColor};
		}
		.block-${clientId}-lightbox .mfp-arrow-left:after{
			border-right-color:${attributes.lightboxArrowColor};
		}
		.block-${clientId}-lightbox .mfp-arrow-right:after{
			border-left-color:${attributes.lightboxArrowColor};
		}
		.block-${clientId}-lightbox .mfp-close{
			color:${attributes.lightboxExitIconColor};
		}`;
	}
	return styles;
};

export default generateDynamicStyle;
