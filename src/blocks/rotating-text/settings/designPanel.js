import {__} from '@wordpress/i18n';
import {useState} from "@wordpress/element";

import {
	PanelBody,
	RangeControl,
	SelectControl
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

	return (
		<>
			{/* Wrapper Box. */}
			<PanelBody title={__('Wrapper Box', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
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
					label={__('Circle Animation Speed', 'wpmozo-blocks-and-addons')}
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
				<WpmozoBorder
					props={props}
					BorderKey="wrapper"
				/>
			</PanelBody>
			{/* Text. */}
			<PanelBody title={__('Text', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
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
			<PanelBody title={__('Image/Icon', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker props={props}
					ColorKey="element"
					ColorTypes={[
						...(!attributes.useImage 
	      					? [{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }] 
	      					: []),
						{key: 'Background', label: __('Image/Icon Background Color', 'wpmozo-blocks-and-addons')}
					]}
				/>
				<WpmozoRangeSize props={props}
					label={ __( 'Image/Icon Wrapper Size', 'wpmozo-blocks-and-addons') }
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
