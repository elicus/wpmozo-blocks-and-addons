import { __ } from '@wordpress/i18n';

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
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
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Content. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.title }
				onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<TextareaControl
				label={ __( 'Description', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.description }
				onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<hr />
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
		{/* Background. */}
		<PanelBody title={ __( 'Background', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.itemBackground }
				gradientValue={ attributes.itemBGGradient }
				onColorChange={ (newValue) => setAttributes( { itemBackground: newValue } ) }
				onGradientChange={ (newValue) => setAttributes( { itemBGGradient: newValue } ) }
			/><hr />
			<WpmozoMediaUploader props={props}
				label={ __( 'Background Image', 'wpmozo-blocks-and-addons' ) }
				attrKye="itemBGImage"
			/>
			{ attributes.itemBGImage && <>
				<SelectControl
					label={ __( 'Background Image Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.itemBGImageSize }
					options={ [
						{ value: 'cover', label: __( 'Cover', 'wpmozo-blocks-and-addons' ) },
						{ value: 'contain', label: __( 'Fit', 'wpmozo-blocks-and-addons' ) },
						{ value: 'initial', label: __( 'Actual Size', 'wpmozo-blocks-and-addons' ) },
						{ value: 'stretch', label: __( 'Stretch to Fill', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { itemBGImageSize: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
				<SelectControl
					label={ __( 'Background Image Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.itemBGImagePosition }
					options={ [
						{ value: 'top_left', label: __( 'Top Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'top_center', label: __( 'Top Center', 'wpmozo-blocks-and-addons' ) },
						{ value: 'top_right', label: __( 'Top Right', 'wpmozo-blocks-and-addons' ) },
						{ value: 'center_left', label: __( 'Center Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'center', label: __( 'Center', 'wpmozo-blocks-and-addons' ) },
						{ value: 'center_right', label: __( 'Center Right', 'wpmozo-blocks-and-addons' ) },
						{ value: 'bottom_left', label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'bottom_center', label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ) },
						{ value: 'bottom_right', label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { itemBGImagePosition: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
				<SelectControl
					label={ __( 'Background Image Repeat', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.itemBGImageRepeat }
					options={ [
						{ value: 'repeat', label: __( 'Repeat', 'wpmozo-blocks-and-addons' ) },
						{ value: 'repeat-x', label: __( 'Repeat X (horizontal)', 'wpmozo-blocks-and-addons' ) },
						{ value: 'repeat-y', label: __( 'Repeat Y (vertical)', 'wpmozo-blocks-and-addons' ) },
						{ value: 'space', label: __( 'Repeat with space between', 'wpmozo-blocks-and-addons' ) },
						{ value: 'round', label: __( 'Repeat and Stretch', 'wpmozo-blocks-and-addons' ) },
						{ value: 'no-repeat', label: __( 'No Repeat', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { itemBGImageRepeat: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
				<SelectControl
					label={ __( 'Background Image Blend', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.itemBGImageBlend }
					options={ [
						{ value: 'normal', label: __( 'Normal', 'wpmozo-blocks-and-addons' ) },
						{ value: 'multiply', label: __( 'Multiply', 'wpmozo-blocks-and-addons' ) },
						{ value: 'screen', label: __( 'Screen', 'wpmozo-blocks-and-addons' ) },
						{ value: 'overlay', label: __( 'Overlay', 'wpmozo-blocks-and-addons' ) },
						{ value: 'darken', label: __( 'Darken', 'wpmozo-blocks-and-addons' ) },
						{ value: 'lighten', label: __( 'Lighten', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { itemBGImageBlend: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			</> }
		</PanelBody>
	</> );
};
