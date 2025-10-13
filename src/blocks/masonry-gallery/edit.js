/**
 * External dependencies
 */
import { concat, find } from 'lodash';
import {Fragment} from "@wordpress/element";
import { View } from '@wordpress/primitives';
import { toHTMLString } from '@wordpress/rich-text';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { createBlobURL } from '@wordpress/blob';
import { createBlock } from '@wordpress/blocks';
import { store as blockEditorStore, MediaPlaceholder, useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
import { withNotices } from '@wordpress/components';
import { Platform, useEffect, useMemo } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { pickRelevantMediaFiles } from '../../common/components/wpmozo-block-gallery/shared-helpers';
import generateDynamicStyle from "./style";


const ALLOWED_MEDIA_TYPES = [ 'image' ];

const PLACEHOLDER_TEXT = Platform.isNative
	? __( 'ADD MEDIA', 'wpmozo-blocks-and-addons' )
	: __( 'Drag images, upload new ones or select files from your library.', 'wpmozo-blocks-and-addons' );


function Edit(props) {
	const {
		setAttributes,
		attributes,
		clientId,
		noticeOperations,
		isSelected,
	} = props;

	const {
		replaceInnerBlocks,
		updateBlockAttributes,
	} = useDispatch( blockEditorStore );

	attributes.ID = clientId;


	const { getBlock, preferredStyle } = useSelect( ( select ) => {
		const settings = select( blockEditorStore ).getSettings();
		const preferredStyleVariations =
			settings.__experimentalPreferredStyleVariations;
		return {
			getBlock: select( blockEditorStore ).getBlock,
			preferredStyle: preferredStyleVariations?.value?.[ 'core/image' ],
		};
	}, [] );

	const innerBlockImages = useSelect(
		( select ) => {
			return select( blockEditorStore ).getBlock( clientId )?.innerBlocks;
		},
		[ clientId ]
	);

	const images = useMemo(
		() =>
			innerBlockImages?.map( ( block ) => ( {
				attributes: block.attributes,
				clientId: block.clientId,
				fromSavedContent: Boolean( block.originalContent ),
				id: block.attributes.id,
				url: block.attributes.url,
				caption: toHTMLString( { value: block.attributes.caption } )
			} ) ),
		[ innerBlockImages ]
	);

	// Set attributes.images whenever images change
	useEffect(() => {
		if (Array.isArray(images) && images.length > 0) {
			// setAttributes({ images });
			setAttributes({ images_data:images });
		}
	}, [images]);

	useEffect(() => {
		const event = new CustomEvent('WPMozoMasonryGalleryPropsChanged');
		window.dispatchEvent(event);
		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
	}, [props]);

	useEffect( () => {
		const changedAttributes = {};
		const blocks = [];
		getBlock( clientId )?.innerBlocks.forEach( ( block ) => {
			blocks.push( block.clientId );
			changedAttributes[ block.clientId ] = { className: 'masonry-brick' };
		} );
		updateBlockAttributes( blocks, changedAttributes, true );
	}, [] );

	function isValidFileType( file ) {
		return (
			ALLOWED_MEDIA_TYPES.some(
				( mediaType ) => file.type?.indexOf( mediaType ) === 0
			) || file.url?.indexOf( 'blob:' ) === 0
		);
	}

	function updateImages( selectedImages ) {
		const newFileUploads =
			Object.prototype.toString.call( selectedImages ) ===
			'[object FileList]';

		const imageArray = newFileUploads
			? Array.from( selectedImages ).map( ( file ) => {
				if ( ! file.url ) {
					return pickRelevantMediaFiles( {
						url: createBlobURL( file ),
					} );
				}

				return file;
			} )
			: selectedImages;

		if ( !! newFileUploads && ! imageArray.every( isValidFileType ) ) {
			noticeOperations.removeAllNotices();
			noticeOperations.createErrorNotice(
				__(
					'If uploading to a gallery all files need to be image formats', 'wpmozo-blocks-and-addons'
				),
				{ id: 'gallery-upload-invalid-file' }
			);
		}

		const processedImages = imageArray
			.filter( ( file ) => file.url || isValidFileType( file ) )
			.map( ( file ) => {
				if ( ! file.url ) {
					return pickRelevantMediaFiles( {
						url: createBlobURL( file ),
					} );
				}

				return file;
			} );

		const newOrderMap = processedImages?.reduce(
			( result, image, index ) => (
				( result[ image.id ] = index ), result
			),
			{}
		);

		const existingImageBlocks = ! newFileUploads
			? innerBlockImages.filter( ( block ) =>
				processedImages.find(
					( img ) => img.id === block.attributes.id
				)
			)
			: innerBlockImages;

		const newCaptions = Array.from( selectedImages ).reduce( ( previous, image ) => {
			const previousReturnedObject = !! previous?.mime ? {} : previous;
			return { ...previousReturnedObject, [ `${ image.id }` ]: image.caption };
		} );

		existingImageBlocks?.forEach( ( image ) => {
			const compareCaption = newCaptions[ image.attributes.id ];
			if ( image.attributes.caption !== compareCaption ) {
				image.attributes.caption = compareCaption;
			}
		} );

		const newImageList = processedImages.filter(
			( img ) =>
				! existingImageBlocks.find(
					( existingImg ) => img.id === existingImg.attributes.id
				)
		);

		const newBlocks = newImageList.map( ( image ) => {
			return createBlock( 'core/image', {
				alt: image.alt,
				caption: image.caption,
				id: image.id,
				url: image.url,
			} );
		} );

		replaceInnerBlocks(
			clientId,
			concat( existingImageBlocks, newBlocks ).sort(
				( a, b ) =>
					newOrderMap[ a.attributes.id ] -
					newOrderMap[ b.attributes.id ]
			)
		);
	}

	function onUploadError( message ) {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
	}

	const hasImages = !! images.length;
	const hasImageIds = hasImages && images.some( ( image ) => !! image.id );
	const imagesUploading = images.some(
		( img ) => ! img.id && img.url?.indexOf( 'blob:' ) === 0
	);

	const mediaPlaceholder = (
		<MediaPlaceholder
			accept="image/*"
			addToGallery={ hasImageIds }
			allowedTypes={ ALLOWED_MEDIA_TYPES }
			disableMediaButtons={
				( hasImages && ! isSelected ) || imagesUploading
			}
			handleUpload={ true }
			isAppender={ hasImages }
			labels={ {
				instructions: ! hasImages && PLACEHOLDER_TEXT,
				title: ! hasImages && __( 'Masonry Gallery', 'wpmozo-blocks-and-addons' ),
			} }
			multiple
			onError={ onUploadError }
			onSelect={ updateImages }
			value={ hasImageIds ? images : {} }
		/>
	);

	const blockProps = useBlockProps({className:'wpmozo_masonry_gallery'});

	return (
		<>
			{ isSelected && (
				<>
					<Inspector { ...props } />
				</>
			) }
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div {...blockProps}>
				<div className="wpmozo_pb_module_inner">
					<div className="wpmozo_masonry_gallery_wrapper">
						<div className="wpmozo_masonry_gallery_item_gutter"></div>
						{attributes.images_data && attributes.images_data.length > 0 && (
							attributes.images_data.map((image, idx) => (
								<a className="wpmozo_masonry_gallery_item" href={image.url} key={image.id || idx}>
									<div className="wpmozo_masonry_gallery_image_wrapper">
										<img src={image.url} alt={image.alt || ''}/>
										{true === attributes.enableOverlay && (
											<span className="wpmozo_overlay wpmozo_pb_inline_icon" data-icon="0">
												<i className={attributes.overlayIcon}></i>
											</span>
										)}
									</div>
									{true === attributes.showCaption && (
										<div className="wpmozo_masonry_gallery_title_caption_wrapper">
											<figcaption className="wp-element-caption">{image.caption}</figcaption>
										</div>
									)}
								</a>
							))
						)}
					</div>
				</div>
				<View className="gallery-media-placeholder-wrapper">
				{ mediaPlaceholder }
				</View>
			</div>
		</>
	);
}

export default compose( [
	withNotices,
] )( Edit );
