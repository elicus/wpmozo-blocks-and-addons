import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	TextControl,
	RangeControl,
	ToggleControl,
	SelectControl,
	TextareaControl,
	Notice
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Configuration. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Tweet ID', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tweetId }
				onChange={ ( newValue ) => setAttributes( { tweetId: newValue } ) }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<TextareaControl
				label={ __( 'Fallback Content', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.fallbackContent }
				onChange={ ( newValue ) => setAttributes( { fallbackContent: newValue } ) }
			/>
			<hr />
			<ToggleControl
				label={ __( 'Do not track', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.doNotTrack }
				onChange={ ( newValue ) => setAttributes( { doNotTrack: newValue } ) }
			/>
			<Notice status="warning" isDismissible={false} className="wpmozo-field-warning">
				{ __( 'When set to on, the Tweet and its embedded page on your site are not used for purposes that include ', 'wpmozo-blocks-and-addons' ) }
				<a href="https://help.twitter.com/en/using-twitter/tailored-suggestions"
					title={ __( 'Personalized Suggestions', 'wpmozo-blocks-and-addons' ) } target="_blank"
				>
					{ __( 'Personalized Suggestions', 'wpmozo-blocks-and-addons' ) }
				</a>
				{ __( ' and ', 'wpmozo-blocks-and-addons' ) }
				<a href="https://help.twitter.com/en/safety-and-security/privacy-controls-for-tailored-ads"
					title={ __( 'Personalized Ads', 'wpmozo-blocks-and-addons' ) } target="_blank"
				>
					{ __( 'Personalized Ads', 'wpmozo-blocks-and-addons' ) }
				</a>.
			</Notice>
		</PanelBody>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<br />
			<ToggleControl
				label={ __( 'Cards', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.cards }
				onChange={ ( newValue ) => setAttributes( { cards: newValue } ) }
			/><hr />
			<ToggleControl
				label={ __( 'Conversation', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.conversation }
				onChange={ ( newValue ) => setAttributes( { conversation: newValue } ) }
			/><hr />
			<SelectControl
				label={ __( 'Theme', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.theme }
				options={ [
					{ value: 'light', label: __( 'Light', 'wpmozo-blocks-and-addons' ) },
					{ value: 'dark', label: __( 'Dark', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { theme: newValue } ) }
			/>
			<RangeControl
				label={ __( 'Max Width', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.maxWidth }
				onChange={ ( newValue ) => setAttributes( { maxWidth: newValue } ) }
				min={ 250 } max={ 550 } step={ 1 }
			/>
		</PanelBody>
	</> );
};
