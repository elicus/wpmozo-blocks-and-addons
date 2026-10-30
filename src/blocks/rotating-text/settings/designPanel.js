import {__} from '@wordpress/i18n';
import {useState} from "@wordpress/element";

import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl
} from "@wordpress/components";
import {
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoBorder,
	WpmozoRangeSize,
  	WpmozoAlignment
} from '../../../common/components';

export const DesignPanel = ({ attributes, setAttributes, hoverState, setHoverState }) => {
	const props = {attributes, setAttributes, preAttributes: {}};
	const [openPanel, setOpenPanel] = useState('panel1');
								
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return (
		<>
			{/* Wrapper Box. */}
			<PanelBody title={__('Wrapper Box', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
				<WpmozoColorPicker
					props={props}
					ColorKey="wrapper"
					ColorTypes={[
						{key: 'Background', label: __('Background Color', 'wpmozo-blocks-and-addons')}
					]}
				/>
				<WpmozoAlignment
					label={ __( 'Alignment', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.rotatingAlign }
					onChange={ ( newValue ) => setAttributes( { rotatingAlign: newValue } ) }
				/>
				<WpmozoRangeSize props={props}
					label={ __( 'Circle Size', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='circleSize'
				/>
				<RangeControl
					label={__('Animation Speed', 'wpmozo-blocks-and-addons')}
					value={attributes.circleAnimationSpeed}
					onChange={(newValue) => setAttributes({circleAnimationSpeed: newValue})}
					min={1000} step={100} max={25000}
				/>
				<SelectControl
					label={ __( 'Text Rotation', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.textRotation }
					options={ [
						{ value: 'clockwise', label: __( 'Clockwise', 'wpmozo-blocks-and-addons' ) },
						{ value: 'anti-clockwise', label: __( 'Anti-Clockwise', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { textRotation: newValue } ) }
				/>
				<ToggleControl
					label={ __( 'Pause Animation on Hover', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.pauseOnHover }
					onChange={ ( newValue ) => setAttributes( { pauseOnHover: newValue } ) }
				/>
				<WpmozoBorder
					props={props}
					BorderKey="wrapper"
				/>
			</PanelBody>
			{/* Text. */}
			<PanelBody title={__('Text', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
				<WpmozoColorPicker props={props}
				   ColorKey="text"
				   ColorTypes={[
					   {key: 'Color', label: __('Text Color', 'wpmozo-blocks-and-addons')}
				   ]}
				/>
				<WpmozoTypography props={props}
					TypographyKey="text"
				/>
			</PanelBody>
			{/* Image/Icon. */}
			<PanelBody title={__(`${attributes.useImage ? 'Image' : 'Icon'}`, 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
				<WpmozoColorPicker props={props}
					ColorKey="element"
					ColorTypes={[
						...(!attributes.useImage 
	      					? [{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }] 
	      					: []),
						{key: 'Background', label: __(`${attributes.useImage ? 'Image' : 'Icon'} Background Color`, 'wpmozo-blocks-and-addons')}
					]}
				/>
				{ !attributes.useImage && ( <>
					<SelectControl
						label={ __( 'Object Fit', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.imageObjectFit }
						options={ [
							{ value: 'cover', label: __( 'Cover', 'wpmozo-blocks-and-addons' ) },
							{ value: 'contain', label: __( 'Contain', 'wpmozo-blocks-and-addons' ) },
							{ value: 'fill', label: __( 'Fill', 'wpmozo-blocks-and-addons' ) },
							{ value: 'scale-down', label: __( 'Scale Down', 'wpmozo-blocks-and-addons' ) },
							{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { imageObjectFit: newValue } ) }
					/>
				</> ) }
				<WpmozoRangeSize props={props}
					label={ __( `${attributes.useImage ? 'Image' : 'Icon'} Wrapper Size`, 'wpmozo-blocks-and-addons') }
					rangeSizeKey='elementWrapperSize'
				/>
				{ !attributes.useImage && ( <>
					<WpmozoRangeSize props={props}
						label={ __( 'Icon Size', 'wpmozo-blocks-and-addons') }
						rangeSizeKey='iconSize'
					/>
				</> ) }
				<WpmozoDimensions props={props}
					DimensionKey='element'
					DimensionsTypes={{padding: true}}
				/>
				<WpmozoBorder props={props}
					BorderKey="element"
				/>
			</PanelBody>
		</>
	);
};
