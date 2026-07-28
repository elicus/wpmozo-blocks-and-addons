import { __ } from '@wordpress/i18n';
import {
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker, 
	WpmozoDimensions, 
	WpmozoBorder,
	MozoStates
} from '../../../common/components/index.js';
import {
	Button,
	PanelBody,
	BaseControl,
	ButtonGroup,
	RangeControl,
} from '@wordpress/components';
import { useState } from "@wordpress/element";

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
									
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}


	const [ titleType, setTitleType ]     = useState( 'normal' );
	const [ descType, setDescType ]       = useState( 'normal' );
	const [ rateNumType, setRateNumType ] = useState( 'normal' );

	return ( <>
		{/* Container. */}
		<PanelBody title={ __( 'Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<WpmozoAlignment
				label={ __( 'Text Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.globalTextAlign }
				showJustify={ true }
				onChange={ ( newValue ) => setAttributes( { globalTextAlign: newValue } ) }
			/>
			<WpmozoDimensions
				DimensionKey='container'
				DimensionsTypes={ {
					padding: true,
					margin: true,
				} }
				props={props}
			/>
			<WpmozoBorder
				props={props}
				BorderKey="container"
			/>
		</PanelBody>
		{/* Title. */}
		<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<BaseControl
				label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) }
				__nextHasNoMarginBottom={ true }
			>
				<ButtonGroup>
					{ headingLevelsList.map( ( item, index ) => (
						<Button key={ item.value }
							isPressed={ item.value === attributes.titleLevel }
							onClick={ () => setAttributes( { titleLevel: item.value } ) }
						>{ item.label }</Button>
					) ) }
				</ButtonGroup>
			</BaseControl>
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
						label={__( 'Description Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "titleHover" : "title" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
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
						TypographyKey={ isHover ? "titleHover" : "title" }
						props={props}
					/>
				) }
			/>
		</PanelBody>
		{/* Description. */}
		<PanelBody title={ __( 'Description', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
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
						label={__( 'Description Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "descriptionHover" : "description" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Description Color', 'wpmozo-blocks-and-addons' ) }
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
						TypographyKey={ isHover ? "descriptionHover" : "description" }
						props={props}
					/>
				) }
			/>
		</PanelBody>
		{/* Rating Number. */}
		<PanelBody title={ __( 'Rating Number', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
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
						label={__( 'Number Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "ratingHover" : "rating" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Number Color', 'wpmozo-blocks-and-addons' ) }
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
						TypographyKey={ isHover ? "ratingHover" : "rating" }
						props={props}
					/>
				) }
			/>
		</PanelBody>
		{/* Rate Icons/Stars. */}
		<PanelBody title={ __( 'Rate Icons/Stars', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
			<RangeControl
				label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.starFontSize }
				onChange={ ( newValue ) => setAttributes( { starFontSize: newValue } ) }
				min={ 10 } max={ 100 } step={ 1 }
			/>
			<RangeControl
				label={ __( 'Space Between Icon', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.starSpacing }
				onChange={ ( newValue ) => setAttributes( { starSpacing: newValue } ) }
				min={ 0 } max={ 100 } step={ 1 }
			/>
			<WpmozoColorPicker ColorKey="rateIcon"
				label={ __( 'Icon Color', 'wpmozo-blocks-and-addons' ) }
				props={ props }
				ColorTypes={ [
					{ key: 'FilledColor', label: __( 'Filled Icon Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'EmptyColor', label: __( 'Empty Icon Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
		</PanelBody>
	</> );
};
