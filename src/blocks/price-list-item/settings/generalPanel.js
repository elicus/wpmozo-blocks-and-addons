import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoRangeSize,
	WpmozoBorder
} from '../../../common/components/index';
import { headingLevelsList } from '../../../common/utils.js';


export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [ deviceType, setDeviceType ] = useState('tablet'),
		[ textType, setTextType ] = useState('text'),
		iconShape = [
		{
			label: __( 'Square', 'wpmozo-blocks-and-addons' ),
			value: 'square'
		},
		{
			label: __( 'Circle', 'wpmozo-blocks-and-addons' ),
			value: 'circle'
		},
		{
			label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ),
			value: 'hexagon'
		}
	];

	return ( <>
		<PanelBody title={ __( 'Alignment', 'wpmozo-blocks-and-addons' ) }  initialOpen={false}>
			<WpmozoAlignment
				label={__( 'Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { textAlignment: newValue } ) }
				value={ attributes.textAlignment }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="icon"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'ShapBackground', label: __( 'Shape Background', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography
				TypographyKey="icon"
				props={props}
				TypoTypes={{
					'FontSize': true
				}}
			/>
			<ToggleControl
				label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.styleIcon }
				onChange={ ( newValue ) => setAttributes( { styleIcon: newValue } ) }
				__nextHasNoMarginBottom
			/>
			{ attributes.styleIcon && ( <>
				<SelectControl
					label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.currencySymbolPosition }
					options={ iconShape }
					onChange={ (newValue) => setAttributes( { currencySymbolPosition: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			</> ) }
		</PanelBody>
		<PanelBody title={ __( 'Thumbnail', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoBorder props={props}
				BorderKey="thumbnail"
				BorderTypes={ { border: true,radius: true } }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Name', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="name"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Name Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<BaseControl label={ __( 'Heading Lavel', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button
							key={`heading-level-${index}`}
							isPressed={item.value === attributes.nameHeadingLavel}
							onClick={() => setAttributes({nameHeadingLavel: item.value})}
						>{item.label}</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<WpmozoTypography
				TypographyKey="name"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Price', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="price"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Price Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography
				TypographyKey="price"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Currency', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<SelectControl
				label={ __( 'Currency Symbol Position', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.currencySymbolPosition }
				options={ [
					{ value: 'left', label: __( 'Left', 'wpmozo-blocks-and-addons' ) },
					{ value: 'right', label: __( 'Right', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { currencySymbolPosition: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<WpmozoColorPicker props={props}
				ColorKey="currency"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Currency Symbol Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography
				TypographyKey="currency"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="description"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography
				TypographyKey="description"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={ __( 'Period', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="period"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Period Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoTypography
				TypographyKey="period"
				props={props}
			/>
		</PanelBody>
	</> );
};
