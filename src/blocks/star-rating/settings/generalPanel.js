import { __ } from '@wordpress/i18n';
import {
	WpmozoDimensions,
	WpmozoMediaUploader,
} from '../../../common/components';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
	TextareaControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return (
		<>
			{/* Configuration. */}
			<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
				<TextControl
					label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.title }
					onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
					__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
				/>
				<TextControl
					label={ __( 'Rating', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.rating }
					onChange={ ( newValue ) => setAttributes( { rating: newValue } ) }
					__next40pxDefaultSize={ true }  __nextHasNoMarginBottom={ true }
				/>
				<TextControl
					label={ __( 'Rating Out Of', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.ratingOutOf }
					onChange={ ( newValue ) => setAttributes( { ratingOutOf: newValue } ) }
					__next40pxDefaultSize={ true }  __nextHasNoMarginBottom={ true }
				/>
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
					label={ __( 'Image Alt Text', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.imageCustomAlt }
					onChange={ ( newValue ) => setAttributes( { imageCustomAlt: newValue } ) }
					__next40pxDefaultSize={ true }  __nextHasNoMarginBottom={ true }
				/>
				<TextareaControl
					label={ __( 'Description', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.description }
					onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
				/>
			</PanelBody>
			{/* Display */}
			<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
				<ToggleControl
					label={ __( 'Hide Title', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.hideTitle }
					onChange={ ( newValue ) => setAttributes( { hideTitle: newValue } ) }
				/>
				<SelectControl
					label={ __( 'Rating Icon', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.rateIcon }
					options={ [
						{ value: 'default', label: __( 'Default/Stars', 'wpmozo-blocks-and-addons' ) },
						{ value: 'like', label: __( 'Like', 'wpmozo-blocks-and-addons' ) },
						{ value: 'heart', label: __( 'Heart', 'wpmozo-blocks-and-addons' ) },
						{ value: 'smiley', label: __( 'Smiley', 'wpmozo-blocks-and-addons' ) },
						{ value: 'smiley_scale', label: __( 'Smiley Mood Scale', 'wpmozo-blocks-and-addons' ) },
						{ value: 'trophy', label: __( 'Trophy', 'wpmozo-blocks-and-addons' ) },
						{ value: 'sun', label: __( 'Sun', 'wpmozo-blocks-and-addons' ) },
						{ value: 'drop', label: __( 'Drop', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { rateIcon: newValue } ) }
				/>
				<SelectControl
					label={ __( 'Rating Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.ratePosition }
					options={ [
						{ value: 'after_title', label: __( 'After Title', 'wpmozo-blocks-and-addons' ) },
						{ value: 'below_title', label: __( 'Below Title', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { ratePosition: newValue } ) }
				/>
				<ToggleControl
					label={ __( 'Show Rating Number', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.showRateNum }
					onChange={ ( newValue ) => setAttributes( { showRateNum: newValue } ) }
				/>
			</PanelBody>
		</>
	);
};
