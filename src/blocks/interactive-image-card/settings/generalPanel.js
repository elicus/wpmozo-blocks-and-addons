import { __ } from '@wordpress/i18n';
import {
	WpmozoMediaUploader,
} from '../../../common/components';
import {
	PanelBody,
	TextControl,
	TextareaControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.title }
				onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
			/>
			<TextareaControl
				label={ __( 'Content', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.content }
				onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<WpmozoMediaUploader props={props}
				attrKye="backImage"
			/>
		</PanelBody>
	</> );
};
