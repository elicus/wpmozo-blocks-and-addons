/**
 * Unit tests for the header launcher: the library opens directly and the sidebar state from
 * before comes back.
 */
import { launcherChange, LAUNCHER_AREA, DEFAULT_AREA } from '../launcher';

describe( 'launcherChange', () => {
	it( 'does nothing when another sidebar becomes active or the sidebar closes', () => {
		for ( const area of [
			'edit-post/block',
			DEFAULT_AREA,
			null,
			undefined,
		] ) {
			expect(
				launcherChange( {
					area,
					previous: LAUNCHER_AREA,
					lastShown: null,
					isFirst: false,
				} )
			).toBeNull();
		}
	} );

	it( 'opens the library and keeps the open sidebar when another one was open', () => {
		expect(
			launcherChange( {
				area: LAUNCHER_AREA,
				previous: 'edit-post/block',
				lastShown: 'edit-post/block',
				isFirst: false,
			} )
		).toEqual( { restore: 'edit-post/block', close: false, open: true } );
	} );

	it( 'opens the library and closes the sidebar again when it was closed', () => {
		expect(
			launcherChange( {
				area: LAUNCHER_AREA,
				previous: null,
				lastShown: 'edit-post/block',
				isFirst: false,
			} )
		).toEqual( { restore: 'edit-post/block', close: true, open: true } );
	} );

	it( 'falls back to the post settings sidebar when no other sidebar was seen', () => {
		for ( const previous of [ null, undefined ] ) {
			expect(
				launcherChange( {
					area: LAUNCHER_AREA,
					previous,
					lastShown: null,
					isFirst: false,
				} )
			).toEqual( { restore: DEFAULT_AREA, close: true, open: true } );
		}
	} );

	it( 'shows the post settings without opening the library when the editor loads with the launcher active', () => {
		expect(
			launcherChange( {
				area: LAUNCHER_AREA,
				previous: undefined,
				lastShown: null,
				isFirst: true,
			} )
		).toEqual( { restore: DEFAULT_AREA, close: false, open: false } );
	} );
} );
