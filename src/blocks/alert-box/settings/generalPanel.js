import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
	TextareaControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import {
	WpmozoMediaUploader,
	WpmozoIconpicker
} from '../../../common/components/index';

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
			<ToggleControl
				label={__('Use Image', 'wpmozo-blocks-and-addons')}
				checked={attributes.useImage}
				onChange={(newValue) => setAttributes({useImage: newValue})}
			/>
			{ !attributes.useImage && ( <>
				<WpmozoIconpicker props={ props }
					label={ __( 'Select Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='icon'
					value={ attributes.icon }
					onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
				/>
			</>) }
			{ attributes.useImage && ( <>
				<WpmozoMediaUploader props={props}
					attrKye="image"
				/>
				<TextControl
					label={ __( 'Image ALT Text', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.imageAlt }
					onChange={ ( newValue ) => setAttributes( { imageAlt: newValue } ) }
					__next40pxDefaultSize __nextHasNoMarginBottom
				/>
			</>) }
			
		</PanelBody>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<SelectControl
				label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={ [{
					value: 'layout1',
					label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ),
				},
				{
					value: 'layout2',
					label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ),
				}]
				}
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Show Close Button', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showCloseButton }
				onChange={ ( newValue ) => setAttributes( { showCloseButton: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Show Alert Button', 'wpmozo-blocks-and-addons' ) }
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
