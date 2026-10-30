/**
 * Icon picker: a compact trigger that opens an anchored popover with search,
 * style filters, recent icons and a keyboard-navigable grid.
 *
 * Props are unchanged: label, iconPickerKey, props ({ attributes, setAttributes }),
 * value, onChange, afterOnChange.
 */
import { BaseControl, Button, Dropdown } from '@wordpress/components';
import { useInstanceId } from '@wordpress/compose';
import { useEffect, useMemo, useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { closeSmall } from '@wordpress/icons';

import IconPickerPanel from './panel';
import IconPickerTrigger from './trigger';
import { ensureStyles } from './styles';

// Same placement as the inspector's color and typography popovers: beside the sidebar.
// resize: false keeps the full height and lets shift move the popover into view,
// instead of squeezing the grid when the trigger sits low in the sidebar.
const POPOVER_PROPS = {
	placement: 'left-start',
	offset: 36,
	shift: true,
	resize: false,
};

// Show an × beside the trigger that clears the icon. Set to false to turn it off.
const SHOW_CLEAR_BUTTON = true;

const EMPTY_OPTIONS = [];

const getOptions = () => {
	const data = window.wpmozo_bna_editor_object; // eslint-disable-line camelcase
	return data && Array.isArray( data.icons ) ? data.icons : EMPTY_OPTIONS;
};

const hasOwn = ( object, key ) =>
	Object.prototype.hasOwnProperty.call( object, key );

const WpmozoIconpicker = ( args ) => {
	const options = getOptions();
	const { iconPickerKey, props, label } = args;
	const { attributes, setAttributes } = props;

	const instanceId = useInstanceId( WpmozoIconpicker, 'wpmozo-icon-picker' );
	const wrapperRef = useRef();
	const triggerRef = useRef();

	useEffect( () => {
		ensureStyles(
			wrapperRef.current ? wrapperRef.current.ownerDocument : document
		);
	}, [] );

	const value = args.value !== '' ? args.value : '';
	// Show the controlled value first (e.g. an icon stored inside a repeater item).
	const current = value || attributes[ iconPickerKey ] || '';

	const iconSetValue = ( newValue = null ) => {
		setAttributes( { [ iconPickerKey ]: newValue } );

		if ( hasOwn( args, 'afterOnChange' ) ) {
			args.afterOnChange( props );
		}
	};

	const onChange = hasOwn( args, 'onChange' ) ? args.onChange : iconSetValue;

	const labelsByValue = useMemo( () => {
		const map = new Map();
		options.forEach( ( option ) => {
			if ( option && option.value ) {
				map.set( option.value, String( option.label ?? option.value ) );
			}
		} );
		return map;
	}, [ options ] );
	const hasIcons = labelsByValue.size > 0;

	return (
		<div
			ref={ wrapperRef }
			className="wpmozo-icon-picker wpmozo-icon-picker--popover"
		>
			{ label && (
				<BaseControl.VisualLabel className="wpmozo-icon-picker__label">
					{ label }
				</BaseControl.VisualLabel>
			) }
			<div className="wpmozo-icon-picker__row">
				<Dropdown
					className="wpmozo-icon-picker__dropdown"
					contentClassName="wpmozo-icon-picker-popover"
					popoverProps={ POPOVER_PROPS }
					focusOnMount="firstInputElement"
					renderToggle={ ( { isOpen, onToggle } ) => (
						<IconPickerTrigger
							ref={ triggerRef }
							id={ `${ instanceId }-trigger` }
							label={ label }
							value={ current }
							iconLabel={ labelsByValue.get( current ) }
							isOpen={ isOpen }
							onToggle={ onToggle }
							disabled={ ! hasIcons }
						/>
					) }
					renderContent={ ( { onClose } ) => (
						<IconPickerPanel
							options={ options }
							value={ current }
							onSelect={ onChange }
							onClose={ onClose }
							instanceId={ instanceId }
						/>
					) }
				/>
				{ SHOW_CLEAR_BUTTON && hasIcons && !! current && (
					<Button
						className="wpmozo-icon-picker__clear"
						size="compact"
						icon={ closeSmall }
						label={
							label
								? sprintf(
										/* translators: %s: control label, for example "Button Icon". */
										__(
											'Clear %s',
											'wpmozo-blocks-and-addons'
										),
										label
								  )
								: __( 'Clear icon', 'wpmozo-blocks-and-addons' )
						}
						onClick={ () => {
							onChange( '' );
							// The button goes away once the value is empty; keep focus on the picker.
							if ( triggerRef.current ) {
								triggerRef.current.focus();
							}
						} }
					/>
				) }
			</div>
		</div>
	);
};

export default WpmozoIconpicker;
