import { __ } from '@wordpress/i18n';

import {
    PanelBody,
	HeightControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Container', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<HeightControl
				label={ __( 'Container Height', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.containerHeight }
				onChange={ ( newValue ) => setAttributes( { containerHeight: newValue } ) }
			/>
		</PanelBody>
	</> );
};
