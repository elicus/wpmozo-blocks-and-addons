import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	BaseControl,
	ButtonGroup,
} from "@wordpress/components";
import {
	WpmozoBorder,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
} from '../../../common/components/index.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	
	const [ dayType, setDayType ]   = useState( 'normal' );
	const [ timeType, setTimeType ] = useState( 'normal' );

	return ( <>
		{/* Day. */}
		<PanelBody title={ __( 'Day', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === dayType ) ? true : false }
						onClick={ () => setDayType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === dayType ) ? true : false }
						onClick={ () => setDayType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === dayType && <>
					<WpmozoColorPicker
						ColorKey="day"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Day Text Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="day"
					/>
				</> }
				{ 'hover' === dayType && <>
					<WpmozoColorPicker
						ColorKey="dayHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Day Text Hover Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="dayHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Time. */}
		<PanelBody title={ __( 'Time', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === timeType ) ? true : false }
						onClick={ () => setTimeType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === timeType ) ? true : false }
						onClick={ () => setTimeType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === timeType && <>
					<WpmozoColorPicker
						ColorKey="time"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Time Text Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="time"
					/>
				</> }
				{ 'hover' === timeType && <>
					<WpmozoColorPicker
						ColorKey="timeHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Time Text Hover Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="timeHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Hour Item. */}
		<PanelBody title={ __( 'Hour Item', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={ props }
				ColorKey="hourItem"
				label={ __( 'Hour Items Background', 'wpmozo-blocks-and-addons' ) }
				ColorTypes={ [
					{ key: 'Background', label: __( 'All Items Background', 'wpmozo-blocks-and-addons' ) },
					{ key: 'BackgroundEven', label: __( 'Even Items Background', 'wpmozo-blocks-and-addons' ) },
					{ key: 'BackgroundOdd', label: __( 'Odd Items Background', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Hour Item Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='hourItem'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Hour Item Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="hourItem"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Block Styling. */}
		<PanelBody title={ __( 'Block Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Block Background', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.blockBackground }
				gradientValue={ attributes.blockBGGradient }
				onColorChange={ ( newValue ) => setAttributes( { blockBackground: newValue } ) }
				onGradientChange={ ( newValue ) => setAttributes( { blockBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Block Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='block'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Block Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="block"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
	</> );
};
