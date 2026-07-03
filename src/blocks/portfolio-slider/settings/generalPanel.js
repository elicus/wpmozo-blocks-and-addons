import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	return (
		<PanelBody title={ __( 'General Settings', 'wpmozo-blocks-and-addons' ) } initialOpen={ true }>
			<p>General Settings Panel (Skeleton)</p>
		</PanelBody>
	);
};
