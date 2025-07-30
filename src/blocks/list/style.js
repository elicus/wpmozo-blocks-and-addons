import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'text',
        'link',
        'divider'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${clientId}{`;

	styles += `
		.wpmozo-bna-list-icon i { ${(attributes.iconColor) ? `color : ` +attributes.iconColor+ `;` : '' } ${(attributes.iconFontSize) ? `font-size: ` + attributes.iconFontSize+ `px;` : '' } } .wpmozo-bna-list-layout.wpmozo-bna-list-default, .wpmozo-bna-list-layout.wpmozo-bna-list-default .block-editor-block-list__layout { align-items: ${'right' === attributes.listAlignment ? `flex-end;` : ( 'left' === attributes.listAlignment ? `flex-start;` : attributes.listAlignment+`;` )} }.wpmozo-bna-list-layout.wpmozo-bna-list-inline, .wpmozo-bna-list-layout.wpmozo-bna-list-inline .block-editor-block-list__layout { display : flex; justify-content: ${'right' === attributes.listAlignment ? `flex-end` : ( 'left' === attributes.listAlignment ? `flex-start` : attributes.listAlignment )}; flex-flow: row wrap; } .wpmozo-bna-list-item-text { ${(attributes.textColor) ? `color: ` +attributes.textColor+ `;`: '' } ${(attributes.indentation) ? `text-indent : ` +attributes.indentation+ `px;`: '' } ${(convertedStyle.text) ? convertedStyle.text : '' } } .wpmozo-bna-list-item-text a { ${(attributes.linkColor) ? `color: `+ attributes.linkColor + `;`: '' } ${(convertedStyle.link) ? convertedStyle.link : '' } } ${(attributes.imageWidth) ? `.wpmozo-bna-marker-image { width: ` +attributes.imageWidth + `px;}` : '' }
	`;
	if ( 'default' === attributes.layout ) {
		styles += `.wpmozo-bna-list-divider { ${ (attributes.dividerSize) ? `border-top-width:`+ attributes.dividerSize + `px;` : '' } ${(attributes.dividerStyle) ? `border-style: `+ attributes.dividerStyle + `;` : '' } ${(attributes.dividerColor) ? `border-color: ` + attributes.dividerColor + `;` : '' } ${(convertedStyle.divider) ? convertedStyle.divider : '' } } `;
	} else {
        styles += `.wpmozo-bna-list-divider { ${ (attributes.dividerSize) ? `border-right-width:`+ attributes.dividerSize + `px;` : '' } ${(attributes.dividerStyle) ? `border-style: `+ attributes.dividerStyle + `;` : '' } ${(attributes.dividerColor) ? `border-color: ` + attributes.dividerColor + `;` : '' } ${(convertedStyle.divider) ? convertedStyle.divider : '' } }`;
	}

	if ( undefined === attributes.globalItemBackgroundColor ) {
		styles += `${ (attributes.globalItemBackgroundGradient) ? `.wpmozo-bna-list-item { background:`+ attributes.globalItemBackgroundGradient + `; }` : '' }`;
	} else {
        styles += `${ (attributes.globalItemBackgroundColor) ? `.wpmozo-bna-list-item { background:`+ attributes.globalItemBackgroundColor + `; }` : '' }`;
	}
	
	styles += `}`;

	return styles;
};

export default generateDynamicStyle;