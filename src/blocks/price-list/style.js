import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {

	const toConvertStyles = [
		'thumbnail',
		'name',
		'price',
		'currency',
		'description',
		'period',
		'item'
	];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		(attributes.bottomSpacing || attributes.itemBackground || convertedStyle.item)
			? `.wpmozo-bna-price-list-item{
				${attributes.bottomSpacing ? `margin-bottom: ${attributes.bottomSpacing};` : ''}
				${attributes.itemBackground ? `background-color: ${attributes.itemBackground};` : ''}
				${convertedStyle.item || ''}
			}`
			: ''
	);
	
	normalcss.push( attributes.iconShapBackground ? `.wpmozo-bna-price-list-icon.circle .icon-wrapper, .wpmozo-bna-price-list-icon.square .icon-wrapper, .wpmozo-bna-price-list-icon.hexagon::before{ background-color: ${attributes.iconShapBackground}; }` : '' );

	normalcss.push(
		(attributes.iconColor || attributes.iconFontSize)
			? `.wpmozo-bna-price-list-icon i{
				${attributes.iconColor ? `color: ${attributes.iconColor};` : ''}
				${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize};` : ''}
			}`
			: ''
	);

	normalcss.push(
		(attributes.thumbnailWidth || convertedStyle.thumbnail)
			? `.wpmozo-bna-price-list-item-thumbnail img{
				${attributes.thumbnailWidth ? `width: ${attributes.thumbnailWidth};` : ''}
				${convertedStyle.thumbnail || ''}
			}`
			: ''
	);

	normalcss.push(
		(attributes.nameColor || convertedStyle.name)
			? `.wpmozo-bna-price-list-item-name{
				${attributes.nameColor ? `color: ${attributes.nameColor};` : ''}
				${convertedStyle.name || ''}
			}`
			: ''
	);

	normalcss.push(
		(attributes.priceColor || convertedStyle.price)
			? `.wpmozo-bna-price-list-item-price{
				${attributes.priceColor ? `color: ${attributes.priceColor};` : ''}
				${convertedStyle.price || ''}
			}`
			: ''
	);

	normalcss.push(
		(attributes.currencyColor || convertedStyle.currency)
			? `.wpmozo-bna-price-list-item-currency{
				${attributes.currencyColor ? `color: ${attributes.currencyColor};` : ''}
				${convertedStyle.currency || ''}
			}`
			: ''
	);

	normalcss.push(
		(attributes.descriptionColor || convertedStyle.description)
			? `.wpmozo-bna-price-list-item-description{
				${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
				${convertedStyle.description || ''}
			}`
			: ''
	);

	normalcss.push(
		(attributes.periodColor || convertedStyle.period)
			? `.wpmozo-bna-price-list-item-price-period{
				${attributes.periodColor ? `color: ${attributes.periodColor};` : ''}
				${convertedStyle.period || ''}
			}`
			: ''
	);

	normalcss.push(
		(attributes.dividerColor || attributes.dividerStyle || attributes.dividerWidth)
			? `.wpmozo-bna-price-list-item-price-divider{
				${attributes.dividerColor ? `border-top-color: ${attributes.dividerColor} !important;` : ''}
				${attributes.dividerStyle ? `border-top-style: ${attributes.dividerStyle} !important;` : ''}
				${attributes.dividerWidth ? `border-top-width: ${attributes.dividerWidth} !important;` : ''}
			}`
			: ''
	);

	cssExtras.push(
		( attributes.numberOfColumns || attributes.columnSpacing )
		? `html:not(.block-editor-iframe__html) #block-${clientId}, 
			.editor-styles-wrapper #block-${clientId}.wpmozo-bna-price-list .block-editor-inner-blocks > div{ 
				${attributes.numberOfColumns ? `grid-template-columns: repeat(${attributes.numberOfColumns}, 1fr);`: ''} 
				${attributes.columnSpacing ? `gap: ${attributes.columnSpacing};` : ''} 
			}` 
		: ''
	);

	cssExtras.push( ! wpmozo_is_empty(attributes.textAlignment) ? `#block-${clientId}{ text-align: ${attributes.textAlignment}; }` : '' );

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