// inspector.js
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useState } from "@wordpress/element";

import {
	InspectorControls,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	TextControl,
	ButtonGroup,
	RangeControl,
	SelectControl,
	ToggleControl,
	BaseControl,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoIconpicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
} from '../../common/components';

const Inspector = ( { attributes, setAttributes } ) => {

	let props = { attributes, setAttributes };
		props = Object.assign( {}, props, { preAttributes: {} } );

	const [ deviceType, setDeviceType ]     = useState( 'tablet' );
	const [ quoteIconTab, setQuoteIconTab ] = useState( 'opening' );

	// Get the terms.
	const terms = useSelect( (select) =>
		select( coreStore ).getEntityRecords( 'taxonomy', 'mozo-testimonial-category', {
			per_page: -1,
		} ),
	[] );
	const options = terms?.map( ( term ) => ( {
		label: term.name,
		value: term.id,
	} ) ) || [];

	const [ bodyTextTab, setBodyTextTab ]       = useState( 'normal' );
	const [ authorNameTab, setAuthorNameTab ]   = useState( 'normal' );
	const [ designationTab, setDesignationTab ] = useState( 'normal' );
	const [ companyNameTab, setCompanyNameTab ] = useState( 'normal' );

	return (
		<>
			{/* Control tab. */}
			<InspectorControls key="controls">
				{/* Content. */}
				<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
					<SelectControl
						label={ __( 'Testimonial Layout', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.layout }
						options={ [
							{ value: 'layout1', label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ) },
							{ value: 'layout2', label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
					/>
					<RangeControl
						label={ __( 'Number of Testimonials', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.postsToShow }
						onChange={ ( newValue ) => setAttributes( { postsToShow: newValue } ) }
						min={1} max={50} step={1}
					/>
					<SelectControl
						label={ __( 'Order', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.postOrder }
						options={ [
							{ value: 'desc', label: __( 'DESC', 'wpmozo-blocks-and-addons' ) },
							{ value: 'asc', label: __( 'ASC', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { postOrder: newValue } ) }
					/>
					<SelectControl
						label={ __( 'Order by', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.postOrderBy }
						options={ [
							{ value: 'date', label: __( 'Date', 'wpmozo-blocks-and-addons' ) },
							{ value: 'modified', label: __( 'Modified Date', 'wpmozo-blocks-and-addons' ) },
							{ value: 'title', label: __( 'Title', 'wpmozo-blocks-and-addons' ) },
							{ value: 'name', label: __( 'Slug', 'wpmozo-blocks-and-addons' ) },
							{ value: 'ID', label: __( 'ID', 'wpmozo-blocks-and-addons' ) },
							{ value: 'rand', label: __( 'Random', 'wpmozo-blocks-and-addons' ) },
							{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
						] }
						onChange={ ( newValue ) => setAttributes( { postOrderBy: newValue } ) }
					/>
					<SelectControl multiple
						label={ __( 'Includes Categories', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.includesCategories }
						options={ options }
						onChange={ ( newValue ) => setAttributes( { includesCategories: newValue } ) }
					/>
					<TextControl
						label={ __( 'No Result Text', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.noResultText }
						onChange={ ( newValue ) => setAttributes( { noResultText: newValue } ) }
					/>
				</PanelBody>
				{/* Display. */}
				<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
					<ToggleControl
						label={ __( 'Show Rating', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showRating }
						onChange={ ( newValue ) => setAttributes( { showRating: newValue } ) }
					/>
					<ToggleControl
						label={ __( 'Show Author Image', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showAuthorImage }
						onChange={ ( newValue ) => setAttributes( { showAuthorImage: newValue } ) }
					/>
					<ToggleControl
						label={ __( 'Show Designation', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showDesignation }
						onChange={ ( newValue ) => setAttributes( { showDesignation: newValue } ) }
					/>
					<ToggleControl
						label={ __( 'Show Company Name', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showCompany }
						onChange={ ( newValue ) => setAttributes( { showCompany: newValue } ) }
					/>
				</PanelBody>
				{/* Slider. */}
				<PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
					<SelectControl
						label={ __( 'Slide Effect', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.slideEffect }
						options={ [
							{ value: 'slide', label: __( 'Slide', 'wpmozo-blocks-and-addons' ) },
							{ value: 'cube', label: __( 'Cube', 'wpmozo-blocks-and-addons' ) },
							{ value: 'coverflow', label: __( 'Coverflow', 'wpmozo-blocks-and-addons' ) },
							{ value: 'flip', label: __( 'Flip', 'wpmozo-blocks-and-addons' ) },
							{ value: 'fade', label: __( 'Fade', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { slideEffect: newValue } ) }
					/>
					{ ( 'slide' === attributes.slideEffect || 'coverflow' === attributes.slideEffect ) && <>
						<SelectControl
							label={ __( 'Number of Testimonials Per View', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.slidesPerView }
							options={ [
								{ value: 1, label: __( '1', 'wpmozo-blocks-and-addons' ) },
								{ value: 2, label: __( '2', 'wpmozo-blocks-and-addons' ) },
								{ value: 3, label: __( '3', 'wpmozo-blocks-and-addons' ) },
								{ value: 4, label: __( '4', 'wpmozo-blocks-and-addons' ) },
								{ value: 5, label: __( '5', 'wpmozo-blocks-and-addons' ) },
								{ value: 6, label: __( '6', 'wpmozo-blocks-and-addons' ) },
								{ value: 7, label: __( '7', 'wpmozo-blocks-and-addons' ) },
								{ value: 8, label: __( '8', 'wpmozo-blocks-and-addons' ) },
								{ value: 9, label: __( '9', 'wpmozo-blocks-and-addons' ) },
								{ value: 10, label: __( '10', 'wpmozo-blocks-and-addons' ) },
							] }
							onChange={ ( newValue ) => setAttributes( { slidesPerView: parseInt( newValue ) } ) }
						/>
						<SelectControl
							label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.slidesPerGroup }
							options={ [
								{ value: 1, label: __( '1', 'wpmozo-blocks-and-addons' ) },
								{ value: 2, label: __( '2', 'wpmozo-blocks-and-addons' ) },
								{ value: 3, label: __( '3', 'wpmozo-blocks-and-addons' ) },
								{ value: 4, label: __( '4', 'wpmozo-blocks-and-addons' ) },
								{ value: 5, label: __( '5', 'wpmozo-blocks-and-addons' ) },
								{ value: 6, label: __( '6', 'wpmozo-blocks-and-addons' ) },
								{ value: 7, label: __( '7', 'wpmozo-blocks-and-addons' ) },
								{ value: 8, label: __( '8', 'wpmozo-blocks-and-addons' ) },
								{ value: 9, label: __( '9', 'wpmozo-blocks-and-addons' ) },
								{ value: 10, label: __( '10', 'wpmozo-blocks-and-addons' ) },
							] }
							onChange={ ( newValue ) => setAttributes( { slidesPerGroup: parseInt( newValue ) } ) }
						/>
						<RangeControl
							label={ __( 'Space Between Slides', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.spaceBetweenSlides }
							onChange={ ( newValue ) => setAttributes( { spaceBetweenSlides: newValue } ) }
							min={1} max={100} step={1}
						/>
					</> }
					<ToggleControl
						label={ __( 'Equalize Testimonials Height', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.equalHeight }
						onChange={ ( newValue ) => setAttributes( { equalHeight: newValue } ) }
					/>
					<ToggleControl
						label={ __( 'Enable Loop', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.enableLoop }
						onChange={ ( newValue ) => setAttributes( { enableLoop: newValue } ) }
					/>
					<ToggleControl
						label={ __( 'Autoplay', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.autoplay }
						onChange={ ( newValue ) => setAttributes( { autoplay: newValue } ) }
					/>
					{ attributes.autoplay && <>
						<RangeControl
							label={ __( 'Autoplay Delay', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.autoplayDelay }
							onChange={ ( newValue ) => setAttributes( { autoplayDelay: newValue } ) }
							min={0} max={10000} step={100}
						/>
						<ToggleControl
							label={ __( 'Pause on Hover', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.pauseOnHover }
							onChange={ ( newValue ) => setAttributes( { pauseOnHover: newValue } ) }
						/>
					</> }
					<ToggleControl
						label={ __( 'Enable Linear Transition', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.enableLinearTrans }
						onChange={ ( newValue ) => setAttributes( { enableLinearTrans: newValue } ) }
					/>
					<RangeControl
						label={ __( 'Transition Duration', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.transDuration }
						onChange={ ( newValue ) => setAttributes( { transDuration: newValue } ) }
						min={0} max={10000} step={100}
					/>

					{/* Responsive slide settings. */}
					{ ( 'slide' === attributes.slideEffect || 'coverflow' === attributes.slideEffect ) &&
						<BaseControl className="wpmozo-color-combo-wrap">
							<ButtonGroup>
								<Button
									className='wpmozo-color-combo-type'
									isPressed={ ( 'tablet' === deviceType ) ? true : false }
									onClick={ () => setDeviceType( 'tablet' ) }
								>{ __( 'Tablet', 'wpmozo-blocks-and-addons' ) }</Button>
								<Button
									className='wpmozo-color-combo-type'
									isPressed={ ( 'mobile' === deviceType ) ? true : false }
									onClick={ () => setDeviceType( 'mobile' ) }
								>{ __( 'Mobile', 'wpmozo-blocks-and-addons' ) }</Button>
							</ButtonGroup>
							{ 'tablet' === deviceType && <>
								<SelectControl
									label={ __( 'Number of Testimonials Per View', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.slidesPerViewTablet }
									options={ [
										{ value: 1, label: __( '1', 'wpmozo-blocks-and-addons' ) },
										{ value: 2, label: __( '2', 'wpmozo-blocks-and-addons' ) },
										{ value: 3, label: __( '3', 'wpmozo-blocks-and-addons' ) },
										{ value: 4, label: __( '4', 'wpmozo-blocks-and-addons' ) },
										{ value: 5, label: __( '5', 'wpmozo-blocks-and-addons' ) },
										{ value: 6, label: __( '6', 'wpmozo-blocks-and-addons' ) },
										{ value: 7, label: __( '7', 'wpmozo-blocks-and-addons' ) },
										{ value: 8, label: __( '8', 'wpmozo-blocks-and-addons' ) },
										{ value: 9, label: __( '9', 'wpmozo-blocks-and-addons' ) },
										{ value: 10, label: __( '10', 'wpmozo-blocks-and-addons' ) },
									] }
									onChange={ ( newValue ) => setAttributes( { slidesPerViewTablet: parseInt( newValue ) } ) }
								/>
								<SelectControl
									label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.slidesPerGroupTablet }
									options={ [
										{ value: 1, label: __( '1', 'wpmozo-blocks-and-addons' ) },
										{ value: 2, label: __( '2', 'wpmozo-blocks-and-addons' ) },
										{ value: 3, label: __( '3', 'wpmozo-blocks-and-addons' ) },
										{ value: 4, label: __( '4', 'wpmozo-blocks-and-addons' ) },
										{ value: 5, label: __( '5', 'wpmozo-blocks-and-addons' ) },
										{ value: 6, label: __( '6', 'wpmozo-blocks-and-addons' ) },
										{ value: 7, label: __( '7', 'wpmozo-blocks-and-addons' ) },
										{ value: 8, label: __( '8', 'wpmozo-blocks-and-addons' ) },
										{ value: 9, label: __( '9', 'wpmozo-blocks-and-addons' ) },
										{ value: 10, label: __( '10', 'wpmozo-blocks-and-addons' ) },
									] }
									onChange={ ( newValue ) => setAttributes( { slidesPerGroupTablet: parseInt( newValue ) } ) }
								/>
								<RangeControl
									label={ __( 'Space Between Slides', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.spaceBetweenSlidesTablet }
									onChange={ ( newValue ) => setAttributes( { spaceBetweenSlidesTablet: newValue } ) }
									min={1} max={100} step={1}
								/>
							</> }
							{ 'mobile' === deviceType && <>
								<SelectControl
									label={ __( 'Number of Testimonials Per View', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.slidesPerViewMobile }
									options={ [
										{ value: 1, label: __( '1', 'wpmozo-blocks-and-addons' ) },
										{ value: 2, label: __( '2', 'wpmozo-blocks-and-addons' ) },
										{ value: 3, label: __( '3', 'wpmozo-blocks-and-addons' ) },
										{ value: 4, label: __( '4', 'wpmozo-blocks-and-addons' ) },
										{ value: 5, label: __( '5', 'wpmozo-blocks-and-addons' ) },
										{ value: 6, label: __( '6', 'wpmozo-blocks-and-addons' ) },
										{ value: 7, label: __( '7', 'wpmozo-blocks-and-addons' ) },
										{ value: 8, label: __( '8', 'wpmozo-blocks-and-addons' ) },
										{ value: 9, label: __( '9', 'wpmozo-blocks-and-addons' ) },
										{ value: 10, label: __( '10', 'wpmozo-blocks-and-addons' ) },
									] }
									onChange={ ( newValue ) => setAttributes( { slidesPerViewMobile: parseInt( newValue ) } ) }
								/>
								<SelectControl
									label={ __( 'Number of Slides Per Group', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.slidesPerGroupMobile }
									options={ [
										{ value: 1, label: __( '1', 'wpmozo-blocks-and-addons' ) },
										{ value: 2, label: __( '2', 'wpmozo-blocks-and-addons' ) },
										{ value: 3, label: __( '3', 'wpmozo-blocks-and-addons' ) },
										{ value: 4, label: __( '4', 'wpmozo-blocks-and-addons' ) },
										{ value: 5, label: __( '5', 'wpmozo-blocks-and-addons' ) },
										{ value: 6, label: __( '6', 'wpmozo-blocks-and-addons' ) },
										{ value: 7, label: __( '7', 'wpmozo-blocks-and-addons' ) },
										{ value: 8, label: __( '8', 'wpmozo-blocks-and-addons' ) },
										{ value: 9, label: __( '9', 'wpmozo-blocks-and-addons' ) },
										{ value: 10, label: __( '10', 'wpmozo-blocks-and-addons' ) },
									] }
									onChange={ ( newValue ) => setAttributes( { slidesPerGroupMobile: parseInt( newValue ) } ) }
								/>
								<RangeControl
									label={ __( 'Space Between Slides', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.spaceBetweenSlidesMobile }
									onChange={ ( newValue ) => setAttributes( { spaceBetweenSlidesMobile: newValue } ) }
									min={1} max={100} step={1}
								/>
							</> }
						</BaseControl>
					}
				</PanelBody>
				{/* Slider Navigation. */}
				<PanelBody title={ __( 'Slider Navigation', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
					<ToggleControl
						label={ __( 'Show Arrows', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showArrows }
						onChange={ ( newValue ) => setAttributes( { showArrows: newValue } ) }
					/>
					{ attributes.showArrows && <>
						<WpmozoIconpicker props={ props }
							label={ __( 'Previous Arrow', 'wpmozo-blocks-and-addons' ) }
							iconPickerKey='prevArrowIcon'
							value={ attributes.prevArrowIcon }
							onChange={ ( newValue ) => setAttributes( { prevArrowIcon: newValue } ) }
						/>
						<WpmozoIconpicker props={ props }
							label={ __( 'Next Arrow', 'wpmozo-blocks-and-addons' ) }
							iconPickerKey='nextArrowIcon'
							value={ attributes.nextArrowIcon }
							onChange={ ( newValue ) => setAttributes( { nextArrowIcon: newValue } ) }
						/>
						<ToggleControl
							label={ __( 'Show Arrows On Hover', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.showArrowOnHover }
							onChange={ ( newValue ) => setAttributes( { showArrowOnHover: newValue } ) }
						/>
						<SelectControl
							label={ __( 'Arrows Position', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.arrowsPosition }
							options={ [
								{ value: 'inside', label: __( 'Inside', 'wpmozo-blocks-and-addons' ) },
								{ value: 'outside', label: __( 'Outside', 'wpmozo-blocks-and-addons' ) },
								{ value: 'top_left', label: __( 'Top Left', 'wpmozo-blocks-and-addons' ) },
								{ value: 'top_right', label: __( 'Top Right', 'wpmozo-blocks-and-addons' ) },
								{ value: 'top_center', label: __( 'Top Center', 'wpmozo-blocks-and-addons' ) },
								{ value: 'bottom_left', label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ) },
								{ value: 'bottom_right', label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ) },
								{ value: 'bottom_center', label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ) },
							] }
							onChange={ ( newValue ) => setAttributes( { arrowsPosition: newValue } ) }
						/>
					</> }
					<ToggleControl
						label={ __( 'Show Dots Pagination', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showControlDot }
						onChange={ ( newValue ) => setAttributes( { showControlDot: newValue } ) }
					/>
					{ attributes.showControlDot && <>
						<SelectControl
							label={ __( 'Dots Pagination Style', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.controlDotStyle }
							options={ [
								{ value: 'solid_dot', label: __( 'Solid Dot', 'wpmozo-blocks-and-addons' ) },
								{ value: 'transparent_dot', label: __( 'Transparent Dot', 'wpmozo-blocks-and-addons' ) },
								{ value: 'stretched_dot', label: __( 'Stretched Dot', 'wpmozo-blocks-and-addons' ) },
								{ value: 'line', label: __( 'Line', 'wpmozo-blocks-and-addons' ) },
								{ value: 'rounded_line', label: __( 'Rounded Line', 'wpmozo-blocks-and-addons' ) },
								{ value: 'square_dot', label: __( 'Squared Dot', 'wpmozo-blocks-and-addons' ) },
							] }
							onChange={ ( newValue ) => setAttributes( { controlDotStyle: newValue } ) }
						/>
						<ToggleControl
							label={ __( 'Enable Dynamic Dots', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.enableDynamicDots }
							onChange={ ( newValue ) => setAttributes( { enableDynamicDots: newValue } ) }
						/>
					</> }
				</PanelBody>
			</InspectorControls>

			{/* Style tab. */}
			<InspectorControls key="styles" group="styles">
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
									isPressed={ ( 'hover' === authorNameTab ) ? true : false }
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
						label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='slider'
						DimensionsTypes={ { padding: true } }
					/>
					<RangeControl
						label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.arrowFontSize }
						onChange={ ( newValue ) => setAttributes( { arrowFontSize: newValue } ) }
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
						BorderKey="arrows"
						BorderTypes={ { border: true, radius: true } }
					/>
				</PanelBody>
				{/* Meta. */}
				<PanelBody title={ __( 'Meta', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorPicker props={props}
						label={ __( 'Meta Separator', 'wpmozo-blocks-and-addons' ) }
						ColorKey="metaSeparator"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Select Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				</PanelBody>
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
			</InspectorControls>
		</>
	);
};

export default Inspector;
