import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'title',
		'titleHover',
		'subtitle',
		'subtitleHover',
		'description',
		'descriptionHover',
		'button',
		'buttonHover',
		'block',
	];
	// Get title align.
	let titleAlign = attributes.titleAlign || '';
		titleAlign = titleAlign.replace(/^(left|right)$/, match =>
			match === "left" ? "flex-start" : "flex-end"
		);
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
		hovercss = [],
		cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	
	normalcss.push( `
		${ convertedStyle.block || '' }
		${attributes.blockBGGradient ? `background:`+ attributes.blockBGGradient + `;` : ''}
		${attributes.blockBackground ? `background:`+ attributes.blockBackground + `;` : ''}`
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
		? `:hover .wpmozo_bna_hover_list_title${isEditor('.wpmozo_bna_hover_list_title')}{
				${ attributes.titleHoverColor ? `color:`+ attributes.titleHoverColor + `;` : '' }
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
		? `:hover .wpmozo_bna_hover_list_subtitle${isEditor('.wpmozo_bna_hover_list_subtitle')}{
				${ attributes.subtitleHoverColor ? `color:`+ attributes.subtitleHoverColor + `;` : '' }
				${ convertedStyle.subtitleHover || '' }
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
		? `:hover .wpmozo_bna_hover_list_description${isEditor('.wpmozo_bna_hover_list_description')}{
				${ attributes.descriptionHoverColor ? `color:`+ attributes.descriptionHoverColor + `;` : '' }
				${ convertedStyle.descriptionHover || '' }
			}`
		: ''
	);
	
	normalcss.push(
		( attributes.iconFontsize || attributes.iconColor ) 
		? `.wpmozo_bna_hover_list_icon{
				${ attributes.iconFontsize ? `font-size: ${attributes.iconFontsize}px;` : '' }
				${ attributes.iconColor ? `color: ${attributes.iconColor};` : '' }
			}`
		: ''
	);
	hovercss.push( attributes.iconHoverColor  
		? `:hover .wpmozo_bna_hover_list_icon${isEditor('.wpmozo_bna_hover_list_icon')}{
				${ attributes.iconHoverColor ? `color:`+ attributes.iconHoverColor + `;` : '' }
			}`
		: ''
	);

	if ( attributes.showButton ) {
		normalcss.push(
			( attributes.buttonBGGradient || attributes.buttonBackground || attributes.buttonColor || convertedStyle.button ) 
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button{
					${ attributes.buttonBGGradient ? `background: ${attributes.buttonBGGradient};` : '' }
					${ attributes.buttonBackground ? `background: ${attributes.buttonBackground};` : '' }
					${ attributes.buttonColor ? `color: ${attributes.buttonColor};` : '' }
					${ convertedStyle.button || '' }
				}`
			: ''
		);
		hovercss.push(
			( attributes.buttonHoverBGGradient || attributes.buttonHoverBackground || attributes.buttonHoverColor || convertedStyle.buttonHover ) 
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover${isEditor('.wpmozo-bna-button-wrap .wpmozo-bna-button')}{
					${ attributes.buttonHoverBGGradient ? `background: ${attributes.buttonHoverBGGradient};` : '' }
					${ attributes.buttonHoverBackground ? `background: ${attributes.buttonHoverBackground};` : '' }
					${ attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : '' }
					${ convertedStyle.buttonHover || '' }
				}`
			: ''
		);
	}
	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `.wp-block-wpmozo-hover-list #block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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