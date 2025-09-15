import { __ } from '@wordpress/i18n';

import {
	Notice,
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Configuration. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Twitter Username', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.twitterUsername }
				onChange={ ( newValue ) => setAttributes( { twitterUsername: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
				help={ __( 'Here you can enter the twitter username without @ for the button.', 'wpmozo-blocks-and-addons' ) }
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
			<br />
			<ToggleControl
				label={ __( 'Show Username', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showUsername }
				onChange={ ( newValue ) => setAttributes( { showUsername: newValue } ) }
			/><hr />
			<SelectControl
				label={ __( 'Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.buttonSize }
				options={ [
					{ value: 'small', label: __( 'Small', 'wpmozo-blocks-and-addons' ) },
					{ value: 'large', label: __( 'Large', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { buttonSize: newValue } ) }
			/>
		</PanelBody>
	</> );
};
