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
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoIconpicker,
	WpmozoColorPicker,
} from '../../../common/components';

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ buttonType, setButtonType ] = useState( 'normal' );

	return ( <>
		{/* Image. */}
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<RangeControl
				label={ __( 'Image Height(px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageHeight }
				onChange={ ( newValue ) => setAttributes( { imageHeight: newValue } ) }
				min={100} max={1000} step={1}
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="image"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Name Text. */}
		<PanelBody title={ __( 'Name Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl label={ __( 'Name Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button key={ item.value }
							isPressed={ item.value === attributes.nameLevel }
							onClick={ () => setAttributes( { nameLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={ __( 'Name Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { nameAlign: newValue } ) }
				value={ attributes.nameAlign }
			/>
			<WpmozoColorPicker props={ props }
				ColorKey="name"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Name Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="name"
			/>
		</PanelBody>
		{/* Designation Text. */}
		{ ( attributes.showDesignation ) && (
			<PanelBody title={ __( 'Designation Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl label={ __( 'Designation Level', 'wpmozo-blocks-and-addons' ) }>
					<ButtonGroup>
						{ headingLevelsList.map( ( item, index ) => (
							<Button key={ item.value }
								isPressed={ item.value === attributes.designationLevel }
								onClick={ () => setAttributes( { designationLevel: item.value } ) }
							>{ item.label }</Button>
						) ) }
					</ButtonGroup>
				</BaseControl>
				<WpmozoAlignment
					label={ __( 'Name Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { designationAlign: newValue } ) }
					value={ attributes.designationAlign }
				/>
				<WpmozoColorPicker props={ props }
					ColorKey="designation"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Designation Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography props={ props }
					TypographyKey="designation"
				/>
			</PanelBody>
	 	) }
		{/* Short Description Text. */}
		{ ( attributes.showShortDesc ) && (
			<PanelBody title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoAlignment
					label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { descriptionAlign: newValue } ) }
					value={ attributes.descriptionAlign }
				/>
				<WpmozoColorPicker props={ props }
					ColorKey="description"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography props={ props }
					TypographyKey="description"
				/>
			</PanelBody>
		) }
		{/* Skill Text. */}
		{ ( attributes.showSkills ) && ( <>
			<PanelBody title={ __( 'Skill Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoAlignment
					label={ __( 'Skill Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { skillAlign: newValue } ) }
					value={ attributes.skillAlign }
				/>
				<WpmozoColorPicker props={ props }
					ColorKey="skill"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography props={ props }
					TypographyKey="skill"
				/>
			</PanelBody>
			<PanelBody title={ __( 'Skills', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<RangeControl
					label={ __( 'Bar Height(px)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.barHeight }
					onChange={ ( newValue ) => setAttributes( { barHeight: newValue } ) }
					min={1} max={30} step={1}
				/>
				<WpmozoColorPicker props={ props }
					ColorKey="bar"
					label={ __( 'Bar Colors', 'wpmozo-blocks-and-addons' ) }
					ColorTypes={ [
						{ key: 'FilledColor', label: __( 'Filled Bar Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'EmptyColor', label: __( 'Empty Bar Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
			</PanelBody>
		</> ) }
		{/* Social Icons. */}
		{ ( attributes.showSocialIcon ) && ( <>
			<PanelBody title={ __( 'Social Icons', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				{ 'layout1' === attributes.layout && ( <>
					<RangeControl
						label={ __( 'Separator Size(px)', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.socialSeparatorSize }
						onChange={ ( newValue ) => setAttributes( { socialSeparatorSize: newValue } ) }
						min={1} max={10} step={1}
					/>
					<WpmozoColorPicker props={ props }
						ColorKey="socialSeparator"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Separator Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/><br />
				</> ) }
				<WpmozoAlignment
					label={ __( 'Social Icon Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { socialIconAlign: newValue } ) }
					value={ attributes.socialIconAlign }
				/>
				<RangeControl
					label={ __( 'Social Icon Size(px)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.socialIconSize }
					onChange={ ( newValue ) => setAttributes( { socialIconSize: newValue } ) }
					min={1} max={100} step={1}
				/>
				<WpmozoColorPicker props={ props }
					ColorKey="socialIcon"
					label={ __( 'Social Icon Color', 'wpmozo-blocks-and-addons' ) }
					ColorTypes={ [
						{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'BgColor', label: __( 'Icon Background Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
				<WpmozoBorder props={ props }
					label={ __( 'Social Icon Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="socialIcon"
					BorderTypes={ { border: true, radius: true } }
				/>
			</PanelBody>
		</> ) }
		{/* Popup. */}
		{ ( attributes.enableLink && attributes.usePopup ) && ( <>
			{/* Popup Styling. */}
			<PanelBody title={ __( 'Popup Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<SelectControl
					label={ __( 'Close Icon Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.popupCloseIconPos }
					options={ [
						{ value: 'outside', label: __( 'Outside', 'wpmozo-blocks-and-addons' ) },
						{ value: 'inside', label: __( 'Inside', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { popupCloseIconPos: newValue } ) }
				/>
				<WpmozoColorPicker props={ props }
					ColorKey="popupCloseIcon"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Close Icon Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/><br />
				<RangeControl
					label={ __( 'Close Icon Size(px)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.popupCloseIconSize }
					onChange={ ( newValue ) => setAttributes( { popupCloseIconSize: newValue } ) }
					min={1} max={100} step={1}
				/><hr />
				<RangeControl
					label={ __( 'Popup Width(%)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.popupWidth }
					onChange={ ( newValue ) => setAttributes( { popupWidth: newValue } ) }
					min={10} max={100} step={1}
				/>
				<WpmozoColorPicker props={ props }
					label={ __( 'Popup Background', 'wpmozo-blocks-and-addons' ) }
					ColorKey="popup"
					ColorTypes={ [
						{ key: 'Background', label: __( 'Popup Background', 'wpmozo-blocks-and-addons' ) },
						{ key: 'OverlayBackground', label: __( 'Popup Overlay Background', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
				<WpmozoDimensions props={ props }
					label={ __( 'Popup Dimensions', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='popup'
					DimensionsTypes={ { padding: true } }
				/>
				<WpmozoBorder props={ props }
					label={ __( 'Popup Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="popup"
					BorderTypes={ { border: true, radius: true } }
				/>
			</PanelBody>
			{/* Popup Name Text. */}
			<PanelBody title={ __( 'Popup Name Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<BaseControl label={ __( 'Name Level', 'wpmozo-blocks-and-addons' ) }>
					<ButtonGroup>
						{ headingLevelsList.map( ( item, index ) => (
							<Button key={ item.value }
								isPressed={ item.value === attributes.popupNameLevel }
								onClick={ () => setAttributes( { popupNameLevel: item.value } ) }
							>{ item.label }</Button>
						) ) }
					</ButtonGroup>
				</BaseControl>
				<WpmozoAlignment
					label={ __( 'Name Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { popupNameAlign: newValue } ) }
					value={ attributes.popupNameAlign }
				/>
				<WpmozoColorPicker props={ props }
					ColorKey="popupName"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Name Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography props={ props }
					TypographyKey="popupName"
				/>
			</PanelBody>
			{/* Popup Designation Text. */}
			{ ( ( attributes.displayInPopup ).includes( 'designation' ) ) && (
				<PanelBody title={ __( 'Popup Designation Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoAlignment
						label={ __( 'Designation Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { popupDesignationAlign: newValue } ) }
						value={ attributes.popupDesignationAlign }
					/>
					<WpmozoColorPicker props={ props }
						ColorKey="popupDesignation"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Designation Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="popupDesignation"
					/>
				</PanelBody>
			) }
			{/* Popup Description Text. */}
			{ ( ( attributes.displayInPopup ).includes( 'content' ) ) && (
				<PanelBody title={ __( 'Popup Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoAlignment
						label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { popupDescriptionAlign: newValue } ) }
						value={ attributes.popupDescriptionAlign }
					/>
					<WpmozoColorPicker props={ props }
						ColorKey="popupDescription"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="popupDescription"
					/>
				</PanelBody>
			) }
			{/* Popup Skill Text. */}
			{ ( ( attributes.displayInPopup ).includes( 'skills_bars' ) ) && (
				<PanelBody title={ __( 'Popup Skill Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoAlignment
						label={ __( 'Skill Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { popupSkillAlign: newValue } ) }
						value={ attributes.popupSkillAlign }
					/>
					<WpmozoColorPicker props={ props }
						ColorKey="popupSkill"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Skill Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="popupSkill"
					/>
				</PanelBody>
			) }
			{/* Popup Skill Bars. */}
			{ ( ( attributes.displayInPopup ).includes( 'skills_bars' ) ) && (
				<PanelBody title={ __( 'Popup Skill Bars', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
					<SelectControl
						label={ __( 'Skill Bar Layout', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.popupBarLayout }
						options={ [
							{ value: 'layout1', label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ) },
							{ value: 'layout2', label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ) },
						] }
						onChange={ ( newValue ) => setAttributes( { popupBarLayout: newValue } ) }
					/>
					{ ( 'layout1' === attributes.popupBarLayout ) && ( <>
						<ToggleControl
							label={ __( 'Use Stripes', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.popupBarUseStripe }
							onChange={ ( newValue ) => setAttributes( { popupBarUseStripe: newValue } ) }
						/>
						{ ( attributes.popupBarUseStripe ) && ( <>
							<WpmozoColorPicker props={ props }
								ColorKey="popupBarStripe"
								ColorTypes={ [
									{ key: 'Color', label: __( 'Stripe Color', 'wpmozo-blocks-and-addons' ) }
								] }
							/><br />
							<ToggleControl
								label={ __( 'Enable Stripes Animation', 'wpmozo-blocks-and-addons' ) }
								checked={ attributes.popupBarStripeUseAnim }
								onChange={ ( newValue ) => setAttributes( { popupBarStripeUseAnim: newValue } ) }
							/>
							{ ( attributes.popupBarStripeUseAnim ) && (
								<RangeControl
									label={ __( 'Animation Speed', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.popupBarStripeAnimSpeed }
									onChange={ ( newValue ) => setAttributes( { popupBarStripeAnimSpeed: newValue } ) }
									min={1} max={10} step={1}
								/>
							) }
						</> ) }
					</> ) }
					<hr />
					<RangeControl
						label={ __( 'Bar Height', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.popupBarHeight }
						onChange={ ( newValue ) => setAttributes( { popupBarHeight: newValue } ) }
						min={1} max={30} step={1}
					/>
					<WpmozoColorPicker props={ props }
						ColorKey="popupBar"
						label={ __( 'Bar Colors', 'wpmozo-blocks-and-addons' ) }
						ColorTypes={ [
							{ key: 'FilledColor', label: __( 'Filled Bar Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'EmptyColor', label: __( 'Empty Bar Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				</PanelBody>
			) }
			{/* Popup Social Icons. */}
			{ ( ( attributes.displayInPopup ).includes( 'social_icons' ) ) && ( <>
				<PanelBody title={ __( 'Social Icons', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoAlignment
						label={ __( 'Popup Social Icon Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { popupSocialIconAlign: newValue } ) }
						value={ attributes.popupSocialIconAlign }
					/>
					<RangeControl
						label={ __( 'Popup Icon Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.popupSocialIconSize }
						onChange={ ( newValue ) => setAttributes( { popupSocialIconSize: newValue } ) }
						min={1} max={100} step={1}
					/>
					<WpmozoColorPicker props={ props }
						ColorKey="popupSocialIcon"
						label={ __( 'Popup Social Icon Color', 'wpmozo-blocks-and-addons' ) }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'BgColor', label: __( 'Icon Background Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoBorder props={ props }
						label={ __( 'Popup Social Icon Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey="popupSocialIcon"
						BorderTypes={ { border: true, radius: true } }
					/>
				</PanelBody>
			</> ) }	
		</> ) }
		{/* Slider. */}
		<PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoDimensions props={ props }
				label={ __( 'Arrows Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='arrow'
				DimensionsTypes={ { padding: true } }
			/>
			<RangeControl
				label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.arrowIconSize }
				onChange={ ( newValue ) => setAttributes( { arrowIconSize: newValue } ) }
				min={10} max={100} step={1}
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Arrows Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="arrow"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __( 'Arrow Background Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Arrows Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="arrow"
				BorderTypes={ { border: true, radius: true } }
			/>
			{ attributes.showControlDot && <>
				<WpmozoColorPicker
					label={ __( 'Control Dot Color', 'wpmozo-blocks-and-addons' ) }
					ColorKey="controlDotColor"
					props={ props }
					ColorTypes={ [
						{ key: 'Active', label: __( 'Active Dot Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Inactive', label: __( 'Inactive Dot Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			</> }
		</PanelBody>
		{/* Button. */}
		{ ( attributes.enableLink && 'button' === attributes.linkType ) && ( <>
			<PanelBody title={ __( 'Link Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
		{/* Team Member Item. */}
		<PanelBody title={ __( 'Team Member Item', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.itemBackground }
				gradientValue={ attributes.itemBGGradient }
				onColorChange={ (newValue) => setAttributes( { itemBackground: newValue } ) }
				onGradientChange={ (newValue) => setAttributes( { itemBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Team Member Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='item'
				DimensionsTypes={ { padding: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Team Member Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="item"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Slider Container. */}
		<PanelBody title={ __( 'Slider Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoDimensions props={ props }
				label={ __( 'Container Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='container'
				DimensionsTypes={ { padding: true } }
			/>
		</PanelBody>
	</> );
};
