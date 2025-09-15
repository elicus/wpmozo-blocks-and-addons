import { __ } from '@wordpress/i18n';

import {
	PanelBody,
} from '@wordpress/components';
import {
	WpmozoAlignment
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
		</PanelBody>
	</> );
};
