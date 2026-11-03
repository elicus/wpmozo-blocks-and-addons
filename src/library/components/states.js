/**
 * Loading, empty and error states.
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { EmptyArt } from '../assets';

export function SkeletonGrid( { count = 8 } ) {
	return (
		<div className="wpmozo-library__grid" aria-hidden="true">
			{ Array.from( { length: count }, ( _, index ) => (
				<div key={ index } className="wpmozo-library__card is-skeleton">
					<div className="wpmozo-library__thumb" />
					<div className="wpmozo-library__card-body">
						<span className="wpmozo-library__skeleton-line" />
						<span className="wpmozo-library__skeleton-line is-short" />
					</div>
				</div>
			) ) }
		</div>
	);
}

export function EmptyState( { title, description, action } ) {
	return (
		<div className="wpmozo-library__state">
			<EmptyArt />
			<h3>{ title }</h3>
			{ description && <p>{ description }</p> }
			{ action }
		</div>
	);
}

export function ErrorState( { message, onRetry } ) {
	return (
		<div className="wpmozo-library__state" role="alert">
			<h3>
				{ __(
					'The pattern library couldn’t load',
					'wpmozo-blocks-and-addons'
				) }
			</h3>
			<p>{ message }</p>
			<Button variant="primary" onClick={ onRetry }>
				{ __( 'Try again', 'wpmozo-blocks-and-addons' ) }
			</Button>
		</div>
	);
}
