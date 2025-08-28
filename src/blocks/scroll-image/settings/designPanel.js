import { __ } from '@wordpress/i18n';

import {
	PanelBody
} from "@wordpress/components";
import {
	WpmozoBorder
} from '../../../common/components/index';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Image Setting', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoBorder props={props}
				BorderKey="image"
			/>
		</PanelBody>
	</> );
};
