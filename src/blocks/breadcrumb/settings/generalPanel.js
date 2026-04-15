import { __ } from '@wordpress/i18n';
import {
	WpmozoMediaUploader,
} from '../../../common/components';
import {
	PanelBody,
	SelectControl,
	ToggleControl
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Breadcrumbs Settings', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Breadcrumbs Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.breadcrumbLayout }
				options={[
					{
						value: 'layout1',
						label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'layout2',
						label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ),
					},
				]}
				onChange={ ( newValue ) => setAttributes( { breadcrumbLayout: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Open link in new tab', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.linkTarget || false }
				onChange={ ( newValue ) => setAttributes( { linkTarget: newValue } ) }
				__nextHasNoMarginBottom={ true }
			/>
		</PanelBody>
	</> );
};
