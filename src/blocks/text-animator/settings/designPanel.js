import { __ } from '@wordpress/i18n';

import {
    PanelBody,
    BaseControl,
    ButtonGroup,
    Button,
    ToggleControl,
} from "@wordpress/components";
import {
    WpmozoAlignment,
    WpmozoColorPicker,
    WpmozoTypography,
    WpmozoDimensions,
	MozoStates
} from '../../../common/components/index.js';
import { useState } from "@wordpress/element";

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
									
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}


	const [ textTypeTab, setTextTypeTab ]   = useState( 'global' );
	const [ textBGTab, setTextBGTab ]       = useState( 'global' );
	const [ textSpaceTab, setTextSpaceTab ] = useState( 'prePost' );

	return ( <>
		{/* Text Typography. */}
		<PanelBody title={ __( 'Text Typography', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
							isPressed={ ( 'global' === textTypeTab ) ? true : false }
							onClick={ () => setTextTypeTab( 'global' ) }
							label={ __( 'Global', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Global', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'prePost' === textTypeTab ) ? true : false }
						onClick={ () => setTextTypeTab( 'prePost' ) }
						label={ __( 'Pre/Post', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Pre/Post', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'animated' === textTypeTab ) ? true : false }
						onClick={ () => setTextTypeTab( 'animated' ) }
						label={ __( 'Animated', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Animated', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
			</BaseControl>
			{ 'global' === textTypeTab && ( <>
				<WpmozoAlignment
					label={ __( 'Global Text Alignment', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( newValue ) => setAttributes( { globalTextAlignment: newValue } ) }
					value={ attributes.globalTextAlignment }
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
					label={ __( 'Global Text Typography', 'wpmozo-blocks-and-addons' ) }
				/>
			</> ) }
			{ 'prePost' === textTypeTab && ( <>
				<WpmozoTypography props={props}
					TypographyKey="prePost"
					label={ __( 'Pre/Post Text Typography', 'wpmozo-blocks-and-addons' ) }
				/>
			</> ) }
			{ 'animated' === textTypeTab && ( <>
				<WpmozoTypography props={props}
					TypographyKey="animated"
					label={ __( 'Animated Text Typography', 'wpmozo-blocks-and-addons' ) }
				/>
			</> ) }
		</PanelBody>
		{/* Text Styling. */}
		<PanelBody title={ __( 'Text Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'global' === textBGTab ) ? true : false }
						onClick={ () => setTextBGTab( 'global' ) }
						label={ __( 'Global', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Global', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'prePost' === textBGTab ) ? true : false }
						onClick={ () => setTextBGTab( 'prePost' ) }
						label={ __( 'Pre/Post', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Pre/Post', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'animated' === textBGTab ) ? true : false }
						onClick={ () => setTextBGTab( 'animated' ) }
						label={ __( 'Animated', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Animated', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'global' === textBGTab && ( <>
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
				</> ) }
				{ 'prePost' === textBGTab && ( <>
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
								label={ __( 'Pre/Post Text', 'wpmozo-blocks-and-addons' ) }
								ColorKey={ isHover ? 'prePostTextHover' : 'prePostText' }
								ColorTypes={ [
									{ key: 'Color', label: __( 'Pre/Post Text Color', 'wpmozo-blocks-and-addons' ) }
								] }
							/>
						) }
					/>
					<ToggleControl
						label={ __( 'Use Background', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.useBackgroundPrepost }
						onChange={ ( newValue ) => setAttributes( { useBackgroundPrepost: newValue } ) }
					/>
					{ attributes.useBackgroundPrepost && ( <>
						<BaseControl className="wpmozo-button-tabs-wrap"
							label={ __( 'Background Type', 'wpmozo-blocks-and-addons' ) }
						>
							<ButtonGroup>
								<Button className="wpmozo-button-tabs-btn"
									isPressed={ ( 'classic' === attributes.prePostBackgroundType ) ? true : false }
									onClick={ () => setAttributes( { prePostBackgroundType: 'classic' } ) }
									label={ __( 'Classic', 'wpmozo-blocks-and-addons' ) }
								>{ __( 'Classic', 'wpmozo-blocks-and-addons' ) }</Button>
								<Button className="wpmozo-button-tabs-btn"
									isPressed={ ( 'gradient' === attributes.prePostBackgroundType ) ? true : false }
									onClick={ () => setAttributes( { prePostBackgroundType: 'gradient' } ) }
									label={ __( 'Gradient', 'wpmozo-blocks-and-addons' ) }
								>{ __( 'Gradient', 'wpmozo-blocks-and-addons' ) }</Button>
							</ButtonGroup>
							{ 'classic' === attributes.prePostBackgroundType && (
								<MozoStates
									value = {hoverState}
									title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
									onChange={ ( isHover ) =>  (
										isHover ?  setHoverState(true) : setHoverState(false),
										setAttributes({wrapIsHover: !hoverState})
									)
											
									}
									control={ ( isHover ) => (
										<WpmozoColorPicker props={props}
											ColorKey={ isHover ? 'prePostBackgroundHover' : 'prePostBackground' }
											ColorTypes={ [
												{ key: 'Color', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
											] }
										/>
									) }
								/>
							) }
							{ 'gradient'=== attributes.prePostBackgroundType && (
								<WpmozoColorPicker props={props}
									ColorKey="prePostBackground"
									ColorTypes={ [
										{
											key: 'Gradient',
											label: __( 'Gradient Color', 'wpmozo-blocks-and-addons' ),
											onlyGradient: true,
										}
									] }
								/>
							) }
						</BaseControl>
					</> ) }
				</> ) }
				{ 'animated' === textBGTab && ( <>
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
								ColorKey={ isHover ? 'animatedTextHover' : 'animatedText' }
								label={ __( 'Animated Text', 'wpmozo-blocks-and-addons' ) }
								ColorTypes={ [
									{ key: 'Color', label: __( 'Animated Text Color', 'wpmozo-blocks-and-addons' ) }
								] }
							/>
						) }
					/>
					<ToggleControl
						label={ __( 'Use Background', 'wpmozo-blocks-and-addons' ) }
						checked={ attributes.useBackgroundAnimated }
						onChange={ ( newValue ) => setAttributes( { useBackgroundAnimated: newValue } ) }
					/>
					{ attributes.useBackgroundAnimated && ( <>
						<BaseControl className="wpmozo-button-tabs-wrap"
							label={ __( 'Background Type', 'wpmozo-blocks-and-addons' ) }
						>
							<ButtonGroup>
								<Button className="wpmozo-button-tabs-btn"
									isPressed={ ( 'classic' === attributes.animatedBackgroundType ) ? true : false }
									onClick={ () => setAttributes( { animatedBackgroundType: 'classic' } ) }
									label={ __( 'Classic', 'wpmozo-blocks-and-addons' ) }
								>{ __( 'Classic', 'wpmozo-blocks-and-addons' ) }</Button>
								<Button className="wpmozo-button-tabs-btn"
									isPressed={ ( 'gradient' === attributes.animatedBackgroundType ) ? true : false }
									onClick={ () => setAttributes( { animatedBackgroundType: 'gradient' } ) }
									label={ __( 'Gradient', 'wpmozo-blocks-and-addons' ) }
								>{ __( 'Gradient', 'wpmozo-blocks-and-addons' ) }</Button>
							</ButtonGroup>
							{ 'classic' === attributes.animatedBackgroundType && (
								<MozoStates
									value = {hoverState}
									title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
									onChange={ ( isHover ) =>  (
										isHover ?  setHoverState(true) : setHoverState(false),
										setAttributes({wrapIsHover: !hoverState})
									)
											
									}
									control={ ( isHover ) => (
										<WpmozoColorPicker props={props}
											ColorKey={ isHover ? 'animatedBackgroundHover' : 'animatedBackground' }
											ColorTypes={ [
												{ key: 'Color', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
											] }
										/>
									) }
								/>
							) }
							{ 'gradient'=== attributes.animatedBackgroundType && (
								<WpmozoColorPicker props={props}
									ColorKey="animatedBackground"
									ColorTypes={ [
										{
											key: 'Gradient',
											label: __( 'Gradient Color', 'wpmozo-blocks-and-addons' ),
											onlyGradient: true,
										}
									] }
								/>
							) }
						</BaseControl>
					</> ) }
				</> ) }
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'Text Spacing', 'wpmozo-blocks-and-addons' ) } className="wpmozo-spacing-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'prePost' === textSpaceTab ) ? true : false }
						onClick={ () => setTextSpaceTab( 'prePost' ) }
						label={ __( 'Pre/Post', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Pre/Post', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'animated' === textSpaceTab ) ? true : false }
						onClick={ () => setTextSpaceTab( 'animated' ) }
						label={ __( 'Animated', 'wpmozo-blocks-and-addons' ) }
					>{ __( 'Animated', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'prePost' === textSpaceTab && ( <>
					<MozoStates
						value = {hoverState}
						title={ __( 'Pre/Post Spacing', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( isHover ) =>  (
								isHover ?  setHoverState(true) : setHoverState(false),
								setAttributes({wrapIsHover: !hoverState})
							)	
						}
						control={ ( isHover ) => (
							<WpmozoDimensions
								label= " "
								props={props}
								DimensionKey={ isHover ? "prePostHover" : "prePost" }
								DimensionsTypes={isHover ? {padding: true} : {padding: true, margin: true}}
							/>
						) }
					/>
				</> ) }
				{ 'animated' === textSpaceTab && ( <>
					<MozoStates
						value = {hoverState}
						title={ __( 'Animated Spacing', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( isHover ) =>  (
								isHover ?  setHoverState(true) : setHoverState(false),
								setAttributes({wrapIsHover: !hoverState})
							)	
						}
						control={ ( isHover ) => (
							<WpmozoDimensions
								label= " "
								props={props}
								DimensionKey={ isHover ? "animatedHover" : "animated" }
								DimensionsTypes={isHover ? {padding: true} : {padding: true, margin: true}}
							/>
						) }
					/>
				</> ) }
			</BaseControl>
		</PanelBody>
	</> );
};
