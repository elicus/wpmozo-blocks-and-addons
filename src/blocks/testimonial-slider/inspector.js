// inspector.js
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { useState } from "@wordpress/element";

import {
	InspectorControls
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

const Inspector = ( { attributes, setAttributes } ) => {

	let props = { attributes, setAttributes };
		props = Object.assign( {}, props, { preAttributes: {} } );

	const [ deviceType, setDeviceType ] = useState('tablet');

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

	return (
		<>
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
							{ value: 'DESC', label: __( 'DESC', 'wpmozo-blocks-and-addons' ) },
							{ value: 'ASC', label: __( 'ASC', 'wpmozo-blocks-and-addons' ) }
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
						onChange={ ( newValue ) => setAttributes( { slidesPerView: newValue } ) }
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
						onChange={ ( newValue ) => setAttributes( { slidesPerGroup: newValue } ) }
					/>
					<RangeControl
						label={ __( 'Space Between Slides', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.spaceBetweenSlides }
						onChange={ ( newValue ) => setAttributes( { spaceBetweenSlides: newValue } ) }
						min={1} max={100} step={1}
					/>
					<ToggleControl
						label={ __( 'Equalize Testimonials Height', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.equalHeigh }
						onChange={ ( newValue ) => setAttributes( { equalHeigh: newValue } ) }
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

					</BaseControl>
				</PanelBody>

			</InspectorControls>
		</>
	);
};

export default Inspector;
