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
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
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
	const [ separatorType, setSeparatorType ] = useState( 'normal' );
	
	return ( <>
		{/* Content Box. */}
		<PanelBody title={ __( 'Content Box', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Content Box Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { contentBoxAlign: newValue } ) }
				value={ attributes.contentBoxAlign }
			/>
			{ ( [ 'layout2', 'layout2' ].includes( attributes.layout ) ) && ( <>
				<RangeControl
					label={ __( 'Content Box Width (in %)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.contentBoxWidth }
					onChange={ ( newValue ) => setAttributes( { contentBoxWidth: newValue } ) }
					min={ 1 } max={ 100 } step={ 1 } allowReset={ true }
					__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
				/>
			</> ) }
		</PanelBody>
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
					<Button 
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover_text' === digitsType ) ? true : false }
						onClick={ () => setDigitsType( 'hover_text' ) }
					>{ __( 'Hover Text', 'wpmozo-blocks-and-addons' ) }</Button>
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
				{ 'hover_text' === digitsType && <>
					<WpmozoColorPicker
						ColorKey="digitsHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Digit Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="digitsHover"
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
					<Button 
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover_text' === labelsType ) ? true : false }
						onClick={ () => setLabelsType( 'hover_text' ) }
					>{ __( 'Hover Text', 'wpmozo-blocks-and-addons' ) }</Button>
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
					<WpmozoBorder props={ props }
						label={ __( 'Label Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey="labels"
						BorderTypes={ { border: true, radius: true } }
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
				{ 'hover_text' === labelsType && <>
					<WpmozoColorPicker
						ColorKey="labelsHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Label Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="labelsHover"
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
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === separatorType ) ? true : false }
							onClick={ () => setSeparatorType( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button 
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === separatorType ) ? true : false }
							onClick={ () => setSeparatorType( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === separatorType && <>
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
					</> }
					{ 'hover' === separatorType && <>
						<WpmozoColorPicker
							ColorKey="separatorHover"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Separator Hover Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography props={ props }
							TypographyKey="separatorHover"
						/>
					</> }
				</BaseControl>
			</> ) }
		</PanelBody>
		{ ( attributes.showButton ) && ( <>
			<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>

			</PanelBody>
		</> ) }
	</> );
};
