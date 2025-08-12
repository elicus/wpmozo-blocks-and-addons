import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
	TextareaControl,
} from "@wordpress/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Fancy Text Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Text Style', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.textStyle }
				options={ [
					{ value: 'gradient', label: __( 'Gradient', 'wpmozo-blocks-and-addons' ) },
					{ value: 'clipping', label: __( 'Background Clipping', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { textStyle: newValue } ) }
			/>
			<TextareaControl
				label={ __( 'Fancy Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { fancyText: newValue } ) }
				value={ attributes.fancyText }
			/>
		</PanelBody>
	</> );
};
