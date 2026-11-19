/**
 * Premium entitlement rules (PL-D34): only `entitled` allows inserting a premium pattern; every
 * other answer locks every pattern of that source, whatever its `published` date or a supplied
 * `cutoff`; `published` is optional; previews stay available in every state; free patterns and
 * content already on pages are never affected; no network.
 *
 * Uses the test driver's test-only premium source `testpro` (two patterns: one with a
 * `published` date, one without), whose entitlement answer each case sets. Runs with or without
 * Pro (`--pro=none`).
 */
const {
	standardSite,
	catalog,
	content,
	networkChecks,
} = require( '../lib/setup.cjs' );

const DATED = 'testpro/zz-dated';
const UNDATED = 'testpro/zz-undated';
const ROLES = [ 'admin', 'editor', 'author' ];

// Each case: the callback's answer, and the state Lite must report (null = available).
const CASES = [
	[ 'entitled', { state: 'entitled', manage: true }, null ],
	[
		'entitled with an old cutoff (ignored)',
		{ state: 'entitled', cutoff: '2000-01-01' },
		null,
	],
	[
		"expired, cutoff after the pattern's published date (old grandfathering)",
		{ state: 'license_expired', cutoff: '2099-12-31', manage: true },
		'license_expired',
	],
	[ 'expired, no cutoff', { state: 'license_expired' }, 'license_expired' ],
	[ 'revoked', { state: 'license_revoked' }, 'license_revoked' ],
	[ 'not activated', { state: 'license_inactive' }, 'license_inactive' ],
	[ 'unknown state', { state: 'bogus' }, 'entitlement_unavailable' ],
	[ 'callback throws', { mode: 'throw' }, 'entitlement_unavailable' ],
	[
		'callback returns a non-array',
		{ mode: 'garbage' },
		'entitlement_unavailable',
	],
];

async function setAnswer( client, answer ) {
	await client.driver( {
		wpmozo_test: 'set',
		library: 'on',
		entitlement: JSON.stringify( answer ),
	} );
}

async function run( { cli, report } ) {
	const { site, client } = await standardSite( {
		label: 'entitlement',
		cli,
	} );
	report.context.site = site.logs;
	try {
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			flush: '1',
		} );

		// Baseline while entitled: both test patterns listed and insertable; free patterns recorded.
		await setAnswer( client, { state: 'entitled', manage: true } );
		const base = await catalog( client );
		report.check(
			'catalog 200 with the test premium source',
			base.status === 200 &&
				( base.data.sources || [] ).some( ( s ) => s.id === 'testpro' ),
			base.status
		);
		report.check(
			'a premium pattern without a `published` date is listed (published is optional)',
			Boolean( base.patterns[ UNDATED ] ),
			{
				listed: Object.keys( base.patterns ).filter( ( id ) =>
					id.startsWith( 'testpro/' )
				),
				issues: ( base.data.issues || [] ).filter( ( i ) =>
					String( i.item ).startsWith( 'testpro/' )
				),
			}
		);
		const free = Object.keys( base.patterns ).filter( ( id ) =>
			id.startsWith( 'lite/' )
		);
		const freeBase = {};
		for ( const as of ROLES ) {
			const c = as === 'admin' ? base : await catalog( client, as );
			freeBase[ as ] = Object.fromEntries(
				free.map( ( id ) => [
					id,
					JSON.stringify( c.patterns[ id ].availability ),
				] )
			);
		}

		// Existing content: a page made of a premium pattern and a free pattern, inserted while entitled.
		const premium = await content( client, DATED );
		const freeAvailable = free.find(
			( id ) => base.patterns[ id ].availability.state === 'available'
		);
		const freeContent = freeAvailable
			? await content( client, freeAvailable )
			: null;
		const markup =
			( premium.raw.data && premium.raw.data.content ) +
			'\n\n' +
			( freeContent && freeContent.raw.data
				? freeContent.raw.data.content
				: '' );
		const page = await client.driver(
			{ wpmozo_test: 'post', title: 'WPMozo PL test - entitlement' },
			markup
		);
		const saved = (
			await client.driver( { wpmozo_test: 'content', id: page.id } )
		).content;
		const front = await client.request( page.link );
		report.check(
			'existing content: a page with a premium and a free pattern saved and shown while entitled',
			premium.status === 200 &&
				page.id > 0 &&
				saved === markup &&
				front.status === 200 &&
				front.text.includes( 'WPMozo test premium pattern zz-dated' ),
			{ premium: premium.status, page: page.id, front: front.status }
		);

		for ( const [ name, answer, expected ] of CASES ) {
			await setAnswer( client, answer );
			const cat = await catalog( client );
			const source = ( cat.data.sources || [] ).find(
				( s ) => s.id === 'testpro'
			);
			const items = [ DATED, UNDATED ].map(
				( id ) => cat.patterns[ id ]
			);

			if ( expected === null ) {
				report.check(
					`${ name }: both test patterns available and delivered to every role`,
					items.every(
						( item ) =>
							item && item.availability.state === 'available'
					) &&
						(
							await Promise.all(
								ROLES.map( ( as ) =>
									content( client, DATED, as )
								)
							)
						).every( ( r ) => r.status === 200 && r.hasContent ),
					items.map( ( item ) => item && item.availability )
				);
			} else {
				const refusals = [];
				for ( const id of [ DATED, UNDATED ] ) {
					for ( const as of ROLES ) {
						const r = await content( client, id, as );
						if (
							r.status !== 403 ||
							r.code !== 'wpmozo_library_locked' ||
							! r.reasons.includes( expected ) ||
							r.hasContent
						) {
							refusals.push( {
								id,
								as,
								status: r.status,
								code: r.code,
								reasons: r.reasons,
							} );
						}
					}
				}
				report.check(
					`${ name }: both test patterns locked (${ expected }), with and without a published date`,
					items.every(
						( item ) =>
							item &&
							item.availability.state === 'locked' &&
							item.availability.reasons.includes( expected )
					) &&
						source &&
						source.state === expected,
					{
						source: source && source.state,
						items: items.map(
							( item ) => item && item.availability
						),
					}
				);
				report.check(
					`${ name }: content route refuses both patterns for every role, with no content`,
					! refusals.length,
					refusals
				);
			}

			// Preview stays available in every state.
			const images = [];
			for ( const item of items ) {
				for ( const kind of [ 'thumbnail', 'preview' ] ) {
					const url = item && item[ kind ] && item[ kind ].url;
					const r = url ? await client.request( url ) : null;
					images.push( {
						id: item && item.id,
						kind,
						ok: Boolean( url ) && r.status === 200,
					} );
				}
			}
			report.check(
				`${ name }: thumbnails and previews listed and served`,
				images.every( ( i ) => i.ok ),
				images
			);

			// The catalog carries no content and no cutoff.
			const text = JSON.stringify( cat.data );
			report.check(
				`${ name }: catalog has no pattern markup and no cutoff`,
				! text.includes( 'WPMozo test premium pattern' ) &&
					! /cutoff/i.test( text ),
				null
			);

			// Free patterns are never affected.
			const changed = [];
			for ( const as of ROLES ) {
				const c = as === 'admin' ? cat : await catalog( client, as );
				for ( const id of free ) {
					const now = c.patterns[ id ]
						? JSON.stringify( c.patterns[ id ].availability )
						: 'missing';
					if ( now !== freeBase[ as ][ id ] ) {
						changed.push( { as, id, now } );
					}
				}
			}
			report.check(
				`${ name }: free patterns unchanged for every role`,
				free.length > 0 && ! changed.length,
				changed
			);

			// Existing content keeps working, stays editable and can be published again.
			const raw = (
				await client.driver( { wpmozo_test: 'content', id: page.id } )
			).content;
			const shown = await client.request( page.link );
			const edit = await client.rest(
				`/wp/v2/pages/${ page.id }?context=edit`,
				'editor'
			);
			const again = await client.driver(
				{
					wpmozo_test: 'post',
					title: `WPMozo PL test - entitlement ${ name }`,
				},
				raw
			);
			const againShown = again.link
				? await client.request( again.link )
				: { status: 0, text: '' };
			report.check(
				`${ name }: existing page unchanged, shown, editable by an editor, and publishes again`,
				raw === markup &&
					shown.status === 200 &&
					shown.text.includes(
						'WPMozo test premium pattern zz-dated'
					) &&
					edit.status === 200 &&
					edit.data &&
					edit.data.content &&
					edit.data.content.raw === markup &&
					again.id > 0 &&
					againShown.status === 200 &&
					againShown.text.includes(
						'WPMozo test premium pattern zz-dated'
					),
				{
					same: raw === markup,
					shown: shown.status,
					edit: edit.status,
					again: again.id,
					againShown: againShown.status,
				}
			);
		}

		const fatals = site.fatals();
		const probe = await client.driver( { wpmozo_test: 'probe' } );
		const notices = ( probe.debug_log || [] ).filter( ( line ) =>
			/PHP (Warning|Notice|Deprecated|Fatal)/.test( line )
		);
		report.check(
			'no PHP fatal errors, warnings or notices',
			! fatals.length && ! notices.length,
			[ ...fatals, ...notices ].slice( 0, 10 )
		);
		networkChecks( report, site );
	} finally {
		await client.driver( { wpmozo_test: 'set', entitlement: '' } );
		await site.stop();
	}
}

module.exports = {
	description:
		'Premium entitlement: only entitled inserts, no release-date exceptions, previews, free patterns and existing content unaffected',
	run,
};
