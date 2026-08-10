import { __ } from '@wordpress/i18n';
import {
    PanelBody,
	ToggleControl,
    RangeControl,
	SelectControl,
	BaseControl,
	ButtonGroup,
	Button
} from '@wordpress/components';
import { __experimentalColorGradientControl as ColorGradientControl } from "@wordpress/block-editor"
import { useState } from "@wordpress/element";
import {
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography,
	MozoStates
} from '../../../common/components/index';


export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
					
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}
	const [ textType, setTextType ] = useState('text'),
		dividerStyle = [
		{ label: __( 'Solid', 'wpmozo-blocks-and-addons' ), value: 'solid' },
		{ label: __( 'Dashed', 'wpmozo-blocks-and-addons' ), value: 'dashed' },
		{ label: __( 'Dotted', 'wpmozo-blocks-and-addons' ), value: 'dotted' },
		{ label: __( 'Double', 'wpmozo-blocks-and-addons' ), value: 'double' },
		{ label: __( 'Groove', 'wpmozo-blocks-and-addons' ), value: 'groove' },
		{ label: __( 'Ridge', 'wpmozo-blocks-and-addons' ), value: 'ridge' },
		{ label: __( 'Inset', 'wpmozo-blocks-and-addons' ), value: 'inset' },
		{ label: __( 'Outset', 'wpmozo-blocks-and-addons' ), value: 'outset' },
	];

	return ( <>
		<PanelBody title={ __( 'List', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
			<WpmozoAlignment
				label={__( 'Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { listAlignment: newValue } ) }
				value={ attributes.listAlignment }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'List Background', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<ColorGradientControl
						colorValue={ isHover ? attributes.globalItemHoverBackgroundColor : attributes.globalItemBackgroundColor }
						gradientValue={ isHover ? attributes.globalItemHoverBackgroundGradient : attributes.globalItemBackgroundGradient }
						colors={ [] }
						gradients={ [] }
						label={ isHover ? __( 'Hover List Background', 'wpmozo-blocks-and-addons' ) : __( 'List Background', 'wpmozo-blocks-and-addons' ) }
						onColorChange={ (newValue) => setAttributes({ [isHover ? 'globalItemHoverBackgroundColor' : 'globalItemBackgroundColor']: newValue }) }
						onGradientChange={ (newValue) => setAttributes({ [isHover ? 'globalItemHoverBackgroundGradient' : 'globalItemBackgroundGradient']: newValue }) }
					/>
				) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Item Text', 'wpmozo-blocks-and-addons' ) } className="wpmozo-text-styling-panel wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
			<RangeControl
				label={ __( 'Indentation', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.indentation }
				onChange={ ( newValue ) => setAttributes( { indentation: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
			<BaseControl className="wpmozo-button-tabs-wrap">
				<ButtonGroup>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'text' === textType ) ? true : false }
						onClick={ () => setTextType( 'text' ) }
					>
						{ __( 'Text', 'wpmozo-blocks-and-addons' ) }
					</Button>
					<Button
						className="wpmozo-button-tabs-btn"
						isPressed={ ( 'link' === textType ) ? true : false }
						onClick={ () => setTextType( 'link' ) }
					>
						{ __( 'Link', 'wpmozo-blocks-and-addons' ) }
					</Button>
				</ButtonGroup>
				{ 'text' === textType &&
					<>
						<MozoStates
							value={hoverState}
							title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( isHover ) => (
									isHover ? setHoverState(true) : setHoverState(false),
									setAttributes({wrapIsHover: !hoverState})
								)
							}
							control={ ( isHover ) => (
								<WpmozoColorPicker
									ColorKey={ isHover ? "textHover" : "text" }
									props={props}
									ColorTypes={[
										{ key: 'Color', label: isHover ? __( 'Hover Text Color', 'wpmozo-blocks-and-addons' ) : __( 'Text Color', 'wpmozo-blocks-and-addons' ) },
									]}
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
								<WpmozoTypography
									TypographyKey={ isHover ? "textHover" : "text" }
									props={props}
								/>
							) }
						/>
					</>
				}
				{ 'link' === textType &&
					<>
						<MozoStates
							value={hoverState}
							title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
							onChange={ ( isHover ) => (
									isHover ? setHoverState(true) : setHoverState(false),
									setAttributes({wrapIsHover: !hoverState})
								)
							}
							control={ ( isHover ) => (
								<WpmozoColorPicker
									ColorKey={ isHover ? "linkHover" : "link" }
									props={props}
									ColorTypes={[
										{ key: 'Color', label: isHover ? __( 'Hover Link Color', 'wpmozo-blocks-and-addons' ) : __( 'Link Color', 'wpmozo-blocks-and-addons' ) },
									]}
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
								<WpmozoTypography
									TypographyKey={ isHover ? "linkHover" : "link" }
									props={props}
								/>
							) }
						/>
					</>
				}
			</BaseControl>
		</PanelBody>
		<PanelBody title={ __( 'Icon', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
			<RangeControl
				label={ __( 'Icon Font Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.iconFontSize }
				onChange={ ( newValue ) => setAttributes( { iconFontSize: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
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
					<WpmozoColorPicker
						ColorKey={ isHover ? "iconHover" : "icon" }
						props={props}
						ColorTypes={[
							{ key: 'Color', label: isHover ? __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
						]}
					/>
				) }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Image', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
			<RangeControl
				label={ __( 'Thumbnail Width', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.imageWidth }
				onChange={ ( newValue ) => setAttributes( { imageWidth: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
		</PanelBody>
		<PanelBody title={ __( 'Divider', 'wpmozo-blocks-and-addons' ) } opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
			<RangeControl
				label={ __( 'Divider Size', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.dividerSize }
				onChange={ ( newValue ) => setAttributes( { dividerSize: newValue } ) }
				min={ 0 }
				step={ 1 }
				max={ 100 }
			/>
			<SelectControl
				label={ __( 'Divider Style', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.dividerStyle }
				options={dividerStyle}
				onChange={ ( newValue ) => setAttributes( { dividerStyle: newValue } ) }
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
					<WpmozoColorPicker
						ColorKey={ isHover ? "dividerHover" : "divider" }
						props={props}
						ColorTypes={[
							{ key: 'Color', label: isHover ? __( 'Divider Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Divider Color', 'wpmozo-blocks-and-addons' ) },
						]}
					/>
				) }
			/>
			<ToggleControl
				label={ __( 'Hide Last Divider', 'wpmozo-blocks-and-addons' ) }
				checked={ attributes.lastDivider }
				onChange={ ( newValue ) => setAttributes( { lastDivider: newValue } ) }
			/>
			<WpmozoDimensions
				DimensionKey='divider'
				DimensionsTypes={{
					margin: true
				}}
				props={props}
			/>
		</PanelBody>
	</> );
};
