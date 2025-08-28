import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    ToggleControl,
    TextControl,
    SelectControl,
    RangeControl
} from '@wordpress/components';
import { WpmozoMediaUploader } from '../../../common/components/index';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* General. */}
		<PanelBody title={ __( 'General', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Slider Orientation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.sliderOrientation }
				options={[
					{ value: 'horizontal', label: __( 'Horizontal', 'wpmozo-blocks-and-addons' ) },
					{ value: 'vertical', label: __( 'Vertical', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { sliderOrientation: newValue } ) }
				__next40pxDefaultSize __nextHasNoMarginBottom
			/>
			<RangeControl
				label={ __( 'Handle Offset', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.handleOffset }
				onChange={ ( newValue ) => setAttributes( { handleOffset: newValue } ) }
				min={ 0 } step={ 0.1 } max={ 1 } allowReset={true} 
				initialPosition={ 0.5 } resetFallbackValue={ 0.5 }
				__next40pxDefaultSize __nextHasNoMarginBottom
			/>
			{ ! attributes.moveHandleOnClick && (
				<ToggleControl
					label={ __( 'Move Handle on Hover', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.moveHandleOnHover }
					onChange={ ( newValue ) => setAttributes( { moveHandleOnHover: newValue } ) }
					__nextHasNoMarginBottom
				/>
			) }
			{ ! attributes.moveHandleOnHover && (
				<ToggleControl
					label={ __( 'Move Handle on Click', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.moveHandleOnClick }
					onChange={ ( newValue ) => setAttributes( { moveHandleOnClick: newValue } ) }
					__nextHasNoMarginBottom
				/>
			) }
		</PanelBody>
		{/* Before. */}
		<PanelBody title={ __( 'Before', 'wpmozo-blocks-and-addons' )} initialOpen={false}>
			<WpmozoMediaUploader 
				attrKye="beforeImage" 
				props={props} 
			/>
			<ToggleControl
				label={ __( 'Show Label', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.beforeHasLabel }
				onChange={ ( newValue ) => setAttributes( { beforeHasLabel: newValue } ) }
				__nextHasNoMarginBottom
			/>
			{ attributes.beforeHasLabel && ( <>
				<ToggleControl
					label={ __( 'Show Label Only on Hover', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.beforeLabelOnHover }
					onChange={ ( newValue ) => setAttributes( { beforeLabelOnHover: newValue } ) }
					__nextHasNoMarginBottom
				/>
				<TextControl
					label={ __( 'Enter Label', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.beforeLabel }
					onChange={ ( newValue ) => setAttributes( { beforeLabel: newValue } ) }
					__next40pxDefaultSize __nextHasNoMarginBottom
				/>
			</> ) }
		</PanelBody>
		{/* After. */}
		<PanelBody title={ __( 'After', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<WpmozoMediaUploader 
				attrKye="afterImage" 
				props={props} 
			/>
			<ToggleControl
				label={ __( 'Show Label', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.afterHasLabel }
				onChange={ ( newValue ) => setAttributes( { afterHasLabel: newValue } ) }
				__nextHasNoMarginBottom
			/>
			{ attributes.afterHasLabel && ( <>
				<ToggleControl
					label={ __( 'Show Label Only on Hover', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.afterLabelOnHover }
					onChange={ ( newValue ) => setAttributes( { afterLabelOnHover: newValue } ) }
					__nextHasNoMarginBottom
				/>
				<TextControl
					label={ __( 'Enter Label', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.afterLabel }
					onChange={ ( newValue ) => setAttributes( { afterLabel: newValue } ) }
					__next40pxDefaultSize __nextHasNoMarginBottom
				/>
			</> ) }
		</PanelBody>
	</> );
};
