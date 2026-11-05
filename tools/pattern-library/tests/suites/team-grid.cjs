/**
 * Pro Team Grid on the minimum PHP (R3; Pro known issue PKI-03). Renders every layout with every
 * click trigger on the front end and compares the markup with a baseline Pro commit, so a
 * compatibility rewrite must give byte-identical output.
 *
 * Options: --baseline-pro=<spec> (default 85390bb, before R3), --baseline-php=<version>
 * (default 8.2: the baseline needs PHP 8), --floor=<version> (default 7.4).
 */
const crypto = require( 'crypto' );
const env = require( '../lib/env.cjs' );
const { pluginCopy } = require( '../lib/copies.cjs' );
const { startSite } = require( '../lib/site.cjs' );
const { Client } = require( '../lib/client.cjs' );

const LAYOUTS = [ 'layout1', 'layout2', 'layout3', 'layout4' ];
const TRIGGERS = [ 'openpopup', 'openlink', '' ];

async function render( cli, pro, php ) {
	const site = await startSite( {
		label: `team-grid-php${ php }`,
		wp: cli.wp,
		php,
		plugins: {
			'wpmozo-blocks-and-addons': pluginCopy( 'lite', cli.lite ),
			'wpmozo-blocks-and-addons-pro': pro,
		},
		activate: [ env.LITE_FILE, env.PRO_FILE ],
	} );
	try {
		const client = new Client( site.url );
		await client.login();
		await client.driver( { wpmozo_test: 'set', keep: 'team-grid' } );
		for ( const name of [ 'Ada Example', 'Ben Example' ] ) {
			await client.driver(
				{
					wpmozo_test: 'post',
					type: 'wpmozoae-team-member',
					title: name,
				},
				'<!-- wp:paragraph --><p>Member biography.</p><!-- /wp:paragraph -->'
			);
		}
		const pages = {};
		for ( const layout of LAYOUTS ) {
			for ( const trigger of TRIGGERS ) {
				const attrs = JSON.stringify( {
					layout,
					OnClickTrigger: trigger,
					ID: `tg-${ layout }-${ trigger || 'none' }`,
				} );
				const made = await client.driver(
					{
						wpmozo_test: 'post',
						title: `Team ${ layout } ${ trigger }`,
					},
					`<!-- wp:wpmozo/team-grid ${ attrs } /-->`
				);
				const page = await client.request( made.link );
				const main = ( page.text.match( /<main[\s\S]*?<\/main>/ ) || [
					'',
				] )[ 0 ]
					// Nonces and post ids differ between sites.
					.replace( /nonce[^"]*"[^"]*"/gi, 'nonce=""' )
					.replace( /\/\?p=\d+|page_id=\d+/g, '' );
				pages[ `${ layout }/${ trigger || 'none' }` ] = {
					status: page.status,
					fatal: /critical error|Fatal error|Parse error/.test(
						page.text
					),
					members: (
						main.match( /wpmozo_team_member_grid_wrapper/g ) || []
					).length,
					hash: crypto
						.createHash( 'sha256' )
						.update( main )
						.digest( 'hex' )
						.slice( 0, 16 ),
				};
			}
		}
		const probe = await client.driver( { wpmozo_test: 'probe' } );
		return {
			pages,
			log: probe.debug_log || [],
			fatals: site.fatals(),
			php: probe.php,
		};
	} finally {
		await site.stop();
	}
}

async function run( { cli, report } ) {
	const floor = cli.floor || '7.4';
	const baseline = await render(
		cli,
		pluginCopy( 'pro', cli[ 'baseline-pro' ] || '85390bb' ),
		cli[ 'baseline-php' ] || '8.2'
	);
	const candidate = pluginCopy( 'pro', cli.pro );
	for ( const php of [ floor, cli[ 'baseline-php' ] || '8.2' ] ) {
		const got = await render( cli, candidate, php );
		const broken = Object.entries( got.pages ).filter(
			( [ , p ] ) => p.status !== 200 || p.fatal || p.members < 2
		);
		report.check(
			`PHP ${ got.php }: every layout and click trigger renders both members, no fatal error`,
			! broken.length && ! got.fatals.length,
			{ broken, fatals: got.fatals }
		);
		const different = Object.keys( baseline.pages ).filter(
			( k ) => baseline.pages[ k ].hash !== got.pages[ k ].hash
		);
		report.check(
			`PHP ${ got.php }: markup identical to the baseline (${
				cli[ 'baseline-pro' ] || '85390bb'
			} on PHP ${ baseline.php }) for all ${
				Object.keys( baseline.pages ).length
			} cases`,
			! different.length,
			different
		);
		report.check(
			`PHP ${ got.php }: no PHP notices, warnings or errors`,
			! got.log.length,
			got.log.slice( -5 )
		);
	}
}

module.exports = {
	description:
		'Pro Team Grid renders on the minimum PHP with unchanged markup (R3)',
	run,
};
