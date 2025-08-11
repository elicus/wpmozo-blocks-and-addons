import { __ } from "@wordpress/i18n";

import {
	PanelBody,
} from "@wordpress/components";
import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Item Background', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={open}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.itemBackground }
				gradientValue={ attributes.itemBGGradient }
				onColorChange={ (newValue) => setAttributes( { itemBackground: newValue } ) }
				onGradientChange={ (newValue) => setAttributes( { itemBGGradient: newValue } ) }
			/>
		</PanelBody>
	</> );
};
