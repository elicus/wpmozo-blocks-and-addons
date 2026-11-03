/**
 * Pattern Library placeholder block (docs/pattern-library/editor-ui.md).
 *
 * Opens the library and is replaced by the pattern the user picks. It saves no markup and
 * renders nothing on the front end. It stays registered even where the library is off, so
 * saved placeholders never break; block.json hides it from the inserter and the library
 * script shows it only where the library can be used.
 */
import { registerBlockType } from '@wordpress/blocks';

import metadata from './block.json';
import Edit from './edit';
import { libraryIcon } from '../../library/assets';

registerBlockType( metadata.name, {
	icon: libraryIcon,
	edit: Edit,
	save: () => null,
} );
