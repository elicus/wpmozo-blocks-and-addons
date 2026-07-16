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
	SelectControl,
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

	const [ titleTab, setTitleTab ]           = useState( 'normal' );
	const [ categoriesTab, setCategoriesTab ] = useState( 'normal' );
	const [ contentTab, setContentTab ]       = useState( 'normal' );
	const [ excerptTab, setExcerptTab ]       = useState( 'normal' );
	const [ readMoreTab, setReadMoreTab ]     = useState( 'normal' );
	const [ projectUrlTab, setProjectUrlTab ] = useState( 'normal' );
	const [ cardTab, setCardTab ]             = useState( 'normal' );

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

		{/* Featured Image. */}
		{ attributes.showFeaturedImage && (
			<PanelBody title={ __( 'Featured Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				{ attributes.layout !== 'layout2' && (
					<>
						<RangeControl
							label={ __( 'Image Width(px)', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.featuredImageWidth }
							onChange={ ( newValue ) => setAttributes( { featuredImageWidth: newValue } ) }
							min={50} max={1200} step={1}
							allowReset={ true }
						/>
						<RangeControl
							label={ __( 'Image Height(px)', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.featuredImageHeight }
							onChange={ ( newValue ) => setAttributes( { featuredImageHeight: newValue } ) }
							min={50} max={1000} step={1}
							allowReset={ true }
						/>
					</>
				) }
				<SelectControl
					label={ __( 'Object Fit', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.featuredImageObjectFit }
					options={ [
						{ value: 'cover', label: __( 'Cover', 'wpmozo-blocks-and-addons' ) },
						{ value: 'contain', label: __( 'Contain', 'wpmozo-blocks-and-addons' ) },
						{ value: 'fill', label: __( 'Fill', 'wpmozo-blocks-and-addons' ) },
						{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { featuredImageObjectFit: newValue } ) }
				/>
				{ attributes.layout !== 'layout2' && (
					<>
						<WpmozoDimensions props={ props }
							label={ __( 'Image Dimensions', 'wpmozo-blocks-and-addons' ) }
							DimensionKey='featuredImage'
							DimensionsTypes={ { padding: true, margin: true } }
						/>
					</>
				) }
			</PanelBody>
		) }

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

		{/* Categories. */}
		<PanelBody title={ __( 'Categories', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl
				className="wpmozo-button-tabs-wrap"
				__nextHasNoMarginBottom={ true }
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === categoriesTab ) ? true : false }
						onClick={ () => setCategoriesTab( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === categoriesTab ) ? true : false }
						onClick={ () => setCategoriesTab( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === categoriesTab && <>
					<WpmozoColorPicker
						ColorKey="categories"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Categories Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="categories"
						props={ props }
					/>
				</> }
				{ 'hover' === categoriesTab && <>
					<WpmozoColorPicker
						ColorKey="categoriesHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Categories Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="categoriesHover"
						props={ props }
					/>
				</> }
				<WpmozoBorder props={ props }
					label={ __( 'Categories Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="categories"
					BorderTypes={ { border: true, radius: true } }
				/>
			</BaseControl>
			<WpmozoDimensions props={ props }
				label={ __( 'Categories Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='categories'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>

		{/* Content. */}
		{ attributes.showContent && (
			<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl
					className="wpmozo-button-tabs-wrap"
					__nextHasNoMarginBottom={ true }
				>
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === contentTab ) ? true : false }
							onClick={ () => setContentTab( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === contentTab ) ? true : false }
							onClick={ () => setContentTab( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === contentTab && <>
						<WpmozoColorPicker
							ColorKey="content"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="content"
							props={ props }
						/>
					</> }
					{ 'hover' === contentTab && <>
						<WpmozoColorPicker
							ColorKey="contentHover"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="contentHover"
							props={ props }
						/>
					</> }
				</BaseControl>
				<WpmozoDimensions props={ props }
					label={ __( 'Content Dimensions', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='content'
					DimensionsTypes={ { padding: true, margin: true } }
				/>
			</PanelBody>
		) }

		{/* Excerpt. */}
		{ attributes.showExcerpt && (
			<PanelBody title={ __( 'Excerpt', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl
					className="wpmozo-button-tabs-wrap"
					__nextHasNoMarginBottom={ true }
				>
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === excerptTab ) ? true : false }
							onClick={ () => setExcerptTab( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === excerptTab ) ? true : false }
							onClick={ () => setExcerptTab( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === excerptTab && <>
						<WpmozoColorPicker
							ColorKey="excerpt"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Excerpt Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="excerpt"
							props={ props }
						/>
					</> }
					{ 'hover' === excerptTab && <>
						<WpmozoColorPicker
							ColorKey="excerptHover"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Excerpt Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="excerptHover"
							props={ props }
						/>
					</> }
				</BaseControl>
				<WpmozoDimensions props={ props }
					label={ __( 'Excerpt Dimensions', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='excerpt'
					DimensionsTypes={ { padding: true, margin: true } }
				/>
			</PanelBody>
		) }

		{/* Read More Button. */}
		{ attributes.showReadMore && (
			<PanelBody title={ __( 'Read More Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl
					className="wpmozo-button-tabs-wrap"
					__nextHasNoMarginBottom={ true }
				>
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === readMoreTab ) ? true : false }
							onClick={ () => setReadMoreTab( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === readMoreTab ) ? true : false }
							onClick={ () => setReadMoreTab( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === readMoreTab && <>
						<WpmozoColorPicker
							ColorKey="readMore"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) },
								{ key: 'Background', label: __( 'Button Background Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="readMore"
							props={ props }
						/>
					</> }
					{ 'hover' === readMoreTab && <>
						<WpmozoColorPicker
							ColorKey="readMoreHover"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) },
								{ key: 'Background', label: __( 'Button Background Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="readMoreHover"
							props={ props }
						/>
					</> }
				</BaseControl>
				<WpmozoBorder props={ props }
					label={ __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="readMore"
					BorderTypes={ { border: true, radius: true } }
				/>
				<WpmozoDimensions props={ props }
					label={ __( 'Button Spacing', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='readMore'
					DimensionsTypes={ { padding: true, margin: true } }
				/>
			</PanelBody>
		) }

		{/* Project URL Button. */}
		{ attributes.showProjectUrl && (
			<PanelBody title={ __( 'Project URL Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl
					className="wpmozo-button-tabs-wrap"
					__nextHasNoMarginBottom={ true }
				>
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === projectUrlTab ) ? true : false }
							onClick={ () => setProjectUrlTab( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === projectUrlTab ) ? true : false }
							onClick={ () => setProjectUrlTab( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === projectUrlTab && <>
						<WpmozoColorPicker
							ColorKey="projectUrl"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) },
								{ key: 'Background', label: __( 'Button Background Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="projectUrl"
							props={ props }
						/>
					</> }
					{ 'hover' === projectUrlTab && <>
						<WpmozoColorPicker
							ColorKey="projectUrlHover"
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) },
								{ key: 'Background', label: __( 'Button Background Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography
							TypographyKey="projectUrlHover"
							props={ props }
						/>
					</> }
				</BaseControl>
				<WpmozoBorder props={ props }
					label={ __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="projectUrl"
					BorderTypes={ { border: true, radius: true } }
				/>
				<WpmozoDimensions props={ props }
					label={ __( 'Button Spacing', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='projectUrl'
					DimensionsTypes={ { padding: true, margin: true } }
				/>
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
			<ToggleControl
				label={ __( 'Show Arrow Background', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.arrowEnableBg }
				onChange={ ( newValue ) => setAttributes( { arrowEnableBg: newValue } ) }
			/>
			{ attributes.arrowEnableBg && (
				<RangeControl
					label={ __( 'Arrow Background Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.arrowBgSize }
					onChange={ ( newValue ) => setAttributes( { arrowBgSize: newValue } ) }
					min={20} max={150} step={1}
				/>
			) }
			<WpmozoColorPicker props={props}
				label={ __( 'Arrows Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="arrow"
				ColorTypes={ attributes.arrowEnableBg ? [
					{ key: 'Color', label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __( 'Arrow Background Color', 'wpmozo-blocks-and-addons' ) }
				] : [
					{ key: 'Color', label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			{ attributes.arrowEnableBg && (
				<WpmozoBorder props={ props }
					label={ __( 'Arrows Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="arrow"
					BorderTypes={ { border: true, radius: true } }
				/>
			) }
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
			<BaseControl
				className="wpmozo-button-tabs-wrap"
				__nextHasNoMarginBottom={ true }
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === cardTab ) ? true : false }
						onClick={ () => setCardTab( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === cardTab ) ? true : false }
						onClick={ () => setCardTab( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === cardTab && <>
					{ attributes.layout === 'layout2' ? (
						<ColorGradientControl
							colors={[]}
							gradients={[]}
							enableAlpha={ true }
							label={ __( 'Overlay Background Color', 'wpmozo-blocks-and-addons' ) }
							colorValue={ attributes.overlayBackground }
							gradientValue={ attributes.overlayBGGradient }
							onColorChange={ ( newValue ) => {
								console.log( 'Overlay Color Changed:', newValue );
								setAttributes( {
									overlayBackground: newValue,
								} );
							} }
							onGradientChange={ ( newValue ) => {
								console.log( 'Overlay Gradient Changed:', newValue );
								setAttributes( {
									overlayBGGradient: newValue,
								} );
							} }
						/>
					) : (
						<ColorGradientControl colors={[]} gradients={[]}
							label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
							colorValue={ attributes.portfolioBackground }
							gradientValue={ attributes.portfolioBGGradient }
							onColorChange={ (newValue) => setAttributes( { portfolioBackground: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( { portfolioBGGradient: newValue } ) }
						/>
					) }
					<WpmozoBorder props={ props }
						label={ __( 'Portfolio Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey="portfolio"
						BorderTypes={ { border: true, radius: true } }
					/>
				</> }
				{ 'hover' === cardTab && <>
					{ attributes.layout === 'layout2' ? (
						<ColorGradientControl colors={[]} gradients={[]}
							enableAlpha={ true }
							label={ __( 'Overlay Background Hover Color', 'wpmozo-blocks-and-addons' ) }
							colorValue={ attributes.overlayBackgroundHover }
							gradientValue={ attributes.overlayBGGradientHover }
							onColorChange={ (newValue) => setAttributes( { overlayBackgroundHover: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( { overlayBGGradientHover: newValue } ) }
						/>
					) : (
						<ColorGradientControl colors={[]} gradients={[]}
							label={ __( 'Background Hover Color', 'wpmozo-blocks-and-addons' ) }
							colorValue={ attributes.portfolioBackgroundHover }
							gradientValue={ attributes.portfolioBGGradientHover }
							onColorChange={ (newValue) => setAttributes( { portfolioBackgroundHover: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( { portfolioBGGradientHover: newValue } ) }
						/>
					) }
					<WpmozoBorder props={ props }
						label={ __( 'Portfolio Hover Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey="portfolioHover"
						BorderTypes={ { border: true, radius: true } }
					/>
				</> }
			</BaseControl>
			<WpmozoDimensions props={ props }
				label={ __( 'Portfolio Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='portfolio'
				DimensionsTypes={ { padding: true } }
			/>
		</PanelBody>

		{/* Slider Wrapper Container. */}
		<PanelBody title={ __( 'Slider Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Container Width(%)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.containerWidth }
				onChange={ ( newValue ) => setAttributes( { containerWidth: newValue } ) }
				min={10} max={100} step={1}
				allowReset={ true }
			/>
			<RangeControl
				label={ __( 'Container Max Width(px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.containerMaxWidth }
				onChange={ ( newValue ) => setAttributes( { containerMaxWidth: newValue } ) }
				min={100} max={2000} step={10}
				allowReset={ true }
			/>
		</PanelBody>
	</> );
};

export default DesignPanel;
