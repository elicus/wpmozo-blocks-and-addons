import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';

import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoIconpicker,
	WpmozoDimensions,
	WpmozoColorPicker,
	MozoStates,
} from '../../../common/components';

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [openPanel, setOpenPanel] = useState('panel1');
		
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	return ( <>
		{/* Title Text. */}
		<PanelBody title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<BaseControl label={ __( 'Title Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button key={ item.value }
							isPressed={ item.value === attributes.titleLevel }
							onClick={ () => setAttributes( { titleLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				value={ attributes.titleAlign }
			/>
						<MozoStates
				value={hoverState}
				title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => ( <>
					<WpmozoColorPicker props={ props }
						ColorKey={ isHover ? "titleHover" : "title" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Title Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey={ isHover ? "titleHover" : "title" }
					/>
				</> ) }
			/>
		</PanelBody>
		{/* Subtitle Text. */}
		<PanelBody title={ __( 'Sub Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Sub Title Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => ( <>
					<WpmozoColorPicker
						ColorKey={ isHover ? "subtitleHover" : "subtitle" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Sub Title Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Sub Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey={ isHover ? "subtitleHover" : "subtitle" }
					/>
				</> ) }
			/>
		</PanelBody>
		{/* Description Text. */}
		<PanelBody title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => ( <>
					<WpmozoColorPicker
						ColorKey={ isHover ? "descriptionHover" : "description" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Description Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey={ isHover ? "descriptionHover" : "description" }
					/>
				</> ) }
			/>
		</PanelBody>
		{/* Icon. */}
		{ attributes.showIcon && ( <>
			<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
				<RangeControl
					label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.iconFontsize }
					onChange={ ( newValue ) => setAttributes( { iconFontsize: newValue } ) }
					min={ 1 } max={ 250 } step={ 1 }
					__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={ props }
							ColorKey={ isHover ? "iconHover" : "icon" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
			</PanelBody>
		</> ) }
		{/* Button. */}
		{ attributes.showButton && ( <>
			<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Button', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => ( <>
						<ColorGradientControl colors={[]} gradients={[]}
							label={ isHover ? __( 'Button Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Button Background', 'wpmozo-blocks-and-addons' ) }
							colorValue={ isHover ? attributes.buttonHoverBackground : attributes.buttonBackground }
							gradientValue={ isHover ? attributes.buttonHoverBGGradient : attributes.buttonBGGradient }
							onColorChange={ (newValue) => setAttributes( isHover ? { buttonHoverBackground: newValue } : { buttonBackground: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( isHover ? { buttonHoverBGGradient: newValue } : { buttonBGGradient: newValue } ) }
						/>
						{ !isHover && <>
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
						</> }
						<WpmozoColorPicker props={ props }
							label={ isHover ? __( 'Button Hover Text Color', 'wpmozo-blocks-and-addons' ) : __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey={ isHover ? "buttonHover" : "button" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Button Hover Text Color', 'wpmozo-blocks-and-addons' ) : __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
						<WpmozoTypography props={ props }
							TypographyKey={ isHover ? "buttonHover" : "button" }
						/>
						{ !isHover && (
							<WpmozoDimensions props={ props }
								label={ __( 'Button Dimensions', 'wpmozo-blocks-and-addons' ) }
								DimensionKey='button'
								DimensionsTypes={ { padding: true, margin: true } }
							/>
						) }
						<WpmozoBorder props={ props }
							label={ isHover ? __( 'Button Hover Border', 'wpmozo-blocks-and-addons' ) : __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey={ isHover ? "buttonHover" : "button" }
							BorderTypes={ { border: true, radius: true } }
						/>
					</> ) }
				/>
			</PanelBody>
			{/* Block. */}
			<PanelBody title={ __( 'Block', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel6'} onToggle={()=> handleToggle('panel6')}>
				<ColorGradientControl colors={[]} gradients={[]}
					label={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
					colorValue={ attributes.blockBackground }
					gradientValue={ attributes.blockBGGradient }
					onColorChange={ (newValue) => setAttributes( { blockBackground: newValue } ) }
					onGradientChange={ (newValue) => setAttributes( { blockBGGradient: newValue } ) }
				/>
				<WpmozoDimensions props={ props }
					label={ __( 'Dimensions', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='block'
					DimensionsTypes={ { padding: true, margin: true } }
				/>
			</PanelBody>
		</> ) }
	</> );
};
