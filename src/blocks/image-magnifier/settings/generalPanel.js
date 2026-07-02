import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	TextControl
} from "@wordpress/components";
import {
	WpmozoMediaUploader
} from '../../../common/components/index';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<WpmozoMediaUploader props={props}
				attrKye="image"
			/>
			<TextControl
				label={ __( 'Image Alt', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageAlt }
				onChange={ ( newValue ) => setAttributes( { imageAlt: newValue } ) }
			/>
		</PanelBody>
	</> );
};
