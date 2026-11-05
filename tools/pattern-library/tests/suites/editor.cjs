/**
 * Import and editability of every available pattern, in the real editor (roadmap R1 acceptance,
 * R5). Boots a site, switches off the blocks no pattern uses (the WebAssembly server can't serve
 * every editor asset), then runs the repository's quality gate (`tools/pattern-library/gate.cjs`)
 * on every pattern the administrator can insert: insert through the library, valid blocks, save
 * and reload, front end at three widths, and the editability step (PL-D22).
 */
const path = require( 'path' );
const { execFile } = require( 'child_process' );
const env = require( '../lib/env.cjs' );
const { standardSite, catalog, networkChecks } = require( '../lib/setup.cjs' );

async function run( { cli, report } ) {
	const { site, client } = await standardSite( { label: 'editor', cli } );
	report.context.site = site.logs;
	try {
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			flush: '1',
		} );
		const all = await catalog( client );
		const keep = new Set();
		for ( const item of Object.values( all.patterns ) ) {
			for ( const name of item.blocks ) {
				if ( name.startsWith( 'wpmozo/' ) ) {
					keep.add( name.slice( 7 ) );
				}
			}
		}
		await client.driver( {
			wpmozo_test: 'set',
			keep: [ ...keep ].join( ',' ),
			flush: '1',
		} );
		const items = Object.values(
			( await catalog( client ) ).patterns
		).filter( ( p ) => p.availability.state === 'available' );
		report.check(
			'there are patterns to test',
			items.length > 0,
			Object.keys( all.patterns )
		);
		const log = path.join( site.logs, 'gate.json' );
		const result = await new Promise( ( resolve ) =>
			execFile(
				'node',
				[
					path.join(
						env.LITE_REPO,
						'tools',
						'pattern-library',
						'gate.cjs'
					),
					site.url,
					...items.map( ( p ) => p.id ),
					`--log=${ log }`,
				],
				{ maxBuffer: 64 * 1024 * 1024, timeout: 60 * 60 * 1000 },
				( error, stdout, stderr ) =>
					resolve( { code: error ? error.code : 0, stdout, stderr } )
			)
		);
		let gate = null;
		try {
			gate = require( log );
		} catch ( e ) {}
		report.check( 'the gate ran and wrote its log', !! gate, {
			exit: result.code,
			stderr: result.stderr.slice( -1500 ),
			stdout: result.stdout.split( '\n' ).slice( -6 ),
		} );
		for ( const pattern of ( gate && gate.patterns ) || [] ) {
			const failed = pattern.checks.filter( ( c ) => ! c.ok );
			report.check(
				`${ pattern.id }: inserted, valid after save and reload, front end and editability (${ pattern.checks.length } gate checks)`,
				! failed.length,
				failed
			);
		}
		const probe = await client.driver( { wpmozo_test: 'probe' } );
		report.check(
			'no PHP notices, warnings or errors',
			! ( probe.debug_log || [] ).length,
			( probe.debug_log || [] ).slice( -5 )
		);
		report.check(
			'no fatal errors',
			! site.fatals().length,
			site.fatals()
		);
		networkChecks( report, site );
	} finally {
		await site.stop();
	}
}

module.exports = {
	description:
		'Every available pattern through the quality gate, with editability',
	run,
};
