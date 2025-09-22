import {__} from '@wordpress/i18n';
import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	SelectControl,
	Icon,
	RangeControl
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker, WpmozoDimensions, WpmozoIconpicker, WpmozoMediaUploader
} from "../../../common/components";

export const DesignPanel = ({attributes, setAttributes}) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	return (<>
		<PanelBody title={__('Button', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
				   initialOpen={true}>
			<BaseControl
				label={__('Background Type', 'wpmozo-blocks-and-addons')}
				className="wpmozo-button-tabs-wrap"
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('classic' === attributes.filledBackgroundType) ? true : false}
						onClick={() => setAttributes({filledBackgroundType: 'classic'})}
						label={__('Classic', 'wpmozo-blocks-and-addons')}
					>{__('Classic', 'wpmozo-blocks-and-addons')}</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('gradient' === attributes.filledBackgroundType) ? true : false}
						onClick={() => setAttributes({filledBackgroundType: 'gradient'})}
						label={__('Gradient', 'wpmozo-blocks-and-addons')}
					>{__('Gradient', 'wpmozo-blocks-and-addons')}</Button>
				</ButtonGroup>
				{'classic' === attributes.filledBackgroundType && (
					<>
						<WpmozoColorPicker
							props={props}
							ColorKey="classic"
							ColorTypes={[
								{
									key: 'BackgroundColor',
									label: __('Button Background Color', 'wpmozo-blocks-and-addons'),
								}
							]}
						/>
						<WpmozoMediaUploader props={props}
											 attrKye="classicBackgroundImage"
						/>
					</>
				)}
				{'gradient' === attributes.filledBackgroundType && (
					<WpmozoColorPicker
						props={props}
						ColorKey="gradient"
						ColorTypes={[
							{
								key: 'BackgroundColor',
								label: __('Button Background Color', 'wpmozo-blocks-and-addons'),
								onlyGradient: true,
							}
						]}
					/>
				)}
			</BaseControl>
			<WpmozoBorder
				props={props}
				BorderKey="buttonContainer"
			/>
			<WpmozoDimensions
				DimensionKey='buttonContainer'
				DimensionsTypes={{
					padding: true,
					margin: true
				}}
				props={props}
			/>
		</PanelBody>
		<PanelBody title={__('Primary Text', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
				   initialOpen={false}>
			<WpmozoAlignment
				label={__('Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({primaryAlign: newValue})}
				value={attributes.primaryAlign}
			/>
			<WpmozoColorPicker props={props}
							   ColorKey="button"
							   ColorTypes={[
								   {key: 'Color', label: __('Button Color', 'wpmozo-blocks-and-addons')}
							   ]}
			/>
			<WpmozoTypography
				TypographyKey="button"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={__('Secondary Text', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
				   initialOpen={false}>
			<WpmozoAlignment
				label={__('Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({secAlign: newValue})}
				value={attributes.secAlign}
			/>
			<WpmozoColorPicker
				props={props}
				ColorKey="secondaryText"
				ColorTypes={[
					{key: 'Color', label: __('Button Color', 'wpmozo-blocks-and-addons')}
				]}
			/>
			<WpmozoTypography
				TypographyKey="secondaryText"
				props={props}
			/>
		</PanelBody>
		<PanelBody title={__('Button Icon', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
				   initialOpen={false}>
			<ToggleControl
				label={__('Use Icon on Button', 'wpmozo-blocks-and-addons')}
				checked={attributes.iconButton}
				onChange={(newValue) => setAttributes({iconButton: newValue})}
			/>
			{attributes.iconButton && (
				<>
					<WpmozoIconpicker
						props={props}
						label={__('Button Icon', 'wpmozo-blocks-and-addons')}
						iconPickerKey='icon'
						value={attributes.icon}
						onChange={(newValue) => setAttributes({icon: newValue})}
					/>
					<ToggleGroupControl
						label={__('Icon Position', 'wpmozo-blocks-and-addons')}
						value={attributes.buttonMediaPosition}
						onChange={(newValue) => setAttributes({buttonMediaPosition: newValue})}
					>
						<ToggleGroupControlOption icon={<Icon icon="external"/>} value="before" label="Before"/>
						<ToggleGroupControlOption value="after" label="After"/>
					</ToggleGroupControl>
					<ToggleControl
						label={__('Show Icon On Hover', 'wpmozo-blocks-and-addons')}
						checked={attributes.showMediaOnHover}
						onChange={(newValue) => setAttributes({showMediaOnHover: newValue})}
					/>
					<WpmozoColorPicker
						props={props}
						ColorKey="icon"
						ColorTypes={[
							{key: 'Color', label: __('Button Icon Color', 'wpmozo-blocks-and-addons')}
						]}
					/>
					<RangeControl
						label={__('Icon Font Size (px)', 'wpmozo-blocks-and-addons')}
						value={attributes.iconFontSize}
						onChange={(newValue) => setAttributes({iconFontSize: newValue})}
						min={0} step={1} max={120}
					/>
					<WpmozoDimensions
						DimensionKey='icon'
						DimensionsTypes={{
							padding: true,
							margin: true
						}}
						props={props}
					/>
				</>
			)}
		</PanelBody>
		<PanelBody title={__('Button Hover', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
				   initialOpen={false}>
			<SelectControl
				label={__('Background Fill Style', 'wpmozo-blocks-and-addons')}
				value={attributes.backgroundFillStyle}
				options={[
					{
						value: 'default_fill',
						label: __('Default', 'wpmozo-blocks-and-addons'),
					},
					{
						value: 'wipe_fill',
						label: __('Wipe', 'wpmozo-blocks-and-addons'),
					},
					{
						value: 'slide_up_fill',
						label: __('Slide Up', 'wpmozo-blocks-and-addons'),
					},
					{
						value: 'slide_down_fill',
						label: __('Slide Down', 'wpmozo-blocks-and-addons'),
					},
					{
						value: 'slide_left_fill',
						label: __('Slide Left', 'wpmozo-blocks-and-addons'),
					},
					{
						value: 'slide_right_fill',
						label: __('Slide Right', 'wpmozo-blocks-and-addons'),
					},
					{
						value: 'vertical_shutter_fill',
						label: __('Vertical Shutter', 'wpmozo-blocks-and-addons'),
					},
					{
						value: 'horizontal_shutter_fill',
						label: __('Horizontal Shutter', 'wpmozo-blocks-and-addons'),
					},
				]}
				onChange={(newValue) => setAttributes({backgroundFillStyle: newValue})}
			/>
			<BaseControl
				label={__('Background Type', 'wpmozo-blocks-and-addons')}
				className="wpmozo-button-tabs-wrap"
			>
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('classic' === attributes.filledBackgroundTypeHover) ? true : false}
						onClick={() => setAttributes({filledBackgroundTypeHover: 'classic'})}
						label={__('Classic', 'wpmozo-blocks-and-addons')}
					>{__('Classic', 'wpmozo-blocks-and-addons')}</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('gradient' === attributes.filledBackgroundTypeHover) ? true : false}
						onClick={() => setAttributes({filledBackgroundTypeHover: 'gradient'})}
						label={__('Gradient', 'wpmozo-blocks-and-addons')}
					>{__('Gradient', 'wpmozo-blocks-and-addons')}</Button>
				</ButtonGroup>
				{'classic' === attributes.filledBackgroundTypeHover && (
					<>
						<WpmozoColorPicker
							props={props}
							ColorKey="classic"
							ColorTypes={[
								{
									key: 'BackgroundColorHover',
									label: __('Button Background Color', 'wpmozo-blocks-and-addons'),
								}
							]}
						/>
						<WpmozoMediaUploader props={props}
											 attrKye="classicBackgroundImageHover"
						/>
					</>
				)}
				{'gradient' === attributes.filledBackgroundTypeHover && (
					<WpmozoColorPicker
						props={props}
						ColorKey="gradient"
						ColorTypes={[
							{
								key: 'BackgroundColorHover',
								label: __('Button Background Color', 'wpmozo-blocks-and-addons'),
								onlyGradient: true,
							}
						]}
					/>
				)}
			</BaseControl>
			<WpmozoColorPicker
				props={props}
				ColorKey="ButtonHover"
				ColorTypes={[
					{
						key: 'Color',
						label: __('Primary Text Color', 'wpmozo-blocks-and-addons'),
					},
					{
						key: 'secColor',
						label: __('Secondary Text Color', 'wpmozo-blocks-and-addons'),
					},
					{
						key: 'IconColor',
						label: __('Button Icon Color', 'wpmozo-blocks-and-addons'),
					}
				]}
			/>
		</PanelBody>
	</>);
};
