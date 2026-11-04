#!/usr/bin/env node
/**
 * Pattern Library quality gate and preview capture (Pattern Library authoring tool).
 *
 * Usage:
 *   node tools/pattern-library/gate.cjs <site-url> <source/slug> [<source/slug> …] --log=<file.json>
 *       [--previews=lite:<Lite includes/library/>,pro:<Pro includes/library/>] [--storage-state=<file>]
 *
 * For each pattern, as an administrator on a development site with the library on (and, for Pro
 * patterns, an activated licence):
 * 1. the catalog lists it as available, with no catalog issue;
 * 2. it is inserted through the library window into a new page: valid blocks, at least one WPMozo
 *    block, no page errors;
 * 3. the page is published and reopened: every block still valid;
 * 4. on the front end at 1440, 768 and 360 px: no horizontal overflow, every image loads and has alt
 *    text, no page errors (the page is scrolled through first, so scroll animations run);
 * 5. with --previews: the section is captured at 1440 px and written as
 *    previews/<slug>.<revision>.webp (800 × 600: the top of a tall section, or a short one fitted
 *    whole) and
 *    previews/<slug>.<revision>-full.webp (1200 px wide), encoded with cwebp;
 * 6. editability, on a second page: every block type's Inspector renders on all its tabs without
 *    page errors, and a marker typed into each inline text field (up to ten) survives saving,
 *    reloading and the front end.
 *
 * The log records every check; the exit code is 1 if any check failed. Thumbnails show the design in
 * the site's active theme. Network: only the site's host resolves. Not shipped (tools/ is not in
 * the release zip).
 */
/* eslint-disable no-console -- A command-line tool reports on the console. */
const fs = require( 'fs' );
const os = require( 'os' );
const path = require( 'path' );
const { execFileSync } = require( 'child_process' );
const { chromium } = require(
	path.join( __dirname, '../../node_modules/playwright' )
);

const args = process.argv.slice( 2 );
const options = Object.fromEntries(
	args
		.filter( ( a ) => a.startsWith( '--' ) )
		.map( ( a ) => {
			const [ key, ...value ] = a.slice( 2 ).split( '=' );
			return [ key, value.join( '=' ) ];
		} )
);
const [ site, ...ids ] = args.filter( ( a ) => ! a.startsWith( '--' ) );
if ( ! site || ! ids.length || ! options.log ) {
	console.error(
		'Usage: node gate.cjs <site-url> <source/slug> … --log=<file.json> [--previews=lite:<dir>,pro:<dir>] [--storage-state=<file>]'
	);
	process.exit( 2 );
}
const previewDirs = Object.fromEntries(
	( options.previews || '' )
		.split( ',' )
		.filter( Boolean )
		.map( ( pair ) => {
			const at = pair.indexOf( ':' );
			return [ pair.slice( 0, at ), pair.slice( at + 1 ) ];
		} )
);
const origin = new URL( site ).origin;
const tmp = fs.mkdtempSync( path.join( os.tmpdir(), 'wpmozo-gate-' ) );

async function newPage( browser, viewport, errors ) {
	const context = await browser.newContext( {
		viewport,
		...( options[ 'storage-state' ]
			? { storageState: options[ 'storage-state' ] }
			: {} ),
	} );
	const page = await context.newPage();
	page.on( 'pageerror', ( e ) =>
		errors.push( { url: page.url(), text: e.message } )
	);
	await page.goto( origin + '/' );
	return page;
}

async function openEditor( page, url ) {
	await page.goto( origin + url );
	await page.waitForFunction(
		() =>
			window.wp &&
			wp.data &&
			wp.blocks &&
			wp.data.select( 'core/editor' ) &&
			wp.blocks.getBlockTypes().length > 0,
		null,
		{ timeout: 120000 }
	);
	await page.evaluate( () =>
		wp.data
			.dispatch( 'core/preferences' )
			.set( 'core/edit-post', 'welcomeGuide', false )
	);
	await page.waitForTimeout( 2000 );
	if ( await page.locator( '.components-modal__screen-overlay' ).count() ) {
		await page.keyboard.press( 'Escape' );
		await page.waitForTimeout( 500 );
	}
}

const allBlocks = ( page ) =>
	page.evaluate( () => {
		const out = [];
		const walk = ( list ) =>
			list.forEach( ( b ) => {
				out.push( { name: b.name, valid: b.isValid !== false } );
				walk( b.innerBlocks );
			} );
		walk( wp.data.select( 'core/block-editor' ).getBlocks() );
		return out;
	} );

async function openInspector( page, clientId ) {
	await page.evaluate( ( id ) => {
		wp.data.dispatch( 'core/block-editor' ).selectBlock( id );
		const area = wp.data.dispatch( 'core/interface' );
		area.enableComplementaryArea( 'core', 'edit-post/block' );
		area.enableComplementaryArea( 'core/edit-post', 'edit-post/block' );
	}, clientId );
	await page.waitForSelector( '.block-editor-block-inspector', {
		timeout: 20000,
	} );
	await page.waitForTimeout( 300 );
}

// Open every visible collapsed Inspector panel (some editors keep hidden panels there).
async function openVisiblePanels( page ) {
	const closed = page.locator(
		'.block-editor-block-inspector .components-panel__body:not(.is-opened) > .components-panel__body-title button'
	);
	for ( let round = 0; round < 40; round++ ) {
		const count = await closed.count();
		let opened = false;
		for ( let i = 0; i < count && ! opened; i++ ) {
			if ( await closed.nth( i ).isVisible() ) {
				await closed.nth( i ).click();
				await page.waitForTimeout( 80 );
				opened = true;
			}
		}
		if ( ! opened ) {
			return;
		}
	}
}

// 6. Editability, on a separate page so the previews stay clean: every block type's Inspector
// renders on all its tabs, and a marker typed into each inline text field survives saving,
// reloading and the front end.
async function checkEditability( browser, item, errors, check ) {
	const page = await newPage(
		browser,
		{ width: 1440, height: 1000 },
		errors
	);
	await openEditor( page, '/wp-admin/post-new.php?post_type=page' );
	await page.evaluate( () => wp.data.dispatch( 'wpmozo/library' ).open() );
	await page
		.locator(
			`.wpmozo-library button[aria-label="Insert ${ item.title }"]`
		)
		.click();
	await page.waitForSelector( '.wpmozo-library', {
		state: 'detached',
		timeout: 90000,
	} );
	await page.waitForTimeout( 5000 );
	const list = await page.evaluate( () => {
		const out = [];
		const walk = ( blocks ) =>
			blocks.forEach( ( b ) => {
				out.push( { clientId: b.clientId, name: b.name } );
				walk( b.innerBlocks );
			} );
		walk( wp.data.select( 'core/block-editor' ).getBlocks() );
		return out;
	} );

	const errorsBefore = errors.length;
	const inspected = [];
	for ( const name of [ ...new Set( list.map( ( b ) => b.name ) ) ] ) {
		await openInspector(
			page,
			list.find( ( b ) => b.name === name ).clientId
		);
		const tabs = page.locator(
			'.block-editor-block-inspector [role="tablist"] [role="tab"]'
		);
		const tabCount = await tabs.count();
		let controls = 0;
		for ( let t = 0; t < Math.max( 1, tabCount ); t++ ) {
			if ( tabCount ) {
				await tabs.nth( t ).click();
				await page.waitForTimeout( 150 );
			}
			await openVisiblePanels( page );
			controls += await page
				.locator(
					'.block-editor-block-inspector :is(input,select,textarea,button)'
				)
				.count();
		}
		inspected.push( { name, tabs: Math.max( 1, tabCount ), controls } );
	}
	check(
		"editing: every block type's Inspector renders on all its tabs",
		errors.length === errorsBefore &&
			inspected.every( ( i ) => i.controls > 0 ),
		inspected.map( ( i ) => `${ i.name }: ${ i.tabs } tab(s)` )
	);

	const canvas = ( await page
		.locator( 'iframe[name="editor-canvas"]' )
		.count() )
		? page.frameLocator( 'iframe[name="editor-canvas"]' )
		: page;
	const markers = [];
	for ( const block of list ) {
		if ( markers.length >= 10 ) {
			break;
		}
		const element = canvas.locator( `[data-block="${ block.clientId }"]` );
		// The block's own rich-text field: the block itself, or its first editable
		// that doesn't belong to a nested block.
		const index = await element
			.evaluate( ( node ) => {
				if ( node.getAttribute( 'contenteditable' ) === 'true' ) {
					return -1;
				}
				const all = [
					...node.querySelectorAll( '[contenteditable="true"]' ),
				];
				const own = all.findIndex(
					( e ) =>
						e.closest( '[data-block]' ) === node &&
						e.getBoundingClientRect().width > 0
				);
				// -1: the block itself is the field; -2: it has no field of its own.
				return own === -1 ? -2 : own;
			} )
			.catch( () => -2 );
		if ( index < -1 ) {
			continue;
		}
		const field =
			index === -1
				? element
				: element.locator( '[contenteditable="true"]' ).nth( index );
		if ( index === -1 && ! ( await field.isVisible() ) ) {
			continue;
		}
		const marker = `qz${ markers.length }mark`;
		await field.scrollIntoViewIfNeeded();
		// Focus instead of clicking: editor popovers (the between-blocks inserter) can sit over the field.
		await field.focus();
		await field.evaluate( ( el ) => {
			const range = el.ownerDocument.createRange();
			range.selectNodeContents( el );
			range.collapse( false );
			const selection = el.ownerDocument.getSelection();
			selection.removeAllRanges();
			selection.addRange( range );
		} );
		await page.keyboard.type( ' ' + marker, { delay: 10 } );
		await page.waitForTimeout( 300 );
		markers.push( { marker, name: block.name } );
	}
	const typed = await page.evaluate(
		() => wp.data.select( 'core/editor' ).getEditedPostContent(),
		null
	);
	check(
		`editing: ${ markers.length } inline text field(s) edited`,
		markers.length > 0 &&
			markers.every( ( m ) => typed.includes( m.marker ) ),
		markers.map( ( m ) => m.name )
	);

	const saved = await page.evaluate( async ( title ) => {
		wp.data
			.dispatch( 'core/editor' )
			.editPost( { title, status: 'publish' } );
		await wp.data.dispatch( 'core/editor' ).savePost();
		return {
			id: wp.data.select( 'core/editor' ).getCurrentPostId(),
			link: wp.data.select( 'core/editor' ).getPermalink(),
		};
	}, `Gate editing: ${ item.id }` );
	await page.waitForFunction(
		() => ! wp.data.select( 'core/editor' ).isSavingPost(),
		null,
		{ timeout: 60000 }
	);
	await openEditor(
		page,
		`/wp-admin/post.php?post=${ saved.id }&action=edit`
	);
	const blocks = await allBlocks( page );
	const content = await page.evaluate( () =>
		wp.data.select( 'core/editor' ).getEditedPostContent()
	);
	check(
		'editing: after save and reload, all valid and every edit kept',
		blocks.every( ( b ) => b.valid ) &&
			markers.every( ( m ) => content.includes( m.marker ) ),
		{
			invalid: blocks.filter( ( b ) => ! b.valid ).map( ( b ) => b.name ),
			lost: markers
				.filter( ( m ) => ! content.includes( m.marker ) )
				.map( ( m ) => m.name ),
		}
	);
	await page.goto( saved.link );
	const text = await page.evaluate(
		// Lower case: some fields are shown with text-transform (innerText applies it).
		() =>
			document
				.querySelector( '.wp-block-post-content' )
				.innerText.toLowerCase()
	);
	check(
		'editing: the front end shows every edit',
		markers.every( ( m ) => text.includes( m.marker ) ),
		markers
			.filter( ( m ) => ! text.includes( m.marker ) )
			.map( ( m ) => m.name )
	);
	await page.context().close();
}

// Crop a PNG (rect in source pixels, or the whole image), scale it to a target width in the
// browser, then encode WebP with cwebp.
async function writeWebp( browser, png, width, rect, output, quality ) {
	const data = fs.readFileSync( png ).toString( 'base64' );
	const page = await browser.newPage( {
		viewport: { width: 400, height: 300 },
		deviceScaleFactor: 1,
	} );
	const size = await page.evaluate(
		async ( { src, w, r } ) => {
			const img = new window.Image();
			img.src = src;
			await img.decode();
			const canvas = document.createElement( 'canvas' );
			const ctx = canvas.getContext( '2d' );
			ctx.imageSmoothingQuality = 'high';
			if ( r && r.fit ) {
				// Fit the whole image into w × r.fit, filling the bands with the image's own top and
				// bottom edge colours.
				const probe = document.createElement( 'canvas' );
				probe.width = img.naturalWidth;
				probe.height = img.naturalHeight;
				probe.getContext( '2d' ).drawImage( img, 0, 0 );
				const pixel = ( y ) =>
					'rgb(' +
					Array.from(
						probe
							.getContext( '2d' )
							.getImageData( 2, y, 1, 1 )
							.data.slice( 0, 3 )
					).join( ',' ) +
					')';
				// Skip two edge rows, which can carry a hairline from the page around the section.
				const sh = img.naturalHeight - 4;
				canvas.width = w;
				canvas.height = r.fit;
				const dh = Math.round( sh * ( w / img.naturalWidth ) );
				const top = Math.round( ( r.fit - dh ) / 2 );
				ctx.fillStyle = pixel( 3 );
				ctx.fillRect( 0, 0, w, top + 1 );
				ctx.fillStyle = pixel( img.naturalHeight - 4 );
				ctx.fillRect( 0, top + dh - 1, w, r.fit - top - dh + 1 );
				ctx.drawImage( img, 0, 2, img.naturalWidth, sh, 0, top, w, dh );
				window.__out = canvas.toDataURL( 'image/png' );
				return { w, h: r.fit };
			}
			const crop = r || {
				x: 0,
				y: 0,
				w: img.naturalWidth,
				h: img.naturalHeight,
			};
			const h = Math.round( crop.h * ( w / crop.w ) );
			canvas.width = w;
			canvas.height = h;
			ctx.drawImage( img, crop.x, crop.y, crop.w, crop.h, 0, 0, w, h );
			window.__out = canvas.toDataURL( 'image/png' );
			return { w, h };
		},
		{ src: `data:image/png;base64,${ data }`, w: width, r: rect }
	);
	const out = await page.evaluate( () => window.__out );
	await page.close();
	const scaled = path.join( tmp, `scaled-${ Date.now() }.png` );
	fs.writeFileSync( scaled, Buffer.from( out.split( ',' )[ 1 ], 'base64' ) );
	fs.mkdirSync( path.dirname( output ), { recursive: true } );
	execFileSync( 'cwebp', [
		'-quiet',
		'-q',
		String( quality ),
		'-m',
		'6',
		scaled,
		'-o',
		output,
	] );
	return {
		file: output,
		width: size.w,
		height: size.h,
		bytes: fs.statSync( output ).size,
	};
}

// 4:3 thumbnail: the top of a tall section, or a short section fitted whole (letterboxed).
function thumbnailRect( width, height ) {
	if ( height >= ( width * 3 ) / 4 ) {
		return { x: 0, y: 0, w: width, h: Math.round( ( width * 3 ) / 4 ) };
	}
	return { fit: 600 };
}

( async () => {
	const browser = await chromium.launch( {
		channel: 'chrome',
		headless: true,
		args: [
			`--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE ${
				new URL( site ).hostname
			}`,
		],
	} );
	const report = {
		site: origin,
		startedAt: new Date().toISOString(),
		patterns: [],
	};

	for ( const id of ids ) {
		const errors = [];
		const checks = [];
		const check = ( name, ok, detail ) => {
			checks.push( { name, ok: !! ok, detail } );
			console.log(
				`${ ok ? 'PASS' : 'FAIL' } ${ id } — ${ name }${
					detail === undefined
						? ''
						: ' ' + JSON.stringify( detail ).slice( 0, 300 )
				}`
			);
		};
		const page = await newPage(
			browser,
			{ width: 1440, height: 1000 },
			errors
		);
		await openEditor( page, '/wp-admin/post-new.php?post_type=page' );

		// 1. Catalog.
		const catalog = await page.evaluate( () =>
			wp.apiFetch( { path: '/wpmozo/v1/library/catalog' } )
		);
		const item = ( catalog.patterns || [] ).find( ( p ) => p.id === id );
		const issues = ( catalog.issues || [] ).filter(
			( i ) => i.item === id
		);
		check(
			'catalog lists it as available',
			item && item.availability.state === 'available',
			item && item.availability
		);
		check( 'no catalog issues', ! issues.length, issues );
		if ( ! item ) {
			report.patterns.push( { id, checks, errors } );
			await page.context().close();
			continue;
		}

		// 2. Insert through the library window.
		await page.evaluate( () =>
			wp.data.dispatch( 'wpmozo/library' ).open()
		);
		const insert = page.locator(
			`.wpmozo-library button[aria-label="Insert ${ item.title }"]`
		);
		await insert.waitFor( { timeout: 60000 } );
		await insert.click();
		// Either the window closes (inserted) or the library shows why nothing was inserted.
		const outcome = await Promise.race( [
			page
				.waitForSelector( '.wpmozo-library', {
					state: 'detached',
					timeout: 90000,
				} )
				.then( () => null ),
			page
				.waitForSelector(
					'.wpmozo-library .components-notice.is-error',
					{ timeout: 90000 }
				)
				.then( ( n ) => n.innerText() ),
		] );
		check( 'library inserts it', outcome === null, outcome || undefined );
		if ( outcome !== null ) {
			report.patterns.push( { id, checks, errors } );
			await page.context().close();
			continue;
		}
		await page.waitForTimeout( 5000 ); // On-mount updates (IDs, wrapper styles, counter markup).
		let blocks = await allBlocks( page );
		check(
			'inserted with valid blocks',
			blocks.length > 0 && blocks.every( ( b ) => b.valid ),
			{
				count: blocks.length,
				invalid: blocks
					.filter( ( b ) => ! b.valid )
					.map( ( b ) => b.name ),
			}
		);
		check(
			'uses WPMozo blocks',
			blocks.some( ( b ) => b.name.startsWith( 'wpmozo/' ) ),
			[
				...new Set(
					blocks
						.filter( ( b ) => b.name.startsWith( 'wpmozo/' ) )
						.map( ( b ) => b.name )
				),
			]
		);

		// 3. Publish and reopen.
		const saved = await page.evaluate( async ( title ) => {
			wp.data
				.dispatch( 'core/editor' )
				.editPost( { title, status: 'publish' } );
			await wp.data.dispatch( 'core/editor' ).savePost();
			return {
				id: wp.data.select( 'core/editor' ).getCurrentPostId(),
				link: wp.data.select( 'core/editor' ).getPermalink(),
			};
		}, `Gate: ${ id }` );
		await page.waitForFunction(
			() => ! wp.data.select( 'core/editor' ).isSavingPost(),
			null,
			{ timeout: 60000 }
		);
		await openEditor(
			page,
			`/wp-admin/post.php?post=${ saved.id }&action=edit`
		);
		blocks = await allBlocks( page );
		check(
			'valid after save and reload',
			blocks.length > 0 && blocks.every( ( b ) => b.valid ),
			{
				invalid: blocks
					.filter( ( b ) => ! b.valid )
					.map( ( b ) => b.name ),
			}
		);
		await page.context().close();

		// 4. Front end.
		const front = {};
		for ( const [ name, width ] of [
			[ 'desktop', 1440 ],
			[ 'tablet', 768 ],
			[ 'phone', 360 ],
		] ) {
			const fp = await newPage(
				browser,
				{ width, height: 1080 },
				errors
			);
			await fp.goto( saved.link );
			// As a visitor sees it: hide the logged-in admin toolbar.
			await fp.addStyleTag( {
				content:
					'#wpadminbar{display:none!important}html{margin-top:0!important}',
			} );
			await fp.evaluate( async () => {
				for ( let y = 0; y < document.body.scrollHeight; y += 300 ) {
					window.scrollTo( 0, y );
					await new Promise( ( r ) => setTimeout( r, 120 ) );
				}
			} );
			await fp.waitForTimeout( 1500 );
			front[ name ] = await fp.evaluate( () => ( {
				overflow:
					document.documentElement.scrollWidth -
					document.documentElement.clientWidth,
				images: [
					...document.querySelectorAll(
						'.wp-block-post-content img'
					),
				].map( ( i ) => ( {
					alt: i.getAttribute( 'alt' ),
					loaded: i.complete && i.naturalWidth > 0,
				} ) ),
				headings: [
					...document.querySelectorAll(
						'.wp-block-post-content :is(h1,h2,h3,h4,h5,h6)'
					),
				].map( ( h ) => h.tagName ),
			} ) );
			check(
				`front end ${ width } px: no horizontal overflow`,
				front[ name ].overflow <= 0,
				front[ name ].overflow
			);
			check(
				`front end ${ width } px: images load and have alt text`,
				front[ name ].images.every(
					( i ) => i.loaded && i.alt && i.alt.trim()
				),
				front[ name ].images
			);

			// 5. Previews, from the desktop render.
			if ( 'desktop' === name && previewDirs[ item.source ] ) {
				const section = fp
					.locator( '.wp-block-post-content > *' )
					.first();
				const full = path.join( tmp, `${ item.slug }-full.png` );
				await section.screenshot( { path: full } );
				const box = await section.boundingBox();
				const dir = path.join( previewDirs[ item.source ], 'previews' );
				front.previews = {
					thumbnail: await writeWebp(
						browser,
						full,
						800,
						thumbnailRect(
							Math.round( box.width ),
							Math.round( box.height )
						),
						path.join(
							dir,
							`${ item.slug }.${ item.revision }.webp`
						),
						80
					),
					preview: await writeWebp(
						browser,
						full,
						1200,
						null,
						path.join(
							dir,
							`${ item.slug }.${ item.revision }-full.webp`
						),
						78
					),
				};
				console.log(
					'     previews ' + JSON.stringify( front.previews )
				);
			}
			await fp.context().close();
		}
		await checkEditability( browser, item, errors, check );
		check( 'headings', true, front.desktop.headings );
		check( 'no page errors', ! errors.length, errors );
		report.patterns.push( {
			id,
			title: item.title,
			post: saved,
			checks,
			front,
			errors,
		} );
	}

	await browser.close();
	report.finishedAt = new Date().toISOString();
	report.passed = report.patterns.every( ( p ) =>
		p.checks.every( ( c ) => c.ok )
	);
	fs.mkdirSync( path.dirname( path.resolve( options.log ) ), {
		recursive: true,
	} );
	fs.writeFileSync( options.log, JSON.stringify( report, null, 1 ), {
		flag: 'wx',
	} );
	console.log(
		JSON.stringify( { passed: report.passed, log: options.log } )
	);
	process.exit( report.passed ? 0 : 1 );
} )().catch( ( error ) => {
	console.error( error.message );
	process.exit( 1 );
} );
