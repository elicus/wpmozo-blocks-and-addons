import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";
import {
	PanelBody,
	SelectControl,
	CheckboxControl,
	BaseControl,
	RangeControl
} from '@wordpress/components';
import {
	WpmozoRangeSize
} from '../../../common/components/index';

import {store as blockEditorStore } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

export const GeneralPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const inactiveOptions = {
        'title': __( 'Title', 'wpmozo-blocks-and-addons' ),
        'icon': __( 'Icon', 'wpmozo-blocks-and-addons' ),
    };

	const childCount = useSelect(
		( select ) => select( blockEditorStore ).getBlockOrder( attributes.ID ).length,
		[ attributes.ID ]
	);

    const toggleOption = (key) => {
        const newInactiveState = attributes.inactiveState.includes(key)
            ? attributes.inactiveState.filter((item) => item !== key)
            : [...attributes.inactiveState, key];

        setAttributes({ inactiveState: newInactiveState });
    };

	return ( <>
		{/* Configuration settings. */}
		<PanelBody title={ __( 'Configuration', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
			<SelectControl
				label={ __( 'Accordion Trigger', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.accordionTrigger }
				options={[
					{
						value: 'hover',
						label: __( 'Hover', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'click',
						label: __( 'Click', 'wpmozo-blocks-and-addons' ),
					},
				]}
				onChange={ ( newValue ) => setAttributes( { accordionTrigger: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Accordion Orientation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.accordionOrientation }
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
				onChange={ ( newValue ) => setAttributes( { accordionOrientation: newValue } ) }
			/>
			<SelectControl
				label={ __( 'Content Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.contentAlignment }
				options={[
					{
						value: 'top_left',
						label: __( 'Top Left', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'top_right',
						label: __( 'Top Right', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'top_center',
						label: __( 'Top Center', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'center',
						label: __( 'Center', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'bottom_left',
						label: __( 'Bottom Left', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'bottom_right',
						label: __( 'Bottom Right', 'wpmozo-blocks-and-addons' ),
					},
					{
						value: 'bottom_center',
						label: __( 'Bottom Center', 'wpmozo-blocks-and-addons' ),
					},
				]}
				onChange={ ( newValue ) => setAttributes( { contentAlignment: newValue } ) }
			/>
			<BaseControl
				__nextHasNoMarginBottom
				label={ __( 'Display in Inactive State', 'wpmozo-blocks-and-addons' ) }
			>
				{Object.entries(inactiveOptions).map(([key, label]) => (
	                <CheckboxControl
	                    key={key}
	                    label={label}
	                    checked={attributes.inactiveState.includes(key)}
	                    onChange={() => toggleOption(key)}
	                />
	            ))}
	        </BaseControl>
	        <WpmozoRangeSize props={props}
				label={ __( 'Accordion Spacing', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='accordionSpacing'
			/>
			<WpmozoRangeSize props={props}
				label={ __( 'Accordion Height', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='accordionHeight'
			/>
	        <RangeControl
				label={ __( 'Active Accordion Image Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.activeAccordionSize }
				onChange={ ( newValue ) => setAttributes( { activeAccordionSize: newValue } ) }
				min={ 1 }
				step={ 1 }
				max={ 10 }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
			<RangeControl
				label={ __( 'Default Active Accordion', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.activeAccordion }
				onChange={ ( newValue ) => setAttributes( { activeAccordion: newValue } ) }
				min={ 0 }
				max={childCount}
				step={ 1 }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
			<RangeControl
				label={ __( 'Transition Duration', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.accordionTransitionDuration }
				onChange={ ( newValue ) => setAttributes( { accordionTransitionDuration: newValue } ) }
				min={ 100 }
				step={ 100 }
				max={ 2000 }
				__next40pxDefaultSize = {true}
				__nextHasNoMarginBottom = {true}
			/>
		</PanelBody>
	</> );
};
