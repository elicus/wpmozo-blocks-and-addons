import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'title',
		'titleHover',
		'subtitle',
		'subtitleHover',
		'description',
		'descriptionHover',
		'hoverImage',
		'divider'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
		hovercss = [],
		cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	let titleAlign = attributes.titleAlign || '';
		titleAlign = titleAlign.replace(/^(left|right)$/, match =>
			match === "left" ? "flex-start" : "flex-end"
		);
	
	normalcss.push(
		( titleAlign || attributes.titleWidth ) 
		? `.wpmozo_bna_hover_list_title_wrapper{
				${ titleAlign ? `justify-content: ${ titleAlign } !important;` : '' }
				${ attributes.titleWidth ? `flex: 0 0 ${attributes.titleWidth}% !important;` : '' }
			}`
		: ''
	);

	normalcss.push(
		( attributes.titleColor || convertedStyle.title ) 
		? `.wpmozo_bna_hover_list_title{
				${ attributes.titleColor ? `color: ${attributes.titleColor};` : '' }
				${ convertedStyle.title || '' }
			}`
		: ''
	);
	hovercss.push(
		( attributes.titleHoverColor || convertedStyle.titleHover ) 
		? `.wp-block-wpmozo-hover-list-item:hover .wpmozo_bna_hover_list_title${isEditor('.wp-block-wpmozo-hover-list-item .wpmozo_bna_hover_list_title')}{
				${ attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : '' }
				${ convertedStyle.titleHover || '' }
			}`
		: ''
	);

	normalcss.push(
		( attributes.subtitleColor || convertedStyle.subtitle ) 
		? `.wpmozo_bna_hover_list_subtitle{
				${ attributes.subtitleColor ? `color: ${attributes.subtitleColor};` : '' }
				${ convertedStyle.subtitle || '' }
			}`
		: ''
	);
	hovercss.push(
		( attributes.subtitleHoverColor || convertedStyle.subtitleHover ) 
		? `.wp-block-wpmozo-hover-list-item:hover .wpmozo_bna_hover_list_subtitle${isEditor('.wp-block-wpmozo-hover-list-item .wpmozo_bna_hover_list_subtitle')}{
				${ attributes.subtitleHoverColor ? `color: ${attributes.subtitleHoverColor};` : '' }
				${ convertedStyle.subtitleHover || '' }
			}`
		: ''
	);

	normalcss.push(
		( attributes.descriptionWidth ) 
		? `.wpmozo_bna_hover_list_description{
				${ attributes.descriptionWidth ? `flex: 0 0 ${attributes.descriptionWidth}% !important;` : '' }
			}`
		: ''
	);

	normalcss.push(
		( attributes.descriptionColor || convertedStyle.description ) 
		? `.wpmozo_bna_hover_list_description{
				${ attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : '' }
				${ convertedStyle.description || '' }
			}`
		: ''
	);
	hovercss.push(
		( attributes.descriptionHoverColor || convertedStyle.descriptionHover ) 
		? `.wp-block-wpmozo-hover-list-item:hover .wpmozo_bna_hover_list_description${isEditor('.wp-block-wpmozo-hover-list-item .wpmozo_bna_hover_list_description')}{
				${ attributes.descriptionHoverColor ? `color: ${attributes.descriptionHoverColor};` : '' }
				${ convertedStyle.descriptionHover || '' }
			}`
		: ''
	);

	normalcss.push(
		( attributes.hoverImageSize || convertedStyle.hoverImage ) 
		? `.wpmozo-bna-hover-list-cursor{
				${ attributes.hoverImageSize ? `width: ${attributes.hoverImageSize}px;` : '' }
				${ attributes.hoverImageSize ? `height: ${attributes.hoverImageSize}px;` : '' }
				${ convertedStyle.hoverImage || '' }
			}`
		: ''
	);

	// Divider.
	if ( attributes.dividerSize && 0 !== attributes.dividerSize ) {
		normalcss.push(
			( attributes.dividerSize || attributes.dividerStyle || attributes.dividerColor || convertedStyle.divider ) 
			? `.wpmozo-bna-hover-list-item-divider{
					${ attributes.dividerSize ? `border-top-width: ${attributes.dividerSize}px;` : '' }
					${ attributes.dividerStyle ? `border-style: ${attributes.dividerStyle};` : '' }
					${ attributes.dividerColor ? `border-color: ${attributes.dividerColor};` : '' }
					${ convertedStyle.divider || '' }
				}`
			: ''
		);
		if ( attributes.dividerHideLast ) {
			normalcss.push(`.wp-block-wpmozo-hover-list-item:last-child .wpmozo-bna-hover-list-item-divider,.wp-block-wpmozo-hover-list-item.wpmozo-is-last-child .wpmozo-bna-hover-list-item-divider{ display: none; }`);
		}
	}

	normalcss.push(
		( attributes.iconFontsize || attributes.iconColor ) 
		? `.wpmozo_bna_hover_list_icon{
				${ attributes.iconFontsize ? `font-size: ${attributes.iconFontsize}px;` : '' }
				${ attributes.iconColor ? `color: ${attributes.iconColor};` : '' }
			}`
		: ''
	);

	hovercss.push(
		( attributes.iconHoverColor ) 
		? `.wp-block-wpmozo-hover-list-item:hover .wpmozo_bna_hover_list_icon${isEditor('.wp-block-wpmozo-hover-list-item .wpmozo_bna_hover_list_icon')}{
				${ attributes.iconHoverColor ? `color: ${attributes.iconHoverColor};` : '' }
			}`
		: ''
	);

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
}

export default generateDynamicStyle;