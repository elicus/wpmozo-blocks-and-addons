import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	RangeControl,
} from '@wordpress/components';
import {
	WpmozoIconpicker,
	WpmozoColorPicker,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Timeline Icon. */}
		<PanelBody title={ __( 'Timeline Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoIconpicker props={props}
				label={__( 'Select Icon', 'wpmozo-blocks-and-addons' ) }
				iconPickerKey='timelineIcon'
				value={ attributes.timelineIcon }
				onChange={ ( newValue ) => setAttributes( { timelineIcon: newValue } ) }
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="timelineIcon"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'FillColor', label: __( 'Icon Fill Color(On Scroll)', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<RangeControl
				label={ __( 'Icon Font Size (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.timelineIconFontSize }
				onChange={ ( newValue ) => setAttributes( { timelineIconFontSize: newValue } ) }
				min={1} step={1} max={120}
			/>
			<SelectControl
				label={ __( 'Icon Shape', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tlIconShape }
				options={ [
					{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
					{ value: 'use_square', label: __( 'Square', 'wpmozo-blocks-and-addons' ) },
					{ value: 'use_circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ (newValue) => setAttributes( { tlIconShape: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
		</PanelBody>
	</> );
};
