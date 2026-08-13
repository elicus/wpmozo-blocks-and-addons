import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {
	const toConvertStyles = [
		'image',
		'imagehover',
		'caption',
		'captionHover'
	];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	const numberOfColumns = attributes.numberOfColumns || 3;
	let finalWidth = 100 / numberOfColumns;
	if (attributes.customGutterSize) {
		const gutterSize = ( attributes.customGutterSize * (numberOfColumns - 1)) / numberOfColumns;
		finalWidth = `calc(${finalWidth}% - ${gutterSize}px)`;
	}

	let normalcss = [],
		hovercss = [],
		cssExtras = [];

	const blockID = `#block-${attributes.ID || clientId}`;

	normalcss.push( attributes.customGutterSize ? `${blockID} .wpmozo_masonry_gallery_item_gutter { width: ${attributes.customGutterSize}px !important; }` : '' );

	normalcss.push(
		( finalWidth || attributes.customGutterSize )
			? `${blockID} .wpmozo_masonry_gallery_item {
					${finalWidth ? `width: ${finalWidth};` : ''}
					${attributes.customGutterSize ? `margin-bottom: ${attributes.customGutterSize}px;` : ''}
				}`
			: ''
	);

	normalcss.push( false === attributes.showCaption ? `${blockID} .wpmozo_masonry_gallery_wrapper figcaption.wp-element-caption { display: none; }` : '' );

	if ( convertedStyle.image ) {
		normalcss.push( `${blockID} .wpmozo_masonry_gallery_image_wrapper { ${convertedStyle.image} }` );
	}

	if ( convertedStyle.imagehover ) {
		hovercss.push( `${blockID} .wpmozo_masonry_gallery_item:hover .wpmozo_masonry_gallery_image_wrapper, ${blockID}.is_hover .wpmozo_masonry_gallery_image_wrapper { ${convertedStyle.imagehover} }` );
	}

	if ( true === attributes.enableOverlay ) {
		normalcss.push(
			( attributes.overlayBackgroundColor || attributes.overlayIconColor )
				? `${blockID} .wpmozo_overlay.wpmozo_pb_inline_icon {
						${attributes.overlayBackgroundColor ? `background: ${attributes.overlayBackgroundColor} !important;` : ''}
						${attributes.overlayIconColor ? `color: ${attributes.overlayIconColor} !important;` : ''}
					}`
				: ''
		);
	} else {
		normalcss.push(`${blockID} .wpmozo_overlay.wpmozo_pb_inline_icon { background: transparent !important; color: transparent !important; }`);
	}

	normalcss.push( attributes.overlayIconSize ? `${blockID} .wpmozo_overlay.wpmozo_pb_inline_icon { font-size: ${attributes.overlayIconSize}px; }` : '' );

	if ( attributes.captionColor || convertedStyle.caption ) {
		normalcss.push( `${blockID} figcaption.wp-element-caption { ${attributes.captionColor ? `color: ${attributes.captionColor};` : ''} ${convertedStyle.caption || ''} }` );
	}

	if ( attributes.captionHoverColor || convertedStyle.captionHover ) {
		hovercss.push( `${blockID} .wpmozo_masonry_gallery_item:hover figcaption.wp-element-caption, ${blockID}.is_hover figcaption.wp-element-caption { ${attributes.captionHoverColor ? `color: ${attributes.captionHoverColor};` : ''} ${convertedStyle.captionHover || ''} }` );
	}

	if ( true === attributes.showLightbox ) {
		normalcss.push( attributes.lightboxBackgroundColor ? `.block-${attributes.ID || clientId}-lightbox.mfp-bg, .block-${attributes.ID || clientId}-lightbox { background: ${attributes.lightboxBackgroundColor} !important; }` : '');
		normalcss.push( attributes.lightboxExitIconColor ? `.block-${attributes.ID || clientId}-lightbox .mfp-close { color: ${attributes.lightboxExitIconColor} !important; }` : '');
		normalcss.push( attributes.lightboxArrowColor ? `
			.block-${attributes.ID || clientId}-lightbox .mfp-arrow-left:after { border-right-color: ${attributes.lightboxArrowColor} !important; } 
			.block-${attributes.ID || clientId}-lightbox .mfp-arrow-right:after { border-left-color: ${attributes.lightboxArrowColor} !important; }` 
			: ''
		);

		if ( attributes.lightboxHoverBackgroundColor ) {
			hovercss.push( `.block-${attributes.ID || clientId}-lightbox.mfp-bg:hover, body:has(.block-${attributes.ID || clientId}-lightbox.mfp-wrap:hover) .block-${attributes.ID || clientId}-lightbox.mfp-bg, .block-${attributes.ID || clientId}-lightbox:hover, #block-${attributes.ID || clientId}.is_hover .block-${attributes.ID || clientId}-lightbox.mfp-bg { background: ${attributes.lightboxHoverBackgroundColor} !important; }` );
		}
		if ( attributes.lightboxHoverExitIconColor ) {
			hovercss.push( `.block-${attributes.ID || clientId}-lightbox .mfp-close:hover, #block-${attributes.ID || clientId}.is_hover .block-${attributes.ID || clientId}-lightbox .mfp-close { color: ${attributes.lightboxHoverExitIconColor} !important; }` );
		}
		if ( attributes.lightboxHoverArrowColor ) {
			hovercss.push( `
				.block-${attributes.ID || clientId}-lightbox .mfp-arrow-left:hover:after, .block-${attributes.ID || clientId}-lightbox .mfp-arrow-left:hover:before, #block-${attributes.ID || clientId}.is_hover .mfp-arrow-left:after { border-right-color: ${attributes.lightboxHoverArrowColor} !important; } 
				.block-${attributes.ID || clientId}-lightbox .mfp-arrow-right:hover:after, .block-${attributes.ID || clientId}-lightbox .mfp-arrow-right:hover:before, #block-${attributes.ID || clientId}.is_hover .mfp-arrow-right:after { border-left-color: ${attributes.lightboxHoverArrowColor} !important; }`
			);
		}
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `${normalcss.filter(Boolean).join('\n')}\n${hovercss.filter(Boolean).join('\n')}` : '';
	
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
