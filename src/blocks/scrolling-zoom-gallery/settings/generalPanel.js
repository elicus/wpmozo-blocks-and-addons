import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    RangeControl,
    ToggleControl,
	TextareaControl,
    SelectControl,
	BaseControl,
	ButtonGroup,
	Button
} from "@wordpress/components";
import {
	WpmozoColorPicker, WpmozoIconpicker, WpmozoMediaUploader,
	WpmozoRangeSize
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<RangeControl
				label={__('On Load Visibility', 'wpmozo-blocks-and-addons')}
				value={attributes.onLoadVisibility}
				onChange={(newValue) => setAttributes({onLoadVisibility: newValue})}
				min={0} step={0.1} max={1}
			/>
			<TextControl
				label={ __( 'No Images Text', 'wpmozo-blocks-and-addons' ) }
				value={attributes.noImagesText ?? ""}
				onChange={(newValue) => setAttributes({noImagesText: newValue})}
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
		</PanelBody>
	</> );
};
