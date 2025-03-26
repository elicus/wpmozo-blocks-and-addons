
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/list', {
	title: __( 'List', 'wpmozo-blocks-and-addons' ),
    icon: Icon,
    apiVersion: 2,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'list' ],
    attributes: attributes,
    supports: {
        splitting: true
    },
    edit: Edit,
	save: Save,
});