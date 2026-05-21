import {convertInlineStyleStr, wpmozo_is_empty} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

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

	let styles = `#block-${clientId}{`;

	styles += `${attributes.toggleSwitchColor ? `.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:before { background-color: ${attributes.toggleSwitchColor}; }` : ''}`;

    styles += `${attributes.toggleSwitchOnState ? `.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:before { background-color: ${attributes.toggleSwitchOnState}; }` : ''}`;

    styles += `${attributes.toggleSwitchBackground ? `.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch { background-color: ${attributes.toggleSwitchBackground}; }` : ''}`;

    styles += `${attributes.toggleSwitchOnStateBackground ? `.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch { background-color: ${attributes.toggleSwitchOnStateBackground}; }` : ''}`;

    styles += `${attributes.toggleSwitchHoverColor ? `.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:hover::before { background-color: ${attributes.toggleSwitchHoverColor}; }` : ''}`;

    styles += `${attributes.toggleSwitchHoverOnState ? `.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:hover::before { background-color: ${attributes.toggleSwitchHoverOnState}; }` : ''}`;

    styles += `${attributes.toggleSwitchHoverBackground ? `.wpmozo-bna-toggle-button-wrap .wpmozo-bna-toggle-switch:hover { background-color: ${attributes.toggleSwitchHoverBackground}; }` : ''}`;

    styles += `${attributes.toggleSwitchHoverOnStateBackground ? `.wpmozo-bna-toggle-button-wrap input:checked + .wpmozo-bna-toggle-switch:hover { background-color: ${attributes.toggleSwitchHoverOnStateBackground}; }` : ''}`;

    styles += `${attributes.toggleSwitchAlignment ? `.wpmozo-bna-toggle-button-wrap { justify-content: ${attributes.toggleSwitchAlignment};${convertedStyle.toggleSwitchDimensions || ''} }` : ''}`;
    /*styles += convertedStyle.toggleSwitchDimensions || '';*/

    styles += `${attributes.titleOneColor || attributes.titleOneIconSpacing ||convertedStyle.titleOne ? `.wpmozo-bna-toggle-title-one, .wpmozo-bna-toggle-title-one > h5 { 
        ${attributes.titleOneColor ? `color: ${attributes.titleOneColor};` : ''} 
        ${attributes.titleOneIconSpacing ? `gap: ${attributes.titleOneIconSpacing}px;` : ''} 
    ${convertedStyle.titleOne || ''}}` : ''}`;
    /*styles += convertedStyle.titleOne || '';*/

    styles += `${attributes.titleTwoColor || attributes.titleTwoIconSpacing || convertedStyle.titleTwo ? `.wpmozo-bna-toggle-title-two, .wpmozo-bna-toggle-title-two > h5 { 
        ${attributes.titleTwoColor ? `color: ${attributes.titleTwoColor};` : ''} 
        ${attributes.titleTwoIconSpacing ? `gap: ${attributes.titleTwoIconSpacing}px;` : ''} 
    ${convertedStyle.titleTwo || ''}}` : ''}`;
    /*styles += convertedStyle.titleTwo || '';*/

    styles += `${attributes.titleOneIconSize || attributes.titleOneIconColor ? `.wpmozo-bna-toggle-title-one .icon-wrapper i { 
        ${attributes.titleOneIconSize ? `font-size: ${attributes.titleOneIconSize}px;` : ''} 
        ${attributes.titleOneIconColor ? `color: ${attributes.titleOneIconColor};` : ''} 
    }` : ''}`;

    styles += `${attributes.titleTwoIconSize || attributes.titleTwoIconColor ? `.wpmozo-bna-toggle-title-two .icon-wrapper i { 
        ${attributes.titleTwoIconSize ? `font-size: ${attributes.titleTwoIconSize}px;` : ''} 
        ${attributes.titleTwoIconColor ? `color: ${attributes.titleTwoIconColor};` : ''} 
    }` : ''}`;

    styles += `.wpmozo-bna-content-toggle-one { 
        ${attributes.contentOneBackground ? `background-color: ${attributes.contentOneBackground};` : ''} 
        ${attributes.contentOneAlignment ? `text-align: ${attributes.contentOneAlignment};` : ''} 
        ${attributes.contentOneColor ? `color: ${attributes.contentOneColor};` : ''} 
        ${convertedStyle.contentOne  || ''}
        ${convertedStyle.contentOneDimensions  || ''}

    }`;

    styles += `.wpmozo-bna-content-toggle-two { 
        ${attributes.contentTwoBackground ? `background-color: ${attributes.contentTwoBackground};` : ''} 
        ${attributes.contentTwoAlignment ? `text-align: ${attributes.contentTwoAlignment};` : ''} 
        ${attributes.contentTwoColor ? `color: ${attributes.contentTwoColor};` : ''} 
        ${convertedStyle.contentTwo  || ''}
        ${convertedStyle.contentTwoDimensions  || ''}

    }`;


	styles += `}`;

	return styles;

};

export default generateDynamicStyle;