import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {
	
	const parent = '#block-'+clientId,
	toConvertStyles = [
    	'image',
    	'imageHover'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	    hovercss  = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};


    normalcss.push(`
		${(attributes.verticalAlign) ? `top: ${attributes.verticalAlign };` : ''}
		${(attributes.horizontalAlign) ? `left: ${attributes.horizontalAlign};` : ''}
		${(attributes.animationEffect) ? `animation-name: wpmozo_float_${attributes.animationEffect};` : ''}
		${(attributes.animationDuration) ? `animation-duration: ${attributes.animationDuration}ms;` : ''}
		animation-direction: alternate;
		${(attributes.animationRepeat) ? `animation-iteration-count: ${attributes.animationRepeat};` : ''}
		${(attributes.speedCurve) ? `animation-timing-function: ${attributes.speedCurve};` : ''}
		${(attributes.speedCurve) ? `animation-delay: ${attributes.animationDelay}ms;` : ''}`
	);

	normalcss.push(
		(attributes.imagewidth || attributes.imageheight || convertedStyle.image)
        ? `.floating-image{
				${ (attributes.imagewidth) ? `width:${ attributes.imagewidth};` : '' } 
				${ (attributes.imageheight) ? `height:${ attributes.imageheight};` : '' } 
				${convertedStyle.image || ''} 
			}`
		: ''
	);

	hovercss.push(
		(attributes.imageborderHover || convertedStyle.imageHover)
		? `.floating-image:hover${isEditor('.floating-image')} {
			${convertedStyle.imageHover || ''}
		}`
		: ''
	);
	
	normalcss.push(
		(attributes.containerHeight) 
		? `.wpmozo-bna-floating-image-wrapper { 
				height:${ attributes.containerHeight}; 
			}.floating-image-item img {
				max-height:${ attributes.containerHeight}; 
			}` 
		: ''
	);
	
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
};

export default generateDynamicStyle;
