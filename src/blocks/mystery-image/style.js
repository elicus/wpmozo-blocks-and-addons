import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {
	const { iconFontSize, separatorColor } = attributes,
		toConvertStyles = [];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);
	
	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.overlayBackgroundColor || attributes.overlayIconColor || attributes.overlayIconSize )
			? `.wpmozo-mystery-image-anchor .wpmozo-overlay-icon{
					${attributes.overlayBackgroundColor ? `background:${attributes.overlayBackgroundColor}!important;` : ''}
					${attributes.overlayIconColor ? `color:${attributes.overlayIconColor}!important;` : ''}
					${attributes.overlayIconSize ? `font-size:${attributes.overlayIconSize}px!important;` : ''}
				}`
			: ''
	);
	if(true === attributes.showLightbox){
		cssExtras.push( attributes.lightboxBackgroundColor ? `.block-block-${clientId}_lightbox.mfp-bg, .block-block-${clientId}_lightbox{ background:${attributes.lightboxBackgroundColor} !important; opacity: 1 !important; }` : '' );

		cssExtras.push( attributes.lightboxCloseIconColor ? `.block-block-${clientId}_lightbox .mfp-close{ color:${attributes.lightboxCloseIconColor} !important; opacity: 1 !important; }` : `.block-block-${clientId}_lightbox .mfp-close{ opacity: 1 !important; }` );

		if ( attributes.lightboxHoverCloseIconColor ) {
			cssExtras.push( `.block-block-${clientId}_lightbox .mfp-close:hover, #block-block-${clientId}_lightbox.is_hover .mfp-close { color:${attributes.lightboxHoverCloseIconColor} !important; }` );
		}
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