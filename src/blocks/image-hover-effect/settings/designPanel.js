import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	ToggleControl
} from "@wordpress/components";
import {
	WpmozoBorder
} from '../../../common/components/index';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Image Setting', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleControl
				label={ __( 'Force Fullwidth', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.forceFullwidth }
				onChange={ ( newValue ) => setAttributes( { forceFullwidth: newValue } ) }
			/>
			<WpmozoBorder
				props={props}
				BorderKey="image"
			/>
		</PanelBody>
	</> );
};
