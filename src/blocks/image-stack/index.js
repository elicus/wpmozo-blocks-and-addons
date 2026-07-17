import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import advancedAttributes from '../../common/components/advanced-panel/advancedAttributes';
import Edit from './edit';
import save from './save';
import Icon from './icon';
import deprecated from './deprecated';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing  keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

const mergedAttributes = {
	...metadata.attributes,
	...advancedAttributes,
};

registerBlockType( metadata.name, {
	attributes: mergedAttributes,
	edit: Edit,
	icon: Icon,
	save,
	deprecated
} );
