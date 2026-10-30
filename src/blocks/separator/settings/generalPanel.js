import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextareaControl,
    SelectControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption
} from "@wordpress/components";
import {
    WpmozoMediaUploader,
    WpmozoIconpicker
} from '../../../common/components/index';
import { shadow, separator } from '@wordpress/icons';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Separator Content', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<ToggleGroupControl
				label={ __( 'Separator Type', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.separatorType }
				onChange={ ( newValue ) => setAttributes( { separatorType: newValue } ) }
			>
				<ToggleGroupControlOption value="line" label={ __( 'Line', 'wpmozo-blocks-and-addons' ) } showTooltip={ true } />
				<ToggleGroupControlOption value="shadow" label={ __( 'Shadow', 'wpmozo-blocks-and-addons' ) } showTooltip={ true } />
			</ToggleGroupControl>
			{ 'line' === attributes.separatorType &&
				<SelectControl
					label={ __( 'Select Line Style', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.lineStyle }
					options={ [
						{ value: 'solid', label: __( 'Solid', 'wpmozo-blocks-and-addons' ) },
						{ value: 'dashed', label: __( 'Dashed', 'wpmozo-blocks-and-addons' ) },
						{ value: 'double', label: __( 'Double', 'wpmozo-blocks-and-addons' ) },
						{ value: 'dotted', label: __( 'Dotted', 'wpmozo-blocks-and-addons' ) },
						{ value: 'ridge', label: __( 'Ridge', 'wpmozo-blocks-and-addons' ) },
						{ value: 'groove', label: __( 'Groove', 'wpmozo-blocks-and-addons' ) },
						{ value: 'inset', label: __( 'Inset', 'wpmozo-blocks-and-addons' ) },
						{ value: 'outset', label: __( 'Outset', 'wpmozo-blocks-and-addons' ) },
						{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { lineStyle: newValue } ) }
				/>
			}
			{ 'line' === attributes.separatorType &&
				<SelectControl
					label={ __( 'Use With', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.lineUseWith }
					options={ [
						{ value: 'onlySeparator', label: __( 'Only Separator', 'wpmozo-blocks-and-addons' ) },
						{ value: 'textSeparator', label: __( 'Separator With Text', 'wpmozo-blocks-and-addons' ) },
						{ value: 'iconSeparator', label: __( 'Separator With Icon', 'wpmozo-blocks-and-addons' ) },
						{ value: 'imageSeparator', label: __( 'Separator With Image', 'wpmozo-blocks-and-addons' ) },
					] }
					onChange={ ( newValue ) => setAttributes( { lineUseWith: newValue } ) }
				/>
			}
			{ 'line' === attributes.separatorType && 'textSeparator' === attributes.lineUseWith &&
				<TextareaControl
					label={ __( 'Separator Text', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { separatorText: newValue } ) }
					value={ attributes.separatorText }
				/>
			}
			{ 'line' === attributes.separatorType && 'iconSeparator' === attributes.lineUseWith &&
				<WpmozoIconpicker
					label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
					iconPickerKey='separatorIcon'
					props={ props }
					value={ attributes.separatorIcon }
					onChange={ ( newValue ) => setAttributes( { separatorIcon: newValue } ) }
				/>
			}
			{ 'line' === attributes.separatorType && 'imageSeparator' === attributes.lineUseWith &&
				<WpmozoMediaUploader 
					attrKye="separatorImage" 
					props={props} 
				/>
			}
		</PanelBody>
	</> );
};
