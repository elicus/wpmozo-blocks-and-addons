
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/tilt-image', {
	title: __( 'Tilt Image', 'wpmozo-blocks-and-addons' ),
    icon: Icon,
    apiVersion: 3,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'tilt-image', 'tilt', 'image' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});