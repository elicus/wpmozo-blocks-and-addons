import { __ } from '@wordpress/i18n';

import {
	PanelBody,
} from '@wordpress/components';
import {
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Follow Button. */}
		<PanelBody title={ __( 'Follow Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.buttonAlign }
				onChange={ ( newValue ) => setAttributes( { buttonAlign: newValue } ) }
			/>
		</PanelBody>
		{/* Fallback Text. */}
		<PanelBody title={ __( 'Fallback Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={ props }
				ColorKey="fallbackText"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="fallbackText"
			/>
		</PanelBody>
	</> );
};
