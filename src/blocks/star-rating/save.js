import { RichText, useBlockProps } from '@wordpress/block-editor';

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	const imageUrl    = ( attributes.image ) ? attributes.image : '';
	const rateIcon    = ( attributes.rateIcon ) ?? 'default';
	const showRateNum = ( attributes.showRateNum ) ?? true;

	let ratingOutOf = parseInt( attributes.ratingOutOf ) ?? 5;

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
			moods           = 1;
		
		for ( let $i = 1; $i <= Math.abs( parseInt( rating ) ); $i++ ) {
			if ( 'default' !== rateIcon ) {
				stars.push( renderSVGIcon( rateIcon, 'filled', moods ) );
			} else {
				stars.push( <span className="dipl_star_rating_star dipl_star_rating_filled_star"></span> );
			}
			moods++;
		}
		if ( rating !== Math.abs( parseInt( rating ) ) ) {
			if ( 'default' !== rateIcon ) {
				stars.push( renderSVGIcon( rateIcon, 'half_filled', moods ) );
			} else {
				stars.push( <span className="dipl_star_rating_star dipl_star_rating_half_filled_star"></span> );
			}
			moods++;
			unfilled_stars  = ratingOutOf - Math.abs( parseInt( rating ) ) - 1;
		} else {
			unfilled_stars  = ratingOutOf - Math.abs( parseInt( rating ) );
		}
		for ( let $i = 1; $i <= unfilled_stars; $i++ ) {
			if ( 'default' !== rateIcon ) {
				stars.push( renderSVGIcon( rateIcon, 'empty', moods ) );
			} else {
				stars.push( <span className="dipl_star_rating_star dipl_star_rating_empty_star"></span> );
			}
			moods++;
		}

		if ( 'on' === showRateNum ) {
			rating_number = <span className="dipl_star_rating_number">({rating}/{ratingOutOf})</span>;
		}

		ratingWrapper = <div className="dipl_star_rating_rating_wrapper">
			<span itemprop="starRating" itemscope itemtype="http://schema.org/Rating">
				<meta itemprop="ratingValue" content={rating} />
				<span className="dipl_star_rating_stars">{stars}</span>
				{rating_number}
			</span>
		</div>;
	}
   
	return (
		<>
			<div {...useBlockProps.save()} id={`block-${attributes.ID}`}>
				<div className="dipl_star_rating_wrapper">
					{ ( imageUrl && '' !== imageUrl ) && (
						<div className="dipl_star_rating_image_container">
							<img src={ imageUrl } alt={ attributes?.imageAlt || '' } class="dipl_star_rating_image" />
						</div>
					) }
					<div className="dipl_star_rating_title_container">
						{ ( false === attributes.hideTitle ) && (
							<RichText.Content
								className="dipl_star_rating_title"
								tagName={ attributes.titleLevel }
								value={ attributes.title }
							/>
						) }
						{ ratingWrapper }
					</div>
					<div className="dipl_star_rating_description">
						<RichText.Content tagName="div"
							className="dipl_star_rating_description"
							value={ attributes.description }
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Save;
