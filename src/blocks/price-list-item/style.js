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
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes ),
    	parentAtts = attributes.parentAtts,
    	iconFontSize = ( ! wpmozo_is_empty( attributes.iconFontSize ) ) ? attributes.iconFontSize : parentAtts.iconFontSize;

	const imageAlign = attributes.thumbnailAlignment === 'left' ? 'flex-start' :
		attributes.thumbnailAlignment === 'right' ? 'flex-end' : 'center';

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push( imageAlign ? `.wpmozo-bna-price-list-item-wrap{ align-items: ${imageAlign}; }` : '' );

	normalcss.push(
		( attributes.thumbnailWidth || convertedStyle.thumbnail )
			? `.wpmozo-bna-price-list-item-thumbnail img{
					${attributes.thumbnailWidth ? `width: ${attributes.thumbnailWidth};` : ''}
					${convertedStyle.thumbnail || ''}
			}`
			: ''
	);

	normalcss.push(
		( attributes.nameColor || convertedStyle.name )
			? `.wpmozo-bna-price-list-item-name{
					${attributes.nameColor ? `color: ${attributes.nameColor};` : ''}
					${convertedStyle.name || ''}
			}`
			: ''
	);

	normalcss.push(
		( attributes.priceColor || convertedStyle.price )
		? `.wpmozo-bna-price-list-item-price{
				${attributes.priceColor ? `color: ${attributes.priceColor};` : ''}
				${convertedStyle.price || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.currencyColor || convertedStyle.currency )
		? `.wpmozo-bna-price-list-item-currency{
				${attributes.currencyColor ? `color: ${attributes.currencyColor};` : ''}
				${convertedStyle.currency || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.descriptionColor || convertedStyle.description )
		? `.wpmozo-bna-price-list-item-description{
				${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
				${convertedStyle.description || ''}
		  }`
		: ''
	);

	normalcss.push(
		( attributes.periodColor || convertedStyle.period )
		? `.wpmozo-bna-price-list-item-price-period{
				${attributes.periodColor ? `color: ${attributes.periodColor};` : ''}
				${convertedStyle.period || ''}
		  }`
		: ''
	);

	normalcss.push(`.wpmozo-bna-price-list-item-name-wrap h4.wpmozo-bna-price-list-item-name{ margin: 0; }`);
	
	if ( 'use_icon' === attributes.itemThumbnailOption ) {
		
		normalcss.push(attributes.iconColor ? `.wpmozo-bna-price-list-icon i{ color: ${attributes.iconColor}; }` : '');
		normalcss.push(attributes.styleIcon ? `.wpmozo-bna-price-list-layout2 .wpmozo-bna-price-list-item-icon{ display: inline-block; }` : '');
		
		
		if ( ! attributes.styleIcon || ( attributes.styleIcon && 'hexagon' !== attributes.iconShape ) ) {
			normalcss.push(iconFontSize ? `.wpmozo-bna-price-list-icon i{ font-size: ${iconFontSize}; width: ${iconFontSize}; }` : '');
		}

		// Icon shape style
		if ( attributes.styleIcon ) {
			if( 'circle' === attributes.iconShape ){
				normalcss.push(
					`.wpmozo-bna-price-list-icon .icon-wrapper{
						padding: 12px;
						border-radius: 50%;
						${attributes.iconShapBackground ? `background-color: ${attributes.iconShapBackground};` : ''}
					}`
				);
			}
			if ( 'square' === attributes.iconShape ) {
				normalcss.push(
					`.wpmozo-bna-price-list-icon .icon-wrapper{
						padding: 9px;
						${attributes.iconShapBackground ? `background-color: ${attributes.iconShapBackground};` : ''}
					}`
				);
			}
			if ( 'hexagon' === attributes.iconShape ) {
				normalcss.push( iconFontSize ? `.wpmozo-bna-price-list-icon.hexagon{ font-size: ${iconFontSize}; }` : '' );

				normalcss.push( attributes.iconShapBackground ? `.wpmozo-bna-price-list-icon.hexagon::before{ background-color: ${ attributes.iconShapBackground }; }` : '' );
				
				normalcss.push(`
					.wpmozo-bna-price-list-icon i{
						font-size: inherit !important;
					}
					.wpmozo-bna-price-list-item-icon {
						flex: 0 0 auto;
					}
					.wpmozo-bna-price-list-item-details {
						flex: 1 1 0;
						min-width: 0;
					}
				`);
			}
		}
	}
	cssExtras.push( ! wpmozo_is_empty(attributes.textAlignment) ? `#block-${clientId}.wpmozo-bna-price-list-item{ text-align: ${attributes.textAlignment}; }` : '' );

	cssExtras.push( ! wpmozo_is_empty(attributes.itemBackground) ? `#block-${clientId}.wpmozo-bna-price-list-item{ background-color: ${attributes.itemBackground} !important; }` : '' );

	cssExtras.push( ! wpmozo_is_empty(convertedStyle.item) ? `#block-${clientId}.wpmozo-bna-price-list-item{ ${convertedStyle.item} }` : '' );

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID}.wpmozo-bna-price-list-item{${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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