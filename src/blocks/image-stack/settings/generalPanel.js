import { __ } from "@wordpress/i18n";

import {
	BaseControl,
	PanelBody,
	RangeControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import {
	WpmozoAlignment,
} from "../../../common/components";

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	
	return ( <>
		{/* Configuration. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<RangeControl
				label={ __( 'Image/Icon Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.stackItemSize }
				onChange={ ( newValue ) => setAttributes( { stackItemSize: newValue } ) }
				min={ 1 } step={ 1 } max={ 500 }
			/>
			<RangeControl
				label={ __( 'Image/Icon Shrink', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.stackItemShrink }
				onChange={ ( newValue ) => setAttributes( { stackItemShrink: newValue } ) }
				min={ 1 } step={ 1 } max={ 250 }
			/>
			<RangeControl
				label={ __( 'Image/Icon Spacing', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.stackItemSpacing }
				onChange={ ( newValue ) => setAttributes( { stackItemSpacing: newValue } ) }
				min={ 0 } step={ 1 } max={ 150 }
			/>
			<WpmozoAlignment
				label={ __( 'Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { alighment: newValue } ) }
				value={ attributes.alighment }
			/>
			<hr />
			<ToggleControl
				label={ __( 'Enable Tooltip', 'wpmozo-blocks-and-addons' ) }
				checked={attributes.showTooltip}
				onChange={ ( newValue ) => setAttributes( { showTooltip: newValue } ) }
			/>
			{attributes.showTooltip && 
				<>
				<ToggleGroupControl
					label={ __( 'Tooltip Trigger', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.tooltipTrigger }
					onChange={ ( newValue ) => setAttributes( { tooltipTrigger: newValue } ) }
				>
					<ToggleGroupControlOption value="click" label={ __( 'Click', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="mouseenter" label={ __( 'Hover', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
				<ToggleGroupControl
					label={ __( 'Tooltip Type', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.tooltipType }
					onChange={ ( newValue ) => setAttributes( { tooltipType: newValue } ) }
				>
					<ToggleGroupControlOption value="imageTitle" label={ __( 'Image Title', 'wpmozo-blocks-and-addons' ) } />
					<ToggleGroupControlOption value="custom" label={ __( 'Custom Tooltip', 'wpmozo-blocks-and-addons' ) } />
				</ToggleGroupControl>
				<ToggleControl
					label={ __( 'Show Speech Bubble', 'wpmozo-blocks-and-addons' ) }
					checked={attributes.showArrow}
					onChange={ ( newValue ) => setAttributes( { showArrow: newValue } ) }
				/>
				</>
			}
		</PanelBody>
	</> );
};
