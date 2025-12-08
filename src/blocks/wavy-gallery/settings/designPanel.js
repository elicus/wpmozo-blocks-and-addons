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

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoBorder
				props={props}
				BorderKey="container"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Lightbox', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker
				props={props}
			   	ColorKey="lightbox"
			   	ColorTypes={ [
					   { key: 'BackgroundColor', label: __( 'Lightbox Background Color', 'wpmozo-blocks-and-addons' ) }
			   	] }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Lightbox Caption', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
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
