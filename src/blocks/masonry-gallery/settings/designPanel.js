import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	ToggleControl,
    RangeControl
} from '@wordpress/components';
import {
	WpmozoColorCombo,
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography, WpmozoIconpicker
} from '../../../common/components/index';
import { wpmozo_is_empty } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{ true === attributes.showLightbox && (
			<>
				<PanelBody title={ __('Lightbox', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
					<WpmozoColorPicker
						ColorKey="lightbox"
						props={props}
						ColorTypes={[
							{
								key: 'BackgroundColor',
								label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
							},
							{
								key: 'ExitIconColor',
								label: __( 'Close Icon Color', 'wpmozo-blocks-and-addons' ),
							},
							{
								key: 'ArrowColor',
								label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>
				</PanelBody>
			</>
		)}
		<PanelBody title={ __('Overlay', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ToggleControl
				label={ __( 'Enable Overlay', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.enableOverlay }
				onChange={ ( newValue ) => setAttributes( { enableOverlay: newValue } ) }
			/>
			{ true === attributes.enableOverlay && (
				<>
					<WpmozoColorPicker
						ColorKey="overlay"
						props={props}
						ColorTypes={[
							{
								key: 'BackgroundColor',
								label: __( 'Overlay Background Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>
					<RangeControl
						label={ __( 'Icon Size (px)', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.overlayIconSize }
						onChange={ ( newValue ) => setAttributes( { overlayIconSize: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 500 }
					/>
					<WpmozoColorPicker
						ColorKey="overlay"
						props={props}
						ColorTypes={[
							{
								key: 'IconColor',
								label: __( 'Overlay Icon Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>
					<WpmozoIconpicker
						label={__('Overlay Icon', 'wpmozo-blocks-and-addons')}
						iconPickerKey='overlayIcon'
						props={props}
						value={attributes.overlayIcon}
						onChange={(newValue) => setAttributes({overlayIcon: newValue})}
					/>
				</>
			)}
		</PanelBody>
	</> );
};
