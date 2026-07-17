import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {

	const { ID, className } = attributes,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-scrolling-zoom-gallery' ,
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
					<div className="wpmozo_scroll_zoom_gallery_scroller" data-start_opacity={attributes.onLoadVisibility}>
						<div className="wpmozo_scroll_zoom_gallery_wrapper">
							<div className="wpmozo_scroll_zoom_gallery_inner">
								{attributes.images_data && attributes.images_data.length > 0 && (
									attributes.images_data.map((image, idx) => (
										<div className="wpmozo_scroll_zoom_gallery_item">
											<img className={`wpmozo_scroll_zoom_gallery_image`} src={image.url}
												 alt={image.alt || ''}/>
										</div>
									))
								)}
								{!attributes.images_data && (
									<div className="wpmozo_scroll_zoom_gallery_no_item">
										<h3>{attributes.noImagesText}</h3>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</>
		)}
	</>);
}
