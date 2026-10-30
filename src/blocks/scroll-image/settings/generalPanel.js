import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	SelectControl,
	TextControl,
	RangeControl
} from "@wordpress/components";
import {
	WpmozoMediaUploader,
	WpmozoAlignment,
	WpmozoRangeSize
} from '../../../common/components/index';
import { wpmozo_is_empty } from '../../../common/utils.js';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	let containerWidth = NaN;

	if ( ! wpmozo_is_empty( attributes.containerWidth ) ) {
		containerWidth = parseFloat(attributes.containerWidth.replace(attributes.containerWidthUnit, ''));
	}

	return ( <>
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<WpmozoMediaUploader 
					attrKye={'image'}
					props={ props }
					onSelect={(media) => {
						setAttributes({
							image: media?.url ? media.url : '',
							imageAlt: media?.alt ? media.alt : '',
						});
					}}
					label={ __( 'Image', 'wpmozo-blocks-and-addons' ) }
				/>
			<TextControl
				label={ __( 'Image Title Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageTitle }
				onChange={ ( newValue ) => setAttributes( { imageTitle: newValue } ) }
			/>
			<TextControl
				label={ __( 'Image Alt', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageCustomAlt }
				onChange={ ( newValue ) => setAttributes( { imageCustomAlt: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Scroll Direction', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.scrollDirection }
				options={ [
					{ value: 'top', label: __( 'Top', 'wpmozo-blocks-and-addons' ) },
					{ value: 'bottom', label: __( 'Bottom', 'wpmozo-blocks-and-addons' ) },
					{ value: 'left', label: __( 'Left', 'wpmozo-blocks-and-addons' ) },
					{ value: 'right', label: __( 'Right', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { scrollDirection: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<RangeControl
				label={ __( 'Scroll Speed', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.scrollSpeed }
				onChange={ ( newValue ) => setAttributes( { scrollSpeed: newValue } ) }
				min={1} max={15} step={1}
			/>
			<WpmozoRangeSize props={props}
				label={ __( 'Image Container Width', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='containerWidth'
			/>
			{  containerWidth > 0 &&
				<WpmozoAlignment
					label={__( 'Image Alignment', 'wpmozo-blocks-and-addons')}
					onChange={ ( newValue ) => setAttributes( { imageAlignment: newValue } ) }
					value={ attributes.imageAlignment }
				/>
			}
			<WpmozoRangeSize props={props}
				label={ __( 'Image Container Height', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='containerHeight'
			/>
		</PanelBody>
	</> );
};
