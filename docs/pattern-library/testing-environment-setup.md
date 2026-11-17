# Testing environment setup (Lite, Pro and Pattern Library)

How to prepare a developer's machine to test WPMozo Blocks and Addons (Lite), WPMozo Blocks and Addons Pro and the Pattern Library. There are two kinds of testing:
- **Track A, automated:** the Pattern Library suites, on offline WordPress Playground sites the suites start themselves.
- **Track B, manual:** checks in the browser on one of the developer's **existing LocalWP sites**, chosen and reused where it qualifies.

**Who it is for:** a developer joining the testing (Ayush), working with a Claude session. Section 2 tells that Claude session what to do. A person can follow sections 3 to 13 by hand.

**If the developer has already cloned, built and activated both plugins themself**, start from [testing-handoff.md](testing-handoff.md) instead: it has those steps, the prompt for that case, the project context and the remaining test plan. It uses this guide as its reference.

**Status:** updated on 2026-11-13, from an audit of Lite `0805b47` (`dev/sunil`) and Pro `faf19a3` (`release/pattern-lib`). Neither repository had a code change since the final validation (Lite `044cd2b`, Pro `9d4647b`; checked with `git diff --stat`). Since then, on 2026-11-16, one Lite editor change: the header icon opens the library directly (`485e5e7`, PL-D31; the `launcher` suite).

**Labels.** Every instruction carries one:
- **[Verified]**: run or checked on the owner's Mac (macOS, zsh, Node 22.17.0, npm 11.4.2, Local with WordPress 7.1.4 / PHP 8.2) on the date given, or read in the code at the commits above.
- **[Untested]**: written from the code, the tool documentation or standard tool behaviour, but never run as written. Run it once and report the result (section 13).
- **[Developer required]**: the tester can't do it alone. It needs the owner (access, a licence key, a decision) or a code change by a developer.
- **[Optional]**: not needed for the basic setup.

**The short version:**
1. Claude inspects the machine and the existing LocalWP sites, and recommends one to reuse. A new site is needed only if none qualifies.
2. Clone Lite (`dev/sunil`) and Pro (`release/pattern-lib`) into that site's `wp-content/plugins/` folder, then build both. No existing folder is overwritten, moved or changed without approval.
3. Activate Lite, then Pro.
4. Fill in one Git-ignored settings file in the Lite checkout, `tools/pattern-library/.env`, including the site's URL.
5. Run the suites (Track A) and the manual checks (Track B). Afterwards, remove the test pages and users (section 12).

The plugins themselves need no settings: WordPress resolves their paths and URLs (section 14). No WordPress or PHP version has to change.

---

## 1. The two kinds of testing and what each needs

| | Track A: automated suites | Track B: manual checks on LocalWP |
|---|---|---|
| What it tests | Catalog, REST and roles, licence lock, robustness, contract, editor gate, version combinations, updates. WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2 | What a person sees in the editor and on the front end of a real site: catalog, preview, media, insertion, roles, the library switch |
| Where it runs | Offline Playground sites on 127.0.0.1 that the suites start and stop. They use SQLite and never touch a LocalWP site or its database. **[Verified]** | One existing LocalWP site (section 5) |
| Needs a LocalWP site | No | Yes |
| Needs the checkouts in a site's plugins folder | No: any folder, with Lite and Pro side by side | Yes, under their exact folder names |
| Tools | Git, Node.js 22, npm, Google Chrome, `unzip`, `tar`, the Playground CLI 3.1.58, WordPress zips 6.8.11 and 7.1.3 | Git, Node.js 22 and npm (to build), a browser, LocalWP |
| Build | Not needed in the checkout: the suites build their own copies, using each checkout's `node_modules` | `npm run build` in both checkouts |
| `.env` values | `WPMOZO_PLAYGROUND_CLI` (others optional) | `WPMOZO_SITE_URL`, only for the command-line checks |
| Pro licence | Never: the suites use a test value | Needed to insert Pro patterns ([Developer required]) |

**Simplest layout:** clone both repositories into the chosen LocalWP site's plugins folder once. The same two checkouts then serve both tracks: the suites find Pro next to Lite.

---

## 2. Instructions for the other developer's Claude session

### 2.1 The file to read
- **In the Lite repository:** `docs/pattern-library/testing-environment-setup.md` (this file), branch `dev/sunil`.
- **Before Lite is cloned:** `https://raw.githubusercontent.com/elicus/wpmozo-blocks-and-addons/dev/sunil/docs/pattern-library/testing-environment-setup.md`.
- **[Developer required]** The file reaches GitHub only after the owner commits and pushes it to `dev/sunil`.

### 2.2 The prompt to give Claude
Start a Claude session in any folder (for example your home folder) and paste:

```text
Read docs/pattern-library/testing-environment-setup.md from the WPMozo Lite repository (branch dev/sunil). If the Lite repository isn't on this machine yet, read it from https://raw.githubusercontent.com/elicus/wpmozo-blocks-and-addons/dev/sunil/docs/pattern-library/testing-environment-setup.md instead. Then follow its section 2, "Instructions for the other developer's Claude session", to prepare this machine for WPMozo Lite, Pro and Pattern Library testing: the automated Playground suites and manual tests on one of my existing LocalWP sites. Start with the read-only inspection of my tools and LocalWP sites, then show me the findings, the site you recommend and your plan before you change anything. Ask me before every step the guide says needs my approval or my action. Never overwrite, move or delete existing files, folders or sites, never change WordPress or PHP versions, never change Git branches, commit or push, and never edit plugin code, block folders or patterns.
```

### 2.3 What Claude does
Work through the phases in order. Show the user a short table of results after each phase.

**Phase A: Inspect.** Read-only: no approval needed, nothing is written.
1. **Read this whole guide.**
   - The repositories' `CLAUDE.md` files and older Pattern Library documents describe the owner's machine: the owner's Local site, and the owner's offline harness under the owner's home folder.
   - For machine setup, follow this guide instead. Never use paths from those documents.
2. **Record the operating system and shell:** `uname -a`, `echo $SHELL`.
3. **Record the tool versions:**
   ```bash
   git --version; node -v; npm -v; php -v | head -1; cwebp -version; unzip -v | head -1; tar --version | head -1
   ```
   - On macOS, also check for Google Chrome: `ls -d "/Applications/Google Chrome.app"`.
   - A missing optional tool (`php`, `cwebp`) is not an error. Section 4 says which tools each track needs.
4. **List the LocalWP sites** with the inspection command in section 5.2. It reads only Local's own site list and each site's files.
   - For each site it shows: the name, whether it is running, the WordPress and PHP versions, single site or multisite, the URL, the folder, and whether the two plugin folders `wpmozo-blocks-and-addons` and `wpmozo-blocks-and-addons-pro` exist. Each existing one is shown as a Git checkout with its branch and changes, or as an installed copy with its version. Other WPMozo plugins don't matter.
   - If Local's site list isn't found (another operating system or Local version), ask the user to read the same facts from Local's window.
5. **Check the test tooling:**
   - `ls -la "$HOME/.wordpress-playground"` for `6.8.11.zip` and `7.1.3.zip`;
   - `ls "$HOME/.wpmozo-tools/playground/node_modules/.bin/wp-playground-cli"`;
   - `ls "$HOME/.cache/wpmozo-pattern-library-tests"`.
6. **Check repository access** without downloading anything. `GIT_TERMINAL_PROMPT=0` makes Git fail instead of waiting for a password:
   ```bash
   GIT_TERMINAL_PROMPT=0 git ls-remote --heads https://github.com/elicus/wpmozo-blocks-and-addons.git dev/sunil
   ```
   ```bash
   GIT_TERMINAL_PROMPT=0 git ls-remote --heads https://github.com/elicus/wpmozo-blocks-and-addons-pro.git release/pattern-lib
   ```
   - If Pro needs credentials, the user signs in to GitHub themself (in their own terminal or Git credential helper). Never type or store credentials.
   - If access is refused, it is **[Developer required]**: the owner grants read access.
7. **Ask the user:**
   - which tracks they want (A, B or both);
   - which of the listed sites are development sites that can take test pages, test users and setting changes;
   - whether they prefer one of them.

**Phase B: Recommend and plan.** Approval needed before Phase C.
1. **Recommend one existing site** using the requirements in section 5.1, with the reason for the choice and for each site you ruled out.
   - If the chosen site already has either plugin folder, present the options in section 5.3; the user chooses.
   - Propose a new site (section 5.4) only if no existing site qualifies or the user asks for one.
2. **Present one plan.** Give the label of each step from this guide, and list:
   - what is missing;
   - what will be installed or downloaded, with approximate sizes;
   - which folders will be created, and where;
   - which steps the user does by hand (section 2.4).
3. **Wait for the user's explicit yes.** An approval covers only the steps it names.

**Phase C: Set up.** Only the approved steps, in this order:
- section 6: clone and build;
- section 7: the user activates the plugins and, if available, the licence;
- section 8: the settings file and the site URL check;
- section 9: the Track A tooling.

Stop at every manual step and wait for the user to say it is done. If a step fails, stop and report the exact output; don't work around it with a different method.

**Phase D: Verify.**
1. **Track A:** load the settings (section 8.1) and run `php-parse`, then `rest` (section 10). Compare the results with the expected ones there. Run other suites one at a time, when the user wants them.
2. **Track B:**
   - Run the command-line checks (section 11.1).
   - Guide the user through the manual checks (sections 11.2 to 11.5). The user clicks in the browser and tells you what they see.
   - Keep a list of every page and user created for the tests, with their IDs.

**Phase E: Clean up and report.**
1. Offer the cleanup in section 12. Nothing is deleted without the user confirming the list first.
2. Write the report in section 13.
3. Run `git -C <each checkout> status --short --branch`. Both should show the expected branch and no changes: `build/`, `node_modules/` and `.env` are ignored.
4. Confirm that nothing was committed or pushed.

### 2.4 What needs the user (approval, credentials or manual action)

| Step | Why | Who |
|---|---|---|
| Choosing the LocalWP site to reuse | The user's site and content | The user decides, from Claude's recommendation |
| Starting a halted site | Done in Local's window | The user, by hand |
| Anything about an existing `wpmozo-blocks-and-addons` or `wpmozo-blocks-and-addons-pro` folder (section 5.3) | The user's work | The user decides. Claude never moves, renames, deletes or switches them unless the user explicitly says so for that folder |
| Read access to the private Pro repository | Private repository | **[Developer required]** The owner grants it. The user signs in to GitHub when Git asks |
| Installing a missing tool (Node.js 22, Google Chrome, PHP, `cwebp`) | Changes the system | The user approves. The user installs it or lets Claude run the install command |
| Downloads: two `git clone`s, `npm ci` twice (about 660 MB and 580 MB of `node_modules`), the Playground CLI (about 570 MB), two WordPress zips (about 29 MB and 37 MB) | Network and disk | The user approves (sizes measured on the owner's Mac) |
| Activating the plugins | Changes the site | The user, in wp-admin |
| The Pro licence key | Secret | **[Developer required]** The owner provides a key for development. The user enters it in wp-admin. Claude never types, stores or prints it |
| Test users for each role, and their passwords | Credentials | The user, in wp-admin (section 11.4) |
| Changing `wp-config.php` (debug log) | Site configuration | The user approves; it is undone during cleanup |
| Moving test pages to the trash, emptying the trash, deleting test users | Removes content | The user confirms the exact list first (section 12) |
| A logged-in browser state for the authoring tools | Login | The user logs in in the window that opens (section 11.6) |

### 2.5 Rules for Claude (no exceptions without the user's explicit permission)
- **Never overwrite, move or delete existing work.**
  - If a clone target folder exists, stop and ask.
  - If `tools/pattern-library/.env` exists, keep it and only report which values are missing.
  - Never move, rename or delete an existing plugin folder, checkout or site. If the user explicitly approves taking a folder out of the way, move it to a backup folder (section 5.3); never delete it.
- **Never change an existing site's setup.** That means its WordPress version, PHP version, theme or other plugins, and Local's own files, which Claude only reads.
- **Never change Git state.**
  - In any existing repository, no `checkout`, `switch`, `branch`, `reset`, `rebase`, `merge`, `stash`, `pull`, `fetch`, `commit` or `push`. The one exception is section 5.3 option B, done by the user or on their explicit instruction.
  - In the new test clones, run only `git clone --branch …` and read-only commands: `status`, `log -1`, `rev-parse`, `ls-remote`, `check-ignore`.
  - Update a test clone later only when the user asks, with `git -C <folder> pull --ff-only`, and only if `git status` is clean.
- **Never edit tracked files.**
  - That includes PHP, JS, CSS, `src/blocks/`, Pro `includes/templates/block-<slug>/`, patterns, maps, previews, media, `package.json`, `package-lock.json` and `.gitignore`.
  - The only file Claude writes inside a checkout is `tools/pattern-library/.env`, which is ignored. npm writes the ignored `node_modules/` and `build/`.
- **Never run commands that change tracked files:**
  - `npm install` inside a checkout: it can rewrite `package-lock.json`. Use `npm ci`.
  - `npm run plugin-zip`: Lite tracks its release zip.
  - `npm run format`, `npm run packages-update`, or `wp-scripts lint-js --fix`.
- **Never fix anything.** If a suite fails or a block misbehaves, report it.
  - Known block issues are ON HOLD for a separate developer and need the owner's approval (`known-issues.md`).
  - Never change a test expectation.
- **Never handle secrets.** No passwords, licence keys, cookies or tokens in commands, files, logs or the report.
- **Ask before anything that downloads, installs, changes a site or touches files outside the new test folders.**

---

## 3. Repositories and branches

| | Lite | Pro |
|---|---|---|
| Repository | `https://github.com/elicus/wpmozo-blocks-and-addons.git` (public) | `https://github.com/elicus/wpmozo-blocks-and-addons-pro.git` (private: read access from the owner) |
| Branch to test | `dev/sunil` | `release/pattern-lib` |
| Folder name (exact) | `wpmozo-blocks-and-addons` | `wpmozo-blocks-and-addons-pro` |

- **[Verified] 2026-11-13** (`git ls-remote`): both branches exist on GitHub, at Lite `0805b47` and Pro `faf19a3`. Lite's `release/1.8.0` also exists; the `matrix` suite uses it.
- The branches move. Always report the commit you tested (section 13).
- **Why the folder names must be exact:**
  - Pro declares `Requires plugins: wpmozo-blocks-and-addons`;
  - the suites look for the plugins under these names;
  - the content builder recognizes content images by them (`production-pattern-authoring.md`).

  **[Verified]** in the code.
- **Use full clones**, with no `--depth` and no `--single-branch`. The suites build older commits from the branch history (`b91a5ec`, `ef1909d`, `85390bb`) and Lite's `release/1.8.0`. **[Verified]**: those commits are in the history of the two test branches.

---

## 4. Prerequisites

### 4.1 Track A: automated suites

| Tool | Version | Notes | Label |
|---|---|---|---|
| macOS | The owner's Mac | Linux and Windows: the suites use symbolic links, `unzip`, `tar` and POSIX shell commands | **[Verified]** macOS. Linux, Windows **[Untested]** |
| Git | Any recent | Cloning; the suites read commits with `git archive` | **[Verified]** |
| Node.js | 22 (tested with 22.17.0) | Runs the suites and builds the plugin copies | **[Verified]** with 22.17.0. Other versions **[Untested]** |
| npm | Tested with 11.4.2 | `npm ci` in both checkouts (the suites link to each checkout's `node_modules`) | **[Verified]** |
| Google Chrome | Installed normally | Browser suites. Playwright (from Lite's `node_modules`, 1.58.2) drives the installed Chrome (`channel: 'chrome'`) and downloads no browser | **[Verified]** |
| `unzip`, `tar` | Built into macOS | Plugin copies | **[Verified]** |
| `@wp-playground/cli` | 3.1.58, installed outside both repositories | Starts the sites (section 9) | **[Verified]** version; installing it **[Untested]** |
| WordPress zips | `6.8.11.zip`, `7.1.3.zip` | Served locally to the sites (section 9) | **[Verified]** layout; downloading **[Untested]** |

Python, Composer, Docker and a LocalWP site are not needed for Track A.

### 4.2 Track B: manual checks on LocalWP

| Tool | Notes | Label |
|---|---|---|
| LocalWP (Local by WP Engine) | With at least one site that meets section 5.1 | **[Verified]**: the owner develops on Local |
| Git, Node.js 22, npm | To clone and build the two checkouts | **[Verified]** |
| A browser | Chrome recommended: the recorded browser checks used Chrome | **[Verified]** |
| A Pro licence key | Only to insert Pro patterns | **[Developer required]** |
| WP-CLI | Not needed. wp-admin covers every step. Local's site shell has WP-CLI if you prefer it | **[Optional]** |
| PHP CLI, `cwebp` | Only for the authoring tools (section 11.6) | **[Optional]** |

### 4.3 Other local environments
- Any other local WordPress stack (wp-env, DDEV, MAMP, Laravel Valet, Docker) can host Track B in principle, if it meets section 5.1. **[Untested]**
- WordPress Playground is used by Track A only. It is not recommended for manual testing: with every Lite and Pro block on, the Playground editor loads so many assets that Chrome stops loading scripts (a known harness limit, [compatibility.md](compatibility.md)).

---

## 5. Choose the LocalWP site (Track B)

Reuse an existing site whenever one qualifies. Create a new one only when none does (section 5.4).

### 5.1 Requirements for a reusable site

| Requirement | Why | How it is checked | Must or should |
|---|---|---|---|
| WordPress 6.8 or later | The plugins' minimum (`Requires at least: 6.8`) | Inspection (section 5.2) | **Must** |
| PHP 7.4 or later | The plugins' minimum (`Requires PHP: 7.4`) | Inspection | **Must** |
| Single site | The role expectations are for single sites; multisite is untested | Inspection | **Must** |
| A development site whose content can take test pages, test users and a settings change | Track B creates them; section 12 removes them | The user confirms | **Must** |
| No `wpmozo-blocks-and-addons` or `wpmozo-blocks-and-addons-pro` folder yet, or the user resolves them (section 5.3) | The checkouts need the exact folder names | Inspection | **Must** |
| It runs, and its URL matches **Settings → General** | The browser and the checks use that URL | Section 8.2 | **Must** |
| Default theme (Twenty Twenty-Five) active | The patterns were designed and gated on it. Other themes work, but look different (untested) | Section 8.2 | Should |
| Few other plugins, none that blocks the REST API or changes the editor | Other plugins were never tested with the library | The user checks the Plugins screen | Should |
| About 1.3 GB of free disk space | The two checkouts' `node_modules` | `df -h` | Should |

- **No version changes.** Don't change the WordPress or PHP version of a reused site.
  - Any WordPress from 6.8 and PHP from 7.4 is fine for manual testing. Track A covers WordPress 6.8.11 / PHP 7.4 and 7.1.3 / PHP 8.2 on its own.
  - Only the authoring tools need WordPress 6.8.x ([production-pattern-authoring.md](production-pattern-authoring.md) section 9.1). Use a separate site for authoring; never downgrade a site that has content.
- **WooCommerce** is not needed. Pro's `woo-*` blocks register only when it is active.

### 5.2 Inspect the LocalWP sites (read-only)
This lists every Local site from Local's own files: `sites.json` and `site-statuses.json` in `~/Library/Application Support/Local/`.
- It reads each site's `wp-includes/version.php` and `wp-config.php`.
- For the two plugin folders, if they exist, it runs a read-only `git status` (with `--no-optional-locks`, so Git writes nothing) or reads the plugin's version header.
- It changes nothing.

```bash
node - <<'EOF'
const fs = require( 'fs' );
const os = require( 'os' );
const path = require( 'path' );
const { execFileSync } = require( 'child_process' );
const local = path.join( os.homedir(), 'Library/Application Support/Local' );
const read = ( file ) => JSON.parse( fs.readFileSync( path.join( local, file ), 'utf8' ) );
const sites = read( 'sites.json' );
let statuses = {};
try { statuses = read( 'site-statuses.json' ); } catch ( e ) {}
for ( const [ id, site ] of Object.entries( sites ) ) {
	const pub = path.join( site.path.replace( /^~/, os.homedir() ), 'app', 'public' );
	let wp = 'unknown';
	try { wp = fs.readFileSync( path.join( pub, 'wp-includes/version.php' ), 'utf8' ).match( /wp_version\s*=\s*\W([0-9][0-9.]*)/ )[ 1 ]; } catch ( e ) {}
	let kind = site.multiSite ? 'multisite (' + site.multiSite + ')' : 'single site';
	try { if ( /MULTISITE/.test( fs.readFileSync( path.join( pub, 'wp-config.php' ), 'utf8' ) ) ) { kind += ', wp-config.php mentions MULTISITE'; } } catch ( e ) {}
	const php = site.services && site.services.php ? site.services.php.version : 'unknown';
	console.log( '\n' + site.name + ' | ' + ( statuses[ id ] || 'status unknown' ) + ' | WordPress ' + wp + ' | PHP ' + php + ' | ' + kind + ' | http://' + site.domain );
	console.log( '  folder: ' + pub );
	const plugins = path.join( pub, 'wp-content', 'plugins' );
	const names = [ 'wpmozo-blocks-and-addons', 'wpmozo-blocks-and-addons-pro' ].filter( ( n ) => fs.existsSync( path.join( plugins, n ) ) );
	if ( ! names.length ) { console.log( '  no wpmozo-blocks-and-addons or wpmozo-blocks-and-addons-pro folder' ); }
	for ( const name of names ) {
		const dir = path.join( plugins, name );
		if ( fs.existsSync( path.join( dir, '.git' ) ) ) {
			const lines = execFileSync( 'git', [ '--no-optional-locks', '-C', dir, 'status', '--short', '--branch' ], { encoding: 'utf8' } ).trim().split( '\n' );
			console.log( '  ' + name + ': Git checkout, ' + lines[ 0 ].replace( /^## /, '' ) + ', ' + ( lines.length - 1 ) + ' changed or untracked files' );
		} else {
			let version = 'unknown';
			try { version = fs.readFileSync( path.join( dir, name + '.php' ), 'utf8' ).match( /Version:\s*(\S+)/ )[ 1 ]; } catch ( e ) {}
			console.log( '  ' + name + ': installed copy (not a Git checkout), version ' + version );
		}
	}
}
EOF
```

- **[Verified] 2026-11-13** on the owner's Mac, with Local's files as they are there. Local's site list is Local's internal data, not a documented interface, so another Local version may differ. If the command fails, ask the user to read the same facts from Local's window.
- **The URL shown** is `http://` plus the site's domain. When Local uses its localhost router mode, or a site uses HTTPS, the real URL differs: take it from Local's site overview and confirm it with section 8.2.
- **A halted site** must be started in Local before section 8.2 and Track B.

### 5.3 When the chosen site already has the Lite or Pro folder
The test checkouts need the exact names `wpmozo-blocks-and-addons` and `wpmozo-blocks-and-addons-pro`. Claude doesn't touch existing folders. The user chooses one option:

| Option | When | What happens | Label |
|---|---|---|---|
| A. Pick another existing site | Another site meets section 5.1 and has neither folder | Nothing changes on this site. **Preferred** | **[Untested]** |
| B. Use the existing checkouts | They are clean Git checkouts of the two repositories (inspection: no changed files, nothing ahead of their upstream) | The user switches them to `dev/sunil` and `release/pattern-lib` themself, or tells Claude to do exactly that. They switch back after testing | **[Untested]** |
| C. Move the existing folders aside | Installed copies, for example Lite from WordPress.org, or checkouts the user wants to keep as they are | With the user's approval: deactivate them in wp-admin and move both folders to a backup folder outside `wp-content/plugins` (example below). Clone the test checkouts. Section 12 moves them back | **[Untested]** |
| D. A new site | No existing site fits | Section 5.4 | **[Optional] [Untested]** |

Option C move, after the user approves, from the site's `wp-content` folder (`<site folder>/app/public/wp-content`):
```bash
mkdir ../../wpmozo-backup && mv plugins/wpmozo-blocks-and-addons plugins/wpmozo-blocks-and-addons-pro ../../wpmozo-backup/
```
- This puts them in `<site folder>/app/wpmozo-backup/`, outside the web root (`app/public`).
- `mkdir` without `-p` stops if the backup folder already exists. Then choose another name; never overwrite.
- Move only folders that exist; check with `ls -d plugins/wpmozo-blocks-and-addons plugins/wpmozo-blocks-and-addons-pro` first.

### 5.4 A new site (only if needed)
**[Optional] [Untested]** In Local, create a site, for example `wpmozo-pl-test`.
- Use Local's defaults: its current WordPress, and PHP 8.2 if offered.
- Keep the default theme.
- The user types the administrator name and password; Claude never sees them.

Local keeps the new site in `$HOME/Local Sites/<site-name>/app/public/` unless you choose another folder.

---

## 6. Get the code: clone and build

**Where:**
- With Track B: the chosen site's plugins folder, `<site folder>/app/public/wp-content/plugins` (section 5.2 shows each site's folder).
- With Track A only: any folder, with both checkouts side by side.

**[Untested]** as written: standard Git and npm commands; the branches and lockfiles were checked on 2026-11-13.

1. **Check that neither folder exists.** Never clone over an existing folder:
   ```bash
   ls -d wpmozo-blocks-and-addons wpmozo-blocks-and-addons-pro
   ```
   **Expected:** "No such file or directory" for both. Otherwise go back to section 5.3.
2. **Clone:**
   ```bash
   git clone --branch dev/sunil https://github.com/elicus/wpmozo-blocks-and-addons.git wpmozo-blocks-and-addons
   ```
   ```bash
   git clone --branch release/pattern-lib https://github.com/elicus/wpmozo-blocks-and-addons-pro.git wpmozo-blocks-and-addons-pro
   ```
   Pro is private. If Git asks for credentials, run that clone in your own terminal and sign in there.
3. **Install the exact dependency versions from the tracked lockfiles, then build:**
   ```bash
   cd wpmozo-blocks-and-addons && npm ci && npm run build && cd ..
   ```
   ```bash
   cd wpmozo-blocks-and-addons-pro && npm ci && npm run build && cd ..
   ```
   - `npm run build` (`wp-scripts build --blocks-manifest`) is **[Verified]**: it is the build every test run uses.
   - `npm ci` on a fresh clone is **[Untested]**. Both lockfiles match their `package.json` (`npm ls --package-lock-only`, 2026-11-13). Don't use `npm install`: it can rewrite the tracked `package-lock.json`.
   - Track A alone needs only `npm ci`; the build is for Track B.

**Expected:**
- `build/blocks-manifest.php` exists in both folders.
- `git -C wpmozo-blocks-and-addons status --short --branch` prints only `## dev/sunil...origin/dev/sunil`, and Pro prints only `## release/pattern-lib...origin/release/pattern-lib`. **[Verified]** that `build/` and `node_modules/` are ignored.

---

## 7. Activate the plugins, and the Pro licence (Track B)

1. **Order: Lite first, then Pro. [Verified]**
   - Pro declares `Requires plugins: wpmozo-blocks-and-addons`.
   - Without Lite, Pro does nothing and shows a notice (`matrix` suite).

   In wp-admin, go to **Plugins** and activate **WPMozo Blocks and Addons**, then **WPMozo Blocks and Addons Pro**.

   **Expected:**
   - both plugins are active;
   - no notice from Pro about Lite;
   - a **Blocks and Addons** menu in wp-admin.
2. **Record the starting state** for cleanup: open **Blocks and Addons → General** and note whether the **Pattern Library** switch is on. It is on by default.
3. **Pro licence. [Developer required]**
   - Pro patterns are locked until a Pro licence is activated on the site. The owner provides a key for development.
   - You enter it yourself in the licence section of the **Blocks and Addons** settings page, which Pro adds. Activation contacts the licence server, so it needs internet access.
   - Without a licence you can still test everything else. The locked state is also a test (section 11.3).
4. **[Optional]** Turn on the debug log to see PHP notices in `wp-content/debug.log`. Add these three lines to the site's `wp-config.php`, above the line `/* That's all, stop editing! */`, with the user's approval; section 12 removes them:
   ```php
   define( 'WP_DEBUG', true );
   define( 'WP_DEBUG_LOG', true );
   define( 'WP_DEBUG_DISPLAY', false );
   ```
   If `wp-config.php` already defines any of them, change nothing and use the existing setting. **[Untested]**

---

## 8. The local settings file and the site URL

### 8.1 The settings file
Machine-specific settings live in **one Git-ignored file in the Lite checkout**: `tools/pattern-library/.env`. The tracked template next to it is `tools/pattern-library/.env.example`. Neither plugin reads this file.

1. **Create it from the template**, without overwriting an existing one. From the Lite checkout:
   ```bash
   test -e tools/pattern-library/.env || cp tools/pattern-library/.env.example tools/pattern-library/.env
   ```
2. **Edit the values.** Use shell syntax: `NAME="value"`, quoted, with `$HOME` instead of `~`.

   | Setting | Track | Value | Default when left out |
   |---|---|---|---|
   | `WPMOZO_PLAYGROUND_CLI` | A (required) | The `wp-playground-cli` executable from section 9 | None; the suites stop |
   | `WPMOZO_SITE_URL` | B | The chosen site's URL, no trailing slash (section 8.2). Replace the template's `http://change-me.local` | None |
   | `WPMOZO_AUTH_STATE` | Authoring tools only | A browser-state file outside both repositories | None |
   | `WPMOZO_WP_ZIPS` | A | The folder with `<version>.zip` | `$HOME/.wordpress-playground` |
   | `WPMOZO_TEST_CACHE` | A | Cache folder. **No spaces in the path** | `$HOME/.cache/wpmozo-pattern-library-tests` |
   | `WPMOZO_PRO_REPO` | A | The Pro checkout | The `wpmozo-blocks-and-addons-pro` folder next to the Lite checkout |

   With the layout in this guide, only `WPMOZO_SITE_URL` needs changing. Change `WPMOZO_PLAYGROUND_CLI` too only if the CLI is installed somewhere else.
3. **Load it in every new terminal**, from the Lite checkout:
   ```bash
   set -a; . tools/pattern-library/.env; set +a
   ```
   **[Verified] 2026-11-13:**
   - settings loaded this way, then `php-parse` (2/2) and `rest` (17/17) passed;
   - the template loads without errors in zsh and bash;
   - a checkout path containing a space (Local's `Local Sites` folder) works.
4. **Check that Git ignores it:**
   ```bash
   git check-ignore -v tools/pattern-library/.env
   ```
   **Expected:** `.gitignore:30:.env	tools/pattern-library/.env`. **[Verified]**: the existing `.env` rule applies in every folder.

**Never** put a password, licence key, cookie or token in this file.

### 8.2 Find and check the site URL
1. **Take the URL from Local's site overview**, as you would open the site in a browser.
   - Usually `http://<site-domain>`.
   - In Local's localhost router mode, `http://localhost:<port>`.
   - With HTTPS on, `https://…`.
2. **Put it in `.env` as `WPMOZO_SITE_URL`**, with no trailing slash, and load the settings again.
3. **Check it.** Read-only, against the running site. **[Verified] 2026-11-13** on the owner's Local site (HTTP, site domain mode).
   ```bash
   curl -s -o /dev/null -w '%{http_code}\n' "$WPMOZO_SITE_URL/wp-login.php"
   ```
   **Expected:** `200`. Anything else means the site is halted or the URL is wrong.
   ```bash
   curl -sI "$WPMOZO_SITE_URL/wp-admin/" | grep -i '^location:'
   ```
   **Expected:** a redirect to `$WPMOZO_SITE_URL/wp-login.php?…`. A different host or scheme means WordPress's own URL (**Settings → General**) differs from `WPMOZO_SITE_URL`: use WordPress's.
   ```bash
   curl -s "$WPMOZO_SITE_URL/" | grep -oE 'wp-content/themes/[a-z0-9_-]+' | head -1
   ```
   **Expected:** `wp-content/themes/twentytwentyfive` for the default theme.

---

## 9. Track A tooling: Playground CLI and WordPress zips

1. **The Playground CLI, outside both repositories. [Untested]** as written. The tests README gives the same `npm install`; the owner's copy came from an earlier install of the same version. About 570 MB.
   ```bash
   mkdir -p "$HOME/.wpmozo-tools/playground" && cd "$HOME/.wpmozo-tools/playground" && npm install @wp-playground/cli@3.1.58
   ```
   **Expected:** `$HOME/.wpmozo-tools/playground/node_modules/.bin/wp-playground-cli` exists. That is the default `WPMOZO_PLAYGROUND_CLI` in `.env.example`.
2. **WordPress release zips. [Untested]** as written.
   - The suites serve WordPress from local zips named `<version>.zip`, so the sites never go online.
   - The owner's zips came from Playground's own download cache. They have the layout of the official release zips (a top-level `wordpress/` folder; checked 2026-11-13).
   - Each download command skips a zip that already exists:
   ```bash
   mkdir -p "$HOME/.wordpress-playground"
   ```
   ```bash
   test -e "$HOME/.wordpress-playground/6.8.11.zip" || curl -fL -o "$HOME/.wordpress-playground/6.8.11.zip" https://wordpress.org/wordpress-6.8.11.zip
   ```
   ```bash
   test -e "$HOME/.wordpress-playground/7.1.3.zip" || curl -fL -o "$HOME/.wordpress-playground/7.1.3.zip" https://wordpress.org/wordpress-7.1.3.zip
   ```
   **Expected:** two zips, about 29 MB (6.8.11) and 37 MB (7.1.3).

---

## 10. Track A: run the automated suites

The suites build copies of both plugins and start offline WordPress Playground sites on 127.0.0.1. They never change the repositories or any LocalWP site.
- `worktree`, the default, copies tracked and untracked files, so uncommitted changes are tested too.
- Results go to `$WPMOZO_TEST_CACHE/results/<suite>-<time>.json`, and site logs to `$WPMOZO_TEST_CACHE/runs/`.
- Full reference: [tools/pattern-library/tests/README.md](../../tools/pattern-library/tests/README.md).

From the Lite checkout, after loading the settings (section 8.1):

1. **First check. [Verified]** 2026-11-13 on the owner's Mac.
   ```bash
   node tools/pattern-library/tests/run.cjs php-parse
   ```
   **Expected:** `php-parse: 2/2 passed`, in about 25 s.
   ```bash
   node tools/pattern-library/tests/run.cjs rest
   ```
   **Expected:** `rest: 17/17 passed`, in about 75 s.
2. **The full set.** Run browser suites one at a time: several Playground sites and Chrome at once can slow the editor enough to stop the gate.
   ```bash
   node tools/pattern-library/tests/run.cjs php-parse robustness rest contract editor launcher wp-editor team-grid
   ```
   ```bash
   node tools/pattern-library/tests/run.cjs upgrade --mutation=1
   ```
   ```bash
   node tools/pattern-library/tests/run.cjs matrix --oldest-lite=zip:origin/release/1.8.0
   ```
   ```bash
   node tools/pattern-library/tests/run.cjs php-parse robustness rest contract editor launcher wp-editor team-grid --wp=6.8.11 --php=7.4
   ```
   - **`matrix` in a fresh clone: [Untested].**
     - Its default `zip:release/1.8.0` needs a local branch named `release/1.8.0`. A fresh clone has only `origin/release/1.8.0`, which the option above names.
     - Don't create a branch to work around it.
     - On the owner's machine the default works ([testing.md](testing.md)).

**Expected results.** Recorded on the owner's Mac on 2026-11-11 ([testing.md](testing.md), final validation); `launcher` and a re-run of the browser suites on 2026-11-16 and 2026-11-17, after the header-icon and Options menu changes ([testing.md](testing.md), PL-D31 and PL-D32).

| Suite | Checks | Time |
|---|---|---|
| `php-parse` | 2/2 | ~1 min |
| `robustness` | 26/26 | ~5 min |
| `rest` | 17/17 | ~4 min |
| `contract` | 26/26 | ~4 min |
| `editor` | 10/10 | ~10 min |
| `launcher` | 23/23 | ~2 min |
| `wp-editor` | **14/17**: the 3 failures are the known block issue B-R6-2. Call To Action imports `__experimentalStack`, which WordPress doesn't have. **ON HOLD; not a setup problem** | ~1 min |
| `team-grid` | 8/8 | — |
| `matrix` | 109/109 | ~20 min |
| `upgrade --mutation=1` | 30/30 | ~15 min |

- The results were the same on WordPress 7.1.3 / PHP 8.2 and 6.8.11 / PHP 7.4.
- Times are the tests README's estimates and vary by machine (`rest` took 74 s on 2026-11-13).
- Any other failure is a finding: report it (section 13) and don't change the code or the test.

---

## 11. Track B: manual checks on the LocalWP site

**[Untested]** as a manual procedure on another developer's site. Each expected result comes from the recorded automated runs ([testing.md](testing.md): LPL-T, the roles and licence tests, the final validation) and the UI code ([editor-ui.md](editor-ui.md)).

The current patterns are the four pilots:

| Source | Slug | Title | Category | Content image |
|---|---|---|---|---|
| Lite (free) | `hero-product-launch` | Product launch hero | Hero | `media/hero-dashboard.1.webp` |
| Lite (free) | `pricing-three-plans` | Three pricing plans | Pricing | — |
| Pro | `about-process-timeline` | Four-step process | About | — |
| Pro | `features-cards-results` | Feature cards with results | Features | `media/tour-plan.1.webp`, `tour-collaborate.1.webp`, `tour-analyze.1.webp` |

They are temporary designs awaiting the owner's review. Later patterns replace them.

**Name everything you create**, so cleanup finds it (section 12):
- pages: titles starting with `WPMozo PL test`, for example `WPMozo PL test - free hero`;
- users: names starting with `wpmozo-test-`.

Keep a list of each page's and user's ID.

### 11.1 Command-line checks (Claude can run these)
With the settings loaded. **[Verified] 2026-11-13** on the owner's Local site.
```bash
curl -s -o /dev/null -w '%{http_code}\n' "$WPMOZO_SITE_URL/wp-content/plugins/wpmozo-blocks-and-addons/includes/library/previews/hero-product-launch.1.webp"
```
```bash
curl -s -o /dev/null -w '%{http_code}\n' "$WPMOZO_SITE_URL/wp-content/plugins/wpmozo-blocks-and-addons-pro/includes/library/media/tour-plan.1.webp"
```
```bash
curl -s "$WPMOZO_SITE_URL/wp-content/plugins/wpmozo-blocks-and-addons/includes/library/patterns/hero-product-launch/content.php" | wc -c
```
**Expected:**
- `200`, `200`: thumbnails and media are served from each plugin's own folder on this site's URL.
- `0`: pattern files return nothing when requested directly.

### 11.2 Catalog, preview and insertion (administrator)
1. **Blocks and Addons → General:** the **Pattern Library** switch is on.
2. Open **Pages → Add New** and title the page `WPMozo PL test - free hero`. There are three entry points:
   - **Pattern Library** in the editor's Options menu (⋮), the only library item there (PL-D32);
   - a pinned **Pattern Library** icon in the header, which opens the library window directly, with no sidebar (PL-D31);
   - a **Pattern Library** block in the inserter.
3. Open the library.
   **Expected:**
   - categories with counts on the left;
   - search, a Free/Pro filter, **Available only** and a sort;
   - the four pilots as cards with a thumbnail, title, category and, for Pro, a Pro badge.
4. Open the browser's developer tools (Network) and check the thumbnail URLs.
   **Expected:**
   - each URL starts with the site's URL, then `/wp-content/plugins/<plugin folder>/includes/library/previews/`;
   - no other host, and no failed image request.
5. **Preview** a free pattern.
   **Expected:**
   - a large image, the description, the category and the blocks used;
   - an **Insert** button.
6. **Insert** "Product launch hero".
   **Expected:**
   - the section appears with no "unexpected or invalid content" warning;
   - its image loads from `…/wpmozo-blocks-and-addons/includes/library/media/hero-dashboard.1.webp`.
7. **Publish, reload the editor, then view the page.**
   **Expected:**
   - every block is still valid;
   - the front end shows the section with its image;
   - no errors in the browser console.

### 11.3 Pro patterns and the licence
- **Without a licence.**
  **Expected:**
  - the two Pro cards show **Locked**;
  - their preview offers **Manage licence** and no **Insert**;
  - the free patterns are unaffected.
- **With a licence** (section 7). Use a page titled `WPMozo PL test - pro features`.
  **Expected:**
  - both Pro patterns can be inserted;
  - "Feature cards with results" loads its three images from `…/wpmozo-blocks-and-addons-pro/includes/library/media/`.

### 11.4 Permissions (roles)
**[Optional]** In **Users → Add New**, create one user per role:
- `wpmozo-test-editor` (Editor), `wpmozo-test-author` (Author), `wpmozo-test-contributor` (Contributor) and `wpmozo-test-subscriber` (Subscriber).
- Use emails on the reserved domain `example.com`, for example `wpmozo-test-editor@example.com`.
- Untick **Send the new user an email about their account**.
- Choose the passwords yourself and keep them out of every file.

Log in as each user in a private window.

| Role | Expected (single site) |
|---|---|
| Administrator, Editor | Every pattern available (Pro ones need the licence) |
| Author, Contributor | The two free pilots show **Unavailable** with "Your user role can’t save this pattern’s styling…": their WPMozo blocks save `<style>`, which needs `unfiltered_html` (policy D3). The two Pro pilots are available with the licence |
| Subscriber | No post editor, so no library |

### 11.5 The library switch
1. Turn the **Pattern Library** switch off and click **Save**.
   **Expected:**
   - no library entry points in the editor;
   - a saved **Pattern Library** block says "The Pattern Library isn’t available here…";
   - inserted content is unchanged.
2. Set the switch back to its starting state (section 7, step 2).

### 11.6 Authoring tools
**[Optional]** Only for creating or replacing patterns. Follow [production-pattern-authoring.md](production-pattern-authoring.md) section 9.
- It needs a WordPress 6.8.x site: use a separate site, never a downgraded reused one.
- It uses `WPMOZO_SITE_URL` and `WPMOZO_AUTH_STATE` from the same `.env`.
- Creating a logged-in browser state for `export.cjs` and `gate.cjs` is **[Untested]**. Until now the tools ran only on the owner's offline harness, which logs in on its own.

---

## 12. Cleanup after testing

**[Untested]** as a procedure; the wp-admin steps are standard WordPress. Track A leaves nothing on any site.

1. **Inserted patterns add nothing to the Media Library.** Their images are files in the plugin folders, so only the test pages and users need removing. **[Verified]**: media tokens resolve to plugin URLs (`asset_url()`).
2. **Test pages:**
   - In **Pages**, search for `WPMozo PL test`.
   - Compare the results with the list of IDs you kept.
   - Select only those pages and choose **Move to Trash**. The trash can be undone.
   - Empty the trash for those pages (**Delete Permanently**) only after the user confirms. That also removes their revisions.
3. **Test users:**
   - In **Users**, search for `wpmozo-test-`.
   - Delete only the users on your list.
   - If WordPress asks what to do with their content, choose **Attribute all content to** the user's own administrator account; nothing is lost.
   - Deleting users can't be undone, so confirm the list with the user first.
4. **Settings:**
   - The **Pattern Library** switch back to its starting state.
   - Remove the three `WP_DEBUG` lines if you added them (section 7, step 4).
5. **Licence:** whether to deactivate the development key after testing is the owner's decision. **[Developer required]**
6. **Plugins and folders:** only if the user wants the site back as it was.
   - Deactivate Pro, then Lite.
   - With approval, move the two test checkouts to a backup folder; don't delete them.
   - Option B: the user switches their checkouts back to their own branches.
   - Option C: move the folders from `app/wpmozo-backup/` back to `wp-content/plugins/` and reactivate them.
7. **Disk:** `$WPMOZO_TEST_CACHE` grows with every run (plugin copies and logs). Remove it only with approval and only when no suite is running. The Playground CLI and the zips can stay for later runs.

**WP-CLI alternative** (Local's site shell), **[Untested]**: list first, then act only on the confirmed IDs.
```bash
wp post list --post_type=page --post_status=any --fields=ID,post_title,post_status
```
```bash
wp post delete <page IDs>
```
```bash
wp user list --fields=ID,user_login,roles
```
```bash
wp user delete <user IDs> --reassign=<administrator ID>
```
- `wp post delete` without `--force` moves pages to the trash.
- Add `--force` only to delete permanently, after confirmation.

---

## 13. Reporting test results

Send the report to the owner. Don't commit it and don't edit `testing.md` or other documents: the owner decides what is recorded. Never include passwords, licence keys or cookies.

```text
WPMozo Pattern Library test report
Date:
Tester:
Machine: <OS and version>, Node <node -v>, npm <npm -v>, Chrome <version>
LocalWP site: <name>, reused or new, WordPress <version>, PHP <version>, theme <name>, other active plugins <list>, licence active: yes/no
Existing Lite/Pro folders on that site: none / option A, B or C (section 5.3)
Lite: dev/sunil @ <git -C <Lite> rev-parse --short HEAD>; Pro: release/pattern-lib @ <same for Pro>
Working trees clean (git status --short): Lite yes/no, Pro yes/no

Setup steps (section, result, any deviation from the guide; mark each [Untested] step that now worked or failed):
-

Track A, automated suites (suite, options, result N/M, duration, result file in $WPMOZO_TEST_CACHE/results/):
-

Track B, manual checks (11.1–11.5: pass/fail, what was seen):
-

Failures (exact message, steps to reproduce, screenshot, log path; known issue? e.g. B-R6-2):
-

Cleanup (section 12): pages trashed/deleted <IDs>, users deleted <IDs>, settings restored yes/no, folders restored yes/no/not needed:
-
```

---

## 14. Portability audit (2026-11-13)

What the audit found, so nobody needs to look again.

### 14.1 Resolved automatically: no setting needed. [Verified]
- **Plugin paths and URLs.**
  - Lite defines `WPMOZO_BNA_PLUGIN_DIR_PATH` and `WPMOZO_BNA_PLUGIN_DIR_URL` from `plugin_dir_path( __FILE__ )` and `plugin_dir_url( __FILE__ )`; Pro does the same with `WPMOZO_BNA_PRO_PLUGIN_DIR` and `WPMOZO_BNA_PRO_PLUGIN_URL`.
  - Each library source registers its `path` and `url` from those: Lite's library at `includes/library/`, Pro's in its own plugin.
- **Pattern assets.**
  - The asset resolver builds every thumbnail, preview and media URL from the source's `url`: `Mozo_Bna_Library_Resolver::asset_url()`, the only place a future CDN setting changes ([cdn-and-asset-requirements.md](cdn-and-asset-requirements.md)).
  - Pattern content holds tokens, never a site URL.
  - Section 11.1 confirms the URLs on a real Local site.
- **No hard-coded host or path in either plugin.** `git grep` finds no `localhost`, `127.0.0.1`, `.local`/`.test` URL, `wp-content/plugins/` path or absolute machine path in Lite's or Pro's `includes/` or main plugin file.
  - The only such strings are in `build-content.php`, which rejects them so they can't get into pattern content.
  - The test driver allows only loopback requests.
- **Tools.**
  - `export.cjs`, `gate.cjs`, `render-art.cjs` and `build-content.php` take the site URL and folders as arguments.
  - They load Playwright from Lite's own `node_modules` by a relative path.
  - The browser can reach only the given site's host.
- **Suites.**
  - `tests/lib/env.cjs` reads `WPMOZO_PLAYGROUND_CLI`, `WPMOZO_PRO_REPO`, `WPMOZO_WP_ZIPS` and `WPMOZO_TEST_CACHE`, with defaults under `$HOME` and the sibling Pro folder.
  - Sites get free loopback ports, so there is no port setting.

### 14.2 Machine-specific items: all documentation, no code
- **Lite tracked files:** no personal path, no local URL (`git grep`, 2026-11-13).
- **Lite [production-pattern-authoring.md](production-pattern-authoring.md):** uses the same `.env` settings, with no machine paths.
- **Pro (private repository), unchanged:**
  - `docs/pattern-library/handoff.md` ("How to re-run the harness" and the handover-note line) and `security.md` name the owner's offline harness and notes under the owner's home folder.
  - `CLAUDE.md` names the owner's Local site.
  - `.claude/` block QA reports contain the owner's local URLs.

  These are history and owner-only tools; another machine doesn't need them. The Pro handoff points here.
- **The owner's offline harness** (outside both repositories) is not needed. The repository suites replaced it (roadmap R5).

### 14.3 Gaps. Not changed in this task (no code was modified)

| # | Gap | Effect | Proposed change | Label |
|---|---|---|---|---|
| G1 | `matrix` defaults to `zip:release/1.8.0`, which needs a local branch | In a fresh clone `matrix` stops unless given `--oldest-lite=zip:origin/release/1.8.0` | In `tests/lib/copies.cjs`, try `origin/<ref>` when `<ref>` doesn't resolve, or default to `zip:origin/release/1.8.0` | **[Developer required]** (optional; the option works around it) |
| G2 | Nothing loads `.env` automatically | Each new terminal needs the `set -a; . …; set +a` line | `tests/lib/env.cjs` could load `tools/pattern-library/.env` when it exists. Node's `process.loadEnvFile()` doesn't expand `$HOME`, so the loader would have to, or the file would use absolute paths. `export.cjs` and `gate.cjs` could default to `WPMOZO_SITE_URL` and `WPMOZO_AUTH_STATE` | **[Developer required]** (optional convenience) |
| G3 | The site inspection reads Local's internal files | Another Local version or operating system may store sites differently; the command then fails and the user reads the facts from Local's window | None needed; keep the manual fallback | **[Untested]** beyond the owner's Mac |
| G4 | Authoring login is untested | `export.cjs` and `gate.cjs` with `--storage-state` on a normal site never ran | Run once (section 11.6) and record it | **[Untested]** |
| G5 | Windows and Linux untested | The suites use symbolic links and POSIX tools | Try on the target system; on Windows, WSL is the likely route | **[Untested]** |

---

## 15. Troubleshooting

| Symptom | Cause and fix |
|---|---|
| The inspection command fails to read `sites.json` | Another Local version or operating system. Read the sites from Local's window instead (G3) |
| `curl … /wp-login.php` prints `000` | The site is halted (start it in Local) or `WPMOZO_SITE_URL` is wrong (section 8.2) |
| The `/wp-admin/` redirect names another host or scheme | Use the URL WordPress redirects to (its **Settings → General** URL) as `WPMOZO_SITE_URL` |
| `Set WPMOZO_PLAYGROUND_CLI to the wp-playground-cli executable (see README.md).` | The settings aren't loaded in this terminal, or the path is wrong. Run the `set -a; . tools/pattern-library/.env; set +a` line from the Lite checkout, then `ls "$WPMOZO_PLAYGROUND_CLI"` |
| `No WordPress zip at …/<version>.zip (set WPMOZO_WP_ZIPS).` | The zip is missing (section 9, step 2), or `--wp=` names a version you don't have |
| `Site did not start (<folder>)` | Read `playground.log` and the fatal errors in the folder named in the message (`$WPMOZO_TEST_CACHE/runs/…`). Report it if it isn't a setup problem |
| `matrix` fails on `git … rev-parse --verify release/1.8.0:…` | Fresh clone: pass `--oldest-lite=zip:origin/release/1.8.0` (G1). Don't create branches |
| A suite fails on an old commit (`b91a5ec`, `ef1909d`, `85390bb`) | The clone is shallow or single-branch. Make a full clone in a new folder |
| `Cannot find module …/node_modules/playwright` | `npm ci` wasn't run in the Lite checkout |
| Playwright says the `chrome` distribution is not found | Install Google Chrome. The tools never download a browser |
| `cwebp: command not found` | Only previews and `render-art.cjs` need it: `brew install webp` |
| `npm ci` says the lockfile doesn't match `package.json` | Stop and report. Don't run `npm install`: it rewrites the tracked lockfile |
| `git clone` says the destination already exists | An existing Lite or Pro folder: go back to section 5.3. Never delete or overwrite it |
| Pro can't be activated, or shows a notice about Lite | Activate Lite first. The Lite folder must be exactly `wpmozo-blocks-and-addons` |
| No WPMozo blocks, or no library in the editor | `npm run build` wasn't run (`build/` is not tracked); the Pattern Library switch is off; or the user lacks `edit_posts` |
| Pro patterns show **Locked** | No Pro licence activated. Expected without one (section 7) |
| Free pilots show **Unavailable** for an Author or Contributor | Expected (policy D3, section 11.4) |
| Thumbnails or images don't load | Run section 11.1. **Settings → General** must contain the URL you browse with |
| A check fails only on the reused site | Note the site's other active plugins and theme in the report. Try again with other plugins deactivated only if the user approves |
| A browser suite times out | Run browser suites one at a time, with no other Playground site running |
| Errors with a cache path that contains spaces | Set `WPMOZO_TEST_CACHE` to a path without spaces |
| `wp-editor` 14/17 | Expected: block issue B-R6-2, ON HOLD ([known-issues.md](known-issues.md)) |

---

## 16. Related documents
- [PROJECT_CONTEXT.md](PROJECT_CONTEXT.md): the Pattern Library overview and rules.
- [handoff.md](handoff.md): current state and next steps.
- [testing.md](testing.md): every recorded result.
- [tools/pattern-library/tests/README.md](../../tools/pattern-library/tests/README.md): suite reference.
- [production-pattern-authoring.md](production-pattern-authoring.md): creating and replacing patterns.
- [known-issues.md](known-issues.md): known issues, including the block issues on hold.
- Pro: `docs/pattern-library/PROJECT_CONTEXT.md` and `handoff.md` in the Pro repository.
