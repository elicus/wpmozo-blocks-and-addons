/**
 * Unit tests for the importer's checks and rebuild (docs/pattern-library/import-workflow.md).
 *
 * The WordPress packages are build-time externals (not installed), so they are mocked here
 * with just enough behaviour for prepareBlocks(): one parsed block per raw block.
 */
import { prepareBlocks } from '../importer';

const mockTypes = {};
const mockRaw = [];

jest.mock(
	'@wordpress/blocks',
	() => {
		let counter = 0;
		const toBlock = ( raw ) => ( {
			name: raw.blockName,
			attributes: { ...raw.attrs },
			isValid: raw.valid !== false,
			innerBlocks: ( raw.innerBlocks || [] ).map( toBlock ),
		} );
		return {
			parse: () => mockRaw.map( toBlock ),
			getBlockType: ( name ) => mockTypes[ name ],
			createBlock: ( name, attributes, innerBlocks ) => ( {
				name,
				attributes,
				innerBlocks,
				clientId: `client-${ ++counter }`,
			} ),
		};
	},
	{ virtual: true }
);
jest.mock(
	'@wordpress/block-serialization-default-parser',
	() => ( { parse: () => mockRaw } ),
	{ virtual: true }
);
jest.mock(
	'@wordpress/data',
	() => ( { select: jest.fn(), dispatch: jest.fn() } ),
	{
		virtual: true,
	}
);
jest.mock(
	'@wordpress/block-editor',
	() => ( { store: 'core/block-editor' } ),
	{
		virtual: true,
	}
);

const raw = ( blockName, attrs = {}, extra = {} ) => ( {
	blockName,
	attrs,
	innerBlocks: [],
	...extra,
} );

beforeEach( () => {
	mockRaw.length = 0;
	Object.keys( mockTypes ).forEach( ( key ) => delete mockTypes[ key ] );
	mockTypes[ 'core/heading' ] = {
		attributes: { content: {}, level: {} },
		// WordPress 7.1 keeps the old text-alignment attribute only in a deprecation.
		deprecated: [ { attributes: { content: {}, textAlign: {} } } ],
	};
	mockTypes[ 'wpmozo/fancy-heading' ] = {
		attributes: { ID: {}, mainHeading: {} },
	};
} );

describe( 'prepareBlocks', () => {
	test( 'accepts attributes the block type declares', () => {
		mockRaw.push( raw( 'core/heading', { content: 'Hi', level: 2 } ) );
		expect( prepareBlocks( 'markup' ) ).toHaveLength( 1 );
	} );

	test( 'accepts older attributes that a deprecation declares (authored on WordPress 6.8)', () => {
		mockRaw.push(
			raw( 'core/heading', { content: 'Hi', textAlign: 'center' } )
		);
		expect( () => prepareBlocks( 'markup' ) ).not.toThrow();
	} );

	test( 'refuses attributes that neither the type nor a deprecation declares', () => {
		mockRaw.push(
			raw( 'core/heading', { content: 'Hi', fromTheFuture: true } )
		);
		expect( () => prepareBlocks( 'markup' ) ).toThrow(
			'unknown_attribute:core/heading.fromTheFuture'
		);
	} );

	test( 'accepts core helper attributes on every block', () => {
		mockRaw.push(
			raw( 'core/heading', {
				content: 'Hi',
				lock: {},
				metadata: {},
				className: 'x',
				style: {},
				align: 'wide',
				anchor: 'a',
			} )
		);
		expect( () => prepareBlocks( 'markup' ) ).not.toThrow();
	} );

	test( 'refuses unregistered and invalid blocks', () => {
		mockRaw.push( raw( 'wpmozo/not-installed' ) );
		expect( () => prepareBlocks( 'markup' ) ).toThrow(
			'missing:wpmozo/not-installed'
		);
		mockRaw.length = 0;
		mockRaw.push(
			raw( 'core/heading', { content: 'Hi' }, { valid: false } )
		);
		expect( () => prepareBlocks( 'markup' ) ).toThrow(
			'invalid:core/heading'
		);
	} );

	test( 'rebuilds blocks and sets ID to the new client ID where the type has one', () => {
		mockRaw.push(
			raw( 'wpmozo/fancy-heading', { mainHeading: 'A', ID: 'old' } ),
			raw( 'wpmozo/fancy-heading', { mainHeading: 'B' } ),
			raw( 'core/heading', { content: 'Hi' } )
		);
		const blocks = prepareBlocks( 'markup' );
		expect( blocks[ 0 ].attributes.ID ).toBe( blocks[ 0 ].clientId );
		expect( blocks[ 1 ].attributes.ID ).toBe( blocks[ 1 ].clientId );
		expect( blocks[ 0 ].attributes.ID ).not.toBe(
			blocks[ 1 ].attributes.ID
		);
		expect( blocks[ 2 ].attributes.ID ).toBeUndefined();
	} );
} );
