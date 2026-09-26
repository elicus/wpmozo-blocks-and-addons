import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
} from '@wordpress/components';
import { WpmozoMediaUploader, WpmozoRangeSize } from '../../../common/components/index';
import { useState } from "@wordpress/element";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const WPMozoEditorObj = wpmozo_bna_editor_object;

	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});

	const [ contentType, setContentType ] = useState('front');

	return ( <>
		<PanelBody title={ __( 'General Settings', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
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
		<PanelBody title={ __( 'Image Position', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<WpmozoRangeSize props={props}
				label={ __( 'Horizontal Align', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='horizontalAlign'
				min={0}
				max={1500}
				step={1}
			/>
			<WpmozoRangeSize props={props}
				label={ __( 'Vertical Align', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='verticalAlign'
				min={0}
				max={1500}
				step={1}
			/>
		</PanelBody>
	</> );
};
