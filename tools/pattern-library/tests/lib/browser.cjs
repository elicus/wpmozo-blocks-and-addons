/**
 * Browser checks in the block editor (Playwright with the installed Chrome; only the test site
 * resolves). Collects page errors and console errors/warnings, minus offline noise.
 */
const path = require( 'path' );
const env = require( './env.cjs' );

// Offline noise that isn't about the plugins: core's block directory, aborted requests, the
// settings page logo, the harmless 404 of the local avatar replacement.
const NOISE =
	/block-directory|ERR_NAME_NOT_RESOLVED|ERR_ABORTED|net::ERR_FAILED|favicon|wpmozoblocks\.com|status of 404/;

async function launch() {
	const { chromium } = require(
		path.join( env.LITE_REPO, 'node_modules', 'playwright' )
	);
	return chromium.launch( {
		channel: 'chrome',
		headless: true,
		args: [ '--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1' ],
	} );
}

/**
 * A logged-in page that records errors.
 *
 * @param {Object} browser Playwright browser.
 * @param {string} base    Site URL.
 * @return {Promise<Object>} { page, errors, console }.
 */
async function newPage( browser, base ) {
	const page = await (
		await browser.newContext( { viewport: { width: 1440, height: 1000 } } )
	).newPage();
	const out = { page, errors: [], console: [] };
	page.on( 'pageerror', ( e ) =>
		out.errors.push( e.message.slice( 0, 300 ) )
	);
	page.on( 'console', ( m ) => {
		if (
			[ 'error', 'warning' ].includes( m.type() ) &&
			! NOISE.test( m.text() )
		) {
			out.console.push( `${ m.type() }: ${ m.text().slice( 0, 300 ) }` );
		}
	} );
	await page.goto( base + '/' );
	return out;
}

async function openEditor( page, base, url ) {
	await page.goto( base + url, { timeout: 240000 } );
	await page.waitForFunction(
		() =>
			window.wp &&
			wp.data &&
			wp.blocks &&
			wp.data.select( 'core/editor' ) &&
			wp.blocks.getBlockTypes().length > 0,
		null,
		{ timeout: 240000 }
	);
	await page.evaluate( () =>
		wp.data
			.dispatch( 'core/preferences' )
			.set( 'core/edit-post', 'welcomeGuide', false )
	);
	await page.waitForTimeout( 2500 );
	if ( await page.locator( '.components-modal__screen-overlay' ).count() ) {
		await page.keyboard.press( 'Escape' );
		await page.waitForTimeout( 500 );
	}
}

/**
 * Every block in the editor: count, invalid names, missing (unsupported) count, names.
 *
 * @param {Object} page Playwright page.
 * @return {Promise<Object>} State.
 */
const blocksState = ( page ) =>
	page.evaluate( () => {
		const list = [];
		const walk = ( blocks ) =>
			blocks.forEach( ( b ) => {
				list.push( { name: b.name, valid: b.isValid !== false } );
				walk( b.innerBlocks );
			} );
		walk( wp.data.select( 'core/block-editor' ).getBlocks() );
		return {
			count: list.length,
			invalid: list.filter( ( b ) => ! b.valid ).map( ( b ) => b.name ),
			missing: list.filter( ( b ) => b.name === 'core/missing' ).length,
			names: [ ...new Set( list.map( ( b ) => b.name ) ) ],
		};
	} );

/**
 * Block warnings shown in the canvas ("This block has encountered an error", invalid content…).
 *
 * @param {Object} page Playwright page.
 * @return {Promise<string[]>} Warning texts.
 */
async function blockWarnings( page ) {
	const canvas = ( await page
		.locator( 'iframe[name="editor-canvas"]' )
		.count() )
		? page.frameLocator( 'iframe[name="editor-canvas"]' )
		: page;
	return (
		await canvas.locator( '.block-editor-warning' ).allInnerTexts()
	).map( ( t ) => t.replace( /\s+/g, ' ' ).slice( 0, 160 ) );
}

/**
 * Editor notices (core/notices), for example a compatibility notice.
 *
 * @param {Object} page Playwright page.
 * @return {Promise<string[]>} Notice texts.
 */
const editorNotices = ( page ) =>
	page.evaluate( () =>
		wp.data
			.select( 'core/notices' )
			.getNotices()
			.map( ( n ) => n.content )
	);

async function save( page, title ) {
	const saved = await page.evaluate( async ( t ) => {
		wp.data
			.dispatch( 'core/editor' )
			.editPost( { title: t, status: 'publish' } );
		await wp.data.dispatch( 'core/editor' ).savePost();
		return {
			id: wp.data.select( 'core/editor' ).getCurrentPostId(),
			link: wp.data.select( 'core/editor' ).getPermalink(),
		};
	}, title );
	await page.waitForFunction(
		() => ! wp.data.select( 'core/editor' ).isSavingPost(),
		null,
		{ timeout: 120000 }
	);
	return saved;
}

module.exports = {
	launch,
	newPage,
	openEditor,
	blocksState,
	blockWarnings,
	editorNotices,
	save,
};
