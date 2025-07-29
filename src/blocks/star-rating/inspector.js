// inspector.js
import { __ } from '@wordpress/i18n';
import {
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
	WpmozoMediaUploader,
} from '../../common/components';
import {
	InspectorControls
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	BaseControl,
	TextControl,
	ButtonGroup,
	RangeControl,
	ToggleControl,
	SelectControl,
	TextareaControl,
} from '@wordpress/components';
import { useState } from "@wordpress/element";

import { headingLevelsList } from '../../common/utils.js';

const Inspector = ( { attributes, setAttributes } ) => {

	const props = { attributes, setAttributes };

	const [ titleType, setTitleType ]     = useState( 'normal' );
	const [ descType, setDescType ]       = useState( 'normal' );
	const [ rateNumType, setRateNumType ] = useState( 'normal' );

	return (
		<>
			{/* Controls. */}
			<InspectorControls key="controls" initialOpen={true}>
				{/* Configuration. */}
				<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
					<TextControl
						label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.title }
						onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
					/>
					<TextControl
						label={ __( 'Rating', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.rating }
						onChange={ ( newValue ) => setAttributes( { rating: newValue } ) }
					/>
					<TextControl
						label={ __( 'Rating Out Of', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.ratingOutOf }
						onChange={ ( newValue ) => setAttributes( { ratingOutOf: newValue } ) }
					/>
					<WpmozoMediaUploader attrKye="image" props={ props }
						label={ __( 'Image', 'wpmozo-blocks-and-addons' ) }
					/>
					<TextControl
						label={ __( 'Image Alt Text', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.imageAlt }
						onChange={ ( newValue ) => setAttributes( { imageAlt: newValue } ) }
					/>
					<TextareaControl
						label={ __( 'Description', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.description }
						onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
					/>
				</PanelBody>
				{/* Display */}
				<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
					<ToggleControl
						label={ __( 'Hide Title', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.hideTitle }
						onChange={ ( newValue ) => setAttributes( { hideTitle: newValue } ) }
					/>
					<SelectControl
						label={ __( 'Rating Icon', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.rateIcon }
						options={ [
							{ value: 'default', label: __( 'Default/Stars', 'wpmozo-blocks-and-addons' ) },
							{ value: 'like', label: __( 'Like', 'wpmozo-blocks-and-addons' ) },
							{ value: 'heart', label: __( 'Heart', 'wpmozo-blocks-and-addons' ) },
							{ value: 'smiley', label: __( 'Smiley', 'wpmozo-blocks-and-addons' ) },
							{ value: 'smiley_scale', label: __( 'Smiley Mood Scale', 'wpmozo-blocks-and-addons' ) },
							{ value: 'trophy', label: __( 'Trophy', 'wpmozo-blocks-and-addons' ) },
							{ value: 'sun', label: __( 'Sun', 'wpmozo-blocks-and-addons' ) },
							{ value: 'drop', label: __( 'Drop', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { rateIcon: newValue } ) }
					/>
					<SelectControl
						label={ __( 'Rating Position', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.ratePosition }
						options={ [
							{ value: 'after_title', label: __( 'After Title', 'wpmozo-blocks-and-addons' ) },
							{ value: 'below_title', label: __( 'Below Title', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { ratePosition: newValue } ) }
					/>
					<ToggleControl
						label={ __( 'Show Rating Number', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showRateNum }
						onChange={ ( newValue ) => setAttributes( { showRateNum: newValue } ) }
					/>
				</PanelBody>
			</InspectorControls>

			{/* Style. */}
			<InspectorControls key="styles" group="styles">
				{/* Alignment. */}
				<PanelBody title={ __( 'Alignment', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
					<WpmozoAlignment
                        label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.globalTextAlign }
						showJustify={ true }
                        onChange={ ( newValue ) => setAttributes( { globalTextAlign: newValue } ) }
                    />
				</PanelBody>
				{/* Title. */}
				<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
					<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) } >
						<ButtonGroup>
							{ headingLevelsList.map( ( item, index ) => (
								<Button key={ item.value }
									isPressed={ item.value === attributes.titleLevel }
									onClick={ () => setAttributes( { titleLevel: item.value } ) }
								>{ item.label }</Button>
							) ) }
						</ButtonGroup>
					</BaseControl>
					<BaseControl className="wpmozo-button-tabs-wrap">    
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
					<BaseControl className="wpmozo-button-tabs-wrap">    
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
					<BaseControl className="wpmozo-button-tabs-wrap">    
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
								ColorKey="ratingnHover"
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
			</InspectorControls>
		</>
	);
};

export default Inspector;
