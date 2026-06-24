import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    SelectControl,
    RangeControl
} from '@wordpress/components';
import {
	WpmozoColorCombo,
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography
} from '../../../common/components/index';
import { wpmozo_is_empty } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Toggle Switch. */}
		<PanelBody title={ __( 'Toggle Switch' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<SelectControl
				label={ __( 'Switch Type', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.toggleSwitchType }
				options={ [
					{ value: 'rounded', label: __( 'Rounded', 'wpmozo-blocks-and-addons' ) },
					{ value: 'rectangle', label: __( 'Rectangle', 'wpmozo-blocks-and-addons' ) },
					{ value: 'toggle', label: __( 'Toggle', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { toggleSwitchType: newValue } ) }
				__next40pxDefaultSize __nextHasNoMarginBottom
			/>
			<WpmozoColorCombo
				label={ __( 'Switch Color', 'wpmozo-blocks-and-addons' ) }
				normal={ {
					ColorKey: "toggleSwitch",
					props: props,
					ColorTypes: [ 
						{ key: 'Color', label: __( 'Switch Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'OnState', label: __( 'Switch Color (on state)', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Background', label: __( 'Switch Background', 'wpmozo-blocks-and-addons' ) },
						{ key: 'OnStateBackground', label: __( 'Switch Background (on state)', 'wpmozo-blocks-and-addons' ) } 
					]
				} }
				hover={ {
					ColorKey: "toggleSwitch",
					props: props,
					ColorTypes: [ 
						{ key: 'HoverColor', label: __( 'Switch Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'HoverOnState', label: __( 'Switch Color (on state)', 'wpmozo-blocks-and-addons' ) },
						{ key: 'HoverBackground', label: __( 'Switch Background', 'wpmozo-blocks-and-addons' ) },
						{ key: 'HoverOnStateBackground', label: __( 'Switch Background (on state)', 'wpmozo-blocks-and-addons' ) } 
					]
				} }
			/>
			<WpmozoAlignment
				label={__( 'Switch Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { toggleSwitchAlignment: newValue } ) }
				value={ attributes.toggleSwitchAlignment }
			/>
			<WpmozoDimensions props={props}
				DimensionKey='toggleSwitchDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
		{/* Title One. */}
		<PanelBody title={ __( 'Title One' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="titleOne"
				ColorTypes={ [ 
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoTypography props={props}
				TypographyKey="titleOne"
			/>
			{ ! wpmozo_is_empty( attributes.toggleOneIcon ) && ( <>
				<RangeControl
					label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleOneIconSize }
					onChange={ ( newValue ) => setAttributes( { titleOneIconSize: newValue } ) }
					min={ 0 } max={ 200 }
				/>
				<RangeControl
					label={ __( 'Icon Spacing', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleOneIconSpacing }
					onChange={ ( newValue ) => setAttributes( { titleOneIconSpacing: newValue } ) }
					min={ 0 } max={ 200 }
				/>
				<WpmozoColorPicker props={props}
					ColorKey="titleOneIcon"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
			</> ) }
		</PanelBody>
		{/* Title Two. */}
		<PanelBody title={ __( 'Title Two' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="titleTwo"
				ColorTypes={ [ 
					{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoTypography
				TypographyKey="titleTwo"
				props={props}
			/>
			{ ! wpmozo_is_empty( attributes.toggleTwoIcon ) && ( <>
				<RangeControl
					label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleTwoIconSize }
					onChange={ ( newValue ) => setAttributes( { titleTwoIconSize: newValue } ) }
					min={ 0 } max={ 200 }
				/>
				<RangeControl
					label={ __( 'Icon Spacing', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleTwoIconSpacing }
					onChange={ ( newValue ) => setAttributes( { titleTwoIconSpacing: newValue } ) }
					min={ 0 } max={ 200 }
				/>
				<WpmozoColorPicker props={props}
					ColorKey="titleTwoIcon"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
			</> ) }
		</PanelBody>
		{/* Content One. */}
		<PanelBody title={ __( 'Content One' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="contentOne"
				ColorTypes={ [ 
					{ key: 'Color', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __( 'Content Background Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoAlignment
				label={__( 'Content One Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { contentOneAlignment: newValue } ) }
				value={ attributes.contentOneAlignment }
			/>
			<WpmozoTypography props={props}
				TypographyKey="contentOne"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='contentOneDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
				onChange={ ( type, NewPadding ) => {
					if ( 'padding' === type ) {
						setAttributes( { contentOneDimensionspadding: NewPadding } )
					} else {
						setAttributes( { contentOneDimensionsmargin: NewPadding } )
					}
				} }
			/>
		</PanelBody>
		{/* Content Two. */}
		<PanelBody title={ __( 'Content Two' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<WpmozoColorPicker props={props}
				ColorKey="contentTwo"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __( 'Content Background Color', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<WpmozoAlignment
				label={__( 'Content Two Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { contentTwoAlignment: newValue } ) }
				value={ attributes.contentTwoAlignment }
			/>
			<WpmozoTypography props={props}
				TypographyKey="contentTwo"
			/>
			<WpmozoDimensions props={props}
				DimensionKey='contentTwoDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
	</> );
};
