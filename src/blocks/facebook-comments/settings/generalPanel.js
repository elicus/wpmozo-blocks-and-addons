import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

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
			/>
			<TextControl
				label={ __( 'Number of Comments', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.numPosts }
				onChange={ ( newValue ) => setAttributes( { numPosts: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<SelectControl
				label={ __( 'Order By', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.orderBy }
				options={ [
					{ value: 'social', label: __( 'Top', 'wpmozo-blocks-and-addons' ) },
					{ value: 'reverse_time', label: __( 'Newest', 'wpmozo-blocks-and-addons' ) },
					{ value: 'time', label: __( 'Oldest', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { orderBy: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/><hr />
			<ToggleControl
				label={ __( 'Enable lazy loading', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.lazyLoading }
				onChange={ ( newValue ) => setAttributes( { lazyLoading: newValue } ) }
			/>
		</PanelBody>
	</> );
};
