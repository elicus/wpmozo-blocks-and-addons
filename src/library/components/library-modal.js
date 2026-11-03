/**
 * The Pattern Library window: catalog, filters, grid, preview and insertion.
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import { Button, Modal, Notice } from '@wordpress/components';
import { useDispatch, useSelect, dispatch } from '@wordpress/data';
import { useDebounce, useViewportMatch } from '@wordpress/compose';
import { speak } from '@wordpress/a11y';
import { store as noticesStore } from '@wordpress/notices';
import { store as editorStore } from '@wordpress/editor';
import { useEffect, useMemo, useRef, useState } from '@wordpress/element';
import { STORE_NAME } from '../store';
import { fetchCatalog, fetchPattern } from '../api';
import { filterPatterns } from '../search';
import { prepareBlocks, insertBlocks } from '../importer';
import { insertErrorMessage } from '../messages';
import { libraryIcon } from '../assets';
import CategoryNav from './category-nav';
import Toolbar from './toolbar';
import PatternGrid from './pattern-grid';
import Preview from './preview';
import UpsellCard from './upsell-card';
import { SkeletonGrid, EmptyState, ErrorState } from './states';

export default function LibraryModal() {
	const { close } = useDispatch( STORE_NAME );
	const target = useSelect(
		( select ) => select( STORE_NAME ).getTarget(),
		[]
	);
	const { createSuccessNotice } = useDispatch( noticesStore );
	const isSmall = useViewportMatch( 'medium', '<' );

	const [ catalog, setCatalog ] = useState( null );
	const [ loadError, setLoadError ] = useState( null );
	const [ query, setQuery ] = useState( '' );
	const [ source, setSource ] = useState( 'all' );
	const [ category, setCategory ] = useState( '' );
	const [ availableOnly, setAvailableOnly ] = useState( false );
	const [ sort, setSort ] = useState( 'recommended' );
	const [ previewId, setPreviewId ] = useState( null );
	const [ insertingId, setInsertingId ] = useState( null );
	const [ insertError, setInsertError ] = useState( null );

	const cardRefs = useRef( {} );
	const main = useRef();
	const savedScroll = useRef( 0 );
	const announce = useDebounce( speak, 500 );

	const load = ( refresh ) => {
		setLoadError( null );
		fetchCatalog( refresh )
			.then( setCatalog )
			.catch( ( error ) =>
				setLoadError(
					error?.message ||
						__(
							'Check your connection and try again.',
							'wpmozo-blocks-and-addons'
						)
				)
			);
	};
	useEffect( () => load( false ), [] );

	const labels = useMemo( () => {
		const map = {};
		( catalog?.categories || [] ).forEach(
			( item ) => ( map[ item.id ] = item.label )
		);
		return map;
	}, [ catalog ] );

	const results = useMemo(
		() =>
			catalog
				? filterPatterns(
						catalog.patterns,
						{ query, source, category, availableOnly, sort },
						labels
				  )
				: [],
		[ catalog, query, source, category, availableOnly, sort, labels ]
	);

	useEffect( () => {
		if ( catalog ) {
			announce(
				sprintf(
					/* translators: %d: number of patterns. */
					_n(
						'%d pattern found.',
						'%d patterns found.',
						results.length,
						'wpmozo-blocks-and-addons'
					),
					results.length
				)
			);
		}
	}, [ results.length, catalog, announce ] );

	const proSource = catalog?.sources.find(
		( item ) => item.access === 'pro'
	);
	const licenseUrl = proSource?.links?.license || '';
	const manage = !! licenseUrl;
	const hasPro = !! catalog?.patterns.some(
		( item ) => item.access === 'pro'
	);
	const previewIndex = results.findIndex( ( item ) => item.id === previewId );
	const previewPattern = previewIndex >= 0 ? results[ previewIndex ] : null;

	const openPreview = ( id ) => {
		savedScroll.current = main.current?.scrollTop || 0;
		setInsertError( null );
		setPreviewId( id );
	};
	const closePreview = () => {
		const id = previewId;
		setPreviewId( null );
		// Back to the same card, at the same scroll position.
		window.requestAnimationFrame( () => {
			if ( main.current ) {
				main.current.scrollTop = savedScroll.current;
			}
			cardRefs.current[ id ]?.focus();
		} );
	};

	const insert = async ( pattern ) => {
		setInsertingId( pattern.id );
		setInsertError( null );
		try {
			const response = await fetchPattern( pattern.id );
			const blocks = prepareBlocks( response.content );
			insertBlocks( blocks, target );
			close();
			createSuccessNotice(
				sprintf(
					/* translators: %s: pattern title. */
					__( '“%s” inserted.', 'wpmozo-blocks-and-addons' ),
					pattern.title
				),
				{
					type: 'snackbar',
					actions: [
						{
							label: __( 'Undo', 'wpmozo-blocks-and-addons' ),
							onClick: () => dispatch( editorStore ).undo(),
						},
					],
				}
			);
		} catch ( error ) {
			const message = insertErrorMessage( error );
			setInsertError( message );
			speak( message, 'assertive' );
		} finally {
			setInsertingId( null );
		}
	};

	const clearFilters = () => {
		setQuery( '' );
		setSource( 'all' );
		setCategory( '' );
		setAvailableOnly( false );
	};

	let content;
	if ( loadError ) {
		content = (
			<ErrorState message={ loadError } onRetry={ () => load( true ) } />
		);
	} else if ( ! catalog ) {
		content = <SkeletonGrid />;
	} else if ( ! catalog.patterns.length ) {
		content = (
			<EmptyState
				title={ __( 'No patterns yet', 'wpmozo-blocks-and-addons' ) }
				description={ __(
					'Patterns will appear here when they are added.',
					'wpmozo-blocks-and-addons'
				) }
			/>
		);
	} else if ( ! results.length ) {
		content = (
			<EmptyState
				title={ __( 'No patterns match', 'wpmozo-blocks-and-addons' ) }
				description={ __(
					'Try another search or clear the filters.',
					'wpmozo-blocks-and-addons'
				) }
				action={
					<Button variant="secondary" onClick={ clearFilters }>
						{ __( 'Clear filters', 'wpmozo-blocks-and-addons' ) }
					</Button>
				}
			/>
		);
	} else {
		content = (
			<PatternGrid
				patterns={ results }
				categories={ labels }
				insertingId={ insertingId }
				manage={ manage }
				cardRefs={ cardRefs }
				onPreview={ openPreview }
				onInsert={ insert }
				after={
					source !== 'pro' && (
						<UpsellCard
							context={ catalog.context }
							hasPremiumSource={ !! proSource }
						/>
					)
				}
			/>
		);
	}

	return (
		<Modal
			title={ __( 'Pattern Library', 'wpmozo-blocks-and-addons' ) }
			icon={ libraryIcon }
			className="wpmozo-library"
			size="fill"
			isFullScreen={ isSmall }
			focusOnMount="firstContentElement"
			onRequestClose={ ( event ) => {
				// Escape inside the preview goes back to the grid first.
				if ( previewPattern && event?.type === 'keydown' ) {
					closePreview();
					return;
				}
				close();
			} }
		>
			<div className="wpmozo-library__layout">
				{ ! isSmall && ! previewPattern && catalog && (
					<aside className="wpmozo-library__sidebar">
						<CategoryNav
							categories={ catalog.categories }
							total={ catalog.patterns.length }
							value={ category }
							onChange={ setCategory }
						/>
					</aside>
				) }
				<div className="wpmozo-library__main" ref={ main }>
					{ insertError && (
						<Notice
							status="error"
							onRemove={ () => setInsertError( null ) }
						>
							{ insertError }
						</Notice>
					) }
					{ previewPattern ? (
						<Preview
							pattern={ previewPattern }
							categoryLabel={
								labels[ previewPattern.category ] || ''
							}
							manage={ manage }
							licenseUrl={ licenseUrl }
							isInserting={ insertingId === previewPattern.id }
							onBack={ closePreview }
							onInsert={ () => insert( previewPattern ) }
							onPrevious={
								previewIndex > 0
									? () =>
											setPreviewId(
												results[ previewIndex - 1 ].id
											)
									: null
							}
							onNext={
								previewIndex < results.length - 1
									? () =>
											setPreviewId(
												results[ previewIndex + 1 ].id
											)
									: null
							}
						/>
					) : (
						<>
							{ isSmall && catalog && (
								<CategoryNav
									compact
									categories={ catalog.categories }
									total={ catalog.patterns.length }
									value={ category }
									onChange={ setCategory }
								/>
							) }
							<Toolbar
								query={ query }
								onQuery={ setQuery }
								source={ source }
								onSource={ setSource }
								showSourceFilter={ hasPro }
								sort={ sort }
								onSort={ setSort }
								availableOnly={ availableOnly }
								onAvailableOnly={ setAvailableOnly }
								count={ results.length }
							/>
							{ content }
						</>
					) }
				</div>
			</div>
		</Modal>
	);
}
