import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

import {
	Button,
	PanelBody,
	BaseControl,
	TextControl,
	ButtonGroup,
	RangeControl,
	SelectControl,
	ToggleControl,
	CheckboxControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import {
	WpmozoIconpicker,
	WpmozoColorPicker,
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	// Get the terms.
	const terms = useSelect( (select) =>
		select( coreStore ).getEntityRecords( 'taxonomy', 'mozo-team-member-category', {
			per_page: -1,
		} ),
	[] );
	const teamCatsOpts = terms?.map( ( term ) => ( {
		label: term.name,
		value: term.id,
	} ) ) || [];

	// Display in popup options.
	const { displayInPopup = [] } = attributes;
	const displayInPopupOpts = [
		{ value: 'image', label: __( 'Image', 'wpmozo-blocks-and-addons' ) },
		{ value: 'designation', label: __( 'Designation', 'wpmozo-blocks-and-addons' ) },
		{ value: 'social_icons', label: __( 'Social Icons', 'wpmozo-blocks-and-addons' ) },
		{ value: 'content', label: __( 'Content', 'wpmozo-blocks-and-addons' ) },
		{ value: 'skills_bars', label: __( 'Skill Bars', 'wpmozo-blocks-and-addons' ) },
    ];
    const toggleOption = ( value ) => {
        const newValues = displayInPopup.includes( value )
            ? displayInPopup.filter( ( v ) => v !== value ) // remove
            : [ ...displayInPopup, value ]; // add

        setAttributes( { displayInPopup: newValues } );
    };

	const [ deviceType, setDeviceType ] = useState( 'tablet' );

	return ( <>
		{/* Content. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={ [
					{ value: 'layout1', label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ) },
					{ value: 'layout2', label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
			/>
			<RangeControl
				label={ __( 'Number of Members', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.postsNumber }
				onChange={ ( newValue ) => setAttributes( { postsNumber: newValue } ) }
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
				options={ teamCatsOpts }
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
			<br />
			<ToggleControl
				label={ __( 'Show Short Description', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showShortDesc }
				onChange={ ( newValue ) => setAttributes( { showShortDesc: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Show Designation', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showDesignation }
				onChange={ ( newValue ) => setAttributes( { showDesignation: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Show Social Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showSocialIcon }
				onChange={ ( newValue ) => setAttributes( { showSocialIcon: newValue } ) }
			/>
			{ ( attributes.showSocialIcon ) && (
				<ToggleGroupControl
					label={ __( 'Social Icon Link Target', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.socialIconTarget }
					onChange={ ( newValue ) => setAttributes( { socialIconTarget: newValue } ) }
				>
					<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
			) }
			<hr />
			<ToggleControl
				label={ __( 'Show Skills', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showSkills }
				onChange={ ( newValue ) => setAttributes( { showSkills: newValue } ) }
			/>
		</PanelBody>
		{/* Slider. */}
		<PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
			{ ( 'coverflow' === attributes.slideEffect ) && <>
				<ToggleControl
					label={ __( 'Enable Slide Shadow', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.enableCoverflowShadow }
					onChange={ ( newValue ) => setAttributes( { enableCoverflowShadow: newValue } ) }
				/>
				{ ( attributes.enableCoverflowShadow ) &&
					<WpmozoColorPicker
						ColorKey="coverflowShadow"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Shadow Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				}
				<RangeControl
					label={ __( 'Coverflow Rotate', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.coverflowRotate }
					onChange={ ( newValue ) => setAttributes( { coverflowRotate: newValue } ) }
					min={1} max={360} step={1}
				/>
				<RangeControl
					label={ __( 'Coverflow Depth', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.coverflowDepth }
					onChange={ ( newValue ) => setAttributes( { coverflowDepth: newValue } ) }
					min={1} max={1000} step={1}
				/>
			</> }
			<ToggleControl
				label={ __( 'Equalize Testimonials Height', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.equalHeight }
				onChange={ ( newValue ) => setAttributes( { equalHeight: newValue } ) }
			/>
			{ ( false === attributes.equalHeight ) && (
				<ToggleControl
					label={ __( 'Auto Height Slider', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.autoHeight }
					onChange={ ( newValue ) => setAttributes( { autoHeight: newValue } ) }
				/>
			) }
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
			</> }<hr />
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
		{/* Link. */}
		<PanelBody title={ __( 'Link', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleControl
				label={ __( 'Enable Member Link', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.enableLink }
				onChange={ ( newValue ) => setAttributes( { enableLink: newValue } ) }
			/>
			{ ( attributes.enableLink ) && ( <>
				<SelectControl
					label={ __( 'Link Type', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.linkType }
					options={ [
						{ value: 'item', label: __( 'Link Whole Item', 'wpmozo-blocks-and-addons' ) },
						{ value: 'button', label: __( 'Show Button', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { linkType: newValue } ) }
				/>
				{ ( 'button' === attributes.linkType ) && ( 
					<TextControl
						label={ __( 'Link Button Text', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.linkButtonText }
						onChange={ ( newValue ) => setAttributes( { linkButtonText: newValue } ) }
					/>
				) }<hr />
				<ToggleControl
					label={ __( 'Use Popup', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.usePopup }
					onChange={ ( newValue ) => setAttributes( { usePopup: newValue } ) }
				/>
				{ ( attributes.usePopup ) ? ( 
					<div className="wpmozo-inpector-multi-checkboxes">
						{ displayInPopupOpts.map( ( option ) => (
							<CheckboxControl key={ option.value }
								label={ option.label }
								checked={ displayInPopup.includes( option.value ) }
								onChange={ () => toggleOption( option.value ) }
							/>
						) ) }
					</div>
				) : ( <>
					<hr />
					<ToggleGroupControl
						label={ __( 'Member Link Target', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.linkTarget }
						onChange={ ( newValue ) => setAttributes( { linkTarget: newValue } ) }
					>
						<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
						<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
					</ToggleGroupControl>
				</>) }
			</> ) }
		</PanelBody>
	</> );
};
