import { __ } from '@wordpress/i18n';
import {HeightControl} from '@wordpress/block-editor';
import {
    PanelBody
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
