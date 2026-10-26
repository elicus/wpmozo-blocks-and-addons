/**
 * Pure helpers for the icon picker. Everything is derived from each option's
 * `value` (class string) and `label`; no extra icon metadata is needed.
 */
import { __ } from '@wordpress/i18n';

export const STYLE_LABELS = {
	fas: __( 'Solid', 'wpmozo-blocks-and-addons' ),
	far: __( 'Regular', 'wpmozo-blocks-and-addons' ),
	fab: __( 'Brands', 'wpmozo-blocks-and-addons' ),
};

// Known styles are listed in this order; other prefixes follow in library order.
const STYLE_ORDER = [ 'fas', 'far', 'fab' ];

const tokens = ( value = '' ) => String( value ).trim().split( /\s+/ );

// "fas fa-truck" → "fas".
export const getPrefix = ( value ) => ( value ? tokens( value )[ 0 ] : '' );

// "fas fa-truck" → "Solid". Unknown prefixes show the raw prefix.
export const getStyleLabel = ( value ) => {
	const prefix = getPrefix( value );
	return STYLE_LABELS[ prefix ] || prefix;
};

// "fas fa-truck" → "truck".
export const getIconName = ( value ) =>
	value ? tokens( value ).pop().replace( /^fa-/, '' ) : '';

const indexCache = new WeakMap();

/**
 * Searchable list of the real icons (the "None" option, whose value is empty, is left out).
 * Cached per options array, so reopening the popover doesn't rebuild it.
 *
 * @param {Array} options Icon options ({ value, label }).
 * @return {Array} Indexed icons.
 */
export const buildIndex = ( options ) => {
	if ( indexCache.has( options ) ) {
		return indexCache.get( options );
	}
	const index = options
		.filter( ( option ) => option && option.value )
		.map( ( option ) => {
			const label = String( option.label ?? option.value );
			return {
				value: option.value,
				label,
				prefix: getPrefix( option.value ),
				searchLabel: label.toLowerCase(),
				searchName: getIconName( option.value ).toLowerCase(),
			};
		} );
	indexCache.set( options, index );
	return index;
};

/**
 * Case-insensitive search on the label and the class name.
 * Prefix matches come first, then substring matches; each group keeps library order.
 *
 * @param {Array}  index Indexed icons.
 * @param {string} query Search text.
 * @return {Array} Ranked matches.
 */
export const searchIcons = ( index, query ) => {
	const q = query.trim().toLowerCase();
	if ( ! q ) {
		return index;
	}
	const prefixMatches = [];
	const substringMatches = [];
	for ( const item of index ) {
		if (
			item.searchLabel.startsWith( q ) ||
			item.searchName.startsWith( q )
		) {
			prefixMatches.push( item );
		} else if (
			item.searchLabel.includes( q ) ||
			item.searchName.includes( q )
		) {
			substringMatches.push( item );
		}
	}
	return prefixMatches.concat( substringMatches );
};

// Distinct prefixes in the library, known styles first.
export const getStyles = ( index ) => {
	const seen = [];
	for ( const item of index ) {
		if ( ! seen.includes( item.prefix ) ) {
			seen.push( item.prefix );
		}
	}
	return [
		...STYLE_ORDER.filter( ( prefix ) => seen.includes( prefix ) ),
		...seen.filter( ( prefix ) => ! STYLE_ORDER.includes( prefix ) ),
	];
};

export const countByStyle = ( items ) => {
	const counts = {};
	for ( const item of items ) {
		counts[ item.prefix ] = ( counts[ item.prefix ] || 0 ) + 1;
	}
	return counts;
};

export const formatCount = ( count ) => Number( count ).toLocaleString();
