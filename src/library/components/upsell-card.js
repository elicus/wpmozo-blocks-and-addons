/**
 * The one Lite-to-Pro card (decision PL-D10). Shown after the free patterns, only
 * inside the library, and never again for a user who dismissed it.
 */
import { __ } from '@wordpress/i18n';
import { Button, ExternalLink } from '@wordpress/components';
import { closeSmall } from '@wordpress/icons';
import { useDispatch, useSelect } from '@wordpress/data';
import { store as preferencesStore } from '@wordpress/preferences';

const SCOPE = 'wpmozo/library';

export default function UpsellCard( { context, hasPremiumSource } ) {
	const dismissed = useSelect(
		( select ) =>
			select( preferencesStore ).get( SCOPE, 'upsellDismissed' ),
		[]
	);
	const { set } = useDispatch( preferencesStore );

	// A premium source already adds patterns, or the user said no.
	if ( hasPremiumSource || dismissed ) {
		return null;
	}

	let title = __( 'More designs in WPMozo Pro', 'wpmozo-blocks-and-addons' );
	let description = __(
		'WPMozo Pro adds premium patterns and blocks to this library.',
		'wpmozo-blocks-and-addons'
	);
	let action = null;

	if ( context.pro.active ) {
		title = __( 'Update WPMozo Pro', 'wpmozo-blocks-and-addons' );
		description = __(
			'Your version of WPMozo Pro doesn’t add patterns to this library yet. Update it to see them here.',
			'wpmozo-blocks-and-addons'
		);
	} else if ( context.pro.installed ) {
		title = __( 'Activate WPMozo Pro', 'wpmozo-blocks-and-addons' );
		description = __(
			'WPMozo Pro is installed but not active. Activate it to add its patterns here.',
			'wpmozo-blocks-and-addons'
		);
		action = (
			<Button variant="secondary" size="compact" href="plugins.php">
				{ __( 'Go to Plugins', 'wpmozo-blocks-and-addons' ) }
			</Button>
		);
	} else if ( context.links.pro_upgrade ) {
		action = (
			<ExternalLink href={ context.links.pro_upgrade }>
				{ __( 'Learn about WPMozo Pro', 'wpmozo-blocks-and-addons' ) }
			</ExternalLink>
		);
	}

	return (
		<aside className="wpmozo-library__upsell">
			<Button
				className="wpmozo-library__upsell-dismiss"
				icon={ closeSmall }
				size="small"
				label={ __( 'Dismiss', 'wpmozo-blocks-and-addons' ) }
				onClick={ () => set( SCOPE, 'upsellDismissed', true ) }
			/>
			<span className="wpmozo-library__badge is-pro">
				{ __( 'Pro', 'wpmozo-blocks-and-addons' ) }
			</span>
			<h3>{ title }</h3>
			<p>{ description }</p>
			{ action }
		</aside>
	);
}
