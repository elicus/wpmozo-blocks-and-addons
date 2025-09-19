import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'button',
		'buttonHover',
		'post',
		'title',
		'titleHover',
		'excerpt'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

    let styles = `#block-${attributes.ID} {`;

	// Timeline icon.
	// Calculate icons size.
	let iconWidth = attributes.timelineIconFontSize ?? 22;
	if ( 'none' !== attributes.tlIconShape ) {
		// Add default 10px padding on all side.
		iconWidth = parseInt( iconWidth ) + 20;
	}

	styles += `.wpmozo_bna_blog_timeline_post_icon{
		width: ${ iconWidth }px;
		height: ${ iconWidth }px;
		line-height: ${ iconWidth }px;
		${attributes.timelineIconColor ? `color:`+ attributes.timelineIconColor + `;` : ''}
		${attributes.timelineIconFontSize ? `font-size:`+ attributes.timelineIconFontSize + `px;` : ''}

		${attributes.tlIconShape !== 'none' ?
			`padding: 10px;
			${attributes.tlIconShape === 'use_circle' ? 'border-radius: 50%;' : 'border-radius: 0;'}
			${attributes.tlIconShapeColor ? `background-color:` + attributes.tlIconShapeColor + `;` : ''}`
		: '' }
		${attributes.tlIconShape !== 'none' && attributes.tlIconShapeUseBorder ?
			`border-style: solid;
			${attributes.tlIconShapeBorderSize ? `border-width:` + attributes.tlIconShapeBorderSize + `px;` : ''}
			${attributes.tlIconShapeBorderColor ? `border-color:` + attributes.tlIconShapeBorderColor + `;` : ''}`
		: '' }
	}`;
	styles += `.wpmozo_bna_blog_timeline_post_icon.wpmozo_bna_icon_fill{
		${attributes.timelineIconFillColor ? `color:`+ attributes.timelineIconFillColor + `;` : ''}
		
		${attributes.tlIconShape !== 'none' ?
			`${attributes.tlIconShapeFillColor ? `background-color:` + attributes.tlIconShapeFillColor + `;` : ''}`
		: '' }
		${attributes.tlIconShape !== 'none' && attributes.tlIconShapeUseBorder ?
			`${attributes.tlIconShapeBorderFillColor ? `border-color:` + attributes.tlIconShapeBorderFillColor + `;` : ''}`
		: '' }
	}`;

	// Timeline bar.
	styles += `.wpmozo_bna_stem_wrapper{
		${attributes.barSize ? `width:`+ attributes.barSize + `px;` : ''}
		${attributes.barColor ? `background:`+ attributes.barColor + `;` : ''}
	}`;
	styles += `.wpmozo_bna_blog_stem{
		${attributes.barFillColor ? `background:`+ attributes.barFillColor + `;` : ''}
	}`;

	// Post image.
	if ( attributes.showThumbnail ) {
		styles += `.wpmozo_bna_blog_timeline_image_wrapper .wpmozo_bna_blog_timeline_image_link{
			${attributes.thumbnailSize ? `width:`+ attributes.thumbnailSize + `%;` : ''}
		}`;
		styles += `.wpmozo_bna_blog_timeline_image_wrapper{
			${attributes.thumbnailAlign ? `text-align:`+ attributes.thumbnailAlign + `;` : ''}
		}`;
	}

	// Read More Button.
	if ( attributes.showReadMore ) {
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button{
			${attributes.buttonBGGradient ? `background:`+ attributes.buttonBGGradient + `;` : ''}
			${attributes.buttonBackground ? `background:`+ attributes.buttonBackground + `;` : ''}
			${attributes.buttonColor ? `color: ${attributes.buttonColor};` : ''}
			${convertedStyle.button}
		}`;
		styles += `.wpmozo-bna-button-wrap .wpmozo-bna-button:hover{
			${attributes.buttonHoverBGGradient ? `background:`+ attributes.buttonHoverBGGradient + `;` : ''}
			${attributes.buttonHoverBackground ? `background:`+ attributes.buttonHoverBackground + `;` : ''}
			${attributes.buttonHoverColor ? `color: ${attributes.buttonHoverColor};` : ''}
			${convertedStyle.buttonHover}
		}`;
	}

	// Post.
	styles += `.wpmozo_bna_blog_timeline_content_wrapper{
		${attributes.postBGGradient ? `background:`+ attributes.postBGGradient + `;` : ''}
		${attributes.postBackground ? `background:`+ attributes.postBackground + `;` : ''}
		${convertedStyle.post}
	}`;

	// Post title.
	styles += `.wpmozo_bna_blog_timeline_post_title, .wpmozo_bna_blog_timeline_post_title a{
		${attributes.titleAlign ? `text-align: ${attributes.titleAlign};` : ''}
		${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
		${convertedStyle.title}
	}`;
	styles += `.wpmozo_bna_blog_timeline_post_title:hover a{
		${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
		${convertedStyle.titleHover}
	}`;

	// Post excerpt.
	styles += `.wpmozo_bna_blog_timeline_post_content_inner, .wpmozo_bna_blog_timeline_post_content_inner p{
		${attributes.excerptAlign ? `text-align: ${attributes.excerptAlign};` : ''}
		${attributes.excerptColor ? `color: ${attributes.excerptColor};` : ''}
		${convertedStyle.excerpt}
	}`;

    styles += `}`;
	return styles;
}

export default generateDynamicStyle;
