/**
 * External dependencies
 */
import classnames from 'classnames';
import { concat, find } from 'lodash';
import {Fragment} from "@wordpress/element";
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
import { store as blockEditorStore, MediaPlaceholder, useBlockProps } from '@wordpress/block-editor';
import { withNotices } from '@wordpress/components';
import { Platform, useEffect, useMemo, useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { View } from '@wordpress/primitives';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { pickRelevantMediaFiles } from '../../common/components/wpmozo-block-gallery/shared-helpers';
import generateDynamicStyle from "./style";
import { mergeWrapperProps, getMainEl } from '../../common/utils.js';


const ALLOWED_MEDIA_TYPES = [ 'image' ];

const PLACEHOLDER_TEXT = Platform.isNative
	? __( 'ADD MEDIA', 'wpmozo-blocks-and-addons' )
	: __( 'Drag images, upload new ones or select files from your library.', 'wpmozo-blocks-and-addons' );

const isFileList = ( data ) => {
	return Object.prototype.toString.call( data ) === '[object FileList]';
};

const normalizeImages = ( selectedImages ) => {
	const imageArray = isFileList( selectedImages )
		? Array.from( selectedImages )
		: selectedImages;

	return imageArray.map( ( file ) => {
		if ( ! file.url ) {
			return pickRelevantMediaFiles( {
				...file,
				url: createBlobURL( file ),
			} );
		}
		return pickRelevantMediaFiles( file );
	} );
};

const createImageCaptionMap = ( selectedImages ) => {
	return new Map(
		selectedImages.map( ( image ) => [ image.id, image.caption ] )
	);
};

const updateImageCaptions = ( existingImageBlocks, captionMap ) => {
	existingImageBlocks.forEach( ( block ) => {
		const newCaption = captionMap.get( block.attributes.id );
		if (
			newCaption !== undefined &&
			block.attributes.caption !== newCaption
		) {
			block.attributes.caption = newCaption;
		}
	} );
};

function Edit( props ) {
	const {
		setAttributes,
		attributes,
		className,
		clientId,
		noticeOperations,
		isSelected,
	} = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: [
				className,
				'wpmozo-mystery-image',
				attributes?.showLightbox && 'wpmozo-mystery-image-lightbox',
				attributes?.enableOverlay && 'wpmozo-mystery-image-overlay',
				attributes?.wrapIsHover && 'is_hover'
			].filter(Boolean).join(' '),
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

		// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	const {
		replaceInnerBlocks,
	} = useDispatch( blockEditorStore );


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
			} ) ),
		[ innerBlockImages ]
	);

	const [ randomIndex, setRandomIndex ] = useState( 0 );

	const imagesDataKey = useMemo( () => {
		if ( ! Array.isArray( images ) || images.length === 0 ) {
			return '';
		}
		return images.map( ( img ) => img.url || img.id || '' ).join( '|' );
	}, [ images ] );

	useEffect( () => {
		if ( Array.isArray( images ) && images.length > 0 ) {
			const newIndex = Math.floor( Math.random() * images.length );
			setRandomIndex( newIndex );
		}
	}, [ imagesDataKey ] );

	const hasImages = !! images.length;
	const hasImageIds = hasImages && images.some( ( image ) => !! image.id );
	const imagesUploading = images.some(
		( img ) => ! img.id && img.url?.indexOf( 'blob:' ) === 0
	);

	function onUploadError( message ) {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
	}

	function updateImages( selectedImages ) {
		const normalizedImages = normalizeImages( selectedImages );

		if ( isFileList( selectedImages ) && ! normalizedImages.every( isValidFileType ) ) {
			noticeOperations.removeAllNotices();
			noticeOperations.createErrorNotice(
				__( 'All files must be of a valid image format.', 'wpmozo-blocks-and-addons' ),
				{ id: 'gallery-upload-invalid-file' }
			);
			return;
		}

		const newOrderMap = new Map(
			normalizedImages.map( ( image, index ) => [ image.id, index ] )
		);

		const existingImageIds = new Set(
			innerBlockImages.map( ( block ) => block.attributes.id )
		);

		const newImageBlocks = normalizedImages
			.filter( ( image ) => ! existingImageIds.has( image.id ) )
			.map( ( image ) =>
				createBlock( 'core/image', {
					alt: image.alt,
					caption: image.caption,
					id: image.id,
					url: image.url,
				} )
			);

		const captionMap = createImageCaptionMap( normalizedImages );
		updateImageCaptions( innerBlockImages, captionMap );

		const mergedBlocks = concat( innerBlockImages, newImageBlocks ).sort(
			( a, b ) =>
				newOrderMap.get( a.attributes.id ) -
				newOrderMap.get( b.attributes.id )
		);

		replaceInnerBlocks( clientId, mergedBlocks );
	}

	// When the media gallery is updated, set the images_data attribute to the current images array
	useEffect(() => {
		if (Array.isArray(images)) {
			setAttributes({ images_data: images });
			attributes.images_data = images
		}
	}, [images]);

	useEffect(() => {
		if (attributes.showLightbox && clientId) {
			const $ = window.jQuery;
			if ($ && $.fn.magnificPopup) {
				const $container = getMainEl(clientId);
				if ($container && $container.length) {
					const mainClass = 'block-block-' + clientId + '_lightbox';
					$container.find('.wpmozo-mystery-image-anchor').off('click.editorLightbox').on('click.editorLightbox', function(e) {
						e.preventDefault();
						e.stopPropagation();
						$.magnificPopup.open({
							items: {
								src: $(this).attr('href') || $(this).find('img').attr('src')
							},
							type: 'image',
							closeOnContentClick: false,
							closeBtnInside: false,
							mainClass: mainClass,
							callbacks: {
								open: function() {
									if (attributes.lightboxBackgroundColor) {
										$('.' + mainClass + '.mfp-bg').css({
											'background-color': attributes.lightboxBackgroundColor,
											'opacity': '1'
										});
									}
									if (attributes.lightboxCloseIconColor) {
										$('.' + mainClass + ' .mfp-close').css({
											'color': attributes.lightboxCloseIconColor,
											'opacity': '1'
										});
									}
								}
							},
							image: {
								markup: '<div class="mfp-figure">' +
									'<div class="mfp-close"></div>' +
									'<div class="mfp-img"></div>' +
									'</div>',
								tError: '<a href="%url%">The image</a> could not be loaded.',
							}
						});
					});
				}
			}
		}
	}, [attributes.showLightbox, attributes.lightboxBackgroundColor, attributes.lightboxCloseIconColor, attributes.images_data, clientId]);


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
				title: ! hasImages && __( 'Mystery Image', 'wpmozo-blocks-and-addons' ),
			} }
			multiple
			onError={ onUploadError }
			onSelect={ updateImages }
			value={ hasImageIds ? images : {} }
		/>
	);

	return (
		<>
			{isSelected && (
				<>
					<Inspector {...props} />
				</>
			)}
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div {...blockProps} id={`block-${clientId}`}>
			{images && Array.isArray(images) && images.length > 0 && (() => {
				const validIndex = randomIndex < images.length ? randomIndex : 0;
				const randomImage = images[validIndex] || images[0];
				return (
					<figure className="wp-block-image mystery-show">
						{true === attributes.showLightbox ? (
							<a href={randomImage.url} className="wpmozo-mystery-image-anchor" onClick={(e) => e.preventDefault()}>
								<img
									src={randomImage.url}
									alt={randomImage.alt || ''}
									className="wpmozo-mystery-image-img"
									loading="lazy"
								/>
								{true === attributes.enableOverlay && (
									<span className="wpmozo-overlay-icon">
										<i className={attributes.overlayIcon}></i>
									</span>
								)}
							</a>
						) : 
 
							<div className="wpmozo-mystery-image-anchor">
								<img
									src={randomImage.url}
									alt={randomImage.alt || ''}
									className="wpmozo-mystery-image-img"
									loading="lazy"
								/>
								{true === attributes.enableOverlay && (
									<span className="wpmozo-overlay-icon">
										<i className={attributes.overlayIcon}></i>
									</span>
								)}
							</div>
						}
					</figure>
				);

			})()}

				<View className="gallery-media-placeholder-wrapper">
					{ mediaPlaceholder }
				</View>
			</div>
		</>
	);
}

export default compose([
	withNotices,
])(Edit);
