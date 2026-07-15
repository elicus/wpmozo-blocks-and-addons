import { __ } from '@wordpress/i18n';

import {
	PanelBody
} from "@wordpress/components";
import {
	WpmozoDimensions,
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography
} from '../../../common/components/index';
import { useState } from 'react';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
									
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}


	return ( <>
		<PanelBody title={ __( 'Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<WpmozoBorder
				props={props}
				BorderKey="container"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Lightbox', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<WpmozoColorPicker
				props={props}
			   	ColorKey="lightbox"
			   	ColorTypes={ [
					   { key: 'BackgroundColor', label: __( 'Lightbox Background Color', 'wpmozo-blocks-and-addons' ) }
			   	] }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Lightbox Caption', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<WpmozoAlignment
				label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.textAlign }
				onChange={ ( newValue ) => setAttributes( { textAlign: newValue}  ) }
			/>
			<WpmozoColorPicker
				props={props}
				ColorKey="lightbox"
				ColorTypes={ [
					{ key: 'TitleColor', label: __( 'Lightbox Caption Text Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography
				TypographyKey="lightboxTitle"
				props={props}
			/>
		</PanelBody>
	</> );
};
