/**
 * Icon grid: one roving tab stop, keyboard navigation and progressive rendering.
 * Rows of tiles are added as the user scrolls or moves past the rendered range.
 */
import { Icon } from '@wordpress/components';
import { forwardRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { check } from '@wordpress/icons';

import { getStyleLabel } from './icon-data';

// Load more rows when the grid is scrolled to within this many pixels of the bottom.
const LOAD_MORE_THRESHOLD = 160;
const LOAD_MORE_ROWS = 15;
const PAGE_ROWS = 5;

// "No icon" glyph for the None tile: a circle with a slash.
export const NoneGlyph = () => (
	<svg
		viewBox="0 0 24 24"
		width="16"
		height="16"
		aria-hidden="true"
		focusable="false"
	>
		<circle
			cx="12"
			cy="12"
			r="8"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
		/>
		<path d="M6.5 17.5l11-11" stroke="currentColor" strokeWidth="1.5" />
	</svg>
);

const IconGrid = forwardRef(
	(
		{
			id,
			items,
			limit,
			cols,
			labeled,
			active,
			selectedValue,
			ariaLabel,
			onSelect,
			onFocusTile,
			onPeek,
			onLoadMore,
			onExitUp,
			onType,
			onBackspace,
		},
		ref
	) => {
		const onKeyDown = ( event ) => {
			const count = items.length;
			if ( ! count ) {
				return;
			}
			const { key } = event;
			let index = active;

			if ( key === 'ArrowRight' ) {
				index++;
			} else if ( key === 'ArrowLeft' ) {
				index--;
			} else if ( key === 'ArrowDown' ) {
				index += cols;
			} else if ( key === 'ArrowUp' ) {
				if ( index - cols < 0 ) {
					event.preventDefault();
					onExitUp();
					return;
				}
				index -= cols;
			} else if ( key === 'Home' ) {
				index = 0;
			} else if ( key === 'End' ) {
				index = count - 1;
			} else if ( key === 'PageDown' ) {
				index += cols * PAGE_ROWS;
			} else if ( key === 'PageUp' ) {
				index -= cols * PAGE_ROWS;
			} else if ( key === 'Backspace' ) {
				event.preventDefault();
				onBackspace();
				return;
			} else if (
				key.length === 1 &&
				key !== ' ' &&
				! event.ctrlKey &&
				! event.metaKey &&
				! event.altKey
			) {
				// Typing while in the grid continues the search.
				event.preventDefault();
				onType( key );
				return;
			} else {
				// Enter and Space activate the focused tile natively; Esc closes the popover.
				return;
			}

			event.preventDefault();
			onFocusTile( Math.max( 0, Math.min( count - 1, index ) ) );
		};

		const onScroll = ( event ) => {
			const grid = event.currentTarget;
			if (
				limit < items.length &&
				grid.scrollTop + grid.clientHeight >
					grid.scrollHeight - LOAD_MORE_THRESHOLD
			) {
				onLoadMore( cols * LOAD_MORE_ROWS );
			}
		};

		const onBlur = ( event ) => {
			if ( ! event.currentTarget.contains( event.relatedTarget ) ) {
				onPeek( null );
			}
		};

		return (
			// Focus lives on the options (one roving tab stop), not on the listbox itself.
			// eslint-disable-next-line jsx-a11y/interactive-supports-focus
			<div
				ref={ ref }
				id={ id }
				role="listbox"
				aria-label={ ariaLabel }
				className={ `wpmozo-icon-picker-grid${
					labeled ? ' is-labeled' : ''
				}` }
				onKeyDown={ onKeyDown }
				onScroll={ onScroll }
				onMouseLeave={ () => onPeek( null ) }
				onBlur={ onBlur }
			>
				{ items.slice( 0, limit ).map( ( item, index ) => {
					const isNone = item.value === '';
					const isSelected = item.value === selectedValue;
					let optionLabel = isNone
						? item.label
						: `${ item.label }, ${ getStyleLabel( item.value ) }`;
					if ( isSelected ) {
						optionLabel = sprintf(
							/* translators: %s: icon name and style. */
							__( '%s, selected', 'wpmozo-blocks-and-addons' ),
							optionLabel
						);
					}
					return (
						<button
							key={ item.value || '__none' }
							type="button"
							role="option"
							aria-selected={ isSelected }
							aria-label={ optionLabel }
							tabIndex={ index === active ? 0 : -1 }
							data-index={ index }
							className={ [
								'wpmozo-icon-picker-tile',
								isSelected ? 'is-selected' : '',
								isNone ? 'is-none' : '',
								labeled ? 'is-labeled' : '',
							]
								.filter( Boolean )
								.join( ' ' ) }
							onClick={ () => onSelect( item.value ) }
							onFocus={ () =>
								onFocusTile( index, { fromFocus: true } )
							}
							onMouseEnter={ () => onPeek( item.value ) }
						>
							{ isNone ? (
								<NoneGlyph />
							) : (
								<i
									className={ item.value }
									aria-hidden="true"
								/>
							) }
							{ labeled && (
								<span
									className="wpmozo-icon-picker-tile__label"
									aria-hidden="true"
								>
									{ item.label }
								</span>
							) }
							{/* { isSelected && (
								<span
									className="wpmozo-icon-picker-tile__check"
									aria-hidden="true"
								>
									<Icon icon={ check } size={ 15 } />
								</span>
							) } */}
						</button>
					);
				} ) }
			</div>
		);
	}
);

export default IconGrid;
