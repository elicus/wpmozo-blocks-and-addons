/**
 * Header launcher (docs/pattern-library/editor-ui.md, PL-D31).
 *
 * `PluginSidebar` is the only public API for an icon in the editor header. Its pinned icon, and
 * the item WordPress adds for it to the Options menu, make its sidebar the active one in the
 * editor's `core` scope (`core/interface` store). The library shows no sidebar: when the launcher
 * sidebar becomes active, the sidebar state from before comes back at once, before the browser
 * paints, and the library window opens.
 */

export const LAUNCHER_NAME = 'wpmozo-pattern-library';

// The launcher sidebar's identifier: `<plugin name>/<sidebar name>`.
export const LAUNCHER_AREA = `${ LAUNCHER_NAME }/${ LAUNCHER_NAME }`;

export const SCOPE = 'core';

export const INTERFACE_STORE = 'core/interface';

// The editor's post settings sidebar, used when no other sidebar was seen yet.
export const DEFAULT_AREA = 'edit-post/document';

/**
 * What to do when the active sidebar changes.
 *
 * @param {Object}  state           Sidebar state.
 * @param {?string} state.area      Active sidebar now: an identifier, null when the sidebar is
 *                                  closed, undefined while the editor loads.
 * @param {?string} state.previous  Active sidebar before the change.
 * @param {?string} state.lastShown Last sidebar other than the launcher that was open.
 * @param {boolean} state.isFirst   True for the first state seen after the editor loads.
 * @return {?Object} Null when the launcher sidebar didn't become active. Otherwise:
 *                   `restore`, the sidebar to make active again; `close`, whether to close the
 *                   sidebar after that (it was closed before); `open`, whether to open the
 *                   library. When the editor loads with the launcher active, the post settings
 *                   take its place and the library stays closed: the user didn't ask for it.
 */
export function launcherChange( { area, previous, lastShown, isFirst } ) {
	if ( area !== LAUNCHER_AREA ) {
		return null;
	}
	if ( isFirst ) {
		return { restore: DEFAULT_AREA, close: false, open: false };
	}
	const wasOpen = !! previous && previous !== LAUNCHER_AREA;
	return {
		restore: wasOpen ? previous : lastShown || DEFAULT_AREA,
		close: ! wasOpen,
		open: true,
	};
}
