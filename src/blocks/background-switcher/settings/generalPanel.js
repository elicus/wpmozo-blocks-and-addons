import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	RangeControl,
	SelectControl,
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Display. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Switcher Orientation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.switcherOrientation }
				options={ [
					{ value: 'row', label: __( 'Horizontal', 'wpmozo-blocks-and-addons' ) },
					{ value: 'column', label: __( 'Vertical', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ (newValue) => setAttributes( { switcherOrientation: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<SelectControl
				label={ __( 'Content Vertical Align', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.contentValign }
				options={ [
					{ value: 'flex-start', label: __( 'Top', 'wpmozo-blocks-and-addons' ) },
					{ value: 'center', label: __( 'Center', 'wpmozo-blocks-and-addons' ) },
					{ value: 'flex-end', label: __( 'Bottom', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ (newValue) => setAttributes( { contentValign: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			<RangeControl
				label={ __( 'Item Height (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.itemHeight }
				onChange={ ( newValue ) => setAttributes( { itemHeight: newValue } ) }
				min={1} max={1000} step={1}
			/>
			<RangeControl
				label={ __( 'Blur on Hover (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.hoverBlurLevel }
				onChange={ ( newValue ) => setAttributes( { hoverBlurLevel: newValue } ) }
				min={0} max={50} step={1}
			/>
			<RangeControl
				label={ __( 'Transition Duration (ms)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.transitionDuration }
				onChange={ ( newValue ) => setAttributes( { transitionDuration: newValue } ) }
				min={100} max={2000} step={100}
			/>
		</PanelBody>
	</> );
};
