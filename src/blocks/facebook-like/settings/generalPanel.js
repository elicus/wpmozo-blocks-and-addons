import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const siteUrl = useSelect( ( select ) =>
		select( 'core' ).getSite()?.url
	, [] );

	return ( <>
		{/* Configuration. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Facebook APP ID', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.fbAppId }
				onChange={ ( newValue ) => setAttributes( { fbAppId: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<TextControl
				label={ __( 'Page URL', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.pageURL }
				onChange={ ( newValue ) => setAttributes( { pageURL: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
				placeholder={ siteUrl }
			/><hr />
			<ToggleControl
				label={ __( 'Enable lazy loading', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.lazyLoading }
				onChange={ ( newValue ) => setAttributes( { lazyLoading: newValue } ) }
			/>
		</PanelBody>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<SelectControl
				label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.buttonLayout }
				options={ [
					{ value: 'standard', label: __( 'Standard', 'wpmozo-blocks-and-addons' ) },
					{ value: 'button', label: __( 'Button', 'wpmozo-blocks-and-addons' ) },
					{ value: 'button_count', label: __( 'Button Count', 'wpmozo-blocks-and-addons' ) },
					{ value: 'box_count', label: __( 'Box Count', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { buttonLayout: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Button Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.buttonSize }
				options={ [
					{ value: 'small', label: __( 'Small', 'wpmozo-blocks-and-addons' ) },
					{ value: 'large', label: __( 'Large', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { buttonSize: newValue } ) }
			/>
		</PanelBody>
	</> );
};
