/**
 * Placeholder editor view: a button that opens the library with this block as the target,
 * or a short explanation where the library isn't available (switched off, no permission,
 * or an editor other than the post editor).
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Button, Placeholder } from '@wordpress/components';
import { useRegistry, useSelect } from '@wordpress/data';

import { libraryIcon } from '../../library/assets';

// Registered by the library script, which loads only where the library can be used.
const LIBRARY_STORE = 'wpmozo/library';

export default function Edit( { clientId } ) {
	const registry = useRegistry();
	const canUse = useSelect( ( select ) => !! select( LIBRARY_STORE ), [] );

	return (
		<div { ...useBlockProps() }>
			<Placeholder
				icon={ libraryIcon }
				label={ __( 'Pattern Library', 'wpmozo-blocks-and-addons' ) }
				instructions={
					canUse
						? __(
								'Choose a ready-made section. It replaces this block.',
								'wpmozo-blocks-and-addons'
						  )
						: __(
								'The Pattern Library isn’t available here. This block shows nothing on your site, so you can remove it.',
								'wpmozo-blocks-and-addons'
						  )
				}
			>
				{ canUse && (
					<Button
						variant="primary"
						__next40pxDefaultSize
						onClick={ () =>
							registry
								.dispatch( LIBRARY_STORE )
								.open( { replaceClientId: clientId } )
						}
					>
						{ __(
							'Open Pattern Library',
							'wpmozo-blocks-and-addons'
						) }
					</Button>
				) }
			</Placeholder>
		</div>
	);
}
