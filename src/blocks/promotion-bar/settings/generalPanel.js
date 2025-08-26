import { __ } from '@wordpress/i18n';
import { getSettings as getDateSettings } from '@wordpress/date';

import {
	PanelBody,
	TextControl,
	BaseControl,
	ToggleControl,
	SelectControl,
	DateTimePicker,
	TextareaControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import {
	WpmozoMediaUploader
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const { timezone } = getDateSettings();

	return ( <>
		{/* Date & Time. */}
		<PanelBody title={ __( 'Date & Time', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<DateTimePicker
				className="wpmozo-date-time-picker"
				currentDate={ attributes.dateTime || new Date() }
				onChange={ ( value ) => {
					// Make sure the time is set in UTC, so that we can easily remove the timezone offset from WP Settings.
					const UTCValue = value + 'Z';
					const UTCdate  = new Date( UTCValue );

					// Remove the timezone offset received from WP Settings.
					UTCdate.setMilliseconds( UTCdate.getMilliseconds() - timezone.offset * 60 * 60 * 1000 );

					// Convert to Unix timestamp (seconds, not ms)
					const timestamp = Math.floor( UTCdate.getTime() / 1000 );
					console.log('timestamp:: ', timestamp);
					

					setAttributes( {
						dateTimeUTC: UTCdate, // full Date object
						dateTime: value, // original value string
						dateTimeTimestamp: timestamp, // Unix timestamp
					} );
				} }
				is12Hour={ true }
				__nextRemoveResetButton={ true }
				__nextRemoveHelpButton={ true }
			/>
		</PanelBody>
		{/* Content. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<TextControl
				label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
				value={ attributes.title || '' }
			/>
			<TextareaControl
				label={ __( 'Description', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
				value={ attributes.description || '' }
			/>
			<hr />
			<ToggleControl
				label={ __( 'Show Image', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showImage || false }
				onChange={ ( newValue ) => setAttributes( { showImage: newValue } ) }
				__nextHasNoMarginBottom={ true }
			/>
			{ ( attributes.showImage ) && ( <>
				<WpmozoMediaUploader attrKye="image" props={ props }
					label={ __( 'Image', 'wpmozo-blocks-and-addons' ) }
				/>
				<TextControl
					label={ __( 'Image Alt Text', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.imageAlt }
					onChange={ ( newValue ) => setAttributes( { imageAlt: newValue } ) }
					__next40pxDefaultSize={ true }  __nextHasNoMarginBottom={ true }
				/>
			</> ) }
			<hr />
			<ToggleControl
				label={ __( 'Show Button', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showButton }
				onChange={ ( newValue ) => setAttributes( { showButton: newValue } ) }
			/>
			{ attributes.showButton && <>
				<TextControl
					label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonText }
					onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
				/>
				<TextControl
					label={ __( 'Button URL', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { buttonUrl: newValue } ) }
					value={ attributes.buttonUrl }
				/>
				<ToggleGroupControl
					label={ __( 'Button Link Target', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonLinkTarget }
					onChange={ ( newValue ) => setAttributes( { buttonLinkTarget: newValue } ) }
				>
					<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
			</> }
		</PanelBody>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<SelectControl
				label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={ [
					{ value: 'layout1', label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ) },
					{ value: 'layout2', label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ) },
					{ value: 'layout3', label: __( 'Layout 3', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<BaseControl label={ __( 'Hide Days', 'wpmozo-blocks-and-addons' ) }>
				<ToggleControl
					label={ __( 'Hide/Show days box in timer.', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.hideDays }
					onChange={ ( newValue ) => setAttributes( { hideDays: newValue } ) }
				/>
			</BaseControl>
			<SelectControl
				label={ __( 'Display Labels', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.displayLabel }
				options={ [
					{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
					{ value: 'full', label: __( 'Full Label', 'wpmozo-blocks-and-addons' ) },
					{ value: 'short', label: __( 'Short Label', 'wpmozo-blocks-and-addons' ) },
					{ value: 'single', label: __( 'Single Character', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { displayLabel: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<BaseControl label={ __( 'Display Labels In Stack', 'wpmozo-blocks-and-addons' ) }>
				<ToggleControl
					label={ __( 'Show stacked (In new line) label.', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.stackLabel }
					onChange={ ( newValue ) => setAttributes( { stackLabel: newValue } ) }
				/>
			</BaseControl>
		</PanelBody>
	</> );
};
