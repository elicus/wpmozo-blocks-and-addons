import { __ } from '@wordpress/i18n';
import {
    PanelBody,
    SelectControl,
    RangeControl
} from '@wordpress/components';
import {
	WpmozoAlignment,
	WpmozoDimensions,
	WpmozoColorPicker,
	WpmozoTypography,
	MozoStates,
} from '../../../common/components/index';
import { wpmozo_is_empty } from '../../../common/utils.js';
import { useState } from '@wordpress/element';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };
	const [openPanel, setOpenPanel] = useState('panel1');
	
	const handleToggle = (panelId) => {
		setOpenPanel(prev => prev === panelId ? null : panelId);
	};

	return ( <>
		{/* Toggle Switch. */}
		<PanelBody title={ __( 'Toggle Switch' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel1'} onToggle={() => handleToggle('panel1')}>
			<SelectControl
				label={ __( 'Switch Type', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.toggleSwitchType }
				options={ [
					{ value: 'rounded', label: __( 'Rounded', 'wpmozo-blocks-and-addons' ) },
					{ value: 'rectangle', label: __( 'Rectangle', 'wpmozo-blocks-and-addons' ) },
					{ value: 'toggle', label: __( 'Toggle', 'wpmozo-blocks-and-addons' ) }
				] }
				onChange={ ( newValue ) => setAttributes( { toggleSwitchType: newValue } ) }
				__next40pxDefaultSize __nextHasNoMarginBottom
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Switch Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={props}
						ColorKey={ isHover ? "toggleSwitchHover" : "toggleSwitch" }
						ColorTypes={ [ 
							{ key: 'Color', label: __( 'Switch Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'OnState', label: __( 'Switch Color (on state)', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: __( 'Switch Background', 'wpmozo-blocks-and-addons' ) },
							{ key: 'OnStateBackground', label: __( 'Switch Background (on state)', 'wpmozo-blocks-and-addons' ) }
						] }
					/>
				) }
			/>
			<WpmozoAlignment
				label={__( 'Switch Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { toggleSwitchAlignment: newValue } ) }
				value={ attributes.toggleSwitchAlignment }
			/>
			<WpmozoDimensions props={props}
				DimensionKey='toggleSwitchDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
				{/* Title One. */}
				<PanelBody title={ __( 'Title One' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel2'} onToggle={() => handleToggle('panel2')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={props}
						ColorKey={ isHover ? "titleOneHover" : "titleOne" }
						ColorTypes={ [ 
							{ key: 'Color', label: isHover ? __( 'Title One Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Title One Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Title Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "titleOneHover" : "titleOne" }
					/>
				) }
			/>
			{ ! wpmozo_is_empty( attributes.toggleOneIcon ) && ( <>
				<RangeControl
					label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleOneIconSize }
					onChange={ ( newValue ) => setAttributes( { titleOneIconSize: newValue } ) }
					min={ 0 } max={ 200 }
				/>
				<RangeControl
					label={ __( 'Icon Spacing', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleOneIconSpacing }
					onChange={ ( newValue ) => setAttributes( { titleOneIconSpacing: newValue } ) }
					min={ 0 } max={ 200 }
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
						<WpmozoColorPicker props={props}
							ColorKey={ isHover ? "titleOneIconHover" : "titleOneIcon" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
					) }
				/>
			</> ) }
		</PanelBody>
		{/* Title Two. */}
		<PanelBody title={ __( 'Title Two' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel3'} onToggle={() => handleToggle('panel3')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Title Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={props}
						ColorKey={ isHover ? "titleTwoHover" : "titleTwo" }
						ColorTypes={ [ 
							{ key: 'Color', label: isHover ? __( 'Title Two Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Title Two Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Title Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "titleTwoHover" : "titleTwo" }
					/>
				) }
			/>
			{ ! wpmozo_is_empty( attributes.toggleTwoIcon ) && ( <>
				<RangeControl
					label={ __( 'Icon Size', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleTwoIconSize }
					onChange={ ( newValue ) => setAttributes( { titleTwoIconSize: newValue } ) }
					min={ 0 } max={ 200 }
				/>
				<RangeControl
					label={ __( 'Icon Spacing', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.titleTwoIconSpacing }
					onChange={ ( newValue ) => setAttributes( { titleTwoIconSpacing: newValue } ) }
					min={ 0 } max={ 200 }
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
						<WpmozoColorPicker props={props}
							ColorKey={ isHover ? "titleTwoIconHover" : "titleTwoIcon" }
							ColorTypes={ [
								{ key: 'Color', label: isHover ? __( 'Icon Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Icon Color', 'wpmozo-blocks-and-addons' ) },
							] }
						/>
					) }
				/>
			</> ) }
		</PanelBody>
		{/* Content One. */}
		<PanelBody title={ __( 'Content One' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel4'} onToggle={() => handleToggle('panel4')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Content Colors', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={props}
						ColorKey={ isHover ? "contentOneHover" : "contentOne" }
						ColorTypes={ [ 
							{ key: 'Color', label: isHover ? __( 'Content Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Content Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: isHover ? __( 'Content Hover Background Color', 'wpmozo-blocks-and-addons' ) : __( 'Content Background Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			<WpmozoAlignment
				label={__( 'Content One Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { contentOneAlignment: newValue } ) }
				value={ attributes.contentOneAlignment }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Content Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "contentOneHover" : "contentOne" }
					/>
				) }
			/>
			<WpmozoDimensions props={props}
				DimensionKey='contentOneDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
				onChange={ ( type, NewPadding ) => {
					if ( 'padding' === type ) {
						setAttributes( { contentOneDimensionspadding: NewPadding } )
					} else {
						setAttributes( { contentOneDimensionsmargin: NewPadding } )
					}
				} }
			/>
		</PanelBody>
		{/* Content Two. */}
		<PanelBody title={ __( 'Content Two' ) } className="wpmozo-typography-panel" opened={openPanel === 'panel5'} onToggle={() => handleToggle('panel5')}>
			<MozoStates
				value={hoverState}
				title={ __( 'Content Colors', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoColorPicker props={props}
						ColorKey={ isHover ? "contentTwoHover" : "contentTwo" }
						ColorTypes={ [
							{ key: 'Color', label: isHover ? __( 'Content Hover Color', 'wpmozo-blocks-and-addons' ) : __( 'Content Color', 'wpmozo-blocks-and-addons' ) },
							{ key: 'Background', label: isHover ? __( 'Content Hover Background Color', 'wpmozo-blocks-and-addons' ) : __( 'Content Background Color', 'wpmozo-blocks-and-addons' ) },
						] }
					/>
				) }
			/>
			<WpmozoAlignment
				label={__( 'Content Two Alignment', 'wpmozo-blocks-and-addons')}
				onChange={ ( newValue ) => setAttributes( { contentTwoAlignment: newValue } ) }
				value={ attributes.contentTwoAlignment }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Content Typography', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoTypography props={props}
						TypographyKey={ isHover ? "contentTwoHover" : "contentTwo" }
					/>
				) }
			/>
			<WpmozoDimensions props={props}
				DimensionKey='contentTwoDimensions'
				DimensionsTypes={ { padding: true, margin: true } }
			/>
		</PanelBody>
	</> );
};
