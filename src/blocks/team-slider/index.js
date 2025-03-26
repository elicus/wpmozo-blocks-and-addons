
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/team-slider', {
	title: __( 'Team Slider', 'wpmozo-blocks-and-addons' ),
    icon: '',
    apiVersion: 2,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'team-slider', 'slider', 'team' ],
    attributes: attributes,
    edit: Edit,
	save: Save,
});