import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	__experimentalUnitControl
} from '@wordpress/components';
import { WpmozoBorder, MozoStates, WpmozoRangeSize } from '../../../common/components/index';
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
		<PanelBody title={ __( 'Image Sizing', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<WpmozoRangeSize props={props}
				label={ __( 'Width', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='imagewidth'
				min={0}
				max={1500}
				step={1}
			/>
			<WpmozoRangeSize props={props}
				label={ __( 'Height', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='imageheight'
				min={0}
				max={1500}
				step={1}
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
		<PanelBody title={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoBorder props={ props }
						label={ isHover ? __( 'Image Hover Border', 'wpmozo-blocks-and-addons' ) : __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey={ isHover ? "imageHover" : "image" }
					/>
				) }
			/>
		</PanelBody>
	</> );
};
