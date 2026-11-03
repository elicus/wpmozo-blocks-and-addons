/**
 * Pure search, filter and sort helpers for the catalog (unit-tested in test/search.test.js).
 */

/**
 * Lowercase and strip accents so "Café" matches "cafe".
 *
 * @param {string} text Text.
 * @return {string} Normalised text.
 */
export function normalise( text ) {
	return String( text || '' )
		.normalize( 'NFD' )
		.replace( /[̀-ͯ]/g, '' )
		.toLowerCase()
		.trim();
}

/**
 * Search score: title match ranks above keywords, tags and description. 0 = no match.
 *
 * @param {Object} pattern    Catalog pattern.
 * @param {Array}  words      Normalised query words.
 * @param {Object} categories Category labels by id.
 * @return {number} Score.
 */
export function score( pattern, words, categories = {} ) {
	if ( ! words.length ) {
		return 1;
	}
	const title = normalise( pattern.title );
	const keywords = normalise( ( pattern.keywords || [] ).join( ' ' ) );
	const tags = normalise( ( pattern.tags || [] ).join( ' ' ) );
	const category = normalise( categories[ pattern.category ] || '' );
	const description = normalise( pattern.description );
	let total = 0;
	for ( const word of words ) {
		let best = 0;
		if ( title.startsWith( word ) ) {
			best = 8;
		} else if ( title.includes( word ) ) {
			best = 6;
		} else if ( keywords.includes( word ) || tags.includes( word ) ) {
			best = 4;
		} else if ( category.includes( word ) ) {
			best = 3;
		} else if ( description.includes( word ) ) {
			best = 1;
		}
		if ( ! best ) {
			return 0;
		}
		total += best;
	}
	return total;
}

/**
 * Compare dotted versions ("1.10.0" > "1.9.0").
 *
 * @param {string} a Version.
 * @param {string} b Version.
 * @return {number} Negative, zero or positive.
 */
export function compareVersions( a, b ) {
	const pa = String( a || '0' )
		.split( '.' )
		.map( Number );
	const pb = String( b || '0' )
		.split( '.' )
		.map( Number );
	for ( let i = 0; i < Math.max( pa.length, pb.length ); i++ ) {
		const diff = ( pa[ i ] || 0 ) - ( pb[ i ] || 0 );
		if ( diff ) {
			return diff;
		}
	}
	return 0;
}

/**
 * Apply search, filters and sort.
 *
 * @param {Array}  patterns   Catalog patterns.
 * @param {Object} options    { query, source: 'all'|'free'|'pro', category, availableOnly, sort: 'recommended'|'newest'|'title' }.
 * @param {Object} categories Category labels by id.
 * @return {Array} Matching patterns, sorted.
 */
export function filterPatterns( patterns, options, categories = {} ) {
	const words = normalise( options.query ).split( /\s+/ ).filter( Boolean );
	const results = [];
	for ( const pattern of patterns ) {
		if ( options.source === 'free' && pattern.access !== 'free' ) {
			continue;
		}
		if ( options.source === 'pro' && pattern.access !== 'pro' ) {
			continue;
		}
		if ( options.category && pattern.category !== options.category ) {
			continue;
		}
		if (
			options.availableOnly &&
			pattern.availability.state !== 'available'
		) {
			continue;
		}
		const s = score( pattern, words, categories );
		if ( s > 0 ) {
			results.push( { pattern, s } );
		}
	}
	results.sort( ( a, b ) => {
		if ( words.length && b.s !== a.s ) {
			return b.s - a.s;
		}
		if ( options.sort === 'title' ) {
			return a.pattern.title.localeCompare( b.pattern.title );
		}
		if ( options.sort === 'newest' ) {
			return (
				compareVersions( b.pattern.since, a.pattern.since ) ||
				a.pattern.order - b.pattern.order
			);
		}
		return a.pattern.order - b.pattern.order;
	} );
	return results.map( ( r ) => r.pattern );
}
