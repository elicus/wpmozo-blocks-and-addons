
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/fancy-text', {
	title: __( 'Fancy Text', 'wpmozo-blocks-and-addons' ),
    icon: Icon,
    apiVersion: 3,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'fancy-text', 'text' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
    example: {},
});