// inspector.js
import {__} from "@wordpress/i18n";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, RangeControl,SelectControl,ToggleControl} from "@wordpress/components";
import {WpmozoColorPicker, WpmozoDimensions} from "../../common/components";

const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes },
		iconShape = [
			{
				label: __('Square', 'wpmozo-blocks-and-addons'),
				value: 'square'
			},
			{
				label: __('Circle', 'wpmozo-blocks-and-addons'),
				value: 'circle'
			},
			{
				label: __('None', 'wpmozo-blocks-and-addons'),
				value: 'none'
			}
		],
		imageBorderType = [
			{
				label: __('None', 'wpmozo-blocks-and-addons'),
				value: 'none'
			},
			{
				label: __('Solid', 'wpmozo-blocks-and-addons'),
				value: 'solid'
			},
			{
				label: __('Double', 'wpmozo-blocks-and-addons'),
				value: 'double'
			},
			{
				label: __('Dotted', 'wpmozo-blocks-and-addons'),
				value: 'dotted'
			},
			{
				label: __('Dashed', 'wpmozo-blocks-and-addons'),
				value: 'dashed'
			},
			{
				label: __('Groove', 'wpmozo-blocks-and-addons'),
				value: 'groove'
			}
		];
	props = Object.assign({}, props, {preAttributes: {}});

    return (
        <>
			<InspectorControls key="controls">
				<PanelBody title={__('Stack settings', 'wpmozo-blocks-and-addons')} initialOpen={true}>
					<RangeControl
						label={ __( 'Image/Icon Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.stackItemSize }
						onChange={ ( newValue ) => setAttributes( { stackItemSize: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 500 }
					/>
					<RangeControl
						label={ __( 'Image/Icon Shrink', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.stackItemShrink }
						onChange={ ( newValue ) => setAttributes( { stackItemShrink: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 250 }
					/>
					<RangeControl
						label={ __( 'Image/Icon Spacing', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.stackItemSpacing }
						onChange={ ( newValue ) => setAttributes( { stackItemSpacing: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 150 }
					/>
					<ToggleControl
						label={__('Enable Tooltip', 'wpmozo-blocks-and-addons')}
						checked={attributes.showTooltip}
						onChange={(newValue) => setAttributes({showTooltip: newValue})}
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls key="styles" group="styles">
				<PanelBody title={ __('Global Icon Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={open}>
					<WpmozoColorPicker
						ColorKey="icon"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>
					<SelectControl
						label={__('Icon Shape', 'wpmozo-blocks-and-addons')}
						value={attributes.iconShape}
						options={iconShape}
						onChange={(newValue) => setAttributes({iconShape: newValue})}
					/>
					<WpmozoDimensions
						DimensionKey='iconDimensions'
						DimensionsTypes={{
							padding: true,
						}}
						props={props}
					/>
				</PanelBody>
				<PanelBody title={ __('Global Image Styling', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
					<RangeControl
						label={ __( 'Image Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.imageSize }
						onChange={ ( newValue ) => setAttributes( { imageSize: newValue } ) }
						min={ 32 }
						step={ 2 }
						max={ 600 }
					/>
					<SelectControl
						label={__('Border Type', 'wpmozo-blocks-and-addons')}
						value={attributes.imageBorderType}
						options={imageBorderType}
						onChange={(newValue) => setAttributes({imageBorderType: newValue})}
					/>
					{ 'none' !== attributes.imageBorderType &&(
						<>
							<RangeControl
								label={ __( 'Border Width', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.imageBorderWidth }
								onChange={ ( newValue ) => setAttributes( { imageBorderWidth: newValue } ) }
								min={ 1 }
								step={ 0.5 }
								max={ 20 }
							/>
							<WpmozoColorPicker
								ColorKey="border"
								props={props}
								ColorTypes={[
									{
										key: 'Color',
										label: __( 'Border Color', 'wpmozo-blocks-and-addons' ),
									}
								]}
							/>
						</>
					)}
					<RangeControl
						label={ __( 'Image Border Radius', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.imageBorderRadius }
						onChange={ ( newValue ) => setAttributes( { imageBorderRadius: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 100 }
					/>
				</PanelBody>
				<PanelBody title={ __('Tooltip Styling', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorPicker
						ColorKey="tooltip"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __( 'Tooltip Text Color', 'wpmozo-blocks-and-addons' ),
							},
							{
								key: 'BackgroundColor',
								label: __( 'Tooltip Background Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>
				</PanelBody>
			</InspectorControls>
        </>
    );
};

export default Inspector;
