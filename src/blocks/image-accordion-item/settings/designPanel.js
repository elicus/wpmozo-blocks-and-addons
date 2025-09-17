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
					{ ! attributes.normalUseBackgroundImage && <>
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
					</> }
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
					</> }
				</>}
				{'active' === accordionType && <>
					{ ! attributes.activeUseBackgroundImage && <>
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
					</> }
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
					</> }
				</>}
			</BaseControl>
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
		</PanelBody>
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="description"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<BaseControl label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button
							key={`heading-level-${index}`}
							isPressed={item.value === attributes.descriptionLavel}
							onClick={() => setAttributes({descriptionLavel: item.value})}
						>{item.label}</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={__('Description Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({descriptionAlign: newValue})}
				value={attributes.descriptionAlign}
			/>
			<WpmozoTypography
				TypographyKey="description"
				props={props}
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
			/>
		</PanelBody>
	</> );
};
