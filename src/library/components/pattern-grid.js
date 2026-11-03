/**
 * Results grid with incremental rendering: 24 cards at a time, more when the end
 * scrolls into view, plus a "Load more" button for keyboard users.
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useEffect, useRef, useState } from '@wordpress/element';
import PatternCard from './pattern-card';

export const PAGE_SIZE = 24;

export default function PatternGrid( {
	patterns,
	categories,
	insertingId,
	manage,
	cardRefs,
	onPreview,
	onInsert,
	after,
} ) {
	const [ shown, setShown ] = useState( PAGE_SIZE );
	const sentinel = useRef();

	// A new result set starts again at the first page.
	useEffect( () => setShown( PAGE_SIZE ), [ patterns ] );

	useEffect( () => {
		const node = sentinel.current;
		if (
			! node ||
			shown >= patterns.length ||
			! window.IntersectionObserver
		) {
			return;
		}
		const observer = new window.IntersectionObserver(
			( entries ) => {
				if ( entries.some( ( entry ) => entry.isIntersecting ) ) {
					setShown( ( count ) => count + PAGE_SIZE );
				}
			},
			{ rootMargin: '400px' }
		);
		observer.observe( node );
		return () => observer.disconnect();
	}, [ shown, patterns.length ] );

	const visible = patterns.slice( 0, shown );
	const hasMore = shown < patterns.length;

	return (
		<>
			<div className="wpmozo-library__grid">
				{ visible.map( ( pattern ) => (
					<PatternCard
						key={ pattern.id }
						ref={ ( node ) => {
							cardRefs.current[ pattern.id ] = node;
						} }
						pattern={ pattern }
						categoryLabel={ categories[ pattern.category ] || '' }
						manage={ manage }
						isInserting={ insertingId === pattern.id }
						onPreview={ () => onPreview( pattern.id ) }
						onInsert={ () => onInsert( pattern ) }
					/>
				) ) }
				{ ! hasMore && after }
			</div>
			{ hasMore && (
				<div className="wpmozo-library__more" ref={ sentinel }>
					<Button
						variant="secondary"
						onClick={ () =>
							setShown( ( count ) => count + PAGE_SIZE )
						}
					>
						{ __(
							'Load more patterns',
							'wpmozo-blocks-and-addons'
						) }
					</Button>
				</div>
			) }
		</>
	);
}
