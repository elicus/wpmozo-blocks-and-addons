import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	BaseControl,
	ButtonGroup,
	RangeControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import {
	WpmozoBorder,
	WpmozoIconpicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
} from '../../../common/components/index.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	
	const [ linkTextType, setLinkTextType ] = useState( 'normal' );
	const [ buttonType, setButtonType ]     = useState( 'normal' );

	return ( <>
		{/* Dropdown Button. */}
		<PanelBody title={ __( 'Dropdown Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>   
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === buttonType ) ? true : false }
						onClick={ () => setButtonType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button 
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === buttonType ) ? true : false }
						onClick={ () => setButtonType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === buttonType && <>
					<ColorGradientControl colors={[]} gradients={[]}
						label={ __( 'Button Background', 'wpmozo-blocks-and-addons' ) }
						colorValue={ attributes.buttonBackground }
						gradientValue={ attributes.buttonBGGradient }
						onColorChange={ (newValue) => setAttributes( { buttonBackground: newValue } ) }
						onGradientChange={ (newValue) => setAttributes( { buttonBGGradient: newValue } ) }
					/>
					<hr />
					<ToggleControl
						label={ __( 'Show Button Icon', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.buttonUseIcon || false }
						onChange={ ( newValue ) => setAttributes( { buttonUseIcon: newValue } ) }
						__nextHasNoMarginBottom={ true }
					/>
					{ ( attributes.buttonUseIcon ) && <>
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
				{ 'hover' === buttonType && <>
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
		{/* Dropdown Menu. */}
		<PanelBody title={ __( 'Dropdown Menu', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Dropdown Min Width (in px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.submenuMinwidth }
				onChange={ ( newValue ) => setAttributes( { submenuMinwidth: newValue } ) }
				min={10} step={1} max={1000} allowReset={true}
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Dropdown Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='submenu'
				DimensionsTypes={ { padding: true } }
			/>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Dropdown Background', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.submenuBackground }
				gradientValue={ attributes.submenuBGGradient }
				onColorChange={ ( newValue ) => setAttributes( { submenuBackground: newValue } ) }
				onGradientChange={ ( newValue ) => setAttributes( { submenuBGGradient: newValue } ) }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Dropdown Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="submenu"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Dropdown Link Text. */}
		<PanelBody title={ __( 'Dropdown Link', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>    
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === linkTextType ) ? true : false }
						onClick={ () => setLinkTextType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button 
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === linkTextType ) ? true : false }
						onClick={ () => setLinkTextType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === linkTextType && <>
					<WpmozoColorPicker
						ColorKey="linkText"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Link Text Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: __( 'Link Background Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="linkText"
					/>
				</> }
				{ 'hover' === linkTextType && <>
					<WpmozoColorPicker
						ColorKey="linkTextHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Link Text Hover Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: __( 'Link Hover Background Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="linkTextHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
	</> );
};
