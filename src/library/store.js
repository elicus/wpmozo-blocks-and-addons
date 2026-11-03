/**
 * Pattern Library UI state shared by every entry point (More menu, header launcher,
 * placeholder block): whether the library is open and where inserted patterns go.
 */
import { createReduxStore, register } from '@wordpress/data';

export const STORE_NAME = 'wpmozo/library';

const DEFAULT_STATE = { isOpen: false, target: null };

const store = createReduxStore( STORE_NAME, {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'OPEN':
				return { isOpen: true, target: action.target || null };
			case 'CLOSE':
				return DEFAULT_STATE;
		}
		return state;
	},
	actions: {
		/**
		 * Open the library.
		 *
		 * @param {?Object} target Optional insertion target, e.g. { replaceClientId }.
		 */
		open( target = null ) {
			return { type: 'OPEN', target };
		},
		close() {
			return { type: 'CLOSE' };
		},
	},
	selectors: {
		isOpen( state ) {
			return state.isOpen;
		},
		getTarget( state ) {
			return state.target;
		},
	},
} );

register( store );

export default store;
