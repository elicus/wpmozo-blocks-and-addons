import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {

	const { ID, className } = attributes;

	// Only add ID attribute if it exists.
	const blockProps = useBlockProps.save( {
		className: className,
		...( ID ? { id: `block-${ ID }` } : {} ),
	} );


	return (<>
		{attributes.images_data && (
			<>
				{/*Only output <style> if ID exists.*/}
				{ ( ID && '' !== ID ) && (
					<style>{ generateDynamicStyle( { attributes } ) }</style>
				) }

				<div {...blockProps}>
					<div className="wpmozo_wavy_gallery_wrapper">
						<div className="wpmozo_wavy_gallery_items">
							<div className="wpmozo_wavy_gallery_items">
								{attributes.images_data && attributes.images_data.length > 0 && (
									attributes.images_data.map((image, idx) => (
										<div className="wpmozo_wavy_gallery_item">
											<img className={`wpmozo_wavy_gallery_image`} src={image.url}
												 alt={image.alt || ''}/>
										</div>
									))
								)}
							</div>
						</div>
					</div>
				</div>
			</>
		)}
	</>);
}
