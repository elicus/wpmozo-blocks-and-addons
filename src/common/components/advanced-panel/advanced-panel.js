import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	SelectControl,
	ColorPalette,
	BorderBoxControl,
	RangeControl,
	__experimentalUnitControl as UnitControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalToolsPanel as ToolsPanel,
    __experimentalToolsPanelItem as ToolsPanelItem,
	__experimentalDivider as Divider
} from '@wordpress/components';
import { MozoStates, WpmozoDimensions, WpmozoBorder, WpmozoAlignment } from '../../../common/components';
import {skew, translate, scale, rotate, origin} from './icon';
import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

export const AdvancedPanel = ( { attributes, setAttributes, exclude = {}, hoverState, setHoverState } ) => {
	const {
		wrapBackground,
		wrapBackgroundHover,
		wrappadding,
		wrapHoverpadding,
		wrapborderRadius,
		wrapHoverborderRadius,
		wrapborder,
		wrapHoverborder,
		wrapTransform,
		wrapCustomClass,
		wrapTranslate,
		wrapTranslateHover,
		wrapScale,
		wrapScaleHover,
		wrapRotate,
		wrapRotateHover,
		wrapSkew,
		wrapSkewHover,
		wrapTransformOrigin,
		wrapTransformOriginHover,
		wrapIsHover
	} = attributes;
	const props = {attributes, setAttributes, preAttributes: {}};
	// const [ hoverState, setHoverState ] = useState( false );
	const isSaving = useSelect(select =>
		select('core/editor').isSavingPost()
	);
	// Track which panel is open — null matlab koi nahi
    const [openPanel, setOpenPanel] = useState('panel1');

    // Toggle helper: same panel dobara click karo to band ho
    const handleToggle = (panelId) => {
        setOpenPanel(prev => prev === panelId ? null : panelId);
    };

	return ( <>
		{ !exclude?.background && <PanelBody
			title={ __( 'Background', 'wpmozo-blocks-and-addons' ) }
			opened={openPanel === 'panel1'}
            onToggle={() => handleToggle('panel1')}
		>
			<MozoStates
				value = {hoverState}
				title={ __( 'Color', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) =>  (
					isHover ?  setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)
					 
				}
				control={ ( isHover ) => (
					<ColorPalette
						value={ isHover ? wrapBackgroundHover : wrapBackground }
						onChange={ ( color ) => setAttributes(
							isHover
								? { wrapBackgroundHover: color || '' }
								: { wrapBackground: color || '' }
						) }
						enableAlpha
					/>
				) }
			/>
		</PanelBody> }

		{ !exclude?.spacing && <PanelBody
			title={ __( 'Spacing', 'wpmozo-blocks-and-addons' ) }
			opened={openPanel === 'panel2'}
            onToggle={() => handleToggle('panel2')}
		>
			<MozoStates
				value = {hoverState}
				onChange={ ( isHover ) =>  (
					isHover ?  setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)
					 
				}
				title={ __( 'Padding', 'wpmozo-blocks-and-addons' ) }
				control={ ( isHover ) => (
					<WpmozoDimensions
						DimensionKey={ isHover ? 'wrapHover' : 'wrap' }
						DimensionsTypes={{
							padding: true
						}}
						label={__( ' ', 'wpmozo-blocks-and-addons' )}
						props={props}
					/>
				) }
			/>
		</PanelBody>}

		{ !exclude?.border && <PanelBody
			title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
			opened={openPanel === 'panel3'}
            onToggle={() => handleToggle('panel3')}
		>
			<MozoStates
				value = {hoverState}
				onChange={ ( isHover ) =>  (
					isHover ?  setHoverState(true) : setHoverState(false),
					setAttributes({wrapIsHover: !hoverState})
				)
					 
				}
				title={ __( 'Border', 'wpmozo-blocks-and-addons' ) }
				control={ ( isHover ) => (
					<WpmozoBorder
						label= " "
						props={props}
						BorderKey={ isHover ? 'wrapHover' : 'wrap' }
					/>
				) }
			/>
		</PanelBody>}

		{ !exclude?.transform && <PanelBody
			title={ __( 'Transform', 'wpmozo-blocks-and-addons' ) }
			opened={openPanel === 'panel4'}
            onToggle={() => handleToggle('panel4')}
		>
			<ToggleGroupControl
				__next40pxDefaultSize
				label={ __( 'Transform', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.wrapTransform }
				onChange={ ( newValue ) => setAttributes( { wrapTransform: newValue } ) }
			>
				<ToggleGroupControlOption value="translate" aria-label="Translate" label={translate}  showTooltip={ true } />
				<ToggleGroupControlOption value="scale" aria-label="Scale" label={scale} showTooltip={ true } />
				<ToggleGroupControlOption value="rotate" aria-label="Rotate" label={rotate} showTooltip={ true } />
				<ToggleGroupControlOption value="skew" aria-label="Skew" label={skew} showTooltip={ true } />
				<ToggleGroupControlOption value="transform-origin" aria-label="Transform Origin" label={origin} showTooltip={ true } />
			</ToggleGroupControl>
			{'translate' === attributes.wrapTransform && (
				<MozoStates
					value = {hoverState}
					onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
						
					}
					title={ __( 'Transform Translate', 'wpmozo-blocks-and-addons' ) }
					control={ ( isHover ) => (
						<>
							<UnitControl
								label={'Translate X'}
								placeholder={isHover ? '' : '0'}
								value={isHover ? wrapTranslateHover?.X : wrapTranslate?.X}
								units={ [
									{ value: 'px', label: 'px', default: 0 },
									{ value: '%', label: '%', default: 0 },
									{ value: 'em', label: 'em', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapTranslateHover: { ...wrapTranslateHover, X:newValue } } 
									: { wrapTranslate: { ...wrapTranslate, X:newValue } }
								) }
							/>
							<UnitControl
								label={'Translate Y'}
								placeholder={isHover ? '' : '0'}
								value={isHover ? wrapTranslateHover?.Y : wrapTranslate?.Y}
								units={ [
									{ value: 'px', label: 'px', default: 0 },
									{ value: '%', label: '%', default: 0 },
									{ value: 'em', label: 'em', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapTranslateHover: { ...wrapTranslateHover, Y:newValue } } 
									: { wrapTranslate: { ...wrapTranslate, Y:newValue } }
								) }
							/>
							<Divider />
						</>
					) }
				/>
			)}
			{'scale' === attributes.wrapTransform && (
				<MozoStates
					value = {hoverState}
					onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
						
					}
					title={ __( 'Transform Scale', 'wpmozo-blocks-and-addons' ) }
					control={ ( isHover ) => (
						<>
							<UnitControl
								label={'Scale X'}
								placeholder={isHover ? '' : '1'}
								value={isHover ? wrapScaleHover?.X : wrapScale?.X}
								units={ [
									{ value: '', label: '', default: 1 },
									{ value: '%', label: '%', default: 100 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapScaleHover: { ...wrapScaleHover, X:newValue } } 
									: { wrapScale: { ...wrapScale, X:newValue } }
								) }
							/>
							<UnitControl
								label={'Scale Y'}
								placeholder={isHover ? '' : '1'}
								value={isHover ? wrapScaleHover?.Y : wrapScale?.Y}
								units={ [
									{ value: '', label: '', default: 1 },
									{ value: '%', label: '%', default: 100 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapScaleHover: { ...wrapScaleHover, Y:newValue } } 
									: { wrapScale: { ...wrapScale, Y:newValue } }
								) }
							/>
							<Divider />
						</>
					) }
				/>
			)}
			{'rotate' === attributes.wrapTransform && (
				<MozoStates
					value = {hoverState}
					onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
						
					}
					title={ __( 'Transform Rotate', 'wpmozo-blocks-and-addons' ) }
					control={ ( isHover ) => (
						<>
							<UnitControl
								label={'Rotate X'}
								placeholder={isHover ? '' : '0'}
								value={isHover ? wrapRotateHover?.X : wrapRotate?.X}
								units={ [
									{ value: 'deg', label: 'deg', default: 0 },
									{ value: '%', label: '%', default: 0 },
									{ value: 'em', label: 'em', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapRotateHover: { ...wrapRotateHover, X:newValue } } 
									: { wrapRotate: { ...wrapRotate, X:newValue } }
								) }
							/>
							<UnitControl
								label={'Rotate Y'}
								placeholder={isHover ? '' : '0'}
								value={isHover ? wrapRotateHover?.Y : wrapRotate?.Y}
								units={ [
									{ value: 'deg', label: 'deg', default: 0 },
									{ value: '%', label: '%', default: 0 },
									{ value: 'em', label: 'em', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapRotateHover: { ...wrapRotateHover, Y:newValue } } 
									: { wrapRotate: { ...wrapRotate, Y:newValue } }
								) }
							/>
							<UnitControl
								label={'Rotate Z'}
								placeholder={isHover ? '' : '0'}
								value={isHover ? wrapRotateHover?.Z : wrapRotate?.Z}
								units={ [
									{ value: 'deg', label: 'deg', default: 0 },
									{ value: '%', label: '%', default: 0 },
									{ value: 'em', label: 'em', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapRotateHover: { ...wrapRotateHover, Z:newValue } } 
									: { wrapRotate: { ...wrapRotate, Z:newValue } }
								) }
							/>
							<Divider />
						</>
					) }
				/>
			)}
			{'skew' === attributes.wrapTransform && (
				<MozoStates
					value = {hoverState}
					onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
						
					}
					title={ __( 'Transform Skew', 'wpmozo-blocks-and-addons' ) }
					control={ ( isHover ) => (
						<>
							<UnitControl
								label={'Skew X'}
								placeholder={isHover ? '' : '0'}
								value={isHover ? wrapSkewHover?.X : wrapSkew?.X}
								units={ [
									{ value: 'deg', label: 'deg', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapSkewHover: { ...wrapSkewHover, X:newValue } } 
									: { wrapSkew: { ...wrapSkew, X:newValue } }
								) }
							/>
							<UnitControl
								label={'Skew Y'}
								placeholder={isHover ? '' : '0'}
								value={isHover ? wrapSkewHover?.Y : wrapSkew?.Y}
								units={ [
									{ value: 'deg', label: 'deg', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapSkewHover: { ...wrapSkewHover, Y:newValue } } 
									: { wrapSkew: { ...wrapSkew, Y:newValue } }
								) }
							/>
							<Divider />
						</>
					) }
				/>
			)}
			{'transform-origin' === attributes.wrapTransform && (
				<MozoStates
					value = {hoverState}
					onChange={ ( isHover ) =>  (
						isHover ?  setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
						
					}
					title={ __( 'Transform Origin', 'wpmozo-blocks-and-addons' ) }
					control={ ( isHover ) => (
						<>
							<UnitControl
								label={'Origin X'}
								placeholder={isHover ? '' : '50'}
								value={isHover ? wrapTransformOriginHover?.X : wrapTransformOrigin?.X}
								units={ [
									{ value: 'px', label: 'px', default: 0 },
									{ value: '%', label: '%', default: 0 },
									{ value: 'em', label: 'em', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapTransformOriginHover: { ...wrapTransformOriginHover, X:newValue } } 
									: { wrapTransformOrigin: { ...wrapTransformOrigin, X:newValue } }
								) }
							/>
							<UnitControl
								label={'Origin Y'}
								placeholder={isHover ? '' : '50'}
								value={isHover ? wrapTransformOriginHover?.Y : wrapTransformOrigin?.Y}
								units={ [
									{ value: 'px', label: 'px', default: 0 },
									{ value: '%', label: '%', default: 0 },
									{ value: 'em', label: 'em', default: 0 },
								] }
								onChange={ ( newValue ) => setAttributes(
									isHover 
									? { wrapTransformOriginHover: { ...wrapTransformOriginHover, Y:newValue } } 
									: { wrapTransformOrigin: { ...wrapTransformOrigin, Y:newValue } }
								) }
							/>
							<Divider />
						</>
					) }
				/>
			)}
		</PanelBody>}
		{ !exclude?.additionalClass && <PanelBody 
			title={ __( 'Additional Class(es)', 'wpmozo-blocks-and-addons' ) }
			opened={openPanel === 'panel5'}
            onToggle={() => handleToggle('panel5')}
		>
			<TextControl
				label={ __( 'Additional CSS Class(es)', 'wpmozo-blocks-and-addons' ) }
				value={ wrapCustomClass }
				onChange={ ( value ) => setAttributes( { wrapCustomClass: value } ) }
				help={ __( 'Separate multiple classes with spaces.', 'wpmozo-blocks-and-addons' ) }
			/>
		</PanelBody>}
	</> );
};

export default AdvancedPanel;
