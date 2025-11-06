import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'titleNormal',
		'titleHover',
		'content',
		'layout',
		'text'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

		// breadcrumb style
		styles += `
		.layout1 li .breadcrumb-page{
			background-color: ${attributes.breadcrumbsNavBackground};
		}
		.layout1 li .breadcrumb-page::after{
			border-color: transparent transparent transparent ${attributes.breadcrumbsNavBackground} !important;
		}
		.layout1 li .breadcrumb-page::before{
			border-color: ${attributes.breadcrumbsNavBackground} ${attributes.breadcrumbsNavBackground} ${attributes.breadcrumbsNavBackground} transparent !important;
		}
		.breadcrumb-page {
			color:${attributes.textColor};
			${convertedStyle.text}
		}
		.layout2 li .breadcrumb-page{
			background-color: transparent !important;
		}
		`;

		let textFontSize = typeof attributes.textFontSize === 'string'
			? attributes.textFontSize
				.replace('px', '')
			: attributes.textFontSize;
		let parseToPx = (val) => {
			if (typeof val === 'string') {
				// Remove any CSS var preset prefix.
				let cleanVal = val.replace('var:preset|spacing|', '').trim();
				if (cleanVal.endsWith('px')) {
					return parseFloat(cleanVal.replace('px', ''));
				} else if (cleanVal.endsWith('em')) {
					return parseFloat(cleanVal.replace('em', '')) * 16;
				} else if (cleanVal.endsWith('rem')) {
					return parseFloat(cleanVal.replace('rem', '')) * 16;
				} else {
					return parseFloat(cleanVal.replace(/[^0-9.]/g, '')) || 0;
				}
			}
			return val;
		};
		// If attributes.breadcrumbItempadding is empty or not present, set to default values
		const defaultPadding = {
			top: 20,
			right: 10,
			bottom: 20,
			left: 10
		};

		let breadcrumbItempadding = attributes.breadcrumbItempadding;
		if (
			typeof attributes.breadcrumbItempadding['top'] === 'undefined' ||
			typeof attributes.breadcrumbItempadding['right'] === 'undefined' ||
			typeof attributes.breadcrumbItempadding['bottom'] === 'undefined' ||
			typeof attributes.breadcrumbItempadding['left'] === 'undefined'
		) {
			breadcrumbItempadding = defaultPadding;
		}

		let paddingTop = parseToPx(breadcrumbItempadding['top']);
		let paddingBottom = parseToPx(breadcrumbItempadding['bottom']);

		let height = parseFloat(textFontSize) + parseFloat(paddingTop) + parseFloat(paddingBottom);
		let height_f = Math.ceil(height / 2) + 'px';
		let height_c = Math.ceil(height / 2) + 'px';

		styles +=`
			.wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page{
				height: ${height}px;
			}
			.wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page::before,
			.wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page::after{
				border-width: ${height_f} 10px ${height_c} 10px;
			}
		`;

		if('text_separator' === attributes.separatorType){
			styles +=`
				.layout2 li:after {
					content: "${attributes.separatorText}";
					font-size: ${attributes.separatorSizeFontSize};
					color: ${attributes.separatorColor};
				}`;
		} else {
			styles +=`
				.breadcrumb-home-icon i{
					font-size: ${attributes.separatorSizeFontSize};
					color: ${attributes.separatorColor};
				}
			`;
		}
		if ( attributes.enableDifferentBg ) {
			styles += `
			.layout1 li .breadcrumb-page.wpmozo-bna-last-page{
				background-color: ${attributes.breadcrumbsNavLastItemBackground};
			}
			.layout1 li .breadcrumb-page.wpmozo-bna-last-page::after{
				border-color: transparent transparent transparent ${attributes.breadcrumbsNavLastItemBackground} !important;
			}
			.layout1 li .breadcrumb-page.wpmozo-bna-last-page::before{
				border-color: ${attributes.breadcrumbsNavLastItemBackground} ${attributes.breadcrumbsNavLastItemBackground} ${attributes.breadcrumbsNavLastItemBackground} transparent !important;
			}
			`;
		}

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
