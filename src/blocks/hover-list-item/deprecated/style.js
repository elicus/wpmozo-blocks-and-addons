import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'title',
		'titleHover',
		'subtitle',
		'subtitleHover',
		'description',
		'descriptionHover',
		'button',
		'buttonHover',
		'block',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `.wp-block-wpmozo-hover-list #block-${attributes.ID} {
		${ convertedStyle.block }
		${attributes.blockBGGradient ? `background:`+ attributes.blockBGGradient + `;` : ''}
		${attributes.blockBackground ? `background:`+ attributes.blockBackground + `;` : ''}`;

	// Get title align.
	let titleAlign = attributes.titleAlign || '';
		titleAlign = titleAlign.replace(/^(left|right)$/, match =>
			match === "left" ? "flex-start" : "flex-end"
		);

	// Title.
	styles += `.wpmozo_bna_hover_list_title_wrapper{
		${ titleAlign ? `justify-content: ${ titleAlign } !important;` : '' }
		${ attributes.titleWidth ? `flex: 0 0 ${attributes.titleWidth}% !important` : '' }
	}
	.wpmozo_bna_hover_list_title{
		${ attributes.titleColor ? `color:`+ attributes.titleColor + `;` : '' }
		${ convertedStyle.title }
	}
	:hover .wpmozo_bna_hover_list_title{
		${ attributes.titleHoverColor ? `color:`+ attributes.titleHoverColor + `;` : '' }
		${ convertedStyle.titleHover }
	}`;

	// Subtitle.
	styles += `.wpmozo_bna_hover_list_subtitle{
		${ attributes.subtitleColor ? `color:`+ attributes.subtitleColor + `;` : '' }
		${ convertedStyle.subtitle }
	}
	:hover .wpmozo_bna_hover_list_subtitle{
		${ attributes.subtitleHoverColor ? `color:`+ attributes.subtitleHoverColor + `;` : '' }
		${ convertedStyle.subtitleHover }
	}`;

	// Description.
	styles += `.wpmozo_bna_hover_list_description{
		${ attributes.descriptionColor ? `color:`+ attributes.descriptionColor + `;` : '' }
		${ convertedStyle.description }
	}
	:hover .wpmozo_bna_hover_list_description{
		${ attributes.descriptionHoverColor ? `color:`+ attributes.descriptionHoverColor + `;` : '' }
		${ convertedStyle.descriptionHover }
	}`;

	// Icon.
	if ( attributes.showIcon ) {
		styles += `.wpmozo_bna_hover_list_icon{
			${ attributes.iconFontsize ? `font-size: ${attributes.iconFontsize}px;` : '' }
			${ attributes.iconColor ? `color: ${attributes.iconColor};` : '' }
		}`;
		styles += `:hover .wpmozo_bna_hover_list_icon{
			${ attributes.iconHoverColor ? `color: ${attributes.iconHoverColor};` : '' }
		}`;
	}

	// Button.
	if ( attributes.showButton ) {
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

    styles += `}`;

	return styles;
}

export default generateDynamicStyle;