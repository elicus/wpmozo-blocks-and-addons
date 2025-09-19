import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

import {
	PanelBody,
	TextControl,
	SelectControl,
	ToggleControl,
	TextareaControl,
	RangeControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	// Get the terms.
	const terms = useSelect( (select) =>
		select( coreStore ).getEntityRecords( 'taxonomy', 'category', {
			per_page: -1,
			hide_empty: 1
		} ),
	[] );
	const categories = terms?.map( ( term ) => ( {
		label: term.name,
		value: term.id,
	} ) ) || [];

	return ( <>
		{/* Content. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<RangeControl
				label={ __( 'Number of Posts', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.postsNumber || 10 }
				onChange={ ( newValue ) => setAttributes( { postsNumber: newValue } ) }
				min={2} max={50} step={1}
			/>
			<RangeControl
				label={ __( 'Post Offset Number', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.offsetNumber || 0 }
				onChange={ ( newValue ) => setAttributes( { offsetNumber: newValue } ) }
				min={2} max={50} step={1}
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
					{ value: 'relevance', label: __( 'Relevance', 'wpmozo-blocks-and-addons' ) },
					{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { postOrderBy: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			{ ( 'none' !== attributes.postOrderBy && 'rand' !== attributes.postOrderBy ) && (
				<SelectControl
					label={ __( 'Order', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.postOrder }
					options={ [
						{ value: 'desc', label: __( 'DESC', 'wpmozo-blocks-and-addons' ) },
						{ value: 'asc', label: __( 'ASC', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { postOrder: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }
			<SelectControl multiple
				label={ __( 'Includes Categories', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.includesCategories }
				options={ categories }
				onChange={ ( newValue ) => setAttributes( { includesCategories: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Ignore Sticky Posts', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.ignoreStickyPosts }
				onChange={ ( newValue ) => setAttributes( { ignoreStickyPosts: newValue } ) }
			/>
			<TextareaControl
				label={ __( 'No Result Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.noResultText }
				onChange={ ( newValue ) => setAttributes( { noResultText: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
		</PanelBody>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<SelectControl
				label={ __( 'Select Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={ [
					{ value: 'layout1', label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ) },
					{ value: 'layout2', label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<SelectControl
				label={ __( 'Select Option', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.orientation }
				options={ [
					{ value: 'alternate', label: __( 'Alternate', 'wpmozo-blocks-and-addons' ) },
					{ value: 'right', label: __( 'Content Right', 'wpmozo-blocks-and-addons' ) },
					{ value: 'left', label: __( 'Content Left', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { orientation: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/><hr />
			<ToggleControl
				label={ __( 'Show Featured Image', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showThumbnail }
				onChange={ ( newValue ) => setAttributes( { showThumbnail: newValue } ) }
			/>
			{ ( attributes.showThumbnail ) && (
				<SelectControl
					label={ __( 'Featured Image Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.featuredImageSize }
					options={ [
						{ value: 'medium', label: __( 'Medium', 'wpmozo-blocks-and-addons' ) },
						{ value: 'large', label: __( 'Large', 'wpmozo-blocks-and-addons' ) },
						{ value: 'full', label: __( 'Full', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { featuredImageSize: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }<hr />
			<ToggleControl
				label={ __( 'Show Author', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showAuthor }
				onChange={ ( newValue ) => setAttributes( { showAuthor: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Show Post Date', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showDate }
				onChange={ ( newValue ) => setAttributes( { showDate: newValue } ) }
			/>
			{ ( attributes.showDate ) && (
				<TextControl
					label={ __( 'Date Format', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.dateFormat || "M j, Y" }
					onChange={ ( newValue ) => setAttributes( { dateFormat: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }<hr />
			<ToggleControl
				label={ __( 'Show Categories/Terms', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showCategories }
				onChange={ ( newValue ) => setAttributes( { showCategories: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Show Comment Count', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showComments }
				onChange={ ( newValue ) => setAttributes( { showComments: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Show Read More', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showReadMore }
				onChange={ ( newValue ) => setAttributes( { showReadMore: newValue } ) }
			/>
			{ ( attributes.showReadMore ) && (
				<TextControl
					label={ __( 'Read More Text', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.readMoreText }
					onChange={ ( newValue ) => setAttributes( { readMoreText: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }
		</PanelBody>
	</> );
};
