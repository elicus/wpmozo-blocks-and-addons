
import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, clientId } ) => {

	const toConvertStyles = [
		'title',
		'titleHover',
		'description',
		'descriptionHover',
		'rating',
		'ratingHover',
	];
	let convertedStyle = convertInlineStyleStr( toConvertStyles, attributes );

	const rateIcon = ( attributes.rateIcon ) ?? 'default';

	let styles = `#block-${attributes.ID} {`;

	// Global text align.
	if ( attributes?.globalTextAlign ) {
		styles += `text-align: ${attributes.globalTextAlign};`;
	}

	// Title.
	if ( false === attributes.hideTitle ) {
		styles += `.dipl_star_rating_title_container .dipl_star_rating_title{
			${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
			${convertedStyle.title}
		}
		.dipl_star_rating_title_container .dipl_star_rating_title:hover{
			${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
			${convertedStyle.titleHover}
		}`;
	}

	// Description.
	styles += `.dipl_star_rating_description{
		${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
		${convertedStyle.description}
	}
	.dipl_star_rating_description:hover{
		${attributes.descriptionHoverColor ? `color: ${attributes.descriptionHoverColor};` : ''}
		${convertedStyle.descriptionHover}
	}`;

	// Rate Number.
	styles += `.dipl_star_rating_number{
		${attributes.ratingColor ? `color: ${attributes.ratingColor};` : ''}
		${convertedStyle.rating}
	}
	.dipl_star_rating_number:hover{
		${attributes.ratingHoverColor ? `color: ${attributes.ratingHoverColor};` : ''}
		${convertedStyle.ratingHover}
	}`;

	// Icon spacing.
	styles += `.dipl_star_rating_star:not(:last-child){
		${attributes.starSpacing ? `margin-right: ` + attributes.starSpacing + `px;` : '' }
	}`;

	// if svg icon.
	if ( 'default' !== rateIcon ) {
		styles += `.dipl_star_rating_star svg{
			${attributes.starFontSize ? `width: ` + attributes.starFontSize + `px;` : '' }
		}
		.dipl_star_rating_filled svg, .dipl_star_rating_half_filled svg{
			${attributes.rateIconFilledColor ? `fill: ` + attributes.rateIconFilledColor + `;` : '' }
		}
		.dipl_star_rating_empty svg{
			${attributes.rateIconEmptyColor ? `fill: ` + attributes.rateIconEmptyColor + `;` : '' }
		}`;
	} else {
		styles += `.dipl_star_rating_star{
			${attributes.starFontSize ? `font-size: ` + attributes.starFontSize + `px;` : '' }
		}
		.dipl_star_rating_filled_star, .dipl_star_rating_half_filled_star{
			${attributes.rateIconFilledColor ? `color: ` + attributes.rateIconFilledColor + `;` : '' }
		}
		.dipl_star_rating_empty_star{
			${attributes.rateIconEmptyColor ? `color: ` + attributes.rateIconEmptyColor + `;` : '' }
		}`;
	}

	if ( 'after_title' === attributes.ratePosition ) {
		styles += `.dipl_star_rating_title_container .dipl_star_rating_title, .dipl_star_rating_title_container .dipl_star_rating_rating_wrapper{
			display: inline-block;
		}
		.dipl_star_rating_title_container .dipl_star_rating_title{
			margin-right: 5px; padding: 0;
		}`;
	}

	styles += `}`;
	return styles;
}

export default generateDynamicStyle;
