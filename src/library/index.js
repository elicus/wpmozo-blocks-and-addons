/**
 * Pattern Library editor entry (docs/pattern-library/editor-ui.md).
 *
 * Entry points use public editor APIs only: a pinnable header icon that opens the library
 * directly (src/library/launcher.js), its "Pattern Library" item that WordPress adds to the
 * Options menu (the only library item there, PL-D32), and the placeholder block
 * (`wpmozo/pattern-library`, src/blocks/pattern-library).
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/editor';
import { Button } from '@wordpress/components';
import { dispatch, useDispatch, useRegistry, useSelect } from '@wordpress/data';
import { useLayoutEffect, useRef } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { store as blocksStore } from '@wordpress/blocks';
import { STORE_NAME } from './store';
import {
	INTERFACE_STORE,
	LAUNCHER_AREA,
	LAUNCHER_NAME,
	SCOPE,
	launcherChange,
} from './launcher';
import LibraryModal from './components/library-modal';
import { libraryIcon } from './assets';
import './style.scss';

/**
 * Opens the library when the header icon (or its Options menu item) activates the launcher
 * sidebar, and puts the sidebar state from before back in the same frame.
 *
 * @param {Function} open Opens the library.
 * @return {boolean} Whether the editor lets the launcher open the library directly.
 */
function useDirectLauncher( open ) {
	const registry = useRegistry();
	const { area, direct } = useSelect( ( select ) => {
		const ui = select( INTERFACE_STORE );
		const canRead = typeof ui?.getActiveComplementaryArea === 'function';
		return {
			area: canRead ? ui.getActiveComplementaryArea( SCOPE ) : undefined,
			direct: canRead,
		};
	}, [] );
	const previous = useRef();
	const lastShown = useRef( null );
	const isFirst = useRef( true );

	// A layout effect, so the launcher sidebar is replaced before the browser paints it.
	useLayoutEffect( () => {
		const change = direct
			? launcherChange( {
					area,
					previous: previous.current,
					lastShown: lastShown.current,
					isFirst: isFirst.current,
			  } )
			: null;
		isFirst.current = false;
		if ( ! change ) {
			previous.current = area;
			if ( area && area !== LAUNCHER_AREA ) {
				lastShown.current = area;
			}
			return;
		}
		const ui = registry.dispatch( INTERFACE_STORE );
		const restore = () => {
			ui.enableComplementaryArea( SCOPE, change.restore );
			if ( change.close ) {
				ui.disableComplementaryArea( SCOPE );
			}
		};
		if ( typeof registry.batch === 'function' ) {
			registry.batch( restore );
		} else {
			restore();
		}
		if ( change.open ) {
			open();
		}
	}, [ area, direct, open, registry ] );

	return direct;
}

function PatternLibrary() {
	const isOpen = useSelect( ( select ) => select( STORE_NAME ).isOpen(), [] );
	const { open } = useDispatch( STORE_NAME );
	const direct = useDirectLauncher( open );

	return (
		<>
			{ /* WordPress also lists this sidebar in the Options menu as "Pattern Library". */ }
			<PluginSidebar
				name={ LAUNCHER_NAME }
				title={ __( 'Pattern Library', 'wpmozo-blocks-and-addons' ) }
				icon={ libraryIcon }
				// Hides the launcher sidebar during WordPress's sidebar animation (style.scss).
				className={
					direct ? 'wpmozo-library-launcher-direct' : undefined
				}
			>
				{ /* Shown only in an editor without the sidebar store the launcher reads. */ }
				{ ! direct && (
					<div className="wpmozo-library-launcher">
						<p>
							{ __(
								'Browse ready-made sections and add them to this page.',
								'wpmozo-blocks-and-addons'
							) }
						</p>
						<Button
							variant="primary"
							__next40pxDefaultSize
							onClick={ () => open() }
						>
							{ __(
								'Open Pattern Library',
								'wpmozo-blocks-and-addons'
							) }
						</Button>
					</div>
				) }
			</PluginSidebar>
			{ isOpen && <LibraryModal /> }
		</>
	);
}

registerPlugin( LAUNCHER_NAME, { render: PatternLibrary } );

// The placeholder block is hidden from the inserter in block.json. This script loads only
// where the library can be used, so it shows the block there. If the block registered
// first and the editor lacks reapplyBlockTypeFilters, it stays hidden: it fails safe.
addFilter(
	'blocks.registerBlockType',
	'wpmozo/library/placeholder-inserter',
	( settings, name ) =>
		'wpmozo/pattern-library' === name
			? {
					...settings,
					supports: { ...settings.supports, inserter: true },
			  }
			: settings
);
dispatch( blocksStore ).reapplyBlockTypeFilters?.();
