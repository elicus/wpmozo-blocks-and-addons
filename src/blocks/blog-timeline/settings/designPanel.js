import { __ } from '@wordpress/i18n';

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	ButtonGroup,
	BaseControl,
	RangeControl,
	SelectControl,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoIconpicker,
	WpmozoDimensions,
	WpmozoTypography,
	WpmozoColorPicker,
	MozoStates
} from '../../../common/components';
import { headingLevelsList } from '../../../common/utils.js';
import { useEffect, useState } from '@wordpress/element';



export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');

	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	const [ titleType, setTitleType ]   = useState( 'normal' );
	const [ buttonType, setButtonType ] = useState( 'normal' );

	return ( <>
		{/* Timeline Icon. */}
		<PanelBody title={ __( 'Timeline Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={() => handleToggle('panel1')}>
			<WpmozoIconpicker props={props}
				label={__( 'Select Icon', 'wpmozo-blocks-and-addons' ) }
				iconPickerKey='timelineIcon'
				value={ attributes.timelineIcon }
				onChange={ ( newValue ) => setAttributes( { timelineIcon: newValue } ) }
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="timelineIcon"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'FillColor', label: __( 'Icon Fill Color(On Scroll)', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
			<RangeControl
				label={ __( 'Icon Font Size (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.timelineIconFontSize }
				onChange={ ( newValue ) => setAttributes( { timelineIconFontSize: newValue } ) }
				min={1} step={1} max={120}
			/>
			<SelectControl
				label={ __( 'Icon Shape', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.tlIconShape }
				options={ [
					{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
					{ value: 'use_square', label: __( 'Square', 'wpmozo-blocks-and-addons' ) },
					{ value: 'use_circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ (newValue) => setAttributes( { tlIconShape: newValue } ) }
				__next40pxDefaultSize={true} __nextHasNoMarginBottom={true}
			/>
			{ ( 'none' !== attributes.tlIconShape ) && ( <>
				<WpmozoColorPicker props={props}
					label={ __( 'Icon Shape Background', 'wpmozo-blocks-and-addons' ) }
					ColorKey="tlIconShape"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
						{ key: 'FillColor', label: __( 'Fill Background(On Scroll)', 'wpmozo-blocks-and-addons' ) },
					] }
				/><hr />
				<ToggleControl
					label={ __( 'Icon Shape Border', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.tlIconShapeUseBorder }
					onChange={ (newValue) => setAttributes( { tlIconShapeUseBorder: newValue } ) }
					__nextHasNoMarginBottom={true}
				/>
				{ ( attributes.tlIconShapeUseBorder ) && ( <>
					<RangeControl
						label={ __( 'Icon Shape Border Size (px)', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.tlIconShapeBorderSize }
						onChange={ ( newValue ) => setAttributes( { tlIconShapeBorderSize: newValue } ) }
						min={1} step={1} max={100}
					/>
					<WpmozoColorPicker props={props}
						label={ __( 'Icon Shape Border Color', 'wpmozo-blocks-and-addons' ) }
						ColorKey="tlIconShapeBorder"
						ColorTypes={ [
							{ key: 'Color', label: __( 'Border Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'FillColor', label: __( 'Border Fill Color(On Scroll)', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				</> ) }
			</> ) }
		</PanelBody>
		{/* Timeline Stem. */}
		<PanelBody title={ __( 'Timeline Stem', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={() => handleToggle('panel2')}>
			<RangeControl
				label={ __( 'Timeline Stem Width (px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.barSize }
				onChange={ ( newValue ) => setAttributes( { barSize: newValue } ) }
				min={1} step={1} max={10}
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Stem Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="bar"
				ColorTypes={ [
					{ key: 'Color', label: __( 'Stem Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'FillColor', label: __( 'Stem Fill Color(On Scroll)', 'wpmozo-blocks-and-addons' ) },
				] }
			/>
		</PanelBody>
		{/* Timeline Post. */}
		<PanelBody title={ __( 'Timeline Post', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={() => handleToggle('panel3')}>
			<br />
			<RangeControl
				label={ __( 'Featured Image Width (%)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.thumbnailSize }
				onChange={ ( newValue ) => setAttributes( { thumbnailSize: newValue } ) }
				min={1} step={1} max={100}
			/>
			<WpmozoAlignment
				label={ __( 'Featured Image Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { thumbnailAlign: newValue } ) }
				value={ attributes.thumbnailAlign }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Post', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='post'
				DimensionsTypes={ { padding: true } }
			/>
			<MozoStates
				value = {hoverState}
				title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
						
				}
				control={ ( isHover ) => (
					<ColorGradientControl colors={[]} gradients={[]}
						label={ __( 'Post Background', 'wpmozo-blocks-and-addons' ) }
						colorValue={ isHover ? attributes.postHoverBackground : attributes.postBackground }
						gradientValue={ isHover ? attributes.postHoverBGGradient :attributes.postBGGradient }
						onColorChange={ 
							( color ) => setAttributes(
								isHover
									? { postHoverBackground: color || '' }
									: { postBackground: color || '' }
							) 
						}
						onGradientChange={ ( newValue ) => setAttributes(
							 isHover
							 	?{ postHoverBGGradient: newValue } 
							 	:{ postBGGradient: newValue } 
							) 
						}
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
					<WpmozoBorder props={ props }
						label={ __( 'Post Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey={isHover ? "postHover" : "post"}
						BorderTypes={ { border:true, radius: true } }
					/>
				) }
			/>
		</PanelBody>
		{/* Post Title. */}
		<PanelBody title={ __( 'Post Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={() => handleToggle('panel4')}>
			<br />
			<WpmozoAlignment showJustify
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				value={ attributes.titleAlign }
			/>
			<BaseControl label={ __( 'Title Level', 'wpmozo-blocks-and-addons' ) }>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button
							key={ `heading-level-${index}` }
							isPressed={ item.value === attributes.titleLevel }
							onClick={ () => setAttributes( { titleLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
			<hr />
			<MozoStates
				value = {hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
						
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={props}
						label=" "
						ColorKey={ isHover ? "titleHover" : "title" }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Text Color', 'wpmozo-blocks-and-addons' ) }
						] }
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
					<WpmozoTypography props={ props }
						TypographyKey={ isHover ? "titleHover" : "title" }
					/>
				) }
			/>
		</PanelBody>
		{/* Post Excerpt. */}
		{ attributes.showExcerpt &&
			<PanelBody title={ __( 'Post Excerpt', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={() => handleToggle('panel5')}>
				<WpmozoAlignment showJustify
					label={ __( 'Excerpt Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { excerptAlign: newValue } ) }
					value={ attributes.excerptAlign }
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
						<WpmozoColorPicker props={props}
							label=" "
							ColorKey={ isHover ? "excerptHover" : "excerpt" }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Excerpt Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
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
						<WpmozoTypography props={ props }
							TypographyKey={ isHover ? "excerptHover" : "excerpt" }
						/>
					) }
				/>
			</PanelBody>
		}
		{/* Post Date. */}
		{ attributes.showDate &&
			<PanelBody title={ __( 'Post Date', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel6'} onToggle={() => handleToggle('panel6')}>
				<MozoStates
					value = {hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
							
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							label=" "
							ColorKey={ isHover ? "dateHover" : "date" }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Date Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
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
						<WpmozoTypography props={ props }
							TypographyKey={ isHover ? "dateHover" : "date" }
						/>
					) }
				/>
			</PanelBody>

		}
		{/* Post Meta. */}
		{ (attributes.showComments || attributes.showCategories || attributes.showAuthor) &&
			<PanelBody title={ __( 'Post Meta', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel7'} onToggle={() => handleToggle('panel7')}>
				<MozoStates
					value = {hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
							
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={props}
							label=" "
							ColorKey={ isHover ? "metaHover" : "meta" }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Meta Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
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
						<WpmozoTypography props={ props }
							TypographyKey={ isHover ? "metaHover" : "meta" }
						/>
					) }
				/>
			</PanelBody>
		}
		{ ( attributes.showReadMore ) && ( <>
			<PanelBody title={ __( 'Read More Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel8'} onToggle={() => handleToggle('panel8')}>
				<MozoStates
					value = {hoverState}
					title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<ColorGradientControl colors={[]} gradients={[]}
							label={ __( 'Button Background', 'wpmozo-blocks-and-addons' ) }
							colorValue={ isHover ? attributes.buttonHoverBackground : attributes.buttonBackground }
							gradientValue={ isHover ? attributes.buttonHoverBGGradient : attributes.buttonBGGradient }
							onColorChange={ ( color ) => setAttributes(
								isHover
									? { buttonHoverBackground: color || '' }
									: { buttonBackground: color || '' }
							) }
							onGradientChange={ ( color ) => setAttributes(
								isHover
									? { buttonHoverBGGradient: color || '' }
									: { buttonBGGradient: color || '' }
							) }
						/>
					) }
				/>
				<ToggleControl
					label={ __( 'Show Button Icon', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.buttonUseIcon || false }
					onChange={ ( newValue ) => setAttributes( { buttonUseIcon: newValue } ) }
					__nextHasNoMarginBottom={ true }
				/>
				{ ( attributes.buttonUseIcon ) && <>
					<WpmozoIconpicker props={ props }
						label={ __( 'Icon', 'wpmozo-blocks-and-addons' ) }
						iconPickerKey='buttonIcon'
						value={ attributes.buttonIcon }
						onChange={ ( newValue ) => setAttributes( { buttonIcon: newValue } ) }
					/>
					<ToggleGroupControl
						label={ __( 'Icon Position', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.buttonIconPosition }
						onChange={ ( newValue ) => setAttributes( { buttonIconPosition: newValue } ) }
					>
						<ToggleGroupControlOption value="before" label="Before" />
						<ToggleGroupControlOption value="after" label="After" />
					</ToggleGroupControl>
					<ToggleControl
						label={ __( 'Show Icon On Hover', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.buttonIconOnHover }
						onChange={ ( newValue ) => setAttributes( { buttonIconOnHover: newValue } ) }
					/>
				</> }
				<MozoStates
					value = {hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={ props }
							label={ __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey={isHover ? "buttonHover": "button"}
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Text Color', 'wpmozo-blocks-and-addons' ) }
							] }
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
						<WpmozoTypography props={ props }
							TypographyKey={isHover ? "buttonHover" : "button"}
						/>
					) }
				/>
				<WpmozoDimensions props={ props }
					label={ __( 'Button Dimensions', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='button'
					DimensionsTypes={ { padding: true, margin: true } }
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
						<WpmozoBorder props={ props }
							label={ __( 'Button Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey={isHover ? "buttonHover" : "button"}
							BorderTypes={ { border: true, radius: true } }
						/>
					) }
				/>
			</PanelBody>
		</> ) }
	</> );
};
