import { __ } from "@wordpress/i18n";

import {
    PanelBody,
    TextControl,
    TextareaControl,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    ToggleControl,
    SelectControl,
    Icon
} from "@wordpress/components";
import {
    WpmozoMediaUploader,
    WpmozoIconpicker,
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Card Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.title }
				onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
			/>
			<WpmozoMediaUploader props={props}
				label={ __( 'Card Image', 'wpmozo-blocks-and-addons' ) }
				attrKye="image"
			/>
			<TextareaControl
				label={ __( 'Description', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { description: newValue } ) }
				value={attributes.description}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<WpmozoIconpicker props={props}
				label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
				iconPickerKey='icon'
				value={ attributes.icon }
				onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Button', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
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
					label={ __( 'Button Url', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { buttonUrl: newValue } ) }
					value={ attributes.buttonUrl }
				/>
				<ToggleGroupControl
					label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonLinkTarget }
					onChange={ ( newValue ) => setAttributes( { buttonLinkTarget: newValue } ) }
				>
					<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
				<SelectControl
					label={ __( 'Button Media Type', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonMediaType }
					options={ [
						{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
						{ value: 'icon', label: __( 'Icon', 'wpmozo-blocks-and-addons' ) },
						{ value: 'image', label: __( 'Image', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { buttonMediaType: newValue } ) }
				/>
				{ 'none' !== attributes.buttonMediaType && <>
					{ 'icon' === attributes.buttonMediaType &&
						<WpmozoIconpicker props={props}
							label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
							iconPickerKey='buttonIcon'
							value={ attributes.buttonIcon }
							onChange={ ( newValue ) => setAttributes( { buttonIcon: newValue } ) }
						/>
					}
					{ 'image' === attributes.buttonMediaType &&
						<WpmozoMediaUploader props={props}
							attrKye="buttonImage"
						/>
					}
					<ToggleGroupControl
						label={ 'icon' === attributes.buttonMediaType ? __( 'Icon Position', 'wpmozo-blocks-and-addons' ) : __( 'Image Position', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.buttonMediaPosition }
						onChange={ ( newValue ) => setAttributes( { buttonMediaPosition: newValue } ) }
					>
						<ToggleGroupControlOption icon={ <Icon icon="external"/> } value="before" label="Before" />
						<ToggleGroupControlOption value="after" label="After" />
					</ToggleGroupControl>
					<ToggleControl
						label={ 'icon' === attributes.buttonMediaType ? __( 'Show Icon On Hover', 'wpmozo-blocks-and-addons' ) : __( 'Show Image On Hover', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showMediaOnHover }
						onChange={ ( newValue ) => setAttributes( { showMediaOnHover: newValue } ) }
					/>
				</> }
			</> }
		</PanelBody>
	</> );
};
