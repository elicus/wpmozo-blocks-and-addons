
import { __ } from "@wordpress/i18n";
import attributes from "./attributes.json";

let translatKeys = ['noResultText'];
for (var i = 0; i < translatKeys.length; i++) {

    let attr = translatKeys[i],
    defaultValue = attributes[attr]['default'];

    let translated = __( defaultValue, 'wpmozo-blocks-and-addons' );

    attributes[attr]['default'] = translated;
}

export default attributes;