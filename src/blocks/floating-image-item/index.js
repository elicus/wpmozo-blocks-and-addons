
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "../floating-image/icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/floating-image-item', {
	title: __( 'Floating Image Item', 'wpmozo-blocks-and-addons' ),
    icon: Icon,
    apiVersion: 2,
    category: 'wpmozo',
    parent: [ 'wpmozo/floating-image' ],
    attributes: attributes,
    edit: Edit,
    save: Save,
});