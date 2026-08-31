import { __ } from '@wordpress/i18n';
import {useState} from "@wordpress/element";
import {
	Button,
	PanelBody,
	RangeControl,
	BaseControl,
	ButtonGroup
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	WpmozoTypography,
	WpmozoColorPicker, 
	WpmozoDimensions,
	MozoStates
} from "../../../common/components";
import { headingLevelsList } from '../../../common/utils.js';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
							
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	}
	const [btnStyle, setBtnStyleType] = useState('normal');
	const [btnPostItemsStyle, setBtnPostItemsType] = useState('normal');
	const [btnPostItemStyle, setBtnPostItemType] = useState('normal');

	return (
		<>
			<PanelBody title={__('Ticker Label', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={()=> handleToggle('panel1')}>
				{/* <BaseControl className="wpmozo-button-tabs-wrap">
					<ButtonGroup>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={('normal' === btnStyle) ? true : false}
							onClick={() => setBtnStyleType('normal')}
						>{__('Normal', 'wpmozo-blocks-and-addons')}</Button>
						<Button
							className="wpmozo-button-tabs-btn"
							isPressed={('hover' === btnStyle) ? true : false}
							onClick={() => setBtnStyleType('hover')}
						>{__('Hover', 'wpmozo-blocks-and-addons')}</Button>
					</ButtonGroup>
					{'normal' === btnStyle && (
						<>
							<WpmozoColorPicker
								props={props}
								ColorKey="tickerLabel"
								ColorTypes={[
									{key: 'Color', label: __('Label Color', 'wpmozo-blocks-and-addons')},
									{key: 'Background', label: __('Label Background', 'wpmozo-blocks-and-addons')}
								]}
							/>
							<WpmozoTypography
								props={props}
								TypographyKey="tickerLabel"
							/>
							<WpmozoBorder
								props={props}
								BorderKey="tickerLabel"
							/>
							<WpmozoDimensions
								props={props}
								DimensionKey='tickerLabel'
								DimensionsTypes={{padding: true,margin: true}}
							/>
						</>
					)}
					{'hover' === btnStyle && (
						<>
							<WpmozoColorPicker
								props={props}
								ColorKey="tickerLabelHover"
								ColorTypes={[
									{key: 'Color', label: __('Label Color', 'wpmozo-blocks-and-addons')},
									{key: 'Background', label: __('Label Background', 'wpmozo-blocks-and-addons')}
								]}
							/>
							<WpmozoTypography
								props={props}
								TypographyKey="tickerLabelHover"
							/>
							<WpmozoBorder
								props={props}
								BorderKey="tickerLabelHover"
							/>
							<WpmozoDimensions
								props={props}
								DimensionKey='tickerLabelHover'
								DimensionsTypes={{padding: true,margin: true}}
							/>
						</>
					)}
				</BaseControl> */}

				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={ props }
							label={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey={ isHover ? "tickerLabelHover" : "tickerLabel" }
							ColorTypes={ [
								{ key: 'Color', label: __( 'Label Color', 'wpmozo-blocks-and-addons' ) },
								{key: 'Background', label: __('Label Background', 'wpmozo-blocks-and-addons')}
							] }
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
						<WpmozoTypography props={ props }
							label={__( 'Label Typography', 'wpmozo-blocks-and-addons' )}
							TypographyKey={ isHover ? "tickerLabelHover" : "tickerLabel" }
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoBorder props={ props }
							label={ __( 'Label Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey={ isHover ? "tickerLabelHover" : "tickerLabel" }
							BorderTypes={ { border: true, radius: true } }
						/>
					) }
				/>
				<MozoStates
					value = {hoverState}
					title={ __( 'Spacing', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<WpmozoDimensions
							label={ __( 'Label Spacing', 'wpmozo-blocks-and-addons' ) }
							props={props}
							DimensionKey={ isHover ? "tickerLabelHover" : "tickerLabel" }
							DimensionsTypes={{padding: true, margin: true}}
						/>
					) }
				/>
			</PanelBody>
			<PanelBody title={__('Post Items Bar', 'wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={()=> handleToggle('panel2')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={ props }
							label={ __( 'Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey={ isHover ? "postItemsHover" : "postItems" }
							ColorTypes={ [
								{key: 'Background', label: __('Items Bar Background', 'wpmozo-blocks-and-addons')}
							] }
						/>
					) }
				/>
				<MozoStates
					value={hoverState}
					title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoBorder props={ props }
							label={ __( 'Items Bar Border', 'wpmozo-blocks-and-addons' ) }
							BorderKey={ isHover ? "postItemsHover" : "postItems" }
							BorderTypes={ { border: true, radius: true } }
						/>
					) }
				/>
				<MozoStates
					value = {hoverState}
					title={ __( 'Spacing', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<WpmozoDimensions
							label={ __( 'Items Bar Spacing', 'wpmozo-blocks-and-addons' ) }
							props={props}
							DimensionKey={ isHover ? "postItemsHover" : "postItems" }
							DimensionsTypes={{padding: true, margin: true}}
						/>
					) }
				/>
			</PanelBody>
			<PanelBody title={__('Post Item','wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={()=> handleToggle('panel3')}>
				<MozoStates
					value={hoverState}
					title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) => (
							isHover ? setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)
					}
					control={ ( isHover ) => (
						<WpmozoColorPicker props={ props }
							label={ __( 'Item Text Color', 'wpmozo-blocks-and-addons' ) }
							ColorKey={ isHover ? "postItemHover" : "postItem" }
							ColorTypes={ [
								{key: 'Color', label: __('Item Text Color', 'wpmozo-blocks-and-addons')}
							] }
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
						<WpmozoTypography props={ props }
							label={__( 'Item Typography', 'wpmozo-blocks-and-addons' )}
							TypographyKey={ isHover ? "postItemHover" : "postItem" }
						/>
					) }
				/>
				<MozoStates
					value = {hoverState}
					title={ __( 'Spacing', 'wpmozo-blocks-and-addons' ) }
					onChange={ ( isHover ) =>  (
							isHover ?  setHoverState(true) : setHoverState(false),
							setAttributes({wrapIsHover: !hoverState})
						)	
					}
					control={ ( isHover ) => (
						<WpmozoDimensions
							label={ __( 'Item Spacing', 'wpmozo-blocks-and-addons' ) }
							props={props}
							DimensionKey={ isHover ? "postItemHover" : "postItem" }
							DimensionsTypes={{padding: true, margin: true}}
						/>
					) }
				/>
			</PanelBody>
			<PanelBody title={__('Post Item Separator','wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={()=> handleToggle('panel4')}>
				<RangeControl
					label={ __( 'Separator Font Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.separatorFontSize }
					onChange={ ( newValue ) => setAttributes( { separatorFontSize: newValue } ) }
					min={0} max={100} step={1}
				/>
				<WpmozoColorPicker
					props={props}
					ColorKey="postSeparator"
					ColorTypes={[
						{key: 'Color', label: __('Separator Icon Color', 'wpmozo-blocks-and-addons')},
					]}
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='postSeparator'
					DimensionsTypes={{padding: true,margin: true}}
				/>

			</PanelBody>
			<PanelBody title={__('Arrows','wpmozo-blocks-and-addons')} className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={()=> handleToggle('panel5')}>
				<RangeControl
					label={ __( 'Arrow Font Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.arrowFontSize }
					onChange={ ( newValue ) => setAttributes( { arrowFontSize: newValue } ) }
					min={0} max={100} step={1}
				/>
				<WpmozoColorPicker
					props={props}
					ColorKey="arrow"
					ColorTypes={[
						{key: 'Color', label: __('Arrow Color', 'wpmozo-blocks-and-addons')},
						{key: 'Background', label: __('Arrow Background Color', 'wpmozo-blocks-and-addons')}
					]}
				/>
				<WpmozoBorder
					props={props}
					BorderKey="arrow"
				/>
				<WpmozoDimensions
					props={props}
					DimensionKey='arrow'
					DimensionsTypes={{padding: true,margin: true}}
				/>
			</PanelBody>
		</>
	);
};
