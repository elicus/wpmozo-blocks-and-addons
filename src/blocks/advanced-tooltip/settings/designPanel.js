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
	WpmozoColorPicker, 
	WpmozoIconpicker, 
	WpmozoDimensions,
	MozoStates
} from "../../../common/components";
import {headingLevelsList} from '../../../common/utils.js';

export const DesignPanel = ({attributes, setAttributes, hoverState, setHoverState}) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	const [btnStyle, setBtnStyleType] = useState('normal');
	const [iconColor, setIconColorType] = useState('normal');
	const [textStyle, setTextStyleType] = useState('normal');
	const [openPanel, setOpenPanel] = useState('panel1');

	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

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
			<PanelBody title={__(`Trigger ${attributes.trigerElement.charAt(0).toUpperCase() + attributes.trigerElement.slice(1)}`, 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={() => handleToggle('panel1')}>
				{'button' === attributes.trigerElement && (
					<>
						<WpmozoAlignment
							label={__('Button Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({buttonAlign: newValue})}
							value={attributes.buttonAlign}
							separatorAfter
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
												isBlock={false}
											>
												<ToggleGroupControlOptionIcon value="before" icon="arrow-left-alt2" label={ __( 'Before', 'wpmozo-blocks-and-addons' ) } />
												<ToggleGroupControlOptionIcon value="after" icon="arrow-right-alt2" label={ __( 'After', 'wpmozo-blocks-and-addons' ) } />
											</ToggleGroupControl>
											<ToggleControl
												label={__('Show Icon On Hover', 'wpmozo-blocks-and-addons')}
												checked={attributes.buttonIconOnHover}
												onChange={(newValue) => setAttributes({buttonIconOnHover: newValue})}
											/>
										</>

								}
								<MozoStates
									value = {hoverState}
									title={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
									onChange={ ( isHover ) =>  (
											isHover ?  setHoverState(true) : setHoverState(false),
											setAttributes({wrapIsHover: !hoverState})
										)
											
									}
									control={ ( isHover ) => (
										<WpmozoColorPicker
											props={props}
											label=" "
											ColorKey={ isHover ? "buttonHover" : "button" }
											ColorTypes={[
												{key: 'Color', label: __('Button Text Color', 'wpmozo-blocks-and-addons')},
												{key: 'Background', label: __('Button Background', 'wpmozo-blocks-and-addons')}
											]}
										/>
									) }
								/>
								<MozoStates
									value = {hoverState}
									title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
									onChange={ ( isHover ) =>  (
											isHover ?  setHoverState(true) : setHoverState(false),
											setAttributes({wrapIsHover: !hoverState})
										)	
									}
									control={ ( isHover ) => (
										<WpmozoTypography
											label=" "
											props={props}
											TypographyKey={ isHover ? "buttonHover" : "button" }
										/>
									) }
								/>
								<MozoStates
									value = {hoverState}
									title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
									onChange={ ( isHover ) =>  (
											isHover ?  setHoverState(true) : setHoverState(false),
											setAttributes({wrapIsHover: !hoverState})
										)	
									}
									control={ ( isHover ) => (
										<WpmozoBorder
											label=" "
											props={props}
											BorderKey={ isHover ? "buttonHover" : "button" }
										/>
									) }
								/>
								<MozoStates
									value = {hoverState}
									title={ __( 'Dimensions', 'wpmozo-blocks-and-addons' ) }
									onChange={ ( isHover ) =>  (
											isHover ?  setHoverState(true) : setHoverState(false),
											setAttributes({wrapIsHover: !hoverState})
										)	
									}
									control={ ( isHover ) => (
										<WpmozoDimensions
											label= " "
											props={props}
											DimensionKey={ isHover ? "buttonHover" : "button" }
											DimensionsTypes={isHover ? {padding: true} : {padding: true, margin: true}}
										/>
									) }
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
							label={__('Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({triggerIconAlign: newValue})}
							value={attributes.triggerIconAlign}
							separatorAfter
						/>
						<MozoStates
							value = {hoverState}
							title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( isHover ) =>  (
									isHover ?  setHoverState(true) : setHoverState(false),
									setAttributes({wrapIsHover: !hoverState})
								)
									
							}
							control={ ( isHover ) => (
								<WpmozoColorPicker
									props={props}
									label=" "
									ColorKey={ isHover ? "triggerIconHover" : "triggerIcon" }
									ColorTypes={[
										{key: 'Color', label: __('Icon Color', 'wpmozo-blocks-and-addons')},
									]}
								/>
							) }
						/>
						<MozoStates
							value = {hoverState}
							title={ __( 'Icon Size(px)', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( isHover ) =>  (
									isHover ?  setHoverState(true) : setHoverState(false),
									setAttributes({wrapIsHover: !hoverState})
								)
									
							}
							control={ ( isHover ) => (
								<RangeControl
									label={__(' ', 'wpmozo-blocks-and-addons')}
									value={ isHover ? attributes.triggerIconSizeHover : attributes.triggerIconSize }
									onChange={ ( newValue ) => setAttributes(
										isHover
											? { triggerIconSizeHover: newValue }
											: { triggerIconSize: newValue }
									) }
									min={0} step={2} max={200}
									allowReset={true}
								/>
							) }
						/>
					</>
				)}
				{'text' === attributes.trigerElement && (
					<>
						<WpmozoAlignment
							label={__('Trigger Text Alignment', 'wpmozo-blocks-and-addons')}
							onChange={(newValue) => setAttributes({TriggerTextAlign: newValue})}
							value={attributes.TriggerTextAlign}
							separatorAfter
						/>
						<MozoStates
							value = {hoverState}
							title={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( isHover ) =>  (
									isHover ?  setHoverState(true) : setHoverState(false),
									setAttributes({wrapIsHover: !hoverState})
								)
									
							}
							control={ ( isHover ) => (
								<WpmozoColorPicker
									props={props}
									ColorKey={ isHover ? "triggerTextHover" : "TriggerText" }
									ColorTypes={[
										{key: 'Color', label: __('Trigger Text Color', 'wpmozo-blocks-and-addons')},
									]}
								/>
							) }
						/>
						<MozoStates
							value = {hoverState}
							title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( isHover ) =>  (
									isHover ?  setHoverState(true) : setHoverState(false),
									setAttributes({wrapIsHover: !hoverState})
								)
									
							}
							control={ ( isHover ) => (
								<>
									<WpmozoTypography
										label= " "
										props={props}
										TypographyKey={ isHover ? "triggerTextHover" : "TriggerText" }
									/>
								</>
							) }
						/>
					</>
				)}
			</PanelBody>
			<PanelBody title={__('Tooltip Styling', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel"             onToggle={() => handleToggle('panel2')} opened={openPanel === 'panel2'}>
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
