import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoRangeSize,
	WpmozoBorder,
	WpmozoDimensions,
	WpmozoIconpicker,
	WpmozoMediaUploader
} from '../../../common/components/index';
import { headingLevelsList } from '../../../common/utils.js';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel"  initialOpen={false}>
			<WpmozoAlignment
				label={__( 'Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { textAlignment: newValue } ) }
				value={ attributes.textAlignment }
			/>
			<SelectControl
				label={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.textColor }
				options={[
					{
						value: 'light',
						label: __( 'Light', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'dark',
						label: __( 'Dark', 'wpmozo-blocks-and-addons' ),
					},
				]}
				onChange={ ( newValue ) => setAttributes( { textColor: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="title"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<BaseControl label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button
							key={`heading-level-${index}`}
							isPressed={item.value === attributes.titleLavel}
							onClick={() => setAttributes({titleLavel: item.value})}
						>{item.label}</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={__('Title Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({titleAlign: newValue})}
				value={attributes.titleAlign}
			/>
			<WpmozoTypography
				TypographyKey="title"
				props={props}
			/>
			<WpmozoDimensions props={props}
				DimensionKey='title'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="description"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoAlignment
				label={__('Description Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({descriptionAlign: newValue})}
				value={attributes.descriptionAlign}
			/>
			<WpmozoTypography
				TypographyKey="description"
				props={props}
			/>
			<WpmozoDimensions props={props}
				DimensionKey='description'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="icon"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoTypography
				TypographyKey="icon"
				props={props}
				TypoTypes={{
					'FontSize': true
				}}
			/>
			<WpmozoDimensions props={props}
				DimensionKey='icon'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="button"
				ColorTypes={[
					{ key: 'TextColor', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'BackgroundColor', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoAlignment
				label={__( 'Button Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { buttonAlignment: newValue } ) }
				value={ attributes.buttonAlignment }
			/>
			<WpmozoTypography props={props}
				TypographyKey="button"
			/>
			<ToggleControl
				label={ __( 'Use Button Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.useButtonIcon }
				onChange={ ( newValue ) => setAttributes( { useButtonIcon: newValue } ) }
			/>
			{ attributes.useButtonIcon && ( <>
				<WpmozoColorPicker props={props}
					ColorKey="button"
					ColorTypes={[
						{ key: 'IconColor', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
				<WpmozoIconpicker
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='buttonIcon'
					props={ props }
					value={ attributes.buttonIcon }
					onChange={ ( newValue ) => setAttributes( { buttonIcon: newValue } ) }
				/>
				<ToggleGroupControl
					label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonIconPlacement }
					onChange={ ( newValue ) => setAttributes( { buttonIconPlacement: newValue } ) }
				>
					<ToggleGroupControlOption value="before" label="Before" />
					<ToggleGroupControlOption value="after" label="After" />
				</ToggleGroupControl>
				<ToggleControl
					label={ __( 'Show Button Icon On Hover', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.buttonIconHover }
					onChange={ ( newValue ) => setAttributes( { buttonIconHover: newValue } ) }
				/>
			</> ) }
			<WpmozoBorder props={props}
				BorderKey="button"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='button'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			{ 'vertical' === attributes.layout &&
				<WpmozoRangeSize
					label={ __( 'Image Size', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='imageSize'
					props={props}
				/>
			}
			<WpmozoDimensions props={props}
				DimensionKey='imageWrap'
				DimensionsTypes={ { padding: true } }
			/>
			<WpmozoBorder props={props}
				BorderKey="image"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Content Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
			   	ColorKey="contentWrap"
			   	ColorTypes={[
				   	{
				   		key: 'Background', 
				   		label: __('Content Wrap Background', 'wpmozo-blocks-and-addons'), 
				   		withGradient: true
				   	}
			   	]}
			/>
			<ToggleControl
				label={ __( 'Use Background Image', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.contentWrapUseBackgroundImage }
				onChange={ ( newValue ) => setAttributes( { contentWrapUseBackgroundImage: newValue } ) }
			/>
			{ attributes.contentWrapUseBackgroundImage && <>
				<WpmozoMediaUploader props={props}
					label={ __( 'Content Wrap Background Image', 'wpmozo-blocks-and-addons' ) }
					attrKye="contentWrapBackgroundImage"
				/>
				{ attributes.contentWrapBackgroundImage && <>
					<SelectControl
						label={ __( 'Background Image Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.contentWrapItemBGImageSize }
						options={ [
							{ value: 'cover', label: __( 'Cover', 'wpmozo-blocks-and-addons' ) },
							{ value: 'contain', label: __( 'Fit', 'wpmozo-blocks-and-addons' ) },
							{ value: 'initial', label: __( 'Actual Size', 'wpmozo-blocks-and-addons' ) },
							{ value: 'stretch', label: __( 'Stretch to Fill', 'wpmozo-blocks-and-addons' ) },
						] }
						onChange={ ( newValue ) => setAttributes( { contentWrapItemBGImageSize: newValue } ) }
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
					<SelectControl
						label={ __( 'Background Image Position', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.contentWrapItemBGImagePosition }
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
						onChange={ ( newValue ) => setAttributes( { contentWrapItemBGImagePosition: newValue } ) }
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
					<SelectControl
						label={ __( 'Background Image Repeat', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.contentWrapItemBGImageRepeat }
						options={ [
							{ value: 'repeat', label: __( 'Repeat', 'wpmozo-blocks-and-addons' ) },
							{ value: 'repeat-x', label: __( 'Repeat X (horizontal)', 'wpmozo-blocks-and-addons' ) },
							{ value: 'repeat-y', label: __( 'Repeat Y (vertical)', 'wpmozo-blocks-and-addons' ) },
							{ value: 'space', label: __( 'Repeat with space between', 'wpmozo-blocks-and-addons' ) },
							{ value: 'round', label: __( 'Repeat and Stretch', 'wpmozo-blocks-and-addons' ) },
							{ value: 'no-repeat', label: __( 'No Repeat', 'wpmozo-blocks-and-addons' ) },
						] }
						onChange={ ( newValue ) => setAttributes( { contentWrapItemBGImageRepeat: newValue } ) }
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
					<SelectControl
						label={ __( 'Background Image Blend', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.contentWrapItemBGImageBlend }
						options={ [
							{ value: 'normal', label: __( 'Normal', 'wpmozo-blocks-and-addons' ) },
							{ value: 'multiply', label: __( 'Multiply', 'wpmozo-blocks-and-addons' ) },
							{ value: 'screen', label: __( 'Screen', 'wpmozo-blocks-and-addons' ) },
							{ value: 'overlay', label: __( 'Overlay', 'wpmozo-blocks-and-addons' ) },
							{ value: 'darken', label: __( 'Darken', 'wpmozo-blocks-and-addons' ) },
							{ value: 'lighten', label: __( 'Lighten', 'wpmozo-blocks-and-addons' ) },
						] }
						onChange={ ( newValue ) => setAttributes( { contentWrapItemBGImageBlend: newValue } ) }
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
				</> }
			</> }
			{ 'vertical' === attributes.layout &&
				<WpmozoRangeSize
					label={ __( 'Content Wrap Margin Right', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='contentWrapMarginRight'
					props={props}
				/>
			}
			<WpmozoDimensions props={props}
				DimensionKey='contentWrap'
				DimensionsTypes={ { padding: true } }
			/>
			<WpmozoBorder props={props}
				BorderKey="contentWrap"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Card Item', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			{ 'horizontal' === attributes.layout &&
				<WpmozoRangeSize
					label={ __( 'Card Item Width', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='cardItemWidth'
					props={props}
				/>
			}
			<WpmozoBorder props={props}
				BorderKey="cardItem"
			/>
		</PanelBody>
	</> );
};
