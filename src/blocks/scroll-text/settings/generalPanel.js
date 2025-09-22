import { __ } from '@wordpress/i18n';

import {
    PanelBody,
	RangeControl,
	SelectControl,
    TextareaControl,
	__experimentalUnitControl as UnitControl,
} from "@wordpress/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };


	return ( <>
		{/* Content. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextareaControl
				label={ __( 'Fancy Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { scrollText: newValue } ) }
				value={ attributes.scrollText }
			/>
			<SelectControl
				label={ __( 'Scroll Effect', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.scrollEffect }
				options={ [
					{ value: 'fade', label: __( 'Fade', 'wpmozo-blocks-and-addons' ) },
					{ value: 'blur', label: __( 'Blur', 'wpmozo-blocks-and-addons' ) },
					{ value: 'color', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
					{ value: 'slide', label: __( 'Slide', 'wpmozo-blocks-and-addons' ) },
					{ value: '3d_flip', label: __( '3D Flip', 'wpmozo-blocks-and-addons' ) },
					{ value: 'skew', label: __( 'Skew', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { scrollEffect: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Text Split By', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.splitBy }
				options={ [
					{ value: 'word', label: __( 'Word', 'wpmozo-blocks-and-addons' ) },
					{ value: 'letter', label: __( 'Letter', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { splitBy: newValue } ) }
			/>
		</PanelBody>
		{/* Animation. */}
		<PanelBody title={ __( 'Animation', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			{ ( 'slide' === attributes.scrollEffect ) && (
				<RangeControl
					label={ __( 'Slide Effect Start Position (in px)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.slideEffectStart }
					onChange={ ( newValue ) => setAttributes( { slideEffectStart: newValue } ) }
					min={1} step={1} max={100} allowReset={true}
				/>
			) }
			{ ( 'skew' === attributes.scrollEffect ) && (
				<RangeControl
					label={ __( 'Skew Effect Start Position (in deg)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.skewEffectStart }
					onChange={ ( newValue ) => setAttributes( { skewEffectStart: newValue } ) }
					min={1} step={1} max={100} allowReset={true}
				/>
			) }
			<UnitControl
				label={ __( 'Start Element Position', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationStartElementPos }
				onChange={ ( newValue ) => setAttributes( { animationStartElementPos: newValue } ) }
				units={ [
					{ value: 'px', label: 'px' },
					{ value: '%', label: '%' },
				] }
				isResetValue={ true } __nextHasNoMarginBottom
			/>
			<UnitControl
				label={ __( 'Start Viewport Position', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationStartViewportPos }
				onChange={ ( newValue ) => setAttributes( { animationStartViewportPos: newValue } ) }
				units={ [
					{ value: '%', label: '%' },
					{ value: 'px', label: 'px' },
				] }
				isResetValue={ true } __nextHasNoMarginBottom
			/>
			<UnitControl
				label={ __( 'End Element Position', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationEndElementPos }
				onChange={ ( newValue ) => setAttributes( { animationEndElementPos: newValue } ) }
				units={ [
					{ value: '%', label: '%' },
					{ value: 'px', label: 'px' },
				] }
				isResetValue={ true } __nextHasNoMarginBottom
			/>
			<UnitControl
				label={ __( 'End Viewport Position', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationEndViewportPos }
				onChange={ ( newValue ) => setAttributes( { animationEndViewportPos: newValue } ) }
				units={ [
					{ value: '%', label: '%' },
					{ value: 'px', label: 'px' },
				] }
				isResetValue={ true } __nextHasNoMarginBottom
			/>
		</PanelBody>
	</> );
};
