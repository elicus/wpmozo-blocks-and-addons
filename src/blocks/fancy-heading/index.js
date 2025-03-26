
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/fancy-heading', {
	title: __( 'Fancy Heading', 'wpmozo-blocks-and-addons' ),
    icon: Icon,
    apiVersion: 2,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'fancy-heading', 'heading' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
    example: {},
});