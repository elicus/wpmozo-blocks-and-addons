import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {
	WpmozoIconpicker, 
    WpmozoMediaUploader
} from '../../../common/components/index';


export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) }  initialOpen={true}>
			<TextControl
				label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.itemTitle }
				placeholder={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { itemTitle: newValue } ) }
			/>
			<TextareaControl
				label={ __( 'Description', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { itemDescription: newValue } ) }
				value={ attributes.itemDescription }
			/>
			<WpmozoMediaUploader props={props}
				label={ __( 'Image', 'wpmozo-blocks-and-addons' ) }
				attrKye="image"
			/>
			<TextControl
				label={ __( 'Image Alternative Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageAlt }
				onChange={ ( newValue ) => setAttributes( { imageAlt: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleControl
				label={ __( 'Show Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showIcon }
				onChange={ ( newValue ) => setAttributes( { showIcon: newValue } ) }
			/>
			{ attributes.showIcon &&
				<WpmozoIconpicker props={ props }
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='itemIcon'
					value={ attributes.itemIcon }
					onChange={ ( newValue ) => setAttributes( { itemIcon: newValue } ) }
				/>
			}
		</PanelBody>
		<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleControl
				label={ __( 'Show Button', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showButton }
				onChange={ ( newValue ) => setAttributes( { showButton: newValue } ) }
			/>
			{ attributes.showButton && ( <>
				<TextControl
					label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { itemButtonText: newValue } ) }
					value={ attributes.itemButtonText }
				/>
				<TextControl
					label={ __( 'Button Link URL', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.itemButtonUrl }
					onChange={ ( newValue ) => setAttributes( { itemButtonUrl: newValue } ) }
				/>
				<ToggleGroupControl
					label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.itemButtonLinkTarget }
					onChange={ ( newValue ) => setAttributes( { itemButtonLinkTarget: newValue } ) }
				>
					<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
			</> ) }
		</PanelBody>
	</> );
};
