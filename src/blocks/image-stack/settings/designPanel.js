import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	RangeControl,
	SelectControl,
} from "@wordpress/components";
import {
	WpmozoColorPicker,
	WpmozoDimensions,
	MozoStates
} from "../../../common/components";
import { useState } from "react";

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
					
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	let itemBorderType = [
		{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
		{ value: 'solid', label: __( 'Solid', 'wpmozo-blocks-and-addons' ) },
		{ value: 'double', label: __( 'Double', 'wpmozo-blocks-and-addons' ) },
		{ value: 'dotted', label: __( 'Dotted', 'wpmozo-blocks-and-addons' ) },
		{ value: 'dashed', label: __( 'Dashed', 'wpmozo-blocks-and-addons' ) },
		{ value: 'groove', label: __('Groove', 'wpmozo-blocks-and-addons') }
	];

	return ( <>
		{/* Icon styling. */}
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<RangeControl
				label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.iconSize }
				onChange={ ( newValue ) => setAttributes( { iconSize: newValue } ) }
				min={ 1 } step={ 1 } max={ 150 }
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
					<WpmozoColorPicker props={props}
						label=""
						ColorKey={ isHover ? "iconHover" : "icon" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
			/>
		</PanelBody>
		{/* Item Styling. */}
		<PanelBody title={ __( 'Item', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<WpmozoDimensions props={props}
				label={ __( 'Item Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='item'
				DimensionsTypes={ { padding: true } }
			/>
			<SelectControl
				label={ __( 'Item Border Type', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.itemBorderType }
				options={ itemBorderType }
				onChange={ ( newValue ) => setAttributes( { itemBorderType: newValue } ) }
			/>
			{ 'none' !== attributes.itemBorderType && ( <>
				<RangeControl
					label={ __( 'Border Width', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.itemBorderWidth }
					onChange={ ( newValue ) => setAttributes( { itemBorderWidth: newValue } ) }
					min={ 0 } step={ 1 } max={ 100 }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Border Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							label=""
							ColorKey={ isHover ? "borderHover" : "border" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Border Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Border Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
			</> ) }
			<RangeControl
				label={ __( 'Item Border Radius', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.itemBorderRadius }
				onChange={ ( newValue ) => setAttributes( { itemBorderRadius: newValue } ) }
				min={ 0 } step={ 1 } max={ 200 }
			/>
		</PanelBody>
		{/* Tooltip Styling. */}
		<PanelBody title={ __( 'Tooltip', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<WpmozoColorPicker props={props}
				ColorKey="tooltip"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Tooltip Text Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'BackgroundColor', label: __( 'Tooltip Background Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
		</PanelBody>
	</> );
};
