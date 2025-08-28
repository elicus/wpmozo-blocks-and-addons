import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	TextControl,
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
} from '../../../common/components/index.js';

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ titleType, setTitleType ]         = useState( 'normal' );
	const [ descType, setDescType ]           = useState( 'normal' );
	const [ digitsType, setDigitsType ]       = useState( 'general' );
	const [ labelsType, setLabelsType ]       = useState( 'general' );
	const [ buttonType, setButtonType ]       = useState( 'normal' );
	
	return ( <>
		{/* Content Box. */}
		<PanelBody title={ __( 'Content Box', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Content Box Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { contentBoxAlign: newValue } ) }
				value={ attributes.contentBoxAlign }
			/>
			{ ( [ 'layout2', 'layout3' ].includes( attributes.layout ) ) && ( <>
				<RangeControl
					label={ __( 'Content Box Width (in %)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.contentBoxWidth }
					onChange={ ( newValue ) => setAttributes( { contentBoxWidth: newValue } ) }
					min={ 1 } max={ 100 } step={ 1 } allowReset={ true }
					__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
				/>
			</> ) }
		</PanelBody>
		{/* Image. */}
		{ ( attributes.showImage ) && ( <>
			<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoDimensions props={ props }
					label={ __( 'Image Dimensions', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='image'
					DimensionsTypes={ { padding: true } }
				/>
				<hr />
				<ToggleControl
					label={ __( 'Enable Image Min/Max Width', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.imageEnableCustomSize || false }
					onChange={ ( newValue ) => setAttributes( { imageEnableCustomSize: newValue } ) }
					__nextHasNoMarginBottom={ true }
				/>
				{ ( attributes.imageEnableCustomSize ) && ( <>
					<RangeControl
						label={ __( 'Image Minimum Width', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.imageMinWidth }
						onChange={ ( newValue ) => setAttributes( { imageMinWidth: newValue } ) }
						min={ 1 } max={ 1000 } step={ 1 } allowReset={ true }
						__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
					/>
					<RangeControl
						label={ __( 'Image Maximum Width', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.imageMaxWidth }
						onChange={ ( newValue ) => setAttributes( { imageMaxWidth: newValue } ) }
						min={ 1 } max={ 1000 } step={ 1 } allowReset={ true }
						__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
					/>
				</> ) }
				<WpmozoBorder props={ props }
					label={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="image"
					BorderTypes={ { border: true, radius: true } }
				/>
			</PanelBody>
		</> ) }
		{/* Title Text. */}
		<PanelBody title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) }
				__nextHasNoMarginBottom={ true }
			>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button key={ item.value }
							isPressed={ item.value === attributes.titleLevel }
							onClick={ () => setAttributes( { titleLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<BaseControl className="wpmozo-button-tabs-wrap"
				__nextHasNoMarginBottom={ true }
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === titleType ) ? true : false }
						onClick={ () => setTitleType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button 
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === titleType ) ? true : false }
						onClick={ () => setTitleType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === titleType && <>
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
				</> }
				{ 'hover' === titleType && <>
					<WpmozoColorPicker
						ColorKey="titleHover"
						props={ props }
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
		{/* Description. */}
		<PanelBody title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>    
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === descType ) ? true : false }
						onClick={ () => setDescType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button 
						className="wpmozo-button-tabs-btn"
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
		{/* Timer/Clock Box. */}
		<PanelBody title={ __( 'Timer/Clock Box', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoAlignment
				label={ __( 'Timer Box Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { timerBoxAlign: newValue } ) }
				value={ attributes.timerBoxAlign }
			/>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Timer Box Background', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.timerBoxBackground }
				gradientValue={ attributes.timerBoxBGGradient }
				onColorChange={ (newValue) => setAttributes( { timerBoxBackground: newValue } ) }
				onGradientChange={ (newValue) => setAttributes( { timerBoxBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Timer Box Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='timerBox'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Timer Box Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="timerBox"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Timer/Clock Digits. */}
		<PanelBody title={ __( 'Timer/Clock Digits', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>    
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'general' === digitsType ) ? true : false }
						onClick={ () => setDigitsType( 'general' ) }
					>{ __( 'General', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button 
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'text' === digitsType ) ? true : false }
						onClick={ () => setDigitsType( 'text' ) }
					>{ __( 'Text', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'general' === digitsType && <>
					<WpmozoColorPicker
						label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						ColorKey="digits"
						props={ props }
						ColorTypes={ [
							{ key: 'BackgroundColor', label: __( 'Digit Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoDimensions props={ props }
						label={ __( 'Digit Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='digits'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
					<WpmozoBorder props={ props }
						label={ __( 'Digit Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey="digits"
						BorderTypes={ { border: true, radius: true } }
					/>
					<RangeControl
						label={ __( 'Digit Box Width', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.digitsBoxWidth }
						onChange={ ( newValue ) => setAttributes( { digitsBoxWidth: newValue } ) }
						min={ 90 } max={ 350 } step={ 1 } allowReset={ true }
						__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
					/>
				</> }
				{ 'text' === digitsType && <>
					<WpmozoColorPicker
						ColorKey="digits"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Digit Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="digits"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Timer/Clock Labels. */}
		<PanelBody title={ __( 'Timer/Clock Labels', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>    
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'general' === labelsType ) ? true : false }
						onClick={ () => setLabelsType( 'general' ) }
					>{ __( 'General', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button 
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'text' === labelsType ) ? true : false }
						onClick={ () => setLabelsType( 'text' ) }
					>{ __( 'Text', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'general' === labelsType && <>
					<WpmozoColorPicker
						label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						ColorKey="labels"
						props={ props }
						ColorTypes={ [
							{ key: 'BackgroundColor', label: __( 'Label Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoDimensions props={ props }
						label={ __( 'Label Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='labels'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</> }
				{ 'text' === labelsType && <>
					<WpmozoColorPicker
						ColorKey="labels"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Label Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="labels"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Timer Separator. */}
		<PanelBody title={ __( 'Timer Separator', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleControl
				label={ __( 'Show Separator', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showSeparator || false }
				onChange={ ( newValue ) => setAttributes( { showSeparator: newValue } ) }
				__nextHasNoMarginBottom={ true }
			/>
			{ ( attributes.showSeparator ) && ( <>
				<TextControl
					label={ __( 'Separator Text', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { separatorText: newValue } ) }
					value={ attributes.separatorText || '' }
				/>
				<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>    
					<WpmozoColorPicker
						ColorKey="separator"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Separator Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="separator"
					/>
				</BaseControl>
			</> ) }
		</PanelBody>
		{ ( attributes.showButton ) && ( <>
			<PanelBody title={ __( 'Sale Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
