import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	SelectControl
} from "@wordpress/components";
import {
	WpmozoMediaUploader
} from '../../../common/components/index';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	let hoverEffects = [
		{
			label: __( 'Radial', 'wpmozo-blocks-and-addons' ),
			value: 'radial'
		},
		{
			label: __( 'Glow', 'wpmozo-blocks-and-addons' ),
			value: 'glow'
		},
		{
			label: __( 'Rotate', 'wpmozo-blocks-and-addons' ),
			value: 'rotate'
		},
		{
			label: __( 'Flash', 'wpmozo-blocks-and-addons' ),
			value: 'flash'
		},
		{
			label: __( 'Flash Instant', 'wpmozo-blocks-and-addons' ),
			value: 'flash_instant'
		},
		{
			label: __( 'Diagonal', 'wpmozo-blocks-and-addons' ),
			value: 'diagonal'
		},
		{
			label: __( 'Glitch', 'wpmozo-blocks-and-addons' ),
			value: 'glitch'
		},
		{
			label: __( 'Slide Glitch', 'wpmozo-blocks-and-addons' ),
			value: 'slide_glitch'
		}
	];

	return ( <>
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<WpmozoMediaUploader props={props}
				attrKye="image"
			/>
			<SelectControl
				label={ __( 'Hover Effect', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.hoverEffect }
				options={ hoverEffects }
				onChange={ (newValue) => setAttributes( { hoverEffect: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
		</PanelBody>
	</> );
};
