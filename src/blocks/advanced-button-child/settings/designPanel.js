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
	WpmozoColorPicker,
	WpmozoDimensions,
	WpmozoIconpicker,
	WpmozoMediaUploader,
	MozoStates,
} from "../../../common/components";

export const DesignPanel = ({attributes, setAttributes, hoverState, setHoverState}) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	return (<>
		<PanelBody title={__('Button', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
				   initialOpen={true}>
			<MozoStates
				value={hoverState}
				title={__('Button Background', 'wpmozo-blocks-and-addons')}
				onChange={(isHover) => (
					isHover ? setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)}
				control={(isHover) => (
					<>
						{isHover && (
							<SelectControl
								label={__('Background Fill Style', 'wpmozo-blocks-and-addons')}
								value={attributes.backgroundFillStyle}
								options={[
									{ value: 'default_fill', label: __('Default', 'wpmozo-blocks-and-addons') },
									{ value: 'wipe_fill', label: __('Wipe', 'wpmozo-blocks-and-addons') },
									{ value: 'slide_up_fill', label: __('Slide Up', 'wpmozo-blocks-and-addons') },
									{ value: 'slide_down_fill', label: __('Slide Down', 'wpmozo-blocks-and-addons') },
									{ value: 'slide_left_fill', label: __('Slide Left', 'wpmozo-blocks-and-addons') },
									{ value: 'slide_right_fill', label: __('Slide Right', 'wpmozo-blocks-and-addons') },
									{ value: 'vertical_shutter_fill', label: __('Vertical Shutter', 'wpmozo-blocks-and-addons') },
									{ value: 'horizontal_shutter_fill', label: __('Horizontal Shutter', 'wpmozo-blocks-and-addons') },
								]}
								onChange={(newValue) => setAttributes({backgroundFillStyle: newValue})}
							/>
						)}
						<BaseControl
							label={__('Background Type', 'wpmozo-blocks-and-addons')}
							className="wpmozo-button-tabs-wrap"
						>
							<ButtonGroup>
								<Button
									className="wpmozo-button-tabs-btn"
									isPressed={(isHover ? ('classic' === attributes.filledBackgroundTypeHover) : ('classic' === attributes.filledBackgroundType))}
									onClick={() => setAttributes(isHover ? {filledBackgroundTypeHover: 'classic'} : {filledBackgroundType: 'classic'})}
									label={__('Classic', 'wpmozo-blocks-and-addons')}
								>{__('Classic', 'wpmozo-blocks-and-addons')}</Button>
								<Button
									className="wpmozo-button-tabs-btn"
									isPressed={(isHover ? ('gradient' === attributes.filledBackgroundTypeHover) : ('gradient' === attributes.filledBackgroundType))}
									onClick={() => setAttributes(isHover ? {filledBackgroundTypeHover: 'gradient'} : {filledBackgroundType: 'gradient'})}
									label={__('Gradient', 'wpmozo-blocks-and-addons')}
								>{__('Gradient', 'wpmozo-blocks-and-addons')}</Button>
							</ButtonGroup>
							{(isHover ? ('classic' === attributes.filledBackgroundTypeHover) : ('classic' === attributes.filledBackgroundType)) && (
								<>
									<WpmozoColorPicker
										props={props}
										ColorKey="classic"
										ColorTypes={[
											{
												key: isHover ? 'BackgroundColorHover' : 'BackgroundColor',
												label: __('Button Background Color', 'wpmozo-blocks-and-addons'),
											}
										]}
									/>
									<WpmozoMediaUploader props={props}
														 attrKye={isHover ? "classicBackgroundImageHover" : "classicBackgroundImage"}
									/>
								</>
							)}
							{(isHover ? ('gradient' === attributes.filledBackgroundTypeHover) : ('gradient' === attributes.filledBackgroundType)) && (
								<WpmozoColorPicker
									props={props}
									ColorKey="gradient"
									ColorTypes={[
										{
											key: isHover ? 'BackgroundColorHover' : 'BackgroundColor',
											label: __('Button Background Color', 'wpmozo-blocks-and-addons'),
											onlyGradient: true,
										}
									]}
								/>
							)}
						</BaseControl>
					</>
				)}
			/>
			<MozoStates
				value={hoverState}
				title={__('Button Border', 'wpmozo-blocks-and-addons')}
				onChange={(isHover) => (
					isHover ? setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)}
				control={(isHover) => (
					<WpmozoBorder
						props={props}
						BorderKey={isHover ? "buttonContainerHover" : "buttonContainer"}
					/>
				)}
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
			<MozoStates
				value={hoverState}
				title={__('Primary Text Color', 'wpmozo-blocks-and-addons')}
				onChange={(isHover) => (
					isHover ? setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)}
				control={(isHover) => (
					<WpmozoColorPicker
						props={props}
						ColorKey={isHover ? "ButtonHover" : "button"}
						ColorTypes={[
							{key: 'Color', label: __('Primary Text Color', 'wpmozo-blocks-and-addons')}
						]}
					/>
				)}
			/>
			<MozoStates
				value={hoverState}
				title={__('Primary Text Typography', 'wpmozo-blocks-and-addons')}
				onChange={(isHover) => (
					isHover ? setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)}
				control={(isHover) => (
					<WpmozoTypography
						TypographyKey={isHover ? "buttonHover" : "button"}
						props={props}
					/>
				)}
			/>
		</PanelBody>
		<PanelBody title={__('Secondary Text', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"
				   initialOpen={false}>
			<WpmozoAlignment
				label={__('Text Alignment', 'wpmozo-blocks-and-addons')}
				onChange={(newValue) => setAttributes({secAlign: newValue})}
				value={attributes.secAlign}
			/>
			<MozoStates
				value={hoverState}
				title={__('Secondary Text Color', 'wpmozo-blocks-and-addons')}
				onChange={(isHover) => (
					isHover ? setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)}
				control={(isHover) => (
					<WpmozoColorPicker
						props={props}
						ColorKey={isHover ? "ButtonHover" : "secondaryText"}
						ColorTypes={[
							{key: isHover ? 'secColor' : 'Color', label: __('Secondary Text Color', 'wpmozo-blocks-and-addons')}
						]}
					/>
				)}
			/>
			<MozoStates
				value={hoverState}
				title={__('Secondary Text Typography', 'wpmozo-blocks-and-addons')}
				onChange={(isHover) => (
					isHover ? setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)}
				control={(isHover) => (
					<WpmozoTypography
						TypographyKey={isHover ? "secondaryTextHover" : "secondaryText"}
						props={props}
					/>
				)}
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
					<MozoStates
						value={hoverState}
						title={__('Button Icon Color', 'wpmozo-blocks-and-addons')}
						onChange={(isHover) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)}
						control={(isHover) => (
							<WpmozoColorPicker
								props={props}
								ColorKey={isHover ? "ButtonHover" : "icon"}
								ColorTypes={[
									{key: isHover ? 'IconColor' : 'Color', label: __('Button Icon Color', 'wpmozo-blocks-and-addons')}
								]}
							/>
						)}
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
	</>);
};
