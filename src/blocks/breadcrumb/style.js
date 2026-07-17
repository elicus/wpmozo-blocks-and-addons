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

	let normalcss = [],
	    hovercss = [],
	    cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};
	
	normalcss.push( `.layout2 li .breadcrumb-page{ background-color: transparent !important; }` );
	normalcss.push( `.dipl-home-page .breadcrumb-home-icon i, .wpmozo-bna-home-page .breadcrumb-page .breadcrumb-home-icon .icon-wrapper i{ color:initial; }` );
	normalcss.push( `.dipl-home-page .breadcrumb-home-icon i,.wpmozo-bna-home-page .breadcrumb-page .breadcrumb-home-icon .icon-wrapper i{ color:initial; }` );
    normalcss.push(
		attributes.breadcrumbsNavBackground
		? `.layout1 li .breadcrumb-page{ background-color: ${attributes.breadcrumbsNavBackground};}` : ''
	);
    normalcss.push(
		attributes.breadcrumbsNavBackground
		? `.layout1 li .breadcrumb-page::after{border-color: transparent transparent transparent ${attributes.breadcrumbsNavBackground} !important;}` : ''
	);
    normalcss.push(
		attributes.breadcrumbsNavBackground
		? `.layout1 li .breadcrumb-page::after{border-color: transparent transparent transparent ${attributes.breadcrumbsNavBackground} !important;}.layout1 li .breadcrumb-page::before{
			border-color: ${attributes.breadcrumbsNavBackground} ${attributes.breadcrumbsNavBackground} ${attributes.breadcrumbsNavBackground} transparent !important;
		}` : ''
	);
    normalcss.push(
		attributes.textAlign
		? `.wpmozo-bna-breadcrumb-wrapper{
			justify-content: ${attributes.textAlign};
		}` : ''
	);
	normalcss.push(
		(attributes.textColor ||  convertedStyle.text) 
		? `.breadcrumb-page { 
				${attributes.textColor ? `color:${attributes.textColor};` : ''}
				${convertedStyle.text || '' } 
			}` 
		: '' 
	);
	normalcss.push(
		attributes.textDecoration
		? `.breadcrumb-item { text-decoration: ${attributes.textDecoration}; }`
		: ''
	);
	normalcss.push(
		attributes.homeLinkIconSizeFontSize
		? `.dipl-home-page,.wpmozo-bna-home-page{ font-size: ${attributes.homeLinkIconSizeFontSize}; }` 
		: ''
	);
	normalcss.push(
		(attributes.homeIconColor ||  attributes.homeLinkIconSizeFontSize) 
		? `.dipl-home-page breadcrumb-home-icon i,
			.wpmozo-bna-home-page .breadcrumb-page .breadcrumb-home-icon .icon-wrapper i{
				${attributes.homeIconColor ? `color: ${attributes.homeIconColor};` : ''}
				${attributes.homeLinkIconSizeFontSize ? `font-size:${attributes.homeLinkIconSizeFontSize};`: '' } 
			}` 
		: '' 
	);
	if ( 'text_separator' === attributes.separatorType ) {
	    normalcss.push(
			(attributes.separatorText ||  attributes.separatorSizeFontSize || attributes.separatorColor) 
			? `.layout2 li:after {
					${attributes.separatorText ? `content: "${attributes.separatorText}";` : ''}
					${attributes.separatorSizeFontSize ? `font-size:${attributes.separatorSizeFontSize};`: '' } 
					${attributes.separatorColor ? `color: ${attributes.separatorColor};`: '' } 
				}` 
			: '' 
		);
	} else {
        normalcss.push(
			(attributes.separatorSizeFontSize || attributes.separatorColor) 
			? `.layout2 li:after {
					${attributes.separatorSizeFontSize ? `font-size:${attributes.separatorSizeFontSize};`: '' } 
					${attributes.separatorColor ? `color: ${attributes.separatorColor};`: '' } 
				}` 
			: '' 
		);
	}
	if ( attributes.enableDifferentBg ) {
	    normalcss.push(
			attributes.breadcrumbsNavLastItemBackground
			? `.layout1 li .breadcrumb-page.wpmozo-bna-last-page{
					background-color: ${attributes.breadcrumbsNavLastItemBackground};
				}
				.layout1 li .breadcrumb-page.wpmozo-bna-last-page::after{
					border-color: transparent transparent transparent ${attributes.breadcrumbsNavLastItemBackground} !important;
				}
				.layout1 li .breadcrumb-page.wpmozo-bna-last-page::before{
					border-color: ${attributes.breadcrumbsNavLastItemBackground} ${attributes.breadcrumbsNavLastItemBackground} ${attributes.breadcrumbsNavLastItemBackground} transparent !important;
				}` 
			: ''
		);
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