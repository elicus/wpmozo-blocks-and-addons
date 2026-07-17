import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {
	const { iconFontSize, separatorColor } = attributes,
		parent = '#block-' + clientId,
		toConvertStyles = [];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	const numberOfColumns = attributes.numberOfColumns;

	let finalWidth= 100/numberOfColumns;
	if (attributes.customGutterSize) {
		const gutterSize = ( attributes.customGutterSize * (numberOfColumns - 1)) / numberOfColumns;
		finalWidth = `calc(${finalWidth}% - ${gutterSize}px)`;
	}
	
	
	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	
	normalcss.push( attributes.customGutterSize ? `.wpmozo_masonry_gallery_item_gutter { width: ${attributes.customGutterSize}px !important; }` : '' );

	normalcss.push(
		( finalWidth || attributes.customGutterSize )
			? `.wpmozo_masonry_gallery_item{
					${finalWidth ? `width: ${finalWidth};` : ''}
					${attributes.customGutterSize ? `margin-bottom: ${attributes.customGutterSize}px;` : ''}
				}`
			: ''
	);

	normalcss.push( false === attributes.showCaption ? `.wpmozo_masonry_gallery_wrapper figcaption.wp-element-caption {display:none}` : '' );

	if (true === attributes.enableOverlay ) {
		normalcss.push(
			( attributes.overlayBackgroundColor || attributes.overlayIconColor )
				? `.wpmozo_overlay.wpmozo_pb_inline_icon{
						${attributes.overlayBackgroundColor ? `background:${attributes.overlayBackgroundColor}!important;` : ''}
						${attributes.overlayIconColor ? `color:${attributes.overlayIconColor}!important;` : ''}
					}`
				: ''
		);
	} else {
		normalcss.push(`.wpmozo_overlay.wpmozo_pb_inline_icon{background:transparent !important;color:transparent !important;}`);
	}
	
	normalcss.push( attributes.overlayIconSize ? `.wpmozo_overlay.wpmozo_pb_inline_icon{font-size:${attributes.overlayIconSize}px` : '' );

	if(true === attributes.showLightbox){

		cssExtras.push( attributes.lightboxBackgroundColor ? `.block-${clientId}-lightbox{ background:${attributes.lightboxBackgroundColor}; }` : '');

		cssExtras.push( attributes.lightboxExitIconColor ? `.block-${clientId}-lightbox .mfp-close{ color:${attributes.lightboxExitIconColor}; }` : '');

		cssExtras.push( attributes.lightboxArrowColor ? `
			.block-${clientId}-lightbox .mfp-arrow-left:after{ border-right-color:${attributes.lightboxArrowColor}; } 
			.block-${clientId}-lightbox .mfp-arrow-right:after{ border-left-color:${attributes.lightboxArrowColor}; }` 
			: ''
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