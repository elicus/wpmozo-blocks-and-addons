import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	ToggleControl,
    RangeControl,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography,
} from '../../../common/components/index';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
					
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}
	const [ deviceType, setDeviceType ] = useState('tablet'),
		[ textType, setTextType ] = useState('text'),
		dividerStyle = [
		{
			label: __( 'Solid', 'wpmozo-blocks-and-addons' ),
			value: 'solid'
		},
		{
			label: __( 'Dashed', 'wpmozo-blocks-and-addons' ),
			value: 'dashed'
		},
		{
			label: __( 'Dotted', 'wpmozo-blocks-and-addons' ),
			value: 'dotted'
		},
		{
			label: __( 'Double', 'wpmozo-blocks-and-addons' ),
			value: 'double'
		},
		{
			label: __( 'Groove', 'wpmozo-blocks-and-addons' ),
			value: 'groove'
		},
		{
			label: __( 'Ridge', 'wpmozo-blocks-and-addons' ),
			value: 'ridge'
		},
		{
			label: __( 'Inset', 'wpmozo-blocks-and-addons' ),
			value: 'inset'
		},
		{
			label: __( 'Outset', 'wpmozo-blocks-and-addons' ),
			value: 'outset'
		},
	];

	return ( <>
		<PanelBody title={ __( 'List', 'wpmozo-blocks-and-addons' ) }  opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<WpmozoAlignment
				label={__( 'Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { listAlignment: newValue } ) }
				value={ attributes.listAlignment }
			/>
			<ColorGradientControl
				colorValue={ attributes.globalItemBackgroundColor }
				gradientValue={ attributes.globalItemBackgroundGradient }
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
				label={ __("List Background") }
				onColorChange={ (newValue) => setAttributes({ globalItemBackgroundColor: newValue }) }
				onGradientChange={ (newValue) => setAttributes({ globalItemBackgroundGradient: newValue }) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Item Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<RangeControl
				label={ __( 'Indentation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.indentation }
				onChange={ ( newValue ) => setAttributes( { indentation: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
			<BaseControl
				className="wpmozo-button-tabs-wrap"
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'text' === textType ) ? true : false }
						onClick={ () => setTextType( 'text' ) }
					>
						{ __( 'Text', 'wpmozo-blocks-and-addons' ) }
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'link' === textType ) ? true : false }
						onClick={ () => setTextType( 'link' ) }
					>
						{ __( 'Link', 'wpmozo-blocks-and-addons' ) }
					</Button>
				</ButtonGroup>
				{ 'text' === textType &&
					<>
						<WpmozoColorPicker
							ColorKey="text"
							props={props}
							ColorTypes={[
								{
									key: 'Color',
									label: __( 'Text Color', 'wpmozo-blocks-and-addons' ),
								},
							]}
						/>
						<WpmozoTypography
							TypographyKey="text"
							props={props}
						/>
					</>
				}
				{ 'link' === textType &&
					<>
						<WpmozoColorPicker
							ColorKey="link"
							props={props}
							ColorTypes={[
								{
									key: 'Color',
									label: __( 'Link Color', 'wpmozo-blocks-and-addons' ),
								},
							]}
						/>
						<WpmozoTypography
							TypographyKey="link"
							props={props}
						/>
					</>
				}
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<RangeControl
				label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.iconFontSize }
				onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
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
		</PanelBody>
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
			<RangeControl
				label={ __( 'Thumbnail Width', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageWidth }
				onChange={ ( newValue ) => setAttributes( { imageWidth: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Divider', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
			<RangeControl
				label={ __( 'Divider Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.dividerSize }
				onChange={ ( newValue ) => setAttributes( { dividerSize: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
			<SelectControl
				label={ __( 'Divider Style', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.dividerStyle }
				options={dividerStyle}
				onChange={ ( newValue ) => setAttributes( { dividerStyle: newValue } ) }
			/>
			<WpmozoColorPicker
				ColorKey="divider"
				props={props}
				ColorTypes={[
					{
						key: 'Color',
						label: __( 'Divider Color', 'wpmozo-blocks-and-addons' ),
					},
				]}
			/>
			<ToggleControl
				label={ __( 'Hide Last Divider', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.lastDivider }
				onChange={ ( newValue ) => setAttributes( { lastDivider: newValue } ) }
			/>
			<WpmozoDimensions
				DimensionKey='divider'
				DimensionsTypes={{
					margin: true
				}}
				props={props}
			/>
		</PanelBody>
	</> );
};
