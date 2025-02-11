
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/content-toggle', {
	title: __( 'Content Toggle', 'wpmozo-addons-lite-for-gutenberg' ),
    apiVersion: 2,
    icon: Icon,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'content-toggle', 'content' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
    example: {},
});