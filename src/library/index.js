/**
 * Pattern Library editor entry (docs/pattern-library/editor-ui.md).
 *
 * Entry points use public editor APIs only: an item in the editor's More menu and a
 * pinnable sidebar launcher in the header. The placeholder block is added in Stage D.
 */
import { __ } from '@wordpress/i18n';
import { registerPlugin } from '@wordpress/plugins';
import { PluginMoreMenuItem, PluginSidebar } from '@wordpress/editor';
import { Button } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from './store';
import LibraryModal from './components/library-modal';
import { libraryIcon } from './assets';
import './style.scss';

function PatternLibrary() {
	const isOpen = useSelect( ( select ) => select( STORE_NAME ).isOpen(), [] );
	const { open } = useDispatch( STORE_NAME );

	return (
		<>
			<PluginMoreMenuItem icon={ libraryIcon } onClick={ () => open() }>
				{ __( 'Open Pattern Library', 'wpmozo-blocks-and-addons' ) }
			</PluginMoreMenuItem>
			<PluginSidebar
				name="wpmozo-pattern-library"
				title={ __( 'Pattern Library', 'wpmozo-blocks-and-addons' ) }
				icon={ libraryIcon }
			>
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
			</PluginSidebar>
			{ isOpen && <LibraryModal /> }
		</>
	);
}

registerPlugin( 'wpmozo-pattern-library', { render: PatternLibrary } );
