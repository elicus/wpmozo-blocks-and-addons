import { __ } from '@wordpress/i18n';

import {
	PanelBody,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Video. */}
		<PanelBody title={ __( 'Video', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Video Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.videoAlign }
				onChange={ ( newValue ) => setAttributes( { videoAlign: newValue } ) }
			/>
			<WpmozoBorder props={props}
				label={ __( 'Video Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="video"
			/>
		</PanelBody>
	</> );
};
