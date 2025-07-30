import V1 from './deprecated/version-1';
import {registerBlockType} from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import save from './save';
import Icon from './icon';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing  keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

registerBlockType(metadata.name, {
	edit: Edit,
	icon: Icon,
	save,
	deprecated: [ V1 ]
});
