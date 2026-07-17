import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ({ attributes, clientId }) => {
	const { iconFontSize, separatorColor } = attributes,
		parent = '#block-' + clientId,
		toConvertStyles = [
			'title',
			'global',
			'pre',
			'main',
			'post'
		];
	let convertedStyle = convertInlineStyleStr(toConvertStyles, attributes);

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(
		( attributes.globalTextColor || attributes.globalTextAlignment || convertedStyle.global )
		? `.wpmozo-bna-text-highlighter-wrapper{
				${attributes.globalTextColor ? `color: ${attributes.globalTextColor};` : ''}
				${attributes.globalTextAlignment ? `text-align: ${attributes.globalTextAlignment};` : ''}
				${convertedStyle.global || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.preTextColor || convertedStyle.pre )
		? `.wpmozo-bna-text-highlighter-pre-inner-wrapper{
				${attributes.preTextColor ? `color: ${attributes.preTextColor};` : ''}
				${convertedStyle.pre || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.mainTextColor || convertedStyle.main )
		? `.wpmozo-bna-text-highlighted-content{
				${attributes.mainTextColor ? `color: ${attributes.mainTextColor};` : ''}
				${convertedStyle.main || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.postTextColor || convertedStyle.post )
		? `.wpmozo-bna-text-highlighter-post-inner-wrapper{
				${attributes.postTextColor ? `color: ${attributes.postTextColor};` : ''}
				${convertedStyle.post || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.highlighterColor || attributes.stockWidth || attributes.stockPaintAnimationDelay )
		? `.wpmozo-bna-text-highlighter-inner-wrapper svg path {
				${attributes.highlighterColor ? `stroke: ${attributes.highlighterColor};` : ''}
				${attributes.stockWidth ? `stroke-width: ${attributes.stockWidth}px;` : ''}
				${attributes.stockPaintAnimationDelay ? `animation-delay: ${attributes.stockPaintAnimationDelay}s;` : ''}
			}`
		: ''
	);
	if ( attributes.customPositionForHighlighter ) {
		normalcss.push(
			( attributes.customVerticalPosition || attributes.customHorizontalPosition )
			? `.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-curly_line svg,
				.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-double_underline svg,
				.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-underline svg,
				.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-zig_zag svg,
				.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-diagonal svg,
				.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-circle svg,
				.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-cross svg {
					${attributes.customVerticalPosition ? `top: ${attributes.customVerticalPosition}px;` : ''}
					${attributes.customHorizontalPosition ? `left: ${attributes.customHorizontalPosition}px;` : ''}
				}`
			: ''
		);
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID} {${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
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