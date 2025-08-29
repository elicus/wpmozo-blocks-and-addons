import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    RangeControl,
    ToggleControl,
    SelectControl,
} from "@wordpress/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const displayTag = [
		{ value: 'h1', label: __( 'H1', 'wpmozo-blocks-and-addons' ) },
		{ value: 'h2', label: __( 'H2', 'wpmozo-blocks-and-addons' ) },
		{ value: 'h3', label: __( 'H3', 'wpmozo-blocks-and-addons' ) },
		{ value: 'h4', label: __( 'H4', 'wpmozo-blocks-and-addons' ) },
		{ value: 'h5', label: __( 'H5', 'wpmozo-blocks-and-addons' ) },
		{ value: 'h6', label: __( 'H6', 'wpmozo-blocks-and-addons' ) },
		{ value: 'p', label: __( 'P', 'wpmozo-blocks-and-addons' ) }
	];
	const animationType = [
		{ value: 'fade', label: __( 'Fade', 'wpmozo-blocks-and-addons' ) },
		{ value: 'flip', label: __( 'Flip', 'wpmozo-blocks-and-addons' ) },
		{ value: 'typing', label: __( 'Typing', 'wpmozo-blocks-and-addons' ) },
		{ value: 'slide', label: __( 'Slide', 'wpmozo-blocks-and-addons' ) },
		{ value: 'zoom', label: __( 'Zoom', 'wpmozo-blocks-and-addons' ) },
		{ value: 'bounce', label: __( 'Bounce', 'wpmozo-blocks-and-addons' ) },
		{ value: 'wipe', label: __( 'Wipe', 'wpmozo-blocks-and-addons' ) },
		{ value: 'wave', label: __( 'Wave', 'wpmozo-blocks-and-addons' ) }
	];

	return ( <>
		{/* Content. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Prefix Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.preText }
				onChange={ ( newValue ) => setAttributes( { preText: newValue } ) }
			/>
			<TextControl
				label={ __( 'Animated Text ( | Separated )', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animatedText }
				onChange={ ( newValue ) => setAttributes( { animatedText: newValue } ) }
			/>
			<TextControl
				label={ __( 'Postfix Text', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.postText }
				onChange={ ( newValue ) => setAttributes( { postText: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Select Display Tag', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.selectDisplayTag }
				options={ displayTag }
				onChange={ ( newValue ) => setAttributes( { selectDisplayTag: newValue } ) }
			/>
		</PanelBody>
		{/* Animation. */}
		<PanelBody title={ __( 'Animation', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<SelectControl
				label={ __( 'Select Animation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.selectAnimation }
				options={ animationType }
				onChange={ ( newValue ) => setAttributes( { selectAnimation: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Display Text in Stack', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.displayInStack }
				onChange={ ( newValue ) => setAttributes( { displayInStack: newValue } ) }
			/>
			{ 'typing' === attributes.selectAnimation && ( <>
				<RangeControl
					label={ __( 'Typing Speed(in ms)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.typingSpeed }
					onChange={ ( newValue ) => setAttributes( { typingSpeed: newValue } ) }
					min={10} step={10} max={5000} allowReset={true}
				/>
				<RangeControl
					label={ __( 'Erasing Speed(in ms)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.erasingSpeed }
					onChange={ ( newValue ) => setAttributes( { erasingSpeed: newValue } ) }
					min={10} step={10} max={5000} allowReset={true}
				/>
			</> ) }
			{ 'typing' !== attributes.selectAnimation && ( <>
				<RangeControl
					label={ __( 'Animation Duration(in ms)', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.animationDuration }
					onChange={ ( newValue ) => setAttributes( { animationDuration: newValue } ) }
					min={10} step={10} max={5000} allowReset={true}
				/>
			</> ) }
			<RangeControl
				label={ __( 'Animation Delay(in ms)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationDelay }
				onChange={ ( newValue ) => setAttributes( { animationDelay: newValue } ) }
				min={10} step={10} max={5000} allowReset={true}
			/>
			<ToggleControl
				label={ __( 'Stop Animation on Hover', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.stopAnimationOnHover }
				onChange={ ( newValue ) => setAttributes( { stopAnimationOnHover: newValue } ) }
			/>
			<ToggleControl
				label={ __( 'Animate Only Once', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.animateOnlyOnce }
				onChange={ ( newValue ) => setAttributes( { animateOnlyOnce: newValue } ) }
			/>
		</PanelBody>
	</> );
};
