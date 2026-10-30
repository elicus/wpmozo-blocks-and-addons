/**
 * Recently picked icons, shared by every picker for the current user.
 * Stored in the core/preferences store when it's registered, else in localStorage.
 */
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback, useState } from '@wordpress/element';
import { store as preferencesStore } from '@wordpress/preferences';

export const MAX_RECENT_ICONS = 7;

const SCOPE = 'wpmozo/icon-picker';
const KEY = 'recentIcons';
const STORAGE_KEY = 'wpmozo-icon-picker-recent';

const readLocal = () => {
	try {
		const list = JSON.parse(
			window.localStorage.getItem( STORAGE_KEY ) || '[]'
		);
		return Array.isArray( list ) ? list : [];
	} catch ( error ) {
		return [];
	}
};

const writeLocal = ( list ) => {
	try {
		window.localStorage.setItem( STORAGE_KEY, JSON.stringify( list ) );
	} catch ( error ) {
		// Storage can be unavailable (private mode, blocked site data); recents just don't persist.
	}
};

export default function useRecentIcons() {
	const { hasStore, stored } = useSelect( ( select ) => {
		const preferences = select( preferencesStore );
		return {
			hasStore: !! preferences,
			stored: preferences ? preferences.get( SCOPE, KEY ) : undefined,
		};
	}, [] );
	const preferencesActions = useDispatch( preferencesStore );
	const [ localRecent, setLocalRecent ] = useState( () =>
		hasStore ? [] : readLocal()
	);

	let recent = localRecent;
	if ( hasStore ) {
		recent = Array.isArray( stored ) ? stored : [];
	}

	const addRecent = useCallback(
		( value ) => {
			if ( ! value ) {
				return;
			}
			const next = [
				value,
				...recent.filter( ( item ) => item !== value ),
			].slice( 0, MAX_RECENT_ICONS );
			if ( hasStore && preferencesActions?.set ) {
				preferencesActions.set( SCOPE, KEY, next );
			} else {
				setLocalRecent( next );
				writeLocal( next );
			}
		},
		[ recent, hasStore, preferencesActions ]
	);

	return [ recent, addRecent ];
}
