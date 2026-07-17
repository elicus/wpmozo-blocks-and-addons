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
		{/* Title Text. */}
		<PanelBody title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment showJustify
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				value={ attributes.titleAlign }
			/>
			<WpmozoColorPicker
				ColorKey="title"
				props={ props }
				ColorTypes={ [
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="title"
			/>
		</PanelBody>
		{/* Description Text. */}
		<PanelBody title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoAlignment showJustify
				label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { descriptionAlign: newValue } ) }
				value={ attributes.descriptionAlign }
			/>
			<WpmozoColorPicker
				ColorKey="description"
				props={ props }
				ColorTypes={ [
					{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography props={ props }
				TypographyKey="description"
			/>
		</PanelBody>
	</> );
};
