import { __ } from "@wordpress/i18n";

import {
	PanelBody,
	TextControl,
	TextareaControl,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	Icon
} from "@wordpress/components";
import {
	WpmozoIconpicker,
	WpmozoMediaUploader
} from '../../../common/components/index';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Tilt Image. */}
		<PanelBody title={ __( 'Tilt Image', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<WpmozoMediaUploader props={props}
				attrKye="image"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<TextControl
				label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.title }
				onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
			/>
			<TextareaControl
				label={ __( 'Content', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.content }
				onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Use Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.useIcon }
				onChange={ ( newValue ) => setAttributes( { useIcon: newValue } ) }
			/>
			{ attributes.useIcon &&
				<WpmozoIconpicker props={props}
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='icon'
					value={ attributes.icon }
					onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
				/>
			}
			<ToggleControl
				label={ __( 'Show Button', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showButton }
				onChange={(newValue) => setAttributes({showButton: newValue})}
			/>
			{ attributes.showButton && <>
				<TextControl
					label={ __( 'Button Text', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonText }
					onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) }
				/>
				<TextControl
					label={ __( 'Button Url', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.buttonUrl }
					onChange={ ( newValue ) => setAttributes( { buttonUrl: newValue } ) }
				/>
				<BaseControl className="wpmozo-button-tabs-wrap"
					label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
				>
					<ButtonGroup>
						<Button className="wpmozo-button-tabs-btn"
							isPressed={ ( 'same' === attributes.buttonLinkTarget ) ? true : false }
							onClick={ () => setAttributes( { buttonLinkTarget: 'same'} ) }
							icon={ <Icon icon="admin-links"/> }
							label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) }
						/>
						<Button className="wpmozo-button-tabs-btn"
							isPressed={ ( 'external' === attributes.buttonLinkTarget ) ? true : false }
							onClick={ () => setAttributes( { buttonLinkTarget: 'external' } ) }
							icon={ <Icon icon="external"/> }
							label={ __( 'External', 'wpmozo-blocks-and-addons' ) }
						/>
					</ButtonGroup>
				</BaseControl>
			</> }
		</PanelBody>
	</> );
};
