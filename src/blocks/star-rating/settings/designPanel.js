import { __ } from '@wordpress/i18n';
import {
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker, WpmozoDimensions, WpmozoBorder,
} from '../../../common/components/index.js';
import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl,
} from '@wordpress/components';
import { useState } from "@wordpress/element";

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ titleType, setTitleType ]     = useState( 'normal' );
	const [ descType, setDescType ]       = useState( 'normal' );
	const [ rateNumType, setRateNumType ] = useState( 'normal' );

	return ( <>
		{/* Container. */}
		<PanelBody title={ __( 'Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.globalTextAlign }
				showJustify={ true }
				onChange={ ( newValue ) => setAttributes( { globalTextAlign: newValue } ) }
			/>
			<WpmozoDimensions
				DimensionKey='container'
				DimensionsTypes={ {
					padding: true,
					margin: true,
				} }
				props={props}
			/>
			<WpmozoBorder
				props={props}
				BorderKey="container"
			/>
			<WpmozoColorPicker
				ColorKey="containerBorder"
				props={props}
				ColorTypes={ [ {
					key: 'Color',
					label: __( 'Border Color', 'wpmozo-blocks-and-addons' ),
				} ] }
			/>
		</PanelBody>
		{/* Title. */}
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl
				label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) }
				__nextHasNoMarginBottom={ true }
			>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button key={ item.value }
							isPressed={ item.value === attributes.titleLevel }
							onClick={ () => setAttributes( { titleLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<BaseControl
				className="wpmozo-button-tabs-wrap"
				__nextHasNoMarginBottom={ true }
			>
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
					<WpmozoColorPicker
						ColorKey="title"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="title"
						props={props}
					/>
				</> }
				{ 'hover' === titleType && <>
					<WpmozoColorPicker
						ColorKey="titleHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="titleHover"
						props={ props }
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Description. */}
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === descType ) ? true : false }
						onClick={ () => setDescType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
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
					<WpmozoTypography
						TypographyKey="description"
						props={ props }
					/>
				</> }
				{ 'hover' === descType && <>
					<WpmozoColorPicker
						ColorKey="descriptionHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="descriptionHover"
						props={ props }
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Rating Number. */}
		<PanelBody title={ __( 'Rating Number', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === rateNumType ) ? true : false }
						onClick={ () => setRateNumType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === rateNumType ) ? true : false }
						onClick={ () => setRateNumType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === rateNumType && <>
					<WpmozoColorPicker
						ColorKey="rating"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Number Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="rating"
						props={ props }
					/>
				</> }
				{ 'hover' === rateNumType && <>
					<WpmozoColorPicker
						ColorKey="ratingHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Number Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography
						TypographyKey="ratingHover"
						props={ props }
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Rate Icons/Stars. */}
		<PanelBody title={ __( 'Rate Icons/Stars', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.starFontSize }
				onChange={ ( newValue ) => setAttributes( { starFontSize: newValue } ) }
				min={ 10 } max={ 100 } step={ 1 }
			/>
			<RangeControl
				label={ __( 'Space Between Icon', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.starSpacing }
				onChange={ ( newValue ) => setAttributes( { starSpacing: newValue } ) }
				min={ 0 } max={ 100 } step={ 1 }
			/>
			<WpmozoColorPicker ColorKey="rateIcon"
				label={ __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
				props={ props }
				ColorTypes={ [
					{ key: 'FilledColor', label: __( 'Filled Icon Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'EmptyColor', label: __( 'Empty Icon Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
		</PanelBody>
	</> );
};
