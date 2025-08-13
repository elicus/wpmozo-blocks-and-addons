import { __ } from "@wordpress/i18n";
import {useState} from "@wordpress/element";
import {
	PanelBody,
	TextControl,
	BaseControl,
	ButtonGroup,
	Button,
	Icon,
} from "@wordpress/components";
import {WpmozoMediaUploader} from "../../../common/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});
	const	[ contentType, setContentType ] = useState('front');

	return ( <>
		<PanelBody title={ __( 'General Settings', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<WpmozoMediaUploader
				attrKye="logo"
				props={props}
				imageSrc={attributes.logo ? attributes.logo.url : WPMozoEditorObj.placeholderImg}
				onSelect={ ( media ) => setAttributes( { logo: media } ) }
			/>
			<TextControl
				label={ __( 'Alt Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.altText }
				onChange={ ( newValue ) => setAttributes( { altText: newValue } ) }
			/>
			<TextControl
				label={ __( 'Link', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.link }
				onChange={ ( newValue ) => setAttributes( { link: newValue } ) }
			/>
			<BaseControl
				label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
				className="wpmozo-button-tabs-wrap"
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'same' === attributes.linkTarget ) ? true : false }
						onClick={ () => setAttributes( { linkTarget: 'same' } ) }
						icon={ <Icon icon="admin-links" /> }
						label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) }
					/>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'external' === attributes.linkTarget ) ? true : false }
						onClick={ () => setAttributes( { linkTarget: 'external' } ) }
						icon={ <Icon icon="external" /> }
						label={ __( 'External', 'wpmozo-blocks-and-addons' ) }
					/>
				</ButtonGroup>
			</BaseControl>
		</PanelBody>
	</> );
};
