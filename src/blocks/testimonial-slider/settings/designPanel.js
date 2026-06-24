// inspector.js
import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	ButtonGroup,
	RangeControl,
	ToggleControl,
	BaseControl,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ quoteIconTab, setQuoteIconTab ] = useState( 'opening' );

	const [ bodyTextTab, setBodyTextTab ]       = useState( 'normal' );
	const [ authorNameTab, setAuthorNameTab ]   = useState( 'normal' );
	const [ designationTab, setDesignationTab ] = useState( 'normal' );
	const [ companyNameTab, setCompanyNameTab ] = useState( 'normal' );

	return ( <>
		{/* Alignment. */}
		<PanelBody title={ __( 'Alignment', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.globalTextAlign }
				showJustify={ true }
				onChange={ ( newValue ) => setAttributes( { globalTextAlign: newValue } ) }
			/>
		</PanelBody>
		{/* Body. */}
		<PanelBody title={ __( 'Body', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl
				className="wpmozo-button-tabs-wrap"
				__nextHasNoMarginBottom={ true }
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === bodyTextTab ) ? true : false }
						onClick={ () => setBodyTextTab( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === bodyTextTab ) ? true : false }
						onClick={ () => setBodyTextTab( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === bodyTextTab && <>
					<WpmozoColorPicker
						ColorKey="body"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Body Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="body"
						props={ props }
					/>
				</> }
				{ 'hover' === bodyTextTab && <>
					<WpmozoColorPicker
						ColorKey="bodyHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Body Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="bodyHover"
						props={ props }
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Author Image. */}
		{ attributes.showAuthorImage &&
			<PanelBody title={ __( 'Author Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoBorder props={ props }
					label={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="authorImage"
					BorderTypes={ { border: true, radius: true } }
				/>
			</PanelBody>
		}
		{/* Author Name. */}
		<PanelBody title={ __( 'Author Name', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl
				className="wpmozo-button-tabs-wrap"
				__nextHasNoMarginBottom={ true }
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === authorNameTab ) ? true : false }
						onClick={ () => setAuthorNameTab( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === authorNameTab ) ? true : false }
						onClick={ () => setAuthorNameTab( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === authorNameTab && <>
					<WpmozoColorPicker
						ColorKey="authorName"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Author Name Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="authorName"
						props={ props }
					/>
				</> }
				{ 'hover' === authorNameTab && <>
					<WpmozoColorPicker
						ColorKey="authorNameHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Author Name Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="authorNameHover"
						props={ props }
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Designation. */}
		{ attributes.showDesignation &&
			<PanelBody title={ __( 'Designation', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl
					className="wpmozo-button-tabs-wrap"
					__nextHasNoMarginBottom={ true }
				>
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === designationTab ) ? true : false }
							onClick={ () => setDesignationTab( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === designationTab ) ? true : false }
							onClick={ () => setDesignationTab( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === designationTab && <>
						<WpmozoColorPicker
							ColorKey="designation"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Designation Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="designation"
							props={ props }
						/>
					</> }
					{ 'hover' === designationTab && <>
						<WpmozoColorPicker
							ColorKey="designationHover"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Designation Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="designationHover"
							props={ props }
						/>
					</> }
				</BaseControl>
			</PanelBody>
		}
		{/* Company Name. */}
		{ attributes.showCompany &&
			<PanelBody title={ __( 'Company Name', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl
					className="wpmozo-button-tabs-wrap"
					__nextHasNoMarginBottom={ true }
				>
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === companyNameTab ) ? true : false }
							onClick={ () => setCompanyNameTab( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === companyNameTab ) ? true : false }
							onClick={ () => setCompanyNameTab( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === companyNameTab && <>
						<WpmozoColorPicker
							ColorKey="companyName"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Company Name Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="companyName"
							props={ props }
						/>
					</> }
					{ 'hover' === companyNameTab && <>
						<WpmozoColorPicker
							ColorKey="companyNameHover"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Designation Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="companyNameHover"
							props={ props }
						/>
					</> }
				</BaseControl>
			</PanelBody>
		}
		{/* Star Rating. */}
		<PanelBody title={ __( 'Star Rating', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Star Font Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.starFontSize }
				onChange={ ( newValue ) => setAttributes( { starFontSize: newValue } ) }
				min={ 10 } max={ 100 } step={ 1 }
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Star Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="star"
				ColorTypes={ [
					{ key: 'FilledColor', label: __( 'Star Filled Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'EmptyColor', label: __( 'Star Empty Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
		</PanelBody>
		{/* Quote Icon. */}
		<PanelBody title={ __( 'Quote Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-color-combo-wrap">
				<ButtonGroup>
					<Button
						className='wpmozo-color-combo-type'
						isPressed={ ( 'opening' === quoteIconTab ) ? true : false }
						onClick={ () => setQuoteIconTab( 'opening' ) }
					>{ __( 'Opening', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className='wpmozo-color-combo-type'
						isPressed={ ( 'closing' === quoteIconTab ) ? true : false }
						onClick={ () => setQuoteIconTab( 'closing' ) }
					>{ __( 'Closing', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'opening' === quoteIconTab && <>
					<ToggleControl
						label={ __( 'Show Opening Quote Icon', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showOpenQuoteIcon }
						onChange={ ( newValue ) => setAttributes( { showOpenQuoteIcon: newValue } ) }
					/>
					{ attributes.showOpenQuoteIcon && <>
						<RangeControl
							label={ __( 'Quote Icon Size', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.openQuoteIconSize }
							onChange={ ( newValue ) => setAttributes( { openQuoteIconSize: newValue } ) }
							min={ 1 } max={ 350 } step={ 1 }
						/>
						<WpmozoColorPicker ColorKey="openQuoteIcon"
							label={ __( 'Quote Icon Color', 'wpmozo-blocks-and-addons' ) }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Quote Icon Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
					</> }
				</> }
				{ 'closing' === quoteIconTab && <>
					<ToggleControl
						label={ __( 'Show Closing Quote Icon', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showCloseQuoteIcon }
						onChange={ ( newValue ) => setAttributes( { showCloseQuoteIcon: newValue } ) }
					/>
					{ attributes.showCloseQuoteIcon && <>
						<RangeControl
							label={ __( 'Quote Icon Size', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.closeQuoteIconSize }
							onChange={ ( newValue ) => setAttributes( { closeQuoteIconSize: newValue } ) }
							min={ 1 } max={ 350 } step={ 1 }
						/>
						<WpmozoColorPicker ColorKey="closeQuoteIcon"
							label={ __( 'Quote Icon Color', 'wpmozo-blocks-and-addons' ) }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Quote Icon Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
					</> }
				</> }
			</BaseControl>
		</PanelBody>
		{/* Slider. */}
		<PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoDimensions props={ props }
				label={ __( 'Arrows Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='arrow'
				DimensionsTypes={ { padding: true } }
			/>
			<RangeControl
				label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.arrowIconSize }
				onChange={ ( newValue ) => setAttributes( { arrowIconSize: newValue } ) }
				min={10} max={100} step={1}
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Arrows Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="arrow"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __( 'Arrow Background Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Arrows Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="arrow"
				BorderTypes={ { border: true, radius: true } }
			/>
			{ attributes.showControlDot && <>
				<WpmozoColorPicker
					label={ __( 'Control Dot Color', 'wpmozo-blocks-and-addons' ) }
					ColorKey="controlDot"
					props={ props }
					ColorTypes={ [
						{ key: 'ColorActive', label: __( 'Active Dot Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'ColorInactive', label: __( 'Inactive Dot Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			</> }
		</PanelBody>
		{/* Meta. */}
		{ 'layout1' === attributes.layout &&
			<PanelBody title={ __( 'Meta', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker props={props}
					label={ __( 'Meta Separator', 'wpmozo-blocks-and-addons' ) }
					ColorKey="metaSeparator"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Select Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
			</PanelBody>
		}
		{/* Testimonial. */}
		<PanelBody title={ __( 'Testimonial', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.testimonialBackground }
				gradientValue={ attributes.testimonialBGGradient }
				onColorChange={ (newValue) => setAttributes( { testimonialBackground: newValue } ) }
				onGradientChange={ (newValue) => setAttributes( { testimonialBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Testimonial Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='testimonial'
				DimensionsTypes={ { padding: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Testimonial Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="testimonial"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Slider Container. */}
		<PanelBody title={ __( 'Slider Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoDimensions props={ props }
				label={ __( 'Container Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='container'
				DimensionsTypes={ { padding: true } }
			/>
		</PanelBody>
	</> );
};
