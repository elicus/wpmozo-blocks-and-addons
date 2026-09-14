import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    TextControl,
    ToggleControl,
    SelectControl
} from "@wordpress/components";
import {
	WpmozoRangeSize
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
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
			<SelectControl
				label={ __( 'Position', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.position }
				options={ [
					{ value: 'default', label: __( 'Default', 'wpmozo-blocks-and-addons' ) },
					{ value: 'sticky', label: __( 'Sticky', 'wpmozo-blocks-and-addons' ) },
					{ value: 'fixed', label: __( 'Fixed', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { position: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			{ ('fixed' === attributes.position || 'sticky' === attributes.position) && (
				<WpmozoRangeSize 
					props={props}
					label={ __( 'Top', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='posTop'
				/>
			) }
			{ 'fixed' === attributes.position && (
				<WpmozoRangeSize 
					props={props}
					label={ __( 'Left', 'wpmozo-blocks-and-addons') }
					rangeSizeKey='posLeft'
				/>
			) }
		</PanelBody>
	</> );
};
