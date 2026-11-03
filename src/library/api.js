/**
 * REST client for the Pattern Library (docs/pattern-library/rest-api.md).
 */
import apiFetch from '@wordpress/api-fetch';

let catalogRequest = null;

/**
 * Catalog for the current user, fetched once per editor session.
 *
 * @param {boolean} refresh Fetch again (after an error, for example).
 * @return {Promise<Object>} Catalog.
 */
export function fetchCatalog( refresh = false ) {
	if ( refresh || ! catalogRequest ) {
		catalogRequest = apiFetch( {
			path: '/wpmozo/v1/library/catalog',
		} ).catch( ( error ) => {
			catalogRequest = null;
			throw error;
		} );
	}
	return catalogRequest;
}

/**
 * Content of one pattern. Never cached: the server re-checks access every time.
 *
 * @param {string} id Pattern id, "<source>/<slug>".
 * @return {Promise<Object>} { id, revision, blocks, content }.
 */
export function fetchPattern( id ) {
	const [ source, slug ] = id.split( '/' );
	return apiFetch( {
		path: `/wpmozo/v1/library/patterns/${ encodeURIComponent(
			source
		) }/${ encodeURIComponent( slug ) }`,
	} );
}
