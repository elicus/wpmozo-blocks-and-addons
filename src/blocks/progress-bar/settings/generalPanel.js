import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    TextControl,
    RangeControl,
    ToggleControl,
    SelectControl
} from "@wordpress/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	return ( <>
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={ [
					{ value: 'bar', label: __( 'Bar', 'wpmozo-blocks-and-addons' ) },
					{ value: 'circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
					{ value: 'half_circle', label: __( 'Half Circle', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { layout: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			{ 'bar' === attributes.layout && (
				<SelectControl
					label={ __( 'Bar Direction', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.barDirection }
					options={ [
						{ value: 'horizontal', label: __( 'Horizontal', 'wpmozo-blocks-and-addons' ) },
						{ value: 'vertical', label: __( 'Vertical', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ (newValue) => setAttributes( { barDirection: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
			) }
			{ 'bar' === attributes.layout && (
				<ToggleControl
					label={ __('Show Striped', 'wpmozo-blocks-and-addons') }
					checked={ attributes.showStriped }
					onChange={ (newValue) => setAttributes( { showStriped: newValue } ) }
					__nextHasNoMarginBottom={true}
				/>
			) }
			<ToggleControl
				label={ __( 'Show Progress Number', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showNumber }
				onChange={ (newValue) => setAttributes( { showNumber: newValue } ) }
				__nextHasNoMarginBottom={true}
			/>
			<RangeControl
				label={ __( 'Percentage (Preview in Editor)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.percentage }
				onChange={(newValue) => setAttributes({percentage: newValue})}
				min={0} max={100} step={1} allowReset={true}
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
		</PanelBody>
	</> );
};
