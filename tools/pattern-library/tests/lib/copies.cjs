/**
 * Plugin copies under test. Tests never mount a repository: they use a copy built from an exact
 * commit, or from the working tree, kept in the test cache.
 *
 * A copy spec is one of:
 * - "worktree": the repository's tracked and untracked (not ignored) files, built;
 * - a commit, branch or tag: `git archive` of it, built unless its build/ is tracked;
 * - an absolute path to an existing plugin folder, used as it is.
 */
const fs = require( 'fs' );
const path = require( 'path' );
const { execFileSync } = require( 'child_process' );
const env = require( './env.cjs' );

const REPOS = {
	lite: { repo: () => env.LITE_REPO, folder: 'wpmozo-blocks-and-addons' },
	pro: { repo: () => env.PRO_REPO, folder: 'wpmozo-blocks-and-addons-pro' },
};

const git = ( repo, args, options = {} ) =>
	execFileSync( 'git', [ '-C', repo, ...args ], {
		maxBuffer: 256 * 1024 * 1024,
		...options,
	} );

function build( dir, repo, log ) {
	if ( fs.existsSync( path.join( dir, 'build', 'blocks' ) ) ) {
		return;
	}
	const modules = path.join( dir, 'node_modules' );
	fs.symlinkSync( path.join( repo, 'node_modules' ), modules );
	try {
		execFileSync( 'npm', [ 'run', 'build' ], {
			cwd: dir,
			stdio: [
				'ignore',
				fs.openSync( log, 'w' ),
				fs.openSync( log, 'a' ),
			],
		} );
	} finally {
		fs.unlinkSync( modules );
	}
}

/**
 * Path of a built plugin folder for a spec.
 *
 * @param {string} which "lite" or "pro".
 * @param {string} spec  "worktree", a commit-ish, or an absolute path.
 * @return {string} Plugin folder.
 */
function pluginCopy( which, spec ) {
	if ( path.isAbsolute( spec ) ) {
		return spec;
	}
	const { repo: repoPath, folder } = REPOS[ which ];
	const repo = repoPath();
	let key;
	let fill;
	if ( spec === 'worktree' ) {
		// Built once per run (the working tree may change between runs), in a folder of this run's own.
		key = `${ which }-worktree-${ process.pid }`;
		fill = ( dir ) => {
			const files = git( repo, [
				'ls-files',
				'-co',
				'--exclude-standard',
				'-z',
			] )
				.toString()
				.split( '\0' )
				.filter( Boolean );
			for ( const file of files ) {
				const from = path.join( repo, file );
				if ( fs.existsSync( from ) && fs.statSync( from ).isFile() ) {
					fs.mkdirSync( path.dirname( path.join( dir, file ) ), {
						recursive: true,
					} );
					fs.copyFileSync( from, path.join( dir, file ) );
				}
			}
		};
	} else {
		const sha = git( repo, [
			'rev-parse',
			'--verify',
			`${ spec }^{commit}`,
		] )
			.toString()
			.trim();
		key = `${ which }-${ sha.slice( 0, 12 ) }`;
		fill = ( dir ) =>
			execFileSync( 'tar', [ '-x', '-C', dir ], {
				input: git( repo, [ 'archive', sha ] ),
			} );
	}
	const root = path.join( env.CACHE, 'copies', key );
	if ( ! fs.existsSync( path.join( root, '.ready' ) ) ) {
		// Build next to it, then rename, so a concurrent run never sees a half-built copy.
		const work = `${ root }.tmp-${ process.pid }`;
		fs.rmSync( work, { recursive: true, force: true } );
		fs.mkdirSync( path.join( work, folder ), { recursive: true } );
		fill( path.join( work, folder ) );
		build(
			path.join( work, folder ),
			repo,
			path.join( work, 'build.log' )
		);
		fs.writeFileSync(
			path.join( work, '.ready' ),
			new Date().toISOString()
		);
		if ( fs.existsSync( path.join( root, '.ready' ) ) ) {
			fs.rmSync( work, { recursive: true, force: true } );
		} else {
			fs.rmSync( root, { recursive: true, force: true } );
			fs.renameSync( work, root );
		}
	}
	return path.join( root, folder );
}

/**
 * Replace the contents of a mounted folder with another copy, keeping the folder itself (it is
 * the mount point), as a plugin update replaces the plugin's files.
 *
 * @param {string} from Source plugin folder.
 * @param {string} to   Mounted folder.
 */
function replaceContents( from, to ) {
	fs.mkdirSync( to, { recursive: true } );
	for ( const entry of fs.readdirSync( to ) ) {
		fs.rmSync( path.join( to, entry ), { recursive: true, force: true } );
	}
	fs.cpSync( from, to, { recursive: true } );
}

/**
 * A writable copy of a plugin folder for tests that change files.
 *
 * @param {string} from  Source plugin folder.
 * @param {string} label Unique label.
 * @return {string} New folder.
 */
function mutableCopy( from, label ) {
	const to = path.join(
		env.CACHE,
		'mutable',
		`${ label }-${ process.pid }`,
		path.basename( from )
	);
	fs.rmSync( path.dirname( to ), { recursive: true, force: true } );
	replaceContents( from, to );
	return to;
}

/** Remove this run's working-tree and writable copies. */
function cleanup() {
	for ( const sub of [ 'copies', 'mutable' ] ) {
		const base = path.join( env.CACHE, sub );
		for ( const entry of fs.existsSync( base )
			? fs.readdirSync( base )
			: [] ) {
			if ( entry.endsWith( `-${ process.pid }` ) ) {
				fs.rmSync( path.join( base, entry ), {
					recursive: true,
					force: true,
				} );
			}
		}
	}
}

module.exports = { pluginCopy, replaceContents, mutableCopy, cleanup };
