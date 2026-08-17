import { __ } from '@wordpress/i18n';

import {
    PanelBody,
	RangeControl,
	SelectControl,
    TextareaControl,
	ToggleControl,
	BaseControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalHeading as Heading,
	__experimentalDivider as Divider
} from "@wordpress/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };


	return ( <>
		{/* Content. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextareaControl
				label={ __( 'Text', 'wpmozo-blocks-and-addons' ) }
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
					label={ __( 'Slide Distance (in px)', 'wpmozo-blocks-and-addons' ) }
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
			<ToggleControl
				label={ __( 'Use Custom Positioning', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.customPos }
				onChange={ ( newValue ) => setAttributes( { customPos: newValue } ) }
			/>
			<Divider />
			{ !attributes.customPos &&  <>
				<BaseControl label={ __( 'Animation Start', 'wpmozo-blocks-and-addons' ) }
				help={ __( 'Choose when the animation should start — for example, ( Element :Top, Viewport :Center ) means the animation starts when the Top of this Element/Block reaches the Center of the Viewport.', 'wpmozo-blocks-and-addons' ) }>
					<ToggleGroupControl
						label={ __( 'Element', 'wpmozo-blocks-and-addons' ) }
						isBlock
						value={ attributes.animationStartElementPos }
						onChange={ ( newValue ) => setAttributes( { animationStartElementPos: newValue } ) }
					>
						<ToggleGroupControlOption value="top" label="Top" />
						<ToggleGroupControlOption value="center" label="Center" />
						<ToggleGroupControlOption value="bottom" label="Bottom" />
					</ToggleGroupControl>
					<ToggleGroupControl
						label={ __( 'ViewPort', 'wpmozo-blocks-and-addons' ) }
						isBlock
						value={ attributes.animationStartViewportPos }
						onChange={ ( newValue ) => setAttributes( { animationStartViewportPos: newValue } ) }
					>
						<ToggleGroupControlOption value="top" label="Top" />
						<ToggleGroupControlOption value="center" label="Center" />
						<ToggleGroupControlOption value="bottom" label="Bottom" />
					</ToggleGroupControl>
				</BaseControl>
				<Divider />
				<BaseControl label={ __( 'Animation End', 'wpmozo-blocks-and-addons' ) } help={ __('Choose when the animation should end — for example, ( Element :Bottom, Viewport :Center ) means the animation ends when the Bottom of this Element/Widget reaches the Center of the Viewport.', 'wpmozo-blocks-and-addons')}>
					<ToggleGroupControl
						label={ __( 'Element', 'wpmozo-blocks-and-addons' ) }
						isBlock
						value={ attributes.animationEndElementPos }
						onChange={ ( newValue ) => setAttributes( { animationEndElementPos: newValue } ) }
					>
						<ToggleGroupControlOption value="top" label="Top" />
						<ToggleGroupControlOption value="center" label="Center" />
						<ToggleGroupControlOption value="bottom" label="Bottom" />
					</ToggleGroupControl>
					<ToggleGroupControl
						label={ __( 'ViewPort', 'wpmozo-blocks-and-addons' ) }
						isBlock
						value={ attributes.animationEndViewportPos }
						onChange={ ( newValue ) => setAttributes( { animationEndViewportPos: newValue } ) }
					>
						<ToggleGroupControlOption value="top" label="Top" />
						<ToggleGroupControlOption value="center" label="Center" />
						<ToggleGroupControlOption value="bottom" label="Bottom" />
					</ToggleGroupControl>
				</BaseControl>
				
			</> }
			{ attributes.customPos &&  <>
				<BaseControl label={ __( 'Animation Start', 'wpmozo-blocks-and-addons' ) }>
					<UnitControl
						label={ __( 'Element', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.animationStartElementPos }
						onChange={ ( newValue ) => setAttributes( { animationStartElementPos: newValue } ) }
						units={ [
							{ value: 'px', label: 'px' },
							{ value: '%', label: '%' },
						] }
						isResetValue={ true } __nextHasNoMarginBottom
					/>
					<UnitControl
						label={ __( 'Viewport', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.animationStartViewportPos }
						onChange={ ( newValue ) => setAttributes( { animationStartViewportPos: newValue } ) }
						units={ [
							{ value: '%', label: '%' },
							{ value: 'px', label: 'px' },
						] }
						isResetValue={ true } __nextHasNoMarginBottom
					/>
				</BaseControl>
				<Divider />
				<BaseControl label={ __( 'Animation End', 'wpmozo-blocks-and-addons' ) }>
					<UnitControl
						label={ __( 'Element', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.animationEndElementPos }
						onChange={ ( newValue ) => setAttributes( { animationEndElementPos: newValue } ) }
						units={ [
							{ value: '%', label: '%' },
							{ value: 'px', label: 'px' },
						] }
						isResetValue={ true } __nextHasNoMarginBottom
					/>
					<UnitControl
						label={ __( 'Viewport', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.animationEndViewportPos }
						onChange={ ( newValue ) => setAttributes( { animationEndViewportPos: newValue } ) }
						units={ [
							{ value: '%', label: '%' },
							{ value: 'px', label: 'px' },
						] }
						isResetValue={ true } __nextHasNoMarginBottom
					/>
				</BaseControl>
			</> }
		</PanelBody>
	</> );
};
