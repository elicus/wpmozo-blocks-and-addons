import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    UnitControl
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoRangeSize,
	WpmozoBorder,
	WpmozoDimensions,
	WpmozoIconpicker,
	WpmozoMediaUploader
} from '../../../common/components/index';
import { headingLevelsList } from '../../../common/utils.js';


export const DesignPanel = ( { attributes, setAttributes } ) => {
	
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
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
		<PanelBody title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
				] }
			/>
			<WpmozoTypography
				TypographyKey="icon"
				props={props}
				TypoTypes={{
					'FontSize': true
				}}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoDimensions props={props}
				DimensionKey='image'
				DimensionsTypes={ { padding: true } }
			/>
			<WpmozoBorder props={props}
				BorderKey="image"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Content Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			{ ! attributes.contentWrapUseBackgroundImage && <>
				<WpmozoColorPicker props={props}
				   	ColorKey="contentWrap"
				   	ColorTypes={[
					   	{
					   		key: 'Background', 
					   		label: __('Content Wrap Background', 'wpmozo-blocks-and-addons'), 
					   		withGradient: true
					   	}
				   	]}
				/>
			</> }
			<ToggleControl
				label={ __( 'Use Background Image', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.contentWrapUseBackgroundImage }
				onChange={ ( newValue ) => setAttributes( { contentWrapUseBackgroundImage: newValue } ) }
			/>
			{ attributes.contentWrapUseBackgroundImage && <>
				<WpmozoMediaUploader props={props}
					label={ __( 'Content Wrap Background Image', 'wpmozo-blocks-and-addons' ) }
					attrKye="contentWrapBackgroundImage"
				/>
			</> }
			<WpmozoDimensions props={props}
				DimensionKey='contentWrap'
				DimensionsTypes={ { padding: true } }
			/>
			<WpmozoBorder props={props}
				BorderKey="contentWrap"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Card Item', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<UnitControl
				label={ __( 'Card Item Width', 'wpmozo-blocks-and-addons' ) }
				value={attributes.cardItemWidth}
				onChange={ ( newValue ) => setAttributes( { cardItemWidth: newValue } ) }
			/>
			<WpmozoBorder props={props}
				BorderKey="cardItem"
			/>
		</PanelBody>
	</> );
};
