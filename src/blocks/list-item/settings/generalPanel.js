import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";
import {
	PanelBody,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import {WpmozoIconpicker, WpmozoMediaUploader} from "../../../common/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [ contentType, setContentType ] = useState('front');
	const [ textType, setTextType ] = useState('normal');

	return ( <>
		{/* Gallery settings. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.text }
				onChange={ ( newValue ) => setAttributes( { text: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Image/Icon as Thumbnail', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.markerType }
				options={ [{
					value: 'icon',
					label: __( 'Use Icon', 'wpmozo-blocks-and-addons' ),
				},
					{
						value: 'image',
						label: __( 'Use Image', 'wpmozo-blocks-and-addons' ),
					},]
				}
				onChange={ ( newValue ) => setAttributes( { markerType: newValue } ) }
			/>
			{ 'icon' === attributes.markerType &&
				<WpmozoIconpicker
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='markerIcon'
					props={ props }
					value={ attributes.markerIcon }
					onChange={ ( newValue ) => setAttributes( { markerIcon: newValue } ) }
				/>
			}
			{ 'image' === attributes.markerType &&
				<WpmozoMediaUploader
					attrKye="markerImage"
					props={props}
				/>
			}
		</PanelBody>
	</> );
};
