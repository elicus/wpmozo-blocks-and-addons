import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';


export default function save({ attributes }) {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-split-image' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

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
					{...blockProps} id={`block-${ ID }`}
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
				<div {...blockProps} id={`block-${ ID }`}>
					<div className="wpmozo_split_image_wrapper" data-rows={`${attributes.rows}`}
						data-columns={`${attributes.columns}`}>
						{gridBoxes}
					</div>
				</div>
			)}
		</>
	);
}
