import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import {
	WpmozoBorder,
	WpmozoIconpicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoAlignment,
	MozoStates,
} from '../../../common/components/index.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [openPanel, setOpenPanel] = useState('panel1');
	
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	return ( <>
		{/* Dropdown Button. */}
		<PanelBody title={ __( 'Dropdown Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={() => handleToggle('panel1')}>
			<WpmozoAlignment
				label={__('Button Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({buttonAlign: newValue})}
				value={attributes.buttonAlign}
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
					<WpmozoTypography props={ props }
						label={__( 'Button Typography', 'wpmozo-blocks-and-addons' )}
						TypographyKey={ isHover ? "buttonHover" : "button" }
					/>
				) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Button Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='button'
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
					<WpmozoBorder props={ props }
						label={ isHover ? __( 'Button Hover Border', 'wpmozo-blocks-and-addons' ) : __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey={ isHover ? "buttonHover" : "button" }
						BorderTypes={ { border: true, radius: true } }
					/>
				) }
			/>
		</PanelBody>
		{/* Dropdown Menu. */}
		<PanelBody title={ __( 'Dropdown Menu', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={() => handleToggle('panel2')}>
			<RangeControl
				label={ __( 'Dropdown Min Width (in px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.submenuMinwidth }
				onChange={ ( newValue ) => setAttributes( { submenuMinwidth: newValue } ) }
				min={10} step={1} max={1000} allowReset={true}
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Dropdown Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='submenu'
				DimensionsTypes={ { padding: true } }
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
						label={ isHover ? __( 'Dropdown Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Dropdown Background', 'wpmozo-blocks-and-addons' ) }
						colorValue={ isHover ? attributes.submenuHoverBackground : attributes.submenuBackground }
						gradientValue={ isHover ? attributes.submenuHoverBGGradient : attributes.submenuBGGradient }
						onColorChange={ ( newValue ) => setAttributes( isHover ? { submenuHoverBackground: newValue } : { submenuBackground: newValue } ) }
						onGradientChange={ ( newValue ) => setAttributes( isHover ? { submenuHoverBGGradient: newValue } : { submenuBGGradient: newValue } ) }
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
						label={ isHover ? __( 'Dropdown Hover Border', 'wpmozo-blocks-and-addons' ) : __( 'Dropdown Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey={ isHover ? "submenuHover" : "submenu" }
						BorderTypes={ { border: true, radius: true } }
					/>
				) }
			/>
		</PanelBody>
		{/* Dropdown Link Text. */}
		<PanelBody title={ __( 'Dropdown Link', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={() => handleToggle('panel3')}>
		<MozoStates
				value={hoverState}
				title={ __( 'Link Colors', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={ props }
						ColorKey={ isHover ? "linkTextHover" : "linkText" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Link Text Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Link Text Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: isHover ? __( 'Link Hover Background Color', 'wpmozo-blocks-and-addons' ) : __( 'Link Background Color', 'wpmozo-blocks-and-addons' ) },
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
					<WpmozoTypography props={ props }
						TypographyKey={ isHover ? "linkTextHover" : "linkText" }
					/>
				) }
			/>
		</PanelBody>
	</> );
};
