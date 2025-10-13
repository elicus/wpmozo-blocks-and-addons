import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'titleNormal',
		'titleHover',
		'content',
		'layout'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID}{`;

		// breadcrumb style
		styles += `
		.wpmozo-bna-breadcrumb-wrapper li .breadcrumb-page{
			background-color: ${attributes.breadcrumbsNavBackground};
		}
		.layout1 li .breadcrumb-page::after{
			border-color: transparent transparent transparent ${attributes.breadcrumbsNavBackground} !important;
		}
		.layout1 li .breadcrumb-page::before{
			border-color: ${attributes.breadcrumbsNavBackground} ${attributes.breadcrumbsNavBackground} ${attributes.breadcrumbsNavBackground} transparent !important;
		}`;
		if ( attributes.enableDifferentBg ) {
			styles += `
			.wpmozo-bna-breadcrumb-wrapper.layout1 li .breadcrumb-page.wpmozo-bna-last-page{
				background-color: ${attributes.breadcrumbsNavLastItemBackground};
			}
			.layout1 li .breadcrumb-page.wpmozo-bna-last-page::after{
				border-color: transparent transparent transparent ${attributes.breadcrumbsNavLastItemBackground} !important;
			}
			.layout1 li .breadcrumb-page..wpmozo-bna-last-page::before{
				border-color: ${attributes.breadcrumbsNavLastItemBackground} ${attributes.breadcrumbsNavLastItemBackground} ${attributes.breadcrumbsNavLastItemBackground} transparent !important;
			}
			`;
		}

	styles += `}`;

	return styles;
};

export default generateDynamicStyle;
