import { __ } from "@wordpress/i18n";
import {
	PanelBody,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import {
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoBorder,
} from '../../../common/components/index';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});
	const	[ contentType, setContentType ] = useState('front');

	return ( <>
		<PanelBody title={ __( 'Logo Style', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<WpmozoColorPicker
				ColorKey="logo"
				props={props}
				ColorTypes={[
					{
						key: 'Background',
						label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
					}
				]}
			/>
			<WpmozoDimensions
				DimensionKey='logo'
				DimensionsTypes={{
					padding: true
				}}
				props={props}
			/>
			<WpmozoBorder
				BorderKey="logo"
				props={props}
			/>
		</PanelBody>
	</> );
};
