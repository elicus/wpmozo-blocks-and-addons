import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'titleOne', 
        'titleTwo', 
        'toggleSwitchDimensions', 
        'contentOne', 
        'contentOneDimensions', 
        'contentTwo', 
        'contentTwoDimensions'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let normalcss = [],
	    hovercss  = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};


    normalcss.push(
		attributes.toggleSwitchColor 
        ? `.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:before { background-color: ${attributes.toggleSwitchColor}; }` : ''
	);
    
    normalcss.push(
		attributes.toggleSwitchOnState 
        ? `.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:before { background-color: ${attributes.toggleSwitchOnState}; }` 
        : ''
	);
    
    normalcss.push(
		attributes.toggleSwitchBackground 
        ? `.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch { background-color: ${attributes.toggleSwitchBackground}; }` 
        : ''
	);
    
    normalcss.push(
		attributes.toggleSwitchOnStateBackground 
        ? `.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch { background-color: ${attributes.toggleSwitchOnStateBackground}; }` 
        : ''
	);
    
    normalcss.push(
		attributes.toggleSwitchHoverColor 
        ? `.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:hover::before { background-color: ${attributes.toggleSwitchHoverColor}; }` 
        : ''
	);
    
    normalcss.push(
		attributes.toggleSwitchHoverOnState 
        ? `.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:hover::before { background-color: ${attributes.toggleSwitchHoverOnState}; }` 
        : ''
	);
    
    normalcss.push(
		attributes.toggleSwitchHoverBackground 
        ? `.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:hover { background-color: ${attributes.toggleSwitchHoverBackground}; }` 
        : ''
	);
    hovercss.push(
		attributes.toggleSwitchHoverOnStateBackground 
        ? `.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:hover${isEditor('.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch')} { background-color: ${attributes.toggleSwitchHoverOnStateBackground}; }` 
        : ''
	);

	normalcss.push(
		(attributes.toggleSwitchAlignment || convertedStyle.toggleSwitchDimensions) 
		? `.wpmozo-bna-toggle-button-wrap {
				${attributes.toggleSwitchAlignment ? `justify-content: ${attributes.toggleSwitchAlignment};` : ''}
				${convertedStyle.toggleSwitchDimensions || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.titleOneColor || attributes.titleOneIconSpacing || convertedStyle.titleOne ) 
		? `.wpmozo-bna-toggle-title-one, .wpmozo-bna-toggle-title-one > h5 {
				${attributes.titleOneColor ? `color: ${attributes.titleOneColor};` : ''}
                ${attributes.titleOneIconSpacing ? `gap: ${attributes.titleOneIconSpacing}px;` : ''}
				${convertedStyle.titleOne || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.titleTwoColor || attributes.titleTwoIconSpacing || convertedStyle.titleTwo ) 
		? `.wpmozo-bna-toggle-title-two, .wpmozo-bna-toggle-title-two > h5 {
				${attributes.titleTwoColor ? `color: ${attributes.titleTwoColor};` : ''}
                ${attributes.titleTwoIconSpacing ? `gap: ${attributes.titleTwoIconSpacing}px;` : ''}
				${convertedStyle.titleTwo || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.titleOneIconSize || attributes.titleOneIconColor ) 
		? `.wpmozo-bna-toggle-title-one .icon-wrapper i {
				${attributes.titleOneIconSize ? `font-size: ${attributes.titleOneIconSize}px;` : ''} 
                ${attributes.titleOneIconColor ? `color: ${attributes.titleOneIconColor};` : ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.titleOneIconSize || attributes.titleOneIconColor ) 
		? `.wpmozo-bna-toggle-title-two .icon-wrapper i {
				${attributes.titleTwoIconSize ? `font-size: ${attributes.titleTwoIconSize}px;` : ''}
                ${attributes.titleTwoIconColor ? `color: ${attributes.titleTwoIconColor};` : ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.contentOneBackground || attributes.contentOneAlignment || attributes.contentOneColor || convertedStyle.contentOne || convertedStyle.contentOneDimensions) 
		? `.wpmozo-bna-content-toggle-one {
				${attributes.contentOneBackground ? `background-color: ${attributes.contentOneBackground};` : ''} 
                ${attributes.contentOneAlignment ? `text-align: ${attributes.contentOneAlignment};` : ''} 
                ${attributes.contentOneColor ? `color: ${attributes.contentOneColor};` : ''} 
                ${convertedStyle.contentOne  || ''}
                ${convertedStyle.contentOneDimensions  || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.contentTwoBackground || attributes.contentTwoAlignment || attributes.contentTwoColor || convertedStyle.contentTwo || convertedStyle.contentTwoDimensions) 
		? `.wpmozo-bna-content-toggle-two {
				${attributes.contentTwoBackground ? `background-color: ${attributes.contentTwoBackground};` : ''} 
                ${attributes.contentTwoAlignment ? `text-align: ${attributes.contentTwoAlignment};` : ''} 
                ${attributes.contentTwoColor ? `color: ${attributes.contentTwoColor};` : ''} 
                ${convertedStyle.contentTwo  || ''}
                ${convertedStyle.contentTwoDimensions  || ''}
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