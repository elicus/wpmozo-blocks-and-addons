import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

export default function save({ attributes }) {

	const { ID, className } = attributes;

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

    return (
		<>
			{/*Only output <style> if ID exists.*/}
			{(ID && '' !== ID) && (
				<style>{generateDynamicStyle({attributes})}</style>
			)}
			<div {...blockProps}>
				<InnerBlocks.Content/>
			</div>
		</>
	);
}

