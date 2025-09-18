import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	ButtonGroup,
	BaseControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoIconpicker,
	WpmozoDimensions,
	WpmozoTypography,
	WpmozoColorPicker,
} from '../../../common/components';
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ titleType, setTitleType ]   = useState( 'normal' );
	const [ buttonType, setButtonType ] = useState( 'normal' );

	return ( <>
		{/* Timeline Icon. */}
		<PanelBody title={ __( 'Timeline Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoIconpicker props={props}
				label={__( 'Select Icon', 'wpmozo-blocks-and-addons' ) }
				iconPickerKey='timelineIcon'
				value={ attributes.timelineIcon }
				onChange={ ( newValue ) => setAttributes( { timelineIcon: newValue } ) }
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="timelineIcon"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'FillColor', label: __( 'Icon Fill Color(On Scroll)', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<RangeControl
				label={ __( 'Icon Font Size (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.timelineIconFontSize }
				onChange={ ( newValue ) => setAttributes( { timelineIconFontSize: newValue } ) }
				min={1} step={1} max={120}
			/>
			<SelectControl
				label={ __( 'Icon Shape', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tlIconShape }
				options={ [
					{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
					{ value: 'use_square', label: __( 'Square', 'wpmozo-blocks-and-addons' ) },
					{ value: 'use_circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ (newValue) => setAttributes( { tlIconShape: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			{ ( 'none' !== attributes.tlIconShape ) && ( <>
				<WpmozoColorPicker props={props}
					label={ __( 'Icon Shape Background', 'wpmozo-blocks-and-addons' ) }
					ColorKey="tlIconShape"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
						{ key: 'FillColor', label: __( 'Fill Background(On Scroll)', 'wpmozo-blocks-and-addons' ) },
					] }
				/><hr />
				<ToggleControl
					label={ __( 'Icon Shape Border', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.tlIconShapeUseBorder }
					onChange={ (newValue) => setAttributes( { tlIconShapeUseBorder: newValue } ) }
					__nextHasNoMarginBottom={true}
				/>
				{ ( attributes.tlIconShapeUseBorder ) && ( <>
					<RangeControl
						label={ __( 'Icon Shape Border Size (px)', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.tlIconShapeBorderSize }
						onChange={ ( newValue ) => setAttributes( { tlIconShapeBorderSize: newValue } ) }
						min={1} step={1} max={100}
					/>
					<WpmozoColorPicker props={props}
						label={ __( 'Icon Shape Border Color', 'wpmozo-blocks-and-addons' ) }
						ColorKey="tlIconShapeBorder"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Border Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'FillColor', label: __( 'Border Fill Color(On Scroll)', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				</> ) }
			</> ) }
		</PanelBody>
		{/* Timeline Stem. */}
		<PanelBody title={ __( 'Timeline Stem', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Timeline Stem Width (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.barSize }
				onChange={ ( newValue ) => setAttributes( { barSize: newValue } ) }
				min={1} step={1} max={10}
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Stem Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="bar"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Stem Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'FillColor', label: __( 'Stem Fill Color(On Scroll)', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
		</PanelBody>
		{/* Timeline Post. */}
		<PanelBody title={ __( 'Timeline Post', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<br />
			<RangeControl
				label={ __( 'Featured Image Size (%)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.thumbnailSize }
				onChange={ ( newValue ) => setAttributes( { thumbnailSize: newValue } ) }
				min={1} step={1} max={100}
			/>
			<WpmozoAlignment
				label={ __( 'Featured Image Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { thumbnailAlign: newValue } ) }
				value={ attributes.thumbnailAlign }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Post', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='post'
				DimensionsTypes={ { padding: true } }
			/>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Post Background', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.postBackground }
				gradientValue={ attributes.postBGGradient }
				onColorChange={ ( newValue ) => setAttributes( { postBackground: newValue } ) }
				onGradientChange={ ( newValue ) => setAttributes( { postBGGradient: newValue } ) }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Post Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="post"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Post Title. */}
		<PanelBody title={ __( 'Post Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<br />
			<BaseControl label={ __( 'Title Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button
							key={ `heading-level-${index}` }
							isPressed={ item.value === attributes.titleLevel }
							onClick={ () => setAttributes( { titleLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<hr />
			<BaseControl className="wpmozo-button-tabs-wrap">
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
							{ key: 'Color', label: __( 'Title Text Color', 'wpmozo-blocks-and-addons' ) },
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
							{ key: 'Color', label: __( 'Title Text Hover Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="titleHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Post Excerpt. */}
		<PanelBody title={ __( 'Post Excerpt', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={ props }
				ColorKey="excerpt"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Excerpt Text Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="excerpt"
			/>
		</PanelBody>
		{/* Post Date. */}
		<PanelBody title={ __( 'Post Date', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={ props }
				ColorKey="date"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Date Text Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="date"
			/>
		</PanelBody>
		{/* Post Meta. */}
		<PanelBody title={ __( 'Post Meta', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={ props }
				ColorKey="meta"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Meta Text Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="meta"
			/>
		</PanelBody>
		{ ( attributes.showReadMore ) && ( <>
			<PanelBody title={ __( 'Read More Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>   
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === buttonType ) ? true : false }
							onClick={ () => setButtonType( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button 
							className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === buttonType ) ? true : false }
							onClick={ () => setButtonType( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === buttonType && <>
						<ColorGradientControl colors={[]} gradients={[]}
							label={ __( 'Button Background', 'wpmozo-blocks-and-addons' ) }
							colorValue={ attributes.buttonBackground }
							gradientValue={ attributes.buttonBGGradient }
							onColorChange={ (newValue) => setAttributes( { buttonBackground: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( { buttonBGGradient: newValue } ) }
						/>
						<hr />
						<ToggleControl
							label={ __( 'Show Button Icon', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.buttonUseIcon || false }
							onChange={ ( newValue ) => setAttributes( { buttonUseIcon: newValue } ) }
							__nextHasNoMarginBottom={ true }
						/>
						{ ( attributes.buttonUseIcon ) && <>
							<WpmozoIconpicker props={ props }
								label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
								iconPickerKey='buttonIcon'
								value={ attributes.buttonIcon }
								onChange={ ( newValue ) => setAttributes( { buttonIcon: newValue } ) }
							/>
							<ToggleGroupControl
								label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.buttonIconPosition }
								onChange={ ( newValue ) => setAttributes( { buttonIconPosition: newValue } ) }
							>
								<ToggleGroupControlOption value="before" label="Before" />
								<ToggleGroupControlOption value="after" label="After" />
							</ToggleGroupControl>
							<ToggleControl
								label={ __( 'Show Icon On Hover', 'wpmozo-blocks-and-addons' ) }
								checked={ attributes.buttonIconOnHover }
								onChange={ ( newValue ) => setAttributes( { buttonIconOnHover: newValue } ) }
							/>
						</> }
						<WpmozoColorPicker props={ props }
							label={ __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey="button"
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography props={ props }
							TypographyKey="button"
						/>
						<WpmozoDimensions props={ props }
							label={ __( 'Button Dimensions', 'wpmozo-blocks-and-addons' ) }
							DimensionKey='button'
							DimensionsTypes={ { padding: true, margin: true } }
						/>
						<WpmozoBorder props={ props }
							label={ __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey="button"
							BorderTypes={ { border: true, radius: true } }
						/>
					</> }
					{ 'hover' === buttonType && <>
						<ColorGradientControl colors={[]} gradients={[]}
							label={ __( 'Button Hover Background', 'wpmozo-blocks-and-addons' ) }
							colorValue={ attributes.buttonHoverBackground }
							gradientValue={ attributes.buttonHoverBGGradient }
							onColorChange={ (newValue) => setAttributes( { buttonHoverBackground: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( { buttonHoverBGGradient: newValue } ) }
						/>
						<WpmozoColorPicker props={ props }
							label={ __( 'Button Hover Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey="buttonHover"
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Hover Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography props={ props }
							TypographyKey="buttonHover"
						/>
						<WpmozoBorder props={ props }
							label={ __( 'Button Hover Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey="buttonHover"
							BorderTypes={ { border: true, radius: true } }
						/>
					</> }
				</BaseControl>
			</PanelBody>
		</> ) }
	</> );
};
