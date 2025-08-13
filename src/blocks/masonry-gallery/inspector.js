// inspector.js
/**
 * External dependencies
 */
import { find } from 'lodash';

/**
 * WordPress dependencies
 */
import { store as noticesStore } from '@wordpress/notices';
import { __, sprintf } from '@wordpress/i18n';
import { store as blockEditorStore, InspectorControls } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	PanelBody,
	ToggleControl,
	RangeControl
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import useGetMedia from '../../common/components/wpmozo-block-gallery/use-get-media';
import useImageSizes from '../../common/components/wpmozo-block-gallery/use-image-sizes';
import { WpmozoGetImageSizeAttributes } from '../../common/utils';
import {WpmozoColorPicker, WpmozoIconpicker} from "../../common/components";


export default function Inspector( props ) {

	const {
		attributes,
		setAttributes,
	} = props;

	props = Object.assign({}, props, {preAttributes: {}});

	return (
		<>
			<InspectorControls key="controls">
				<PanelBody title={ __( 'Gallery settings', 'wpmozo-blocks-and-addons' ) }>
					<RangeControl
						label={ __( 'Custom Gutter size (px)', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.customGutterSize }
						onChange={ ( newValue ) => setAttributes( { customGutterSize: newValue } ) }
						min={ 0 }
						step={ 1 }
						max={ 100 }
					/>
					<RangeControl
						label={ __( 'Number Of Columns', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.numberOfColumns }
						onChange={ ( newValue ) => setAttributes( { numberOfColumns: newValue } ) }
						min={ 2 }
						step={ 1 }
						max={ 10 }
					/>
					<ToggleControl
						label={ __( 'Show Caption', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showCaption }
						onChange={ ( newValue ) => setAttributes( { showCaption: newValue } ) }
					/>
					<ToggleControl
						label={ __( 'Enable Lightbox', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showLightbox }
						onChange={ ( newValue ) => setAttributes( { showLightbox: newValue } ) }
					/>

				</PanelBody>
			</InspectorControls>
			<InspectorControls key="styles" group="styles">
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
										label: __( 'Exit Icon Color', 'wpmozo-blocks-and-addons' ),
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
			</InspectorControls>
		</>
	);
};
