import { __ } from '@wordpress/i18n';
import {useState} from "@wordpress/element";
import {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button,
	RangeControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	Icon
} from '@wordpress/components';
import {
	WpmozoAlignment,
	WpmozoBorder,
	WpmozoColorPicker, WpmozoDimensions, WpmozoIconpicker,
	WpmozoTypography
} from '../../../common/components/index';
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const WPMozoEditorObj = wpmozo_bna_editor_object;

	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});

	return (
		<>
			<PanelBody title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
				<WpmozoAlignment
					label={__( 'Text Alignment', 'wpmozo-blocks-and-addons')}
					onChange={ ( newValue ) => setAttributes( { titleTextAlignment: newValue } ) }
					value={ attributes.titleTextAlignment }
				/>
				<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) }>
					<ButtonGroup>
						{ headingLevelsList.map( ( item, index ) => (
							<Button
								key={`heading-level-${index}`}
								isPressed={item.value === attributes.nameHeadingLevel}
								onClick={() => setAttributes({nameHeadingLevel: item.value})}
							>{item.label}</Button>
						) ) }
					</ButtonGroup>
				</BaseControl>
				<WpmozoColorPicker
					props={props}
				   	ColorKey="titleText"
				   	ColorTypes={ [
						   { key: 'Color', label: __( 'Title Text Color', 'wpmozo-blocks-and-addons' ) }
				   	] }
				/>
				<WpmozoTypography
					TypographyKey="titleText"
					props={props}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Excerpt Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoAlignment
					label={__( 'Text Alignment', 'wpmozo-blocks-and-addons')}
					onChange={ ( newValue ) => setAttributes( { excerptTextAlignment: newValue } ) }
					value={ attributes.excerptTextAlignment }
				/>
				<WpmozoColorPicker
					props={props}
					ColorKey="excerptText"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Excerpt Text Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography
					TypographyKey="excerptText"
					props={props}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Post Item', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<RangeControl
					label={ __( 'Post Item Width', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.postItemWidth }
					onChange={ ( newValue ) => setAttributes( { postItemWidth: newValue } ) }
					min={100} step={10} max={1000}
				/>
				<WpmozoColorPicker
					props={props}
					ColorKey="postItem"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Post Backgrouund Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoBorder
					props={props}
					BorderKey="postItem"
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='postItem'
					DimensionsTypes={{padding: true,margin: true}}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Post Content', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker
					props={props}
					ColorKey="postContent"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Post Backgrouund Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoBorder
					props={props}
					BorderKey="postContent"
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='postContent'
					DimensionsTypes={{padding: true,margin: true}}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Category', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker
					props={props}
					ColorKey="cat"
					ColorTypes={ [
						{ key: 'TextColor', label: __( 'Category Text Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'BKColor', label: __( 'Category Backgrouund Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography
					TypographyKey="catText"
					props={props}
				/>
				<WpmozoBorder
					props={props}
					BorderKey="cat"
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='cat'
					DimensionsTypes={{padding: true,margin: true}}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Post Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<ToggleControl
					label={ __( 'Enable Custom Height', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.enableCustomHeight }
					onChange={ ( newValue ) => setAttributes( { enableCustomHeight: newValue } ) }
					__nextHasNoMarginBottom
				/>
				{attributes.enableCustomHeight && (
					<RangeControl
						label={__('Images Height (px)', 'wpmozo-blocks-and-addons')}
						value={attributes.imageHeight}
						onChange={(newValue) => setAttributes({imageHeight: newValue})}
						min={100} step={10} max={1000}
					/>
				)}
				<WpmozoBorder
					props={props}
					BorderKey="postImage"
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='postImage'
					DimensionsTypes={{padding: true,margin: true}}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Meta Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<RangeControl
					label={__('Meta Icon font Size Height (px)', 'wpmozo-blocks-and-addons')}
					value={attributes.metaIconFontSize}
					onChange={(newValue) => setAttributes({metaIconFontSize: newValue})}
					min={10} step={1} max={100}
				/>
				<WpmozoColorPicker
					props={props}
					ColorKey="metaIcon"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Meta Icon Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			</PanelBody>
			<PanelBody title={ __( 'Meta Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker
					props={props}
					ColorKey="metaText"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Meta Text Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography
					TypographyKey="metaText"
					props={props}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoAlignment
					label={__( 'Button Alignment', 'wpmozo-blocks-and-addons')}
					onChange={ ( newValue ) => setAttributes( { buttonAlignment: newValue } ) }
					value={ attributes.buttonAlignment }
				/>
				<ToggleControl
					label={ __( 'Use Custom Styles For Button', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.customButton }
					onChange={ ( newValue ) => setAttributes( { customButton: newValue } ) }
					__nextHasNoMarginBottom
				/>
				{attributes.customButton && (
					<>
						<RangeControl
							label={__('Butoon Text Size', 'wpmozo-blocks-and-addons')}
							value={attributes.buttonTextSize}
							onChange={(newValue) => setAttributes({buttonTextSize: newValue})}
							min={1} step={1} max={100}
						/>
						<WpmozoColorPicker
							props={props}
							ColorKey="buttonText"
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) },
								{ key: 'Background', label: __( 'Button Background Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<ToggleControl
							label={ __( 'Show Button Icon', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.showButtonIcon }
							onChange={ ( newValue ) => setAttributes( { showButtonIcon: newValue } ) }
							__nextHasNoMarginBottom
						/>
						{attributes.showButtonIcon && (
							<>
								<WpmozoIconpicker
									props={props}
									label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
									iconPickerKey='icon'
									value={ attributes.icon }
									onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
								/>
								<ToggleGroupControl
									label={__('Icon Position', 'wpmozo-blocks-and-addons')}
									value={attributes.buttonMediaPosition}
									onChange={(newValue) => setAttributes({buttonMediaPosition: newValue})}
								>
									<ToggleGroupControlOption icon={<Icon icon="external"/>} value="before" label="Before"/>
									<ToggleGroupControlOption value="after" label="After"/>
								</ToggleGroupControl>
								<WpmozoColorPicker
									props={props}
									ColorKey="buttonIcon"
									ColorTypes={ [
										{ key: 'Color', label: __( 'Button Icon Color', 'wpmozo-blocks-and-addons' ) }
									] }
								/>
								<ToggleControl
									label={ __( 'Only Show Icon On Hover for Button', 'wpmozo-blocks-and-addons' ) }
									checked={ attributes.showOnHover }
									onChange={ ( newValue ) => setAttributes( { showOnHover: newValue } ) }
									__nextHasNoMarginBottom
								/>
							</>
						)}
						<WpmozoBorder
							props={props}
							BorderKey="button"
						/>
						<WpmozoDimensions
							props={props}
							DimensionKey='button'
							DimensionsTypes={{padding: true, margin: true}}
						/>
					</>
				)}
			</PanelBody>
			<PanelBody title={ __( 'Spacing', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoDimensions
					props={props}
					DimensionKey='container'
					DimensionsTypes={{padding: true,margin: true}}
				/>
			</PanelBody>
			<PanelBody title={ __( 'Border', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoBorder
					props={props}
					BorderKey="container"
				/>
			</PanelBody>
		</>
	);
};
