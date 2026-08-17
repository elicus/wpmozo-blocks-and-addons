import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	__experimentalToolsPanel,
	__experimentalToolsPanelItem,
	__experimentalUnitControl,
	RangeControl,
	BaseControl,
	Button,
} from '@wordpress/components';
import  './style.scss';
import {wpmozo_is_empty} from '../../utils.js';

const WpmozoRangeSize = (args) => {
	const { rangeSizeKey, props } = args;
	const preAttributes = props.preAttributes;

	const setValue = (valueType = 'value', value) => {
		if (valueType === 'value') {
			if (
				value === null &&
				typeof preAttributes[rangeSizeKey] !== 'undefined' &&
				preAttributes[rangeSizeKey].hasOwnProperty('default')
			) {
				value = preAttributes[rangeSizeKey].default;
			}
		} else {
			if (
				value === null &&
				typeof preAttributes[rangeSizeKey + 'Unit'] !== 'undefined' &&
				preAttributes[rangeSizeKey + 'Unit'].hasOwnProperty('default')
			) {
				value = preAttributes[rangeSizeKey + 'Unit'].default;
			}
		}
		return value !== null ? value : '';
	};

	const sizeSetValue = (valueType = 'value', value = null) => {
		value = setValue(valueType, value);

		if (valueType === 'value') {
			props.setAttributes({ [rangeSizeKey]: value });
		} else {
			props.setAttributes({ [rangeSizeKey + 'Unit']: value });
		}

		if (args.hasOwnProperty('afterOnChange')) {
			args.afterOnChange(props);
		}
	};

	let unit = setValue('unit', props.attributes[rangeSizeKey + 'Unit']);
	let getRange = setValue('value', props.attributes[rangeSizeKey]);

	const defaultRange =
		! wpmozo_is_empty(unit) && ! wpmozo_is_empty(getRange)
			? parseFloat(getRange.replace(unit, ''))
			: 0;

	const [state, setState] = useState({
		range: defaultRange,
	});

	const updateColSpacingRange = (val) => {
		const unit = jQuery(`.wpmozo-range-size-${rangeSizeKey}-size .components-unit-control__select`).val();
		const _range = parseFloat(val.replace(unit, ''));
		setState({ ...state, range: _range });
	};

	const onChange = args.hasOwnProperty('onChange') ? args.onChange : sizeSetValue;

	const rangeControlProps = {};
	if ( args.min !== undefined ) rangeControlProps.min = args.min;
	if ( args.max !== undefined ) rangeControlProps.max = args.max;
	if ( args.step !== undefined ) rangeControlProps.step = args.step;

	const rangeControl = (
		<RangeControl
			key={`wpmozo-range-size-${rangeSizeKey}-range`}
			value={state.range}
			allowReset={false}
			withInputField={false}
			{...rangeControlProps}
			onChange={(newSpacing) => {
				const unit = jQuery(`.wpmozo-range-size-${rangeSizeKey}-size .components-unit-control__select`).val();
				const spacing = newSpacing + unit;
				sizeSetValue('value', spacing);
				updateColSpacingRange(spacing);
			}}
		/>
	);

	const unitControl = (
		<__experimentalUnitControl
			key={`wpmozo-range-size-${rangeSizeKey}-size`}
			value={props.attributes[rangeSizeKey]}
			className={`wpmozo-range-size-${rangeSizeKey}-size`}
			{...rangeControlProps}
			onChange={(newSpacing) => {
				const unit = jQuery(`.wpmozo-range-size-${rangeSizeKey}-size .components-unit-control__select`).val();
				sizeSetValue('value', newSpacing);
				sizeSetValue('unit', unit);
				updateColSpacingRange(newSpacing + unit);
			}}
		/>
	);

	if (args.hasOwnProperty('withToolsPanel')) {
		return (
			<__experimentalToolsPanel
				label={args.label}
				resetAll={() => {
					const sizeRange = setValue('value', null);
					updateColSpacingRange(sizeRange);
					sizeSetValue('value', null);
					sizeSetValue('unit', 'px');
				}}
				key={`wpmozo-range-size${rangeSizeKey}-panel`}
				className={`wpmozo-range-size${rangeSizeKey}-panel`}
			>
				<__experimentalToolsPanelItem
					label={args.label}
					hasValue={() => true}
					isShownByDefault={true}
					onDeselect={() => {
						const sizeRange = setValue('value', null);
						updateColSpacingRange(sizeRange);
						sizeSetValue('value', null);
						sizeSetValue('unit', 'px');
					}}
					key={`wpmozo-range-size-${rangeSizeKey}-panel-item`}
					className={`wpmozo-range-size-${rangeSizeKey}-panel-item`}
				>
					{rangeControl}
					{unitControl}
				</__experimentalToolsPanelItem>
			</__experimentalToolsPanel>
		);
	}

	return (
		<BaseControl
			key={`wpmozo-range-size-${rangeSizeKey}-basecontrol`}
			label={args.label}
			className="wpmozo-range-size-basecontrol"
		>
			<div
				key={`wpmozo-range-size-${rangeSizeKey}-inner`}
				className="wpmozo-range-size-basecontrol-inner"
			>
				{rangeControl}
				{unitControl}
				<Button
					text={__('Reset', 'wpmozo-blocks-and-addons')}
					variant="secondary"
					onClick={() => {
						const sizeRange = setValue('value', null);
						updateColSpacingRange(sizeRange);
						sizeSetValue('value', null);
						sizeSetValue('unit', 'px');
					}}
				/>
			</div>
		</BaseControl>
	);
};

export default WpmozoRangeSize;