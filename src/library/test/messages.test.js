/**
 * Unit tests for the licence messages (PL-D34: an expired licence locks every new premium
 * insertion; content already on pages keeps working).
 */
import { reasonMessage } from '../messages';

jest.mock(
	'@wordpress/i18n',
	() => ( {
		__: ( text ) => text,
		sprintf: ( format, ...values ) =>
			values.reduce(
				( out, value ) => out.replace( '%s', value ),
				format
			),
	} ),
	{ virtual: true }
);
jest.mock( '@wordpress/blocks', () => ( { getBlockType: () => undefined } ), {
	virtual: true,
} );

describe( 'reasonMessage: license_expired', () => {
	const message = reasonMessage( 'license_expired' );

	it( 'asks for a renewal to insert Pro patterns', () => {
		expect( message ).toMatch( /expired/ );
		expect( message ).toMatch( /Renew it to insert Pro patterns/ );
	} );

	it( 'says patterns already on pages keep working', () => {
		expect( message ).toMatch( /already on your pages keep working/ );
	} );

	it( 'never promises access by release date', () => {
		expect( message ).not.toMatch( /released/i );
	} );

	it( 'is the same for licence managers and other users', () => {
		expect( reasonMessage( 'license_expired', true ) ).toBe( message );
	} );
} );

describe( 'reasonMessage: other licence states', () => {
	it( 'keeps the inactive, revoked and unavailable messages', () => {
		expect( reasonMessage( 'license_inactive', true ) ).toMatch(
			/Activate your WPMozo Pro licence/
		);
		expect( reasonMessage( 'license_revoked' ) ).toMatch(
			/no longer active/
		);
		expect( reasonMessage( 'entitlement_unavailable' ) ).toMatch(
			/can’t be checked right now/
		);
	} );
} );
