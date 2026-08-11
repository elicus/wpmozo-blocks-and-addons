import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {
	const toConvertStyles = [
		'title',
		'titleHover',
		'subtitle',
		'subtitleHover',
		'description',
		'descriptionHover',
		'hoverImage',
		'divider'
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	let styles = `#block-${attributes.ID} {`;

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
	.wp-block-wpmozo-hover-list-item:hover .wpmozo_bna_hover_list_title{
		${ attributes.titleHoverColor ? `color:`+ attributes.titleHoverColor + `;` : '' }
		${ convertedStyle.titleHover }
	}`;

	// Subtitle.
	styles += `.wpmozo_bna_hover_list_subtitle{
		${ attributes.subtitleColor ? `color:`+ attributes.subtitleColor + `;` : '' }
		${ convertedStyle.subtitle }
	}
	.wp-block-wpmozo-hover-list-item:hover .wpmozo_bna_hover_list_subtitle{
		${ attributes.subtitleHoverColor ? `color:`+ attributes.subtitleHoverColor + `;` : '' }
		${ convertedStyle.subtitleHover }
	}`;

	// Description.
	styles += `.wpmozo_bna_hover_list_description{
		${ attributes.descriptionWidth ? `flex: 0 0 ${attributes.descriptionWidth}% !important` : '' }
	}
	.wpmozo_bna_hover_list_description{
		${ attributes.descriptionColor ? `color:`+ attributes.descriptionColor + `;` : '' }
		${ convertedStyle.description }
	}
	.wp-block-wpmozo-hover-list-item:hover .wpmozo_bna_hover_list_description{
		${ attributes.descriptionHoverColor ? `color:`+ attributes.descriptionHoverColor + `;` : '' }
		${ convertedStyle.descriptionHover }
	}`;

	// Hover Image.
	styles += `.wpmozo-bna-hover-list-cursor{
		${ attributes.hoverImageSize ? `width: ${attributes.hoverImageSize}px;` : '' }
		${ attributes.hoverImageSize ? `height: ${attributes.hoverImageSize}px;` : '' }
		${ convertedStyle.hoverImage }
	}`;

	// Divider.
	if ( attributes.dividerSize && 0 !== attributes.dividerSize ) {
		styles += `.wpmozo-bna-hover-list-item-divider{
			${ attributes.dividerSize ? `border-top-width: ${attributes.dividerSize}px;` : '' }
			${ attributes.dividerStyle ? `border-style: ${attributes.dividerStyle};` : '' }
			${ attributes.dividerColor ? `border-color: ${attributes.dividerColor};` : '' }
			${ convertedStyle.divider }
		}`;
		if ( attributes.dividerHideLast ) {
			styles += `.wp-block-wpmozo-hover-list-item:last-child .wpmozo-bna-hover-list-item-divider,
			.wp-block-wpmozo-hover-list-item.wpmozo-is-last-child .wpmozo-bna-hover-list-item-divider{
				display: none;
			}`;
		}
	}

	// Icon.
	styles += `.wpmozo_bna_hover_list_icon{
		${ attributes.iconFontsize ? `font-size: ${attributes.iconFontsize}px;` : '' }
		${ attributes.iconColor ? `color: ${attributes.iconColor};` : '' }
	}`;
	styles += `.wp-block-wpmozo-hover-list-item:hover .wpmozo_bna_hover_list_icon{
		${ attributes.iconHoverColor ? `color: ${attributes.iconHoverColor};` : '' }
	}`;

    styles += `}`;

	return styles;
}

export default generateDynamicStyle;