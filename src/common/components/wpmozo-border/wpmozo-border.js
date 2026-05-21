import { __ } from '@wordpress/i18n';
import {
	__experimentalToolsPanel,
	__experimentalToolsPanelItem,
	__experimentalBorderBoxControl,
} from '@wordpress/components';
import { __experimentalBorderRadiusControl } from '@wordpress/block-editor';

const WpmozoBorder = (args) => {
	const { BorderKey, props } = args;
	const preAttributes = props.preAttributes;
	const label = args.label || __('Border', 'wpmozo-blocks-and-addons');
	let BorderTypes = args.BorderTypes || null;

	const setValue = (styleType, value) => {
		if (
			value === null &&
			typeof preAttributes[BorderKey + styleType] !== 'undefined' &&
			preAttributes[BorderKey + styleType].hasOwnProperty('default')
		) {
			value = preAttributes[BorderKey + styleType].default;
		}
		return value !== null ? value : '';
	};

	const borderSetValue = (styleType, value = null) => {
		const newValue = setValue(styleType, value);
		props.setAttributes({ [BorderKey + styleType]: newValue });

		if (typeof args.afterOnChange === 'function') {
			args.afterOnChange(props);
		}
	};

	const onChange = args.onChange || borderSetValue;

	const resetAll = () => {
		if (BorderTypes === null) {
			BorderTypes = {
				border: '',
				borderRadius: '',
			};
		}
		for (const type in BorderTypes) {
			const value = setValue(type, null);
			props.setAttributes({ [BorderKey + type]: value });
		}

		if (typeof args.afterOnChange === 'function') {
			args.afterOnChange(props);
		}
	};

	return (
		<__experimentalToolsPanel
			key={`wpmozo-border-panel-${BorderKey}`}
			label={label}
			resetAll={resetAll}
		>
			{(BorderTypes === null || BorderTypes.hasOwnProperty('border')) && (
				<__experimentalToolsPanelItem
					label={__('Border', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault={true}
					onDeselect={() => borderSetValue('border')}
				>
					<__experimentalBorderBoxControl
						label="Border"
						value={props.attributes[BorderKey + 'border']}
						onChange={(NewBorder) => onChange('border', NewBorder)}
					/>
				</__experimentalToolsPanelItem>
			)}

			{(BorderTypes === null || BorderTypes.hasOwnProperty('radius')) && (
				<__experimentalToolsPanelItem
					label={__('Radius', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault={true}
					onDeselect={() => borderSetValue('borderRadius')}
				>
					<__experimentalBorderRadiusControl
						label="Radius"
						values={props.attributes[BorderKey + 'borderRadius']}
						onChange={(NewRadius) => onChange('borderRadius', NewRadius)}
					/>
				</__experimentalToolsPanelItem>
			)}
		</__experimentalToolsPanel>
	);
};

export default WpmozoBorder;
