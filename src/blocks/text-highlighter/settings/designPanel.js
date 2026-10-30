import { __ } from '@wordpress/i18n';
import {
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker,
	WpmozoDimensions,
	MozoStates
} from '../../../common/components/index.js';
import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl,
	ToggleControl
} from '@wordpress/components';
import { useState } from 'react';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
									
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}


	return ( <>
		{/* Highlighter. */}
		<PanelBody title={ __( 'Highlighter Settings', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<MozoStates
				value = {hoverState}
				title={ __( 'Highlighter Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
					isHover ?  setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)
						
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker
						props={props}
						ColorKey={ isHover ? 'highlighterHover' : 'highlighter' }
						label={ '' }
						ColorTypes={ [
						{ key: 'Color', label: __( 'Highlighter Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
			/>
			<hr></hr>
			<MozoStates
				value = {hoverState}
				title={ __( 'Stroke Width', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
					isHover ?  setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)
						
				}
				control={ ( isHover ) => (
					<RangeControl
						value={isHover ? attributes.stockWidthHover : attributes.stockWidth}
						onChange={ ( newValue ) => setAttributes(
							isHover
								? { stockWidthHover: newValue }
								: { stockWidth: newValue }
						) }
						min={0}
						step={0.1}
						max={10}
						allowReset
						marginBottom="20px"
					/>
				) }
			/>
			<hr></hr>
			<RangeControl
				label={__('Stroke Animation Duration', 'wpmozo-blocks-and-addons')}
				value={attributes.strokePaintAnimationDuration}
				onChange={(newValue) => setAttributes({strokePaintAnimationDuration: newValue})}
				min={0}
				step={1}
				max={20}
				allowReset
			/>
			<RangeControl
				label={__('Stroke Paint Animation Delay', 'wpmozo-blocks-and-addons')}
				value={attributes.stockPaintAnimationDelay}
				onChange={(newValue) => setAttributes({stockPaintAnimationDelay: newValue})}
				min={0}
				step={0.1}
				max={10}
				allowReset
			/>
			<hr></hr>
			<ToggleControl
				label={__('Custom Position For Highlighter', 'wpmozo-blocks-and-addons')}
				checked={attributes.customPositionForHighlighter}
				onChange={(newValue) => setAttributes({customPositionForHighlighter: newValue})}
			/>
			{attributes.customPositionForHighlighter && (
				<>
					<RangeControl
						label={__('Vertical', 'wpmozo-blocks-and-addons')}
						value={attributes.customVerticalPosition}
						onChange={(newValue) => setAttributes({customVerticalPosition: newValue})}
						min={-1000}
						step={1}
						max={1000}
						allowReset
					/>
					<RangeControl
						label={__('Horizontal', 'wpmozo-blocks-and-addons')}
						value={attributes.customHorizontalPosition}
						onChange={(newValue) => setAttributes({customHorizontalPosition: newValue})}
						min={-1000}
						step={1}
						max={1000}
						allowReset
					/>

				</>
			)}
		</PanelBody>
		<PanelBody title={__('Text Settings', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('global' === attributes.typeTextSettings) ? true : false}
						onClick={() => setAttributes({typeTextSettings: 'global'})}
						label={__('Global', 'wpmozo-blocks-and-addons')}
					>
						{__('Global', 'wpmozo-blocks-and-addons')}
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('pre' === attributes.typeTextSettings) ? true : false}
						onClick={() => setAttributes({typeTextSettings: 'pre'})}
						label={__('Pre', 'wpmozo-blocks-and-addons')}
					>
						{__('Pre', 'wpmozo-blocks-and-addons')}
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('main' === attributes.typeTextSettings) ? true : false}
						onClick={() => setAttributes({typeTextSettings: 'main'})}
						label={__('Main', 'wpmozo-blocks-and-addons')}
					>
						{__('Main', 'wpmozo-blocks-and-addons')}
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={('post' === attributes.typeTextSettings) ? true : false}
						onClick={() => setAttributes({typeTextSettings: 'post'})}
						label={__('Post', 'wpmozo-blocks-and-addons')}
					>
						{__('Post', 'wpmozo-blocks-and-addons')}
					</Button>
				</ButtonGroup>
			</BaseControl>
			{ 'global' === attributes.typeTextSettings && (
				<>
					<WpmozoAlignment
						label={ __( 'Global Text Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { globalTextAlignment: newValue } ) }
						value={ attributes.globalTextAlignment }
					/>
					<hr></hr>
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
								ColorKey={ isHover ? 'globalTextHover' : 'globalText' }
								label={ __( 'Global Text', 'wpmozo-blocks-and-addons' ) }
								ColorTypes={ [
								{ key: 'Color', label: __( 'Global Text Color', 'wpmozo-blocks-and-addons' ) }
								] }
							/>
						) }
					/>
					<WpmozoTypography
						TypoTypes={{
							'FontSize': true,
							'LetterSpacing': true,
							'FontAppearance': true,
							'LetterCase': true,
							'LineHeight': true,
						}}
						props={props}
						TypographyKey="global"
						label={ __( 'Global Typography', 'wpmozo-blocks-and-addons' ) }
					/>
				</>
			)}
			{ 'pre' === attributes.typeTextSettings && (
				<>
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
								label={ __( 'Pre Text', 'wpmozo-blocks-and-addons' ) }
								ColorKey={ isHover ? 'preTextHover' : 'preText' }
								ColorTypes={ [
									{ key: 'Color', label: __( 'Pre Text Color', 'wpmozo-blocks-and-addons' ) }
								] }
							/>
						) }
					/>
					<WpmozoTypography
						TypographyKey="pre"
						label="Pre Typography"
						props={props}
					/>
					<WpmozoDimensions
						props={props}
						label={ __( 'Pre Text Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='pre'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</>
			)}
			{ 'main' === attributes.typeTextSettings && (
				<>
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
								label={ __( 'Main Text', 'wpmozo-blocks-and-addons' ) }
								ColorKey={ isHover ? 'mainTextHover' : 'mainText' }
								ColorTypes={ [
									{ key: 'Color', label: __( 'Main Text Color', 'wpmozo-blocks-and-addons' ) }
								] }
							/>
						) }
					/>
					<WpmozoTypography
						TypographyKey="main"
						label="Main Typography"
						props={props}
					/>
					<WpmozoDimensions
						props={props}
						label={ __( 'Main Text Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='main'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</>
			)}
			{ 'post' === attributes.typeTextSettings && (
				<>
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
								label={ __( 'Post Text', 'wpmozo-blocks-and-addons' ) }
								ColorKey={ isHover ? 'postTextHover' : 'postText' }
								ColorTypes={ [
									{ key: 'Color', label: __( 'Post Text Color', 'wpmozo-blocks-and-addons' ) }
								] }
							/>
						) }
					/>
					<WpmozoTypography
						TypographyKey="post"
						label="Post Typography"
						props={props}
					/>
					<WpmozoDimensions
						props={props}
						label={ __( 'Post Text Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='post'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</>
			)}
		</PanelBody>
	</> );
};
