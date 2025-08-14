import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    SelectControl,
} from '@wordpress/components';
import { WpmozoIconpicker  } from '../../../common/components/index';
import { wpmozo_is_empty } from '../../../common/utils.js';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const positionValues = [
		{
			label: __( 'Before', 'wpmozo-blocks-and-addons' ),
			value: 'before',
		},
		{
			label: __( 'After', 'wpmozo-blocks-and-addons' ),
			value: 'after',
		}
	];

	return ( <>
		{/* Toggle one content. */}
		<PanelBody title={ __( 'Toggle One Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<TextControl
				label={ __( 'Toggle Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.toggleOneTitle }
				onChange={ ( newValue ) => setAttributes( { toggleOneTitle: newValue } ) }
				__next40pxDefaultSize __nextHasNoMarginBottom
			/>
			<WpmozoIconpicker
				label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
				iconPickerKey='toggleOneIcon'
				props={ props }
				value={ attributes.toggleOneIcon }
				onChange={ ( newValue ) => setAttributes( { toggleOneIcon: newValue } ) }
			/>
			{ ! wpmozo_is_empty( attributes.toggleOneIcon ) &&
				<SelectControl
					label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.toggleOneIconPostion }
					options={ [
						{ value: 'before', label: __( 'Before', 'wpmozo-blocks-and-addons' ) },
						{ value: 'after', label: __( 'After', 'wpmozo-blocks-and-addons' ) }
					] }
					onChange={ ( newValue ) => setAttributes( { toggleOneIconPostion: newValue } ) }
					__next40pxDefaultSize __nextHasNoMarginBottom
				/>
			}
		</PanelBody>
		{/* Toggle two content. */}
		<PanelBody title={ __( 'Toggle Two Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
			<TextControl
				label={ __( 'Toggle Title', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.toggleTwoTitle }
				onChange={ ( newValue ) => setAttributes( { toggleTwoTitle: newValue } ) }
				__next40pxDefaultSize __nextHasNoMarginBottom
			/>
			<WpmozoIconpicker
				label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
				iconPickerKey='toggleTwoIcon'
				props={ props }
				value={ attributes.toggleTwoIcon }
				onChange={ ( newValue ) => setAttributes( { toggleTwoIcon: newValue } ) }
			/>
			{ ! wpmozo_is_empty( attributes.toggleTwoIcon ) &&
				<SelectControl
					label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.toggleTwoIconPostion }
					options={ positionValues }
					onChange={ ( newValue ) => setAttributes( { toggleTwoIconPostion: newValue } ) }
					__next40pxDefaultSize __nextHasNoMarginBottom
				/>
			}
		</PanelBody>
	</> );
};
