/**
 * Shared set-up for suites: plugin copies, a running site, a logged-in client, and helpers to
 * read the library's catalog and content routes.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const env = require( './env.cjs' );
const { pluginCopy, mutableCopy } = require( './copies.cjs' );
const { startSite } = require( './site.cjs' );
const { Client } = require( './client.cjs' );

/**
 * Start a site with Lite and (optionally) Pro.
 *
 * @param {Object}   options
 * @param {string}   options.label      Run label.
 * @param {Object}   options.cli        Parsed command-line options (lite, pro, wp, php).
 * @param {boolean}  [options.mutable]  Mount writable copies (tests that change plugin files).
 * @param {boolean}  [options.withPro]  Mount Pro (default true).
 * @param {string[]} [options.activate] Plugin files to activate (default: those mounted).
 * @return {Promise<Object>} { site, client, lite, pro }.
 */
async function standardSite( {
	label,
	cli,
	mutable = false,
	withPro = true,
	activate,
} ) {
	let lite = cli.lite === 'none' ? null : pluginCopy( 'lite', cli.lite );
	let pro =
		! withPro || cli.pro === 'none' ? null : pluginCopy( 'pro', cli.pro );
	if ( mutable ) {
		lite = lite && mutableCopy( lite, `${ label }-lite` );
		pro = pro && mutableCopy( pro, `${ label }-pro` );
	}
	const plugins = {};
	if ( lite ) {
		plugins[ 'wpmozo-blocks-and-addons' ] = lite;
	}
	if ( pro ) {
		plugins[ 'wpmozo-blocks-and-addons-pro' ] = pro;
	}
	const site = await startSite( {
		label,
		wp: cli.wp,
		php: cli.php,
		plugins,
		activate:
			activate ||
			[ lite && env.LITE_FILE, pro && env.PRO_FILE ].filter( Boolean ),
	} );
	const client = new Client( site.url );
	await client.login();
	return { site, client, lite, pro };
}

/**
 * Catalog as a user.
 *
 * @param {Object} client  Client.
 * @param {string} [as]    User keyword.
 * @param {Object} [extra] Extra driver parameters.
 * @return {Promise<Object>} { status, data, patterns: { id: item }, raw }.
 */
async function catalog( client, as = 'admin', extra = {} ) {
	const r = await client.rest( '/wpmozo/v1/library/catalog', as, extra );
	const data = r && typeof r.data === 'object' && r.data ? r.data : {};
	const patterns = {};
	for ( const item of data.patterns || [] ) {
		patterns[ item.id ] = item;
	}
	return { status: r.status, data, patterns, raw: r };
}

/**
 * Content route as a user.
 *
 * @param {Object} client Client.
 * @param {string} id     Pattern id.
 * @param {string} [as]   User keyword.
 * @return {Promise<Object>} { status, code, reasons, hasContent, raw }.
 */
async function content( client, id, as = 'admin' ) {
	const r = await client.rest( `/wpmozo/v1/library/patterns/${ id }`, as );
	const data = r && typeof r.data === 'object' && r.data ? r.data : {};
	return {
		status: r.status,
		code: data.code,
		reasons: ( data.data && data.data.reasons ) || [],
		hasContent: typeof data.content === 'string' && data.content.length > 0,
		raw: r,
	};
}

/**
 * The content-route status the catalog's availability promises.
 *
 * @param {Object} availability { state, reasons }.
 * @return {number} HTTP status.
 */
function expectedStatus( availability ) {
	if ( availability.state === 'available' ) {
		return 200;
	}
	if (
		availability.state === 'locked' ||
		availability.reasons.includes( 'role_unfiltered_html' )
	) {
		return 403;
	}
	if ( availability.reasons.includes( 'invalid_content' ) ) {
		return 422;
	}
	return 409;
}

/**
 * Patterns whose content uses a token of a given source, found by reading content.php files.
 *
 * @param {string} folder      Plugin folder.
 * @param {string} tokenSource Token source to look for ("lite", "pro").
 * @param {string} [type]      Token type (media, link, icon, text).
 * @return {Array} [ { slug, type, key } ].
 */
function patternsUsingTokens( folder, tokenSource, type ) {
	const base = path.join( folder, 'includes', 'library', 'patterns' );
	if ( ! fs.existsSync( base ) ) {
		return [];
	}
	const found = [];
	for ( const slug of fs.readdirSync( base ).sort() ) {
		const file = path.join( base, slug, 'content.php' );
		if ( ! fs.existsSync( file ) ) {
			continue;
		}
		const re = new RegExp(
			`\\{\\{wpmozo:(${
				type || '[a-z]+'
			}):${ tokenSource }\\/([a-z0-9-]+)\\}\\}`,
			'g'
		);
		const match = re.exec( fs.readFileSync( file, 'utf8' ) );
		if ( match ) {
			found.push( { slug, type: match[ 1 ], key: match[ 2 ] } );
		}
	}
	return found;
}

/**
 * Remove one key from a central map file in a writable copy; returns a function that restores it.
 *
 * @param {string} file Map file.
 * @param {string} key  Key to remove.
 * @return {Function} restore().
 */
function removeMapKey( file, key ) {
	const original = fs.readFileSync( file, 'utf8' );
	if ( ( original.match( /return array\(/g ) || [] ).length !== 1 ) {
		throw new Error( `Unexpected map format: ${ file }` );
	}
	fs.writeFileSync(
		file,
		original.replace( 'return array(', '$wpmozo_test_map = array(' ) +
			`\nunset( $wpmozo_test_map['${ key }'] );\nreturn $wpmozo_test_map;\n`
	);
	return () => fs.writeFileSync( file, original );
}

const pause = ( ms ) => new Promise( ( resolve ) => setTimeout( resolve, ms ) );

/**
 * Network checks for a finished run.
 * - Fail when anything in the Playground process tried to reach a non-loopback address.
 * - Fail when a library request (REST through the driver) made an outbound WordPress HTTP call.
 * - List the other WordPress HTTP calls the driver blocked (core update checks, add-on updaters).
 *
 * @param {Object} report   Report.
 * @param {Object} site     Site from startSite().
 * @param {string} [prefix] Check name prefix.
 */
function networkChecks( report, site, prefix = '' ) {
	const escaped = site.netBlocked();
	report.check(
		`${ prefix }nothing tried to leave the machine (Playground process stayed on loopback)`,
		! escaped.length,
		escaped
	);
	const blocked = site.httpBlocked();
	const library = blocked.filter(
		( line ) => /wpmozo_test=rest/.test( line ) && /library/.test( line )
	);
	report.check(
		`${ prefix }library requests made no outbound HTTP call`,
		! library.length,
		library
	);
	const hosts = [
		...new Set(
			blocked
				.map(
					( line ) =>
						( line.match( /https?:\/\/([^/ ]+)/ ) || [] )[ 1 ]
				)
				.filter( Boolean )
		),
	];
	if ( hosts.length ) {
		report.note(
			`${ prefix }other WordPress HTTP calls blocked by the test driver: ${ hosts.join(
				', '
			) }`
		);
	}
}

module.exports = {
	standardSite,
	catalog,
	content,
	expectedStatus,
	patternsUsingTokens,
	removeMapKey,
	pause,
	networkChecks,
};
