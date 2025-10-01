import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    RangeControl,
    ToggleControl,
	TextareaControl,
    SelectControl,
	BaseControl,
	ButtonGroup,
	Button
} from "@wordpress/components";
import {
	WpmozoColorPicker, WpmozoIconpicker, WpmozoMediaUploader,
	WpmozoRangeSize
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<ToggleControl
				label={ __( 'Show Tooltip', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showTooltip }
				onChange={ (newValue) => setAttributes( { showTooltip: newValue } ) }
				help={__('Toggle this to preview and edit the tooltip content in the editor.', 'wpmozo-blocks-and-addons')}
				__nextHasNoMarginBottom={true}
			/>
			<SelectControl
				label={ __( 'Trigger Action', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.trigerAction }
				options={ [
					{ value: 'mouseenter', label: __( 'Hover', 'wpmozo-blocks-and-addons' ) },
					{ value: 'click', label: __( 'Click', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { trigerAction: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<SelectControl
				label={ __( 'Trigger Element', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.trigerElement }
				options={ [
					{ value: 'button', label: __( 'Button', 'wpmozo-blocks-and-addons' ) },
					{ value: 'image', label: __( 'Image', 'wpmozo-blocks-and-addons' ) },
					{ value: 'icon', label: __( 'Icon', 'wpmozo-blocks-and-addons' ) },
					{ value: 'text', label: __( 'Text', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { trigerElement: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			{'button' === attributes.trigerElement && (
				<>
					<TextControl
						label={ __( 'Trigger Button Text', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.triggerButtonText }
						onChange={ ( newValue ) => setAttributes( { triggerButtonText: newValue } ) }
					/>
					<TextControl
						label={ __( 'Trigger Button Link Url', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.triggerButtonUrl }
						onChange={ ( newValue ) => setAttributes( { triggerButtonUrl: newValue } ) }
					/>
				</>
			)}
			{'image' === attributes.trigerElement && (
				<>
					<WpmozoMediaUploader
						attrKye="image"
						label={ __( 'Trigger Image', 'wpmozo-blocks-and-addons' ) }
						props={props}
						imageSrc={attributes.image ? attributes.image.url : ''}
						onSelect={ ( media ) => setAttributes( { image: media } ) }
					/>
				</>
			)}
			{'icon' === attributes.trigerElement && (
				<>
					<WpmozoIconpicker
						props={props}
						label={ __( 'Trigger Icon', 'wpmozo-blocks-and-addons' ) }
						iconPickerKey='icon'
						value={ attributes.icon }
						onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
					/>
				</>
			)}
			{'text' === attributes.trigerElement && (
				<>
					<TextareaControl
						label={ __( 'Trigger Text', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { triggerText: newValue } ) }
						value={attributes.triggerText}
					/>
				</>
			)}
		</PanelBody>
	</> );
};
