import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	BaseControl,
	ColorPalette,
	RangeControl,
	ToggleControl,
	__experimentalUnitControl as UnitControl,
	__experimentalGrid as Grid,
} from '@wordpress/components';
import MozoStates from '../mozo-states/mozo-states';
import WpmozoDimensions from '../wpmozo-dimensions/wpmozo-dimensions';
import WpmozoBorder from '../wpmozo-border/wpmozo-border';

const SHADOW_UNITS = [
	{ value: 'px', label: 'px', default: 0 },
	{ value: 'em', label: 'em', default: 0 },
	{ value: 'rem', label: 'rem', default: 0 },
];

/**
 * Box shadow control for an object { x, y, blur, spread, color, inset }.
 */
const BoxShadowControl = ( { label, value, onChange } ) => {
	const shadow = value || {};
	const update = ( key, newValue ) => onChange( { ...shadow, [ key ]: newValue } );

	return (
		<BaseControl label={ label } __nextHasNoMarginBottom>
			<Grid columns={ 2 }>
				<UnitControl label={ __( 'Horizontal', 'wpmozo-blocks-and-addons' ) } units={ SHADOW_UNITS } value={ shadow.x || '' } onChange={ ( v ) => update( 'x', v ) } />
				<UnitControl label={ __( 'Vertical', 'wpmozo-blocks-and-addons' ) } units={ SHADOW_UNITS } value={ shadow.y || '' } onChange={ ( v ) => update( 'y', v ) } />
				<UnitControl label={ __( 'Blur', 'wpmozo-blocks-and-addons' ) } units={ SHADOW_UNITS } value={ shadow.blur || '' } onChange={ ( v ) => update( 'blur', v ) } />
				<UnitControl label={ __( 'Spread', 'wpmozo-blocks-and-addons' ) } units={ SHADOW_UNITS } value={ shadow.spread || '' } onChange={ ( v ) => update( 'spread', v ) } />
			</Grid>
			<ColorPalette
				value={ shadow.color || '' }
				onChange={ ( color ) => update( 'color', color || '' ) }
				enableAlpha
			/>
			<ToggleControl
				__nextHasNoMarginBottom
				label={ __( 'Inset', 'wpmozo-blocks-and-addons' ) }
				checked={ !! shadow.inset }
				onChange={ ( v ) => update( 'inset', v ) }
			/>
		</BaseControl>
	);
};

/**
 * Block-level (wrapper) design settings shared by every block: background, padding,
 * margin, border, box shadow and the hover transition duration.
 *
 * Rendered in each block's Design tab:
 * { tab.name === 'design' && <CommonDesignPanel attributes={attributes} setAttributes={setAttributes} hoverState={hoverState} setHoverState={setHoverState} /> }
 *
 * The attributes keep the names of the former Advanced panel sections (`wrapBackground`, `wrappadding`, …),
 * so saved content keeps working.
 *
 * @param {Object}   props
 * @param {Object}   props.exclude             Sections to hide: background, padding, margin, border, boxShadow, transition.
 * @param {boolean}  props.writeHoverAttribute Also store the Hover chip state in the `wrapIsHover` attribute.
 *                                             Only for lite blocks, whose edit.js reads it for the editor hover preview.
 */
export const CommonDesignPanel = ( { attributes, setAttributes, hoverState, setHoverState, exclude = {}, writeHoverAttribute = false } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	const onHoverChange = ( isHover ) => {
		if ( typeof setHoverState === 'function' ) {
			setHoverState( isHover );
		}
		if ( writeHoverAttribute ) {
			setAttributes( { wrapIsHover: isHover } );
		}
	};

	const stateControl = ( title, control ) => (
		<MozoStates value={ hoverState } title={ title } onChange={ onHoverChange } control={ control } />
	);

	return (
		<PanelBody title={ __( 'Block', 'wpmozo-blocks-and-addons' ) } initialOpen={ false }>
			{ ! exclude?.background && stateControl( __( 'Color', 'wpmozo-blocks-and-addons' ), ( isHover ) => (
				<BaseControl label={ __( 'Block Background', 'wpmozo-blocks-and-addons' ) } __nextHasNoMarginBottom>
					<ColorPalette
						value={ isHover ? attributes.wrapBackgroundHover : attributes.wrapBackground }
						onChange={ ( color ) => setAttributes(
							isHover ? { wrapBackgroundHover: color || '' } : { wrapBackground: color || '' }
						) }
						enableAlpha
					/>
				</BaseControl>
			) ) }

			{ ! exclude?.padding && stateControl( __( 'Spacing', 'wpmozo-blocks-and-addons' ), ( isHover ) => (
				<WpmozoDimensions
					label={ __( 'Block Padding', 'wpmozo-blocks-and-addons' ) }
					DimensionKey={ isHover ? 'wrapHover' : 'wrap' }
					DimensionsTypes={ { padding: true } }
					props={ props }
				/>
			) ) }

			{ ! exclude?.margin && (
				<div className="mozostates-prop-wrap">
					<WpmozoDimensions
						label={ __( 'Block Margin', 'wpmozo-blocks-and-addons' ) }
						DimensionKey="wrap"
						DimensionsTypes={ { margin: true } }
						props={ props }
					/>
				</div>
			) }

			{ ! exclude?.border && stateControl( __( 'Border', 'wpmozo-blocks-and-addons' ), ( isHover ) => (
				<WpmozoBorder
					label={ __( 'Block Border', 'wpmozo-blocks-and-addons' ) }
					BorderKey={ isHover ? 'wrapHover' : 'wrap' }
					props={ props }
				/>
			) ) }

			{ ! exclude?.boxShadow && stateControl( __( 'Box Shadow', 'wpmozo-blocks-and-addons' ), ( isHover ) => (
				<BoxShadowControl
					label={ __( 'Block Box Shadow', 'wpmozo-blocks-and-addons' ) }
					value={ isHover ? attributes.wrapBoxShadowHover : attributes.wrapBoxShadow }
					onChange={ ( shadow ) => setAttributes(
						isHover ? { wrapBoxShadowHover: shadow } : { wrapBoxShadow: shadow }
					) }
				/>
			) ) }
			<hr/>
			{ ! exclude?.transition && (
				<RangeControl
					__nextHasNoMarginBottom
					label={ __( 'Transition Duration (ms)', 'wpmozo-blocks-and-addons' ) }
					help={ __( 'How long the block takes to change to its hover settings.', 'wpmozo-blocks-and-addons' ) }
					min={ 0 }
					max={ 3000 }
					step={ 50 }
					value={ '' === attributes.wrapTransitionDuration || undefined === attributes.wrapTransitionDuration ? undefined : Number( attributes.wrapTransitionDuration ) }
					allowReset
					resetFallbackValue={ undefined }
					onChange={ ( value ) => setAttributes( { wrapTransitionDuration: undefined === value ? '' : String( value ) } ) }
				/>
			) }
		</PanelBody>
	);
};

export default CommonDesignPanel;
