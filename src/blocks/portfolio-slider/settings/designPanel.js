// designPanel.js
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

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ bodyTextTab, setBodyTextTab ]     = useState( 'normal' );
	const [ titleTab, setTitleTab ]           = useState( 'normal' );

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
		{/* Body (Excerpt). */}
		{ attributes.showExcerpt && (
			<PanelBody title={ __( 'Body (Excerpt)', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
		) }
		{/* Featured Image. */}
		{ attributes.showFeaturedImage &&
			<PanelBody title={ __( 'Featured Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoBorder props={ props }
					label={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="featuredImage"
					BorderTypes={ { border: true, radius: true } }
				/>
			</PanelBody>
		}
		{/* Title. */}
		{ attributes.showTitle && (
			<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl
					className="wpmozo-button-tabs-wrap"
					__nextHasNoMarginBottom={ true }
				>
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === titleTab ) ? true : false }
							onClick={ () => setTitleTab( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === titleTab ) ? true : false }
							onClick={ () => setTitleTab( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === titleTab && <>
						<WpmozoColorPicker
							ColorKey="title"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="title"
							props={ props }
						/>
					</> }
					{ 'hover' === titleTab && <>
						<WpmozoColorPicker
							ColorKey="titleHover"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="titleHover"
							props={ props }
						/>
					</> }
				</BaseControl>
			</PanelBody>
		) }
		{/* Slider. */}
		<PanelBody title={ __( 'Slider Navigation & Pagination', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
		{/* Portfolio Container card styling. */}
		<PanelBody title={ __( 'Portfolio Card', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.portfolioBackground }
				gradientValue={ attributes.portfolioBGGradient }
				onColorChange={ (newValue) => setAttributes( { portfolioBackground: newValue } ) }
				onGradientChange={ (newValue) => setAttributes( { portfolioBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Portfolio Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='portfolio'
				DimensionsTypes={ { padding: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Portfolio Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="portfolio"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Slider Wrapper Container. */}
		<PanelBody title={ __( 'Slider Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoDimensions props={ props }
				label={ __( 'Container Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='container'
				DimensionsTypes={ { padding: true } }
			/>
		</PanelBody>
	</> );
};
