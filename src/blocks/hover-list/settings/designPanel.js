import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	Button,
	PanelBody,
	ButtonGroup,
	BaseControl,
	RangeControl,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoTypography,
	WpmozoColorPicker,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ titleType, setTitleType ]       = useState( 'normal' );
	const [ subTitleType, setSubTitleType ] = useState( 'normal' );
	const [ descType, setDescType ]         = useState( 'normal' );

	return ( <>
		{/* Title Text. */}
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<RangeControl
				label={ __( 'Title Width(%)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.titleWidth }
				onChange={ ( newValue ) => setAttributes( { titleWidth: newValue } ) }
				min={ 1 } max={ 100 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<WpmozoAlignment
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				value={ attributes.titleAlign }
			/>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === titleType ) ? true : false }
						onClick={ () => setTitleType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === titleType ) ? true : false }
						onClick={ () => setTitleType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === titleType && <>
					<WpmozoColorPicker props={ props }
						ColorKey="title"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="title"
					/>
				</> }
				{ 'hover' === titleType && <>
					<WpmozoColorPicker props={ props }
						ColorKey="titleHover"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="titleHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Subtitle Text. */}
		<PanelBody title={ __( 'Sub Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === subTitleType ) ? true : false }
						onClick={ () => setSubTitleType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === subTitleType ) ? true : false }
						onClick={ () => setSubTitleType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === subTitleType && <>
					<WpmozoColorPicker
						ColorKey="subtitle"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Sub Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="subtitle"
					/>
				</> }
				{ 'hover' === subTitleType && <>
					<WpmozoColorPicker
						ColorKey="subtitleHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Sub Title Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="subtitleHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Description. */}
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Description Width(%)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.descriptionWidth }
				onChange={ ( newValue ) => setAttributes( { descriptionWidth: newValue } ) }
				min={ 1 } max={ 100 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Description Padding', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='description'
				DimensionsTypes={ { padding: true } }
			/>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
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
					<WpmozoColorPicker
						ColorKey="description"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="description"
					/>
				</> }
				{ 'hover' === descType && <>
					<WpmozoColorPicker
						ColorKey="descriptionHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Description Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="descriptionHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Hover Image. */}
		<PanelBody title={ __( 'Hover Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Image Width(px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.hoverImageSize }
				onChange={ ( newValue ) => setAttributes( { hoverImageSize: newValue } ) }
				min={ 10 } max={ 1000 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<WpmozoBorder props={props}
				label={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="hoverImage"
			/>
		</PanelBody>
		{/* Icon. */}
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Icon Font Size(px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.iconFontsize }
				onChange={ ( newValue ) => setAttributes( { iconFontsize: newValue } ) }
				min={ 1 } max={ 250 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<WpmozoColorPicker props={ props }
				ColorKey="icon"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'HoverColor', label: __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
		</PanelBody>
    </> );
};
