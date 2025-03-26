
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/floating-image', {
	title: __( 'Floating Image', 'wpmozo-blocks-and-addons' ),
    icon: Icon,
    apiVersion: 2,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'floating-image', 'floating', 'image' ],
    attributes: attributes,
    edit: Edit,
    save: Save,
});