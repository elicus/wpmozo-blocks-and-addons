// designPanel.js
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
	SelectControl,
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

	const [ titleTab, setTitleTab ]           = useState( 'normal' );
	const [ categoriesTab, setCategoriesTab ] = useState( 'normal' );
	const [ contentTab, setContentTab ]       = useState( 'normal' );
	const [ excerptTab, setExcerptTab ]       = useState( 'normal' );
	const [ readMoreTab, setReadMoreTab ]     = useState( 'normal' );
	const [ projectUrlTab, setProjectUrlTab ] = useState( 'normal' );
	const [ cardTab, setCardTab ]             = useState( 'normal' );

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

		{/* Featured Image. */}
		{ attributes.showFeaturedImage && (
			<PanelBody title={ __( 'Featured Image', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
				{ attributes.layout !== 'layout2' && (
					<>
						<RangeControl
							label={ __( 'Image Width(px)', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.featuredImageWidth }
							onChange={ ( newValue ) => setAttributes( { featuredImageWidth: newValue } ) }
							min={50} max={1200} step={1}
							allowReset={ true }
						/>
						<RangeControl
							label={ __( 'Image Height(px)', 'wpmozo-blocks-and-addons' ) }
							value={ attributes.featuredImageHeight }
							onChange={ ( newValue ) => setAttributes( { featuredImageHeight: newValue } ) }
							min={50} max={1000} step={1}
							allowReset={ true }
						/>
					</>
				) }
				{ attributes.layout !== 'layout1' && (
					<SelectControl
						label={ __( 'Object Fit', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.featuredImageObjectFit }
						options={ [
							{ value: 'cover', label: __( 'Cover', 'wpmozo-blocks-and-addons' ) },
							{ value: 'contain', label: __( 'Contain', 'wpmozo-blocks-and-addons' ) },
							{ value: 'fill', label: __( 'Fill', 'wpmozo-blocks-and-addons' ) },
							{ value: 'none', label: __( 'None', 'wpmozo-blocks-and-addons' ) }
						] }
						onChange={ ( newValue ) => setAttributes( { featuredImageObjectFit: newValue } ) }
					/>
				)}
				{ attributes.layout !== 'layout2' && (
					<>
						<WpmozoDimensions props={ props }
							label={ __( 'Image Dimensions', 'wpmozo-blocks-and-addons' ) }
							DimensionKey='featuredImage'
							DimensionsTypes={ { padding: true, margin: true } }
						/>
					</>
				) }
			</PanelBody>
		) }

		{/* Title. */}
		{ attributes.showTitle && (
			<PanelBody title={ __( 'Title', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
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
							label={__( 'Title Color', 'wpmozo-blocks-and-addons' )}
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
							label={ __( 'Title Typography', 'wpmozo-blocks-and-addons' ) }
							TypographyKey={ isHover ? "titleHover" : "title" }
							props={props}
						/>
					) }
				/>
			</PanelBody>
		) }

		{/* Categories. */}
		<PanelBody title={ __( 'Categories', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
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
						label={__( 'Categories Color', 'wpmozo-blocks-and-addons' )}
						ColorKey={ isHover ? "categoriesHover" : "categories" }
						props={ props }
						ColorTypes={ [
							{ key: 'Color', label: __( 'Categories Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
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
						label={ __( 'Categories Typography', 'wpmozo-blocks-and-addons' ) }
						TypographyKey={ isHover ? "categoriesHover" : "categories" }
						props={props}
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
						label={ __( 'Categories Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey={isHover ? "categoriesHover" : "categories"}
						BorderTypes={ { border:true, radius: true } }
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
						DimensionKey={ isHover ? "categoriesHover" : "categories" }
						DimensionsTypes={isHover ? {padding: true} : {padding: true, margin: true}}
					/>
				) }
			/>
		</PanelBody>

		{/* Content. */}
		{ attributes.showContent && (
			<PanelBody title={ __( 'Content', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
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
							ColorKey={ isHover ? "contentHover" : "content" }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Content Color', 'wpmozo-blocks-and-addons' ) },
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
							label={ __( 'Content Typography', 'wpmozo-blocks-and-addons' ) }
							TypographyKey={ isHover ? "contentHover" : "content" }
							props={props}
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
							DimensionKey={ isHover ? "contentHover" : "content" }
							DimensionsTypes={isHover ? {padding: true} : {padding: true, margin: true}}
						/>
					) }
				/>
			</PanelBody>
		) }

		{/* Excerpt. */}
		{ attributes.showExcerpt && (
			<PanelBody title={ __( 'Excerpt', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel6'} onToggle={()=> handleToggle('panel6')}>
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
							label={__( 'Excerpt Color', 'wpmozo-blocks-and-addons' )}
							ColorKey={ isHover ? "excerptHover" : "excerpt" }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Excerpt Color', 'wpmozo-blocks-and-addons' ) },
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
							label={ __( 'Excerpt Typography', 'wpmozo-blocks-and-addons' ) }
							TypographyKey={ isHover ? "excerptHover" : "excerpt" }
							props={props}
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
							DimensionKey={ isHover ? "excerptHover" : "excerpt" }
							DimensionsTypes={isHover ? {padding: true} : {padding: true, margin: true}}
						/>
					) }
				/>
			</PanelBody>
		) }

		{/* Read More Button. */}
		{ attributes.showReadMore && (
			<PanelBody title={ __( 'Read More Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel7'} onToggle={()=> handleToggle('panel7')}>
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
							label={__( 'Read More Color', 'wpmozo-blocks-and-addons' )}
							ColorKey={ isHover ? "readMoreHover" : "readMore" }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Button Color', 'wpmozo-blocks-and-addons' ) },
								{ key: 'Background', label: __( 'Button Background', 'wpmozo-blocks-and-addons' ) }
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
							label={ __( 'Read More Typography', 'wpmozo-blocks-and-addons' ) }
							TypographyKey={ isHover ? "readMoreHover" : "readMore" }
							props={props}
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
							label={ __( 'Read More Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey={isHover ? "readMoreHover" : "readMore"}
							BorderTypes={ { border:true, radius: true } }
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
							DimensionKey={ isHover ? "readMoreHover" : "readMore" }
							DimensionsTypes={isHover ? {padding: true} : {padding: true, margin: true}}
						/>
					) }
				/>
			</PanelBody>
		) }

		{/* Project URL Button. */}
		{ attributes.showProjectUrl && (
			<PanelBody title={ __( 'Project URL Button', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel8'} onToggle={()=> handleToggle('panel8')}>
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
							label={__( 'Project URL Color', 'wpmozo-blocks-and-addons' )}
							ColorKey={ isHover ? "projectUrlHover" : "projectUrl" }
							props={ props }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Categories Color', 'wpmozo-blocks-and-addons' ) },
								{ key: 'Background', label: __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
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
							label={ __( 'Project URL Typography', 'wpmozo-blocks-and-addons' ) }
							TypographyKey={ isHover ? "projectUrlHover" : "projectUrl" }
							props={props}
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
							label={ __( 'Project URL Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey={isHover ? "projectUrlHover" : "projectUrl"}
							BorderTypes={ { border:true, radius: true } }
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
							DimensionKey={ isHover ? "projectUrlHover" : "projectUrl" }
							DimensionsTypes={isHover ? {padding: true} : {padding: true, margin: true}}
						/>
					) }
				/>
			</PanelBody>
		) }

		{/* Slider. */}
		<PanelBody title={ __( 'Slider Navigation & Pagination', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel9'} onToggle={()=> handleToggle('panel9')}>
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
			<ToggleControl
				label={ __( 'Show Arrow Background', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.arrowEnableBg }
				onChange={ ( newValue ) => setAttributes( { arrowEnableBg: newValue } ) }
			/>
			{ attributes.arrowEnableBg && (
				<RangeControl
					label={ __( 'Arrow Background Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.arrowBgSize }
					onChange={ ( newValue ) => setAttributes( { arrowBgSize: newValue } ) }
					min={20} max={150} step={1}
				/>
			) }
			<WpmozoColorPicker props={props}
				label={ __( 'Arrows Color', 'wpmozo-blocks-and-addons' ) }
				ColorKey="arrow"
				ColorTypes={ attributes.arrowEnableBg ? [
					{ key: 'Color', label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ) },
					{ key: 'Background', label: __( 'Arrow Background Color', 'wpmozo-blocks-and-addons' ) }
				] : [
					{ key: 'Color', label: __( 'Arrow Color', 'wpmozo-blocks-and-addons' ) }
				] }
			/>
			{ attributes.arrowEnableBg && (
				<WpmozoBorder props={ props }
					label={ __( 'Arrows Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey="arrow"
					BorderTypes={ { border: true, radius: true } }
				/>
			) }
			{ attributes.showControlDot && <>
				<WpmozoColorPicker
					label={ __( 'Control Dot Color', 'wpmozo-blocks-and-addons' ) }
					ColorKey="controlDot"
					props={ props }
					ColorTypes={ [
						{ key: 'ColorActive', label: __( 'Active Dot Color', 'wpmozo-blocks-and-addons' ) },
						{ key: 'ColorInactive', label: __( 'Inactive Dot Color', 'wpmozo-blocks-and-addons' ) }
					] }
				/>
			</> }
		</PanelBody>

		{/* Portfolio Container card styling. */}
		<PanelBody title={ __( 'Portfolio Card', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel10'} onToggle={()=> handleToggle('panel10')}>
			{ attributes.layout === 'layout2' ? (
				<MozoStates
					value = {hoverState}
					title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<ColorGradientControl
							colors={[]}
							gradients={[]}
							enableAlpha={ true }
							label={ __( 'Overlay Background Color', 'wpmozo-blocks-and-addons' ) }
							colorValue={ isHover ? attributes.overlayBackgroundHover : attributes.overlayBackground }
							gradientValue={ isHover ? attributes.overlayBGGradientHover : attributes.overlayBGGradient }
							onColorChange={ (newValue) => 
								setAttributes( isHover ? { overlayBackgroundHover: newValue } : { overlayBackground: newValue } ) 
							}
							onGradientChange={ (newValue) => 
								setAttributes( isHover ? { overlayBGGradientHover: newValue } : { overlayBGGradient: newValue } ) 
							}
						/>
					) }
				/>
			) : (
				<MozoStates
					value = {hoverState}
					title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<ColorGradientControl
							colors={[]}
							gradients={[]}
							enableAlpha={ true }
							label={ __( 'Background Color', 'wpmozo-blocks-and-addons' ) }
							colorValue={ isHover ? attributes.portfolioBackgroundHover : attributes.portfolioBackground }
							gradientValue={ isHover ? attributes.portfolioBGGradientHover : attributes.portfolioBGGradient }
							onColorChange={ (newValue) => 
								setAttributes( isHover ? { portfolioBackgroundHover: newValue } : { portfolioBackground: newValue } ) 
							}
							onGradientChange={ (newValue) => 
								setAttributes( isHover ? { portfolioBGGradientHover: newValue } : { portfolioBGGradient: newValue } ) 
							}
						/>
					) }
				/>
			) }
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
						label={ __( 'Portfolio Border', 'wpmozo-blocks-and-addons' ) }
						BorderKey={isHover ? "portfolioHover" : "portfolio"}
						BorderTypes={ { border:true, radius: true } }
					/>
				) }
			/>
			<MozoStates
				value = {hoverState}
				title={ __( 'Dimensions', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  
					(
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)	
				}
				control={ ( isHover ) => (
					<WpmozoDimensions
						label={ __( 'Portfolio Dimensions', 'wpmozo-blocks-and-addons' ) }
						props={props}
						DimensionKey={ isHover ? "portfolioHover" : "portfolio" }
						DimensionsTypes={{padding: true}}
					/>
				) }
			/>
		</PanelBody>

		{/* Slider Wrapper Container. */}
		<PanelBody title={ __( 'Slider Container', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel11'} onToggle={()=> handleToggle('panel11')}>
			<RangeControl
				label={ __( 'Container Width(%)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.containerWidth }
				onChange={ ( newValue ) => setAttributes( { containerWidth: newValue } ) }
				min={10} max={100} step={1}
				allowReset={ true }
			/>
			<RangeControl
				label={ __( 'Container Max Width(px)', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.containerMaxWidth }
				onChange={ ( newValue ) => setAttributes( { containerMaxWidth: newValue } ) }
				min={100} max={2000} step={10}
				allowReset={ true }
			/>
		</PanelBody>
	</> );
};

export default DesignPanel;
