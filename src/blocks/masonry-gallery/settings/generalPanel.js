import { __ } from '@wordpress/i18n';

import {
    PanelBody,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Gallery settings. */}
		<PanelBody title={ __( 'Gallery settings', 'wpmozo-blocks-and-addons' ) }>
			<RangeControl
				label={ __( 'Custom Gutter size (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.customGutterSize }
				onChange={ ( newValue ) => setAttributes( { customGutterSize: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
			<RangeControl
				label={ __( 'Number Of Columns', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.numberOfColumns }
				onChange={ ( newValue ) => setAttributes( { numberOfColumns: newValue } ) }
				min={ 2 }
				step={ 1 }
				max={ 10 }
			/>
			<ToggleControl
				label={ __( 'Show Caption', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showCaption }
				onChange={ ( newValue ) => setAttributes( { showCaption: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Enable Lightbox', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showLightbox }
				onChange={ ( newValue ) => setAttributes( { showLightbox: newValue } ) }
			/>
		</PanelBody>
	</> );
};
