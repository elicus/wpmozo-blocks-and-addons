import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	ToggleControl,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {WpmozoDimensions, WpmozoColorPicker, WpmozoTypography} from '../../../common/components/index';


export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [ contentType, setContentType ] = useState('front');
	const [ textType, setTextType ] = useState('normal');

	return ( <>
		<PanelBody title={ __( 'Item Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" initialOpen={true}>
			<BaseControl
				className="wpmozo-button-tabs-wrap"
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'normal' === textType ) ? true : false }
						onClick={ () => setTextType( 'normal' ) }
					>
						{ __( 'Normal', 'wpmozo-blocks-and-addons' ) }
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'hover' === textType ) ? true : false }
						onClick={ () => setTextType( 'hover' ) }
					>
						{ __( 'Hover', 'wpmozo-blocks-and-addons' ) }
					</Button>
				</ButtonGroup>
				{ 'normal' === textType &&
					<>
						<WpmozoColorPicker
							ColorKey="textNormal"
							props={props}
							ColorTypes={[
								{
									key: 'Color',
									label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
								},
							]}
						/>
						<WpmozoTypography
							TypographyKey="textNormal"
							props={props}
						/>
					</>
				}
				{ 'hover' === textType &&
					<>
						<WpmozoColorPicker
							ColorKey="textHover"
							props={props}
							ColorTypes={[
								{
									key: 'Color',
									label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
								},
							]}
						/>
						<WpmozoTypography
							TypographyKey="textHover"
							props={props}
						/>
					</>
				}
			</BaseControl>
		</PanelBody>
		{ 'icon' === attributes.markerType &&
			<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
				<ToggleControl
					label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.styleIcon }
					onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
				/>
				{ true === attributes.styleIcon &&
					<SelectControl
						label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.iconShape }
						options={[
							{
								value: 'square',
								label: __( 'Square', 'wpmozo-blocks-and-addons' ),
							},
							{
								value: 'circle',
								label: __( 'Circle', 'wpmozo-blocks-and-addons' ),
							},
							{
								value: 'hexagon',
								label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ),
							},
						]}
						onChange={ ( newValue ) => setAttributes( { iconShape: newValue } ) }
					/>
				}
				{ true === attributes.styleIcon &&
					<WpmozoColorPicker
						ColorKey="shape"
						props={props}
						ColorTypes={[
							{
								key: 'Background',
								label: __( 'Shape Background', 'wpmozo-blocks-and-addons' ),
							},
						]}
					/>
				}
				{ true === attributes.styleIcon &&
					<WpmozoColorPicker
						ColorKey="icon"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ),
							},
						]}
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
					<WpmozoColorPicker
						ColorKey="shapeBorder"
						props={props}
						ColorTypes={[
							{
								key: 'Color',
								label: __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ),
							},
						]}
					/>
				}
			</PanelBody>
		}
		<PanelBody title={ __( 'Spacing', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<WpmozoDimensions
				DimensionKey='item'
				label={ __( 'Item Spacing', 'wpmozo-blocks-and-addons' ) }
				DimensionsTypes={{
					margin: true,
					padding:true,
				}}
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Background', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<ColorGradientControl
				colorValue={ attributes.itemBackgroundColor }
				gradientValue={ attributes.itemBackgroundGradient }
				colors={ [
					{ name: 'red', color: '#f00' },
					{ name: 'white', color: '#fff' },
					{ name: 'blue', color: '#00f' },
				] }
				gradients={[
					{
						name: 'Vivid cyan blue to vivid purple',
						gradient:
							'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
						slug: 'vivid-cyan-blue-to-vivid-purple',
					},
					{
						name: 'Light green cyan to vivid green cyan',
						gradient:
							'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
						slug: 'light-green-cyan-to-vivid-green-cyan',
					},
					{
						name: 'Luminous vivid amber to luminous vivid orange',
						gradient:
							'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
						slug: 'luminous-vivid-amber-to-luminous-vivid-orange',
					},
				]}
				label={ __("Item Background") }
				onColorChange={ (newValue) => setAttributes({ itemBackgroundColor: newValue }) }
				onGradientChange={ (newValue) => setAttributes({ itemBackgroundGradient: newValue }) }
			/>
		</PanelBody>
	</> );
};
