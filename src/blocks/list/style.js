import {convertInlineStyleStr} from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId, isEdit }) => {

	const { iconFontSize, separatorColor } = attributes,
	toConvertStyles = [
    	'text',
        'link',
        'divider'
    ];
    let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.iconColor || attributes.iconFontSize )
		? `.wpmozo-bna-list-icon i { 
				${attributes.iconColor ? `color: ${attributes.iconColor};` : ''} 
				${attributes.iconFontSize ? `font-size: ${attributes.iconFontSize}px;` : ''} 
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

	normalcss.push(
		( attributes.linkColor || convertedStyle.link )
		? `.wpmozo-bna-list-item-text a { 
				${attributes.linkColor ? `color: ${attributes.linkColor};` : ''} 
				${convertedStyle.link || ''} 
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