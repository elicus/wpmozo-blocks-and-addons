/**
 * Editor entry points (PL-D31, PL-D32). The header icon opens the library window directly, with
 * no sidebar step:
 * - with the editor's sidebar open and closed, the window opens, the launcher sidebar is never
 *   painted, and the sidebar is left as it was (the editor's Settings button still opens the
 *   settings, not the library);
 * - closing with Escape and with the Close button, focus back on the icon, reopening, exactly one
 *   window, inserting a pattern from it;
 * - the Options menu has exactly one Pattern Library item, the icon's "Pattern Library" (no
 *   "Open Pattern Library" item: PL-D32); it opens the same window directly, closes the menu and
 *   keeps working with the icon unpinned;
 * - the placeholder block opens the same window; the placeholder is replaced by the inserted
 *   pattern;
 * - a narrow editor (600 px);
 * - every block valid after save and reload, no page errors, no PHP log entries, no network.
 */
const { standardSite, catalog, networkChecks } = require( '../lib/setup.cjs' );
const {
	launch,
	newPage,
	openEditor,
	blocksState,
	save,
} = require( '../lib/browser.cjs' );

const PANEL_ID = 'wpmozo-pattern-library:wpmozo-pattern-library';
const ICON = `.interface-pinned-items button[aria-controls="${ PANEL_ID }"]`;
const AREA = 'wpmozo-pattern-library/wpmozo-pattern-library';
// The open Options menu (not the admin bar's hidden menus, which also have role="menu").
const MENU = '.components-dropdown-menu__menu[role="menu"]';
const MENU_ITEM = `${ MENU } [aria-controls="${ PANEL_ID }"]`;
const OPTIONS = '.editor-header button[aria-label="Options"]';
const WINDOW = '.wpmozo-library';
const CANVAS = 'iframe[name="editor-canvas"]';

// Sidebar and window state.
const state = ( page ) =>
	page.evaluate( () => ( {
		area: wp.data
			.select( 'core/interface' )
			.getActiveComplementaryArea( 'core' ),
		open: wp.data.select( 'wpmozo/library' ).isOpen(),
		windows: document.querySelectorAll( '.wpmozo-library' ).length,
		focusInSearch: !! document.querySelector(
			'.wpmozo-library input[type="search"]:focus'
		),
	} ) );

/**
 * Records, until `stopRecording`, at every animation frame (what the browser paints): the widest
 * the launcher sidebar or its wrapper was, and the narrowest and widest the editor's content area
 * was (a sidebar flashing in or out changes it). Also whether the launcher sidebar entered the
 * document at all and whether the old launcher text showed.
 *
 * @param {Object} page Playwright page.
 */
const startRecording = ( page ) =>
	page.evaluate( ( id ) => {
		const rec = {
			attached: false,
			paintedWidth: 0,
			contentMin: null,
			contentMax: null,
			frames: 0,
			launcherText: false,
		};
		const look = ( atFrame ) => {
			const panel = document.getElementById( id );
			if ( panel ) {
				rec.attached = true;
				if ( atFrame ) {
					rec.paintedWidth = Math.max(
						rec.paintedWidth,
						Math.round( panel.getBoundingClientRect().width ),
						Math.round(
							panel.parentElement.getBoundingClientRect().width
						)
					);
				}
			}
			const content = document.querySelector(
				'.interface-interface-skeleton__content'
			);
			if ( atFrame && content ) {
				const width = Math.round(
					content.getBoundingClientRect().width
				);
				rec.contentMin =
					rec.contentMin === null
						? width
						: Math.min( rec.contentMin, width );
				rec.contentMax = Math.max( rec.contentMax || 0, width );
			}
			if ( document.querySelector( '.wpmozo-library-launcher' ) ) {
				rec.launcherText = true;
			}
		};
		const observer = new window.MutationObserver( () => look( false ) );
		observer.observe( document.body, { childList: true, subtree: true } );
		let running = true;
		const tick = () => {
			if ( ! running ) {
				return;
			}
			rec.frames++;
			look( true );
			window.requestAnimationFrame( tick );
		};
		window.requestAnimationFrame( tick );
		window.wpmozoLauncherRecording = {
			rec,
			stop: () => {
				running = false;
				observer.disconnect();
				return rec;
			},
		};
	}, PANEL_ID );

const stopRecording = ( page ) =>
	page.evaluate( () => window.wpmozoLauncherRecording.stop() );

// Nothing of the launcher sidebar painted, and the editor's layout didn't move.
const noFlash = ( rec ) =>
	! rec.paintedWidth &&
	! rec.launcherText &&
	rec.frames > 10 &&
	rec.contentMax - rec.contentMin <= 1;

// Pins or unpins the header icon (the user's `core` → `pinnedItems` preference).
const setPinned = ( page, pinned ) =>
	page.evaluate(
		( [ area, pin ] ) =>
			wp.data
				.dispatch( 'core/interface' )
				[ pin ? 'pinItem' : 'unpinItem' ]( 'core', area ),
		[ AREA, pinned ]
	);

// Every item of the open Options menu whose text mentions the Pattern Library.
const optionsMenuLibraryItems = ( page ) =>
	page.evaluate(
		( menu ) =>
			[
				...document.querySelectorAll(
					`${ menu } [role^="menuitem"], ${ menu } button`
				),
			]
				.filter( ( el, i, all ) => all.indexOf( el ) === i )
				.map( ( el ) => ( {
					text: el.innerText.replace( /\s+/g, ' ' ).trim(),
					role: el.getAttribute( 'role' ),
					controls: el.getAttribute( 'aria-controls' ),
				} ) )
				.filter( ( item ) => /pattern library/i.test( item.text ) ),
		MENU
	);

const waitForWindow = ( page ) =>
	page.waitForSelector( WINDOW, { timeout: 60000 } );

const waitForClosed = ( page ) =>
	page.waitForSelector( WINDOW, { state: 'detached', timeout: 60000 } );

// Waits the sidebar animation out (0.3 s) and more, then stops recording.
async function settle( page ) {
	await page.waitForTimeout( 1200 );
	return stopRecording( page );
}

const setSidebar = ( page, area ) =>
	page.evaluate( ( a ) => {
		const ui = wp.data.dispatch( 'core/interface' );
		if ( a ) {
			ui.enableComplementaryArea( 'core', a );
		} else {
			ui.disableComplementaryArea( 'core' );
		}
	}, area );

const iconHasFocus = ( page ) =>
	page.evaluate(
		( selector ) => !! document.querySelector( `${ selector }:focus` ),
		ICON
	);

/**
 * Closes WordPress's own modals that can open late on a new page, never the library window. The
 * start-page pattern chooser reopens while the page is empty, so its preference is switched off
 * first (WordPress 6.8 and 7.1).
 *
 * @param {Object} page Playwright page.
 * @return {Promise<string[]>} Labels of the modals closed.
 */
async function dismissEditorModals( page ) {
	await page.evaluate( () =>
		wp.data
			.dispatch( 'core/preferences' )
			.set( 'core', 'enableChoosePatternModal', false )
	);
	const closed = [];
	for ( let i = 0; i < 4; i++ ) {
		await page.waitForTimeout( 2000 );
		const label = await page.evaluate( () => {
			const frame = document.querySelector(
				'.components-modal__frame:not(.wpmozo-library)'
			);
			return frame
				? frame.getAttribute( 'aria-label' ) ||
						frame
							.querySelector(
								'.components-modal__header-heading'
							)
							?.textContent.trim() ||
						frame.className
				: null;
		} );
		if ( ! label ) {
			break;
		}
		closed.push( label );
		// Its Close button: Escape only reaches a modal that has focus.
		const close = page.locator(
			'.components-modal__frame:not(.wpmozo-library) .components-modal__header button[aria-label="Close"]'
		);
		if ( await close.count() ) {
			await close.first().click();
		} else {
			await page.keyboard.press( 'Escape' );
		}
	}
	return closed;
}

async function insertFromWindow( page, title ) {
	const button = page.locator(
		`${ WINDOW } button[aria-label="Insert ${ title }"]`
	);
	await button.waitFor( { timeout: 60000 } );
	await button.click();
	await waitForClosed( page );
	await page.waitForTimeout( 3000 );
}

async function run( { cli, report } ) {
	const { site, client } = await standardSite( { label: 'launcher', cli } );
	report.context.site = site.logs;
	const browser = await launch();
	try {
		await client.driver( {
			wpmozo_test: 'set',
			licence: '1',
			library: 'on',
			flush: '1',
		} );
		const all = Object.values( ( await catalog( client ) ).patterns );
		const pattern =
			all.find(
				( p ) =>
					p.access === 'free' && p.availability.state === 'available'
			) || all.find( ( p ) => p.availability.state === 'available' );
		report.check(
			'there is an available pattern to insert',
			!! pattern,
			all.map( ( p ) => [ p.id, p.availability.state ] )
		);
		if ( ! pattern ) {
			return;
		}
		report.context.pattern = pattern.id;
		await client.driver( {
			wpmozo_test: 'set',
			keep: pattern.blocks
				.filter( ( n ) => n.startsWith( 'wpmozo/' ) )
				.map( ( n ) => n.slice( 7 ) )
				.join( ',' ),
			flush: '1',
		} );

		const {
			page,
			errors,
			console: messages,
		} = await newPage( browser, site.url );
		await openEditor(
			page,
			site.url,
			'/wp-admin/post-new.php?post_type=page'
		);
		await page.waitForSelector( ICON, { timeout: 60000 } );
		report.context.editorModalsClosed = await dismissEditorModals( page );
		let now = await state( page );
		report.check(
			'the library window does not open by itself when the editor loads',
			! now.open && ! now.windows,
			now
		);
		const start = await blocksState( page );

		// 1. Sidebar open: the window opens, the settings stay.
		await setSidebar( page, 'edit-post/document' );
		await page.waitForTimeout( 1000 );
		await startRecording( page );
		await page.locator( ICON ).click();
		await waitForWindow( page );
		let rec = await settle( page );
		now = await state( page );
		report.check(
			'sidebar open: the header icon opens the library window directly',
			now.open && now.windows === 1 && now.focusInSearch,
			now
		);
		report.check(
			'sidebar open: no frame paints the launcher sidebar, and the editor layout does not move',
			noFlash( rec ),
			rec
		);
		report.check(
			'sidebar open: the post settings stay open',
			now.area === 'edit-post/document',
			now.area
		);
		await page.keyboard.press( 'Escape' );
		await waitForClosed( page );
		now = await state( page );
		report.check(
			'Escape closes the window; focus returns to the header icon',
			! now.open &&
				! now.windows &&
				( await iconHasFocus( page ) ) &&
				now.area === 'edit-post/document',
			now
		);

		// 2. Sidebar closed: the window opens, the sidebar stays closed.
		await setSidebar( page, null );
		await page.waitForTimeout( 1000 );
		await startRecording( page );
		await page.locator( ICON ).click();
		await waitForWindow( page );
		rec = await settle( page );
		now = await state( page );
		report.check(
			'sidebar closed: the header icon opens the library window, the sidebar stays closed, no frame paints the launcher sidebar or moves the layout',
			now.open &&
				now.windows === 1 &&
				now.area === null &&
				noFlash( rec ),
			{ now, rec }
		);
		await page
			.locator(
				`${ WINDOW } .components-modal__header button[aria-label="Close"]`
			)
			.click();
		await waitForClosed( page );
		now = await state( page );
		report.check(
			'the Close button closes the window; focus returns to the header icon',
			! now.open && ! now.windows && ( await iconHasFocus( page ) ),
			now
		);
		await page
			.locator(
				'.interface-pinned-items button[aria-controls^="edit-post:"]'
			)
			.click();
		await page.waitForTimeout( 1000 );
		now = await state( page );
		report.check(
			"the editor's Settings button then opens the settings, not the library",
			/^edit-post\//.test( now.area || '' ) && ! now.open,
			now
		);

		// 3. Reopen and insert.
		await startRecording( page );
		await page.locator( ICON ).click();
		await waitForWindow( page );
		rec = await settle( page );
		now = await state( page );
		report.check(
			'reopening: one window, no frame paints the launcher sidebar or moves the layout',
			now.open && now.windows === 1 && noFlash( rec ),
			{ now, rec }
		);
		await insertFromWindow( page, pattern.title );
		const inserted = await blocksState( page );
		report.check(
			`inserting "${ pattern.title }" from the window adds valid blocks and closes it`,
			inserted.count > start.count &&
				! inserted.invalid.length &&
				! ( await state( page ) ).open,
			inserted
		);

		// 4. The Options menu: one Pattern Library item, the icon's own (PL-D32), pinned and not.
		for ( const pinned of [ true, false ] ) {
			const label = pinned ? 'icon pinned' : 'icon unpinned';
			if ( ! pinned ) {
				await setPinned( page, false );
				await page.waitForTimeout( 1000 );
			}
			const before = ( await state( page ) ).area;
			await page.locator( OPTIONS ).click();
			await page.waitForSelector( MENU, { timeout: 30000 } );
			const items = await optionsMenuLibraryItems( page );
			report.check(
				`${ label }: the Options menu has exactly one Pattern Library item, "Pattern Library", and no "Open Pattern Library"`,
				items.length === 1 &&
					items[ 0 ].text === 'Pattern Library' &&
					items[ 0 ].controls === PANEL_ID &&
					( pinned ? 1 : 0 ) ===
						( await page.locator( ICON ).count() ),
				{ items, icon: await page.locator( ICON ).count() }
			);
			await startRecording( page );
			await page.locator( MENU_ITEM ).click();
			await waitForWindow( page );
			rec = await settle( page );
			now = await state( page );
			const menuOpen = await page.locator( MENU ).count();
			report.check(
				`${ label }: the Options menu item opens the window directly and closes the menu; the sidebar stays as it was`,
				now.open &&
					now.windows === 1 &&
					now.area === before &&
					! menuOpen &&
					noFlash( rec ),
				{ before, now, menuOpen, rec }
			);
			await page.keyboard.press( 'Escape' );
			await waitForClosed( page );
			if ( ! pinned ) {
				await setPinned( page, true );
				await page.waitForSelector( ICON, { timeout: 30000 } );
			}
		}

		// 5. The placeholder block opens the same window and is replaced.
		await page.evaluate( () =>
			wp.data
				.dispatch( 'core/block-editor' )
				.insertBlocks(
					wp.blocks.createBlock( 'wpmozo/pattern-library' )
				)
		);
		await page.waitForTimeout( 2000 );
		const canvas = ( await page.locator( CANVAS ).count() )
			? page.frameLocator( CANVAS )
			: page;
		const beforePlaceholder = await blocksState( page );
		await canvas
			.locator(
				'.wp-block-wpmozo-pattern-library button:has-text("Open Pattern Library")'
			)
			.click();
		await waitForWindow( page );
		now = await state( page );
		const target = await page.evaluate( () =>
			wp.data.select( 'wpmozo/library' ).getTarget()
		);
		report.check(
			'the placeholder block opens the same window, with itself as the target',
			now.windows === 1 && !! target?.replaceClientId,
			{ now, target }
		);
		await insertFromWindow( page, pattern.title );
		const replaced = await blocksState( page );
		report.check(
			'the inserted pattern replaces the placeholder',
			! replaced.names.includes( 'wpmozo/pattern-library' ) &&
				replaced.count > beforePlaceholder.count - 1 &&
				! replaced.invalid.length,
			replaced
		);

		// 6. Save and reload.
		const saved = await save( page, 'Launcher check' );
		await openEditor(
			page,
			site.url,
			`/wp-admin/post.php?post=${ saved.id }&action=edit`
		);
		await dismissEditorModals( page );
		const after = await blocksState( page );
		report.check(
			'save and reload: every block valid',
			after.count === replaced.count &&
				! after.invalid.length &&
				! after.missing,
			after
		);

		// 7. Narrow editor: the icon where WordPress shows it, otherwise the Options menu item.
		await page.setViewportSize( { width: 600, height: 900 } );
		await page.waitForTimeout( 2000 );
		const narrowIcon = await page.locator( ICON ).isVisible();
		await startRecording( page );
		if ( narrowIcon ) {
			await page.locator( ICON ).click();
		} else {
			await page.locator( OPTIONS ).click();
			await page.locator( MENU_ITEM ).click();
		}
		await waitForWindow( page );
		rec = await settle( page );
		now = await state( page );
		report.check(
			`600 px editor: ${
				narrowIcon ? 'the header icon' : 'the Options menu item'
			} opens the window directly, no frame paints the launcher sidebar or moves the layout`,
			now.open && now.windows === 1 && noFlash( rec ),
			{ now, rec }
		);
		await page.keyboard.press( 'Escape' );
		await waitForClosed( page );

		const relevant = errors.concat(
			messages.filter(
				( m ) => /^error/.test( m ) && /wpmozo/i.test( m )
			)
		);
		report.check(
			'no page errors or WPMozo console errors',
			! relevant.length,
			relevant
		);
		await page.context().close();
		const probe = await client.driver( { wpmozo_test: 'probe' } );
		report.check(
			'no PHP notices, warnings or errors',
			! ( probe.debug_log || [] ).length,
			( probe.debug_log || [] ).slice( -5 )
		);
		networkChecks( report, site );
	} finally {
		await browser.close();
		await site.stop();
	}
}

module.exports = {
	description:
		'Editor entry points: the header icon opens the library directly (PL-D31)',
	run,
};
