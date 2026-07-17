import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	SelectControl,
	RangeControl,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl
} from "@wordpress/components";
import {
	WpmozoDimensions,
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography
} from '../../../common/components/index';

import { headingLevelsList } from '../../../common/utils.js';
import { useState } from 'react';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
									
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return ( <>
		<PanelBody title={ __( 'Tilt Setting', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<RangeControl
				label={ __( 'Max Rotation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tiltMax }
				onChange={ ( newValue ) => setAttributes( { tiltMax: newValue } ) }
				min={1} max={100}
			/>
			<RangeControl
				label={ __( 'Perspective', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tiltPerspective }
				onChange={ ( newValue ) => setAttributes( { tiltPerspective: newValue } ) }
				min={100} max={2000}
			/>
			<RangeControl
				label={ __( 'Scale on Hover', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tiltScale }
				onChange={ ( newValue ) => setAttributes( { tiltScale: newValue } ) }
				min={1} step={0.1} max={3}
			/>
			<RangeControl
				label={ __( 'Speed', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tiltSpeed }
				onChange={ ( newValue ) => setAttributes( { tiltSpeed: newValue } ) }
				min={10} max={1000}
			/>
			<ToggleControl
				label={ __( 'Disable on Mobile', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.tiltMobile }
				onChange={ ( newValue ) => setAttributes( { tiltMobile: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Use Glare', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.useGlare }
				onChange={ ( newValue ) => setAttributes( { useGlare: newValue } ) }
			/>
			{ attributes.useGlare &&
				<RangeControl
					label={ __( 'Max Glare', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.tiltMaxGlare }
					onChange={ ( newValue ) => setAttributes( { tiltMaxGlare: newValue } ) }
					min={0.1} max={1} step={0.1}
				/>
			}
			<ToggleControl
				label={ __( 'Use 3D Effect', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.use3dEffect }
				onChange={ ( newValue) => setAttributes( { use3dEffect: newValue } ) }
			/>
			{ attributes.use3dEffect &&
				<RangeControl
					label={ __( '3D Effect', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.tilt3dValue }
					onChange={ ( newValue ) => setAttributes( { tilt3dValue: newValue } ) }
					min={10} max={100}
				/>
			}
			<ToggleControl
				label={ __( 'Use Disable X/Y axis', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.useDisableAxis }
				onChange={ ( newValue ) => setAttributes( { useDisableAxis: newValue } ) }
			/>
			{ attributes.useDisableAxis &&
				<BaseControl className="wpmozo-button-tabs-wrap"
					label={ __( 'Disable X/Y axis', 'wpmozo-blocks-and-addons' ) }
				>
					<ButtonGroup>
						<Button className="wpmozo-button-tabs-btn"
							isPressed={ ( 'x' === attributes.tiltDisableAxis) ? true : false }
							onClick={ () => setAttributes( { tiltDisableAxis: 'x' } ) }
							label={ __( 'X axis', 'wpmozo-blocks-and-addons' ) }
							text={ __( 'X axis', 'wpmozo-blocks-and-addons' ) }
						/>
						<Button className="wpmozo-button-tabs-btn"
							isPressed={ ( 'y' === attributes.tiltDisableAxis) ? true : false }
							onClick={ () => setAttributes( { tiltDisableAxis: 'y' } ) }
							label={ __( 'Y axis', 'wpmozo-blocks-and-addons' ) }
							text={ __( 'Y axis', 'wpmozo-blocks-and-addons' ) }
						/>
					</ButtonGroup>
				</BaseControl>
			}
		</PanelBody>
		<PanelBody title={ __( 'Overlay', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<ToggleControl
				label={ __( 'Image Overlay', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.useOverlay }
				onChange={ ( newValue ) => setAttributes( { useOverlay: newValue } ) }
			/>
			{ attributes.useOverlay &&
				<WpmozoColorPicker props={props}
					ColorKey="overlay"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Overlay Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			}
		</PanelBody>
		{attributes.useIcon && 
			<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
				<WpmozoColorPicker props={props}
					ColorKey="icon"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoAlignment
					label={ __( 'Icon Alignment', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.iconAlign }
					onChange={ ( newValue ) => setAttributes( { iconAlign: newValue}  ) }
				/>
				<ToggleControl
					label={ __( 'Use Icon Font Size', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.useIconFontSize }
					onChange={ ( newValue ) => setAttributes( { useIconFontSize: newValue } ) }
				/>
				{ attributes.useIconFontSize &&
					<RangeControl
						label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.iconFontSize }
						onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
						min={0} max={100} step={1}
					/>
				}
			</PanelBody>
		}
		<PanelBody title={ __( 'Content Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
			<WpmozoDimensions props={props}
				DimensionKey='content'
				DimensionsTypes={ { padding: true } }
			/>
			<SelectControl
				label={ __( 'Content Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.contentAlignment }
				options={ [
					{ value: 'top-left', label: __( 'Top Left', 'wpmozo-blocks-and-addons' ) },
					{ value: 'top-center', label: __( 'Top Center', 'wpmozo-blocks-and-addons' ) },
					{ value: 'top-right', label: __( 'Top Right', 'wpmozo-blocks-and-addons' ) },
					{ value: 'center-left', label: __( 'Center Left', 'wpmozo-blocks-and-addons' ) },
					{ value: 'center',  label: __( 'Center', 'wpmozo-blocks-and-addons' ) },
					{ value: 'center-right', label: __( 'Center Right', 'wpmozo-blocks-and-addons' ) },
					{ value: 'bottom-left', label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ) },
					{ value: 'bottom-center', label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ) },
					{ value: 'bottom-right', label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { contentAlignment: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Content on Hover', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.contentOnHover }
				onChange={ ( newValue ) => setAttributes( { contentOnHover: newValue } ) }
			/>
			{ attributes.contentOnHover &&
				<SelectControl
					label={ __( 'Content Alignment', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.contentAnimationDirection }
					options={ [
						{ value: 'top', label: __( 'Top To Bottom', 'wpmozo-blocks-and-addons' ) },
						{ value: 'left', label: __( 'Left To Right', 'wpmozo-blocks-and-addons' ) },
						{ value: 'right', label: __( 'Right To Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'bottom', label: __( 'Bottom To Top', 'wpmozo-blocks-and-addons' ) },
						{ value: 'off', label: __( 'No Animation', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { contentAnimationDirection: newValue } ) }
				/>
			}
		</PanelBody>
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
			<WpmozoColorPicker props={props}
				ColorKey="title"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) } >
				<ButtonGroup>
					{ headingLevelsList.map( ( item, key ) => (
						<Button key={ item.value }
							isPressed={ ( item.value === attributes.titleLevel ) ? true : false }
							onClick={ ( newValue ) => setAttributes( { titleLevel: newValue } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoAlignment
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.titleAlign }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
			/>
			<WpmozoTypography props={props}
				TypographyKey="title"
			/>
		</PanelBody>
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel6'} onToggle={()=> handleToggle('panel6')}>
			<WpmozoColorPicker props={props}
				ColorKey="description"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoAlignment
				label={ __( 'Description Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.descriptionAlign }
				onChange={ ( newValue ) => setAttributes( { descriptionAlign: newValue } ) }
			/>
			<WpmozoTypography props={props}
				TypographyKey="description"
			/>
		</PanelBody>
		{ attributes.showButton &&
			<PanelBody title={ __( 'Button Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel7'} onToggle={()=> handleToggle('panel7')}>
				<WpmozoColorPicker props={props}
					ColorKey="button"
					ColorTypes={[
						{ key: 'TextColor', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'BackgroundColor', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography props={props}
					TypographyKey="button"
				/>
				<WpmozoBorder props={props}
					BorderKey="button"
				/>
				<WpmozoDimensions props={props}
					DimensionKey='button'
					DimensionsTypes={ { padding: true } }
				/>
				<WpmozoDimensions props={props}
					DimensionKey='buttonwrap'
					DimensionsTypes={ { margin: true } }
				/>
			</PanelBody>
		}
	</> );
};
