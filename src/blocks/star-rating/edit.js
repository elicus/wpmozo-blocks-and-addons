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

import {
	isSmiley,
	renderSVGIcon,
	preloadSVGs,
} from "./module-utils"; // import utils.
import { mergeWrapperProps } from '../../common/utils.js';

const Edit = ( props ) => {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-star-rating${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
		isEdit = true;
	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const imageUrl    = ( attributes.image ) ? attributes.image : '';
	const rateIcon    = ( attributes.rateIcon ) ?? 'default';
	const showRateNum = ( attributes.showRateNum ) ?? true;
	// Track previous rateIcon to force reload even if "same" is chosen.
	const prevRateIcon = useRef( null );

	// ratingOutOf (force 5 for smiley).
	let ratingOutOf = ( attributes.ratingOutOf && '' !== attributes.ratingOutOf ) ? attributes.ratingOutOf : 5;
	if ( isSmiley( rateIcon ) && ratingOutOf !== 5 ) {
		ratingOutOf = 5;
	}

	// Calculate rating rounded to .0 or .5.
	let rating = parseFloat( attributes.rating ) ?? 5;
	if ( rating > ratingOutOf ) {
		rating = ratingOutOf;
	} else {
		const floorInt = Math.abs( parseInt( rating ) );
		const mid = parseFloat( floorInt + 0.5 );
		if ( rating > mid ) {
			rating = Math.ceil( rating );
		} else if ( rating !== floorInt ) {
			rating = mid;
		}
	}
	
	// Preload required SVGs.
	useEffect( () => {
		// If first load OR reselecting same icon → reset cache.
		if ( prevRateIcon.current === rateIcon ) {
			// reselect same icon, force clear.
			setAttributes( { iconSVGs: {} } );
		}
		prevRateIcon.current = rateIcon;

		// Define moods (1..ratingOutOf) and icon types.
		const moods = Array.from( { length: ratingOutOf }, (_, i) => i + 1 );
		const types = [ 'filled', 'half_filled', 'empty' ];

		// Load all SVGs for this icon set.
		preloadSVGs( rateIcon, moods, types, attributes, setAttributes );

		// eslint-disable-line react-hooks/exhaustive-deps.
	}, [ rateIcon, ratingOutOf ] );
	let ratingWrapper = '';
	if ( rating && rating > 0 ) {
		let unfilled_stars  = '';
		let rating_number   = '';
		let stars           = [];
		let mood            = 1;

		for ( let i = 1; i <= Math.abs( parseInt( rating ) ); i++ ) {
			if ( 'default' !== rateIcon ) {
				stars.push( renderSVGIcon( rateIcon, 'filled', mood, null, attributes ) );
			} else {
				stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_filled_star" key={`f-${i}`} /> );
			}
			mood++;
		}
		console.log(rating !== Math.abs(parseInt( rating ) ));
		if ( rating !== Math.abs(parseInt( rating ) ) ) {
			if ('default' !== rateIcon) {
				stars.push( renderSVGIcon( rateIcon, 'half_filled', mood, null, attributes ) );
			} else {
				stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_half_filled_star" key="hf" /> );
			}
			mood++;
			unfilled_stars = ratingOutOf - Math.abs( parseInt( rating ) ) - 1;
		} else {
			unfilled_stars = ratingOutOf - Math.abs( parseInt( rating ) );
		}

		for ( let i = 1; i <= unfilled_stars; i++ ) {
			if ('default' !== rateIcon) {
				stars.push( renderSVGIcon(rateIcon, 'empty', mood, null, attributes) );
			} else {
				stars.push( <span className="wpmozo_star_rating_star wpmozo_star_rating_empty_star" key={`e-${i}`} /> );
			}
			mood++;
		}

		if ( true === showRateNum ) {
			rating_number = <span className="wpmozo_star_rating_number">( {rating}/{ratingOutOf} )</span>;
		}

		ratingWrapper = (
			<div className="wpmozo_star_rating_rating_wrapper">
				<span itemProp="starRating" itemScope itemType="http://schema.org/Rating">
					<meta itemProp="ratingValue" content={ String( rating ) } />
					<span className="wpmozo_star_rating_stars">{ stars }</span>
					{ rating_number }
				</span>
			</div>
		);
	}
	// console.log(stars);

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, isEdit } ) }</style>

			<div {...blockProps} id={`block-${clientId}`}>
				<div className="wpmozo_star_rating_wrapper">
					{ ( imageUrl && '' !== imageUrl ) && (
						<div className="wpmozo_star_rating_image_container">
							<img src={ imageUrl } alt={ attributes?.imageCustomAlt || attributes?.imageAlt || '' } className="wpmozo_star_rating_image" />
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
