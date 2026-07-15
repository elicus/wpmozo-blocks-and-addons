import {__} from '@wordpress/i18n';
import {useState} from "@wordpress/element";

import {
	PanelBody,
	RangeControl
} from "@wordpress/components";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoBorder
} from '../../../common/components';

export const DesignPanel = ({ attributes, setAttributes, hoverState, setHoverState }) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	const [openPanel, setOpenPanel] = useState('panel1');
			
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return (
		<>
			<PanelBody title={__('Container', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
				{'marquee' === attributes.tickerLayout && ('top' === attributes.marqueeDirection || 'bottom' === attributes.marqueeDirection) && (
					<>
						<RangeControl
							label={__('Container Box Height (px)', 'wpmozo-blocks-and-addons')}
							value={attributes.marquee_wrap_height}
							onChange={(newValue) => setAttributes({marquee_wrap_height: newValue})}
							min={1} step={1} max={1000}
						/>
					</>
				)}
				{'3d_circular' === attributes.tickerLayout && (
					<>
						<RangeControl
							label={__('Container Box Height (px)', 'wpmozo-blocks-and-addons')}
							value={attributes.circle3d_wrap_height}
							onChange={(newValue) => setAttributes({circle3d_wrap_height: newValue})}
							min={1} step={1} max={1000}
						/>
					</>
				)}
				<WpmozoDimensions
					DimensionKey='container'
					DimensionsTypes={{
						padding: true,
						margin: true
					}}
					props={props}
				/>
				<WpmozoBorder
					props={props}
					BorderKey="container"
				/>
			</PanelBody>
			<PanelBody title={__('Images', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
				<RangeControl
					label={__('Image Width (px)', 'wpmozo-blocks-and-addons')}
					value={attributes.image_width}
					onChange={(newValue) => setAttributes({image_width: newValue})}
					min={50} step={1} max={700}
				/>
				<RangeControl
					label={__('Image Height (px)', 'wpmozo-blocks-and-addons')}
					value={attributes.image_height}
					onChange={(newValue) => setAttributes({image_height: newValue})}
					min={50} step={1} max={500}
				/>
			</PanelBody>
		</>
	);
};
