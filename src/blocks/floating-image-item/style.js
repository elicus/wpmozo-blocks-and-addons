import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {
	
	const parent = '#block-'+clientId,
	toConvertStyles = [
    	'image'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${clientId}{`;

		styles += `
			${(attributes.verticalAlign) ? `top: `+attributes.verticalAlign + `;` : ''}
			${(attributes.horizontalAlign) ? `left: `+attributes.horizontalAlign + `;` : ''}
			${(attributes.animationEffect) ? `animation-name: wpmozo_float_`+attributes.animationEffect + `;` : ''}
			${(attributes.animationDuration) ? `animation-duration: `+attributes.animationDuration + `ms;` : ''}
			animation-direction: alternate;
			${(attributes.animationRepeat) ? `animation-iteration-count: `+attributes.animationRepeat + `;` : ''}
			${(attributes.speedCurve) ? `animation-timing-function: `+attributes.speedCurve + `;` : ''}
			${(attributes.speedCurve) ? `animation-delay: `+attributes.animationDelay + `ms;` : ''}

		.floating-image { 
			${ (attributes.imagewidth) ? `width:`+ attributes.imagewidth + `;` : '' } 
			${ (attributes.imageheight) ? `height:`+ attributes.imageheight + `;` : '' } 
			${convertedStyle.image || ''} 
		}`;

		styles += `${ (attributes.containerHeight) ? `.wpmozo-bna-floating-image-wrapper { height:`+ attributes.containerHeight + `; }.floating-image-item img { max-height:`+ attributes.containerHeight + `; }` : '' }`;
	
	styles += `}`;

	return styles;
};

export default generateDynamicStyle;