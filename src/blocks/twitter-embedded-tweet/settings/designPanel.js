import { __ } from '@wordpress/i18n';

import {
	PanelBody,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Tweet. */}
		<PanelBody title={ __( 'Tweet', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Tweet Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tweetAlign }
				onChange={ ( newValue ) => setAttributes( { tweetAlign: newValue } ) }
			/>
			<WpmozoBorder props={props}
				label={ __( 'Tweet Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="tweet"
			/>
		</PanelBody>
	</> );
};
