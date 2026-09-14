import { convertInlineStyleStr } from '../../../common/utils.js';

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
		.wpmozo-bna-breadcrumb-wrapper{
			justify-content: ${attributes.textAlign};
		}
		.dipl-home-page,
		.wpmozo-bna-home-page{
			font-size: ${attributes.homeLinkIconSizeFontSize};
		}
		.dipl-home-page .breadcrumb-home-icon i,
		.wpmozo-bna-home-page .breadcrumb-page .breadcrumb-home-icon .icon-wrapper i{
			color:initial;
		}
		.dipl-home-page breadcrumb-home-icon i,
		.wpmozo-bna-home-page .breadcrumb-page .breadcrumb-home-icon .icon-wrapper i{
			color: ${attributes.homeIconColor};
			font-size:${attributes.homeLinkIconSizeFontSize};
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