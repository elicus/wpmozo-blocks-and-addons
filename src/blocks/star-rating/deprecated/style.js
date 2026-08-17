
import { convertInlineStyleStr } from '../../../common/utils.js';

const generateDynamicStyle = ( { attributes } ) => {

	const toConvertStyles = [
		'title',
		'titleHover',
		'description',
		'descriptionHover',
		'rating',
		'ratingHover',
		'container',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	const rateIcon = ( attributes.rateIcon ) ?? 'default';

	let styles = `#block-${attributes.ID} {`;

	styles += `
	.wpmozo_star_rating_wrapper{
		${convertedStyle.container}
	}`;

	// Global text align.
	if ( attributes?.globalTextAlign ) {
		styles += `text-align: ${attributes.globalTextAlign};`;
	}

	// Title.
	if ( false === attributes.hideTitle ) {
		styles += `.wpmozo_star_rating_title_container .wpmozo_star_rating_title{
			${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
			${convertedStyle.title}
		}
		.wpmozo_star_rating_title_container .wpmozo_star_rating_title:hover{
			${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
			${convertedStyle.titleHover}
		}`;
	}

	// Description.
	styles += `.wpmozo_star_rating_description{
		${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
		${convertedStyle.description}
	}
	.wpmozo_star_rating_description:hover{
		${attributes.descriptionHoverColor ? `color: ${attributes.descriptionHoverColor};` : ''}
		${convertedStyle.descriptionHover}
	}`;

	// Rate Number.
	styles += `.wpmozo_star_rating_number{
		${attributes.ratingColor ? `color: ${attributes.ratingColor};` : ''}
		${convertedStyle.rating}
	}
	.wpmozo_star_rating_number:hover{
		${attributes.ratingHoverColor ? `color: ${attributes.ratingHoverColor};` : ''}
		${convertedStyle.ratingHover}
	}`;

	// Icon spacing.
	styles += `.wpmozo_star_rating_star:not(:last-child){
		${attributes.starSpacing ? `margin-right: ` + attributes.starSpacing + `px;` : '' }
	}`;

	// if svg icon.
	if ( 'default' !== rateIcon ) {
		styles += `.wpmozo_star_rating_star svg{
			${attributes.starFontSize ? `width: ` + attributes.starFontSize + `px;` : '' }
		}
		.wpmozo_star_rating_filled svg, .wpmozo_star_rating_half_filled svg{
			${attributes.rateIconFilledColor ? `fill: ` + attributes.rateIconFilledColor + `;` : '' }
		}
		.wpmozo_star_rating_empty svg{
			${attributes.rateIconEmptyColor ? `fill: ` + attributes.rateIconEmptyColor + `;` : '' }
		}`;
	} else {
		styles += `.wpmozo_star_rating_star{
			${attributes.starFontSize ? `font-size: ` + attributes.starFontSize + `px;` : '' }
		}
		.wpmozo_star_rating_filled_star, .wpmozo_star_rating_half_filled_star{
			${attributes.rateIconFilledColor ? `color: ` + attributes.rateIconFilledColor + `;` : '' }
		}
		.wpmozo_star_rating_empty_star{
			${attributes.rateIconEmptyColor ? `color: ` + attributes.rateIconEmptyColor + `;` : '' }
		}`;
	}

	if ( 'after_title' === attributes.ratePosition ) {
		styles += `.wpmozo_star_rating_title_container .wpmozo_star_rating_title, .wpmozo_star_rating_title_container .wpmozo_star_rating_rating_wrapper{
			display: inline-block;
		}
		.wpmozo_star_rating_title_container .wpmozo_star_rating_title{
			margin-right: 5px; padding: 0;
		}`;
	}

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;