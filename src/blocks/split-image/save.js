import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";


export default function save({ attributes }) {

	const { ID, className } = attributes;

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );

	const number = attributes.rows * attributes.columns;
	const gridBoxes = Array.from({length: number}).map((_, i) => (
		<span key={i} className="wpmozo_split_image_portion"></span>
	));
	const url = attributes.blockLink ? attributes.blockLink : "";
	const target = attributes.blockLinkTarget || "";
	const linkTarget = target === 'external' ? '_blank' : '_self';

	return (
		<>
			{/* Only output <style> if ID exists. */}
			{ ( ID && '' !== ID ) && (
				<style>{ generateDynamicStyle( { attributes } ) }</style>
			) }

			{url ? (
				<a
					{...blockProps}
					href={url}
					target={linkTarget}
					rel={linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
				>
					<div className="wpmozo_split_image_wrapper" data-rows={`${attributes.rows}`}
						data-columns={`${attributes.columns}`}>
						{gridBoxes}
					</div>
				</a>
			) : (
				<div {...blockProps}>
					<div className="wpmozo_split_image_wrapper" data-rows={`${attributes.rows}`}
						data-columns={`${attributes.columns}`}>
						{gridBoxes}
					</div>
				</div>
			)}
		</>
	);
}
