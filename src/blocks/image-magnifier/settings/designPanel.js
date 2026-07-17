import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	RangeControl
} from "@wordpress/components";
import {
	WpmozoAlignment,
	WpmozoColorPicker
} from '../../../common/components/index';
import { useState } from 'react';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [openPanel, setOpenPanel] = useState('panel1');
				
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return ( <>
		<PanelBody title={ __( 'Image Setting', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<WpmozoAlignment
				label={__( 'Image Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { imageAlignment: newValue } ) }
				value={ attributes.imageAlignment }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Lens Setting', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<RangeControl
				label={ __( 'Width', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.lensWidth }
				onChange={ ( newValue ) => setAttributes( { lensWidth: newValue } ) }
				min={100} max={600}
			/>
			<RangeControl
				label={ __( 'Transition Speed', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.lenseSpeed }
				onChange={ ( newValue ) => setAttributes( { lenseSpeed: newValue } ) }
				min={0} max={1000} step={100}
			/>
			<RangeControl
				label={ __( 'Border Width', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.lenseBorderWidth }
				onChange={ ( newValue ) => setAttributes( { lenseBorderWidth: newValue } ) }
				min={1} max={50}
			/>
			<WpmozoColorPicker props={props}
				ColorKey="lenseBorder"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Border Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Sizing', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<RangeControl
				label={ __( 'Image Width', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageWidth }
				onChange={ ( newValue ) => setAttributes( { imageWidth: newValue } ) }
				min={1} max={100}
			/>
			<RangeControl
				label={ __( 'Image Max Width', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageMaxWidth }
				onChange={ ( newValue ) => setAttributes( { imageMaxWidth: newValue } ) }
				min={1} max={100}
			/>
		</PanelBody>
	</> );
};
