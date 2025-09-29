import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	RangeControl,
	SelectControl,
	ToggleControl,
} from '@wordpress/components';
import {
	WpmozoDimensions,
	WpmozoColorPicker,
} from '../../../common/components';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Divider. */}
		<PanelBody title={ __( 'Divider', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<RangeControl
				label={ __( 'Divider Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.dividerSize }
				onChange={ ( newValue ) => setAttributes( { dividerSize: newValue } ) }
				min={ 0 } max={ 20 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<SelectControl
				label={ __( 'Divider Style', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.dividerStyle }
				options={ [
					{ value: 'solid', label: __( 'Solid', 'wpmozo-blocks-and-addons' ) },
					{ value: 'dashed', label: __( 'Dashed', 'wpmozo-blocks-and-addons' ) },
					{ value: 'dotted', label: __( 'Dotted', 'wpmozo-blocks-and-addons' ) },
					{ value: 'double', label: __( 'Double', 'wpmozo-blocks-and-addons' ) },
					{ value: 'groove', label: __( 'Groove', 'wpmozo-blocks-and-addons' ) },
					{ value: 'ridge', label: __( 'Ridge', 'wpmozo-blocks-and-addons' ) },
					{ value: 'inset', label: __( 'Inset', 'wpmozo-blocks-and-addons' ) },
					{ value: 'outset', label: __( 'Outset', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( newValue ) => setAttributes( { dividerStyle: newValue } ) }
			/>
			<WpmozoColorPicker props={ props }
				label={ __( 'Divider Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="divider"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Divider Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Divider Margin', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='divider'
				DimensionsTypes={ { margin: true } }
			/><hr />
			<ToggleControl
				label={ __( 'Hide Last Divider?', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.dividerHideLast || false }
				onChange={ ( newValue ) => setAttributes( { dividerHideLast: newValue } ) }
				__nextHasNoMarginBottom={ true }
			/>
        </PanelBody>
	</> );
};
