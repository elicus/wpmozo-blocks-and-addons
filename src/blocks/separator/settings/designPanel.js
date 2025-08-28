import { __ } from '@wordpress/i18n';

import {
    __experimentalColorGradientControl as ColorGradientControl
} from "@wordpress/block-editor";
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
    WpmozoTypography,
    WpmozoColorPicker,
    WpmozoAlignment,
} from '../../../common/components/index';
import { useState } from "@wordpress/element";

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ textStyleType, setTextStyleType ] = useState( 'normal' );

	return ( <>
		<PanelBody title={ __( 'Separator Styling', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<RangeControl
				label={ __( 'Separator Thickness', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.separatorThickness }
				onChange={ ( newValue ) => setAttributes( { separatorThickness: newValue } ) }
				min={ 0 } step={ 1 } max={ 100 }
			/>
			{ 'line' === attributes.separatorType && 'solid' === attributes.lineStyle &&
				<ColorGradientControl
					colorValue={ attributes.separatorColor }
					gradientValue={ attributes.separatorGradient }
					colors={ [
						{ name: 'red', color: '#f00' },
						{ name: 'white', color: '#fff' },
						{ name: 'blue', color: '#00f' },
					] }
					gradients={ [
						{
							name: __( 'Vivid cyan blue to vivid purple', 'wpmozo-blocks-and-addons' ),
							gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
							slug: 'vivid-cyan-blue-to-vivid-purple',
						},
						{
							name: __( 'Light green cyan to vivid green cyan', 'wpmozo-blocks-and-addons' ),
							gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
							slug: 'light-green-cyan-to-vivid-green-cyan',
						},
						{
							name: __( 'Luminous vivid amber to luminous vivid orange', 'wpmozo-blocks-and-addons' ),
							gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
							slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
						},
					] }
					label={ __( 'Separator Color', 'wpmozo-blocks-and-addons' ) }
					onColorChange={ ( newValue ) => setAttributes( { separatorColor: newValue } ) }
					onGradientChange={ ( newValue ) => setAttributes( { separatorGradient: newValue } ) }
				/> 
			}
			{ ( 'shadow' === attributes.separatorType || ( 'line' === attributes.separatorType && 'solid' !== attributes.lineStyle ) ) &&
				<WpmozoColorPicker props={props}
					ColorKey="shadow"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Separator Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
			}
		</PanelBody>
		{ 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith &&
			<PanelBody title={ __( 'Image Styling', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
				<SelectControl
					label={ __( 'Image Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.imagePosition }
					options={ [
						{ value: 'center', label: __( 'Center', 'wpmozo-blocks-and-addons' ) },
						{ value: 'left', label: __( 'Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'right', label: __( 'Right', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { imagePosition: newValue } ) }
				/>
				<RangeControl
					label={ __( 'Image Width', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.imageWidth }
					onChange={ ( newValue ) => setAttributes( { imageWidth: newValue } ) }
					min={ 0 } step={ 1 } max={ 100 }
				/>
			</PanelBody>
		}
		{ 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith &&
			<PanelBody title={ __( 'Icon Styling', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
				<SelectControl
					label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.iconPosition }
					options={ [
						{ value: 'center', label: __( 'Center', 'wpmozo-blocks-and-addons' ) },
						{ value: 'left', label: __( 'Left', 'wpmozo-blocks-and-addons' ) },
						{ value: 'right', label: __( 'Right', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { iconPosition: newValue } ) }
				/>
				<WpmozoColorPicker props={props} 
					ColorKey="icon"
					ColorTypes={ [ 
						{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
				<ToggleControl
					label={ __( 'Use Icon Font Size', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.enableIconFontSize }
					onChange={ ( newValue ) => setAttributes( { enableIconFontSize: newValue } ) }
				/>
				{ true === attributes.enableIconFontSize && 
					<RangeControl
						label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.iconFontSize }
						onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
						min={ 0 } step={ 1 } max={ 120 }
					/>
				}
				<ToggleControl
					label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.styleIcon }
					onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
				/>
				{ true === attributes.styleIcon && 
					<SelectControl
						label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.iconShape }
						options={ [
							{ value: 'square', label: __( 'Square', 'wpmozo-blocks-and-addons' ) },
							{ value: 'circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
							{ value: 'hexagon', label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ) },
						] }
						onChange={ ( newValue ) => setAttributes( { iconShape: newValue } ) }
					/>
				}
				{ true === attributes.styleIcon && 
					<WpmozoColorPicker props={props}
						ColorKey="shape"
						ColorTypes={ [
							{ key: 'Background', label: __( 'Shape Background', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				}
				{ true === attributes.styleIcon && 
					<ToggleControl
						label={ __( 'Display Shape Border', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.enableShapeBorder }
						onChange={ ( newValue ) => setAttributes( { enableShapeBorder: newValue } ) }
					/>
				}
				{ true === attributes.styleIcon && true === attributes.enableShapeBorder &&
					<WpmozoColorPicker props={props}
						ColorKey="shapeBorder"
						ColorTypes={ [ 
							{ key: 'Color', label: __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				}
			</PanelBody>
		}
		{ 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith &&
			<PanelBody title={ __( 'Text Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" initialOpen={false}>
				<BaseControl className="wpmozo-button-tabs-wrap">    
					<ButtonGroup>
						<Button className="wpmozo-button-tabs-btn"
							isPressed={ ( 'normal' === textStyleType ) ? true : false }
							onClick={ () => setTextStyleType( 'normal' ) }
						>{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }</Button>
						<Button className="wpmozo-button-tabs-btn"
							isPressed={ ( 'hover' === textStyleType ) ? true : false }
							onClick={ () => setTextStyleType( 'hover' ) }
						>{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }</Button>
					</ButtonGroup>
					{ 'normal' === textStyleType && <>
						<WpmozoColorPicker props={props}
							ColorKey="textNormal"
							ColorTypes={ [ 
								{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
						<WpmozoTypography props={props}
							TypographyKey="textNormal"
						/>
					</> }
					{ 'hover' === textStyleType && <>
						<WpmozoColorPicker props={props}
							ColorKey="textHover"
							ColorTypes={ [
								{ key: 'Color', label: __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
						<WpmozoTypography props={props}
							TypographyKey="textHover"
						/>
					</> }
				</BaseControl>
				<WpmozoAlignment
					label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons') }
					onChange={ ( newValue ) => setAttributes( { textAlign: newValue } ) }
					value={ attributes.textAlign }
				/>
			</PanelBody>
		}
	</> );
};
