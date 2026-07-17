import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';
import Edit from './edit';
import './style.scss';
import advancedAttributes from '../../common/components/advanced-panel/advancedAttributes';
const mergedAttributes = {
	...metadata.attributes,
	...advancedAttributes,
};


registerBlockType( metadata.name, {
    attributes: mergedAttributes,
    edit: Edit,
    save: () => null,
} );
