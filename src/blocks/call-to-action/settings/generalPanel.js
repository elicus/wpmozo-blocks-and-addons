import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	TextControl,
	ToggleControl,
	TextareaControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Content. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.title }
				onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
				__next40pxDefaultSize __nextHasNoMarginBottom
			/>
			<TextareaControl
				label={ __( 'Description', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.description }
				onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
		</PanelBody>
		{/* Button. */}
		<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<ToggleControl
				label={ __( 'Show Button', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showButton }
				onChange={ ( newValue ) => setAttributes( { showButton: newValue } ) }
			/>
			{ attributes.showButton && <>
				<TextControl
					label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonText }
					onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
				/>
				<TextControl
					label={ __( 'Button URL', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { buttonUrl: newValue } ) }
					value={ attributes.buttonUrl }
				/>
				<ToggleGroupControl
					label={ __( 'Button Link Target', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonLinkTarget }
					onChange={ ( newValue ) => setAttributes( { buttonLinkTarget: newValue } ) }
				>
					<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
			</> }
		</PanelBody>
	</> );
};
