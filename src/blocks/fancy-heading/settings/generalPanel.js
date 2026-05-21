import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	ToggleControl,
	TextControl,
} from "@wordpress/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Heading Content. */}
		<PanelBody title={ __( 'Heading Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Pre Heading', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.preHeading }
				onChange={ ( newValue ) => setAttributes( { preHeading: newValue } ) }
			/>
			<TextControl
				label={ __( 'Main Heading', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.mainHeading }
				onChange={ ( newValue ) => setAttributes( { mainHeading: newValue } ) }
			/>
			<TextControl
				label={ __( 'Post Heading', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.postHeading }
				onChange={ ( newValue ) => setAttributes( { postHeading: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Display In Stack', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.displayInStack }
				onChange={ ( newValue ) => setAttributes( { displayInStack: newValue } ) }
			/>
		</PanelBody>
	</> );
};
