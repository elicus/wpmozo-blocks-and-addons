import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';

import {
	Button,
	PanelBody,
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
	WpmozoTypography,
	WpmozoIconpicker,
	WpmozoDimensions,
	WpmozoColorPicker,
} from '../../../common/components';

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ titleType, setTitleType ]       = useState( 'normal' );
	const [ subTitleType, setSubTitleType ] = useState( 'normal' );
	const [ descType, setDescType ]         = useState( 'normal' );
	const [ buttonType, setButtonType ]     = useState( 'normal' );

	return ( <>
		{/* Title Text. */}
		<PanelBody title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<BaseControl label={ __( 'Title Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
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
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === titleType ) ? true : false }
						onClick={ () => setTitleType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === titleType ) ? true : false }
						onClick={ () => setTitleType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === titleType && <>
					<WpmozoColorPicker props={ props }
						ColorKey="title"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="title"
					/>
				</> }
				{ 'hover' === titleType && <>
					<WpmozoColorPicker props={ props }
						ColorKey="titleHover"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="titleHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Subtitle Text. */}
		<PanelBody title={ __( 'Sub Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === subTitleType ) ? true : false }
						onClick={ () => setSubTitleType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === subTitleType ) ? true : false }
						onClick={ () => setSubTitleType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === subTitleType && <>
					<WpmozoColorPicker
						ColorKey="subtitle"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Sub Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="subtitle"
					/>
				</> }
				{ 'hover' === subTitleType && <>
					<WpmozoColorPicker
						ColorKey="subtitleHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Sub Title Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="subtitleHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Description Text. */}
		<PanelBody title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === descType ) ? true : false }
						onClick={ () => setDescType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === descType ) ? true : false }
						onClick={ () => setDescType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === descType && <>
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
				</> }
				{ 'hover' === descType && <>
					<WpmozoColorPicker
						ColorKey="descriptionHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Description Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="descriptionHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Icon. */}
		{ attributes.showIcon && ( <>
			<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<RangeControl
					label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.iconFontsize }
					onChange={ ( newValue ) => setAttributes( { iconFontsize: newValue } ) }
					min={ 1 } max={ 250 } step={ 1 }
					__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
				/>
				<WpmozoColorPicker props={ props }
					ColorKey="icon"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'HoverColor', label: __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			</PanelBody>
		</> ) }
		{/* Button. */}
		{ attributes.showIcon && ( <>
			<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
		</> ) }
	</> );
};
