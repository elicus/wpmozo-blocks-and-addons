import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {

     // Re-run when clientId changes
	const toConvertStyles = [
    	'textNormal',
        'textHover',
        'item'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );
    let iconFontSize = attributes.parentAtts ? attributes.parentAtts.iconFontSize : '';


	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	if ( undefined === attributes.itemBackgroundColor ) {
		normalcss.push(`${(attributes.itemBackgroundGradient) ? `background:` +attributes.itemBackgroundGradient+`;` : ''}`);
	} else {
		normalcss.push(`${(attributes.itemBackgroundColor) ? `background:` +attributes.itemBackgroundColor+`;` : ''}`);
	}
	normalcss.push(`${convertedStyle.item || ''}`);

	normalcss.push(
		( attributes.textNormalColor || convertedStyle.textNormal )
		? `.wpmozo-bna-list-item-text p { 
				${attributes.textNormalColor ? `color: ${attributes.textNormalColor};` : ''} 
				${convertedStyle.textNormal || ''} 
			}`
		: ''
	);
	normalcss.push(
		( attributes.textHoverColor || convertedStyle.textHover )
		? `.wpmozo-bna-list-item-text p:hover { 
				${attributes.textHoverColor ? `color: ${attributes.textHoverColor};` : ''} 
				${convertedStyle.textHover || ''} 
			}`
		: ''
	);

	normalcss.push( iconFontSize ? `.wpmozo-bna-list-icon i { font-size: `+ iconFontSize+`px;}` : '' );
	
	if ( 'icon' === attributes.markerType ) {
		normalcss.push( attributes.iconColor ? `.wpmozo-bna-list-icon i { color:`+ attributes.iconColor+`;}` : '' );
		
		if( true === attributes.styleIcon ){
			if( 'hexagon' === attributes.iconShape ){
				if( true === attributes.enableShapeBorder ){
					normalcss.push( attributes.shapeBorderColor ? `
						.wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex { 
							box-shadow: 2px 0px 0px 0px inset `+ attributes.shapeBorderColor + `, -2px 0px 0px 0px inset `+ attributes.shapeBorderColor +`;
						} 
						.wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:after {
							border-right: 2px solid ` + attributes.shapeBorderColor + `;
							border-bottom: 2px solid ` + attributes.shapeBorderColor + `;
							transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate( 72%, 27%);
							width: 55%;
							height: 100%;
						}
						.wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:before {
							border-top: 2px solid` + attributes.shapeBorderColor + `;
							border-left: 2px solid` + attributes.shapeBorderColor + `;
							transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%);
							width: 55%;
							height: 100%;
						}` : '' 
					);
				} else {
					normalcss.push(`
						.wpmozo-bna-list-icon .hexagon:after{ 
							transform: rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%); width: 55%; 
						} 
						.wpmozo-bna-list-icon .hexagon:before { 
							transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%); width: 55%; 
						}`
					);
				}
				normalcss.push(parentAttributes.iconFontSize ? `
					.wpmozo-bna-list-icon { 
						width: calc(${parentAttributes.iconFontSize}px + ${(parentAttributes.iconFontSize / 1.15)}px); 
					}` : ''
				); 
				normalcss.push( attributes.shapeBackground ? `
					.wpmozo-bna-list-icon .hexagon:before, .wpmozo-bna-list-icon .hexagon:after, .wpmozo-bna-list-icon .hexagon { 
						background-color: ${attributes.shapeBackground}; 
					}` : '' 
				);
			} else {
				if( true === attributes.enableShapeBorder ){
					normalcss.push( attributes.shapeBorderColor ? `.wpmozo-bna-list-icon i { border:2px solid `+attributes.shapeBorderColor+`;}` : '');
				}
			}
			normalcss.push(attributes.shapeBackground ? `.wpmozo-bna-list-icon i { background-color:`+attributes.shapeBackground+`;}` : '' );
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