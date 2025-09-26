import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	 __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoRangeSize,
	WpmozoBorder,
	WpmozoMediaUploader,
	WpmozoDimensions,
	WpmozoIconpicker
} from '../../../common/components/index';
import { headingLevelsList } from '../../../common/utils.js';


export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [ accordionType, setAccordionType ] = useState('normal'),
		iconShapes = [
		{
			label: __( 'Square', 'wpmozo-blocks-and-addons' ),
			value: 'square'
		},
		{
			label: __( 'Circle', 'wpmozo-blocks-and-addons' ),
			value: 'circle'
		},
		{
			label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ),
			value: 'hexagon'
		}
	];

	return ( <>
		<PanelBody title={ __( 'Accordion', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('normal' === accordionType) ? true : false}
						onClick={() => setAccordionType('normal')}
					>{__('Normal', 'wpmozo-blocks-and-addons')}</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('active' === accordionType) ? true : false}
						onClick={() => setAccordionType('active')}
					>{__('Active', 'wpmozo-blocks-and-addons')}</Button>
				</ButtonGroup>
				{'normal' === accordionType && <>
					<WpmozoColorPicker props={props}
					   	ColorKey="normalAccordion"
					   	ColorTypes={[
						   	{
						   		key: 'Background', 
						   		label: __('Accordion Background', 'wpmozo-blocks-and-addons'), 
						   		withGradient: true
						   	}
					   	]}
					/>
					<ToggleControl
						label={ __( 'Use Background Image', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.normalUseBackgroundImage }
						onChange={ ( newValue ) => setAttributes( { normalUseBackgroundImage: newValue } ) }
					/>
					{ attributes.normalUseBackgroundImage && <>
						<WpmozoMediaUploader props={props}
							label={ __( 'Background Image', 'wpmozo-blocks-and-addons' ) }
							attrKye="normalBackgroundImage"
						/>
						{ attributes.normalBackgroundImage && <>
							<SelectControl
								label={ __( 'Background Image Size', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.normalItemBGImageSize }
								options={ [
									{ value: 'cover', label: __( 'Cover', 'wpmozo-blocks-and-addons' ) },
									{ value: 'contain', label: __( 'Fit', 'wpmozo-blocks-and-addons' ) },
									{ value: 'initial', label: __( 'Actual Size', 'wpmozo-blocks-and-addons' ) },
									{ value: 'stretch', label: __( 'Stretch to Fill', 'wpmozo-blocks-and-addons' ) },
								] }
								onChange={ ( newValue ) => setAttributes( { normalItemBGImageSize: newValue } ) }
								__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
							/>
							<SelectControl
								label={ __( 'Background Image Position', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.normalItemBGImagePosition }
								options={ [
									{ value: 'top_left', label: __( 'Top Left', 'wpmozo-blocks-and-addons' ) },
									{ value: 'top_center', label: __( 'Top Center', 'wpmozo-blocks-and-addons' ) },
									{ value: 'top_right', label: __( 'Top Right', 'wpmozo-blocks-and-addons' ) },
									{ value: 'center_left', label: __( 'Center Left', 'wpmozo-blocks-and-addons' ) },
									{ value: 'center', label: __( 'Center', 'wpmozo-blocks-and-addons' ) },
									{ value: 'center_right', label: __( 'Center Right', 'wpmozo-blocks-and-addons' ) },
									{ value: 'bottom_left', label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ) },
									{ value: 'bottom_center', label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ) },
									{ value: 'bottom_right', label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ) },
								] }
								onChange={ ( newValue ) => setAttributes( { normalItemBGImagePosition: newValue } ) }
								__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
							/>
							<SelectControl
								label={ __( 'Background Image Repeat', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.normalItemBGImageRepeat }
								options={ [
									{ value: 'repeat', label: __( 'Repeat', 'wpmozo-blocks-and-addons' ) },
									{ value: 'repeat-x', label: __( 'Repeat X (horizontal)', 'wpmozo-blocks-and-addons' ) },
									{ value: 'repeat-y', label: __( 'Repeat Y (vertical)', 'wpmozo-blocks-and-addons' ) },
									{ value: 'space', label: __( 'Repeat with space between', 'wpmozo-blocks-and-addons' ) },
									{ value: 'round', label: __( 'Repeat and Stretch', 'wpmozo-blocks-and-addons' ) },
									{ value: 'no-repeat', label: __( 'No Repeat', 'wpmozo-blocks-and-addons' ) },
								] }
								onChange={ ( newValue ) => setAttributes( { normalItemBGImageRepeat: newValue } ) }
								__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
							/>
							<SelectControl
								label={ __( 'Background Image Blend', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.normalItemBGImageBlend }
								options={ [
									{ value: 'normal', label: __( 'Normal', 'wpmozo-blocks-and-addons' ) },
									{ value: 'multiply', label: __( 'Multiply', 'wpmozo-blocks-and-addons' ) },
									{ value: 'screen', label: __( 'Screen', 'wpmozo-blocks-and-addons' ) },
									{ value: 'overlay', label: __( 'Overlay', 'wpmozo-blocks-and-addons' ) },
									{ value: 'darken', label: __( 'Darken', 'wpmozo-blocks-and-addons' ) },
									{ value: 'lighten', label: __( 'Lighten', 'wpmozo-blocks-and-addons' ) },
								] }
								onChange={ ( newValue ) => setAttributes( { normalItemBGImageBlend: newValue } ) }
								__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
							/>
						</> }
					</> }
				</>}
				{'active' === accordionType && <>
					<WpmozoColorPicker props={props}
					   	ColorKey="activeAccordion"
					   	ColorTypes={[
						   	{
						   		key: 'Background', 
						   		label: __('Accordion Background', 'wpmozo-blocks-and-addons'), 
						   		withGradient: true
						   	}
					   	]}
					/>
					<ToggleControl
						label={ __( 'Use Background Image', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.activeUseBackgroundImage }
						onChange={ ( newValue ) => setAttributes( { activeUseBackgroundImage: newValue } ) }
					/>
					{ attributes.activeUseBackgroundImage && <>
						<WpmozoMediaUploader props={props}
							label={ __( 'Background Image', 'wpmozo-blocks-and-addons' ) }
							attrKye="activeBackgroundImage"
						/>
						{ attributes.activeBackgroundImage && <>
							<SelectControl
								label={ __( 'Background Image Size', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.activeItemBGImageSize }
								options={ [
									{ value: 'cover', label: __( 'Cover', 'wpmozo-blocks-and-addons' ) },
									{ value: 'contain', label: __( 'Fit', 'wpmozo-blocks-and-addons' ) },
									{ value: 'initial', label: __( 'Actual Size', 'wpmozo-blocks-and-addons' ) },
									{ value: 'stretch', label: __( 'Stretch to Fill', 'wpmozo-blocks-and-addons' ) },
								] }
								onChange={ ( newValue ) => setAttributes( { activeItemBGImageSize: newValue } ) }
								__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
							/>
							<SelectControl
								label={ __( 'Background Image Position', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.activeItemBGImagePosition }
								options={ [
									{ value: 'top_left', label: __( 'Top Left', 'wpmozo-blocks-and-addons' ) },
									{ value: 'top_center', label: __( 'Top Center', 'wpmozo-blocks-and-addons' ) },
									{ value: 'top_right', label: __( 'Top Right', 'wpmozo-blocks-and-addons' ) },
									{ value: 'center_left', label: __( 'Center Left', 'wpmozo-blocks-and-addons' ) },
									{ value: 'center', label: __( 'Center', 'wpmozo-blocks-and-addons' ) },
									{ value: 'center_right', label: __( 'Center Right', 'wpmozo-blocks-and-addons' ) },
									{ value: 'bottom_left', label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ) },
									{ value: 'bottom_center', label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ) },
									{ value: 'bottom_right', label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ) },
								] }
								onChange={ ( newValue ) => setAttributes( { activeItemBGImagePosition: newValue } ) }
								__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
							/>
							<SelectControl
								label={ __( 'Background Image Repeat', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.activeItemBGImageRepeat }
								options={ [
									{ value: 'repeat', label: __( 'Repeat', 'wpmozo-blocks-and-addons' ) },
									{ value: 'repeat-x', label: __( 'Repeat X (horizontal)', 'wpmozo-blocks-and-addons' ) },
									{ value: 'repeat-y', label: __( 'Repeat Y (vertical)', 'wpmozo-blocks-and-addons' ) },
									{ value: 'space', label: __( 'Repeat with space between', 'wpmozo-blocks-and-addons' ) },
									{ value: 'round', label: __( 'Repeat and Stretch', 'wpmozo-blocks-and-addons' ) },
									{ value: 'no-repeat', label: __( 'No Repeat', 'wpmozo-blocks-and-addons' ) },
								] }
								onChange={ ( newValue ) => setAttributes( { activeItemBGImageRepeat: newValue } ) }
								__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
							/>
							<SelectControl
								label={ __( 'Background Image Blend', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.activeItemBGImageBlend }
								options={ [
									{ value: 'normal', label: __( 'Normal', 'wpmozo-blocks-and-addons' ) },
									{ value: 'multiply', label: __( 'Multiply', 'wpmozo-blocks-and-addons' ) },
									{ value: 'screen', label: __( 'Screen', 'wpmozo-blocks-and-addons' ) },
									{ value: 'overlay', label: __( 'Overlay', 'wpmozo-blocks-and-addons' ) },
									{ value: 'darken', label: __( 'Darken', 'wpmozo-blocks-and-addons' ) },
									{ value: 'lighten', label: __( 'Lighten', 'wpmozo-blocks-and-addons' ) },
								] }
								onChange={ ( newValue ) => setAttributes( { activeItemBGImageBlend: newValue } ) }
								__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
							/>
						</> }
					</> }
				</>}
			</BaseControl>
			<WpmozoDimensions props={props}
				DimensionKey='contentWrapper'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Content Animation', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel"  initialOpen={false}>
			<SelectControl
				label={ __( 'Content Animation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.contentAnimation }
				options={ [
					{ value: 'top', label: __( 'Top To Bottom', 'wpmozo-blocks-and-addons' ) },
					{ value: 'left', label: __( 'Left To Right', 'wpmozo-blocks-and-addons' ) },
					{ value: 'right', label: __( 'Right To Left', 'wpmozo-blocks-and-addons' ) },
					{ value: 'bottom', label: __( 'Bottom To Top', 'wpmozo-blocks-and-addons' ) },
					{ value: 'off', label: __( 'No Animation', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { contentAnimation: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel"  initialOpen={false}>
			<WpmozoAlignment
				label={__( 'Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { textAlignment: newValue } ) }
				value={ attributes.textAlignment }
			/>
			<SelectControl
				label={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.textColor }
				options={[
					{
						value: 'global',
						label: __( 'Global', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'light',
						label: __( 'Light', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'dark',
						label: __( 'Dark', 'wpmozo-blocks-and-addons' ),
					},
				]}
				onChange={ ( newValue ) => setAttributes( { textColor: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="title"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<BaseControl label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button
							key={`heading-level-${index}`}
							isPressed={item.value === attributes.titleLavel}
							onClick={() => setAttributes({titleLavel: item.value})}
						>{item.label}</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={__('Title Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({titleAlign: newValue})}
				value={attributes.titleAlign}
			/>
			<WpmozoTypography
				TypographyKey="title"
				props={props}
			/>
			<WpmozoDimensions props={props}
				DimensionKey='title'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="description"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoAlignment
				label={__('Description Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({descriptionAlign: newValue})}
				value={attributes.descriptionAlign}
			/>
			<WpmozoTypography
				TypographyKey="description"
				props={props}
			/>
			<WpmozoDimensions props={props}
				DimensionKey='description'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="icon"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					...(attributes.styleIcon 
      					? [{ key: 'ShapBackground', label: __( 'Shape Background', 'wpmozo-blocks-and-addons' ) }] 
      					: [])
				] }
			/>
			<WpmozoTypography
				TypographyKey="icon"
				props={props}
				TypoTypes={{
					'FontSize': true
				}}
			/>
			<ToggleControl
				label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.styleIcon }
				onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
				__nextHasNoMarginBottom
			/>
			{ attributes.styleIcon && ( <>
				<SelectControl
					label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.iconShape }
					options={ iconShapes }
					onChange={ (newValue) => setAttributes( { iconShape: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			</> ) }
			<WpmozoDimensions props={props}
				DimensionKey='icon'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="button"
				ColorTypes={[
					{ key: 'TextColor', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'BackgroundColor', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoAlignment
				label={__( 'Button Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { buttonAlignment: newValue } ) }
				value={ attributes.buttonAlignment }
			/>
			<WpmozoTypography props={props}
				TypographyKey="button"
			/>
			<ToggleControl
				label={ __( 'Use Button Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.useButtonIcon }
				onChange={ ( newValue ) => setAttributes( { useButtonIcon: newValue } ) }
			/>
			{ attributes.useButtonIcon && ( <>
				<WpmozoColorPicker props={props}
					ColorKey="button"
					ColorTypes={[
						{ key: 'IconColor', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
				<WpmozoIconpicker
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='buttonIcon'
					props={ props }
					value={ attributes.buttonIcon }
					onChange={ ( newValue ) => setAttributes( { buttonIcon: newValue } ) }
				/>
				<ToggleGroupControl
					label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonIconPlacement }
					onChange={ ( newValue ) => setAttributes( { buttonIconPlacement: newValue } ) }
				>
					<ToggleGroupControlOption value="before" label="Before" />
					<ToggleGroupControlOption value="after" label="After" />
				</ToggleGroupControl>
				<ToggleControl
					label={ __( 'Show Button Icon On Hover', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.buttonIconHover }
					onChange={ ( newValue ) => setAttributes( { buttonIconHover: newValue } ) }
				/>
			</> ) }
			<WpmozoBorder props={props}
				BorderKey="button"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='button'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
	</> );
};
