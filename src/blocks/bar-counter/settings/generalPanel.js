import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    RangeControl,
    ToggleControl,
    SelectControl,
	BaseControl,
	ButtonGroup,
	Button
} from "@wordpress/components";
import {
    WpmozoColorPicker,
    WpmozoRangeSize
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layoutType }
				options={ [
					{ value: 'layout1', label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ) },
					{ value: 'layout2', label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ (newValue) => setAttributes( { layoutType: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<TextControl
				label={ __( 'Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.title ?? "" }
				onChange={ (newValue) => setAttributes( { title: newValue } ) }
				placeholder={ __( 'WPMozo Title', 'wpmozo-blocks-and-addons' ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<RangeControl
				label={ __( 'Percentage', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.percentage }
				onChange={(newValue) => setAttributes({percentage: newValue})}
				min={0} max={100} step={1} allowReset={true}
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<ToggleControl
				label={ __( 'Display Empty Bar/Chunks', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.displayEmptyBar }
				onChange={ (newValue) => setAttributes( { displayEmptyBar: newValue } ) }
				__nextHasNoMarginBottom={true}
			/>
			{ 'layout1' === attributes.layoutType && ( <>
				<ToggleControl
					label={__('Use Stripes', 'wpmozo-blocks-and-addons')}
					checked={attributes.useStripes}
					onChange={(newValue) => setAttributes({useStripes: newValue})}
					__nextHasNoMarginBottom={true}
				/>
				{ true === attributes.useStripes && ( <>
					<ToggleControl
						label={ __( 'Enable Stripe Animation', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.stripeAnimation }
						onChange={ (newValue) => setAttributes( { stripeAnimation: newValue}  ) }
						__nextHasNoMarginBottom={true}
					/>
					{ true === attributes.stripeAnimation && (
						<RangeControl
							label={ __( 'Animation Speed', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.stripeAnimationSpeed }
							onChange={ (newValue) => setAttributes( {stripeAnimationSpeed: newValue } ) }
							min={0} max={10} step={1} allowReset={true}
							__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
						/>
					) }
				</> ) }
			</> ) }
			{ 'layout2' === attributes.layoutType && ( <>
				<ToggleControl
					label={ __( 'Enable Custom Chunks Size', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.useCustomChunksSize }
					onChange={ (newValue) => setAttributes( { useCustomChunksSize: newValue } ) }
					__nextHasNoMarginBottom={true}
				/>
				{ true === attributes.useCustomChunksSize && ( <>
					<WpmozoRangeSize props={props}
						label={ __( 'Chunks Width', 'wpmozo-blocks-and-addons') }
						rangeSizeKey='useChunksWidth'
					/>
					<WpmozoRangeSize props={props}
						label={ __( 'Chunks Height', 'wpmozo-blocks-and-addons') }
						rangeSizeKey='useChunksHeight'
					/>
				</> ) }
			</> ) }
		</PanelBody>
	</> );
};
