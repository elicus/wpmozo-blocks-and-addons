import {convertInlineStyleStr} from '../../common/utils.js';
const generateDynamicStyle = ({attributes, clientId, isEdit}) => {

    const {iconFontSize, separatorColor} = attributes,
        toConvertStyles = [
            'title',
            'percentage',
            'bar',
        ];
    let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

    let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};


	normalcss.push(
		(attributes.titleColor || attributes.titleAlign || convertedStyle.title) 
		? `.wpmozo-bna-bar-counter-title {
				${attributes.titleColor ? `color:${attributes.titleColor};` : ''}
				${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
				${convertedStyle.title || ''}
			}`
		: ''
	);
	hovercss.push(
		attributes.titleHoverColor 
		? `.wpmozo-bna-bar-counter-title:hover${isEditor('.wpmozo-bna-bar-counter-title')}{ color:${attributes.titleHoverColor}; }` : ''
	);

	normalcss.push(
		(attributes.percentageColor || attributes.percentageAlign || convertedStyle.percentage) 
		? `.wpmozo-bna-bar-counter-percent {
				${attributes.percentageColor ? `color:${attributes.percentageColor};` : ''}
				${attributes.percentageAlign ? `text-align: ${attributes.percentageAlign};` : ''}
				${convertedStyle.percentage || ''}
			}`
		: ''
	);
	hovercss.push(
		attributes.percentageHoverColor 
		? `.wpmozo-bna-bar-counter-percent:hover${isEditor('.wpmozo-bna-bar-counter-percent')}{ color:${attributes.percentageHoverColor}; }` : ''
	);

	normalcss.push( 
		convertedStyle.bar
		? `.wpmozo-bna-bar-counter .layout1 .wpmozo-bna-bar-counter-bar-wrapper, .wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-chunks { ${convertedStyle.bar} }` 
		: '' 
	);

	if (true === attributes.stripeAnimation) {
		normalcss.push( 
			`.wpmozo-bna-bar-counter-animated-striped-bar:before { ${attributes.stripeAnimationSpeed ? `animation-duration: ${attributes.stripeAnimationSpeed}s !important;` : ''} animation-name: wpmozo-animated-stripe;}`
		);
	}

	if ('classic' === attributes.filledBackgroundType) {
		normalcss.push( 
			attributes.filledBackgroundColor
			? `.wpmozo-bna-bar-counter-filled-bar, .wpmozo-bna-bar-counter-filled-chunks:before { background-color: ${attributes.filledBackgroundColor}; }` 
			: '' 
		);
	}
	
	if ('gradient' === attributes.filledBackgroundType) {
		normalcss.push( 
			attributes.filledBackgroundGradient
			? `.wpmozo-bna-bar-counter-filled-bar, .wpmozo-bna-bar-counter-filled-chunks:before { background-image: ${attributes.filledBackgroundGradient};}` 
			: '' 
		);
	}
	if ('classic' === attributes.backgroundType) {
		normalcss.push( 
			attributes.backgroundColor
			? `.wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-bar, .wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-chunks.wpmozo-bna-bar-counter-empty-chunks { background-color: ${attributes.backgroundColor}; }` 
			: '' 
		);
	}
	if ('gradient' === attributes.backgroundType) {
		normalcss.push( 
			attributes.backgroundGradient
			? `.wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-bar, .wpmozo-bna-bar-counter .wpmozo-bna-bar-counter-chunks.wpmozo-bna-bar-counter-empty-chunks { background-image: ${attributes.backgroundGradient}; }` 
			: '' 
		);
	}
	normalcss.push( 
		attributes.useCustomChunksSize
		? `.wpmozo-bna-bar-counter-bar-wrapper .wpmozo-bna-bar-counter-chunks { 
				${attributes.useChunksWidth ? `max-width:${attributes.useChunksWidth};` : ''}
				${attributes.useChunksHeight ? `height: ${attributes.useChunksHeight};` : ''}
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
};

export default generateDynamicStyle;