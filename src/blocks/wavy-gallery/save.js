import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-wavy-gallery' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	return (<>
		{attributes.images_data && (
			<>
				{/*Only output <style> if ID exists.*/}
				{ ( ID && '' !== ID ) && (
					<style>{ generateDynamicStyle( { attributes } ) }</style>
				) }

				<div {...blockProps} id={`block-${ ID }`}>
					<div className="wpmozo_wavy_gallery_wrapper" data-show_overlay_title={`${attributes.showOverlayTitle}`}>
						<div className="wpmozo_wavy_gallery_items">
							<div className="wpmozo_wavy_gallery_items">
								{attributes.images_data && attributes.images_data.length > 0 && (
									attributes.images_data.map((image, idx) => (
										<div className="wpmozo_wavy_gallery_item">
											<img className={`wpmozo_wavy_gallery_image`} src={image.url}
												 alt={image.alt || ''} title={image.caption || ''}/>
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
