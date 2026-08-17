import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl } from '@wordpress/components';
import { WpmozoColorPicker, WpmozoIconpicker, MozoStates } from "../../../common/components";
import { useState } from 'react';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [openPanel, setOpenPanel] = useState('panel1');
							
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return ( <>
		<PanelBody title={ __( 'Overlay', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
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
				<WpmozoIconpicker props={props}
					label={ __( 'Overlay Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='overlayIcon'
					value={ attributes.overlayIcon }
					onChange={ (newValue) => setAttributes( { overlayIcon: newValue } ) }
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
			</> ) }
		</PanelBody>
		{ true === attributes.showLightbox && (
			<PanelBody title={ __('Lightbox', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
				<WpmozoColorPicker
					ColorKey="lightbox"
					props={props}
					ColorTypes={ [
						{ key: 'BackgroundColor', label: __( 'Lightbox Background Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Close Icon Colors', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker
							ColorKey="lightbox"
							props={props}
							ColorTypes={ [
								{ key: isHover ? 'HoverCloseIconColor' : 'CloseIconColor', label: __( 'Close Icon Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
			</PanelBody>
		) }
	</> );
};
