import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";
import {
	PanelBody,
	SelectControl,
	RangeControl
} from '@wordpress/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Display settings. */}
		<PanelBody title={ __( 'Display', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Accordion Orientation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={[
					{
						value: 'horizontal',
						label: __( 'Horizontal', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'vertical',
						label: __( 'Vertical', 'wpmozo-blocks-and-addons' ),
					},
				]}
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
			/>
			<RangeControl
				label={ __( 'Animation Start Viewport', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.animationStartViewportPos }
				onChange={ ( newValue ) => setAttributes( { animationStartViewportPos: newValue } ) }
				min={ 1 }
				step={ 1 }
				max={ 100 }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
			{ 'horizontal' === attributes.layout && ( <>
		        <RangeControl
					label={ __( 'Collapsed Width', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.collapsedWidth }
					onChange={ ( newValue ) => setAttributes( { collapsedWidth: newValue } ) }
					min={ 10 }
					step={ 1 }
					max={ 500 }
					__next40pxDefaultSize = {true}
					__nextHasNoMarginBottom = {true}
				/>
			</> ) }
		</PanelBody>
	</> );
};
