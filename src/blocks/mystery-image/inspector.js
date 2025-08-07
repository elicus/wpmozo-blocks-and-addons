// inspector.js
import { __ } from '@wordpress/i18n';
import {InspectorControls} from '@wordpress/block-editor';
import {PanelBody,ToggleControl,RangeControl} from '@wordpress/components';
import {WpmozoColorPicker, WpmozoIconpicker} from "../../common/components";

const Inspector = ({ attributes, setAttributes }) => {

	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});

    return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={__('Settings', 'block-development-examples')}>
					<ToggleControl
						label={__('Enable Lightbox', 'wpmozo-blocks-and-addons')}
						checked={attributes.showLightbox}
						onChange={(newValue) => setAttributes({showLightbox: newValue})}
					/>
                </PanelBody>
            </InspectorControls>
			<InspectorControls key="styles" group="styles">
				<PanelBody title={ __('Overlay', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={open}>
					<ToggleControl
						label={__('Enable Overlay', 'wpmozo-blocks-and-addons')}
						checked={attributes.enableOverlay}
						onChange={(newValue) => setAttributes({enableOverlay: newValue})}
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
				<PanelBody title={ __('Lightbox', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
					<WpmozoColorPicker
						ColorKey="lightbox"
						props={props}
						ColorTypes={[
							{
								key: 'BackgroundColor',
								label: __( 'Lightbox Background Color', 'wpmozo-blocks-and-addons' ),
							},
							{
								key: 'CloseIconColor',
								label: __( 'Close Icon Color', 'wpmozo-blocks-and-addons' ),
							}
						]}
					/>

				</PanelBody>
			</InspectorControls>
		</>
    );
};

export default Inspector;
