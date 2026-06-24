import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	RangeControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import {
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography,
} from '../../../common/components/index';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});

	const [ deviceType, setDeviceType ] = useState('tablet');

	return ( <>
		<PanelBody title={ __( 'Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoColorPicker
				ColorKey="container"
				props={props}
				ColorTypes={[
					{
						key: 'background',
						label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
					}
				]}
			/>
			<WpmozoDimensions
				DimensionKey='container'
				DimensionsTypes={{
					padding: true
				}}
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker
				ColorKey="slider"
				props={props}
				ColorTypes={[
					{
						key: 'ArrowColor',
						label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ),
					},
					{
						key: 'ArrowBackground',
						label: __( 'Arrow Background', 'wpmozo-blocks-and-addons' ),
					},
					{
						key: 'ActiveDoteColor',
						label: __( 'Active Dot Pagination Color', 'wpmozo-blocks-and-addons' ),
					},
					{
						key: 'InactiveDoteColor',
						label: __( 'Inactive Dot Pagination Color', 'wpmozo-blocks-and-addons' ),
					}
				]}
			/>
			<WpmozoTypography
				TypographyKey="arrow"
				label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
				props={props}
				TypoTypes={{
					'FontSize': true
				}}
			/>
			<WpmozoDimensions
				DimensionKey='arrow'
				label={ __( 'Arrows Padding', 'wpmozo-blocks-and-addons' ) }
				DimensionsTypes={{
					padding: true
				}}
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Logo', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<RangeControl
				label={ __( 'Logo Width', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.logoWidth }
				onChange={ ( newValue ) => setAttributes( { logoWidth: newValue } ) }
				min={ 100 }
				step={ 1 }
				max={ 500 }
			/>
			<RangeControl
				label={ __( 'Logo Height', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.logoHeight }
				onChange={ ( newValue ) => setAttributes( { logoHeight: newValue } ) }
				min={ 100 }
				step={ 1 }
				max={ 500 }
			/>
		</PanelBody>
	</> );
};
