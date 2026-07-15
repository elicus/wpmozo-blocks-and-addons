import { __ } from '@wordpress/i18n';
import { HeightControl } from "@wordpress/block-editor";
import {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	SelectControl,
	RangeControl
} from "@wordpress/components";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoRangeSize,
	WpmozoBorder
} from '../../../common/components';

import { headingLevelsList } from '../../../common/utils.js';
import { useState } from 'react';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [openPanel, setOpenPanel] = useState('panel1');
								
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	let borderSelection = [
		{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
		{ value: 'solid', label: __( 'Solid', 'wpmozo-blocks-and-addons' ) },
		{ value: 'double', label: __( 'Double', 'wpmozo-blocks-and-addons' ) },
		{ value: 'dotted', label: __( 'Dotted', 'wpmozo-blocks-and-addons' ) },
		{ value: 'dashed', label: __( 'Dashed', 'wpmozo-blocks-and-addons' ) },
		{ value: 'groove', label: __( 'Groove', 'wpmozo-blocks-and-addons' ) }
	];

	return ( <>
		<PanelBody title={ __( 'Global Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<WpmozoColorPicker
				ColorKey="background"
				props={props}
				ColorTypes={ [ {
					key: 'Color',
					label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
				} ] }
			/>
			<WpmozoDimensions
				DimensionKey='mainDimensions'
				DimensionsTypes={ {
					padding: true,
					margin: true,
				} }
				props={props}
			/>
			<WpmozoBorder
				props={props}
				BorderKey="wrapper"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<WpmozoColorPicker
				ColorKey="title"
				props={props}
				ColorTypes={ [ {
					key: 'Color',
					label: __( 'Title Color', 'wpmozo-blocks-and-addons' ),
				} ] }
			/>
			<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, key ) => (
						<Button
							key={`heading-level-${item.value}`}
							isPressed={ ( item.value === attributes.titleLeval ) ? true : false }
							onClick={ ( newValue ) => setAttributes( { titleLeval: item.value } ) }
						>
							{ item.label }
						</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons') }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				value={ attributes.titleAlign }
			/>
			<WpmozoTypography
				TypographyKey="title"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Subtitle', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<WpmozoColorPicker
				ColorKey="subTitle"
				props={props}
				ColorTypes={ [ {
					key: 'Color',
					label: __( 'Subtitle Color', 'wpmozo-blocks-and-addons' ),
				} ] }
			/>
			<WpmozoAlignment
				label={ __( 'Subtitle Alignment', 'wpmozo-blocks-and-addons') }
				onChange={ ( newValue ) => setAttributes( { subTitleAlign: newValue } ) }
				value={ attributes.subTitleAlign }
			/>
			<WpmozoTypography
				TypographyKey="subTitle"
				props={props}
			/>
		</PanelBody>

		{ 'none' !== attributes.headerGraphics &&
			<PanelBody title={ __( `Header ${'icon' === attributes.headerGraphics ? 'Icon' : 'Image'}`, 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
				{ 'icon' === attributes.headerGraphics &&
					<WpmozoColorPicker
						ColorKey="icon"
						props={props}
						ColorTypes={ [ {
							key: 'Color',
							label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
						} ] }
					/>
				}
				<WpmozoAlignment
					label={ __( `${'icon' === attributes.headerGraphics ? 'Icon' : 'Image'} Alignment`, 'wpmozo-blocks-and-addons') }
					onChange={ ( newValue ) => setAttributes( { iconAlign: newValue } ) }
					value={ attributes.iconAlign }
				/>
				{ 'icon' === attributes.headerGraphics &&
					<ToggleControl
						label={ __( 'Use Icon Font Size', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.useIconFontSize }
						onChange={ ( newValue ) => setAttributes( { useIconFontSize: newValue } ) }
					/>
				}
				{ 'icon' === attributes.headerGraphics && attributes.useIconFontSize &&
					<HeightControl
						label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.iconFontSize }
						onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
					/>
				}
				{ 'image' === attributes.headerGraphics &&
					<>
						<WpmozoRangeSize
							label={ __( 'Image Width', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='imageWidth'
							props={props}
						/>
						<WpmozoRangeSize
							label={ __( 'Image Height', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='imageHeight'
							props={props}
						/>
					</>
				}
				<WpmozoDimensions
					DimensionKey='headerGraphicsDimensions'
					DimensionsTypes={ {
						padding: true,
						margin: true,
					} }
					props={props}
				/>
			</PanelBody>
		}
		<PanelBody title={ __( 'Pricing', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
			<WpmozoColorPicker
				ColorKey="currency"
				props={props}
				label="Currency Color"
				ColorTypes={ [ {
					key: 'Color',
					label: __( 'Currency Text Color', 'wpmozo-blocks-and-addons' ),
				} ] }
			/>
			<WpmozoAlignment
				label={ __( 'Alignment', 'wpmozo-blocks-and-addons') }
				onChange={ ( newValue ) => setAttributes( { pricealign: newValue } ) }
				value={ attributes.pricealign }
			/>
			<WpmozoTypography
				TypographyKey="currency"
				props={props}
				label="Currency Typography"
			/>
			<WpmozoColorPicker
				ColorKey="period"
				props={props}
				label="Period Color"
				ColorTypes={ [ {
					key: 'Color',
					label: __( 'Period Text Color', 'wpmozo-blocks-and-addons' ),
				} ] }
			/>
			<WpmozoTypography
				TypographyKey="price"
				props={props}
				label="Price Typography"
			/>

			<WpmozoTypography
				TypographyKey="period"
				props={props}
				label="Period Typography"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Features', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel6'} onToggle={()=> handleToggle('panel6')}>
			<WpmozoColorPicker
				ColorKey="features"
				props={props}
				ColorTypes={ [
					{ key: 'Color', label: __( 'Features Text Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __( 'Features Background Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoAlignment
				label={ __( 'Alignment', 'wpmozo-blocks-and-addons') }
				onChange={ ( newValue ) => setAttributes( { feturesAlign: newValue } ) }
				value={ attributes.feturesAlign }
			/>
			<RangeControl
				label={__('Features Spacing (px)', 'wpmozo-blocks-and-addons')}
				value={attributes.featuresSpacing}
				onChange={(newValue) => setAttributes({featuresSpacing: newValue})}
				min={0} step={1} max={100}
			/>
			<RangeControl
				label={__('Features Margin (px)', 'wpmozo-blocks-and-addons')}
				value={attributes.featuresMargin}
				onChange={(newValue) => setAttributes({featuresMargin: newValue})}
				min={0} step={1} max={100}
			/>
			<RangeControl
				label={__('Icon Font Size (px)', 'wpmozo-blocks-and-addons')}
				value={attributes.featuresIconFontSize}
				onChange={(newValue) => setAttributes({featuresIconFontSize: newValue})}
				min={0} step={1} max={100}
			/>
			<WpmozoColorPicker
				ColorKey="featuresIcons"
				props={props}
				label="Icons Color"
				ColorTypes={ [ {
					key: 'Color',
					label: __( 'Icons Color', 'wpmozo-blocks-and-addons' ),
				} ] }
			/>
			<WpmozoRangeSize
				label={ __( 'Icon Spacing', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='featuresIconsSpacing'
				props={props}
			/>
			<WpmozoTypography
				TypographyKey="features"
				props={props}
			/>
			<WpmozoDimensions
				DimensionKey='featuresDimensions'
				DimensionsTypes={ {
					padding: true,
					margin: true,
				} }
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel7'} onToggle={()=> handleToggle('panel7')}>
			<WpmozoAlignment
				label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons') }
				onChange={ ( newValue ) => setAttributes( { buttonAlign: newValue } ) }
				value={ attributes.buttonAlign }
			/>
			<RangeControl
				label={__('Button Font Size (px)', 'wpmozo-blocks-and-addons')}
				value={attributes.buttonFontSize}
				onChange={(newValue) => setAttributes({buttonFontSize: newValue})}
				min={0} step={1} max={100}
			/>
			<BaseControl>
				<ButtonGroup style={ { display:'flex' } }>
					<Button style={ { flex: 1, justifyContent: 'center' } }
						className="wpmozo-button-tabs-btn"
						isPressed={ ('normal' === attributes.buttonStyle) ? true : false }
						onClick={ () => setAttributes({buttonStyle: 'normal'} ) }
						label={ __( 'Normal', 'wpmozo-blocks-and-addons' ) }
					>
						{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }
					</Button>
					<Button style={{ flex: 1, justifyContent: 'center' }}
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === attributes.buttonStyle) ? true : false }
						onClick={ () => setAttributes({buttonStyle: 'hover' } ) }
						label={ __( 'Hover', 'wpmozo-blocks-and-addons' ) }
					>
						{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }
					</Button>
				</ButtonGroup>
				{ 'normal' === attributes.buttonStyle && (
					<>
						<WpmozoColorPicker
							ColorKey="buttonText"
							label="Button Color"
							props={props}
							ColorTypes={ [
								{
									key: 'Color',
									label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
								},
								{
									key: 'Background',
									label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
								}
							] }
						/>
						{ 'icon' === attributes.buttonIconType && (
							<WpmozoColorPicker
								ColorKey="iconText"
								label="Icon Color"
								props={props}
								ColorTypes={ [
									{
										key: 'Color',
										label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
									},
									{
										key: 'Background',
										label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
									}
								] }
							/>
						) }
						<SelectControl
							label={__('Border Type', 'wpmozo-blocks-and-addons')}
							value={attributes.borderSelection}
							options={borderSelection}
							onChange={(newValue) => setAttributes({borderSelection: newValue})}
							__next40pxDefaultSize={true}
							__nextHasNoMarginBottom={true}
						/>
						<WpmozoRangeSize
							label={ __( 'Border Width', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='borderWidth'
							props={props}
						/>
						<WpmozoRangeSize
							label={ __( 'Border Radius', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='borderRadius'
							props={props}
						/>
						<WpmozoColorPicker
							ColorKey="border"
							label="Border Color"
							props={props}
							ColorTypes={ [ {
								key: 'Color',
								label: __( 'Border Color', 'wpmozo-blocks-and-addons' ),
							} ] }
						/>
					</>
				)}
				{ 'hover' === attributes.buttonStyle && (
					<>
						<WpmozoColorPicker
							ColorKey="buttonTextHover"
							label="Button Color"
							props={props}
							ColorTypes={ [
								{
									key: 'Color',
									label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
								},
								{
									key: 'Background',
									label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
								}
							] }
						/>
						{ 'icon' === attributes.buttonIconType && (
							<WpmozoColorPicker
								ColorKey="iconTextHover"
								label="Icon Color"
								props={props}
								ColorTypes={ [
									{
										key: 'Color',
										label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
									},
									{
										key: 'Background',
										label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
									}
								] }
							/>
						) }
						<SelectControl
							label={__('Border Type', 'wpmozo-blocks-and-addons')}
							value={attributes.borderSelectionHover}
							options={borderSelection}
							onChange={(newValue) => setAttributes({borderSelectionHover: newValue})}
							__next40pxDefaultSize={true}
						/>
						<WpmozoRangeSize
							label={ __( 'Border Width', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='borderWidthHover'
							props={props}
						/>
						<WpmozoRangeSize
							label={ __( 'Border Radius', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='borderRadiusHover'
							props={props}
						/>
						<WpmozoColorPicker
							ColorKey="borderHover"
							label="Border Color"
							props={props}
							ColorTypes={ [ {
								key: 'Color',
								label: __( 'Border Color', 'wpmozo-blocks-and-addons' ),
							} ] }
						/>
					</>
				)}
			</BaseControl>
			<WpmozoDimensions
				DimensionKey='borderDimensions'
				DimensionsTypes={{
					padding: true,
					margin: true,
				}}
				props={props}
			/>
		</PanelBody>
	</> );
};
