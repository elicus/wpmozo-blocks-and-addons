import {__} from '@wordpress/i18n';
import {useState} from "@wordpress/element";

import {
	PanelBody,
	RangeControl
} from "@wordpress/components";
import {
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoBorder,
	WpmozoRangeSize
} from '../../../common/components';

export const DesignPanel = ({attributes, setAttributes}) => {
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
			{/* Icon. */}
			{ !attributes.useImage && ( <>
				<PanelBody title={__('Icon', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorPicker props={props}
						ColorKey="icon"
						ColorTypes={[
							{key: 'Color', label: __('Icon Color', 'wpmozo-blocks-and-addons')},
							{key: 'Background', label: __('Icon Background Color', 'wpmozo-blocks-and-addons')}
						]}
					/>
					<WpmozoRangeSize props={props}
						label={ __( 'Icon Wrapper Size', 'wpmozo-blocks-and-addons') }
						rangeSizeKey='iconWrapperSize'
					/>
					<WpmozoRangeSize props={props}
						label={ __( 'Icon Size', 'wpmozo-blocks-and-addons') }
						rangeSizeKey='iconSize'
					/>
					<WpmozoDimensions props={props}
						DimensionKey='icon'
						DimensionsTypes={{padding: true}}
					/>
					<WpmozoBorder props={props}
						BorderKey="icon"
					/>
				</PanelBody>
			</> ) }
			{/* Image. */}
			{ attributes.useImage && ( <>
				<PanelBody title={__('Image', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorPicker props={props}
						ColorKey="image"
						ColorTypes={[
							{key: 'Background', label: __('Image Background Color', 'wpmozo-blocks-and-addons')}
						]}
					/>
					<WpmozoRangeSize props={props}
						label={ __( 'Image Wrapper Size', 'wpmozo-blocks-and-addons') }
						rangeSizeKey='imageWrapperSize'
					/>
					<WpmozoDimensions props={props}
						DimensionKey='image'
						DimensionsTypes={{padding: true}}
					/>
					<WpmozoBorder props={props}
						BorderKey="image"
					/>
				</PanelBody>
			</> ) }
		</>
	);
};
