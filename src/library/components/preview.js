/**
 * Pattern preview inside the library window: large image, details, availability
 * and the main action. Back (or Escape) returns to the grid at the same card.
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { arrowLeft, chevronLeft, chevronRight } from '@wordpress/icons';
import { getBlockType } from '@wordpress/blocks';
import { useEffect, useRef } from '@wordpress/element';
import Thumbnail from './thumbnail';
import { reasonMessage } from '../messages';

export default function Preview( {
	pattern,
	categoryLabel,
	manage,
	licenseUrl,
	isInserting,
	onBack,
	onInsert,
	onPrevious,
	onNext,
} ) {
	const heading = useRef();
	useEffect( () => heading.current?.focus(), [ pattern.id ] );

	const { state, reasons } = pattern.availability;
	const blocks = pattern.blocks
		.map( ( name ) => getBlockType( name )?.title || name )
		.filter( ( title, index, all ) => all.indexOf( title ) === index );
	const plugins = Object.keys( pattern.requires?.plugins || {} );

	return (
		<div className="wpmozo-library__preview">
			<div className="wpmozo-library__preview-bar">
				<Button icon={ arrowLeft } onClick={ onBack }>
					{ __( 'Back to patterns', 'wpmozo-blocks-and-addons' ) }
				</Button>
				<div className="wpmozo-library__preview-nav">
					<Button
						icon={ chevronLeft }
						label={ __(
							'Previous pattern',
							'wpmozo-blocks-and-addons'
						) }
						onClick={ onPrevious }
						disabled={ ! onPrevious }
						accessibleWhenDisabled
					/>
					<Button
						icon={ chevronRight }
						label={ __(
							'Next pattern',
							'wpmozo-blocks-and-addons'
						) }
						onClick={ onNext }
						disabled={ ! onNext }
						accessibleWhenDisabled
					/>
				</div>
			</div>
			<div className="wpmozo-library__preview-body">
				<div className="wpmozo-library__preview-image">
					<Thumbnail
						image={ pattern.preview || pattern.thumbnail }
						eager
					/>
				</div>
				<div className="wpmozo-library__preview-info">
					<div className="wpmozo-library__card-heading">
						<h2 ref={ heading } tabIndex={ -1 }>
							{ pattern.title }
						</h2>
						{ pattern.access === 'pro' && (
							<span className="wpmozo-library__badge is-pro">
								{ __( 'Pro', 'wpmozo-blocks-and-addons' ) }
							</span>
						) }
					</div>
					{ pattern.description && <p>{ pattern.description }</p> }
					<dl className="wpmozo-library__details">
						<dt>
							{ __( 'Category', 'wpmozo-blocks-and-addons' ) }
						</dt>
						<dd>{ categoryLabel }</dd>
						{ blocks.length > 0 && (
							<>
								<dt>
									{ __(
										'Blocks used',
										'wpmozo-blocks-and-addons'
									) }
								</dt>
								<dd>{ blocks.join( ', ' ) }</dd>
							</>
						) }
						{ plugins.length > 0 && (
							<>
								<dt>
									{ __(
										'Requires',
										'wpmozo-blocks-and-addons'
									) }
								</dt>
								<dd>
									{ plugins
										.map( ( plugin ) =>
											plugin === 'woocommerce'
												? 'WooCommerce'
												: plugin
										)
										.join( ', ' ) }
								</dd>
							</>
						) }
					</dl>
					{ state !== 'available' && (
						<div
							className={ `wpmozo-library__availability is-${ state }` }
						>
							{ reasons.map( ( reason ) => (
								<p key={ reason }>
									{ reasonMessage( reason, manage ) }
								</p>
							) ) }
						</div>
					) }
					<div className="wpmozo-library__preview-actions">
						{ state === 'available' && (
							<Button
								variant="primary"
								__next40pxDefaultSize
								onClick={ onInsert }
								isBusy={ isInserting }
								aria-disabled={ isInserting }
							>
								{ isInserting
									? __(
											'Inserting…',
											'wpmozo-blocks-and-addons'
									  )
									: __(
											'Insert pattern',
											'wpmozo-blocks-and-addons'
									  ) }
							</Button>
						) }
						{ state === 'locked' && manage && licenseUrl && (
							<Button
								variant="primary"
								__next40pxDefaultSize
								href={ licenseUrl }
							>
								{ __(
									'Manage licence',
									'wpmozo-blocks-and-addons'
								) }
							</Button>
						) }
					</div>
					<p className="wpmozo-library__note">
						{ sprintf(
							/* translators: %s: pattern title. */
							__(
								'The preview shows “%s” in a default theme. After inserting, fonts follow your theme, and every colour, text and image can be edited.',
								'wpmozo-blocks-and-addons'
							),
							pattern.title
						) }
					</p>
				</div>
			</div>
		</div>
	);
}
