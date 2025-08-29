import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";
import {
	PanelBody,
	SelectControl
} from '@wordpress/components';
import {
	WpmozoRangeSize
} from '../../../common/components/index';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Gallery settings. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Layout', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.layout }
				options={[
					{
						value: 'layout1',
						label: __( 'Layout 1', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'layout2',
						label: __( 'Layout 2', 'wpmozo-blocks-and-addons' ),
					},
				]}
				onChange={ ( newValue ) => setAttributes( { layout: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Number of Columns', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.numberOfColumns }
				options={[
					{
						value: '1',
						label: __( '1', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: '2',
						label: __( '2', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: '3',
						label: __( '3', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: '4',
						label: __( '4', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: '5',
						label: __( '5', 'wpmozo-blocks-and-addons' ),
					},
				]}
				onChange={ ( newValue ) => setAttributes( { numberOfColumns: newValue } ) }
			/>
			<WpmozoRangeSize props={props}
				label={ __( 'Column Spacing', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='columnSpacing'
			/>
			<WpmozoRangeSize props={props}
				label={ __( 'Bottom Spacing', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='bottomSpacing'
			/>
		</PanelBody>
	</> );
};
