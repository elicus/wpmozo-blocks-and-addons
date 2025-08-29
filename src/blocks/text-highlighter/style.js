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

	let styles = `#block-${attributes.ID}{`;

	styles += `
		.wpmozo-bna-text-highlighter-wrapper{
			color: ${attributes.globalTextColor};
			text-align: ${attributes.globalTextAlignment};
			${convertedStyle.global}
		}
		.wpmozo-bna-text-highlighter-pre-inner-wrapper{
			color: ${attributes.preTextColor};
			${convertedStyle.pre}
		}
		.wpmozo-bna-text-highlighter-inner-wrapper{
			color: ${attributes.mainTextColor};
			${convertedStyle.main}
		}
		.wpmozo-bna-text-highlighter-post-inner-wrapper{
			color: ${attributes.postTextColor};
			${convertedStyle.post}
		}
		.wpmozo-bna-text-highlighter-inner-wrapper svg path {
			stroke: ${attributes.highlighterColor};
			stroke-width: ${attributes.stockWidth}px;
			animation-delay: ${attributes.stockPaintAnimationDelay}s ;
		}
	`;
	if ( attributes.customPositionForHighlighter ) {
		styles += `
		.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-curly_line svg,
		.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-double_underline svg,
		.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-underline svg,
		.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-zig_zag svg,
		.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-diagonal svg,
		.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-circle svg,
		.wpmozo-bna-text-highlighter .wpmozo-bna-text-highlighter-wrapper.wpmozo-highlight-cross svg {
			top: ${attributes.customVerticalPosition}px;
			left: ${attributes.customHorizontalPosition}px;
		}`;
	}
	return styles;
};

export default generateDynamicStyle;
