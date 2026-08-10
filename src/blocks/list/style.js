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

	normalcss.push(
		( attributes.iconColor || attributes.iconFontSize )
		? `.wpmozo-bna-list-icon i { 
				${attributes.iconColor ? `color: ${attributes.iconColor};` : ''} 
				${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize}px;` : ''} 
			}`
		: ''
	);

	hovercss.push(
		( attributes.iconHoverColor )
		? `.wpmozo-bna-list-item:hover .wpmozo-bna-list-icon i, #block-${attributes.ID}.is_hover .wpmozo-bna-list-icon i { 
				color: ${attributes.iconHoverColor}; 
			}`
		: ''
	);

	normalcss.push(
		attributes.listAlignment
		? `.wpmozo-bna-list-layout.wpmozo-bna-list-default, .wpmozo-bna-list-layout.wpmozo-bna-list-default .block-editor-block-list__layout { 
				align-items: ${'right' === attributes.listAlignment ? 'flex-end' : ( 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment )}; 
			}`
		: ''
	);

	normalcss.push(
		attributes.listAlignment
		? `.wpmozo-bna-list-layout.wpmozo-bna-list-inline, .wpmozo-bna-list-layout.wpmozo-bna-list-inline .block-editor-block-list__layout { 
				display: flex; 
				justify-content: ${'right' === attributes.listAlignment ? 'flex-end' : ( 'left' === attributes.listAlignment ? 'flex-start' : attributes.listAlignment )}; 
				flex-flow: row wrap; 
			}`
		: ''
	);

	normalcss.push(
		( attributes.textColor || attributes.indentation || convertedStyle.text )
		? `.wpmozo-bna-list-item-text { 
				${attributes.textColor ? `color: ${attributes.textColor};` : ''} 
				${attributes.indentation ? `text-indent: ${attributes.indentation}px;` : ''} 
				${convertedStyle.text || ''} 
			}`
		: ''
	);

	hovercss.push(
		( attributes.textHoverColor || convertedStyle.textHover )
		? `.wpmozo-bna-list-item:hover .wpmozo-bna-list-item-text, #block-${attributes.ID}.is_hover .wpmozo-bna-list-item-text { 
				${attributes.textHoverColor ? `color: ${attributes.textHoverColor};` : ''} 
				${convertedStyle.textHover || ''} 
			}`
		: ''
	);

	normalcss.push(
		( attributes.linkColor || convertedStyle.link )
		? `.wpmozo-bna-list-item-text a { 
				${attributes.linkColor ? `color: ${attributes.linkColor};` : ''} 
				${convertedStyle.link || ''} 
			}`
		: ''
	);

	hovercss.push(
		( attributes.linkHoverColor || convertedStyle.linkHover )
		? `.wpmozo-bna-list-item:hover .wpmozo-bna-list-item-text a, #block-${attributes.ID}.is_hover .wpmozo-bna-list-item-text a { 
				${attributes.linkHoverColor ? `color: ${attributes.linkHoverColor};` : ''} 
				${convertedStyle.linkHover || ''} 
			}`
		: ''
	);

	normalcss.push( attributes.imageWidth ? `.wpmozo-bna-marker-image {  width: ${attributes.imageWidth}px; }` : '' );
	
	if ( 'default' === attributes.layout ) {
		normalcss.push(
			( attributes.dividerSize || attributes.dividerStyle || attributes.dividerColor || convertedStyle.divider )
			? `.wpmozo-bna-list-divider { 
					${attributes.dividerSize ? `border-top-width: ${attributes.dividerSize}px;` : ''} 
					${attributes.dividerStyle ? `border-style: ${attributes.dividerStyle};` : ''} 
					${attributes.dividerColor ? `border-color: ${attributes.dividerColor};` : ''} 
					${convertedStyle.divider || ''} 
				}`
			: ''
		);
		hovercss.push(
			( attributes.dividerHoverColor || convertedStyle.dividerHover )
			? `.wpmozo-bna-list-item:hover .wpmozo-bna-list-divider, #block-${attributes.ID}.is_hover .wpmozo-bna-list-divider { 
					${attributes.dividerHoverColor ? `border-color: ${attributes.dividerHoverColor};` : ''} 
					${convertedStyle.dividerHover || ''} 
				}`
			: ''
		);
	} else {
		normalcss.push(
			( attributes.dividerSize || attributes.dividerStyle || attributes.dividerColor || convertedStyle.divider )
			? `.wpmozo-bna-list-divider { 
					${attributes.dividerSize ? `border-right-width: ${attributes.dividerSize}px;` : ''} 
					${attributes.dividerStyle ? `border-style: ${attributes.dividerStyle};` : ''} 
					${attributes.dividerColor ? `border-color: ${attributes.dividerColor};` : ''} 
					${convertedStyle.divider || ''} 
				}`
			: ''
		);
		hovercss.push(
			( attributes.dividerHoverColor || convertedStyle.dividerHover )
			? `.wpmozo-bna-list-item:hover .wpmozo-bna-list-divider, #block-${attributes.ID}.is_hover .wpmozo-bna-list-divider { 
					${attributes.dividerHoverColor ? `border-color: ${attributes.dividerHoverColor};` : ''} 
					${convertedStyle.dividerHover || ''} 
				}`
			: ''
		);
	}

	if ( undefined === attributes.globalItemBackgroundColor ) {
		normalcss.push(
			attributes.globalItemBackgroundGradient
			? `.wpmozo-bna-list-item { 
					background: ${attributes.globalItemBackgroundGradient}; 
				}`
			: ''
		);
	} else {
		normalcss.push(
			attributes.globalItemBackgroundColor
			? `.wpmozo-bna-list-item { 
					background: ${attributes.globalItemBackgroundColor}; 
				}`
			: ''
		);
	}

	if ( attributes.globalItemHoverBackgroundColor || attributes.globalItemHoverBackgroundGradient ) {
		hovercss.push(
			`.wpmozo-bna-list-item:hover, #block-${attributes.ID}.is_hover .wpmozo-bna-list-item { 
				${attributes.globalItemHoverBackgroundColor ? `background: ${attributes.globalItemHoverBackgroundColor};` : ''} 
				${attributes.globalItemHoverBackgroundGradient ? `background: ${attributes.globalItemHoverBackgroundGradient};` : ''} 
			}`
		);
	}

	if('inline' === attributes.layout){
		normalcss.push('.wpmozo-bna-list-item{width:auto;}');
	} else {
		normalcss.push('.list-item-wrap {align-items: center;width: 100%;}');
		if('right'=== attributes.listAlignment){
			normalcss.push('.list-item-wrap {grid-template-columns: 1fr auto auto;} .wpmozo-bna-list-icon.use-icon {justify-content: flex-end;} .wpmozo-bna-list-item-text {justify-content: flex-end;}');
		} else if('left' === attributes.listAlignment){
			normalcss.push('.list-item-wrap {grid-template-columns: auto 1fr;} .wpmozo-bna-list-icon.use-icon {align-items: center;justify-content: flex-start;} .wpmozo-bna-list-item-text {align-items: center;justify-content: flex-start;}');
		} else {
			normalcss.push('.list-item-wrap {grid-template-columns: 1fr 1fr;} .wpmozo-bna-list-icon.use-icon {align-items: center;justify-content: flex-end;} .wpmozo-bna-list-item-text {align-items: center;justify-content: flex-start;}');
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
