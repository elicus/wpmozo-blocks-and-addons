import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'button',
		'post',
		'title',
		'excerpt',
		'date',
		'meta',
		'buttonHover',
		'postHover',
		'titleHover',
		'excerptHover',
		'dateHover',
		'metaHover'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let normalcss = [],
	    hovercss = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	let iconWidth = attributes.timelineIconFontSize ?? 22;
	if ( 'none' !== attributes.tlIconShape ) {
		// Add default 10px padding on all side.
		iconWidth = parseInt( iconWidth ) + 25;

		// If border on.
		if ( attributes.tlIconShapeUseBorder && attributes.tlIconShapeBorderSize ) {
			iconWidth = parseInt( iconWidth ) + ( 2 * parseInt( attributes.tlIconShapeBorderSize ) );
		}
	}

	normalcss.push(( iconWidth || attributes.timelineIconColor || attributes.timelineIconFontSize || attributes.tlIconShape !== 'none' || (attributes.tlIconShape !== 'none' && attributes.tlIconShapeUseBorder) )
		? `.wpmozo_bna_blog_timeline_post_icon{
				${iconWidth ? `width:${iconWidth}px; height:${iconWidth}px;` : ''}
				${attributes.timelineIconColor ? `color:${attributes.timelineIconColor};` : ''}
				${attributes.timelineIconFontSize ? `font-size:${attributes.timelineIconFontSize}px;` : ''}

				${attributes.tlIconShape !== 'none' ? `
					padding: 10px;
					${attributes.tlIconShape === 'use_circle' ? 'border-radius: 50%;' : 'border-radius: 0;'}
					${attributes.tlIconShapeColor ? `background-color:${attributes.tlIconShapeColor};` : ''}
				` : ''}

				${attributes.tlIconShape !== 'none' && attributes.tlIconShapeUseBorder ? `
					border-style: solid;
					${attributes.tlIconShapeBorderSize ? `border-width:${attributes.tlIconShapeBorderSize}px;` : ''}
					${attributes.tlIconShapeBorderColor ? `border-color:${attributes.tlIconShapeBorderColor};` : ''}
				` : ''}
			}`
		: ''
	);

	normalcss.push( ( attributes.timelineIconFillColor || (attributes.tlIconShape !== 'none' && attributes.tlIconShapeFillColor) || (attributes.tlIconShape !== 'none' && attributes.tlIconShapeUseBorder && attributes.tlIconShapeBorderFillColor) )
		? `.wpmozo_bna_blog_timeline_post_icon.wpmozo_bna_icon_fill{
				${attributes.timelineIconFillColor ? `color:${attributes.timelineIconFillColor};` : ''}

				${attributes.tlIconShape !== 'none' ? `
					${attributes.tlIconShapeFillColor ? `background-color:${attributes.tlIconShapeFillColor};` : ''}
				` : ''}

				${attributes.tlIconShape !== 'none' && attributes.tlIconShapeUseBorder ? `
					${attributes.tlIconShapeBorderFillColor ? `border-color:${attributes.tlIconShapeBorderFillColor};` : ''}
				` : ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.barSize || attributes.barColor )
		? `.wpmozo_bna_stem_wrapper{
				${attributes.barSize ? `width:${attributes.barSize}px;` : ''}
				${attributes.barColor ? `background:${attributes.barColor};` : ''}
			}`
		: ''
	);
	
	normalcss.push(
		( 'right' === attributes.orientation && 'layout1' === attributes.layout && iconWidth )
		? `.wpmozo_bna_blog_timeline_right .wpmozo_bna_stem_wrapper{
				left: ${ iconWidth / 2 }px;
			}`
		: ''
	);
	
	normalcss.push(
		( 'left' === attributes.orientation && 'layout1' === attributes.layout && iconWidth )
		? `.wpmozo_bna_blog_timeline_left .wpmozo_bna_stem_wrapper{
				right: ${ iconWidth / 2 }px;
			}`
		: ''
	);

    normalcss.push( attributes.barFillColor ? `.wpmozo_bna_blog_stem{background: ${attributes.barFillColor}; }` : '' );
	
	if ( attributes.showThumbnail ) {
		normalcss.push( attributes.thumbnailSize ? `.wpmozo_bna_blog_timeline_image_wrapper .wpmozo_bna_blog_timeline_image_link{width: ${attributes.thumbnailSize}%; }` : '' );

		normalcss.push( attributes.thumbnailAlign ? `.wpmozo_bna_blog_timeline_image_wrapper{text-align: ${attributes.thumbnailAlign}; }` : '' );
	}
	if ( attributes.showReadMore ) {
		normalcss.push(
		( attributes.buttonBGGradient || attributes.buttonBackground || attributes.buttonColor || convertedStyle.button )
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button{
					${attributes.buttonBGGradient ? `background:${attributes.buttonBGGradient};` : ''}
					${attributes.buttonBackground ? `background:${attributes.buttonBackground};` : ''}
					${attributes.buttonColor ? `color:${attributes.buttonColor};` : ''}
					${convertedStyle.button || ''}
				}`
			: ''
		);
		hovercss.push(
		( attributes.buttonHoverBGGradient || attributes.buttonHoverBackground || attributes.buttonHoverColor || convertedStyle.buttonHover )
			? `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover${isEditor('.wpmozo-bna-button-wrap .wpmozo-bna-button')}{
					${attributes.buttonHoverBGGradient ? `background:${attributes.buttonHoverBGGradient};` : ''}
					${attributes.buttonHoverBackground ? `background:${attributes.buttonHoverBackground};` : ''}
					${attributes.buttonHoverColor ? `color:${attributes.buttonHoverColor};` : ''}
					${convertedStyle.buttonHover || ''}
				}`
			: ''
		);
	}

	normalcss.push(
	( attributes.postBGGradient || attributes.postBackground || convertedStyle.post )
		? `.wpmozo_bna_blog_timeline_content_wrapper{
				${attributes.postBGGradient ? `background:${attributes.postBGGradient};` : ''}
				${attributes.postBackground ? `background:${attributes.postBackground};` : ''}
				${convertedStyle.post || ''}
			}`
		: ''
	);
	hovercss.push(
	( attributes.postHoverBGGradient || attributes.postHoverBackground || convertedStyle.postHover )
		? `.wpmozo_bna_blog_timeline_content_wrapper:hover${isEditor('.wpmozo_bna_blog_timeline_content_wrapper')}{
				${attributes.postHoverBGGradient ? `background:${attributes.postHoverBGGradient};` : ''}
				${attributes.postHoverBackground ? `background:${attributes.postHoverBackground};` : ''}
				${convertedStyle.postHover || ''}
			}`
		: ''
	);

	normalcss.push(
	( attributes.titleAlign || attributes.titleColor || convertedStyle.title )
		? `.wpmozo_bna_blog_timeline_post_title, .wpmozo_bna_blog_timeline_post_title a{
				${attributes.titleAlign ? `text-align:${attributes.titleAlign};` : ''}
				${attributes.titleColor ? `color:${attributes.titleColor};` : ''}
				${convertedStyle.title || ''}
			}`
		: ''
	);
	hovercss.push(
	( attributes.titleHoverColor || convertedStyle.titleHover )
		? `.wpmozo_bna_blog_timeline_post_title:hover a${isEditor('.wpmozo_bna_blog_timeline_post_title a')}{
				${attributes.titleHoverColor ? `color:${attributes.titleHoverColor};` : ''}
				${convertedStyle.titleHover || ''}
			}`
		: ''
	);

	normalcss.push(
	( attributes.showExcerpt && (attributes.excerptAlign || attributes.excerptColor || convertedStyle.excerpt) )
		? `.wpmozo_bna_blog_timeline_post_content_inner, .wpmozo_bna_blog_timeline_post_content_inner p{
				${attributes.excerptAlign ? `text-align:${attributes.excerptAlign};` : ''}
				${attributes.excerptColor ? `color:${attributes.excerptColor};` : ''}
				${convertedStyle.excerpt || ''}
			}`
		: ''
	);
	hovercss.push(
	( attributes.showExcerpt && ( attributes.excerptHoverColor || convertedStyle.excerptHover) )
		? `.wpmozo_bna_blog_timeline_post_content_inner:hover, .wpmozo_bna_blog_timeline_post_content_inner p:hover${isEditor('.wpmozo_bna_blog_timeline_post_content_inner p')}${isEditor('.wpmozo_bna_blog_timeline_post_content_inner')}{
				${attributes.excerptHoverColor ? `color:${attributes.excerptHoverColor};` : ''}
				${convertedStyle.excerptHover || ''}
			}`
		: ''
	);

	normalcss.push(
	( attributes.showDate && (attributes.dateColor || convertedStyle.date) )
		? `.wpmozo_bna_blog_timeline_meta_date .published{
				${attributes.dateColor ? `color:${attributes.dateColor};` : ''}
				${convertedStyle.date || ''}
			}`
		: ''
	);
	hovercss.push(
	( attributes.showDate && (attributes.dateHoverColor || convertedStyle.dateHover) )
		? `.wpmozo_bna_blog_timeline_meta_date .published:hover${isEditor('.wpmozo_bna_blog_timeline_meta_date .published')}{
				${attributes.dateHoverColor ? `color:${attributes.dateHoverColor};` : ''}
				${convertedStyle.dateHover || ''}
			}`
		: ''
	);

	if ( attributes.showCategories || attributes.showAuthor || attributes.showComments ) {
		normalcss.push(
		( attributes.metaColor || convertedStyle.meta )
			? `.wpmozo_bna_blog_timeline_meta, .wpmozo_bna_blog_timeline_meta a,
			.wpmozo_bna_blog_timeline_meta_icon, .wpmozo_bna_blog_timeline_meta span, .wpmozo_bna_blog_timeline_meta p{
					${attributes.metaColor ? `color:${attributes.metaColor};` : ''}
					${convertedStyle.meta || ''}
				}`
			: ''
		);
		hovercss.push(
		( attributes.metaHoverColor || convertedStyle.metaHover )
			? `
			.wpmozo_bna_blog_timeline_meta:hover, 
			.wpmozo_bna_blog_timeline_meta a:hover,
			.wpmozo_bna_blog_timeline_meta_icon:hover, 
			.wpmozo_bna_blog_timeline_meta span:hover, 
			.wpmozo_bna_blog_timeline_meta p:hover
			${isEditor('.wpmozo_bna_blog_timeline_meta')}
			${isEditor('.wpmozo_bna_blog_timeline_meta a')}
			${isEditor('.wpmozo_bna_blog_timeline_meta_icon')}
			${isEditor('.wpmozo_bna_blog_timeline_meta span')}
			${isEditor('.wpmozo_bna_blog_timeline_meta p')} {
					${attributes.metaHoverColor ? `color:${attributes.metaHoverColor};` : ''}
					${convertedStyle.metaHover || ''}
				}`
			: ''
		);
	}

	cssExtras.push(
		( attributes.ID && 'alternate' === attributes.orientation && iconWidth ) 
		? `@media only screen and (max-width: 767px) {
				#block-${attributes.ID} {
					.wpmozo_bna_blog_timeline_alternate .wpmozo_bna_stem_wrapper{
						left:${iconWidth / 2}px;
					}
				}
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