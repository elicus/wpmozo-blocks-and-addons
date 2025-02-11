
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType( 'wpmozo/instagram', {
    title: __( 'Instagram', 'wpmozo-addons-for-gutenberg' ),
    icon: 'instagram',
    apiVersion: 2,
    category: 'wpmozo',
    keywords: [ 'wpmozo', 'instagram-feed', 'instagram' ],
    attributes: attributes,
    edit: Edit,
    save: Save,
});