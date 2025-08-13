import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";
import {
	PanelBody,
	SelectControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Gallery settings. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<SelectControl
				label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={ [{
					value: 'default',
					label: __( 'Default', 'wpmozo-blocks-and-addons' ),
				},
					{
						value: 'inline',
						label: __( 'Inline', 'wpmozo-blocks-and-addons' ),
					},]
				}
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
			/>
		</PanelBody>

	</> );
};
