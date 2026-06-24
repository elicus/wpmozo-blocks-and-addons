import { __ } from '@wordpress/i18n';

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	PanelBody,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoDimensions,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Block. */}
		<PanelBody title={ __( 'Block', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Block Background', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.blockBackground }
				gradientValue={ attributes.blockBGGradient }
				onColorChange={ ( newValue ) => setAttributes( { blockBackground: newValue } ) }
				onGradientChange={ ( newValue ) => setAttributes( { blockBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Block Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='block'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Block Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="block"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
	</> );
};
