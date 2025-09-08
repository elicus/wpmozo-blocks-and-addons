import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	TextControl,
	ToggleControl
} from "@wordpress/components";
import {
	WpmozoMediaUploader,
	WpmozoIconpicker
} from '../../../common/components/index';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Rotating Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { rotatingText: newValue } ) }
				value={ attributes.rotatingText }
			/>
			<ToggleControl
				label={__('Use Image', 'wpmozo-blocks-and-addons')}
				checked={attributes.useImage}
				onChange={(newValue) => setAttributes({useImage: newValue})}
			/>
			{ !attributes.useImage && ( <>
				<WpmozoIconpicker props={ props }
					label={ __( 'Select Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='icon'
					value={ attributes.icon }
					onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
				/>
			</>) }
			{ attributes.useImage && ( <>
				<WpmozoMediaUploader props={props}
					attrKye="image"
				/>
			</>) }
		</PanelBody>
	</> );
};
