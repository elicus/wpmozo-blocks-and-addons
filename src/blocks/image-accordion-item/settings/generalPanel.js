import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	TextControl,
	BaseControl,
	ButtonGroup,
	Button,
	SelectControl,
	TextareaControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoRangeSize,
	WpmozoBorder,
	WpmozoIconpicker, 
    WpmozoMediaUploader
} from '../../../common/components/index';
import { headingLevelsList } from '../../../common/utils.js';


export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) }  initialOpen={false}>
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
			<WpmozoIconpicker props={ props }
				label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
				iconPickerKey='icon'
				value={ attributes.itemIcon }
				onChange={ ( newValue ) => setAttributes( { itemIcon: newValue } ) }
			/>
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
