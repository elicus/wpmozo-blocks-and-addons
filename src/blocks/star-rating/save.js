import { RichText, useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	const imageUrl    = ( attributes.image ) ? attributes.image : '';
	const rateIcon    = ( attributes.rateIcon ) ?? 'default';
	const showRateNum = ( attributes.showRateNum ) ?? true;

	let ratingOutOf = ( attributes.ratingOutOf && '' !== attributes.ratingOutOf ) ? attributes.ratingOutOf : 5;
	// For smily icons, out of icons must be 5.
	if ( [ 'smiley_scale' ].includes( rateIcon ) && ratingOutOf !== 5 ) {
		ratingOutOf = 5;
	}

	// Calc rating.
	let rating = parseFloat( attributes.rating ) ?? 5;
	if ( rating > ratingOutOf ) {
		rating = ratingOutOf;
	} else {
		let rating_mid_value = parseFloat( Math.abs( parseInt( rating ) ) + 0.5 );
		if ( rating > rating_mid_value ) {
			rating = Math.ceil( rating );
		} else if ( rating !== Math.abs( parseInt( rating ) ) ) {
			rating = rating_mid_value;
		}
	}

	let ratingWrapper = '';
	if ( rating && rating > 0 ) {
		let unfilled_stars  = '',
			rating_number   = '',
			stars           = [],
			mood            = 1;

		const scalIcons = [ 'smiley_scale' ];

		for ( let $i = 1; $i <= Math.abs( parseInt( rating ) ); $i++ ) {
			if ( 'default' !== rateIcon ) {
				let key   = ( scalIcons.includes( rateIcon ) ) ? `${rateIcon}/${mood}_filled` : `${rateIcon}-filled`;
				const svg = attributes.iconSVGs?.[key]?.[mood] || '';
				stars.push(
					<span dangerouslySetInnerHTML={ { __html: svg } }
						className={`wpmozo_star_rating_star dipl-rating-icon-custom wpmozo_star_rating_filled dipl-rating-icon-${rateIcon}`}
					/>
				 );
			} else {
				stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_filled_star"></span> );
			}
			mood++;
		}
		if ( rating !== Math.abs( parseInt( rating ) ) ) {
			if ( 'default' !== rateIcon ) {
				let key   = ( scalIcons.includes( rateIcon ) ) ? `${rateIcon}/${mood}_half_filled` : `${rateIcon}-half_filled`;
				const svg = attributes.iconSVGs?.[key]?.[mood] || '';
				stars.push( <span dangerouslySetInnerHTML={ { __html: svg } }
					className={`wpmozo_star_rating_star dipl-rating-icon-custom wpmozo_star_rating_half_filled dipl-rating-icon-${rateIcon}`}
				/> );
			} else {
				stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_half_filled_star"></span> );
			}
			mood++;
			unfilled_stars  = ratingOutOf - Math.abs( parseInt( rating ) ) - 1;
		} else {
			unfilled_stars  = ratingOutOf - Math.abs( parseInt( rating ) );
		}
		for ( let $i = 1; $i <= unfilled_stars; $i++ ) {
			if ( 'default' !== rateIcon ) {
				let key   = ( scalIcons.includes( rateIcon ) ) ? `${rateIcon}/${mood}_empty` : `${rateIcon}-empty`;
				const svg = attributes.iconSVGs?.[key]?.[mood] || '';
				stars.push( <span dangerouslySetInnerHTML={ { __html: svg } }
					className={`wpmozo_star_rating_star dipl-rating-icon-custom wpmozo_star_rating_empty dipl-rating-icon-${rateIcon}`}
				/> );
			} else {
				stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_empty_star"></span> );
			}
			mood++;
		}

		if ( true === showRateNum ) {
			rating_number = <span className="wpmozo_star_rating_number">({rating}/{ratingOutOf})</span>;
		}

		ratingWrapper = <div className="wpmozo_star_rating_rating_wrapper">
			<span itemprop="starRating" itemscope itemtype="http://schema.org/Rating">
				<meta itemprop="ratingValue" content={rating} />
				<span className="wpmozo_star_rating_stars">{stars}</span>
				{rating_number}
			</span>
		</div>;
	}

	return (
		<>
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div {...useBlockProps.save( { className: attributes.className } )} id={`block-${clientId}`}>
				<div className="wpmozo_star_rating_wrapper">
					{ ( imageUrl && '' !== imageUrl ) && (
						<div className="wpmozo_star_rating_image_container">
							<img src={ imageUrl } alt={ attributes?.imageAlt || '' } class="wpmozo_star_rating_image" />
						</div>
					) }
					<div className="wpmozo_star_rating_title_container">
						{ ( false === attributes.hideTitle ) && (
							<RichText.Content
								className="wpmozo_star_rating_title"
								tagName={ attributes.titleLevel }
								value={ attributes.title }
							/>
						) }
						{ ratingWrapper }
					</div>
					<div className="wpmozo_star_rating_description">
						<RichText.Content tagName="p"
							className="wpmozo_star_rating_description"
							value={ attributes.description }
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Save;
