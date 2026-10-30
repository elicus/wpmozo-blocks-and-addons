
import { convertInlineStyleStr } from '../../common/utils.js';

const generateDynamicStyle = ( { attributes, isEdit } ) => {

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

	let normalcss = [],
	hovercss = [],
	cssExtras = [];
	const isEditor = (selector) => {return isEdit ? `,&.is_hover ${selector}` : ''};

	normalcss.push(convertedStyle.container ? `.wpmozo_star_rating_wrapper{ ${convertedStyle.container} }` : '');	
	normalcss.push(attributes.globalTextAlign ? `text-align: ${attributes.globalTextAlign};` : '');

	// Title.
	if ( false === attributes.hideTitle ) {
		normalcss.push(
			( attributes.titleColor || convertedStyle.title ) 
			? `.wpmozo_star_rating_title_container .wpmozo_star_rating_title{
					${attributes.titleColor ? `color: ${attributes.titleColor};` : ''}
					${convertedStyle.title || ''}
				}`
			: ''
		);
		hovercss.push(
			( attributes.titleHoverColor || convertedStyle.titleHover ) 
			? `.wpmozo_star_rating_title_container .wpmozo_star_rating_title:hover${isEditor('.wpmozo_star_rating_title_container .wpmozo_star_rating_title')}{
					${attributes.titleHoverColor ? `color: ${attributes.titleHoverColor};` : ''}
					${convertedStyle.titleHover || ''}
				}`
			: ''
		);
	}

	normalcss.push(
		( attributes.descriptionColor || convertedStyle.description ) 
		? `.wpmozo_star_rating_description{
				${attributes.descriptionColor ? `color: ${attributes.descriptionColor};` : ''}
				${convertedStyle.description || ''}
			}`
		: ''
	);
	hovercss.push(
		( attributes.descriptionHoverColor || convertedStyle.descriptionHover ) 
		? `.wpmozo_star_rating_description:hover${isEditor('.wpmozo_star_rating_description')}{
				${attributes.descriptionHoverColor ? `color: ${attributes.descriptionHoverColor};` : ''}
				${convertedStyle.descriptionHover || ''}
			}`
		: ''
	);

	normalcss.push(
		( attributes.ratingColor || convertedStyle.rating ) 
		? `.wpmozo_star_rating_number{
				${attributes.ratingColor ? `color: ${attributes.ratingColor};` : ''}
				${convertedStyle.rating || ''}
			}`
		: ''
	);
	hovercss.push(
		( attributes.ratingHoverColor || convertedStyle.ratingHover ) 
		? `.wpmozo_star_rating_number:hover${isEditor('.wpmozo_star_rating_number')}{
				${attributes.ratingHoverColor ? `color: ${attributes.ratingHoverColor};` : ''}
				${convertedStyle.ratingHover || ''}
			}`
		: ''
	);

	normalcss.push(attributes.starSpacing ? `.wpmozo_star_rating_star:not(:last-child){ margin-right:${attributes.starSpacing}px; }` : '');
	
	// if svg icon.
	if ( 'default' !== rateIcon ) {
		normalcss.push(attributes.starFontSize ? `.wpmozo_star_rating_star svg{ width: ${attributes.starFontSize}px;}` : '');

		normalcss.push(attributes.rateIconFilledColor ? `.wpmozo_star_rating_filled svg, .wpmozo_star_rating_half_filled svg{ fill:${attributes.rateIconFilledColor}; }` : '');

		normalcss.push(attributes.rateIconEmptyColor ? `.wpmozo_star_rating_empty svg{ fill: ${attributes.rateIconEmptyColor};}` : '' );
	} else {
		normalcss.push(attributes.starFontSize ? `.wpmozo_star_rating_star{ font-size: ${attributes.starFontSize}px;}` : '' );
		
		normalcss.push(attributes.rateIconFilledColor ? `.wpmozo_star_rating_filled_star, .wpmozo_star_rating_half_filled_star{ color: ${attributes.rateIconFilledColor}; }` : '' );

		normalcss.push(attributes.rateIconEmptyColor ? `.wpmozo_star_rating_empty_star{ color: ${attributes.rateIconEmptyColor}; }` : '' );
	}
	if ( 'after_title' === attributes.ratePosition ) {
		normalcss.push(`
			.wpmozo_star_rating_title_container .wpmozo_star_rating_title, .wpmozo_star_rating_title_container .wpmozo_star_rating_rating_wrapper{
				display: inline-block;
			}
			.wpmozo_star_rating_title_container .wpmozo_star_rating_title{
				margin-right: 5px; padding: 0;
			}`
		);
	}

	const hasStyles = normalcss.some(Boolean) || hovercss.some(Boolean);
	
	let styles = hasStyles ? `#block-${attributes.ID} {${normalcss.filter(Boolean).join('\n')} ${hovercss.filter(Boolean).join('\n')}}` : '';
	
	styles += cssExtras.some(Boolean) ? cssExtras.filter(Boolean).join('\n') : '';
	styles = styles.replace(/\s+/g, ' ')
	.replace(/\s*{\s*/g, '{')
	.replace(/\s*}\s*/g, '}')
	.replace(/\s*:\s*/g, ':')
	.replace(/\s*;\s*/g, ';')
	.replace(/\s*,\s*/g, ',')    
	.trim();
	return styles;
}

export default generateDynamicStyle;