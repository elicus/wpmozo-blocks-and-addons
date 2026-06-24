import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    TextControl,
    ToggleControl,
	TextareaControl,
    SelectControl,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	RadioControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from "@wordpress/components";
import {
	WpmozoColorPicker, WpmozoIconpicker, WpmozoMediaUploader,
	WpmozoRangeSize
} from '../../../common/components';
import { image, button, starEmpty, pencil } from '@wordpress/icons';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<ToggleControl
				label={ __( 'Show tooltip content in editor', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.showTooltip }
				onChange={ (newValue) => setAttributes( { showTooltip: newValue } ) }
				__nextHasNoMarginBottom={true}
			/>
			<RadioControl
				label={ __( 'Tooltip Trigger', 'wpmozo-blocks-and-addons' ) }
				selected={ attributes.trigerAction }
				options={ [
					{ label: 'Hover', value: 'mouseenter' },
					{ label: 'Click', value: 'click' },
				] }
				onChange={ (newValue) => setAttributes( { trigerAction: newValue } ) }
			/>
			<ToggleControl
				label={__('Make Tooltip Interactive', 'wpmozo-blocks-and-addons')}
				checked={attributes.makeInteractiveTooltip}
				onChange={(newValue) => setAttributes({makeInteractiveTooltip: newValue})}
			/>
			<ToggleGroupControl
				__next40pxDefaultSize
				label={ __( 'Trigger Element', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.trigerElement }
				onChange={ ( newValue ) => setAttributes( { trigerElement: newValue } ) }
				isBlock={true}
			>
				<ToggleGroupControlOptionIcon value="button" icon="button" label={ __( 'Button', 'wpmozo-blocks-and-addons' ) } />
				<ToggleGroupControlOptionIcon value="image" icon="format-image" label={ __( 'Image', 'wpmozo-blocks-and-addons' ) } />
				<ToggleGroupControlOptionIcon value="icon" icon="star-filled" label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } />
				<ToggleGroupControlOptionIcon value="text" icon="text" label={ __( 'Text', 'wpmozo-blocks-and-addons' ) } />
			</ToggleGroupControl>
			{'button' === attributes.trigerElement && (
				<>
					<div className='wpmozo-trigger-control'>
						<TextControl
							label={ __( 'Trigger Button Text', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.triggerButtonText }
							onChange={ ( newValue ) => setAttributes( { triggerButtonText: newValue } ) }
						/>
					</div>
					{'mouseenter' === attributes.trigerAction && (
						<>
							<div className='wpmozo-trigger-control'>
								<TextControl
									label={ __( 'Trigger Button Link Url', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.triggerButtonUrl }
									onChange={ ( newValue ) => setAttributes( { triggerButtonUrl: newValue } ) }
								/>
								<ToggleGroupControl
									label={ __( 'Link Target', 'wpmozo-blocks-and-addons' ) }
									value={ attributes.buttonLinkTarget }
									onChange={ ( newValue ) => setAttributes( { buttonLinkTarget: newValue } ) }
								>
									<ToggleGroupControlOptionIcon value="external" icon="external" label={ __( 'New Window', 'wpmozo-blocks-and-addons' ) } />
									<ToggleGroupControlOptionIcon value="same" icon="admin-links" label={ __( 'Same Window', 'wpmozo-blocks-and-addons' ) } />
								</ToggleGroupControl>
							</div>
						</>
					)}

				</>
			)}
			{'image' === attributes.trigerElement && (
				<>
					<div className='wpmozo-trigger-control'>
						<WpmozoMediaUploader
							attrKye="image"
							label={ __( 'Trigger Image', 'wpmozo-blocks-and-addons' ) }
							props={props}
							imageSrc={attributes.image ? attributes.image.url : ''}
							onSelect={ ( media ) => setAttributes( { image: media } ) }
						/>
					</div>
				</>
			)}
			{'icon' === attributes.trigerElement && (
				<>
					<div className='wpmozo-trigger-control'>
						<WpmozoIconpicker
							props={props}
							label={ __( 'Trigger Icon', 'wpmozo-blocks-and-addons' ) }
							iconPickerKey='icon'
							value={ attributes.icon }
							onChange={ ( newValue ) => setAttributes( { icon: newValue } ) }
						/>
					</div>
				</>
			)}
			{'text' === attributes.trigerElement && (
				<>
					<div className='wpmozo-trigger-control'>
						<TextareaControl
							label={ __( 'Trigger Text', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( newValue ) => setAttributes( { triggerText: newValue } ) }
							value={attributes.triggerText}
						/>
					</div>
				</>
			)}
		</PanelBody>
	</> );
};
