import { PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const DesignPanel = ( { attributes, setAttributes } ) => {
	return (
		<PanelBody title={ __( 'Design Settings', 'wpmozo-blocks-and-addons' ) } initialOpen={ false }>
			<p>Design Settings Panel (Skeleton)</p>
		</PanelBody>
	);
};
