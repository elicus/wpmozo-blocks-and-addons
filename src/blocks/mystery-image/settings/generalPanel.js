import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl } from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {

	return ( <>
		<PanelBody title={ __( 'Settings', 'block-development-examples' ) }>
			<ToggleControl
				label={ __( 'Enable Lightbox', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showLightbox }
				onChange={ ( newValue ) => setAttributes( { showLightbox: newValue } ) }
			/>
		</PanelBody>
	</> );
};
