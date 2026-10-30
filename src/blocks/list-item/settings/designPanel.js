import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	ToggleControl,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {WpmozoDimensions, WpmozoColorPicker, WpmozoTypography, MozoStates} from '../../../common/components/index';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
					
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return ( <>
		<PanelBody title={ __( 'Item Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
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
						ColorKey={ isHover ? "textHover" : "textNormal" }
						props={props}
						ColorTypes={[
							{ key: 'Color', label: isHover ? __( 'Hover Text Color', 'wpmozo-blocks-and-addons' ) : __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
						]}
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
						TypographyKey={ isHover ? "textHover" : "textNormal" }
						props={props}
					/>
				) }
			/>
		</PanelBody>
		{ 'icon' === attributes.markerType &&
			<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
				<ToggleControl
					label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.styleIcon }
					onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
				/>
				{ true === attributes.styleIcon &&
					<SelectControl
						label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.iconShape }
						options={[
							{ value: 'square', label: __( 'Square', 'wpmozo-blocks-and-addons' ) },
							{ value: 'circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
							{ value: 'hexagon', label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ) },
						]}
						onChange={ ( newValue ) => setAttributes( { iconShape: newValue } ) }
					/>
				}
				{ true === attributes.styleIcon &&
					<MozoStates
						value={hoverState}
						title={ __( 'Shape Background', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( isHover ) => (
								isHover ? setHoverState(true) : setHoverState(false),
								setAttributes({wrapIsHover: !hoverState})
							)
						}
						control={ ( isHover ) => (
							<WpmozoColorPicker
								ColorKey={ isHover ? "shapeHover" : "shape" }
								props={props}
								ColorTypes={[
									{ key: 'Background', label: isHover ? __( 'Shape Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Shape Background', 'wpmozo-blocks-and-addons' ) },
								]}
							/>
						) }
					/>
				}
				{ true === attributes.styleIcon &&
					<MozoStates
						value={hoverState}
						title={ __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( isHover ) => (
								isHover ? setHoverState(true) : setHoverState(false),
								setAttributes({wrapIsHover: !hoverState})
							)
						}
						control={ ( isHover ) => (
							<WpmozoColorPicker
								ColorKey={ isHover ? "iconHover" : "icon" }
								props={props}
								ColorTypes={[
									{ key: 'Color', label: isHover ? __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
								]}
							/>
						) }
					/>
				}
				{ true === attributes.styleIcon &&
					<ToggleControl
						label={ __( 'Display Shape Border', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.enableShapeBorder }
						onChange={ ( newValue ) => setAttributes( { enableShapeBorder: newValue } ) }
					/>
				}
				{ true === attributes.styleIcon && true === attributes.enableShapeBorder &&
					<MozoStates
						value={hoverState}
						title={ __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( isHover ) => (
								isHover ? setHoverState(true) : setHoverState(false),
								setAttributes({wrapIsHover: !hoverState})
							)
						}
						control={ ( isHover ) => (
							<WpmozoColorPicker
								ColorKey={ isHover ? "shapeBorderHover" : "shapeBorder" }
								props={props}
								ColorTypes={[
									{ key: 'Color', label: isHover ? __( 'Shape Hover Border Color', 'wpmozo-blocks-and-addons' ) : __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ) },
								]}
							/>
						) }
					/>
				}
			</PanelBody>
		}
		<PanelBody title={ __( 'Spacing', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<WpmozoDimensions
				DimensionKey='item'
				label={ __( 'Item Spacing', 'wpmozo-blocks-and-addons' ) }
				DimensionsTypes={{
					margin: true,
					padding:true,
				}}
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Background', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Item Background', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<ColorGradientControl
						colorValue={ isHover ? attributes.itemHoverBackgroundColor : attributes.itemBackgroundColor }
						gradientValue={ isHover ? attributes.itemHoverBackgroundGradient : attributes.itemBackgroundGradient }
						colors={ [] }
						gradients={ [] }
						label={ isHover ? __( 'Hover Item Background', 'wpmozo-blocks-and-addons' ) : __( 'Item Background', 'wpmozo-blocks-and-addons' ) }
						onColorChange={ (newValue) => setAttributes({ [isHover ? 'itemHoverBackgroundColor' : 'itemBackgroundColor']: newValue }) }
						onGradientChange={ (newValue) => setAttributes({ [isHover ? 'itemHoverBackgroundGradient' : 'itemBackgroundGradient']: newValue }) }
					/>
				) }
			/>
		</PanelBody>
	</> );
};
