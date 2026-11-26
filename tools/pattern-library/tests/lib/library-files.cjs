/**
 * The library's data files, as the suites read and change them (registry-and-contract.md):
 * catalog.json, patterns/<slug>/content.json (free) or content.json.php (premium: the JSON behind
 * GUARD), and data/<map>.json. Must match Mozo_Bna_Library_Registry and tools/pattern-library/lib.
 */
const crypto = require( 'crypto' );
const fs = require( 'fs' );
const path = require( 'path' );

const GUARD = '<?php exit; __halt_compiler();';

const lib = ( folder ) => path.join( folder, 'includes', 'library' );

/**
 * Content file of a pattern.
 *
 * @param {string}  folder  Plugin folder.
 * @param {string}  slug    Pattern slug.
 * @param {boolean} protect Premium source (content.json.php).
 * @return {string} Path.
 */
function contentPath( folder, slug, protect ) {
	return path.join(
		lib( folder ),
		'patterns',
		slug,
		protect ? 'content.json.php' : 'content.json'
	);
}

/**
 * The content file of a pattern, whichever form it has.
 *
 * @param {string} folder Plugin folder.
 * @param {string} slug   Pattern slug.
 * @return {?Object} { file, protect, wrapper } or null.
 */
function readContent( folder, slug ) {
	for ( const protect of [ true, false ] ) {
		const file = contentPath( folder, slug, protect );
		if ( fs.existsSync( file ) ) {
			let raw = fs.readFileSync( file, 'utf8' );
			if ( protect ) {
				raw = raw.slice( GUARD.length ).replace( /^\r?\n/, '' );
			}
			return { file, protect, wrapper: JSON.parse( raw ) };
		}
	}
	return null;
}

/**
 * The body of a content file.
 *
 * @param {Object}  wrapper { schema, id, revision, content }.
 * @param {boolean} protect Behind the guard line.
 * @return {string} File body.
 */
function contentBody( wrapper, protect ) {
	const json = JSON.stringify( wrapper, null, 4 ) + '\n';
	return protect ? `${ GUARD }\n${ json }` : json;
}

const sha256 = ( text ) =>
	crypto.createHash( 'sha256' ).update( text, 'utf8' ).digest( 'hex' );

const catalogPath = ( folder ) => path.join( lib( folder ), 'catalog.json' );

function readCatalog( folder ) {
	return JSON.parse( fs.readFileSync( catalogPath( folder ), 'utf8' ) );
}

function writeCatalog( folder, catalog ) {
	fs.writeFileSync(
		catalogPath( folder ),
		JSON.stringify( catalog, null, 4 ) + '\n'
	);
}

const mapPath = ( folder, map ) =>
	path.join( lib( folder ), 'data', `${ map }.json` );

/**
 * A minimal valid catalog entry for a one-paragraph test pattern.
 *
 * @param {string} slug    Slug.
 * @param {string} access  'free' or 'pro'.
 * @param {string} content Block markup.
 * @return {Object} Entry.
 */
function testEntry( slug, access, content ) {
	return {
		schema: 1,
		slug,
		revision: 1,
		title: `Test ${ slug }`,
		category: 'features',
		access,
		thumbnail: {
			file: `previews/${ slug }.1.webp`,
			width: 800,
			height: 600,
		},
		since: '1.0.0',
		blocks: [ 'core/paragraph' ],
		content_sha256: sha256( content ),
	};
}

module.exports = {
	GUARD,
	contentPath,
	readContent,
	contentBody,
	sha256,
	catalogPath,
	readCatalog,
	writeCatalog,
	mapPath,
	testEntry,
};
