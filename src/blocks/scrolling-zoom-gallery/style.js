import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'normal','hover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	const classicBackgroundColor = (attributes.classicBackgroundColor) ? attributes.classicBackgroundColor : "",
		classicBackgroundImage = (attributes.classicBackgroundImage) ? attributes.classicBackgroundImage : "",
		gradientBackgroundColor = (attributes.gradientBackgroundColor) ? attributes.gradientBackgroundColor : "";

   let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	// If scroll type color or blur.
	normalcss.push( convertedStyle.normal ? `.wpmozo_scroll_zoom_gallery_item img{ ${convertedStyle.normal} }` : '');
	hovercss.push( convertedStyle.hover ? `.wpmozo_scroll_zoom_gallery_item img:hover${isEditor('.wpmozo_scroll_zoom_gallery_item img')}{ ${convertedStyle.hover} }` : '');

	if('classic' === attributes.filledBackgroundType){
		normalcss.push(
			( classicBackgroundColor || classicBackgroundImage ) 
			? `.wpmozo_scroll_zoom_gallery_scroller {
					${classicBackgroundColor ? `background-color: ${classicBackgroundColor};` : ''}
					${classicBackgroundImage ? `background-image: url(${classicBackgroundImage});` : ''}
				}`
			: ''
		);
	} else {
		normalcss.push(`
			.wpmozo_scroll_zoom_gallery_scroller{
				background-color:transparent;
				${gradientBackgroundColor ? `background-image:${gradientBackgroundColor};`: ''}
			}
		`);
	}

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