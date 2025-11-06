import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	SelectControl,
	RangeControl,
	ToggleControl,
	TextControl
} from "@wordpress/components";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoIconpicker,
	WpmozoDimensions
} from '../../../common/components/index';

import { useState } from "@wordpress/element";
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ titleStyleType, setTitleStyleType ] = useState( 'normal' );

	return ( <>
		{ 'layout1' === attributes.breadcrumbLayout && <>
			<PanelBody title={ __( 'Breadcrumbs', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
				<WpmozoColorPicker props={props}
					ColorKey="breadcrumbs"
					ColorTypes={ [
						{ key: 'NavBackground', label: __( 'Breadcrumbs Background Color', 'wpmozo-blocks-and-addons' ) },
						...(attributes.enableDifferentBg
	      					? [{ key: 'NavLastItemBackground', label: __( 'Last item Background Color', 'wpmozo-blocks-and-addons' ) }]
	      					: [])
					] }
				/>
				<ToggleControl
					label={ __( 'Different Background for last item', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.enableDifferentBg || false }
					onChange={ ( newValue ) => setAttributes( { enableDifferentBg: newValue } ) }
					__nextHasNoMarginBottom={ true }
				/>
				<ToggleControl
					label={ __( 'Enable Opacity', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.enableFade || false }
					onChange={ ( newValue ) => setAttributes( { enableFade: newValue } ) }
					__nextHasNoMarginBottom={ true }
				/>
				{ attributes.enableFade &&
					<RangeControl
						label={ __( 'Decrease Opacity By', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.fadeRange }
						onChange={ ( newValue ) => setAttributes( { fadeRange: newValue } ) }
						min={0.01} step={0.01} max={0.90}
					/>
				}
				<WpmozoDimensions
					DimensionKey='breadcrumbItem'
					DimensionsTypes={{
						padding: true
					}}
					props={props}
				/>
			</PanelBody>
		</> }
		{ 'layout2' === attributes.breadcrumbLayout && <>
			<PanelBody title={ __( 'Separator Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker props={props}
					ColorKey="separator"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Separator Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<SelectControl
					label={ __( 'Separator Type', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.separatorType }
					options={[
						{
							value: 'text_separator',
							label: __( 'Text Separator', 'wpmozo-blocks-and-addons' ),
						},
						{
							value: 'icon_separator',
							label: __( 'Icon Separator', 'wpmozo-blocks-and-addons' ),
						},
					]}
					onChange={ ( newValue ) => setAttributes( { separatorType: newValue } ) }
				/>
				{ 'text_separator' === attributes.separatorType &&
					<TextControl
						label={__('Separator Text', 'wpmozo-blocks-and-addons')}
						value={attributes.separatorText ?? ""}
						onChange={(newValue) => setAttributes({separatorText: newValue})}
						placeholder={__('|', 'wpmozo-blocks-and-addons')}
						__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
					/>
				}
				{ 'icon_separator' === attributes.separatorType &&
					<WpmozoIconpicker
						props={props}
						label={__('Separator Icon', 'wpmozo-blocks-and-addons')}
						iconPickerKey='separatorIcon'
						value={attributes.separatorIcon}
						onChange={(newValue) => setAttributes({separatorIcon: newValue})}
					/>
				}
				<WpmozoTypography props={props}
					TypographyKey="separatorSize"
					TypoTypes={{
						'FontSize': true
					}}
				/>
			</PanelBody>
		</> }
		<PanelBody title={ __( 'Home Link', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleControl
				label={ __( 'Custom Home Link Text', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.useHomeLinkText || false }
				onChange={ ( newValue ) => setAttributes( { useHomeLinkText: newValue } ) }
				__nextHasNoMarginBottom={ true }
			/>
			{ attributes.useHomeLinkText &&
				<TextControl
					label={__('Home Link Text', 'wpmozo-blocks-and-addons')}
					value={attributes.homeLinkText ?? ""}
					onChange={(newValue) => setAttributes({homeLinkText: newValue})}
					placeholder={__('Home', 'wpmozo-blocks-and-addons')}
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			}
			<ToggleControl
				label={ __( 'Use Home Link Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.useHomeLinkIcon || false }
				onChange={ ( newValue ) => setAttributes( { useHomeLinkIcon: newValue } ) }
				__nextHasNoMarginBottom={ true }
			/>
			{ attributes.useHomeLinkIcon &&
				<>
					<ToggleControl
						label={ __( 'Hide Home Text(Display Icon Only)', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.hideHomeText || false }
						onChange={ ( newValue ) => setAttributes( { hideHomeText: newValue } ) }
						__nextHasNoMarginBottom={ true }
					/>
					<WpmozoIconpicker
						props={props}
						label={__('Separator Icon', 'wpmozo-blocks-and-addons')}
						iconPickerKey='homeLinkIcon'
						value={attributes.homeLinkIcon}
						onChange={(newValue) => setAttributes({homeLinkIcon: newValue})}
					/>
					<WpmozoTypography props={props}
						TypographyKey="homeLinkIconSize"
						TypoTypes={{
							'FontSize': true
						}}
					/>
				</>
			}
		</PanelBody>
		<PanelBody title={ __( 'Text Settings', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={ props }
				label={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="text"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoAlignment
				label={__('Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({textAlign: newValue})}
				value={attributes.textAlign}
			/>
			<WpmozoTypography props={ props }
				TypographyKey="text"
			/>
		</PanelBody>
	</> );
};
