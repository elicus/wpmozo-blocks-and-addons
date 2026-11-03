/**
 * Unit tests for catalog search, filter and sort.
 */
import { normalise, score, compareVersions, filterPatterns } from '../search';

const pattern = ( id, extra = {} ) => ( {
	id,
	title: id,
	description: '',
	category: 'hero',
	tags: [],
	keywords: [],
	access: 'free',
	since: '1.10.0',
	order: 100,
	availability: { state: 'available', reasons: [] },
	...extra,
} );

describe( 'normalise', () => {
	it( 'lowercases, trims and strips accents', () => {
		expect( normalise( '  Café Élan ' ) ).toBe( 'cafe elan' );
		expect( normalise( undefined ) ).toBe( '' );
	} );
} );

describe( 'score', () => {
	const item = pattern( 'x', {
		title: 'Pricing table',
		keywords: [ 'plans' ],
		tags: [ 'dark' ],
		description: 'Three columns',
		category: 'pricing',
	} );
	it( 'ranks title prefix above contains, keywords, category and description', () => {
		expect( score( item, [ 'pricing' ] ) ).toBe( 8 );
		expect( score( item, [ 'table' ] ) ).toBe( 6 );
		expect( score( item, [ 'plans' ] ) ).toBe( 4 );
		expect( score( item, [ 'dark' ] ) ).toBe( 4 );
		expect( score( item, [ 'columns' ] ) ).toBe( 1 );
		expect( score( item, [ 'cost' ], { pricing: 'Pricing & cost' } ) ).toBe(
			3
		);
	} );
	it( 'needs every word to match', () => {
		expect( score( item, [ 'pricing', 'missing' ] ) ).toBe( 0 );
		expect( score( item, [] ) ).toBe( 1 );
	} );
} );

describe( 'compareVersions', () => {
	it( 'compares numerically', () => {
		expect( compareVersions( '1.10.0', '1.9.0' ) ).toBeGreaterThan( 0 );
		expect( compareVersions( '1.9', '1.9.0' ) ).toBe( 0 );
		expect( compareVersions( '1.2.0', '1.10.0' ) ).toBeLessThan( 0 );
	} );
} );

describe( 'filterPatterns', () => {
	const items = [
		pattern( 'a', { title: 'Alpha hero', order: 2, since: '1.9.0' } ),
		pattern( 'b', {
			title: 'Beta pricing',
			category: 'pricing',
			access: 'pro',
			order: 1,
			since: '1.11.0',
		} ),
		pattern( 'c', {
			title: 'Gamma hero',
			order: 3,
			availability: { state: 'locked', reasons: [ 'license_inactive' ] },
		} ),
	];
	const ids = ( list ) => list.map( ( item ) => item.id );

	it( 'sorts by recommended order, newest and title', () => {
		expect(
			ids( filterPatterns( items, { sort: 'recommended' } ) )
		).toEqual( [ 'b', 'a', 'c' ] );
		expect( ids( filterPatterns( items, { sort: 'newest' } ) ) ).toEqual( [
			'b',
			'c',
			'a',
		] );
		expect( ids( filterPatterns( items, { sort: 'title' } ) ) ).toEqual( [
			'a',
			'b',
			'c',
		] );
	} );
	it( 'filters by source, category and availability', () => {
		expect( ids( filterPatterns( items, { source: 'pro' } ) ) ).toEqual( [
			'b',
		] );
		expect(
			ids( filterPatterns( items, { source: 'free', sort: 'title' } ) )
		).toEqual( [ 'a', 'c' ] );
		expect(
			ids( filterPatterns( items, { category: 'pricing' } ) )
		).toEqual( [ 'b' ] );
		expect(
			ids(
				filterPatterns( items, { availableOnly: true, sort: 'title' } )
			)
		).toEqual( [ 'a', 'b' ] );
	} );
	it( 'orders search results by relevance', () => {
		expect( ids( filterPatterns( items, { query: 'hero' } ) ) ).toEqual( [
			'a',
			'c',
		] );
		expect( ids( filterPatterns( items, { query: 'gam' } ) ) ).toEqual( [
			'c',
		] );
		expect( ids( filterPatterns( items, { query: 'nothing' } ) ) ).toEqual(
			[]
		);
	} );
} );
