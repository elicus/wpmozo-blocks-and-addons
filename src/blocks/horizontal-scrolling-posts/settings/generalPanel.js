import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	SelectControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { useState } from "@wordpress/element";
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';

export const GeneralPanel = ( { attributes, setAttributes } ) => {

	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});

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

	return ( <>
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
				label={ __( 'Number of post', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.postsToShow }
				onChange={ ( newValue ) => setAttributes( { postsToShow: newValue } ) }
				min={1} max={100} step={1}
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
					{ value: 'slug', label: __( 'Slug', 'wpmozo-blocks-and-addons' ) },
					{ value: 'id', label: __( 'ID', 'wpmozo-blocks-and-addons' ) },
					{ value: 'rand', label: __( 'Random', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { postOrderBy: newValue } ) }
			/>
			<SelectControl
				multiple
			   	label={ __( 'Includes Categories', 'wpmozo-blocks-and-addons' ) }
			   	value={ attributes.includesCategories }
			   	options={ options }
			   	onChange={ ( newValue ) => setAttributes( { includesCategories: newValue } ) }
			/>
			<ToggleControl
				label={__('Ignore Sticky Posts', 'wpmozo-blocks-and-addons')}
				checked={attributes.ignoreStickyPosts}
				onChange={(newValue) => setAttributes({ignoreStickyPosts: newValue})}
			/>
			<TextControl
				label={ __( 'No Result Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.noResultText }
				onChange={ ( newValue ) => setAttributes( { noResultText: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<ToggleControl
				label={__('Show Featured Image', 'wpmozo-blocks-and-addons')}
				checked={attributes.showFeaturedImage}
				onChange={(newValue) => setAttributes({showFeaturedImage: newValue})}
			/>
			<ToggleControl
				label={__('Show Title', 'wpmozo-blocks-and-addons')}
				checked={attributes.showTtile}
				onChange={(newValue) => setAttributes({showTtile: newValue})}
			/>
			<ToggleControl
				label={__('Show Excerpt', 'wpmozo-blocks-and-addons')}
				checked={attributes.showExcerpt}
				onChange={(newValue) => setAttributes({showExcerpt: newValue})}
			/>
			{attributes.showExcerpt && (
				<TextControl
					label={ __( 'Excerpt Length', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.excerptLength }
					onChange={ ( newValue ) => setAttributes( { excerptLength: newValue } ) }
				/>
			)}
			<ToggleControl
				label={__('Show Categories/Terms', 'wpmozo-blocks-and-addons')}
				checked={attributes.showCategories}
				onChange={(newValue) => setAttributes({showCategories: newValue})}
			/>
			<ToggleControl
				label={__('Show Author Name', 'wpmozo-blocks-and-addons')}
				checked={attributes.showAuthorName}
				onChange={(newValue) => setAttributes({showAuthorName: newValue})}
			/>
			<ToggleControl
				label={__('Show Date', 'wpmozo-blocks-and-addons')}
				checked={attributes.showDate}
				onChange={(newValue) => setAttributes({showDate: newValue})}
			/>
			<ToggleControl
				label={__('Show Comment Count', 'wpmozo-blocks-and-addons')}
				checked={attributes.showCommentCount}
				onChange={(newValue) => setAttributes({showCommentCount: newValue})}
			/>
			<ToggleControl
				label={__('Show Button', 'wpmozo-blocks-and-addons')}
				checked={attributes.showButton}
				onChange={(newValue) => setAttributes({showButton: newValue})}
			/>
			{attributes.showButton && (
				<TextControl
					label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonText }
					onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
				/>
			)}
		</PanelBody>
	</> );
};
