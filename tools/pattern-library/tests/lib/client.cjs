/**
 * HTTP client for a test site: keeps cookies (Playground logs the administrator in on the first
 * request), follows redirects, and calls the test driver.
 */
class Client {
	constructor( base ) {
		this.base = base;
		this.cookies = new Map();
	}

	async request( pathOrUrl, { method = 'GET', body, headers = {} } = {} ) {
		let url = new URL( pathOrUrl, this.base ).toString();
		for ( let hop = 0; hop < 10; hop++ ) {
			const response = await fetch( url, {
				method,
				body,
				redirect: 'manual',
				headers: {
					...headers,
					cookie: [ ...this.cookies ]
						.map( ( [ k, v ] ) => `${ k }=${ v }` )
						.join( '; ' ),
				},
			} );
			for ( const cookie of response.headers.getSetCookie() ) {
				const [ pair ] = cookie.split( ';' );
				const at = pair.indexOf( '=' );
				this.cookies.set(
					pair.slice( 0, at ).trim(),
					pair.slice( at + 1 )
				);
			}
			if (
				response.status >= 300 &&
				response.status < 400 &&
				response.headers.get( 'location' )
			) {
				url = new URL(
					response.headers.get( 'location' ),
					url
				).toString();
				method = 'GET';
				body = undefined;
				continue;
			}
			const text = await response.text();
			return {
				status: response.status,
				headers: response.headers,
				text,
				url,
			};
		}
		throw new Error( `Too many redirects for ${ pathOrUrl }` );
	}

	/** Log in as the administrator (Playground's automatic login). */
	async login() {
		this.cookies.delete( 'playground_auto_login_already_happened' );
		await this.request( '/' );
	}

	/**
	 * Call the test driver.
	 *
	 * @param {Object} params Query parameters (`wpmozo_test` is the action).
	 * @param {string} [body] Request body (POST).
	 * @return {Promise<Object>} Parsed JSON, or { _status, _text } when the answer isn't JSON.
	 */
	async driver( params, body ) {
		const query = new URLSearchParams( params ).toString();
		const response = await this.request(
			`/?${ query }`,
			body === undefined ? {} : { method: 'POST', body }
		);
		try {
			return JSON.parse( response.text );
		} catch ( e ) {
			return {
				_status: response.status,
				_text: response.text.slice( 0, 600 ),
			};
		}
	}

	/**
	 * A REST request made inside WordPress as a given user.
	 *
	 * @param {string} route   REST route.
	 * @param {string} [as]    'admin', a role name, or 'anon'.
	 * @param {Object} [extra] Extra driver parameters.
	 * @return {Promise<Object>} { status, headers, data }.
	 */
	rest( route, as = 'admin', extra = {} ) {
		return this.driver( { wpmozo_test: 'rest', route, as, ...extra } );
	}
}

module.exports = { Client };
