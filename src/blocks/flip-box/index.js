
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import Icon from "./icon.js";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/flip-box', {
	title: __( 'Flip Box', 'wpmozo-addons-lite-for-gutenberg' ),
    icon: Icon,
    apiVersion: 3,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'flip-box', 'box' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});