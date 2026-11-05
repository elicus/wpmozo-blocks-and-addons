/**
 * Check results: printed as they happen and written as JSON to the run's log folder.
 */
/* eslint-disable no-console -- A command-line tool reports on the console. */
const fs = require( 'fs' );
const path = require( 'path' );

class Report {
	constructor( suite ) {
		this.suite = suite;
		this.results = [];
		this.context = {};
	}

	check( name, ok, detail ) {
		this.results.push( { name, ok: !! ok, detail } );
		const extra =
			detail === undefined
				? ''
				: ' ' + JSON.stringify( detail ).slice( 0, 400 );
		console.log(
			`${ ok ? 'PASS' : 'FAIL' } ${ name }${ ok ? '' : extra }`
		);
		return !! ok;
	}

	note( text ) {
		console.log( `  ${ text }` );
	}

	get failed() {
		return this.results.filter( ( r ) => ! r.ok );
	}

	write( folder ) {
		fs.mkdirSync( folder, { recursive: true } );
		const file = path.join(
			folder,
			`${ this.suite }-${ new Date()
				.toISOString()
				.replace( /[:.]/g, '-' ) }.json`
		);
		fs.writeFileSync(
			file,
			JSON.stringify(
				{
					suite: this.suite,
					context: this.context,
					results: this.results,
				},
				null,
				2
			)
		);
		console.log(
			`${ this.suite }: ${ this.results.length - this.failed.length }/${
				this.results.length
			} passed. Log: ${ file }`
		);
		return file;
	}
}

module.exports = { Report };
