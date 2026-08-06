import {__} from '@wordpress/i18n';
import {useState} from "@wordpress/element";

import {
	PanelBody,
	BaseControl,
	ButtonGroup,
	Button,
	ToggleControl,
	SelectControl,
	RangeControl
} from "@wordpress/components";
import {
	WpmozoAlignment,
	WpmozoColorPicker,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoBorder,
	MozoStates
} from '../../../common/components';
import {headingLevelsList} from '../../../common/utils.js';

export const DesignPanel = ({ attributes, setAttributes, hoverState, setHoverState }) => {
	const props = {attributes, setAttributes, preAttributes: {}};

	const [openPanel, setOpenPanel] = useState('panel1');
		
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}

	return (
		<>
			{/* Container. */}
			<PanelBody title={__('Container', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
				<WpmozoDimensions
					DimensionKey='container'
					DimensionsTypes={{
						padding: true,
						margin: true
					}}
					props={props}
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker
							props={props}
							ColorKey={ isHover ? "containerHover" : "container" }
							ColorTypes={[
								{key: 'BackgroundColor', label: isHover ? __('Container Hover Background Color', 'wpmozo-blocks-and-addons') : __('Background Color', 'wpmozo-blocks-and-addons')}
							]}
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoBorder
							props={props}
							BorderKey={ isHover ? "containerHover" : "container" }
						/>
					) }
				/>
			</PanelBody>
			{/* Image. */}
			<PanelBody title={__('Image', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoBorder props={props}
							BorderKey={ isHover ? "imageHover" : "image" }
						/>
					) }
				/>
				<WpmozoDimensions props={props}
								  DimensionKey='imageDimensions'
								  DimensionsTypes={{padding: true}}
				/>
			</PanelBody>
			{/* Title. */}
			<PanelBody title={__('Title', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
				<WpmozoAlignment
					label={__('Title Alignment', 'wpmozo-blocks-and-addons')}
					onChange={(newValue) => setAttributes({titleAlign: newValue})}
					value={attributes.titleAlign}
				/>
				<BaseControl label={__('Heading Level', 'wpmozo-blocks-and-addons')}>
					<ButtonGroup>
						{headingLevelsList.map((item, index) => (
							<Button key={item.value}
									isPressed={item.value === attributes.titleLevel}
									onClick={() => setAttributes({titleLevel: item.value})}
							>{item.label}</Button>
						))}
					</ButtonGroup>
				</BaseControl>
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							ColorKey={ isHover ? "titleHover" : "title" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Title Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoTypography props={props}
							TypographyKey={ isHover ? "titleHover" : "title" }
						/>
					) }
				/>
			</PanelBody>
			{/* Description. */}
			<PanelBody title={__('Description', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
				<WpmozoAlignment
					label={__('Description Alignment', 'wpmozo-blocks-and-addons')}
					onChange={(newValue) => setAttributes({contentAlign: newValue})}
					value={attributes.contentAlign}
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							ColorKey={ isHover ? "contentHover" : "content" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Description Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoTypography props={props}
							TypographyKey={ isHover ? "descriptionHover" : "description" }
						/>
					) }
				/>
			</PanelBody>
			{/* Content Styling. */}
			<PanelBody title={__('Content Styling', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							ColorKey={ isHover ? "contentHoverBackground" : "contentBackground" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Content Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
				<WpmozoDimensions props={props}
					DimensionKey='content'
					DimensionsTypes={{padding: true}}
				/>
			</PanelBody>
			{/* Icon. */}
			<PanelBody title={__('Icon', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel6'} onToggle={()=> handleToggle('panel6')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							ColorKey={ isHover ? "iconHover" : "icon" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
				<RangeControl
					label={__('Icon Font Size', 'wpmozo-blocks-and-addons')}
					value={attributes.iconFontSize}
					onChange={(newValue) => setAttributes({iconFontSize: newValue})}
					min={0} step={1} max={120}
				/>
				<WpmozoAlignment
					label={__('Icon Alignment', 'wpmozo-blocks-and-addons')}
					value={attributes.iconAlign}
					onChange={(newValue) => setAttributes({iconAlign: newValue})}
				/>
				<ToggleControl
					label={__('Style Icon', 'wpmozo-blocks-and-addons')}
					checked={attributes.styleIcon}
					onChange={(newValue) => setAttributes({styleIcon: newValue})}
				/>
				{attributes.styleIcon && <>
					<SelectControl
						label={__('Icon Shape', 'wpmozo-blocks-and-addons')}
						value={attributes.iconShape}
						options={[
							{value: 'square', label: __('Square', 'wpmozo-blocks-and-addons')},
							{value: 'circle', label: __('Circle', 'wpmozo-blocks-and-addons')},
							{value: 'hexagon', label: __('Hexagon', 'wpmozo-blocks-and-addons')}
						]}
						onChange={(newValue) => setAttributes({iconShape: newValue})}
					/>
					<MozoStates
						value={hoverState}
						title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( isHover ) => (
								isHover ? setHoverState(true) : setHoverState(false),
								setAttributes({wrapIsHover: !hoverState})
							)
						}
						control={ ( isHover ) => (
							<WpmozoColorPicker props={props}
								ColorKey={ isHover ? "iconHover" : "icon" }
								label=""
								ColorTypes={[
									{
										key: 'Background',
										label: isHover ? __( 'Icon Hover Background Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Background Color', 'wpmozo-blocks-and-addons' )
									}
								]}
							/>
						) }
					/>
				</>}
				<ToggleControl
					label={__('Show Icon Border', 'wpmozo-blocks-and-addons')}
					checked={attributes.showShapeBorder}
					onChange={(newValue) => setAttributes({showShapeBorder: newValue})}
				/>
				{attributes.showShapeBorder &&
					<WpmozoColorPicker props={props}
									   ColorKey="shapeBorder"
									   label=""
									   ColorTypes={[
										   {key: 'Color', label: __('Border Color', 'wpmozo-blocks-and-addons')}
									   ]}
					/>
				}
				<WpmozoDimensions
					DimensionKey='icon'
					DimensionsTypes={{
						padding: true,
						margin: true
					}}
					props={props}
				/>
			</PanelBody>
			{/* Button. */}
			<PanelBody title={__('Button', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel7'} onToggle={()=> handleToggle('panel7')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							ColorKey={ isHover ? "buttonTextHover" : "buttonText" }
							ColorTypes={[
								{key: isHover ? 'HoverColor' : 'Color', label: isHover ? __( 'Button Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Button Color', 'wpmozo-blocks-and-addons' )},
								{key: isHover ? 'HoverBackground' : 'Background', label: isHover ? __( 'Button Hover Background', 'wpmozo-blocks-and-addons' ) : __( 'Button Background', 'wpmozo-blocks-and-addons' )}
							]}
						/>
					) }
				/>
				<WpmozoAlignment
					label={__('Button Alignment', 'wpmozo-blocks-and-addons')}
					onChange={(newValue) => setAttributes({buttonTextAlign: newValue})}
					value={attributes.buttonTextAlign}
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Typography', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoTypography props={props}
							TypographyKey={ isHover ? "buttonTextHover" : "buttonText" }
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoBorder props={props}
							BorderKey={ isHover ? "buttonTextHover" : "buttonText" }
						/>
					) }
				/>
				<WpmozoDimensions props={props}
								  DimensionKey='buttonDimensions'
								  DimensionsTypes={{padding: true, margin: true}}
				/>
			</PanelBody>
		</>
	);
};