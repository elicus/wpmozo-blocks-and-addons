import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    RangeControl,
    ToggleControl,
    SelectControl,
	TextControl,
	Button
} from "@wordpress/components";
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import {WpmozoIconpicker} from "../../../common/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const { postType, allPostTypes = [] } = attributes;

	// 🔹 Fetch all registered post types
	const postTypes = useSelect(
		(select) => select('core').getPostTypes({ per_page: -1 }),
		[]
	);

	// 🔹 Store them in attributes once
	useEffect(() => {
		if (postTypes && postTypes.length > 0 && allPostTypes.length === 0) {
			const formatted = postTypes
				.filter((type) => type.viewable) // optional: only show public ones
				.map((type) => ({
					label: type.name,
					value: type.slug,
				}));

			setAttributes({ allPostTypes: formatted });
		}
	}, [postTypes]);

	return ( <>
		<PanelBody title={__('Content', 'wpmozo-blocks-and-addons')} initialOpen={true}>
			<RangeControl
				label={ __( 'Number of post', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.postsToShow }
				onChange={ ( newValue ) => setAttributes( { postsToShow: newValue } ) }
				min={1} max={100} step={1}
			/>
			<SelectControl
				label={__('Post Type', 'wpmozo-blocks-and-addons')}
				value={postType}
				options={
					allPostTypes.length > 0
						? allPostTypes
						: [{ value: '', label: __('Loading...', 'wpmozo-blocks-and-addons') }]
				}
				onChange={(newValue) => setAttributes({ postType: newValue })}
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
				label={ __( 'Order', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.postOrder }
				options={ [
					{ value: 'desc', label: __( 'DESC', 'wpmozo-blocks-and-addons' ) },
					{ value: 'asc', label: __( 'ASC', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { postOrder: newValue } ) }
			/>
			<ToggleControl
				label={__('Ignore Sticky Posts', 'wpmozo-blocks-and-addons')}
				checked={attributes.ignoreStickyPosts}
				onChange={(newValue) => setAttributes({ignoreStickyPosts: newValue})}
			/>
			<TextControl
				label={ __( 'Exclude Posts by ID', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.noResultText }
				onChange={ ( newValue ) => setAttributes( { noResultText: newValue } ) }
				help={__('If you would like to exclude specific posts from the loop then enter their post ids here comma separated.','wpmozo-blocks-and-addons')}
			/>
		</PanelBody>
		<PanelBody title={__('Display', 'wpmozo-blocks-and-addons')} initialOpen={false}>
			<TextControl
				label={ __( 'Ticker Label', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tickerLabel }
				onChange={ ( newValue ) => setAttributes( { tickerLabel: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Ticker Effect', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tickerEffect }
				options={ [
					{ value: 'scroll', label: __( 'Scroll', 'wpmozo-blocks-and-addons' ) },
					{ value: 'fade', label: __( 'Fade', 'wpmozo-blocks-and-addons' ) },
					{ value: 'slide', label: __( 'Slide', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { tickerEffect: newValue } ) }
			/>
			{'scroll' === attributes.tickerEffect && (
				<>
					<SelectControl
						label={ __( 'Post Item Separator Type', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.separatorType }
						options={ [
							{ value: 'custom', label: __( 'Custom', 'wpmozo-blocks-and-addons' ) },
							{ value: 'icon', label: __( 'Icon', 'wpmozo-blocks-and-addons' ) },
						] }
						onChange={ ( newValue ) => setAttributes( { separatorType: newValue } ) }
					/>
					{'custom' === attributes.separatorType && (
						<TextControl
							label={ __( 'Custom Post Item Separator', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.customSeparator }
							onChange={ ( newValue ) => setAttributes( { customSeparator: newValue } ) }
						/>
					)}
					{'icon' === attributes.separatorType && (
						<WpmozoIconpicker
							props={props}
							label={__('Post Item Separator Icon', 'wpmozo-blocks-and-addons')}
							iconPickerKey='separatorIcon'
							value={attributes.separatorIcon}
							onChange={(newValue) => setAttributes({separatorIcon: newValue})}
						/>
					)}
					<TextControl
						label={ __( 'Scroll Effect Speed', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.scrollEffectSpeed }
						onChange={ ( newValue ) => setAttributes( { scrollEffectSpeed: newValue } ) }
					/>
				</>
			)}
			{'scroll' != attributes.tickerEffect && (
				<>
					{'slide' === attributes.tickerEffect && (
						<SelectControl
							label={ __( 'Slide Alignment', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.slideAlignment }
							options={ [
								{ value: 'horizontal', label: __( 'Horizontal', 'wpmozo-blocks-and-addons' ) },
								{ value: 'vertical', label: __( 'Vertical', 'wpmozo-blocks-and-addons' ) }
							] }
							onChange={ ( newValue ) => setAttributes( { slideAlignment: newValue } ) }
						/>
					)}
					<TextControl
						label={ __( 'Effect Delay', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.effectDelay }
						onChange={ ( newValue ) => setAttributes( { effectDelay: newValue } ) }
					/>
					<TextControl
						label={ __( 'Transition Duration', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.transitionDuration }
						onChange={ ( newValue ) => setAttributes( { transitionDuration: newValue } ) }
					/>
					<ToggleControl
						label={__('Show Arrows', 'wpmozo-blocks-and-addons')}
						checked={attributes.showArrows}
						onChange={(newValue) => setAttributes({showArrows: newValue})}
					/>
					{attributes.showArrows && (
						<>
							<WpmozoIconpicker
								props={props}
								label={__('Previous Arrow', 'wpmozo-blocks-and-addons')}
								iconPickerKey='previousArrow'
								value={attributes.previousArrow}
								onChange={(newValue) => setAttributes({previousArrow: newValue})}
							/>
							<WpmozoIconpicker
								props={props}
								label={__('Next Arrow', 'wpmozo-blocks-and-addons')}
								iconPickerKey='nextArrow'
								value={attributes.nextArrow}
								onChange={(newValue) => setAttributes({nextArrow: newValue})}
							/>
						</>
					)}
				</>
			)}
		</PanelBody>
	</> );
};
