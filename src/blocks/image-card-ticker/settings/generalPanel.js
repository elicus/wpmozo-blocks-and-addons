import { __ } from "@wordpress/i18n";

import {
    PanelBody,
    SelectControl,
	RangeControl,
} from "@wordpress/components";
import {
    WpmozoMediaUploader,
    WpmozoIconpicker,
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={__('Layout', 'wpmozo-blocks-and-addons')}
				value={attributes.tickerLayout}
				options={[
					{
						value: 'marquee',
						label: __('Marquee', 'wpmozo-blocks-and-addons'),
					},
					{
						value: '3d_circular',
						label: __('3D Circular', 'wpmozo-blocks-and-addons'),
					},
					{
						value: 'curve',
						label: __('Curve', 'wpmozo-blocks-and-addons'),
					}
				]}
				onChange={(newValue) => setAttributes({tickerLayout: newValue})}
			/>
			{'marquee' === attributes.tickerLayout && (
				<SelectControl
					label={__('Marquee Direction', 'wpmozo-blocks-and-addons')}
					value={attributes.marqueeDirection}
					options={[
						{
							value: 'left',
							label: __('Left', 'wpmozo-blocks-and-addons'),
						},
						{
							value: 'right',
							label: __('Right', 'wpmozo-blocks-and-addons'),
						},
						{
							value: 'top',
							label: __('Top', 'wpmozo-blocks-and-addons'),
						},
						{
							value: 'bottom',
							label: __('Bottom', 'wpmozo-blocks-and-addons'),
						}
					]}
					onChange={(newValue) => setAttributes({marqueeDirection: newValue})}
				/>
			)}
			<RangeControl
				label={__('Images Gap (px)', 'wpmozo-blocks-and-addons')}
				value={attributes.imagesGap}
				onChange={(newValue) => setAttributes({imagesGap: newValue})}
				min={0} step={1} max={200}
			/>
			<RangeControl
				label={__('Ticker Speed', 'wpmozo-blocks-and-addons')}
				value={attributes.tickerSpeed}
				onChange={(newValue) => setAttributes({tickerSpeed: newValue})}
				min={1} step={1} max={50}
			/>
		</PanelBody>
	</> );
};
