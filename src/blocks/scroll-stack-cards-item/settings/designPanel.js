import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	 __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';
import { useState } from "@wordpress/element";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoBorder,
	WpmozoDimensions,
	WpmozoIconpicker
} from '../../../common/components/index';
import { headingLevelsList } from '../../../common/utils.js';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Card', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
			   	ColorKey="card"
			   	ColorTypes={[
				   	{
				   		key: 'Background',
				   		label: __('Card Background', 'wpmozo-blocks-and-addons'),
				   		withGradient: true
				   	}
			   	]}
			/>
			<WpmozoDimensions props={props}
				DimensionKey='card'
				DimensionsTypes={ { padding: true } }
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
			<WpmozoAlignment
				label={__('Icon Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({iconAlign: newValue})}
				value={attributes.iconAlign}
			/>
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
