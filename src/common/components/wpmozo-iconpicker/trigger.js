/**
 * Compact trigger row: swatch, icon name and class, chevron.
 */
import { Icon } from '@wordpress/components';
import { forwardRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { chevronDown } from '@wordpress/icons';

import { getStyleLabel } from './icon-data';

const IconPickerTrigger = forwardRef(
	( { id, label, value, iconLabel, isOpen, onToggle, disabled }, ref ) => {
		const hasValue = !! value;

		let name = __( 'Choose an icon', 'wpmozo-blocks-and-addons' );
		if ( disabled ) {
			name = __( 'No icons available', 'wpmozo-blocks-and-addons' );
		} else if ( hasValue ) {
			name = iconLabel || value;
		}

		let ariaLabel;
		if ( hasValue ) {
			ariaLabel = label
				? sprintf(
						/* translators: 1: control label, 2: icon name, 3: icon style (Solid, Regular, Brands). */
						__(
							'%1$s: %2$s, %3$s. Change icon',
							'wpmozo-blocks-and-addons'
						),
						label,
						name,
						getStyleLabel( value )
				  )
				: sprintf(
						/* translators: 1: icon name, 2: icon style (Solid, Regular, Brands). */
						__(
							'%1$s, %2$s. Change icon',
							'wpmozo-blocks-and-addons'
						),
						name,
						getStyleLabel( value )
				  );
		} else {
			ariaLabel = label
				? sprintf(
						/* translators: %s: control label. */
						__(
							'%s: none. Change icon',
							'wpmozo-blocks-and-addons'
						),
						label
				  )
				: __( 'No icon. Change icon', 'wpmozo-blocks-and-addons' );
		}
		if ( disabled ) {
			ariaLabel = label ? `${ label }: ${ name }` : name;
		}

		const className = [
			'wpmozo-icon-picker__trigger',
			isOpen ? 'is-open' : '',
			hasValue ? '' : 'is-empty',
		]
			.filter( Boolean )
			.join( ' ' );

		return (
			<button
				ref={ ref }
				id={ id }
				type="button"
				className={ className }
				onClick={ onToggle }
				disabled={ disabled }
				aria-haspopup="dialog"
				aria-expanded={ isOpen }
				aria-label={ ariaLabel }
			>
				<span className="wpmozo-icon-picker__swatch" aria-hidden="true">
					{ hasValue ? (
						<i className={ value } />
					) : (
						<span className="wpmozo-icon-picker__plus">+</span>
					) }
				</span>
				<span className="wpmozo-icon-picker__text" aria-hidden="true">
					<span className="wpmozo-icon-picker__name">{ name }</span>
					<span className="wpmozo-icon-picker__class">
						{ hasValue
							? value
							: __(
									'None selected',
									'wpmozo-blocks-and-addons'
							  ) }
					</span>
				</span>
				<Icon
					className="wpmozo-icon-picker__chevron"
					icon={ chevronDown }
					size={ 20 }
				/>
			</button>
		);
	}
);

export default IconPickerTrigger;
