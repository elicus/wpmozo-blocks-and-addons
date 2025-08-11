import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

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
    WpmozoBorder
} from '../../../common/components';
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ titleType, setTitleType ]     = useState( 'normal' );
	const [ descType, setDescType ]       = useState( 'normal' );
	const [ contentType, setContentType ] = useState( 'normal' );

	return ( <>
		{/* Image. */}
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoBorder props={props}
				BorderKey="image"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='imageDimensions'
				DimensionsTypes={ { padding: true } }
			/>
		</PanelBody>
		{/* Title. */}
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoAlignment
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons') }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				value={ attributes.titleAlign }
			/>
			<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button key={ item.value }
							isPressed={ item.value === attributes.titleLevel }
							onClick={ () => setAttributes( { titleLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<BaseControl className="wpmozo-button-tabs-wrap" >    
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === titleType ) ? true : false }
						onClick={ () => setTitleType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button 
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === titleType ) ? true : false }
						onClick={ () => setTitleType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === titleType && <>
					<WpmozoColorPicker props={props}
						ColorKey="title"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={props}
						TypographyKey="title"
					/>
				</> }
				{ 'hover' === titleType && <>
					<WpmozoColorPicker props={props}
						ColorKey="titleHover"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={props}
						TypographyKey="titleHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Description. */}
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoAlignment
				label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons') }
				onChange={ ( newValue ) => setAttributes( { contentAlign: newValue } ) }
				value={ attributes.contentAlign }
			/>
			<BaseControl className="wpmozo-button-tabs-wrap" >    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === descType ) ? true : false }
						onClick={ () => setDescType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === descType ) ? true : false }
						onClick={ () => setDescType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === descType && <>
					<WpmozoColorPicker props={props}
						ColorKey="content"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={props}
						TypographyKey="description"
					/>
				</> }
				{ 'hover' === descType && <>
					<WpmozoColorPicker props={props}
						ColorKey="contentHover"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={props}
						TypographyKey="descriptionHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Content Styling. */}
		<PanelBody title={ __( 'Content Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" >
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === contentType ) ? true : false }
						onClick={ () => setContentType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === contentType ) ? true : false }
						onClick={ () => setContentType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === contentType && <>
					<WpmozoColorPicker props={props}
						ColorKey="contentBackground"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoDimensions props={props}
						DimensionKey='content'
						DimensionsTypes={ { padding: true } }
					/>
				</> }
				{ 'hover' === contentType && <>
					<WpmozoColorPicker props={props}
						ColorKey="contentHoverBackground"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoDimensions props={props}
						DimensionKey='contentHover'
						DimensionsTypes={ { padding: true } }
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Icon. */}
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="icon"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<RangeControl
				label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.iconFontSize }
				onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
				min={ 0 } step={ 1 } max={ 120 }
			/>
			<WpmozoAlignment
				label={ __( 'Icon Alignment', 'wpmozo-blocks-and-addons') }
				value={ attributes.iconAlign }
				onChange={ ( newValue ) => setAttributes( { iconAlign: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.styleIcon }
				onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Show Icon Border', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showShapeBorder }
				onChange={ ( newValue ) => setAttributes( { showShapeBorder: newValue } ) }
			/>
			{ attributes.styleIcon && <>
				<SelectControl
					label={ __( 'Icon Shape', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.iconShape }
					options={ [
						{ value: 'square', label: __( 'Square', 'wpmozo-blocks-and-addons' ) },
						{ value: 'circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
						{ value: 'hexagon', label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { iconShape: newValue } ) }
				/>
				<WpmozoColorPicker props={props}
					ColorKey="icon"
					label=""
					ColorTypes={ [
						{ key: 'Background', label: __( 'Icon Background Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			</> }
			{ attributes.showShapeBorder &&
				<WpmozoColorPicker props={props}
					ColorKey="shapeBorder"
					label = ""
					ColorTypes={ [
						{ key: 'Color', label: __( 'Border Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			}
		</PanelBody>
		{/* Button. */}
		<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="buttonText"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Label Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __( 'Label Background', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoAlignment
				label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons') }
				onChange={ ( newValue ) => setAttributes( { buttonTextAlign: newValue } ) }
				value={ attributes.buttonTextAlign }
			/>
			<WpmozoTypography props={props}
				TypographyKey="buttonText"
			/>
			<WpmozoBorder props={props}
				BorderKey="buttonText"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='buttonDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
	</> );
};
