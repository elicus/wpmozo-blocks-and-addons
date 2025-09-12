import { __ } from '@wordpress/i18n';

import {
	Notice,
	PanelBody,
	TextControl,
	ToggleControl,
	TextareaControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Configuration. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextareaControl
				label={ __( 'Custom Share Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.customText }
				onChange={ ( newValue ) => setAttributes( { customText: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<TextControl
				label={ __( 'Url', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.customUrl }
				onChange={ ( newValue ) => setAttributes( { customUrl: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<TextControl
				label={ __( 'Hashtags', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.hashtags }
				onChange={ ( newValue ) => setAttributes( { hashtags: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<TextControl
				label={ __( 'Via', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.via }
				onChange={ ( newValue ) => setAttributes( { via: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<TextControl
				label={ __( 'Related', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.related }
				onChange={ ( newValue ) => setAttributes( { related: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/><hr />
			<ToggleControl
				label={ __( 'Do not track', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.doNotTrack }
				onChange={ ( newValue ) => setAttributes( { doNotTrack: newValue } ) }
			/>
			<Notice status="warning" isDismissible={false} className="wpmozo-field-warning">
				{ __( 'When set to on, the button and its embedded page on your site are not used for purposes that include ', 'wpmozo-blocks-and-addons' ) }
				<a href="https://help.twitter.com/en/using-twitter/tailored-suggestions"
					title={ __( 'Personalized Suggestions', 'wpmozo-blocks-and-addons' ) } target="_blank"
				>{ __( 'Personalized Suggestions', 'wpmozo-blocks-and-addons' ) }</a>
				{ __( ' and ', 'wpmozo-blocks-and-addons' ) }
				<a href="https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads"
					title={ __( 'Personalized Ads', 'wpmozo-blocks-and-addons' ) } target="_blank"
				>{ __( 'Personalized Ads', 'wpmozo-blocks-and-addons' ) }</a>.
			</Notice>
		</PanelBody>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>

		</PanelBody>
	</> );
};
