import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {
	const toConvertStyles = [
		'tickerLabel','tickerLabelHover','postItems','postItemsHover','postItem','postItemHover','postSeparator','arrow'
	];

	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};


	normalcss.push(
		( attributes.tickerLabelColor || attributes.tickerLabelBackground || convertedStyle.tickerLabel )
			? `.wpmozo_post_ticker_label{
					${attributes.tickerLabelColor ? `color:${attributes.tickerLabelColor};` : ''}
					${attributes.tickerLabelBackground ? `background-color:${attributes.tickerLabelBackground};` : ''}
					${convertedStyle.tickerLabel || ''}
				}`
			: ''
	);

	hovercss.push(
		( attributes.tickerLabelHoverColor || attributes.tickerLabelHoverBackground || convertedStyle.tickerLabelHover )
			? `.wpmozo_post_ticker_label:hover${isEditor('.wpmozo_post_ticker_label')}{
					${attributes.tickerLabelHoverColor ? `color:${attributes.tickerLabelHoverColor};` : ''}
					${attributes.tickerLabelHoverBackground ? `background-color:${attributes.tickerLabelHoverBackground};` : ''}
					${convertedStyle.tickerLabelHover || ''}
				}`
			: ''
	);
	
	normalcss.push(
		( attributes.postItemsBackground || convertedStyle.postItems )
			? `.wpmozo_post_ticker_items{
					${attributes.postItemsBackground ? `background-color:${attributes.postItemsBackground};` : ''}
					${convertedStyle.postItems || ''}
				}`
			: ''
	);

	hovercss.push(
		( attributes.postItemsHoverBackground || convertedStyle.postItemsHover )
			? `.wpmozo_post_ticker_items:hover${isEditor('.wpmozo_post_ticker_items')}{
					${attributes.postItemsHoverBackground ? `background-color:${attributes.postItemsHoverBackground};` : ''}
					${convertedStyle.postItemsHover || ''}
				}`
			: ''
	);

	normalcss.push(
		( attributes.postItemColor || convertedStyle.postItem )
			? `.wpmozo_post_ticker_post_title{
					${attributes.postItemColor ? `color:${attributes.postItemColor};` : ''}
					${convertedStyle.postItem || ''}
				}`
			: ''
	);

	hovercss.push(
		( attributes.postItemHoverColor || convertedStyle.postItemHover )
			? `.wpmozo_post_ticker_post_title:hover${isEditor('.wpmozo_post_ticker_post_title')}{
					${attributes.postItemHoverColor ? `color:${attributes.postItemHoverColor};` : ''}
					${convertedStyle.postItemHover || ''}
				}`
			: ''
	);

	normalcss.push( attributes.arrowBackground ? `.wpmozo_swiper_navigation{ background-color:${attributes.arrowBackground}; }` : '' );

	normalcss.push(
		( attributes.arrowColor || attributes.arrowFontSize || convertedStyle.arrow )
			? `.wpmozo_swiper_icon_prev i,
				.wpmozo_swiper_icon_next i{
					${attributes.arrowColor ? `color:${attributes.arrowColor};` : ''}
					${attributes.arrowFontSize ? `font-size:${attributes.arrowFontSize}px;` : ''}
					${convertedStyle.arrow || ''}
				}`
			: ''
	);

	normalcss.push(
		(attributes.separatorFontSize || attributes.postSeparatorColor || convertedStyle.postSeparator)
			? `.wpmozo_ticker_icon_separator{
				${attributes.separatorFontSize ? `font-size: var(--wpmozo-separator-font-size);` : ''}
				${attributes.postSeparatorColor ? `color: var(--wpmozo-post-separator-color);` : ''}
				${convertedStyle.postSeparator || ''}
			}`
			: ''
	);

	if('scroll' === attributes.tickerEffect){
		if('custom' === attributes.separatorType){
			normalcss.push(
				(attributes.customSeparator || attributes.separatorFontSize || attributes.postSeparatorColor || convertedStyle.postSeparator)
					? `.wpmozo_ticker_effect_scroll .wpmozo_post_ticker_item::after{
						${attributes.customSeparator ? `content: "${attributes.customSeparator}" !important;` : ''}
						${attributes.separatorFontSize ? `font-size: ${attributes.separatorFontSize}px;` : ''}
						${attributes.postSeparatorColor ? `color: ${attributes.postSeparatorColor};` : ''}
						${convertedStyle.postSeparator || ''}
					}`
					: ''
			);
		}
		if('icon' === attributes.separatorType){
			normalcss.push(`.wpmozo_ticker_icon_separator{ vertical-align:top; }`)
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