import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    SelectControl,
    ToggleControl,
    BaseControl,
    ButtonGroup,
    Button,
} from '@wordpress/components';
import { 
    WpmozoRangeSize, 
    WpmozoBorder, 
    WpmozoAlignment, 
    WpmozoDimensions, 
    WpmozoColorPicker, 
    WpmozoTypography,
} from '../../../common/components/index';
import { useState } from "@wordpress/element";

import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const [ typographyType, setTypographyType ]               = useState( 'title' );
	const [ flipBoxType, setFlipBoxType ]                     = useState( 'front' );
	const [ frontTypographyType, setFrontTypographyType ]     = useState( 'title' );
	const [ backTypographyType, setBackTypographyType ]       = useState( 'title' );
	const [ elementStyleType, setelEmentStyleType ]           = useState( 'front' );
	const [ contentAlignType, setContentAlignType ]           = useState( 'front' );
	const [ flipboxBorderType, setFlipboxBorderType ]         = useState( 'front' );
	const [ flipboxDimensionsType, setFlipboxDimensionsType ] = useState( 'front' );

	return ( <>
		<PanelBody title={ __( 'Global Styling', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoRangeSize props={props}
				label={ __( 'Content Width', 'wpmozo-blocks-and-addons') }
				rangeSizeKey='flipboxWidth'
			/>
			<WpmozoColorPicker props={props}
				ColorKey="global"
				ColorTypes={[ 
					{ key: 'TitleColor', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'ContentColor', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) } 
				] }
			/>
			<BaseControl className="wpmozo-button-tabs-wrap">    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'title' === typographyType ) ? true : false }
						onClick={ () => setTypographyType( 'title' ) }
					>{ __( 'Title', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'content' === typographyType ) ? true : false }
						onClick={ () => setTypographyType( 'content' ) }
					>{ __( 'Content', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'title' === typographyType &&
					<WpmozoTypography props={props}
						TypographyKey="globalTitle"
					/>
				}
				{ 'content' === typographyType &&
					<WpmozoTypography props={props}
						TypographyKey="globalContent"
					/>
				}
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'FlipBox Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'front' === flipBoxType ) ? true : false }
						onClick={ () => setFlipBoxType( 'front' ) }
					>{ __( 'Front', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'back' === flipBoxType ) ? true : false }
						onClick={ () => setFlipBoxType( 'back' ) }
					>{ __( 'Back', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'front' === flipBoxType && <>
					<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) }>    
						<ButtonGroup>
							{ headingLevelsList.map((item, key) => (
								<Button key={ 'front-label-'+item.value }
									isPressed={ ( item.value === attributes.frontHeadingLevel ) ? true : false }
									onClick={ ( newValue ) => setAttributes( { frontHeadingLevel: item.value } ) }
								>{ item.label }</Button>
							) ) }
						</ButtonGroup>
					</BaseControl>
					<WpmozoColorPicker props={props}
						ColorKey="front"
						ColorTypes={ [ 
							{ key: 'TitleColor', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'ContentColor', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'BackgroundColor', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<BaseControl className="wpmozo-button-tabs-wrap">    
						<ButtonGroup>
							<Button
								className="wpmozo-button-tabs-btn"
								isPressed={ ( 'title' === frontTypographyType ) ? true : false }
								onClick={ () => setFrontTypographyType( 'title' ) }
							>{ __( 'Title', 'wpmozo-blocks-and-addons' ) }</Button>
							<Button 
								className="wpmozo-button-tabs-btn"
								isPressed={ ( 'content' === frontTypographyType ) ? true : false }
								onClick={ () => setFrontTypographyType( 'content' ) }
							>{ __( 'Content', 'wpmozo-blocks-and-addons' ) }</Button>
						</ButtonGroup>
						{ 'title' === frontTypographyType &&
							<WpmozoTypography props={props}
								TypographyKey="frontTitle"
							/>
						}
						{ 'content' === frontTypographyType &&
							<WpmozoTypography props={props}
								TypographyKey="frontContent"
							/>
						}
					</BaseControl>
				</> }
				{ 'back' === flipBoxType && <>
					<BaseControl label={ __( 'Heading Level', 'wpmozo-blocks-and-addons' ) } >    
						<ButtonGroup>
							{ headingLevelsList.map( ( item, key ) => (
								<Button key={ 'back-label-' + item.value }
									isPressed={ ( item.value === attributes.backHeadingLevel ) ? true : false }
									onClick={ ( newValue ) => setAttributes( { backHeadingLevel: item.value } ) }
								>{ item.label }</Button>
							) ) }
						</ButtonGroup>
					</BaseControl>
					<WpmozoColorPicker props={props}
						ColorKey="back"
						ColorTypes={ [ 
							{ key: 'TitleColor', label: __( 'Title Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'ContentColor', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'BackgroundColor', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
					<BaseControl className="wpmozo-button-tabs-wrap">    
						<ButtonGroup>
							<Button
								className="wpmozo-button-tabs-btn"
								isPressed={ ( 'title' === backTypographyType ) ? true : false }
								onClick={ () => setBackTypographyType( 'title' ) }
							>{ __( 'Title', 'wpmozo-blocks-and-addons' ) }</Button>
							<Button 
								className="wpmozo-button-tabs-btn"
								isPressed={ ( 'content' === backTypographyType ) ? true : false }
								onClick={ () => setBackTypographyType( 'content' ) }
							>{ __( 'Content', 'wpmozo-blocks-and-addons' ) }</Button>
						</ButtonGroup>
						{ 'title' === backTypographyType &&
							<WpmozoTypography props={props}
								TypographyKey="backTitle"
							/>
						}
						{ 'content' === backTypographyType &&
							<WpmozoTypography props={props}
								TypographyKey="backContent"
							/>
						}
					</BaseControl>
				</> }
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'FlipBox Image/Icon Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'front' === elementStyleType ) ? true : false }
						onClick={ () => setelEmentStyleType( 'front' ) }
					>{ __( 'Front', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'back' === elementStyleType ) ? true : false }
						onClick={ () => setelEmentStyleType( 'back' ) }
					>{ __( 'Back', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'front' === elementStyleType && <>
					{ 'icon' === attributes.frontElType && <>
						<WpmozoColorPicker props={props}
							ColorKey="front"
							ColorTypes={ [ 
								{ key: 'IconColor', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
						<WpmozoRangeSize props={props}
							label={ __( 'Icon Size', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='frontIconSize'
						/>
					</> }
					{ 'image' === attributes.frontElType && <>
						<WpmozoRangeSize props={props}
							label={ __( 'Front Image Width', 'wpmozo-blocks-and-addons' ) }
							rangeSizeKey='frontImageWidth'
						/>
						<WpmozoAlignment
							label={ __( 'Front Image Alignment', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( newValue ) => setAttributes( { frontImageAlignment: newValue } ) }
							value={ attributes.frontImageAlignment }
						/>
					</> }
					<SelectControl
						label={ __( 'Image/Icon Placment', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.frontElementAlign }
						options={ [
							{ value: 'top', label: __( 'Top', 'wpmozo-blocks-and-addons' ) },
							{ value: 'left', label: __( 'Left', 'wpmozo-blocks-and-addons' ) },
							{ value: 'right', label: __( 'Right', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { frontElementAlign: newValue } ) }
					/>
					{ 'icon' === attributes.frontElType && <>
						<ToggleControl
							label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.frontIconStyle }
							onChange={ ( newValue ) => setAttributes( { frontIconStyle: newValue } ) }
						/>
						{ attributes.frontIconStyle && <>
							<ToggleControl
								label={ __( 'Display Shape Border', 'wpmozo-blocks-and-addons' ) }
								checked={ attributes.frontIconHasShapeBorder }
								onChange={ ( newValue ) => setAttributes( { frontIconHasShapeBorder: newValue } ) }
							/>
							<SelectControl
								label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.frontIconShape }
								options={ [
									{ value: 'square', label: __( 'Square', 'wpmozo-blocks-and-addons' ) },
									{ value: 'circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
									{ value: 'hexagon', label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ) }
								] }
								onChange={ ( newValue ) => { 
									setAttributes( { frontIconShapeborderRadius: '' } )
									setAttributes( { frontIconShape: newValue } ) 
								} }
							/>
							<WpmozoColorPicker props={props}
								ColorKey="front"
								ColorTypes={ [ 
									{ key: 'IconShapeBackground', label: __( 'Shape Background Color', 'wpmozo-blocks-and-addons' ) },
								] }
							/>
							{ attributes.frontIconHasShapeBorder && 'hexagon' !== attributes.frontIconShape &&
								<WpmozoBorder props={props}
									BorderKey="frontIconShape"
									BorderTypes={ 
										( 'square' !== attributes.frontIconShape ) ? {border: true} : {border: true, radius: true} 
									}
								/>
							}
							{ attributes.frontIconHasShapeBorder && 'hexagon' === attributes.frontIconShape &&
								<WpmozoColorPicker  
									ColorKey="front"
									props={props}
									ColorTypes={ [ 
										{ key: 'IconShapeBorderColor', label: __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ) },
									] }
								/>
							}
						</> }
					</> }
				</> }
				{ 'back' === elementStyleType && <>
					{ 'icon' === attributes.backElType && <>
						<WpmozoColorPicker props={props} 
							ColorKey="back"
							ColorTypes={[ 
								{ key: 'IconColor', label: __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
						<WpmozoRangeSize props={props}
							label={ __( 'Icon Size', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='backIconSize'
						/>
					</> }
					{ 'image' === attributes.backElType && <>
						<WpmozoRangeSize props={props}
							label={ __( 'Back Image Width', 'wpmozo-blocks-and-addons') }
							rangeSizeKey='backImageWidth'
						/>
						<WpmozoAlignment
							label={ __( 'Front Image Alignment', 'wpmozo-blocks-and-addons') }
							onChange={ ( newValue ) => setAttributes( { backImageAlignment: newValue } ) }
							value={ attributes.backImageAlignment }
						/>                                        
					</> }
					<SelectControl
						label={ __( 'Image/Icon Placment', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.backElementAlign }
						options={ [
							{ value: 'top', label: __( 'Top', 'wpmozo-blocks-and-addons' ) },
							{ value: 'left', label: __( 'Left', 'wpmozo-blocks-and-addons' ) },
							{ value: 'right', label: __( 'Right', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { backElementAlign: newValue } ) }
					/>
					{ 'icon' === attributes.backElType && <>
						<ToggleControl
							label={ __( 'Style Icon', 'wpmozo-blocks-and-addons' ) }
							checked={ attributes.backIconStyle }
							onChange={ ( newValue ) => setAttributes( { backIconStyle: newValue } ) }
						/>
						{ attributes.backIconStyle && <>
							<ToggleControl
								label={ __( 'Display Shape Border', 'wpmozo-blocks-and-addons' ) }
								checked={ attributes.backIconHasShapeBorder }
								onChange={ ( newValue ) => setAttributes( { backIconHasShapeBorder: newValue } ) }
							/>
							<SelectControl
								label={ __( 'Shape', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.backIconShape }
								options={ [
									{ value: 'square', label: __( 'Square', 'wpmozo-blocks-and-addons' ) },
									{ value: 'circle', label: __( 'Circle', 'wpmozo-blocks-and-addons' ) },
									{ value: 'hexagon', label: __( 'Hexagon', 'wpmozo-blocks-and-addons' ) }
								] }
								onChange={ ( newValue ) => {
									setAttributes( { backIconShapeborderRadius: '' } )
									setAttributes( { backIconShape: newValue } ) 
								}}
							/>
							<WpmozoColorPicker props={props}
								ColorKey="back"
								ColorTypes={[ 
									{ key: 'IconShapeBackground', label: __( 'Shape Background Color', 'wpmozo-blocks-and-addons' ) },
								] }
							/>
							{ attributes.backIconHasShapeBorder && 'hexagon' !== attributes.backIconShape && 
								<WpmozoBorder
									BorderKey="backIconShape"
									props={props}
									BorderTypes={ 
										( 'square' !== attributes.backIconShape ) ? {border: true} : {border: true,radius: true} 
									}
								/>
							}
							{ attributes.backIconHasShapeBorder && 'hexagon' === attributes.backIconShape &&
								<WpmozoColorPicker props={props} 
									ColorKey="back"
									ColorTypes={ [ 
										{ key: 'IconShapeBorderColor', label: __( 'Shape Border Color', 'wpmozo-blocks-and-addons' ) },
									] }
								/>
							}
						</> }
					</> }
				</> }
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'FlipBox Content Alignment', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'front' === contentAlignType ) ? true : false }
						onClick={ () => setContentAlignType( 'front' ) }
					>{ __( 'Front', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'back' === contentAlignType ) ? true : false }
						onClick={ () => setContentAlignType( 'back' ) }
					>{ __( 'Back', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'front' === contentAlignType && <>
					<WpmozoAlignment
						label={__( 'Content Alignment', 'wpmozo-blocks-and-addons')}
						onChange={ ( newValue ) => setAttributes( { frontContentHorAlignment: newValue } ) }
						value={ attributes.frontContentHorAlignment }
					/>
					<WpmozoAlignment
						type="vertical"
						label={__( 'Vertical Alignment', 'wpmozo-blocks-and-addons')}
						onChange={ ( newValue ) => setAttributes( { frontContentVerAlignment: newValue } ) }
						value={ attributes.frontContentVerAlignment }
					/>
				</> }
				{ 'back' === contentAlignType && <>
					<WpmozoAlignment
						label={__( 'Content Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { backContentHorAlignment: newValue } ) }
						value={ attributes.backContentHorAlignment }
					/>
					<WpmozoAlignment
						type="vertical"
						label={__( 'Vertical Alignment', 'wpmozo-blocks-and-addons' ) }
						onChange={ ( newValue ) => setAttributes( { backContentVerAlignment: newValue } ) }
						value={ attributes.backContentVerAlignment }
					/>
				</> }
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'FlipBox Border', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'front' === flipboxBorderType ) ? true : false }
						onClick={ () => setFlipboxBorderType( 'front' ) }
					>{ __( 'Front', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'back' === flipboxBorderType ) ? true : false }
						onClick={ () => setFlipboxBorderType( 'back' ) }
					>{ __( 'Back', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'front' === flipboxBorderType &&
					<WpmozoBorder props={props}
						BorderKey="frontFlipbox"
					/>
				}
				{ 'back' === flipboxBorderType &&
					<WpmozoBorder props={props}
						BorderKey="backFlipbox"
					/>
				}
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'FlipBox Padding', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
			<BaseControl className="wpmozo-button-tabs-wrap">    
				<ButtonGroup>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'front' === flipboxDimensionsType ) ? true : false }
						onClick={ () => setFlipboxDimensionsType( 'front' ) }
					>{ __( 'Front', 'wpmozo-blocks-and-addons' ) }</Button>
					<Button className="wpmozo-button-tabs-btn"
						isPressed={ ( 'back' === flipboxDimensionsType ) ? true : false }
						onClick={ () => setFlipboxDimensionsType( 'back' ) }
					>{ __( 'Back', 'wpmozo-blocks-and-addons' ) }</Button>
				</ButtonGroup>
				{ 'front' === flipboxDimensionsType &&
					<WpmozoDimensions props={props}
						DimensionKey='frontDimensions'
						DimensionsTypes={ { padding: true } }
					/>
				}
				{ 'back' === flipboxDimensionsType &&
					<WpmozoDimensions props={props}
						DimensionKey='backDimensions'
						DimensionsTypes={ { padding: true } }
					/>
				}
			</BaseControl>
		</PanelBody>
		{ attributes.backHasButton && <>
			<PanelBody title={ __( 'FlipBox Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
				<WpmozoColorPicker props={props}
					ColorKey="back"
					ColorTypes={ [ 
						{ key: 'BtnColor', label: __( 'Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'BtnBackground', label: __( 'Background', 'wpmozo-blocks-and-addons' ) },
					] }
				/>
				<WpmozoTypography props={props}
					TypographyKey="backBtn"
				/>
				<WpmozoBorder props={props}
					BorderKey="backBtn"
				/>
				<WpmozoDimensions props={props}
					DimensionKey='backBtnDimensions'
					DimensionsTypes={ { padding: true, margin: true } }
				/>
			</PanelBody>
		</> }
	</> );
};
