import { __ } from '@wordpress/i18n';

import {
	PanelBody,
} from '@wordpress/components';
import {
	
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Share Button. */}
		<PanelBody title={ __( 'Share Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			
		</PanelBody>
	</> );
};
