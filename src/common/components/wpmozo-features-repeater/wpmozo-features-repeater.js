import { __, _n, sprintf } from '@wordpress/i18n';
import { useState, Fragment } from '@wordpress/element';
import { PanelBody, Button, ToggleControl } from '@wordpress/components';
import {
	Icon,
	arrowUp,
	arrowDown,
	chevronDown,
	chevronUp,
	copy,
	trash,
	plus,
	pencil,
	image as imageIcon,
} from '@wordpress/icons';

// An image value is an object ({ url, … }).
const isImage = ( value ) => !! value && 'object' === typeof value;

function Thumb( { url, size } ) {
	return url ? (
		<img
			className="wpmozo-fr__thumb"
			src={ url }
			alt=""
			style={ { width: size, height: size } }
		/>
	) : (
		<span
			className="wpmozo-fr__thumb wpmozo-fr__thumb--empty"
			style={ { width: size, height: size } }
		>
			<Icon icon={ imageIcon } size={ 16 } />
		</span>
	);
}

/**
 * Repeater for an array attribute: a list of the items to pick from, then the picked item's controls in
 * collapsible sections. The block gives the controls, like MozoStates; this only handles the items.
 *
 * Usage:
 * <WpmozoFeaturesRepeater
 *     title="Configuration"                 // Optional PanelBody title; without it, no PanelBody.
 *     label="Slides"                        // List header.
 *     items={ attributes.features }
 *     onChange={ ( items ) => setAttributes( { features: items } ) }
 *     newItem={ { list: '' } }              // What "Add item" adds.
 *     sections={ [
 *         { key: 'content', title: 'Content', initialOpen: true, fields: [
 *             { key: 'title', showInList: true, showInSummary: true, render: ( value, onChange, { item, index, updateItem } ) => <TextControl … /> },
 *         ] },
 *         // `toggle`: the section header is a ToggleControl for that item key, and its fields show while it's on.
 *         { key: 'primary', title: 'Primary button', toggle: 'showPrimaryButton', listLabel: 'Primary', fields: [ … ] },
 *     ] }
 * />
 *
 * showInList: the value shows in the item's list row. An image ({ url }) shows as the thumbnail, the first
 * text field as the row title, the other text fields in the meta line (with the `listLabel` of the toggle
 * sections that are on). showInSummary: the value shows in the collapsed section header. Empty values are left
 * out, unless the field gives `emptyText` (meta line) or `summaryEmptyText` (section header), or the repeater
 * gives `noTogglesText` (meta line, when no toggle section is on).
 * Duplicating an item adds " (copy)" to its title field.
 * The picked item and the open sections are editor-only state, never saved.
 *
 * @param {Object}   root0               Props.
 * @param {string}   root0.title         PanelBody title; without it, no PanelBody.
 * @param {string}   root0.label         List header.
 * @param {Array}    root0.items         The items.
 * @param {Function} root0.onChange      Gets the new items array.
 * @param {Object}   root0.newItem       What "Add item" adds.
 * @param {Array}    root0.sections      The sections and their fields.
 * @param {boolean}  root0.initialOpen   Whether the PanelBody starts open.
 * @param {string}   root0.noTogglesText Meta line text when no toggle section is on.
 * @return {Element} The repeater.
 */
const WpmozoFeaturesRepeater = ( {
	title,
	label = __( 'Items', 'wpmozo-blocks-and-addons' ),
	items = [],
	onChange,
	newItem = {},
	sections = [],
	initialOpen = true,
	noTogglesText = '',
} ) => {
	const list = items || [];
	const [ selected, setSelected ] = useState( 0 );
	const [ open, setOpen ] = useState( () =>
		sections.reduce(
			( acc, section ) => ( {
				...acc,
				[ section.key ]: !! section.initialOpen,
			} ),
			{}
		)
	);

	const index = list.length ? Math.min( selected, list.length - 1 ) : -1;
	const item = index > -1 ? list[ index ] : null;

	const fields = sections.reduce(
		( acc, section ) => acc.concat( section.fields || [] ),
		[]
	);
	const listFields = fields.filter( ( field ) => field.showInList );
	// A field holds an image when any item keeps an object in it; so the thumbnail column stays even when it's empty.
	const imageFields = listFields.filter( ( field ) =>
		list.some( ( entry ) => isImage( entry?.[ field.key ] ) )
	);
	const textFields = listFields.filter(
		( field ) => ! imageFields.includes( field )
	);
	const titleField = textFields[ 0 ];
	const metaFields = textFields.slice( 1 );
	const toggleSections = sections.filter(
		( section ) => section.toggle && section.listLabel
	);

	const updateItem = ( patch ) => {
		const next = [ ...list ];
		next[ index ] = { ...next[ index ], ...patch };
		onChange( next );
	};

	const moveItem = ( dir ) => {
		const to = index + dir;
		if ( to < 0 || to >= list.length ) {
			return;
		}
		const next = [ ...list ];
		[ next[ index ], next[ to ] ] = [ next[ to ], next[ index ] ];
		onChange( next );
		setSelected( to );
	};

	const duplicateItem = () => {
		const duplicate = { ...item };
		if ( titleField ) {
			duplicate[ titleField.key ] = sprintf(
				/* translators: %s: title of the duplicated item. */
				__( '%s', 'wpmozo-blocks-and-addons' ),
				item[ titleField.key ] ||
					__( 'Untitled item', 'wpmozo-blocks-and-addons' )
			);
		}
		const next = [ ...list ];
		next.splice( index + 1, 0, duplicate );
		onChange( next );
		setSelected( index + 1 );
	};

	const removeItem = () => {
		const next = list.filter( ( _, i ) => i !== index );
		onChange( next );
		setSelected( Math.max( 0, Math.min( index, next.length - 1 ) ) );
	};

	const addItem = () => {
		onChange( [ ...list, { ...newItem } ] );
		setSelected( list.length );
		if ( sections[ 0 ] && ! sections[ 0 ].toggle ) {
			setOpen( ( o ) => ( { ...o, [ sections[ 0 ].key ]: true } ) );
		}
	};

	const toggleSection = ( key ) =>
		setOpen( ( o ) => ( { ...o, [ key ]: ! o[ key ] } ) );

	const imageUrl = ( entry ) => {
		const field = imageFields.find( ( f ) => entry?.[ f.key ]?.url );
		return field ? entry[ field.key ].url : '';
	};

	const metaText = ( entry ) => {
		const texts = metaFields
			.map( ( field ) => {
				const value = entry?.[ field.key ];
				return value && 'string' === typeof value
					? value
					: field.emptyText;
			} )
			.filter( Boolean );
		const toggles = toggleSections
			.filter( ( section ) => entry?.[ section.toggle ] )
			.map( ( section ) => section.listLabel );
		if ( toggles.length ) {
			texts.push( toggles.join( ' + ' ) );
		} else if ( toggleSections.length && noTogglesText ) {
			texts.push( noTogglesText );
		}
		return texts.join( ' · ' );
	};

	const renderFields = ( section ) =>
		( section.fields || [] ).map( ( field ) => (
			<Fragment key={ field.key }>
				{ field.render(
					item[ field.key ],
					( value ) => updateItem( { [ field.key ]: value } ),
					{ item, index, updateItem }
				) }
			</Fragment>
		) );

	const renderSection = ( section ) => {
		if ( section.toggle ) {
			const enabled = !! item[ section.toggle ];
			return (
				<div className="wpmozo-fr__section" key={ section.key }>
					<div className="wpmozo-fr__switch-row">
						<ToggleControl
							label={ section.title }
							checked={ enabled }
							onChange={ ( value ) =>
								updateItem( { [ section.toggle ]: value } )
							}
							__nextHasNoMarginBottom
						/>
					</div>
					{ enabled && (
						<div className="wpmozo-fr__section-body wpmozo-fr__section-body--toggle">
							{ renderFields( section ) }
						</div>
					) }
				</div>
			);
		}

		const summaryFields = ( section.fields || [] ).filter(
			( field ) => field.showInSummary
		);
		const summaryImage = summaryFields
			.map( ( field ) => item[ field.key ] )
			.find( ( value ) => isImage( value ) && value.url );
		const summary = summaryFields
			.map( ( field ) => {
				const value = item[ field.key ];
				if ( isImage( value ) && value.url ) {
					return (
						value.title ||
						__( 'Image selected', 'wpmozo-blocks-and-addons' )
					);
				}
				return (
					( 'string' === typeof value && value ) ||
					field.summaryEmptyText ||
					''
				);
			} )
			.filter( Boolean )
			.join( ' — ' );
		const isOpen = !! open[ section.key ];

		return (
			<div className="wpmozo-fr__section" key={ section.key }>
				<button
					type="button"
					className="wpmozo-fr__section-head"
					aria-expanded={ isOpen }
					onClick={ () => toggleSection( section.key ) }
				>
					<span className="wpmozo-fr__section-text">
						<span className="wpmozo-fr__section-title">
							{ section.title }
						</span>
						{ summary && (
							<span className="wpmozo-fr__muted">
								{ summary }
							</span>
						) }
					</span>
					{ summaryImage && (
						<Thumb url={ summaryImage.url } size={ 28 } />
					) }
					<Icon icon={ isOpen ? chevronUp : chevronDown } />
				</button>
				{ isOpen && (
					<div className="wpmozo-fr__section-body">
						{ renderFields( section ) }
					</div>
				) }
			</div>
		);
	};

	const content = (
		<div className="wpmozo-fr">
			{ /* Item list. */ }
			<div className="wpmozo-fr__list-head">
				<span className="wpmozo-fr__label">{ label }</span>
				<span className="wpmozo-fr__count">
					{ sprintf(
						/* translators: %d: number of items. */
						_n(
							'%d item',
							'%d items',
							list.length,
							'wpmozo-blocks-and-addons'
						),
						list.length
					) }
				</span>
			</div>

			<div className="wpmozo-fr__list" role="list">
				{ list.map( ( entry, i ) => {
					const isSelected = i === index;
					const rowTitle = titleField
						? entry?.[ titleField.key ]
						: '';
					const meta = metaText( entry );
					return (
						<div role="listitem" key={ i }>
							<button
								type="button"
								className={ `wpmozo-fr__row${
									isSelected ? ' is-selected' : ''
								}` }
								aria-current={ isSelected ? 'true' : undefined }
								onClick={ () => setSelected( i ) }
							>
								<span className="wpmozo-fr__row-num">
									{ i + 1 }
								</span>
								{ imageFields.length > 0 && (
									<Thumb
										url={ imageUrl( entry ) }
										size={ 32 }
									/>
								) }
								<span className="wpmozo-fr__row-text">
									<span
										className={ `wpmozo-fr__row-title${
											rowTitle ? '' : ' is-empty'
										}` }
									>
										{ rowTitle ||
											__(
												'Untitled item',
												'wpmozo-blocks-and-addons'
											) }
									</span>
									{ meta && (
										<span className="wpmozo-fr__muted">
											{ meta }
										</span>
									) }
								</span>
								{ isSelected && (
									<Icon
										icon={ pencil }
										size={ 16 }
										className="wpmozo-fr__row-edit"
									/>
								) }
							</button>
						</div>
					);
				} ) }
				<Button
					className="wpmozo-fr__add"
					icon={ plus }
					onClick={ addItem }
				>
					{ __( 'Add item', 'wpmozo-blocks-and-addons' ) }
				</Button>
			</div>

			{ ! item && (
				<p className="wpmozo-fr__muted wpmozo-fr__empty">
					{ __(
						'Add an item to start editing.',
						'wpmozo-blocks-and-addons'
					) }
				</p>
			) }

			{ item && (
				<div
					className={ `wpmozo-fr__editor${
						title ? ' wpmozo-fr__editor--bleed' : ''
					}` }
				>
					{ /* Editor header and item actions. */ }
					<div className="wpmozo-fr__editor-head">
						<span className="wpmozo-fr__editor-title">
							{ sprintf(
								/* translators: 1: item number, 2: number of items. */
								__(
									'Item %1$d of %2$d',
									'wpmozo-blocks-and-addons'
								),
								index + 1,
								list.length
							) }
						</span>
						<Button
							icon={ arrowUp }
							label={ __(
								'Move up',
								'wpmozo-blocks-and-addons'
							) }
							disabled={ 0 === index }
							onClick={ () => moveItem( -1 ) }
							size="compact"
						/>
						<Button
							icon={ arrowDown }
							label={ __(
								'Move down',
								'wpmozo-blocks-and-addons'
							) }
							disabled={ list.length - 1 === index }
							onClick={ () => moveItem( 1 ) }
							size="compact"
						/>
						<Button
							icon={ copy }
							label={ __(
								'Duplicate item',
								'wpmozo-blocks-and-addons'
							) }
							onClick={ duplicateItem }
							size="compact"
						/>
						<Button
							icon={ trash }
							label={ __(
								'Remove item',
								'wpmozo-blocks-and-addons'
							) }
							isDestructive
							onClick={ removeItem }
							size="compact"
						/>
					</div>

					{ sections.map( renderSection ) }
				</div>
			) }
		</div>
	);

	return title ? (
		<PanelBody
			title={ title }
			initialOpen={ initialOpen }
			className="wpmozo-fr-panel"
		>
			{ content }
		</PanelBody>
	) : (
		content
	);
};

export default WpmozoFeaturesRepeater;
