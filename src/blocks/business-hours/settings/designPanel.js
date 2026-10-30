import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	BaseControl,
	ButtonGroup,
} from "@wordpress/components";
import {
	WpmozoBorder,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
	MozoStates
} from '../../../common/components/index.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');

	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};
	
	const [ dayType, setDayType ]   = useState( 'normal' );
	const [ timeType, setTimeType ] = useState( 'normal' );

	return ( <>
		{/* Day. */}
		<PanelBody title={ __( 'Day', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={() => handleToggle('panel1')}>
			<MozoStates
				value = {hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)	
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker
						label={__( 'Day Text Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "dayHover" : "day" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Day Text Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
			/>
			<MozoStates
				value = {hoverState}
				title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)	
				}
				control={ ( isHover ) => (
					<WpmozoTypography
						TypographyKey={ isHover ? "dayHover" : "day" }
						props={props}
					/>
				) }
			/>
		</PanelBody>
		{/* Time. */}
		<PanelBody title={ __( 'Time', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={() => handleToggle('panel2')}>
			<MozoStates
				value = {hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)	
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker
						label={__( 'Time Text Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "timeHover" : "time" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Time Text Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
			/>
			<MozoStates
				value = {hoverState}
				title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)	
				}
				control={ ( isHover ) => (
					<WpmozoTypography
						TypographyKey={ isHover ? "timeHover" : "time" }
						props={props}
					/>
				) }
			/>
		</PanelBody>
		{/* Hour Item. */}
		<PanelBody title={ __( 'Hour Item', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={() => handleToggle('panel3')}>
			<WpmozoColorPicker props={ props }
				ColorKey="hourItem"
				label={ __( 'Hour Items Background', 'wpmozo-blocks-and-addons' ) }
				ColorTypes={ [
					{ key: 'Background', label: __( 'All Items Background', 'wpmozo-blocks-and-addons' ) },
					{ key: 'BackgroundEven', label: __( 'Even Items Background', 'wpmozo-blocks-and-addons' ) },
					{ key: 'BackgroundOdd', label: __( 'Odd Items Background', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Hour Item Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='hourItem'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Hour Item Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="hourItem"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Block Styling. */}
		<PanelBody title={ __( 'Block Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={() => handleToggle('panel4')}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Block Background', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.blockBackground }
				gradientValue={ attributes.blockBGGradient }
				onColorChange={ ( newValue ) => setAttributes( { blockBackground: newValue } ) }
				onGradientChange={ ( newValue ) => setAttributes( { blockBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Block Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='block'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Block Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="block"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
	</> );
};
