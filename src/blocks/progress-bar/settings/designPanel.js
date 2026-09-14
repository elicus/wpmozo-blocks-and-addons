import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
	WpmozoTextShadow,
	WpmozoRangeSize,
	MozoStates
} from "../../../common/components";
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [ colorTab, setColorTab ] = useState( 'normal' );
	const [ percentTab, setPercentTab ] = useState( 'normal' );
	const [openPanel, setOpenPanel] = useState('panel1');
								
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return ( <>
		<PanelBody title={ __( `${attributes.layout.replace(/(^|_)([a-z])/g, (_, separator, letter) => { return (separator ? " " : "") + letter.toUpperCase(); })} Styling`, 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			{'fixed' !== attributes.position && 
				<WpmozoAlignment
					label={ __( 'Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ (newValue) => setAttributes({barAlign: newValue } ) }
					value={ attributes.barAlign }
				/>
			}
			{ 'bar' === attributes.layout && (<>
				<WpmozoRangeSize 
					props={props}
					label={ __( 'Bar Width', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='barSize'
				/>
				<WpmozoRangeSize 
					props={props}
					label={ __( 'Bar Height', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='barHeight'
				/>
			</>) }

			{ 'bar' !== attributes.layout && (
				<RangeControl
					label={ __( 'Circle Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.circleSize }
					onChange={ (newValue) => setAttributes( { circleSize: newValue } ) }
					min={ 50 }
					max={ 700 }
					step={ 1 }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }

			<MozoStates
				value={hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={ props }
						label={ __( 'Bar Empty Color', 'wpmozo-blocks-and-addons' ) }
						ColorKey={ isHover ? "barEmptyHover" : "barEmpty" }
						ColorTypes={ [
							{key: 'Color', label: __('Bar Empty Color', 'wpmozo-blocks-and-addons')}
						] }
					/>
				) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={ props }
						label={ __( 'Bar Filled Color', 'wpmozo-blocks-and-addons' ) }
						ColorKey={ isHover ? "barFilledHover" : "barFilled" }
						ColorTypes={ [
							{key: 'Color', label: __('Bar Filled Color', 'wpmozo-blocks-and-addons')}
						] }
					/>
				) }
			/>
			{ 'bar' !== attributes.layout && (
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={ props }
							label={ __( 'Circle Background', 'wpmozo-blocks-and-addons' ) }
							ColorKey={ isHover ? "circleFillHover" : "circleFill" }
							ColorTypes={ [
								{key: 'Color', label: __('Circle Background Color', 'wpmozo-blocks-and-addons')}
							] }
						/>
					) }
				/>
			)}
			{ 'bar' === attributes.layout && (
				<WpmozoBorder props={props}
					BorderKey="bar"
					BorderTypes={ { border: true, radius: true } }
				/>
			) }
		</PanelBody>

		{ attributes.showNumber && (
			<PanelBody title={__('Percentage Text', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={ props }
							label={ __( 'Percentage Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey={ isHover ? "percentageHover" : "percentage" }
							ColorTypes={ [
								{key: 'Color', label: __('Percentage Text Color', 'wpmozo-blocks-and-addons')}
							] }
						/>
					) }
				/>

				{ 'bar' === attributes.layout && (
					<WpmozoAlignment
						label={ __( 'Percentage Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ (newValue) => setAttributes({percentAlign: newValue } ) }
						value={ attributes.percentAlign }
					/>
				) }
				<WpmozoTypography
					TypographyKey="percentage"
					props={props}
				/>
				<WpmozoTextShadow
					TextShadowKey="percentageTextShadow"
					props={props}
					label={ __( 'Percentage Text Shadow', 'wpmozo-blocks-and-addons' ) }
				/>
			</PanelBody>
		) }
	</> );
};
