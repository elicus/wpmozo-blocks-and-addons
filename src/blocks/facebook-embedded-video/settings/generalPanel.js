import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	TextControl,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Configuration. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Facebook APP ID', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.fbAppId }
				onChange={ ( newValue ) => setAttributes( { fbAppId: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<TextControl
				label={ __( 'Video URL', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.videoURL }
				onChange={ ( newValue ) => setAttributes( { videoURL: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
				help={ __( 'The absolute URL of the facebook video.', 'wpmozo-blocks-and-addons' ) }
			/>
			<RangeControl
				label={ __( 'Frame Width (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.frameWidth }
				onChange={ ( newValue ) => setAttributes( { frameWidth: newValue } ) }
				min={220} step={1} max={1000}
			/><hr />
			<ToggleControl
				label={ __( 'Enable lazy loading', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.lazyLoading }
				onChange={ ( newValue ) => setAttributes( { lazyLoading: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Autoplay', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.autoplay }
				onChange={ ( newValue ) => setAttributes( { autoplay: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Allow Fullscreen', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.allowFullScreen }
				onChange={ ( newValue ) => setAttributes( { allowFullScreen: newValue } ) }
			/>
		</PanelBody>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<br />
			<ToggleControl
				label={ __( 'Display Text', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.displayText }
				onChange={ ( newValue ) => setAttributes( { displayText: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Display Captions', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.displayCaption }
				onChange={ ( newValue ) => setAttributes( { displayCaption: newValue } ) }
			/>
		</PanelBody>
	</> );
};
