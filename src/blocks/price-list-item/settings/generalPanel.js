import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	TextControl,
	BaseControl,
	ButtonGroup,
	Button,
	SelectControl,
	TextareaControl
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
				label={ __( 'Item Name', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.itemName }
				placeholder={ __( 'Item Name', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { itemName: newValue } ) }
			/>
			<TextControl
				label={ __( 'Currency', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.itemCurrency }
				placeholder={ __( '$', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { itemCurrency: newValue } ) }
			/>
			<TextControl
				label={ __( 'Item Price', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.itemPrice }
				placeholder={ __( '10', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { itemPrice: newValue } ) }
			/>
			<TextControl
				label={ __( 'Item Price Period', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.pricePeriod }
				onChange={ ( newValue ) => setAttributes( { pricePeriod: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Image/Icon as thumbnail', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.itemThumbnailOption }
				options={ [
					{ value: 'use_image', label: __( 'Use Image', 'wpmozo-blocks-and-addons' ) },
					{ value: 'use_icon', label: __( 'Use Icon', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { itemThumbnailOption: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			{ 'use_icon' === attributes.itemThumbnailOption && ( <>
				<WpmozoIconpicker props={ props }
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='icon'
					value={ attributes.icon }
					onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
				/>
			</> ) }
			{ 'use_image' === attributes.itemThumbnailOption && ( <>
				<WpmozoMediaUploader props={props} 
					attrKye="itemThumbnail"
					label={ __( 'Item Thumbnail', 'wpmozo-blocks-and-addons' ) }
				/>
			</> ) }
			<TextareaControl
				label={ __( 'Item description', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
				value={ attributes.content }
			/>
		</PanelBody>
	</> );
};
