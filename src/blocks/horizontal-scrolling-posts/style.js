import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'titleText','excerptText','postItem','postContent','catText','cat','postImage','metaText','container','button','MetaText'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let normalcss = [],
		hovercss = [],
		cssExtras = [];
		const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
		
	if( 'layout1' === attributes.layout ){
		normalcss.push(
			( attributes.titleTextAlignment || attributes.titleTextColor || convertedStyle.titleText ) 
			? `.wpmozo_horizontal_scrolling_post_title,
				.wpmozo_horizontal_scrolling_post_title a{
					${attributes.titleTextAlignment ? `text-align: ${attributes.titleTextAlignment};` : ''}
					${attributes.titleTextColor ? `color: ${attributes.titleTextColor};` : ''}
					${convertedStyle.titleText || ''}
				}`
			: ''
		);
		
		normalcss.push(
			( attributes.excerptTextAlignment || attributes.excerptTextColor || convertedStyle.excerptText ) 
			? `.wpmozo_horizontal_scrolling_post_excerpt{
					${attributes.excerptTextAlignment ? `text-align: ${attributes.excerptTextAlignment};` : ''}
					${attributes.excerptTextColor ? `color: ${attributes.excerptTextColor};` : ''}
					${convertedStyle.excerptText || ''}
				}`
			: ''
		);
		
		normalcss.push(
			( attributes.postItemColor || attributes.postItemWidth || convertedStyle.postItem ) 
			? `.item_layout1 .wpmozo_horizontal_scrolling_post_wrapper{
					${attributes.postItemColor ? `background-color: ${attributes.postItemColor};` : ''}
					${attributes.postItemWidth ? `width:${attributes.postItemWidth}px;min-width:${attributes.postItemWidth}px;` : ''}
					${convertedStyle.postItem || ''}
				}`
			: ''
		);
		
		normalcss.push(
			( attributes.postContentColor || convertedStyle.postContent ) 
			? `.item_layout1 .wpmozo_horizontal_scrolling_post_content_wrapper{
					${attributes.postContentColor ? `background-color: ${attributes.postContentColor};` : ''}
					${convertedStyle.postContent || ''}
				}`
			: ''
		);

		normalcss.push(
			( attributes.catTextColor || attributes.catBKColor || convertedStyle.catText || convertedStyle.cat ) 
			? `.wpmozo_horizontal_scrolling_post_tag a {
					${attributes.catTextColor ? `color:${attributes.catTextColor};` : ''}
					${attributes.catBKColor ? `background-color:${attributes.catBKColor};` : ''}
					${convertedStyle.catText || ''}
					${convertedStyle.cat || ''}
				}`
			: ''
		);
		
		normalcss.push(
			( attributes.imageHeight || convertedStyle.postImage ) 
			? `.wpmozo_horizontal_scrolling_post_wrapper .wpmozo_horizontal_scrolling_post_image{
					${attributes.imageHeight ? `height: ${attributes.imageHeight}px;` : ''}
					${convertedStyle.postImage || ''}
				}`
			: ''
		);
		
		normalcss.push(
			( attributes.metaIconFontSize || attributes.metaIconColor ) 
			? `.wpmozo_horizontal_scrolling_post_meta_wrapper .fas,
				.wpmozo_horizontal_scrolling_post_tag .fas{
					${attributes.metaIconFontSize ? `font-size: ${attributes.metaIconFontSize}px;` : ''}
					${attributes.metaIconColor ? `color: ${attributes.metaIconColor};` : ''}
				}`
			: ''
		);
		
		normalcss.push(
			( attributes.metaIconFontSize || attributes.metaIconColor ) 
			? `.wpmozo_horizontal_scrolling_post_meta_wrapper,
				.wpmozo_horizontal_scrolling_post_meta_wrapper span,
				.wpmozo_horizontal_scrolling_post_meta_wrapper a,
				.wpmozo_horizontal_scrolling_post_tag_wrapper span.published{
					${attributes.metaTextColor ? `color: ${attributes.metaTextColor};` : ''}
					${convertedStyle.metaText || ''}
				}`
			: ''
		);

		normalcss.push(
			( attributes.buttonTextSize || attributes.buttonTextColor || attributes.buttonTextBackground || convertedStyle.button ) 
			? `.wpmozo-bna-button {
					${attributes.buttonTextSize ? `font-size:${attributes.buttonTextSize}px;` : ''}
					${attributes.buttonTextColor ? `color:${attributes.buttonTextColor};` : ''}
					${attributes.buttonTextBackground ? `background:${attributes.buttonTextBackground};` : ''}
					${convertedStyle.button || ''}
				}`
			: ''
		);
		normalcss.push( attributes.buttonIconColor ? `.wpmozo-bna-icon{color:${attributes.buttonIconColor};}` : '' );
		normalcss.push( attributes.container ? `.wpmozo-sticky-posts-scroller{ ${convertedStyle.container}; }` : '' );
		normalcss.push( attributes.buttonAlignment ? `.wpmozo-bna-button-wrap{ text-align:${attributes.buttonAlignment} }` : '' );
		normalcss.push(
		( attributes.metaTextAlign || convertedStyle.MetaText ) 
			? `.item_layout1 .wpmozo_horizontal_scrolling_post_meta_wrapper{
				${attributes.metaTextAlign ? `justify-content:${attributes.metaTextAlign};` : ''}
				${convertedStyle.MetaText || ''}
			}`
			: ''
		);
	} else {
		
		normalcss.push( `.wpmozo_horizontal_scrolling_post_tag_wrapper span{ display: flex; }`);
		
		normalcss.push(
		( attributes.titleTextAlignment || attributes.titleTextColor || convertedStyle.titleText ) 
			? `.wpmozo_horizontal_scrolling_post_title,
				.wpmozo_horizontal_scrolling_post_title a{
					${attributes.titleTextAlignment ? `text-align: ${attributes.titleTextAlignment};` : ''}
					${attributes.titleTextColor ? `color: ${attributes.titleTextColor};` : ''}
					${convertedStyle.titleText || ''}
				}`
			: ''
		);

		normalcss.push(
		( attributes.excerptTextAlignment || attributes.excerptTextColor || convertedStyle.excerptText ) 
			? `.wpmozo_horizontal_scrolling_post_excerpt{
					${attributes.excerptTextAlignment ? `text-align: ${attributes.excerptTextAlignment};` : ''}
					${attributes.excerptTextColor ? `color: ${attributes.excerptTextColor};` : ''}
					${convertedStyle.excerptText || ''}
				}`
			: ''
		);
		
		normalcss.push(`
			.item_layout2 .wpmozo_horizontal_scrolling_post_wrapper{
				overflow:hidden;
				${convertedStyle.postItem || ''};
			}` 
		);
		
		normalcss.push( attributes.postItemColor ? `.wpmozo_horizontal_scrolling_post_inner::before{ background-color: ${attributes.postItemColor}; }` : '' );

		normalcss.push(
		( attributes.postContentColor || convertedStyle.postContent ) 
			? `.item_layout2 .wpmozo_horizontal_scrolling_post_content_wrapper{
					${attributes.postContentColor ? `background-color:${attributes.postContentColor};` : ''}
					${convertedStyle.postContent || ''}
				}`
			: ''
		);

		normalcss.push(
		( attributes.catTextColor || attributes.catBKColor || convertedStyle.catText || convertedStyle.cat ) 
			? `.wpmozo_horizontal_scrolling_post_tag a {
					${attributes.catTextColor ? `color:${attributes.catTextColor};` : ''}
					${attributes.catBKColor ? `background-color:${attributes.catBKColor};` : ''}
					${convertedStyle.catText || ''}
					${convertedStyle.cat || ''}
				}`
			: ''
		);

		normalcss.push(
		attributes.postItemWidth 
			? `.wpmozo_horizontal_scrolling_post_wrapper{
					width:${attributes.postItemWidth}px;
					min-width:${attributes.postItemWidth}px;
				}`
			: ''
		);

		normalcss.push(
		( attributes.imageHeight || convertedStyle.postImage ) 
			? `.wpmozo_horizontal_scrolling_post_wrapper .wpmozo_horizontal_scrolling_post_image{
					${attributes.imageHeight ? `height: ${attributes.imageHeight}px;` : ''}
					${convertedStyle.postImage || ''}
				}`
			: ''
		);

		normalcss.push(
		( attributes.metaIconFontSize || attributes.metaIconColor ) 
			? `.wpmozo_horizontal_scrolling_post_meta_wrapper .fas,
				.wpmozo_horizontal_scrolling_post_tag .fas{
					${attributes.metaIconFontSize ? `font-size: ${attributes.metaIconFontSize}px;` : ''}
					${attributes.metaIconColor ? `color: ${attributes.metaIconColor};` : ''}
				}`
			: ''
		);

		normalcss.push(
		( attributes.metaTextColor || convertedStyle.metaText ) 
			? `.wpmozo_horizontal_scrolling_post_meta_wrapper,
				.wpmozo_horizontal_scrolling_post_meta_wrapper span,
				.wpmozo_horizontal_scrolling_post_meta_wrapper a,
				.wpmozo_horizontal_scrolling_post_tag_wrapper span.published{
					${attributes.metaTextColor ? `color: ${attributes.metaTextColor};` : ''}
					${convertedStyle.metaText || ''}
				}`
			: ''
		);

		normalcss.push(
		( attributes.buttonTextSize || attributes.buttonTextColor || attributes.buttonTextBackground || convertedStyle.button ) 
			? `.wpmozo-bna-button {
					${attributes.buttonTextSize ? `font-size:${attributes.buttonTextSize}px;` : ''}
					${attributes.buttonTextColor ? `color:${attributes.buttonTextColor};` : ''}
					${attributes.buttonTextBackground ? `background:${attributes.buttonTextBackground};` : ''}
					${convertedStyle.button || ''}
				}`
			: ''
		);
		normalcss.push(attributes.buttonIconColor ? `.wpmozo-bna-icon{color:${attributes.buttonIconColor};}`: '');

		normalcss.push(convertedStyle.container ? `.wpmozo-sticky-posts-scroller{${convertedStyle.container}}`: '');

		normalcss.push(attributes.buttonAlignment ? `.wpmozo-bna-button-wrap{text-align:${attributes.buttonAlignment}}`: '');

		normalcss.push(
		( attributes.metaTextAlign || convertedStyle.MetaText ) 
			? `.item_layout2 .wpmozo_horizontal_scrolling_post_meta_wrapper{
					${attributes.metaTextAlign ? `justify-content:${attributes.metaTextAlign};` : ''}
					${convertedStyle.MetaText || ''}
				}`
			: ''
		);
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';

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