import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	TextControl,
	SelectControl,
} from "@wordpress/components";
import {
	WpmozoMediaUploader,
	WpmozoIconpicker,
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const { image } = attributes;

	// Safely handle undefined image and its url to prevent errors.
	const imageUrl = image && image.url ? image.url : '';
	
	return ( <>
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Item Type', 'wpmozo-blocks-and-addons' ) }
				value={attributes.stackType}
				options={ [
					{ value: 'image', label: __( 'Image', 'wpmozo-blocks-and-addons' ) },
					{ value: 'icon', label: __( 'Icon', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { stackType: newValue } ) }
			/>
			{ 'icon' === attributes.stackType && (
				<WpmozoIconpicker props={props}
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='stackIcon'
					value={ attributes.stackIcon }
					onChange={ ( newValue ) => setAttributes( { stackIcon: newValue } ) }
				/>
			) }
			{ 'image' === attributes.stackType && (
				<WpmozoMediaUploader props={props}
					attrKye="image"
					imageSrc={ imageUrl }
					onSelect={ ( media ) => setAttributes( { image: media } ) }
				/>
			) }
			{ (attributes.parentAtts.showTooltip && 'custom' === attributes.parentAtts.tooltipType) && (<TextControl
				label={ __( 'Tooltip Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tooltipText }
				onChange={ ( newValue ) => setAttributes( { tooltipText: newValue } ) }
			/>) }
		</PanelBody>
	</> );
};
