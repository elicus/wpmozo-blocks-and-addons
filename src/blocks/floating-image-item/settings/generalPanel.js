import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
} from '@wordpress/components';
import { WpmozoMediaUploader } from '../../../common/components/index';
import { useState } from "@wordpress/element";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const WPMozoEditorObj = wpmozo_bna_editor_object;

	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});

	const [ contentType, setContentType ] = useState('front');

	return ( <>
		<PanelBody title={ __( 'General Settings', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<WpmozoMediaUploader
				attrKye="image"
				props={props}
				imageSrc={attributes.image ? attributes.image.url : WPMozoEditorObj.placeholderImg}
				onSelect={ ( media ) => setAttributes( { image: media} ) }
			/>
			<TextControl
				label={ __( 'Alt Text', 'wpmozo-blocks-and-addons' ) }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
				value={ attributes.altText }
				onChange={ ( newValue ) => setAttributes( { altText: newValue } ) }
			/>
		</PanelBody>
	</> );
};
