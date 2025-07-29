import { __ } from '@wordpress/i18n';
import { Fragment } from "@wordpress/element";
import { useBlockProps, RichText } from '@wordpress/block-editor';
import Inspector from './inspector';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import generateDynamicStyle from "./style";

// Global cache for loaded SVGs
let svgIcons = Object.create(null);

const loadSVGIcon = async ( icon, type, mood = '' ) => {
	let key = icon + '-' + type;
	if ( [ 'smiley_scale' ].includes( icon ) && mood ) {
		key = `${icon}/${mood}_${type}`;
	}

	if ( svgIcons[key] ) {
		return;
	}

	let file = wpmozo_bna_editor_object.assets_url + `rate-icons/${icon}-${type}.svg`;
	if ( [ 'smiley_scale' ].includes( icon ) && mood ) {
		file = wpmozo_bna_editor_object.assets_url + `rate-icons/${key}.svg`;
	}

	await fetch( file, { method: 'HEAD' } ).then( ( res ) => {
		if ( ! res.ok ) {
			throw new Error( `SVG not found ( ${res.status} )` );
		}

		// File exists, now fetch the content.
		return fetch(file);
	} ).then( ( res ) => res.text() )
	.then( ( svgContent ) => {
		svgIcons[key] = svgContent;
	} ).catch( ( err ) => console.error( 'SVG load failed (', key, '): ', err ) );
}

const renderSVGIcon = ( icon, type, mood = '' ) => {
	let key = icon + '-' + type;
	if ( [ 'smiley_scale' ].includes( icon ) && mood ) {
		key = `${icon}/${mood}_${type}`;
	}

	const svg = svgIcons[key];

	// If not then load svg.
	if ( ! svg ) {
		loadSVGIcon( icon, type, mood );
	}

	return svg ? (
		<span dangerouslySetInnerHTML={ { __html: svg } }
			className={`dipl_star_rating_star dipl-rating-icon-custom dipl_star_rating_${type} dipl-rating-icon-${icon}`}
		/>
	) : null;
}

const Edit = (props) => {

	const attributes    = props.attributes;
	const setAttributes = props.setAttributes;
	const clientId      = attributes.ID;

	const imageUrl    = ( attributes.image ) ? attributes.image : '';
	const rateIcon    = ( attributes.rateIcon ) ?? 'default';
	const showRateNum = ( attributes.showRateNum ) ?? true;

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
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

			<div {...useBlockProps()} id={`block-${attributes.ID}`}>
				<div className="dipl_star_rating_wrapper">
					{ ( imageUrl && '' !== imageUrl ) && (
						<div className="dipl_star_rating_image_container">
							<img src={ imageUrl } alt={ attributes?.imageAlt || '' } class="dipl_star_rating_image" />
						</div>
					) }
					<div className="dipl_star_rating_title_container">
						{ ( false === attributes.hideTitle ) && (
							<RichText
								className="dipl_star_rating_title"
								tagName={ attributes.titleLevel }
								value={ attributes.title }
								onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
								placeholder={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
							/>
						) }
						{ ratingWrapper }
					</div>
					<div className="dipl_star_rating_description">
						<RichText tagName="div"
							className="dipl_star_rating_description"
							value={ attributes.description }
							onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
							placeholder={ __( 'Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-blocks-and-addons' ) }
						/>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Edit;
