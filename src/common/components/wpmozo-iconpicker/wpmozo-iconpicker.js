import { ComboboxControl } from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import './style.scss';


const WpmozoIconpicker = (args) => {
	const options = wpmozo_bna_editor_object.icons;
	const { iconPickerKey, props, label } = args;
	const { attributes, setAttributes } = props;

	const value = args.value !== '' ? args.value : '';
	const icon =
		typeof attributes[iconPickerKey] !== 'undefined' && attributes[iconPickerKey] !== ''
			? attributes[iconPickerKey]
			: 'fas fa-ban';

	const iconSetValue = (value = null) => {
		setAttributes({ [iconPickerKey]: value });

		if (args.hasOwnProperty('afterOnChange')) {
			args.afterOnChange(props);
		}
	};

	const onChange = args.hasOwnProperty('onChange') ? args.onChange : iconSetValue;

	const renderItem = (option) => {
		const iconClass = option.item.value;
		return (
			<span key={`wpmozo-icon-span-${iconPickerKey}`}>
				<i key={`wpmozo-icon-el-${iconPickerKey}`} className={iconClass} /> {option.item.label}
			</span>
		);
	};

	return (
		<div key={`wpmozo-icon-picker-${iconPickerKey}`} className="wpmozo-icon-picker">
			<ComboboxControl
				key={`wpmozo-icon-combobox-${iconPickerKey}`}
				label={label}
				value={value}
				allowReset={false}
				onChange={onChange}
				options={options}
				__experimentalRenderItem={renderItem}
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			<div key={`wpmozo-icon-wrap-${iconPickerKey}`} className="wpmozo-icon-wraper">
				<i className={icon} />
			</div>
		</div>
	);
};

export default WpmozoIconpicker;
