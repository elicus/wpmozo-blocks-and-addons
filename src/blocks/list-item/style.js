import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

     // Re-run when clientId changes
	const toConvertStyles = [
    	'textNormal',
        'textHover',
        'item'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );
    let iconFontSize = attributes.parentAtts ? attributes.parentAtts.iconFontSize : '';


	let styles = `#block-${clientId}.wpmozo-bna-list-item{`;
	if ( undefined === attributes.itemBackgroundColor ) {
		styles += `${(attributes.itemBackgroundGradient) ? `background:` +attributes.itemBackgroundGradient+`;` : ''}`;
	} else {
        styles += `${(attributes.itemBackgroundColor) ? `background:` +attributes.itemBackgroundColor+`;` : ''}`;
	}
    styles += `${(convertedStyle.item) ? convertedStyle.item : ''}`;

	styles += ` .wpmozo-bna-list-item-text p { ${(attributes.textNormalColor) ? `color:` +attributes.textNormalColor+`;` : ''} ${ (convertedStyle.textNormal) ? convertedStyle.textNormal : ''} } .wpmozo-bna-list-item-text p:hover { ${ (attributes.textHoverColor)?`color:`+ attributes.textHoverColor+`;` : '' } ${ (convertedStyle.textHover) ? convertedStyle.textHover : '' }
		} ${ (iconFontSize)?`.wpmozo-bna-list-icon i { font-size: `+ iconFontSize+`px;}` : '' } `;

	if ( 'icon' === attributes.markerType ) {
		styles += `${ (attributes.iconColor) ? `.wpmozo-bna-list-icon i { color:`+ attributes.iconColor+`;}` : '' }`;
		if( true === attributes.styleIcon ){
			if( 'hexagon' === attributes.iconShape ){
				if( true === attributes.enableShapeBorder ){
					styles += `${ (attributes.shapeBorderColor) ? `.wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex { box-shadow: 2px 0px 0px 0px inset `+ attributes.shapeBorderColor + `, -2px 0px 0px 0px inset `+ attributes.shapeBorderColor +`;} .wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:after {border-right: 2px solid ` + attributes.shapeBorderColor + `;border-bottom: 2px solid ` + attributes.shapeBorderColor + `;transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate( 72%, 27%);width: 55%;height: 100%;}.wpmozo-bna-list-icon .hexagon.wpmozo-bna-border-hex:before {border-top: 2px solid` + attributes.shapeBorderColor + `;border-left: 2px solid` + attributes.shapeBorderColor + `;transform: rotate(45deg) skew(-15.8deg, -15.8deg) translate(-27%, -72%);width: 55%;height: 100%;}` : '' }`;
				} else {
					styles += `.wpmozo-bna-list-icon .hexagon:after{ transform: rotate(45deg) skew(-16deg, -16deg) translate( 72%, 27%); width: 55%; } .wpmozo-bna-list-icon .hexagon:before { transform: rotate(45deg) skew(-16deg, -16deg) translate(-27%, -72%); width: 55%; } `;
				}
				styles += ` ${ parentAttributes.iconFontSize ? `.wpmozo-bna-list-icon { width: calc(${parentAttributes.iconFontSize}px + ${(parentAttributes.iconFontSize / 1.15)}px); }` : ''} ${ attributes.shapeBackground ? `.wpmozo-bna-list-icon .hexagon:before, .wpmozo-bna-list-icon .hexagon:after, .wpmozo-bna-list-icon .hexagon { background-color: ${attributes.shapeBackground}; }` : '' }`;
			} else {
				if( true === attributes.enableShapeBorder ){
					styles += `${(attributes.shapeBorderColor) ? `.wpmozo-bna-list-icon i { border:2px solid `+attributes.shapeBorderColor+`;}` : ''}`;
				}
			}
			styles += `${ (attributes.shapeBackground) ? `.wpmozo-bna-list-icon i { background-color:`+attributes.shapeBackground+`;}` : '' }`;
		}
	}
	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
