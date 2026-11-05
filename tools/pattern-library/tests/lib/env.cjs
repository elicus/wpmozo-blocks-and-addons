/**
 * Paths and settings for the Pattern Library test suites (see ../README.md).
 *
 * Everything outside the repositories comes from environment variables, so the suites run on
 * any machine that has the prerequisites.
 */
const os = require( 'os' );
const path = require( 'path' );

const TESTS = path.resolve( __dirname, '..' );
const LITE_REPO = path.resolve( TESTS, '../../..' );

module.exports = {
	TESTS,
	LITE_REPO,
	// The Pro repository; by default the sibling folder of the Lite checkout.
	PRO_REPO:
		process.env.WPMOZO_PRO_REPO ||
		path.join( path.dirname( LITE_REPO ), 'wpmozo-blocks-and-addons-pro' ),
	// The `wp-playground-cli` executable (@wp-playground/cli, tested with 3.1.58).
	PLAYGROUND_CLI: process.env.WPMOZO_PLAYGROUND_CLI || '',
	// Folder holding WordPress release zips named <version>.zip.
	WP_ZIPS:
		process.env.WPMOZO_WP_ZIPS ||
		path.join( os.homedir(), '.wordpress-playground' ),
	// Plugin copies, Playground's HOME and TMPDIR, and run logs.
	CACHE:
		process.env.WPMOZO_TEST_CACHE ||
		path.join( os.homedir(), '.cache', 'wpmozo-pattern-library-tests' ),
	LITE_FILE: 'wpmozo-blocks-and-addons/wpmozo-blocks-and-addons.php',
	PRO_FILE: 'wpmozo-blocks-and-addons-pro/wpmozo-blocks-and-addons-pro.php',
};
