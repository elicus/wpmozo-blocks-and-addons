import { __ } from '@wordpress/i18n';
import { useState } from "@wordpress/element";

import {
	Button,
	PanelBody,
	ButtonGroup,
	BaseControl,
	RangeControl,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoTypography,
	WpmozoColorPicker,
	MozoStates,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [openPanel, setOpenPanel] = useState('panel1');
		
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	return ( <>
		{/* Title Text. */}
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<RangeControl
				label={ __( 'Title Width(%)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.titleWidth }
				onChange={ ( newValue ) => setAttributes( { titleWidth: newValue } ) }
				min={ 1 } max={ 100 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<WpmozoAlignment
				label={ __( 'Title Alignment', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
				value={ attributes.titleAlign }
			/>
						<MozoStates
				value={hoverState}
				title={ __( 'Title Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => ( <>
					<WpmozoColorPicker props={ props }
						ColorKey={ isHover ? "titleHover" : "title" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Title Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey={ isHover ? "titleHover" : "title" }
					/>
				</> ) }
			/>
		</PanelBody>
		{/* Subtitle Text. */}
		<PanelBody title={ __( 'Sub Title Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Sub Title Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => ( <>
					<WpmozoColorPicker
						ColorKey={ isHover ? "subtitleHover" : "subtitle" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Sub Title Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Sub Title Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey={ isHover ? "subtitleHover" : "subtitle" }
					/>
				</> ) }
			/>
		</PanelBody>
		{/* Description. */}
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<RangeControl
				label={ __( 'Description Width(%)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.descriptionWidth }
				onChange={ ( newValue ) => setAttributes( { descriptionWidth: newValue } ) }
				min={ 1 } max={ 100 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<WpmozoDimensions props={ props }
				label={ __( 'Description Padding', 'wpmozo-blocks-and-addons' ) }
				DimensionKey='description'
				DimensionsTypes={ { padding: true } }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Description Text', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => ( <>
					<WpmozoColorPicker
						ColorKey={ isHover ? "descriptionHover" : "description" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Description Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<WpmozoTypography props={ props }
						TypographyKey={ isHover ? "descriptionHover" : "description" }
					/>
				</> ) }
			/>
		</PanelBody>
		{/* Hover Image. */}
		<PanelBody title={ __( 'Hover Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
			<RangeControl
				label={ __( 'Image Width(px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.hoverImageSize }
				onChange={ ( newValue ) => setAttributes( { hoverImageSize: newValue } ) }
				min={ 10 } max={ 1000 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<WpmozoBorder props={props}
				label={ __( 'Image Border', 'wpmozo-blocks-and-addons' ) }
				BorderKey="hoverImage"
			/>
		</PanelBody>
		{/* Icon. */}
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
			<RangeControl
				label={ __( 'Icon Font Size(px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.iconFontsize }
				onChange={ ( newValue ) => setAttributes( { iconFontsize: newValue } ) }
				min={ 1 } max={ 250 } step={ 1 }
				__next40pxDefaultSize={ true } __nextHasNoMarginBottom={ true }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={ props }
						ColorKey={ isHover ? "iconHover" : "icon" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
			/>
		</PanelBody>
    </> );
};
