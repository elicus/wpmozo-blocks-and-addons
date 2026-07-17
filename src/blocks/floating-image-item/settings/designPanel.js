import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	__experimentalUnitControl
} from '@wordpress/components';
import { WpmozoBorder, WpmozoSize } from '../../../common/components/index';
import { useState } from "@wordpress/element";

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const WPMozoEditorObj = wpmozo_bna_editor_object;

	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});
	const [openPanel, setOpenPanel] = useState('panel1');
		
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	const [ contentType, setContentType ] = useState('front');

	const floatingImageEffects = [
		{
			label: __( 'Up Down', 'wpmozo-blocks-and-addons' ),
			value: 'up_down'
		},
		{
			label: __( 'Left Right', 'wpmozo-blocks-and-addons' ),
			value: 'left_right'
		},
		{
			label: __( 'No Effect', 'wpmozo-blocks-and-addons' ),
			value: 'no_effect'
		}
	];
	const speedCurveOptions = [
		{
			label: __( 'Ease-In-Out', 'wpmozo-blocks-and-addons' ),
			value: 'ease-in-out'
		},
		{
			label: __( 'Ease', 'wpmozo-blocks-and-addons' ),
			value: 'ease'
		},
		{
			label: __( 'Ease-In', 'wpmozo-blocks-and-addons' ),
			value: 'ease-in'
		},
		{
			label: __( 'Ease-Out', 'wpmozo-blocks-and-addons' ),
			value: 'ease-out'
		},
		{
			label: __( 'Linear', 'wpmozo-blocks-and-addons' ),
			value: 'linear'
		}
	];
	const animationRepeat = [
		{
			label: __( 'Infinite', 'wpmozo-blocks-and-addons' ),
			value: 'infinite'
		},
		{
			label: __( 'Initial', 'wpmozo-blocks-and-addons' ),
			value: 'initial'
		},
	];

	return ( <>
		<PanelBody title={ __( 'Image Position', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')} >
			<__experimentalUnitControl
				label={ __( 'Horizontal Align', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.horizontalAlign }
				onChange={ ( newValue ) => setAttributes( { horizontalAlign: newValue } ) }
				__next40pxDefaultSize = {true}
			/>
			<__experimentalUnitControl
				label={ __( 'Vertical Align', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.verticalAlign }
				onChange={ ( newValue ) => setAttributes( { verticalAlign: newValue } ) }
				__next40pxDefaultSize = {true}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Image Animation', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<SelectControl
				label={ __( 'Floating Effect', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationEffect }
				options={floatingImageEffects}
				onChange={ ( newValue ) => setAttributes( { animationEffect: newValue } ) }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
			<RangeControl
				label={ __( 'Animation Delay', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationDelay }
				onChange={ ( newValue ) => setAttributes( { animationDelay: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 5000 }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
			<RangeControl
				label={ __( 'Animation Duration', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationDuration }
				onChange={ ( newValue ) => setAttributes( { animationDuration: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 9000 }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
			<SelectControl
				label={ __( 'Animation Speed Curve', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.speedCurve }
				options={speedCurveOptions}
				onChange={ ( newValue ) => setAttributes( { speedCurve: newValue } ) }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
			<SelectControl
				label={ __( 'Animation Repeat', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationRepeat }
				options={animationRepeat}
				onChange={ ( newValue ) => setAttributes( { animationRepeat: newValue } ) }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Image Sizing', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<WpmozoSize
				SizeKey="image"
				props={props}
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
			<WpmozoBorder
				BorderKey="image"
				props={props}
			/>
		</PanelBody>
	</> );
};
