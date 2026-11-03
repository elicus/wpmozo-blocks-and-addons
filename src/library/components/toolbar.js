/**
 * Search, source filter, sort and the "available only" switch.
 */
import { __, _n, sprintf } from '@wordpress/i18n';
import {
	Button,
	CheckboxControl,
	SearchControl,
	SelectControl,
} from '@wordpress/components';

export default function Toolbar( {
	query,
	onQuery,
	source,
	onSource,
	showSourceFilter,
	sort,
	onSort,
	availableOnly,
	onAvailableOnly,
	count,
	searchRef,
} ) {
	const sources = [
		[ 'all', __( 'All', 'wpmozo-blocks-and-addons' ) ],
		[ 'free', __( 'Free', 'wpmozo-blocks-and-addons' ) ],
		[ 'pro', __( 'Pro', 'wpmozo-blocks-and-addons' ) ],
	];

	return (
		<div className="wpmozo-library__toolbar">
			<div className="wpmozo-library__search">
				<SearchControl
					__nextHasNoMarginBottom
					ref={ searchRef }
					label={ __(
						'Search patterns',
						'wpmozo-blocks-and-addons'
					) }
					placeholder={ __(
						'Search patterns',
						'wpmozo-blocks-and-addons'
					) }
					value={ query }
					onChange={ onQuery }
				/>
			</div>
			{ showSourceFilter && (
				<div
					className="wpmozo-library__segmented"
					role="group"
					aria-label={ __( 'Show', 'wpmozo-blocks-and-addons' ) }
				>
					{ sources.map( ( [ id, label ] ) => (
						<Button
							key={ id }
							size="compact"
							variant={ source === id ? 'primary' : 'tertiary' }
							aria-pressed={ source === id }
							onClick={ () => onSource( id ) }
						>
							{ label }
						</Button>
					) ) }
				</div>
			) }
			<div className="wpmozo-library__toolbar-end">
				<p className="wpmozo-library__count" aria-hidden="true">
					{ sprintf(
						/* translators: %d: number of patterns. */
						_n(
							'%d pattern',
							'%d patterns',
							count,
							'wpmozo-blocks-and-addons'
						),
						count
					) }
				</p>
				<CheckboxControl
					__nextHasNoMarginBottom
					label={ __( 'Available only', 'wpmozo-blocks-and-addons' ) }
					checked={ availableOnly }
					onChange={ onAvailableOnly }
				/>
				<SelectControl
					__nextHasNoMarginBottom
					__next40pxDefaultSize
					label={ __( 'Sort by', 'wpmozo-blocks-and-addons' ) }
					hideLabelFromVision
					value={ sort }
					onChange={ onSort }
					options={ [
						{
							label: __(
								'Recommended',
								'wpmozo-blocks-and-addons'
							),
							value: 'recommended',
						},
						{
							label: __( 'Newest', 'wpmozo-blocks-and-addons' ),
							value: 'newest',
						},
						{
							label: __( 'A–Z', 'wpmozo-blocks-and-addons' ),
							value: 'title',
						},
					] }
				/>
			</div>
		</div>
	);
}
