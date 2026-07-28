// inspector.js
import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	Button,
	PanelBody,
	ButtonGroup,
	RangeControl,
	ToggleControl,
	BaseControl,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoDimensions,
	WpmozoColorPicker,
	MozoStates
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
									
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}


	const [ quoteIconTab, setQuoteIconTab ] = useState( 'opening' );

	const [ bodyTextTab, setBodyTextTab ]       = useState( 'normal' );
	const [ authorNameTab, setAuthorNameTab ]   = useState( 'normal' );
	const [ designationTab, setDesignationTab ] = useState( 'normal' );
	const [ companyNameTab, setCompanyNameTab ] = useState( 'normal' );

	return ( <>
		{/* Alignment. */}
		<PanelBody title={ __( 'Alignment', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<WpmozoAlignment
				label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.globalTextAlign }
				showJustify={ true }
				onChange={ ( newValue ) => setAttributes( { globalTextAlign: newValue } ) }
			/>
		</PanelBody>
		{/* Body. */}
		<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
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
						label={__( 'Content Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "bodyHover" : "body" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) }
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
					<WpmozoTypography
						label={__( 'Content Typography', 'wpmozo-blocks-and-addons' )}
						TypographyKey={ isHover ? "bodyHover" : "body" }
						props={ props }
					/>
				) }
			/>
		</PanelBody>
		{/* Author Image. */}
		{ attributes.showAuthorImage &&
			<PanelBody title={ __( 'Author Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
				<WpmozoBorder props={ props }
					label={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="authorImage"
					BorderTypes={ { border: true, radius: true } }
				/>
			</PanelBody>
		}
		{/* Author Name. */}
		<PanelBody title={ __( 'Author Name', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
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
						label={__( 'Author Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "authorNameHover" : "authorName" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Author Color', 'wpmozo-blocks-and-addons' ) }
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
					<WpmozoTypography
						label={__( 'Author Typography', 'wpmozo-blocks-and-addons' )}
						TypographyKey={ isHover ? "authorNameHover" : "authorName" }
						props={ props }
					/>
				) }
			/>
		</PanelBody>
		{/* Designation. */}
		{ attributes.showDesignation &&
			<PanelBody title={ __( 'Designation', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
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
							label={__( 'Designation Color', 'wpmozo-blocks-and-addons' )}
							ColorKey={ isHover ? "designationHover" : "designation" }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Designation Color', 'wpmozo-blocks-and-addons' ) }
							] }
						/>
					) }
				/>
				<MozoStates
					value = {hoverState}
					title={ __( 'Designation Typography', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<WpmozoTypography
							TypographyKey={ isHover ? "designationHover" : "designation" }
							props={ props }
						/>
					) }
				/>
			</PanelBody>
		}
		{/* Company Name. */}
		{ attributes.showCompany &&
			<PanelBody title={ __( 'Company Name', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel6'} onToggle={()=> handleToggle('panel6')}>
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
							label={__( 'Company Name Color', 'wpmozo-blocks-and-addons' )}
							ColorKey={ isHover ? "companyNameHover" : "companyName" }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Company Name Color', 'wpmozo-blocks-and-addons' ) }
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
						<WpmozoTypography
							label={__( 'Company Name Typography', 'wpmozo-blocks-and-addons' )}
							TypographyKey={ isHover ? "companyNameHover" : "companyName" }
							props={ props }
						/>
					) }
				/>
			</PanelBody>
		}
		{/* Star Rating. */}
		<PanelBody title={ __( 'Star Rating', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel7'} onToggle={()=> handleToggle('panel7')}>
			<RangeControl
				label={ __( 'Star Font Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.starFontSize }
				onChange={ ( newValue ) => setAttributes( { starFontSize: newValue } ) }
				min={ 10 } max={ 100 } step={ 1 }
			/>
			<WpmozoColorPicker props={props}
				label={ __( 'Star Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="star"
				ColorTypes={ [
					{ key: 'FilledColor', label: __( 'Star Filled Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'EmptyColor', label: __( 'Star Empty Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
		</PanelBody>
		{/* Quote Icon. */}
		<PanelBody title={ __( 'Quote Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel8'} onToggle={()=> handleToggle('panel8')}>
			<BaseControl className="wpmozo-color-combo-wrap">
				<ButtonGroup>
					<Button
						className='wpmozo-color-combo-type'
						isPressed={ ( 'opening' === quoteIconTab ) ? true : false }
						onClick={ () => setQuoteIconTab( 'opening' ) }
					>{ __( 'Opening', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button
						className='wpmozo-color-combo-type'
						isPressed={ ( 'closing' === quoteIconTab ) ? true : false }
						onClick={ () => setQuoteIconTab( 'closing' ) }
					>{ __( 'Closing', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'opening' === quoteIconTab && <>
					<ToggleControl
						label={ __( 'Show Opening Quote Icon', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showOpenQuoteIcon }
						onChange={ ( newValue ) => setAttributes( { showOpenQuoteIcon: newValue } ) }
					/>
					{ attributes.showOpenQuoteIcon && <>
						<RangeControl
							label={ __( 'Quote Icon Size', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.openQuoteIconSize }
							onChange={ ( newValue ) => setAttributes( { openQuoteIconSize: newValue } ) }
							min={ 1 } max={ 350 } step={ 1 }
						/>
						<WpmozoColorPicker ColorKey="openQuoteIcon"
							label={ __( 'Quote Icon Color', 'wpmozo-blocks-and-addons' ) }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Quote Icon Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
					</> }
				</> }
				{ 'closing' === quoteIconTab && <>
					<ToggleControl
						label={ __( 'Show Closing Quote Icon', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.showCloseQuoteIcon }
						onChange={ ( newValue ) => setAttributes( { showCloseQuoteIcon: newValue } ) }
					/>
					{ attributes.showCloseQuoteIcon && <>
						<RangeControl
							label={ __( 'Quote Icon Size', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.closeQuoteIconSize }
							onChange={ ( newValue ) => setAttributes( { closeQuoteIconSize: newValue } ) }
							min={ 1 } max={ 350 } step={ 1 }
						/>
						<WpmozoColorPicker ColorKey="closeQuoteIcon"
							label={ __( 'Quote Icon Color', 'wpmozo-blocks-and-addons' ) }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Quote Icon Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
					</> }
				</> }
			</BaseControl>
		</PanelBody>
		{/* Slider. */}
		{(attributes.showArrows || attributes.showControlDot ) && <PanelBody title={ __( 'Slider', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel9'} onToggle={()=> handleToggle('panel9')}>
			{attributes.showArrows && <>
				<WpmozoDimensions props={ props }
					label={ __( 'Arrows Dimensions', 'wpmozo-blocks-and-addons' ) }
					DimensionKey='arrow'
					DimensionsTypes={ { padding: true } }
				/>
				<RangeControl
					label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.arrowIconSize }
					onChange={ ( newValue ) => setAttributes( { arrowIconSize: newValue } ) }
					min={10} max={100} step={1}
				/>
				<WpmozoColorPicker props={props}
					label={ __( 'Arrows Color', 'wpmozo-blocks-and-addons' ) }
					ColorKey="arrow"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'Background', label: __( 'Arrow Background Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoBorder props={ props }
					label={ __( 'Arrows Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="arrow"
					BorderTypes={ { border: true, radius: true } }
				/>
			</>}
			{ attributes.showControlDot && 
				<WpmozoColorPicker
					label={ __( 'Control Dot Color', 'wpmozo-blocks-and-addons' ) }
					ColorKey="controlDot"
					props={ props }
					ColorTypes={ [
						{ key: 'ColorActive', label: __( 'Active Dot Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'ColorInactive', label: __( 'Inactive Dot Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/> }
		</PanelBody>}
		{/* Meta. */}
		{ 'layout1' === attributes.layout &&
			<PanelBody title={ __( 'Meta', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel10'} onToggle={()=> handleToggle('panel10')}>
				<WpmozoColorPicker props={props}
					label={ __( 'Meta Separator', 'wpmozo-blocks-and-addons' ) }
					ColorKey="metaSeparator"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Select Color', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
			</PanelBody>
		}
		{/* Testimonial. */}
		<PanelBody title={ __( 'Testimonial', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel11'} onToggle={()=> handleToggle('panel11')}>
			<ColorGradientControl colors={[]} gradients={[]}
				label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
				colorValue={ attributes.testimonialBackground }
				gradientValue={ attributes.testimonialBGGradient }
				onColorChange={ (newValue) => setAttributes( { testimonialBackground: newValue } ) }
				onGradientChange={ (newValue) => setAttributes( { testimonialBGGradient: newValue } ) }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Testimonial Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='testimonial'
				DimensionsTypes={ { padding: true } }
			/>
			<WpmozoBorder props={ props }
				label={ __( 'Testimonial Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="testimonial"
				BorderTypes={ { border: true, radius: true } }
			/>
		</PanelBody>
		{/* Slider Container. */}
		<PanelBody title={ __( 'Slider Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel12'} onToggle={()=> handleToggle('panel12')}>
			<WpmozoDimensions props={ props }
				label={ __( 'Container Dimensions', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='container'
				DimensionsTypes={ { padding: true } }
			/>
		</PanelBody>
	</> );
};
