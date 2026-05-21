import {
	__experimentalToolsPanel,
	__experimentalToolsPanelItem,
	Dropdown,
	Button,
	ColorIndicator,
	ColorPalette,
	TabPanel,
	GradientPicker
} from '@wordpress/components';
import { __experimentalUseMultipleOriginColorsAndGradients } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import './style.scss';

const defaultGradientColor = 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)';

const WpmozoColorPicker = (args) => {
	const {
		ColorKey,
		ColorTypes,
		props,
		withToolPanel = true,
		label = __('Color', 'wpmozo-blocks-and-addons'),
	} = args;

	const preAttributes = props.preAttributes;
	const AllColors = __experimentalUseMultipleOriginColorsAndGradients();

	const setValue = (styleType, value) => {
		if (
			value === null &&
			typeof preAttributes[ColorKey + styleType] !== 'undefined' &&
			preAttributes[ColorKey + styleType].hasOwnProperty('default')
		) {
			value = preAttributes[ColorKey + styleType].default;
		}
		return value !== null ? value : '';
	};

	const colorSetValue = (styleType, value = null) => {
		const updatedValue = setValue(styleType, value);
		props.setAttributes({ [ColorKey + styleType]: updatedValue });

		if (args.afterOnChange) {
			args.afterOnChange(props);
		}
	};

	const onChange = args.onChange || colorSetValue;

	const ColorDropdown = (colorType, label, colorTypeObj) => {
		let _color = props.attributes[ColorKey + colorType];
		const fullKey = `${ColorKey}-${colorType}`;
		const colorPlateKey = `wpmozo-color-palette-${fullKey}`;

		const withGradient = colorTypeObj?.withGradient || false;
		const onlyGradient = colorTypeObj?.onlyGradient || false;

		if (_color === '' && args.default) {
			_color = args.default[colorType];
		}

		return (
			<Dropdown
				key={`wpmozo-color-dropdown-container-${fullKey}`}
				className={`wpmozo-color-dropdown-container wpmozo-color-dropdown-container-${fullKey}`}
				contentClassName="wpmozo-color-popover-content"
				popoverProps={{ placement: 'left-start', offset: 36, shift: true }}
				renderToggle={({ isOpen, onToggle }) => (
					<Button
						key={`wpmozo-color-dropdown-button-${fullKey}`}
						onClick={onToggle}
						aria-expanded={isOpen}
					>
						<ColorIndicator
							key={`wpmozo-color-dropdown-indicator-${fullKey}`}
							colorValue={_color}
						/>
						{label}
					</Button>
				)}
				renderContent={() => {
					if (!withGradient && !onlyGradient) {
						return (
							<ColorPalette
								key={colorPlateKey}
								colors={AllColors.colors}
								value={_color}
								onChange={(newColor) => onChange(colorType, newColor)}
								enableAlpha
							/>
						);
					} else if (withGradient) {
						let _colorSolid = props.attributes[ColorKey + colorType + 'Solid'] || '';
						let _colorGradient = props.attributes[ColorKey + colorType + 'Gradient'] || '';

						if (_colorSolid === '' && args.default) {
							_colorSolid = args.default[colorType + 'Solid'];
						}
						if (_colorGradient === '' && args.default) {
							_colorGradient = args.default[colorType + 'Gradient'];
						}

						return (
							<TabPanel
								key={colorPlateKey}
								className="wpmozo-color-tabs"
								tabs={[
									{ name: 'solid', title: __('Solid', 'wpmozo-blocks-and-addons') },
									{ name: 'gradient', title: __('Gradient', 'wpmozo-blocks-and-addons') },
								]}
							>
								{(tab) => {
									if (tab.name === 'solid') {
										return (
											<ColorPalette
												colors={AllColors.colors}
												value={_colorSolid}
												onChange={(newColor) => {
													onChange(colorType, newColor);
													onChange(colorType + 'Solid', newColor);
													onChange(colorType + 'Gradient', defaultGradientColor);
												}}
												enableAlpha
											/>
										);
									} else {
										return (
											<GradientPicker
												gradients={AllColors.gradients}
												value={_colorGradient}
												onChange={(newColor) => {
													onChange(colorType + 'Solid', '');
													if (typeof newColor === 'undefined') {
														onChange(colorType + 'Gradient', defaultGradientColor);
														onChange(colorType, null);
													} else {
														onChange(colorType + 'Gradient', newColor);
														onChange(colorType, newColor);
													}
												}}
											/>
										);
									}
								}}
							</TabPanel>
						);
					} else {
						const onlyGradientValue = _color || defaultGradientColor;
						return (
							<GradientPicker
								key={colorPlateKey}
								gradients={AllColors.gradients}
								value={onlyGradientValue}
								onChange={(newColor) => {
									onChange(colorType, typeof newColor === 'undefined' ? null : newColor);
								}}
							/>
						);
					}
				}}
			/>
		);
	};

	if (withToolPanel) {
		const Panels = ColorTypes.map((ct) => {
			const fullKey = `${ColorKey}-${ct.key}`;
			return (
				<__experimentalToolsPanelItem
					key={`wpmozo-color-tools-panel-item-${fullKey}`}
					label={ct.label}
					hasValue={() => true}
					isShownByDefault
					onDeselect={() => colorSetValue(ct.key)}
				>
					{ColorDropdown(ct.key, ct.label, ct)}
				</__experimentalToolsPanelItem>
			);
		});

		return (
			<__experimentalToolsPanel
				key={`wpmozo-color-tools-panel-${ColorKey}`}
				label={label}
				className="wpmozo-color-tools-panel"
				resetAll={() => {
					ColorTypes.forEach((type) => {
						const value = setValue(type.key, null);
						props.setAttributes({ [ColorKey + type.key]: value });
					});

					if (args.afterOnChange) {
						args.afterOnChange(props);
					}
				}}
			>
				{Panels}
			</__experimentalToolsPanel>
		);
	} else {
		return (
			<Fragment>
				{ColorTypes.map((ct) => {
					const colorType = ct.key;
					const fullKey = `${ColorKey}-${colorType}`;
					let _color = props.attributes[ColorKey + colorType] || '';

					if (_color === '' && args.default) {
						_color = args.default[colorType];
					}

					return (
						<ColorPalette
							key={`wpmozo-color-palette-${fullKey}`}
							colors={AllColors.colors}
							value={_color}
							onChange={(newColor) => onChange(colorType, newColor)}
						/>
					);
				})}
			</Fragment>
		);
	}
};

export default WpmozoColorPicker;
