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
	WpmozoIconpicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
	MozoStates,
} from '../../../common/components/index';

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');

	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	return ( <>
		{/* Title Text. */}
		<PanelBody title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={() => handleToggle('panel1')}>
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
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker
						label={ __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						ColorKey={ isHover ? "titleHover" : "title" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography
						label={__( 'Title Typography', 'wpmozo-blocks-and-addons' )}
						props={ props }
						TypographyKey={ isHover ? "titleHover" : "title" }
					/>
				) }
			/>
		</PanelBody>
		{/* Description Text. */}
		<PanelBody title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={() => handleToggle('panel2')}>
			<WpmozoAlignment showJustify
				label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { descriptionAlign: newValue } ) }
				value={ attributes.descriptionAlign }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker
						label={ __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
						ColorKey={ isHover ? "descriptionHover" : "description" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography
						label={__( 'Description Typography', 'wpmozo-blocks-and-addons' )}
						props={ props }
						TypographyKey={ isHover ? "descriptionHover" : "description" }
					/>
				) }
			/>
		</PanelBody>
		{/* Button. */}
		{ ( attributes.showButton ) && ( <>
			<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={() => handleToggle('panel3')}>
				<WpmozoAlignment
					label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { buttonAlign: newValue } ) }
					value={ attributes.buttonAlign }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<ColorGradientControl colors={[]} gradients={[]}
							label={ isHover ? __( 'Button Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Button Background', 'wpmozo-blocks-and-addons' ) }
							colorValue={ isHover ? attributes.buttonHoverBackground : attributes.buttonBackground }
							gradientValue={ isHover ? attributes.buttonHoverBGGradient : attributes.buttonBGGradient }
							onColorChange={ (newValue) => setAttributes( isHover ? { buttonHoverBackground: newValue } : { buttonBackground: newValue } ) }
							onGradientChange={ (newValue) => setAttributes( isHover ? { buttonHoverBGGradient: newValue } : { buttonBGGradient: newValue } ) }
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={ props }
							label={ isHover ? __( 'Button Hover Text Color', 'wpmozo-blocks-and-addons' ) : __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey={ isHover ? "buttonHover" : "button" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Button Hover Text Color', 'wpmozo-blocks-and-addons' ) : __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoTypography 
							label={__( 'Button Typography', 'wpmozo-blocks-and-addons' )}
							props={ props }
							TypographyKey={ isHover ? "buttonHover" : "button" }
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoBorder props={ props }
							label={ isHover ? __( 'Button Hover Border', 'wpmozo-blocks-and-addons' ) : __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey={ isHover ? "buttonHover" : "button" }
							BorderTypes={ { border: true, radius: true } }
						/>
					) }
				/>
				<WpmozoDimensions props={ props }
					label={ __( 'Button Dimensions', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='button'
					DimensionsTypes={ { padding: true, margin: true } }
				/>
				<RangeControl
					label={ __( 'Button Container Size(%)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonContainerSize }
					onChange={ ( newValue ) => setAttributes( { buttonContainerSize: newValue } ) }
					min={ 1 } step={ 1 } max={ 100 } allowReset={ true }
					initialPosition={ 25 } resetFallbackValue={ 25 }
					__next40pxDefaultSize __nextHasNoMarginBottom
				/>
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
				<ToggleGroupControl
					label={ __( 'Stack Button On', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonStackOn }
					onChange={ ( newValue ) => setAttributes( { buttonStackOn: newValue } ) }
				>
					<ToggleGroupControlOption value="none" label={ __( 'None', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="desktop" label={ __( 'Desktop', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="tablet" label={ __( 'Tablet', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="mobile" label={ __( 'Mobile', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
			</PanelBody>
		</> ) }
		{/* Block. */}
		<PanelBody title={ __( 'Block', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={() => handleToggle('panel4')}>
			<ToggleGroupControl
				label={ __( 'Content Verticle Align', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.blockVerticleAlign }
				onChange={ ( newValue ) => setAttributes( { blockVerticleAlign: newValue } ) }
			>
				<ToggleGroupControlOption value="flex-start" label={ __( 'Top', 'wpmozo-blocks-and-addons' ) } />
				<ToggleGroupControlOption value="center" label={ __( 'Center', 'wpmozo-blocks-and-addons' ) } />
				<ToggleGroupControlOption value="flex-end" label={ __( 'Bottom', 'wpmozo-blocks-and-addons' ) } />
			</ToggleGroupControl>
			<MozoStates
				value={hoverState}
				title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<ColorGradientControl colors={[]} gradients={[]}
						label={ isHover ? __( 'Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Background', 'wpmozo-blocks-and-addons' ) }
						colorValue={ isHover ? attributes.blockHoverBackground : attributes.blockBackground }
						gradientValue={ isHover ? attributes.blockHoverBGGradient : attributes.blockBGGradient }
						onColorChange={ (newValue) => setAttributes( isHover ? { blockHoverBackground: newValue } : { blockBackground: newValue } ) }
						onGradientChange={ (newValue) => setAttributes( isHover ? { blockHoverBGGradient: newValue } : { blockBGGradient: newValue } ) }
					/>
				) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='block'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoBorder props={props}
						BorderKey={ isHover ? "blockHover" : "block" }
						BorderTypes={ { border: true, radius: true } }
					/>
				) }
			/>
		</PanelBody>
	</> );
};
