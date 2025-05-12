import { __ } from '@wordpress/i18n';
import {
	__experimentalToolsPanel,
	__experimentalToolsPanelItem,
} from '@wordpress/components';
import { __experimentalSpacingSizesControl } from '@wordpress/block-editor';

const WpmozoDimensions = (args) => {
	const { DimensionKey, props } = args;
	const preAttributes = props.preAttributes;
	const label = args.label || __('Dimensions', 'wpmozo-blocks-and-addons');
	let DimensionsTypes = args.DimensionsTypes || null;

	const setValue = (styleType, value) => {
		if (
			value === null &&
			typeof preAttributes[DimensionKey + styleType] !== 'undefined' &&
			preAttributes[DimensionKey + styleType].hasOwnProperty('default')
		) {
			value = preAttributes[DimensionKey + styleType].default;
		}
		return value !== null ? value : '';
	};

	const dimensionsSetValue = (styleType, value = null) => {
		const newValue = setValue(styleType, value);
		props.setAttributes({ [DimensionKey + styleType]: newValue });

		if (typeof args.afterOnChange === 'function') {
			args.afterOnChange(props);
		}
	};

	const onChange = args.onChange || dimensionsSetValue;

	const resetAll = () => {
		if (DimensionsTypes === null) {
			DimensionsTypes = {
				padding: '',
				margin: '',
				position: '',
			};
		}
		for (const type in DimensionsTypes) {
			const value = setValue(type, null);
			props.setAttributes({ [DimensionKey + type]: value });
		}
		if (typeof args.afterOnChange === 'function') {
			args.afterOnChange(props);
		}
	};

	return (
		<__experimentalToolsPanel
			key={`wpmozo-dimensions-panel-${DimensionKey}`}
			label={label}
			resetAll={resetAll}
		>
			{(DimensionsTypes === null || DimensionsTypes.hasOwnProperty('padding')) && (
				<__experimentalToolsPanelItem
					label={__('Padding', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					className="tools-panel-item-spacing"
					onDeselect={() => dimensionsSetValue('padding')}
				>
					<__experimentalSpacingSizesControl
						label="Padding"
						values={props.attributes[DimensionKey + 'padding']}
						onChange={(NewPadding) => onChange('padding', NewPadding)}
					/>
				</__experimentalToolsPanelItem>
			)}

			{(DimensionsTypes === null || DimensionsTypes.hasOwnProperty('margin')) && (
				<__experimentalToolsPanelItem
					label={__('Margin', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					className="tools-panel-item-spacing"
					onDeselect={() => dimensionsSetValue('margin')}
				>
					<__experimentalSpacingSizesControl
						label="Margin"
						values={props.attributes[DimensionKey + 'margin']}
						onChange={(NewMargin) => onChange('margin', NewMargin)}
					/>
				</__experimentalToolsPanelItem>
			)}

			{(DimensionsTypes === null || DimensionsTypes.hasOwnProperty('position')) && (
				<__experimentalToolsPanelItem
					label={__('Position', 'wpmozo-blocks-and-addons')}
					hasValue={() => true}
					isShownByDefault
					className="tools-panel-item-spacing"
					onDeselect={() => dimensionsSetValue('position')}
				>
					<__experimentalSpacingSizesControl
						label="Position"
						values={props.attributes[DimensionKey + 'position']}
						onChange={(NewPosition) => onChange('position', NewPosition)}
					/>
				</__experimentalToolsPanelItem>
			)}
		</__experimentalToolsPanel>
	);
};

export default WpmozoDimensions;
