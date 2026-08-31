/**
 * module-utils.js
 * Utility functions for rating icons + SVG preloader.
 */

// Icon helpers (you may already have these here).
export const isSmiley = ( icon ) => [ "smiley_scale" ].includes( icon );

export const getIconKey = ( icon, type, mood ) => {
	if ( isSmiley(icon) && mood ) return `${icon}/${mood}_${type}`;
	return `${icon}-${type}`;
};

export const getIconUrl = ( icon, type, mood ) => {
	// For smiley we need mood-specific files.
	if ( isSmiley( icon ) && mood ) {
		return wpmozo_bna_editor_object.assets_url + `rate-icons/${icon}/${mood}_${type}.svg`;
	}
	// Other icon packs: one file per type.
	return wpmozo_bna_editor_object.assets_url + `rate-icons/${icon}-${type}.svg`;
};

/**
 * Render a single SVG icon (already preloaded).
 *
 * @param   {string} icon
 * @param   {string} type
 * @param   {number} mood
 * @param   {object} attributes
 * @returns {JSX.Element|null}
 */
export const renderSVGIcon = (
	icon,
	type,
	mood = 1,
	_setAttributes = null,
	attributes = {}
) => {
	const key = getIconKey( icon, type, mood );
	const svg = attributes.iconSVGs?.[key]?.[mood];
	return svg ? (
		<span dangerouslySetInnerHTML={ { __html: svg } }
			className={`wpmozo_star_rating_star wpmozo-rating-icon-custom wpmozo_star_rating_${type} wpmozo-rating-icon-${icon}`}
			key={`${icon}-${type}-${mood}`}
		/>
	) : null;
};

/**
 * Preload required SVGs into attributes.iconSVGs
 *
 * @param {string} rateIcon
 * @param {number} ratingOutOf
 * @param {object} attributes
 * @param {function} setAttributes
 */
export const preloadSVGs = async (
	rateIcon,
	moods,
	types,
	attributes,
	setAttributes,
	clearCache = false
) => {
	// Start from empty cache if icon type changed, otherwise use current cache.
	const current = clearCache ? {} : ( attributes.iconSVGs || {} );
	let updated = { ...current };
	let changed = clearCache;
	const loadOnce = async ( url ) => {
		const res = await fetch( url );
		if ( ! res.ok ) {
			throw new Error( 'Failed to fetch ' + url );
		}
		return res.text();
	};

	for ( const type of types ) {
		if ( isSmiley ( rateIcon ) ) {
			// Each mood is a different file.
			for ( const mood of moods ) {
				const key  = getIconKey( rateIcon, type, mood );
				const have = updated[key]?.[mood];

				if ( ! have ) {
					try {
						const svg    = await loadOnce( getIconUrl( rateIcon, type, mood ) );
						updated[key] = { ...( updated[key] || {} ), [mood]: svg };
						changed      = true;
					} catch ( e ) {
						console.error( 'Error loading SVG: ', e );
					}
				}
			}
		} else {
			// Non-smiley: one file per type, copy to all moods.
			const keyBaseNoMood = `${rateIcon}-${type}`;

			// Do we already have all moods cached?.
			const haveAll = moods.every( ( m ) => updated[keyBaseNoMood]?.[m] );
			if ( ! haveAll ) {
				try {
					const svg    = await loadOnce( getIconUrl( rateIcon, type, 1 ) );
					const bucket = { ...( updated[keyBaseNoMood] || {} ) };
					for ( const mood of moods ) {
						if ( ! bucket[mood] ) {
							bucket[mood] = svg;
							changed = true;
						}
					}
					updated[keyBaseNoMood] = bucket;
				} catch (e) {
					console.error( 'Error loading SVG: ', e );
				}
			}
		}
	}
	if ( changed ) {
		setAttributes( { iconSVGs: updated } );
	}
};