import {__} from '@wordpress/i18n';
import {useState} from "@wordpress/element";
import {
	Button,
	PanelBody,
	BaseControl,
	RangeControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	ToggleControl,
	SelectControl,
	Icon,
	ButtonGroup,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker, WpmozoIconpicker, WpmozoDimensions
} from "../../../common/components";
import {headingLevelsList} from '../../../common/utils.js';

export const DesignPanel = ({attributes, setAttributes}) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	const [btnStyle, setBtnStyleType] = useState('normal');
	const [iconColor, setIconColorType] = useState('normal');
	const [txtStyle, setTxtStyleType] = useState('normal');

	const animationOptions = [
		{value: 'fade', label: __('Fade', 'wpmozo-blocks-and-addons')},
		{value: 'scale', label: __('Scale', 'wpmozo-blocks-and-addons')},
		{value: 'scale-subtle', label: __('Scale Subtle', 'wpmozo-blocks-and-addons')},
		{value: 'scale-extreme', label: __('Scale Extreme', 'wpmozo-blocks-and-addons')},
		{value: 'shift-away', label: __('Shift Away', 'wpmozo-blocks-and-addons')},
		{value: 'shift-away-subtle', label: __('Shift Away Subtle', 'wpmozo-blocks-and-addons')},
		{value: 'shift-away-extreme', label: __('Shift Away Extreme', 'wpmozo-blocks-and-addons')},
		{value: 'scale-toward', label: __('Scale Toward', 'wpmozo-blocks-and-addons')},
		{value: 'scale-toward-subtle', label: __('Scale Toward Subtle', 'wpmozo-blocks-and-addons')},
		{value: 'scale-toward-extreme', label: __('Scale Toward Extreme', 'wpmozo-blocks-and-addons')},
		{value: 'perspective', label: __('Perspective', 'wpmozo-blocks-and-addons')},
		{value: 'perspective-subtle', label: __('Perspective Subtle', 'wpmozo-blocks-and-addons')},
		{value: 'perspective-extreme', label: __('Perspective Extreme', 'wpmozo-blocks-and-addons')}
	];

	return (
		<>
			<PanelBody title={__(`Trigger ${attributes.trigerElement.charAt(0).toUpperCase() + attributes.trigerElement.slice(1)}`, 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={true}>
				{'button' === attributes.trigerElement && (
					<>
						<WpmozoAlignment
							label={__('Button Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({buttonAlign: newValue})}
							value={attributes.buttonAlign}
						/>
						<ToggleControl
							label={__('Use Custom Style For Button', 'wpmozo-blocks-and-addons')}
							checked={attributes.customButtonStyle}
							onChange={(newValue) => setAttributes({customButtonStyle: newValue})}
						/>
						{attributes.customButtonStyle &&
							<>
								<ToggleControl
									label={__('Show Button Icon', 'wpmozo-blocks-and-addons')}
									checked={attributes.buttonIconStyle}
									onChange={(newValue) => setAttributes({buttonIconStyle: newValue})}
								/>
								{attributes.buttonIconStyle &&
										<>
											<WpmozoIconpicker
												props={props}
												label={__('Button Icon', 'wpmozo-blocks-and-addons')}
												iconPickerKey='buttonIcon'
												value={attributes.buttonIcon}
												onChange={(newValue) => setAttributes({buttonIcon: newValue})}
											/>
											<ToggleGroupControl
												label={__('Button Icon Placement', 'wpmozo-blocks-and-addons')}
												value={attributes.buttonIconPosition}
												onChange={(newValue) => setAttributes({buttonIconPosition: newValue})}
											>
												<ToggleGroupControlOption icon={<Icon icon="external"/>} value="before"
																		  label="Before"/>
												<ToggleGroupControlOption value="after" label="After"/>
											</ToggleGroupControl>
											<ToggleControl
												label={__('Only Show Icon On Hover For Button', 'wpmozo-blocks-and-addons')}
												checked={attributes.buttonIconShow}
												onChange={(newValue) => setAttributes({buttonIconShow: newValue})}
											/>
										</>

								}
								<BaseControl className="wpmozo-button-tabs-wrap">
									<ButtonGroup>
										<Button
											className="wpmozo-button-tabs-btn"
											isPressed={('normal' === btnStyle) ? true : false}
											onClick={() => setBtnStyleType('normal')}
										>{__('Normal', 'wpmozo-blocks-and-addons')}</Button>
										<Button
											className="wpmozo-button-tabs-btn"
											isPressed={('hover' === btnStyle) ? true : false}
											onClick={() => setBtnStyleType('hover')}
										>{__('Hover', 'wpmozo-blocks-and-addons')}</Button>
									</ButtonGroup>
									{'normal' === btnStyle &&
										<WpmozoColorPicker
											props={props}
											ColorKey="button"
											ColorTypes={[
												{key: 'Color', label: __('Button Color', 'wpmozo-blocks-and-addons')},
												{key: 'Background', label: __('Button Background', 'wpmozo-blocks-and-addons')}
											]}
										/>
									}
									{'hover' === btnStyle &&
										<WpmozoColorPicker
											props={props}
											ColorKey="buttonHover"
											ColorTypes={[
												{key: 'Color', label: __('Button Color', 'wpmozo-blocks-and-addons')},
												{key: 'Background', label: __('Button Background', 'wpmozo-blocks-and-addons')}
											]}
										/>
									}
								</BaseControl>
								<WpmozoTypography
									props={props}
									TypographyKey="button"
								/>
								<WpmozoBorder
									props={props}
									BorderKey="button"
								/>
								<WpmozoDimensions
									props={props}
									DimensionKey='button'
									DimensionsTypes={{padding: true, margin: true}}
								/>
							</>
						}
					</>
				)}
				{'image' === attributes.trigerElement && (
					<>
						<RangeControl
							label={__('Trigger Image Width (%)', 'wpmozo-blocks-and-addons')}
							value={attributes.triggerImageWidth}
							onChange={(newValue) => setAttributes({triggerImageWidth: newValue})}
							min={1} step={1} max={100}
						/>
					</>
				)}
				{'icon' === attributes.trigerElement && (
					<>
						<WpmozoAlignment
							label={__('Trigger Icon Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({triggerIconAlign: newValue})}
							value={attributes.triggerIconAlign}
						/>
						<BaseControl className="wpmozo-button-tabs-wrap">
							<ButtonGroup>
								<Button
									className="wpmozo-button-tabs-btn"
									isPressed={('normal' === iconColor) ? true : false}
									onClick={() => setIconColorType('normal')}
									>{__('Normal', 'wpmozo-blocks-and-addons')}
								</Button>
								<Button
									className="wpmozo-button-tabs-btn"
									isPressed={('hover' === iconColor) ? true : false}
									onClick={() => setIconColorType('hover')}
								>{__('Hover', 'wpmozo-blocks-and-addons')}
								</Button>
							</ButtonGroup>
							{'normal' === iconColor &&
								<>
									<WpmozoColorPicker
										props={props}
										ColorKey="triggerIcon"
										ColorTypes={[
											{key: 'Color', label: __('Trigger Icon Color', 'wpmozo-blocks-and-addons')},
										]}
									/>
									<RangeControl
										label={__('Trigger Icon Size (px)', 'wpmozo-blocks-and-addons')}
										value={attributes.triggerIconSize}
										onChange={(newValue) => setAttributes({triggerIconSize: newValue})}
										min={0} step={2} max={200}
									/>
								</>
							}
							{'hover' === iconColor &&
								<>
									<WpmozoColorPicker
										props={props}
										ColorKey="triggerIconHover"
										ColorTypes={[
											{key: 'Color', label: __('Trigger Icon Hover Color', 'wpmozo-blocks-and-addons')},
										]}
									/>
									<RangeControl
										label={__('Trigger Icon Size (px)', 'wpmozo-blocks-and-addons')}
										value={attributes.triggerIconSizeHover}
										onChange={(newValue) => setAttributes({triggerIconSizeHover: newValue})}
										min={0} step={2} max={200}
									/>
								</>
							}
						</BaseControl>
					</>
				)}
				{'text' === attributes.trigerElement && (
					<>
						<WpmozoAlignment
							label={__('Trigger Text Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({TriggerTextAlign: newValue})}
							value={attributes.TriggerTextAlign}
						/>
						<BaseControl className="wpmozo-button-tabs-wrap">
							<ButtonGroup>
								<Button
									className="wpmozo-button-tabs-btn"
									isPressed={('normal' === txtStyle) ? true : false}
									onClick={() => setBtnStyleType('normal')}
								>{__('Normal', 'wpmozo-blocks-and-addons')}</Button>
								<Button
									className="wpmozo-button-tabs-btn"
									isPressed={('hover' === txtStyle) ? true : false}
									onClick={() => setTxtStyleType('hover')}
								>{__('Hover', 'wpmozo-blocks-and-addons')}</Button>
							</ButtonGroup>
							{'normal' === txtStyle &&
								<>
									<WpmozoColorPicker
										props={props}
										ColorKey="TriggerText"
										ColorTypes={[
											{key: 'Color', label: __('Trigger Text Color', 'wpmozo-blocks-and-addons')},
										]}
									/>
									<WpmozoTypography
										props={props}
										TypographyKey="TriggerText"
									/>
								</>
							}
							{'hover' === txtStyle &&
								<>
									<WpmozoColorPicker
										props={props}
										ColorKey="triggerTextHover"
										ColorTypes={[
											{key: 'Color', label: __('Trigger Text Hover Color', 'wpmozo-blocks-and-addons')},
										]}
									/>
									<WpmozoTypography
										props={props}
										TypographyKey="triggerTextHover"
									/>
								</>
							}
						</BaseControl>
					</>
				)}
			</PanelBody>
			<PanelBody title={__('Tooltip Styling', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" initialOpen={false}>
				<SelectControl
					label={__('Entrance Animation', 'wpmozo-blocks-and-addons')}
					value={attributes.entranceAnimation}
					options={animationOptions}
					onChange={ (newValue) => setAttributes( { entranceAnimation: newValue } ) }
					__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
				/>
				<RangeControl
					label={__('Animation Duration ( ms )', 'wpmozo-blocks-and-addons')}
					value={attributes.animationDuration}
					onChange={(newValue) => setAttributes({animationDuration: newValue})}
					min={0} step={10} max={5000}
				/>
				<ToggleControl
					label={__('Show Speech Bubble', 'wpmozo-blocks-and-addons')}
					checked={attributes.showSpeechBubble}
					onChange={(newValue) => setAttributes({showSpeechBubble: newValue})}
				/>
				<ToggleControl
					label={__('Make Interactive Tooltip', 'wpmozo-blocks-and-addons')}
					checked={attributes.makeInteractiveTooltip}
					onChange={(newValue) => setAttributes({makeInteractiveTooltip: newValue})}
				/>
				<RangeControl
					label={__('Tooltip Width (px)', 'wpmozo-blocks-and-addons')}
					value={attributes.tooltipWidth}
					onChange={(newValue) => setAttributes({tooltipWidth: newValue})}
					min={0} step={10} max={2000}
				/>
				<WpmozoColorPicker
					props={props}
					ColorKey="tooltip"
					ColorTypes={[
						{key: 'BackgroundColor', label: __('Tooltip Background Color', 'wpmozo-blocks-and-addons')}
					]}
				/>
				<WpmozoBorder
					props={props}
					BorderKey="tooltip"
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='tooltip'
					DimensionsTypes={{padding: true, margin: true}}
				/>

			</PanelBody>
		</>
	);
};
