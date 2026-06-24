import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	SelectControl,
	BaseControl,
	ButtonGroup,
	RangeControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoIconpicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTextShadow,
	WpmozoRangeSize,
} from '../../../common/components/index';

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ buttonType, setButtonType ] = useState( 'normal' );

	return ( <>
		{/* Global Text. */}
		<PanelBody title={ __( 'Global Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
				<ToggleGroupControl
					label={ __( 'Vertical Align', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.globalVerticalAlign }
					onChange={ ( newValue ) => setAttributes( { globalVerticalAlign: newValue } ) }
				>
					<ToggleGroupControlOption value="flex-start" label={ __( 'Top', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="center" label={ __( 'Center', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="flex-end" label={ __( 'Bottom', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
				<SelectControl
					label={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.globalTextColor }
					options={ [{
						value: 'dark',
						label: __( 'Dark', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'light',
						label: __( 'Light', 'wpmozo-blocks-and-addons' ),
					}]
					}
					onChange={ ( newValue ) => setAttributes( { globalTextColor: newValue } ) }
				/>
				<WpmozoTextShadow
					TextShadowKey="titleTextShadow"
					props={ props }
				/>
				<WpmozoTextShadow
					TextShadowKey="descriptionTextShadow"
					props={ props }
				/>
		</PanelBody>

		{/* Title Text. */}
		<PanelBody title={ __( 'Alert Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl label={ __( 'Title Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item ) => (
						<Button key={ item.value }
							isPressed={ item.value === attributes.titleLevel }
							onClick={ () => setAttributes( { titleLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				value={ attributes.titleAlign }
			/>
			<WpmozoColorPicker
				ColorKey="title"
				props={ props }
				ColorTypes={ [
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="title"
			/>
		</PanelBody>

		{/* Description Text. */}
		<PanelBody title={ __( 'Alert Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoAlignment showJustify
				label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { descriptionAlign: newValue } ) }
				value={ attributes.descriptionAlign }
			/>
			<WpmozoColorPicker
				ColorKey="description"
				props={ props }
				ColorTypes={ [
					{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="description"
			/>
		</PanelBody>

		{/* Image/Icon. */}
		<PanelBody title={__('Image/Icon', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="element"
				ColorTypes={[
					...(!attributes.useImage 
						? [{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }] 
						: []),
					{key: 'Background', label: __('Image/Icon Background Color', 'wpmozo-blocks-and-addons')}
				]}
			/>
			<WpmozoRangeSize props={props}
				label={ __( 'Image/Icon Wrapper Size', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='elementWrapperSize'
			/>
			{ !attributes.useImage && ( <>
				<WpmozoRangeSize props={props}
					label={ __( 'Icon Size', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='iconSize'
				/>
			</> ) }
			{ attributes.useImage && ( <>
				<WpmozoRangeSize props={props}
					label={ __( 'Image Width', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='imageWidth'
				/>
			</> ) }
			<WpmozoDimensions props={props}
				DimensionKey='element'
				DimensionsTypes={{padding: true}}
			/>
			<WpmozoBorder props={props}
				BorderKey="element"
			/>
		</PanelBody>

		{/* Close Icon. */}
		<PanelBody title={__('Close Icon', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker
				ColorKey="closeIcon"
				props={ props }
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoRangeSize
				props={props}
				label={__('Font Size', 'wpmozo-blocks-and-addons')}
				rangeSizeKey="closeIconSize"
			/>
		</PanelBody>

		{/* Alert Button. */}
		{ attributes.showButton && (
			<PanelBody title={__('Alert Button', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
				<RangeControl
					label={ __( 'Button Container Size(%)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonContainerSize }
					onChange={ ( newValue ) => setAttributes( { buttonContainerSize: newValue } ) }
					min={ 1 } step={ 1 } max={ 100 } allowReset={ true }
					initialPosition={ 25 } resetFallbackValue={ 25 }
					__next40pxDefaultSize __nextHasNoMarginBottom
				/>
				<ToggleGroupControl
					label={ __( 'Stack Button On', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonStackOn }
					onChange={ ( newValue ) => setAttributes( { buttonStackOn: newValue } ) }
				>
					<ToggleGroupControlOption value="none" label={ __( 'None', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="desktop" label={ __( 'Desktop', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="tablet" label={ __( 'Tablet', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="mobile" label={ __( 'Mobile', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
				<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>   
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ buttonType === 'normal' }
							onClick={ () => setButtonType( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button 
							className="wpmozo-button-tabs-btn"
							isPressed={ buttonType === 'hover' }
							onClick={ () => setButtonType( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ buttonType === 'normal' && <>
						<ColorGradientControl colors={[]} gradients={[]}
							label={ __( 'Button Background', 'wpmozo-blocks-and-addons' ) }
							colorValue={ attributes.buttonBackground }
							gradientValue={ attributes.buttonBGGradient }
							onColorChange={ (newValue) => setAttributes( { buttonBackground: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( { buttonBGGradient: newValue } ) }
						/>
						<WpmozoAlignment
							label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( newValue ) => setAttributes( { buttonAlign: newValue } ) }
							value={ attributes.buttonAlign }
						/>
						<hr />
						<ToggleControl
							label={ __( 'Show Button Icon', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.buttonUseIcon || false }
							onChange={ ( newValue ) => setAttributes( { buttonUseIcon: newValue } ) }
							__nextHasNoMarginBottom={ true }
						/>
						{ attributes.buttonUseIcon && <>
							<WpmozoIconpicker props={ props }
								label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
								iconPickerKey='buttonIcon'
								value={ attributes.buttonIcon }
								onChange={ ( newValue ) => setAttributes( { buttonIcon: newValue } ) }
							/>
							<ToggleGroupControl
								label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.buttonIconPosition }
								onChange={ ( newValue ) => setAttributes( { buttonIconPosition: newValue } ) }
							>
								<ToggleGroupControlOption value="before" label="Before" />
								<ToggleGroupControlOption value="after" label="After" />
							</ToggleGroupControl>
							<ToggleControl
								label={ __( 'Show Icon On Hover', 'wpmozo-blocks-and-addons' ) }
								checked={ attributes.buttonIconOnHover }
								onChange={ ( newValue ) => setAttributes( { buttonIconOnHover: newValue } ) }
							/>
						</> }
						<WpmozoColorPicker props={ props }
							label={ __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey="button"
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography props={ props }
							TypographyKey="button"
						/>
						<WpmozoDimensions props={ props }
							label={ __( 'Button Dimensions', 'wpmozo-blocks-and-addons' ) }
							DimensionKey='button'
							DimensionsTypes={ { padding: true, margin: true } }
						/>
						<WpmozoBorder props={ props }
							label={ __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey="button"
							BorderTypes={ { border: true, radius: true } }
						/>
					</> }
					{ buttonType === 'hover' && <>
						<ColorGradientControl colors={[]} gradients={[]}
							label={ __( 'Button Hover Background', 'wpmozo-blocks-and-addons' ) }
							colorValue={ attributes.buttonHoverBackground }
							gradientValue={ attributes.buttonHoverBGGradient }
							onColorChange={ (newValue) => setAttributes( { buttonHoverBackground: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( { buttonHoverBGGradient: newValue } ) }
						/>
						<WpmozoColorPicker props={ props }
							label={ __( 'Button Hover Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey="buttonHover"
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Hover Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography props={ props }
							TypographyKey="buttonHover"
						/>
						<WpmozoBorder props={ props }
							label={ __( 'Button Hover Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey="buttonHover"
							BorderTypes={ { border: true, radius: true } }
						/>
					</> }
				</BaseControl>
			</PanelBody>
		) }

		{/* Block. */}
		<PanelBody title={ __( 'Block', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleGroupControl
				label={ __( 'Content Vertical Align', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.blockVerticleAlign }
				onChange={ ( newValue ) => setAttributes( { blockVerticleAlign: newValue } ) }
			>
				<ToggleGroupControlOption value="flex-start" label={ __( 'Top', 'wpmozo-blocks-and-addons' ) } />
				<ToggleGroupControlOption value="center" label={ __( 'Center', 'wpmozo-blocks-and-addons' ) } />
				<ToggleGroupControlOption value="flex-end" label={ __( 'Bottom', 'wpmozo-blocks-and-addons' ) } />
			</ToggleGroupControl>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.blockBackground }
				gradientValue={ attributes.blockBGGradient }
				onColorChange={ (newValue) => setAttributes( { blockBackground: newValue } ) }
				onGradientChange={ (newValue) => setAttributes( { blockBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='block'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={props}
				BorderKey="block"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
	</> );
};
