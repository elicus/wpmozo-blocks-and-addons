/**
 * User-facing text for availability reasons and import problems.
 */
import { __, sprintf } from '@wordpress/i18n';
import { getBlockType } from '@wordpress/blocks';

const blockTitle = ( name ) => getBlockType( name )?.title || name;

/**
 * Split "code:detail" (the detail may itself contain colons).
 *
 * @param {string} value Reason or problem string.
 * @return {Array} [ code, detail ].
 */
const splitCode = ( value ) => {
	const index = value.indexOf( ':' );
	return index < 0
		? [ value, '' ]
		: [ value.slice( 0, index ), value.slice( index + 1 ) ];
};

/**
 * Message for one availability reason code.
 *
 * @param {string}  reason Reason code (rest-api.md).
 * @param {boolean} manage Whether the user can manage the licence.
 * @return {string} Message.
 */
export function reasonMessage( reason, manage = false ) {
	const parts = splitCode( reason );
	switch ( parts[ 0 ] ) {
		case 'license_inactive':
			return manage
				? __(
						'Activate your WPMozo Pro licence on this site to use this pattern.',
						'wpmozo-blocks-and-addons'
				  )
				: __(
						'This pattern needs WPMozo Pro with a licence activated on this site. Ask your administrator.',
						'wpmozo-blocks-and-addons'
				  );
		case 'license_expired':
			return __(
				'Your WPMozo Pro licence has expired. Renew it to use patterns released after it expired.',
				'wpmozo-blocks-and-addons'
			);
		case 'license_revoked':
			return __(
				'The WPMozo Pro licence for this site is no longer active.',
				'wpmozo-blocks-and-addons'
			);
		case 'entitlement_unavailable':
			return __(
				'Pro patterns can’t be checked right now.',
				'wpmozo-blocks-and-addons'
			);
		case 'block_missing':
			return sprintf(
				/* translators: %s: block name. */
				__(
					'Needs the “%s” block, which isn’t installed.',
					'wpmozo-blocks-and-addons'
				),
				blockTitle( parts[ 1 ] )
			);
		case 'block_disabled':
			return sprintf(
				/* translators: %s: block name. */
				__(
					'Uses the “%s” block, which is turned off in the WPMozo settings.',
					'wpmozo-blocks-and-addons'
				),
				blockTitle( parts[ 1 ] )
			);
		case 'plugin_missing':
			return parts[ 1 ] === 'woocommerce'
				? __( 'Needs WooCommerce.', 'wpmozo-blocks-and-addons' )
				: __(
						'Needs a plugin that isn’t active.',
						'wpmozo-blocks-and-addons'
				  );
		case 'lite_outdated':
			return __(
				'Needs a newer version of WPMozo Blocks.',
				'wpmozo-blocks-and-addons'
			);
		case 'wp_outdated':
			return __(
				'Needs a newer version of WordPress.',
				'wpmozo-blocks-and-addons'
			);
		case 'role_unfiltered_html':
			return __(
				'Your user role can’t save this pattern’s styling, so it would break when saved. An administrator or editor can add it.',
				'wpmozo-blocks-and-addons'
			);
		case 'invalid_content':
			return __(
				'This pattern can’t be used right now.',
				'wpmozo-blocks-and-addons'
			);
	}
	return __( 'This pattern isn’t available.', 'wpmozo-blocks-and-addons' );
}

/**
 * Message for a failed insert.
 *
 * @param {Error} error ImportError, REST error or other error.
 * @return {string} Message.
 */
export function insertErrorMessage( error ) {
	if ( error?.problems ) {
		const parts = splitCode( error.problems[ 0 ] || '' );
		if ( parts[ 0 ] === 'missing' || parts[ 0 ] === 'unsupported' ) {
			return sprintf(
				/* translators: %s: block name. */
				__(
					'Nothing was inserted: the “%s” block isn’t available in this editor.',
					'wpmozo-blocks-and-addons'
				),
				blockTitle( parts[ 1 ] )
			);
		}
		if ( parts[ 0 ] === 'not_allowed' ) {
			return __(
				'Nothing was inserted: this pattern can’t be placed here. Select another spot and try again.',
				'wpmozo-blocks-and-addons'
			);
		}
		if ( parts[ 0 ] === 'unknown_attribute' ) {
			return __(
				'Nothing was inserted: this pattern needs a newer version of a block plugin.',
				'wpmozo-blocks-and-addons'
			);
		}
		return __(
			'Nothing was inserted: the pattern didn’t pass the editor’s checks.',
			'wpmozo-blocks-and-addons'
		);
	}
	if ( error?.data?.reasons?.length ) {
		return reasonMessage( error.data.reasons[ 0 ] );
	}
	return (
		error?.message ||
		__(
			'Nothing was inserted: the pattern couldn’t be loaded.',
			'wpmozo-blocks-and-addons'
		)
	);
}
