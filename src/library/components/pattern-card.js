/**
 * One pattern in the grid: thumbnail (opens the preview), title, category, badges,
 * availability and actions. State is shown with text and an icon, never colour alone.
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button, Icon } from '@wordpress/components';
import { lock, info } from '@wordpress/icons';
import { forwardRef } from '@wordpress/element';
import Thumbnail from './thumbnail';
import { reasonMessage } from '../messages';

function PatternCard(
	{ pattern, categoryLabel, onPreview, onInsert, isInserting, manage },
	ref
) {
	const { state, reasons } = pattern.availability;
	const isPro = pattern.access === 'pro';

	return (
		<article className={ `wpmozo-library__card is-${ state }` }>
			{ /* Mouse shortcut to the preview; keyboard and screen-reader users use the Preview button below. */ }
			<button
				type="button"
				className="wpmozo-library__card-media"
				onClick={ onPreview }
				tabIndex={ -1 }
				aria-hidden="true"
			>
				<Thumbnail image={ pattern.thumbnail } />
				{ state !== 'available' && (
					<span className="wpmozo-library__card-state">
						<Icon
							icon={ state === 'locked' ? lock : info }
							size={ 16 }
						/>
						{ state === 'locked'
							? __( 'Locked', 'wpmozo-blocks-and-addons' )
							: __( 'Unavailable', 'wpmozo-blocks-and-addons' ) }
					</span>
				) }
			</button>
			<div className="wpmozo-library__card-body">
				<div className="wpmozo-library__card-heading">
					<h3 className="wpmozo-library__card-title">
						{ pattern.title }
					</h3>
					{ isPro && (
						<span className="wpmozo-library__badge is-pro">
							{ __( 'Pro', 'wpmozo-blocks-and-addons' ) }
						</span>
					) }
				</div>
				<p className="wpmozo-library__card-meta">{ categoryLabel }</p>
				{ state !== 'available' && (
					<p className="wpmozo-library__card-reason">
						{ reasonMessage( reasons[ 0 ] || '', manage ) }
					</p>
				) }
				<div className="wpmozo-library__card-actions">
					<Button
						ref={ ref }
						variant="tertiary"
						size="compact"
						onClick={ onPreview }
						aria-label={ sprintf(
							/* translators: %s: pattern title. */
							__( 'Preview %s', 'wpmozo-blocks-and-addons' ),
							pattern.title
						) }
					>
						{ __( 'Preview', 'wpmozo-blocks-and-addons' ) }
					</Button>
					{ state === 'available' && (
						<Button
							variant="primary"
							size="compact"
							onClick={ onInsert }
							isBusy={ isInserting }
							aria-disabled={ isInserting }
							aria-label={ sprintf(
								/* translators: %s: pattern title. */
								__( 'Insert %s', 'wpmozo-blocks-and-addons' ),
								pattern.title
							) }
						>
							{ isInserting
								? __( 'Inserting…', 'wpmozo-blocks-and-addons' )
								: __( 'Insert', 'wpmozo-blocks-and-addons' ) }
						</Button>
					) }
				</div>
			</div>
		</article>
	);
}

export default forwardRef( PatternCard );
