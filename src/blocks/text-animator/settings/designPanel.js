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
} from '../../../common/components/index.js';
import { useState } from "@wordpress/element";

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ textTypeTab, setTextTypeTab ] = useState( 'global' );
	const [ textBGTab, setTextBGTab ]     = useState( 'prePost' );

	return ( <>
		{/* Text Typography. */}
		<PanelBody title={ __( 'Text Typography', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
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
				<WpmozoColorPicker
					props={props}
				   	ColorKey="globalText"
				   	label={ __( 'Global Text', 'wpmozo-blocks-and-addons' ) }
				   	ColorTypes={ [
					   { key: 'Color', label: __( 'Global Text Color', 'wpmozo-blocks-and-addons' ) }
				   	] }
				/>
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
					label={ __( 'Global Typography', 'wpmozo-blocks-and-addons' ) }
				/>
			</> ) }
			{ 'prePost' === textTypeTab && ( <>
				<WpmozoColorPicker props={props}
					label={ __( 'Pre/Post Text', 'wpmozo-blocks-and-addons' ) }
					ColorKey="prePostText"
					ColorTypes={ [
						{ key: 'Color', label: __( 'Pre/Post Text Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography props={props}
					TypographyKey="prePost"
					label={ __( 'Pre/Post Typography', 'wpmozo-blocks-and-addons' ) }
				/>
			</> ) }
			{ 'animated' === textTypeTab && ( <>
				<WpmozoColorPicker props={props}
					ColorKey="animatedText"
					label={ __( 'Animated Text', 'wpmozo-blocks-and-addons' ) }
					ColorTypes={ [
						{ key: 'Color', label: __( 'Animated Text Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
				<WpmozoTypography props={props}
					TypographyKey="animated"
					label={ __( 'Animated Typography', 'wpmozo-blocks-and-addons' ) }
				/>
			</> ) }
		</PanelBody>
		{/* Text Styling. */}
		<PanelBody title={ __( 'Text Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
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
				{ 'prePost' === textBGTab && ( <>
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
								<WpmozoColorPicker props={props}
									ColorKey="prePostBackground"
									ColorTypes={ [
										{ key: 'Color', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
									] }
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
					<WpmozoDimensions props={props}
						label={ __( 'Pre/Post Text Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='prePost'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</> ) }

				{ 'animated' === textBGTab && ( <>
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
								<WpmozoColorPicker props={props}
									ColorKey="animatedBackground"
									ColorTypes={ [
										{ key: 'Color', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
									] }
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
					<WpmozoDimensions props={props}
						label={ __( 'Animated Text Dimensions', 'wpmozo-blocks-and-addons' ) }
						DimensionKey='animated'
						DimensionsTypes={ { padding: true, margin: true } }
					/>
				</> ) }
			</BaseControl>
		</PanelBody>
	</> );
};
