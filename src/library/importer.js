/**
 * Pattern importer (docs/pattern-library/import-workflow.md).
 *
 * Parse the delivered markup, refuse anything the editor can't use, rebuild every
 * block from its attributes with a fresh `ID`, and insert everything in one action.
 * Any problem means nothing is inserted.
 */
import { parse, createBlock, getBlockType } from '@wordpress/blocks';
import { parse as parseRaw } from '@wordpress/block-serialization-default-parser';
import { select, dispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

/**
 * Error with a list of problems, shown to the user.
 */
export class ImportError extends Error {
	constructor( problems ) {
		super( problems.join( ', ' ) );
		this.problems = problems;
	}
}

/**
 * Names of attributes in the raw block comments that the installed block type
 * doesn't know (content saved by a newer plugin version).
 *
 * @param {Array} rawBlocks Raw parsed blocks.
 * @param {Array} problems  Problems (mutated).
 */
function checkRawAttributes( rawBlocks, problems ) {
	for ( const raw of rawBlocks ) {
		if ( raw.blockName ) {
			const type = getBlockType( raw.blockName );
			if ( type ) {
				for ( const key of Object.keys( raw.attrs || {} ) ) {
					// Core-only helpers such as "lock" and "metadata" are known to every block.
					if (
						! type.attributes?.[ key ] &&
						! [
							'lock',
							'metadata',
							'className',
							'style',
							'align',
							'anchor',
						].includes( key )
					) {
						problems.push(
							`unknown_attribute:${ raw.blockName }.${ key }`
						);
					}
				}
			}
		}
		checkRawAttributes( raw.innerBlocks || [], problems );
	}
}

/**
 * Check parsed blocks recursively.
 *
 * @param {Array} blocks   Parsed blocks.
 * @param {Array} problems Problems (mutated).
 */
function checkBlocks( blocks, problems ) {
	for ( const block of blocks ) {
		if (
			! block.name ||
			block.name === 'core/missing' ||
			block.name === 'core/freeform'
		) {
			problems.push(
				`unsupported:${ block.attributes?.originalName || block.name }`
			);
		} else if ( ! getBlockType( block.name ) ) {
			problems.push( `missing:${ block.name }` );
		} else if ( block.isValid === false ) {
			problems.push( `invalid:${ block.name }` );
		}
		checkBlocks( block.innerBlocks || [], problems );
	}
}

/**
 * Rebuild a block from its attributes: regenerates saved HTML and client ids, and
 * presets `ID` (the WPMozo CSS scope) to the new client id so inserting the same
 * pattern twice, or into two posts, never shares an ID.
 *
 * @param {Object} block Parsed block.
 * @return {Object} New block.
 */
function rebuild( block ) {
	const built = createBlock(
		block.name,
		{ ...block.attributes },
		( block.innerBlocks || [] ).map( rebuild )
	);
	if ( getBlockType( block.name )?.attributes?.ID ) {
		built.attributes.ID = built.clientId;
	}
	return built;
}

/**
 * Turn delivered pattern markup into blocks ready to insert.
 *
 * @param {string} content Block markup.
 * @return {Array} Blocks.
 * @throws {ImportError} When anything can't be used.
 */
export function prepareBlocks( content ) {
	const problems = [];
	const blocks = parse( content ).filter(
		( block ) =>
			! (
				block.name === 'core/freeform' &&
				! block.originalContent?.trim()
			)
	);
	if ( ! blocks.length ) {
		problems.push( 'empty' );
	}
	checkBlocks( blocks, problems );
	checkRawAttributes( parseRaw( content ), problems );
	if ( problems.length ) {
		throw new ImportError( problems );
	}
	return blocks.map( rebuild );
}

/**
 * Where to insert: replace a placeholder block, after the selected block, or at the end.
 *
 * @param {?Object} target { replaceClientId } from the placeholder block, or null.
 * @return {Object} { rootClientId, index, replaceClientId }.
 */
export function resolveTarget( target ) {
	const editor = select( blockEditorStore );
	if (
		target?.replaceClientId &&
		editor.getBlock( target.replaceClientId )
	) {
		return {
			replaceClientId: target.replaceClientId,
			rootClientId:
				editor.getBlockRootClientId( target.replaceClientId ) ||
				undefined,
		};
	}
	const selected = editor.getSelectedBlockClientId();
	if ( selected ) {
		const rootClientId =
			editor.getBlockRootClientId( selected ) || undefined;
		return { rootClientId, index: editor.getBlockIndex( selected ) + 1 };
	}
	return { rootClientId: undefined, index: editor.getBlockCount() };
}

/**
 * Insert prepared blocks in one action.
 *
 * @param {Array}   blocks Blocks from prepareBlocks().
 * @param {?Object} target Target from the store.
 * @return {Array} Client ids of the inserted top-level blocks.
 * @throws {ImportError} When the blocks aren't allowed at the target.
 */
export function insertBlocks( blocks, target ) {
	const where = resolveTarget( target );
	const editor = select( blockEditorStore );
	const notAllowed = blocks
		.filter(
			( block ) =>
				! editor.canInsertBlockType( block.name, where.rootClientId )
		)
		.map( ( block ) => `not_allowed:${ block.name }` );
	if ( notAllowed.length ) {
		throw new ImportError( notAllowed );
	}
	const actions = dispatch( blockEditorStore );
	if ( where.replaceClientId ) {
		actions.replaceBlocks( where.replaceClientId, blocks );
	} else {
		actions.insertBlocks( blocks, where.index, where.rootClientId, true );
	}
	return blocks.map( ( block ) => block.clientId );
}
