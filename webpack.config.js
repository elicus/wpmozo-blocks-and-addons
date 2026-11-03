/**
 * Extends the default @wordpress/scripts config with the shared editor script.
 *
 * Block entries are still discovered from block.json files, and `--blocks-manifest`
 * still generates build/blocks-manifest.php.
 */
const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: () => ( {
		...defaultConfig.entry(),
		'shared/index': path.resolve( __dirname, 'src/shared/index.js' ),
	} ),
};
