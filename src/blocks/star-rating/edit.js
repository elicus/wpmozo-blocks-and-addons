import { __ } from '@wordpress/i18n';
import { Fragment, useEffect, useRef } from "@wordpress/element";
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";

const loadSVGIcon = async ( icon, type, mood = '', setAttributes = null, attributes = {} ) => {
	let key = icon + '-' + type;
	if ( [ 'smiley_scale' ].includes( icon ) && mood ) {
		key = `${icon}/${mood}_${type}`;
	}

	// Check if already exists
	if ( attributes.iconSVGs?.[key]?.[mood] ) return;

	// Get icon file.
	let file = wpmozo_bna_editor_object.assets_url + `rate-icons/${icon}-${type}.svg`;
	if ( [ 'smiley_scale' ].includes( icon ) && mood ) {
		file = wpmozo_bna_editor_object.assets_url + `rate-icons/${key}.svg`;
	}

	try {
		// Fetch the icon file.
		const res = await fetch( file );

		// If error while fetching the file.
		if ( ! res.ok ) {
			throw new Error();
		}

		const svg = await res.text();

		// Store mood-based icons in object attributes.
		if ( setAttributes ) {
			const updated = {
				...attributes.iconSVGs,
				[key]: {
					...( attributes.iconSVGs?.[key] || {} ),
					[mood]: svg
				}
			};
			setAttributes ({ iconSVGs: updated } );
		}
	} catch (e) {
		console.error('Error loading SVG:', e);
	}
}

const renderSVGIcon = ( icon, type, mood = '', setAttributes = null, attributes = {} ) => {
	let key = icon + '-' + type;
	if ( [ 'smiley_scale' ].includes( icon ) && mood ) {
		key = `${icon}/${mood}_${type}`;
	}

	// Check in attributes (mood-specific object).
	const svg = attributes.iconSVGs?.[key]?.[mood];

	// If not then load svg.
	if ( ! svg ) {
		loadSVGIcon( icon, type, mood, setAttributes, attributes );
		return null;
	}

	return svg ? (
		<span dangerouslySetInnerHTML={ { __html: svg } }
			className={`wpmozo_star_rating_star dipl-rating-icon-custom wpmozo_star_rating_${type} dipl-rating-icon-${icon}`}
		/>
	) : null;
}

const Edit = (props) => {

	const attributes    = props.attributes;
	const setAttributes = props.setAttributes;
	const clientId      = props.clientId;

	attributes.ID = clientId;

	const imageUrl    = ( attributes.image ) ? attributes.image : '';
	const rateIcon    = ( attributes.rateIcon ) ?? 'default';
	const showRateNum = ( attributes.showRateNum ) ?? true;

	// Remove older svgs.
	const prevRateIcon = useRef( rateIcon );
	useEffect( () => {
		if ( prevRateIcon.current !== rateIcon ) {
			setAttributes( { iconSVGs: {} } );
			prevRateIcon.current = rateIcon;
		}
	}, [ rateIcon ] );

	let ratingOutOf = ( attributes.ratingOutOf ) ?? 5;

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

		for ( let $i = 1; $i <= Math.abs( parseInt( rating ) ); $i++ ) {
			if ( 'default' !== rateIcon ) {
				stars.push( renderSVGIcon( rateIcon, 'filled', mood, setAttributes, attributes ) );
			} else {
				stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_filled_star"></span> );
			}
			mood++;
		}
		if ( rating !== Math.abs( parseInt( rating ) ) ) {
			if ( 'default' !== rateIcon ) {
				stars.push( renderSVGIcon( rateIcon, 'half_filled', mood, setAttributes, attributes ) );
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
				stars.push( renderSVGIcon( rateIcon, 'empty', mood, setAttributes, attributes ) );
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
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div {...useBlockProps()} id={`block-${attributes.ID}`}>
				<div className="wpmozo_star_rating_wrapper">
					{ ( imageUrl && '' !== imageUrl ) && (
						<div className="wpmozo_star_rating_image_container">
							<img src={ imageUrl } alt={ attributes?.imageAlt || '' } className="wpmozo_star_rating_image" />
						</div>
					) }
					<div className="wpmozo_star_rating_title_container">
						{ ( false === attributes.hideTitle ) && (
							<RichText
								className="wpmozo_star_rating_title"
								tagName={ attributes.titleLevel }
								value={ attributes.title }
								onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
								placeholder={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
							/>
						) }
						{ ratingWrapper }
					</div>
					<div className="wpmozo_star_rating_description">
						<RichText tagName="div"
							className="wpmozo_star_rating_description"
							value={ attributes.description }
							onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;
