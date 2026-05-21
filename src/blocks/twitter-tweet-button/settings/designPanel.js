import { __ } from '@wordpress/i18n';

import {
	PanelBody,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Share Button. */}
		<PanelBody title={ __( 'Share Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Button Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.buttonAlign }
				onChange={ ( newValue ) => setAttributes( { buttonAlign: newValue } ) }
			/>
			<WpmozoBorder props={props}
				label={ __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="button"
			/>
		</PanelBody>
		{/* Fallback Text. */}
		<PanelBody title={ __( 'Fallback Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={ props }
				ColorKey="fallbackText"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Fallback Text Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="fallbackText"
			/>
		</PanelBody>
	</> );
};
