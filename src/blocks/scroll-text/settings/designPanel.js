import { __ } from '@wordpress/i18n';

import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl,
	__experimentalBoxControl as BoxControl
} from "@wordpress/components";
import {
	WpmozoBorder,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoAlignment,
	MozoStates
} from '../../../common/components/index.js';
import { useState } from "@wordpress/element";

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
									
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	const [ textType, setTextType ] = useState( 'normal' );

	return ( <>
		{/* Text Style. */}
		{ ( 'blur' === attributes.scrollEffect ) && (
			<PanelBody title={ __( 'Text Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
				{ ( 'blur' === attributes.scrollEffect ) && (
					<RangeControl
						label={ __( 'Blur Intensity', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.textBlurLevel }
						onChange={ ( newValue ) => setAttributes( { textBlurLevel: newValue } ) }
						min={1} step={1} max={20} allowReset={true}
					/>
				) }
			</PanelBody>
		) }
		{/* Text. */}
		<PanelBody title={ __( 'Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<WpmozoAlignment
				label={__('Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({textAlign: newValue})}
				value={attributes.textAlign}
			/>
			{ ( 'color' === attributes.scrollEffect ) && (
				<WpmozoColorPicker props={props}
					ColorKey="activeText"
					label={ __( 'Active/Visible Text Color', 'wpmozo-blocks-and-addons' ) }
					ColorTypes={ [
						{ key: 'Color', label: __( 'Active Text Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			) }
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
						label={__( 'Text Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "textHover" : "text" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
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
						TypographyKey={ isHover ? "textHover" : "text" }
						props={props}
					/>
				) }
			/>
		</PanelBody>
		{/* Block Styling. */}
		<PanelBody title={ __( 'Block Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<WpmozoDimensions props={props}
				label={ __( 'Dimension', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='block'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={props}
				BorderKey="block"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
	</> );
};
