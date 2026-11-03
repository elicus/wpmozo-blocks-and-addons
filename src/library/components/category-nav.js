/**
 * Category navigation: a list in the sidebar, a select on small screens.
 */
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

export default function CategoryNav( {
	categories,
	total,
	value,
	onChange,
	compact,
} ) {
	const used = categories.filter( ( category ) => category.count > 0 );

	if ( compact ) {
		return (
			<SelectControl
				__nextHasNoMarginBottom
				__next40pxDefaultSize
				className="wpmozo-library__compact-nav"
				label={ __( 'Category', 'wpmozo-blocks-and-addons' ) }
				value={ value }
				onChange={ onChange }
				options={ [
					{
						/* translators: %d: number of patterns. */
						label: `${ __(
							'All categories',
							'wpmozo-blocks-and-addons'
						) } (${ total })`,
						value: '',
					},
					...used.map( ( category ) => ( {
						label: `${ category.label } (${ category.count })`,
						value: category.id,
					} ) ),
				] }
			/>
		);
	}

	const item = ( id, label, count ) => (
		<li key={ id || 'all' }>
			<button
				type="button"
				className="wpmozo-library__nav-item"
				aria-current={ value === id ? 'true' : undefined }
				onClick={ () => onChange( id ) }
			>
				<span>{ label }</span>
				<span className="wpmozo-library__nav-count">{ count }</span>
			</button>
		</li>
	);

	return (
		<nav
			className="wpmozo-library__nav"
			aria-label={ __(
				'Pattern categories',
				'wpmozo-blocks-and-addons'
			) }
		>
			<ul>
				{ item( '', __( 'All', 'wpmozo-blocks-and-addons' ), total ) }
				{ used.map( ( category ) =>
					item( category.id, category.label, category.count )
				) }
			</ul>
		</nav>
	);
}
