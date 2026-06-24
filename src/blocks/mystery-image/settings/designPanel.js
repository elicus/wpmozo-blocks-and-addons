import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';
import { WpmozoColorPicker, WpmozoIconpicker } from "../../../common/components";

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Overlay', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<ToggleControl
				label={ __( 'Enable Overlay', 'wpmozo-blocks-and-addons' ) }
				checked={attributes.enableOverlay}
				onChange={(newValue) => setAttributes({enableOverlay: newValue})}
			/>
			{ true === attributes.enableOverlay && ( <>
				<WpmozoColorPicker props={props}
					ColorKey="overlay"
					ColorTypes={ [
						{ key: 'BackgroundColor', label: __( 'Overlay Background Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<RangeControl
					label={ __( 'Icon Size (px)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.overlayIconSize }
					onChange={ ( newValue ) => setAttributes( { overlayIconSize: newValue } ) }
					min={ 1 } step={ 1 } max={ 500 }
				/>
				<WpmozoColorPicker
					ColorKey="overlay"
					props={props}
					ColorTypes={ [
						{ key: 'IconColor', label: __( 'Overlay Icon Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoIconpicker props={props}
					label={ __( 'Overlay Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='overlayIcon'
					value={ attributes.overlayIcon }
					onChange={ (newValue) => setAttributes( { overlayIcon: newValue } ) }
				/>
			</> ) }
		</PanelBody>
		{ true === attributes.showLightbox && (
			<PanelBody title={ __('Lightbox', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker
					ColorKey="lightbox"
					props={props}
					ColorTypes={ [
						{ key: 'BackgroundColor', label: __( 'Lightbox Background Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'CloseIconColor', label: __( 'Close Icon Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			</PanelBody>
		) }
	</> );
};
