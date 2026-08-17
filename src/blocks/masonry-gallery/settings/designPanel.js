import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	ToggleControl,
	RangeControl
} from '@wordpress/components';
import {
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoBorder,
	WpmozoTypography,
	WpmozoIconpicker,
	MozoStates,
} from '../../../common/components/index';
import { useState } from 'react';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel_image');
						
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	return ( <>
		<PanelBody title={ __('Image Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel_image'} onToggle={()=> handleToggle('panel_image')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Image Style', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoBorder
						BorderKey={ isHover ? "imagehover" : "image" }
						props={props}
					/>
				) }
			/>
		</PanelBody>

		<PanelBody title={ __('Overlay', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
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
							},
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
					<RangeControl
						label={ __( 'Icon Size (px)', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.overlayIconSize }
						onChange={ ( newValue ) => setAttributes( { overlayIconSize: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 500 }
					/>
				</>
			)}
		</PanelBody>

		{ true === attributes.showCaption && (
			<PanelBody title={ __('Caption', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel_caption'} onToggle={()=> handleToggle('panel_caption')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Caption Style', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<>
							<WpmozoColorPicker
								ColorKey="caption"
								props={props}
								ColorTypes={[
									{
										key: isHover ? 'HoverColor' : 'Color',
										label: __( 'Caption Color', 'wpmozo-blocks-and-addons' ),
									}
								]}
							/>
							<WpmozoTypography
								TypographyKey={ isHover ? "captionHover" : "caption" }
								label={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
								props={props}
							/>
						</>
					) }
				/>
			</PanelBody>
		)}

		{ true === attributes.showLightbox && (
			<PanelBody title={ __('Lightbox', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Lightbox Colors', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker
							ColorKey="lightbox"
							props={props}
							ColorTypes={[
								{
									key: isHover ? 'HoverBackgroundColor' : 'BackgroundColor',
									label: __( 'Background Color', 'wpmozo-blocks-and-addons' ),
								},
								{
									key: isHover ? 'HoverExitIconColor' : 'ExitIconColor',
									label: __( 'Close Icon Color', 'wpmozo-blocks-and-addons' ),
								},
								{
									key: isHover ? 'HoverArrowColor' : 'ArrowColor',
									label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ),
								}
							]}
						/>
					) }
				/>
			</PanelBody>
		)}
	</> );
};
