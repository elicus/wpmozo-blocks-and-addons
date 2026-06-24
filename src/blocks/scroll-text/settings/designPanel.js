import { __ } from '@wordpress/i18n';

import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl,
	__experimentalBoxControl as BoxControl
} from "@wordpress/components";
import {
	WpmozoBorder,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker, WpmozoAlignment,
} from '../../../common/components/index.js';
import { useState } from "@wordpress/element";

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ textType, setTextType ] = useState( 'normal' );

	return ( <>
		{/* Text Style. */}
		{ ( 'color' === attributes.scrollEffect || 'blur' === attributes.scrollEffect ) && (
			<PanelBody title={ __( 'Text Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
				{ ( 'color' === attributes.scrollEffect ) && (
					<WpmozoColorPicker props={props}
						ColorKey="activeText"
						label={ __( 'Active/Visible Text Color', 'wpmozo-blocks-and-addons' ) }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Active Text Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
				{ ( 'blur' === attributes.scrollEffect ) && (
					<RangeControl
						label={ __( 'Normal Text Blur (in px)', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.textBlurLevel }
						onChange={ ( newValue ) => setAttributes( { textBlurLevel: newValue } ) }
						min={1} step={1} max={20} allowReset={true}
					/>
				) }
			</PanelBody>
		) }
		{/* Text. */}
		<PanelBody title={ __( 'Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment
				label={__('Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({textAlign: newValue})}
				value={attributes.textAlign}
			/>
			<BaseControl className="wpmozo-button-tabs-wrap" __nextHasNoMarginBottom={ true }>
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === textType ) ? true : false }
						onClick={ () => setTextType( 'normal' ) }
					>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === textType ) ? true : false }
						onClick={ () => setTextType( 'hover' ) }
					>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'normal' === textType && <>
					<WpmozoColorPicker
						ColorKey="text"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={props}
						TypographyKey="text"
					/>
				</> }
				{ 'hover' === textType && <>
					<WpmozoColorPicker
						ColorKey="textHover"
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Text Hover Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey="textHover"
					/>
				</> }
			</BaseControl>
		</PanelBody>
		{/* Block Styling. */}
		<PanelBody title={ __( 'Block Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoDimensions props={props}
				label={ __( 'Dimension', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='block'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
			<WpmozoBorder props={props}
				BorderKey="block"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
	</> );
};
