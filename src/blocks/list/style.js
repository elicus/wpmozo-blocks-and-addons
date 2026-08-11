import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'text',
    	'textHover',
        'link',
        'linkHover',
        'divider',
        'dividerHover'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];

	const blockID = `#block-${attributes.ID}`;

	normalcss.push(
		( attributes.iconColor || attributes.iconFontSize )
		? `${blockID} .wpmozo-bna-list-icon i { 
				${attributes.iconColor ? `color: ${attributes.iconColor};` : ''} 
				${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize}px;` : ''} 
			}`
		: ''
	);

	hovercss.push(
		( attributes.iconHoverColor )
		? `${blockID} .wpmozo-bna-list-icon i:hover, ${blockID}.is_hover .wpmozo-bna-list-icon i { 
				color: ${attributes.iconHoverColor}; 
			}`
		: ''
	);

	normalcss.push(
		attributes.listAlignment
		? `${blockID} .wpmozo-bna-list-layout.wpmozo-bna-list-default, ${blockID} .wpmozo-bna-list-layout.wpmozo-bna-list-default .block-editor-block-list__layout { 
				align-items: ${'right' === attributes.listAlignment ? 'flex-end' : ( 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment )}; 
			}`
		: ''
	);

	normalcss.push(
		attributes.listAlignment
		? `${blockID} .wpmozo-bna-list-layout.wpmozo-bna-list-inline, ${blockID} .wpmozo-bna-list-layout.wpmozo-bna-list-inline .block-editor-block-list__layout { 
				display: flex; 
				justify-content: ${'right' === attributes.listAlignment ? 'flex-end' : ( 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment )}; 
				flex-flow: row wrap; 
			}`
		: ''
	);

	normalcss.push(
		( attributes.textColor || attributes.indentation || convertedStyle.text )
		? `${blockID} .wpmozo-bna-list-item-text { 
				${attributes.textColor ? `color: ${attributes.textColor};` : ''} 
				${attributes.indentation ? `text-indent: ${attributes.indentation}px;` : ''} 
				${convertedStyle.text || ''} 
			}`
		: ''
	);

	hovercss.push(
		( attributes.textHoverColor || convertedStyle.textHover )
		? `${blockID} .wpmozo-bna-list-item-text p:hover, ${blockID}.is_hover .wpmozo-bna-list-item-text p { 
				${attributes.textHoverColor ? `color: ${attributes.textHoverColor};` : ''} 
				${convertedStyle.textHover || ''} 
			}`
		: ''
	);

	normalcss.push(
		( attributes.linkColor || convertedStyle.link )
		? `${blockID} .wpmozo-bna-list-item-text a { 
				${attributes.linkColor ? `color: ${attributes.linkColor};` : ''} 
				${convertedStyle.link || ''} 
			}`
		: ''
	);

	hovercss.push(
		( attributes.linkHoverColor || convertedStyle.linkHover )
		? `${blockID} .wpmozo-bna-list-item-text a:hover, ${blockID}.is_hover .wpmozo-bna-list-item-text a { 
				${attributes.linkHoverColor ? `color: ${attributes.linkHoverColor};` : ''} 
				${convertedStyle.linkHover || ''} 
			}`
		: ''
	);

	normalcss.push( attributes.imageWidth ? `${blockID} .wpmozo-bna-marker-image { width: ${attributes.imageWidth}px; }` : '' );
	
	if ( 'default' === attributes.layout ) {
		normalcss.push(
			( attributes.dividerSize || attributes.dividerStyle || attributes.dividerColor || convertedStyle.divider )
			? `${blockID} .wpmozo-bna-list-divider { 
					${attributes.dividerSize ? `border-top-width: ${attributes.dividerSize}px;` : ''} 
					${attributes.dividerStyle ? `border-style: ${attributes.dividerStyle};` : ''} 
					${attributes.dividerColor ? `border-color: ${attributes.dividerColor};` : ''} 
					${convertedStyle.divider || ''} 
				}`
			: ''
		);
		hovercss.push(
			( attributes.dividerHoverColor || convertedStyle.dividerHover )
			? `${blockID} .wpmozo-bna-list-divider:hover, ${blockID}.is_hover .wpmozo-bna-list-divider { 
					${attributes.dividerHoverColor ? `border-color: ${attributes.dividerHoverColor};` : ''} 
					${convertedStyle.dividerHover || ''} 
				}`
			: ''
		);
	} else {
		normalcss.push(
			( attributes.dividerSize || attributes.dividerStyle || attributes.dividerColor || convertedStyle.divider )
			? `${blockID} .wpmozo-bna-list-divider { 
					${attributes.dividerSize ? `border-right-width: ${attributes.dividerSize}px;` : ''} 
					${attributes.dividerStyle ? `border-style: ${attributes.dividerStyle};` : ''} 
					${attributes.dividerColor ? `border-color: ${attributes.dividerColor};` : ''} 
					${convertedStyle.divider || ''} 
				}`
			: ''
		);
		hovercss.push(
			( attributes.dividerHoverColor || convertedStyle.dividerHover )
			? `${blockID} .wpmozo-bna-list-divider:hover, ${blockID}.is_hover .wpmozo-bna-list-divider { 
					${attributes.dividerHoverColor ? `border-color: ${attributes.dividerHoverColor};` : ''} 
					${convertedStyle.dividerHover || ''} 
				}`
			: ''
		);
	}

	if ( undefined === attributes.globalItemBackgroundColor ) {
		normalcss.push(
			attributes.globalItemBackgroundGradient
			? `${blockID} .wpmozo-bna-list-item { 
					background: ${attributes.globalItemBackgroundGradient}; 
				}`
			: ''
		);
	} else {
		normalcss.push(
			attributes.globalItemBackgroundColor
			? `${blockID} .wpmozo-bna-list-item { 
					background: ${attributes.globalItemBackgroundColor}; 
				}`
			: ''
		);
	}

	if ( attributes.globalItemHoverBackgroundColor || attributes.globalItemHoverBackgroundGradient ) {
		hovercss.push(
			`${blockID} .wpmozo-bna-list-item:hover, ${blockID}.is_hover .wpmozo-bna-list-item { 
				${attributes.globalItemHoverBackgroundColor ? `background: ${attributes.globalItemHoverBackgroundColor};` : ''} 
				${attributes.globalItemHoverBackgroundGradient ? `background: ${attributes.globalItemHoverBackgroundGradient};` : ''} 
			}`
		);
	}

	if('inline' === attributes.layout){
		normalcss.push(`${blockID} .wpmozo-bna-list-item{width:auto;}`);
	} else {
		normalcss.push(`${blockID} .list-item-wrap {align-items: center;width: 100%;}`);
		if('right'=== attributes.listAlignment){
			normalcss.push(`${blockID} .list-item-wrap {grid-template-columns: 1fr auto auto;} ${blockID} .wpmozo-bna-list-icon.use-icon {justify-content: flex-end; justify-self: end;} ${blockID} .wpmozo-bna-list-item-text {justify-content: flex-end; justify-self: end;}`);
		} else if('left' === attributes.listAlignment){
			normalcss.push(`${blockID} .list-item-wrap {grid-template-columns: auto 1fr;} ${blockID} .wpmozo-bna-list-icon.use-icon {align-items: center;justify-content: flex-start; justify-self: start;} ${blockID} .wpmozo-bna-list-item-text {align-items: center;justify-content: flex-start; justify-self: start;}`);
		} else {
			normalcss.push(`${blockID} .list-item-wrap {grid-template-columns: 1fr 1fr;} ${blockID} .wpmozo-bna-list-icon.use-icon {align-items: center;justify-content: flex-end; justify-self: end;} ${blockID} .wpmozo-bna-list-item-text {align-items: center;justify-content: flex-start; justify-self: start;}`);
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
