import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/before-after-slider', {
	title: __( 'Before After Slider', 'wpmozo-blocks-and-addons' ),
    icon: Icon,
    apiVersion: 3,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'before-after-slider', 'before-after' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});