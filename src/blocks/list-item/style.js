import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {

	const toConvertStyles = [
    	'textNormal',
        'textHover',
        'item',
        'itemHover'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );
    let iconFontSize = attributes.parentAtts ? attributes.parentAtts.iconFontSize : '';
    let parentAttributes = attributes.parentAtts || {};

	let normalcss = [],
	hovercss = [],
	cssExtras = [];

	const itemID = `#block-${attributes.ID}`;

	if ( undefined === attributes.itemBackgroundColor ) {
		normalcss.push(`${(attributes.itemBackgroundGradient) ? `${itemID}.wpmozo-bna-list-item { background:` +attributes.itemBackgroundGradient+`;}` : ''}`);
	} else {
		normalcss.push(`${(attributes.itemBackgroundColor) ? `${itemID}.wpmozo-bna-list-item { background:` +attributes.itemBackgroundColor+`;}` : ''}`);
	}
	if ( convertedStyle.item ) {
		normalcss.push(`${itemID}.wpmozo-bna-list-item { ${convertedStyle.item} }`);
	}

	if ( attributes.itemHoverBackgroundColor || attributes.itemHoverBackgroundGradient || convertedStyle.itemHover ) {
		hovercss.push(
			`${itemID}.wpmozo-bna-list-item:hover, ${itemID}.wpmozo-bna-list-item.is_hover {
				${attributes.itemHoverBackgroundColor ? `background: ${attributes.itemHoverBackgroundColor};` : ''}
				${attributes.itemHoverBackgroundGradient ? `background: ${attributes.itemHoverBackgroundGradient};` : ''}
				${convertedStyle.itemHover || ''}
			}`
		);
	}

	normalcss.push(
		( attributes.textNormalColor || convertedStyle.textNormal )
		? `${itemID} .wpmozo-bna-list-item-text p { 
				${attributes.textNormalColor ? `color: ${attributes.textNormalColor};` : ''} 
				${convertedStyle.textNormal || ''} 
			}`
		: ''
	);
	hovercss.push(
		( attributes.textHoverColor || convertedStyle.textHover )
		? `${itemID} .wpmozo-bna-list-item-text p:hover, ${itemID}.is_hover .wpmozo-bna-list-item-text p { 
				${attributes.textHoverColor ? `color: ${attributes.textHoverColor};` : ''} 
				${convertedStyle.textHover || ''} 
			}`
		: ''
	);

	normalcss.push( iconFontSize ? `${itemID} .wpmozo-bna-list-icon i { font-size: `+ iconFontSize+`px;}` : '' );
	
	if ( 'icon' === attributes.markerType ) {
		normalcss.push( attributes.iconColor ? `${itemID} .wpmozo-bna-list-icon i { color:`+ attributes.iconColor+`;}` : '' );
		hovercss.push( attributes.iconHoverColor ? `${itemID} .wpmozo-bna-list-icon i:hover, ${itemID}.is_hover .wpmozo-bna-list-icon i { color: ${attributes.iconHoverColor};}` : '' );
		
		if( true === attributes.styleIcon ){
			if( 'hexagon' === attributes.iconShape ){
				if( true === attributes.enableShapeBorder ){
					normalcss.push( attributes.shapeBorderColor ? `
						${itemID} .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex { 
							box-shadow: 2px 0px 0px 0px inset `+ attributes.shapeBorderColor + `, -2px 0px 0px 0px inset `+ attributes.shapeBorderColor +`;
						} 
						${itemID} .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:after {
							border-right: 2px solid ` + attributes.shapeBorderColor + `;
							border-bottom: 2px solid ` + attributes.shapeBorderColor + `;
							transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate( 72%, 27%);
							width: 55%;
							height: 100%;
						}
						${itemID} .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:before {
							border-top: 2px solid` + attributes.shapeBorderColor + `;
							border-left: 2px solid` + attributes.shapeBorderColor + `;
							transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%);
							width: 55%;
							height: 100%;
						}
					` : '' );
					hovercss.push( attributes.shapeBorderHoverColor ? `
						${itemID} .wpmozo-bna-list-icon:hover .hexagon.wpmozo-bna-border-hex,
						${itemID}.is_hover .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex { 
							box-shadow: 2px 0px 0px 0px inset `+ attributes.shapeBorderHoverColor + `, -2px 0px 0px 0px inset `+ attributes.shapeBorderHoverColor +`;
						}
						${itemID} .wpmozo-bna-list-icon:hover .hexagon.wpmozo-bna-border-hex:after,
						${itemID}.is_hover .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:after { 
							border-right-color: ` + attributes.shapeBorderHoverColor + `;
							border-bottom-color: ` + attributes.shapeBorderHoverColor + `;
						}
						${itemID} .wpmozo-bna-list-icon:hover .hexagon.wpmozo-bna-border-hex:before,
						${itemID}.is_hover .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:before { 
							border-top-color: ` + attributes.shapeBorderHoverColor + `;
							border-left-color: ` + attributes.shapeBorderHoverColor + `;
						}
					` : '' );
				} else {
					normalcss.push(`
						${itemID} .wpmozo-bna-list-icon .hexagon:after{ 
							transform: rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%); width: 55%; 
						} 
						${itemID} .wpmozo-bna-list-icon .hexagon:before { 
							transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%); width: 55%; 
						}`
					);
				}
				const effectiveIconSize = iconFontSize || 22;
				normalcss.push(`
					${itemID} .wpmozo-bna-list-icon { 
						width: calc(${effectiveIconSize}px + ${(effectiveIconSize / 1.15)}px); 
					}`
				); 
				normalcss.push( attributes.shapeBackground ? `
					${itemID} .wpmozo-bna-list-icon .hexagon:before, ${itemID} .wpmozo-bna-list-icon .hexagon:after, ${itemID} .wpmozo-bna-list-icon .hexagon { 
						background-color: ${attributes.shapeBackground}; 
					}` : '' 
				);
				hovercss.push( attributes.shapeHoverBackground ? `
					${itemID} .wpmozo-bna-list-icon:hover .hexagon:before,
					${itemID} .wpmozo-bna-list-icon:hover .hexagon:after,
					${itemID} .wpmozo-bna-list-icon:hover .hexagon,
					${itemID}.is_hover .wpmozo-bna-list-icon .hexagon:before,
					${itemID}.is_hover .wpmozo-bna-list-icon .hexagon:after,
					${itemID}.is_hover .wpmozo-bna-list-icon .hexagon { 
						background-color: ${attributes.shapeHoverBackground}; 
					}` : '' 
				);
			} else {
				if( true === attributes.enableShapeBorder ){
					normalcss.push( attributes.shapeBorderColor ? `${itemID} .wpmozo-bna-list-icon i { border:2px solid `+attributes.shapeBorderColor+`;}` : '');
					hovercss.push( attributes.shapeBorderHoverColor ? `${itemID} .wpmozo-bna-list-icon:hover i, ${itemID}.is_hover .wpmozo-bna-list-icon i { border-color: ${attributes.shapeBorderHoverColor} !important;}` : '');
				}
				normalcss.push(attributes.shapeBackground ? `${itemID} .wpmozo-bna-list-icon i { background-color:`+attributes.shapeBackground+`;}` : '' );
				hovercss.push(attributes.shapeHoverBackground ? `${itemID} .wpmozo-bna-list-icon:hover i, ${itemID}.is_hover .wpmozo-bna-list-icon i { background-color: ${attributes.shapeHoverBackground};}` : '' );
			}
		}
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `${normalcss.filter(Boolean).join('\n')}\n${hovercss.filter(Boolean).join('\n')}` : '';
	
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
