/**
 * Popover content: search, style chips, recent icons, icon grid and a footer readout.
 */
import { Button, Icon, SearchControl } from '@wordpress/components';
import {
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { check, closeSmall, search as searchGlyph } from '@wordpress/icons';

import {
	STYLE_LABELS,
	buildIndex,
	countByStyle,
	formatCount,
	getStyleLabel,
	getStyles,
	searchIcons,
} from './icon-data';
import IconGrid, { NoneGlyph } from './icon-grid';
import useRecentIcons, { MAX_RECENT_ICONS } from './use-recent-icons';

// Optional features (handoff §8). Set to false to turn one off.
const SHOW_RECENT_ICONS = true;
const LABEL_SMALL_RESULTS = true;

const COLUMNS = 7;
const LABELED_COLUMNS = 4;
// At or below this many results the grid switches to labeled tiles.
const LABELED_MAX_RESULTS = 48;
const INITIAL_LIMIT = COLUMNS * 15;

export default function IconPickerPanel( {
	options,
	value,
	onSelect,
	onClose,
	instanceId,
} ) {
	const index = useMemo( () => buildIndex( options ), [ options ] );
	const byValue = useMemo(
		() => new Map( index.map( ( item ) => [ item.value, item ] ) ),
		[ index ]
	);
	const styles = useMemo( () => getStyles( index ), [ index ] );
	const noneItem = useMemo( () => {
		const none = options.find(
			( option ) => option && option.value === ''
		);
		return none
			? {
					value: '',
					label: String(
						none.label || __( 'None', 'wpmozo-blocks-and-addons' )
					),
					prefix: '',
			  }
			: null;
	}, [ options ] );

	const [ query, setQuery ] = useState( '' );
	const [ style, setStyle ] = useState( 'all' );
	const [ peek, setPeek ] = useState( null );
	const [ recent, addRecent ] = useRecentIcons();

	const trimmedQuery = query.trim();
	const searched = useMemo(
		() => searchIcons( index, query ),
		[ index, query ]
	);
	const counts = useMemo( () => countByStyle( searched ), [ searched ] );
	const results = useMemo(
		() =>
			style === 'all'
				? searched
				: searched.filter( ( item ) => item.prefix === style ),
		[ searched, style ]
	);
	// The None tile (empty value) leads the grid when it matches the query.
	const showNone =
		!! noneItem &&
		style === 'all' &&
		( ! trimmedQuery ||
			noneItem.label
				.toLowerCase()
				.startsWith( trimmedQuery.toLowerCase() ) );
	const items = useMemo(
		() => ( showNone ? [ noneItem, ...results ] : results ),
		[ showNone, noneItem, results ]
	);

	const labeled =
		LABEL_SMALL_RESULTS &&
		results.length > 0 &&
		items.length <= LABELED_MAX_RESULTS;
	const cols = labeled ? LABELED_COLUMNS : COLUMNS;

	// Open on the current icon: it's the active tile, rendered, and scrolled into the middle.
	const [ initialIndex ] = useState( () =>
		Math.max(
			0,
			items.findIndex( ( item ) => item.value === value )
		)
	);
	const [ active, setActive ] = useState( initialIndex );
	const [ limit, setLimit ] = useState( () =>
		Math.max( INITIAL_LIMIT, initialIndex + COLUMNS * 6 )
	);

	const searchRef = useRef();
	const gridRef = useRef();
	const pendingFocus = useRef( null );
	const [ focusRequest, setFocusRequest ] = useState( 0 );

	const titleId = `${ instanceId }-title`;
	const recentId = `${ instanceId }-recent`;

	const resetGrid = () => {
		setActive( 0 );
		setLimit( INITIAL_LIMIT );
		setPeek( null );
		if ( gridRef.current ) {
			gridRef.current.scrollTop = 0;
		}
	};

	const updateQuery = ( next ) => {
		setQuery( next );
		resetGrid();
	};

	const changeStyle = ( next ) => {
		setStyle( next );
		resetGrid();
	};

	const focusSearch = () => searchRef.current?.focus();

	// Tiles call this from onFocus (just track it); keyboard moves also render and focus the tile.
	const focusTile = ( nextIndex, { fromFocus = false } = {} ) => {
		setActive( nextIndex );
		if ( fromFocus ) {
			setPeek( items[ nextIndex ] ? items[ nextIndex ].value : null );
			return;
		}
		setLimit( ( current ) => Math.max( current, nextIndex + cols * 4 ) );
		pendingFocus.current = nextIndex;
		setFocusRequest( ( request ) => request + 1 );
	};

	const select = ( next ) => {
		onSelect( next );
		if ( SHOW_RECENT_ICONS ) {
			addRecent( next );
		}
		onClose();
	};

	useLayoutEffect( () => {
		const grid = gridRef.current;
		const tile = grid && grid.querySelector( '.is-selected' );
		if ( tile ) {
			grid.scrollTop = Math.max(
				0,
				tile.offsetTop - ( grid.clientHeight - tile.offsetHeight ) / 2
			);
		}
	}, [] );

	useEffect( () => {
		const grid = gridRef.current;
		if ( pendingFocus.current === null || ! grid ) {
			return;
		}
		const tile = grid.querySelector(
			`[data-index="${ pendingFocus.current }"]`
		);
		pendingFocus.current = null;
		if ( ! tile ) {
			return;
		}
		tile.focus( { preventScroll: true } );
		const top = tile.offsetTop;
		const bottom = top + tile.offsetHeight;
		if ( top < grid.scrollTop + 4 ) {
			grid.scrollTop = top - 4;
		} else if ( bottom > grid.scrollTop + grid.clientHeight - 4 ) {
			grid.scrollTop = bottom - grid.clientHeight + 8;
		}
	}, [ focusRequest ] );

	// Native listener: it runs before the popover's own Escape handler, so a first Escape
	// can clear the query without closing the popover.
	const searchKeyHandler = useRef();
	searchKeyHandler.current = ( event ) => {
		if ( event.isComposing ) {
			return;
		}
		if ( event.key === 'Escape' ) {
			if ( query ) {
				event.preventDefault();
				event.stopPropagation();
				updateQuery( '' );
			}
			return;
		}
		if ( ! items.length ) {
			return;
		}
		if ( event.key === 'ArrowDown' ) {
			event.preventDefault();
			focusTile( Math.min( active, items.length - 1 ) );
		} else if ( event.key === 'Enter' ) {
			event.preventDefault();
			const pick = trimmedQuery
				? items[ 0 ]
				: items[ active ] || items[ 0 ];
			select( pick.value );
		}
	};
	useEffect( () => {
		const input = searchRef.current;
		if ( ! input ) {
			return undefined;
		}
		const listener = ( event ) => searchKeyHandler.current( event );
		input.addEventListener( 'keydown', listener );
		return () => input.removeEventListener( 'keydown', listener );
	}, [] );

	const chips =
		styles.length > 1
			? [
					{
						key: 'all',
						label: __( 'All', 'wpmozo-blocks-and-addons' ),
						count: searched.length,
					},
					...styles.map( ( prefix ) => ( {
						key: prefix,
						label: STYLE_LABELS[ prefix ] || prefix,
						count: counts[ prefix ] || 0,
					} ) ),
			  ]
			: [];

	const recentItems =
		SHOW_RECENT_ICONS && ! trimmedQuery
			? recent
					.map( ( recentValue ) => byValue.get( recentValue ) )
					.filter( Boolean )
					.slice( 0, MAX_RECENT_ICONS )
			: [];

	const countText = trimmedQuery
		? sprintf(
				/* translators: %s: number of matching icons. */
				__( '%s found', 'wpmozo-blocks-and-addons' ),
				formatCount( results.length )
		  )
		: formatCount( results.length );

	const gridLabel = trimmedQuery
		? sprintf(
				/* translators: 1: search text, 2: number of results. */
				__(
					'Results for %1$s, %2$d items',
					'wpmozo-blocks-and-addons'
				),
				trimmedQuery,
				items.length
		  )
		: sprintf(
				/* translators: %d: number of icons. */
				__( 'Icons, %d items', 'wpmozo-blocks-and-addons' ),
				items.length
		  );

	const sectionLabel =
		style === 'all'
			? __( 'All icons', 'wpmozo-blocks-and-addons' )
			: sprintf(
					/* translators: %s: icon style (Solid, Regular, Brands). */
					__( '%s icons', 'wpmozo-blocks-and-addons' ),
					STYLE_LABELS[ style ] || style
			  );

	// Footer: the hovered or focused tile, otherwise the current selection.
	const footValue = peek !== null ? peek : value;
	const isPeeking = peek !== null && peek !== value;
	let footer;
	if ( footValue ) {
		const footItem = byValue.get( footValue );
		const footName = footItem ? footItem.label : footValue;
		footer = {
			glyph: <i className={ footValue } aria-hidden="true" />,
			name: isPeeking
				? footName
				: sprintf(
						/* translators: %s: icon name. */
						__( 'Selected: %s', 'wpmozo-blocks-and-addons' ),
						footName
				  ),
			className: footValue,
			tag: getStyleLabel( footValue ),
		};
	} else {
		footer = {
			glyph: <NoneGlyph />,
			name:
				isPeeking && noneItem
					? noneItem.label
					: __( 'No icon selected', 'wpmozo-blocks-and-addons' ),
			className: isPeeking
				? __( 'Removes the icon', 'wpmozo-blocks-and-addons' )
				: '',
			tag: '',
		};
	}

	return (
		<div
			className="wpmozo-icon-picker-panel"
			role="dialog"
			aria-labelledby={ titleId }
		>
			<div className="wpmozo-icon-picker-panel__header">
				<h2 id={ titleId } className="wpmozo-icon-picker-panel__title">
					{ __( 'Choose icon', 'wpmozo-blocks-and-addons' ) }
				</h2>
				<Button
					size="compact"
					icon={ closeSmall }
					label={ __( 'Close', 'wpmozo-blocks-and-addons' ) }
					onClick={ onClose }
				/>
			</div>

			<div className="wpmozo-icon-picker-panel__search">
				<SearchControl
					ref={ searchRef }
					label={ __( 'Search icons', 'wpmozo-blocks-and-addons' ) }
					placeholder={ __(
						'Search icons',
						'wpmozo-blocks-and-addons'
					) }
					value={ query }
					onChange={ updateQuery }
					__nextHasNoMarginBottom
				/>
				<span
					className="wpmozo-icon-picker-panel__count"
					aria-hidden="true"
				>
					{ countText }
				</span>
			</div>

			{ chips.length > 0 && (
				<div
					className="wpmozo-icon-picker-panel__chips"
					role="group"
					aria-label={ __(
						'Icon style',
						'wpmozo-blocks-and-addons'
					) }
				>
					{ chips.map( ( chip ) => (
						<button
							key={ chip.key }
							type="button"
							className="wpmozo-icon-picker-chip"
							aria-pressed={ style === chip.key }
							disabled={ chip.count === 0 && style !== chip.key }
							onClick={ () => changeStyle( chip.key ) }
						>
							{ chip.label }
							<span className="wpmozo-icon-picker-chip__count">
								{ formatCount( chip.count ) }
							</span>
						</button>
					) ) }
				</div>
			) }

			{ recentItems.length > 0 && (
				<>
					<div
						id={ recentId }
						className="wpmozo-icon-picker-panel__section-label"
					>
						{ __( 'Recent', 'wpmozo-blocks-and-addons' ) }
					</div>
					<div
						className="wpmozo-icon-picker-panel__recent"
						role="group"
						aria-labelledby={ recentId }
					>
						{ recentItems.map( ( item ) => {
							const isSelected = item.value === value;
							return (
								<button
									key={ item.value }
									type="button"
									className={ `wpmozo-icon-picker-tile${
										isSelected ? ' is-selected' : ''
									}` }
									aria-label={ sprintf(
										/* translators: 1: icon name, 2: icon style (Solid, Regular, Brands). */
										__(
											'Recent: %1$s, %2$s',
											'wpmozo-blocks-and-addons'
										),
										item.label,
										getStyleLabel( item.value )
									) }
									onClick={ () => select( item.value ) }
									onMouseEnter={ () => setPeek( item.value ) }
									onMouseLeave={ () => setPeek( null ) }
									onFocus={ () => setPeek( item.value ) }
									onBlur={ () => setPeek( null ) }
								>
									<i
										className={ item.value }
										aria-hidden="true"
									/>
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
					<div className="wpmozo-icon-picker-panel__section-label">
						{ sectionLabel }
					</div>
				</>
			) }

			{ items.length > 0 ? (
				<IconGrid
					ref={ gridRef }
					id={ `${ instanceId }-grid` }
					items={ items }
					limit={ limit }
					cols={ cols }
					labeled={ labeled }
					active={ Math.min( active, items.length - 1 ) }
					selectedValue={ value }
					ariaLabel={ gridLabel }
					onSelect={ select }
					onFocusTile={ focusTile }
					onPeek={ setPeek }
					onLoadMore={ ( amount ) =>
						setLimit( ( current ) => current + amount )
					}
					onExitUp={ focusSearch }
					onType={ ( character ) => {
						updateQuery( query + character );
						focusSearch();
					} }
					onBackspace={ () => {
						updateQuery( query.slice( 0, -1 ) );
						focusSearch();
					} }
				/>
			) : (
				<div className="wpmozo-icon-picker-panel__empty">
					<Icon icon={ searchGlyph } size={ 24 } />
					<p className="wpmozo-icon-picker-panel__empty-title">
						{ sprintf(
							/* translators: %s: search text. */
							__(
								'No icons match “%s”',
								'wpmozo-blocks-and-addons'
							),
							trimmedQuery
						) }
					</p>
					<p className="wpmozo-icon-picker-panel__empty-hint">
						{ __(
							'Try a shorter word, or another name for the icon.',
							'wpmozo-blocks-and-addons'
						) }
					</p>
					<div className="wpmozo-icon-picker-panel__empty-actions">
						{ query && (
							<Button
								variant="link"
								onClick={ () => {
									updateQuery( '' );
									focusSearch();
								} }
							>
								{ __(
									'Clear search',
									'wpmozo-blocks-and-addons'
								) }
							</Button>
						) }
						{ style !== 'all' && (
							<Button
								variant="link"
								onClick={ () => {
									changeStyle( 'all' );
									focusSearch();
								} }
							>
								{ __(
									'Search all styles',
									'wpmozo-blocks-and-addons'
								) }
							</Button>
						) }
					</div>
				</div>
			) }

			<div
				className="wpmozo-icon-picker-panel__footer"
				aria-live="polite"
			>
				<span className="wpmozo-icon-picker__swatch" aria-hidden="true">
					{ footer.glyph }
				</span>
				<span className="wpmozo-icon-picker-panel__footer-text">
					<span className="wpmozo-icon-picker-panel__footer-name">
						{ footer.name }
					</span>
					{ ( footer.className || footer.tag ) && (
						<span className="wpmozo-icon-picker-panel__footer-meta">
							{ footer.className && (
								<span className="wpmozo-icon-picker-panel__footer-class">
									{ footer.className }
								</span>
							) }
							{ footer.tag && (
								<span className="wpmozo-icon-picker-panel__tag">
									{ footer.tag }
								</span>
							) }
						</span>
					) }
				</span>
			</div>
		</div>
	);
}
