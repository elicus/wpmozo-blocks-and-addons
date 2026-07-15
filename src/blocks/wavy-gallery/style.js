import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'lightboxTitle','container'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.imagesHeight || attributes.imagesWidth )
		? `.wpmozo_wavy_gallery_item{
			${attributes.imagesHeight ? `height:${attributes.imagesHeight}px;` : ''}
			${attributes.imagesWidth ? `width:${attributes.imagesWidth}px;` : ''}
		}`
		: ''
	);

	normalcss.push( attributes.imagesGap ? `.wpmozo_wavy_gallery_items{ gap:${attributes.imagesGap}px; }` : '' );
	
	normalcss.push( convertedStyle.container ? `.wpmozo_wavy_gallery_wrapper{ ${convertedStyle.container} }` : '' );

	cssExtras.push( attributes.lightboxBackgroundColor ? `.block-${attributes.ID}{ background:${attributes.lightboxBackgroundColor}; }` : '' );
	cssExtras.push(
		( attributes.lightboxTitleColor || attributes.textAlign || convertedStyle.lightboxTitle ) 
		? `.block-${attributes.ID} .wpmozo_wavy_gallery_overlay_item_title{
				${attributes.lightboxTitleColor ? `color:${attributes.lightboxTitleColor};` : ''}
				${attributes.textAlign ? `text-align:${attributes.textAlign};` : ''}
				${convertedStyle.lightboxTitle || ''}
			}`
		: ''
	);

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID} {${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
	styles = styles.replace(/\s+/g, ' ')
	.replace(/\s*{\s*/g, '{')
	.replace(/\s*}\s*/g, '}')
	.replace(/\s*:\s*/g, ':')
	.replace(/\s*;\s*/g, ';')
	.replace(/\s*,\s*/g, ',')    
	.trim();
	return styles;
}

export default generateDynamicStyle;