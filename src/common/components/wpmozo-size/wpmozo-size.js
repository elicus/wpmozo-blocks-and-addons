import { __ } from '@wordpress/i18n';
import {
	__experimentalToolsPanel,
	__experimentalToolsPanelItem,
	__experimentalUnitControl,
} from '@wordpress/components';

const WpmozoSize = (args) => {
	const { SizeKey, props } = args;
	const preAttributes = props.preAttributes;
	const label = args.label || __('Size', 'wpmozo-blocks-and-addons');
	let SizeTypes = args.SizeTypes || null;

	const setValue = (styleType, value) => {
		if (
			value === null &&
			typeof preAttributes[SizeKey + styleType] !== 'undefined' &&
			preAttributes[SizeKey + styleType].hasOwnProperty('default')
		) {
			value = preAttributes[SizeKey + styleType].default;
		}
		return value !== null ? value : '';
	};

	const sizeSetValue = (styleType, value = null) => {
		const newValue = setValue(styleType, value);
		props.setAttributes({ [SizeKey + styleType]: newValue });

		if (typeof args.afterOnChange === 'function') {
			args.afterOnChange(props);
		}
	};

	const onChange = args.onChange || sizeSetValue;

	const resetAll = () => {
		if (SizeTypes === null) {
			SizeTypes = {
				width: '',
				height: '',
			};
		}
		for (const type in SizeTypes) {
			const value = setValue(type, null);
			props.setAttributes({ [SizeKey + type]: value });
		}
		if (typeof args.afterOnChange === 'function') {
			args.afterOnChange(props);
		}
	};

	return (
		<__experimentalToolsPanel
			key={`wpmozo-size-panel-${SizeKey}`}
			label={label}
			resetAll={resetAll}
		>
			{(SizeTypes === null || SizeTypes.hasOwnProperty('width')) && (
				<__experimentalToolsPanelItem
					label={__('Width', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault={true}
					onDeselect={() => sizeSetValue('width')}
				>
					<__experimentalUnitControl
						label="Width"
						labelPosition="side"
						value={props.attributes[SizeKey + 'width']}
						onChange={(NewWidth) => onChange('width', NewWidth)}
					/>
				</__experimentalToolsPanelItem>
			)}

			{(SizeTypes === null || SizeTypes.hasOwnProperty('height')) && (
				<__experimentalToolsPanelItem
					label={__('Height', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault={true}
					onDeselect={() => sizeSetValue('height')}
				>
					<__experimentalUnitControl
						label="Height"
						labelPosition="side"
						value={props.attributes[SizeKey + 'height']}
						onChange={(NewHeight) => onChange('height', NewHeight)}
					/>
				</__experimentalToolsPanelItem>
			)}
		</__experimentalToolsPanel>
	);
};

export default WpmozoSize;
