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
import { Icon, withNotices } from '@wordpress/components';
import { Platform, useEffect, useMemo } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import Gallery from '../../common/components/wpmozo-block-gallery/gallery';
import Inspector from './inspector';
import { pickRelevantMediaFiles } from '../../common/components/wpmozo-block-gallery/shared-helpers';
import useGetMedia from '../../common/components/wpmozo-block-gallery/use-get-media';
import useGetNewImages from '../../common/components/wpmozo-block-gallery/use-get-new-images';
import generateDynamicStyle from "./style";


const ALLOWED_MEDIA_TYPES = [ 'image' ];

const PLACEHOLDER_TEXT = Platform.isNative
	? __( 'ADD MEDIA', 'wpmozo-blocks-and-addons' )
	: __( 'Drag images, upload new ones or select files from your library.', 'wpmozo-blocks-and-addons' );

function Edit( props ) {
	const {
		setAttributes,
		attributes,
		className,
		clientId,
		noticeOperations,
		isSelected,
		insertBlocksAfter,
	} = props;

	const {
		sizeSlug,
	} = attributes;

	const {
		replaceBlocks,
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
			} ) ),
		[ innerBlockImages ]
	);

	useEffect( () => {
		/**
		 * This logic should only fire in the case of block deprecations.
		 * Deprecated markup come in with old attributes and the block
		 *must be replaced for proper instantiation.
		 */
		if ( !! attributes?.images?.length && ! images?.length ) {
			const newBlocks = attributes?.images.map( ( image ) => {
				return createBlock( 'core/image', {
					alt: image.alt,
					caption: image.caption?.toString(),
					id: parseInt( image.id ),
					url: image.url,
				} );
			} );

			const migratedAttributes = { ...attributes };
			delete migratedAttributes.images;
			delete migratedAttributes.gutter;
			delete migratedAttributes.gutterCustom;

			const transformedBlock = createBlock( 'wpmozo/masonry-gallery', { ...migratedAttributes }, newBlocks );

			replaceBlocks(
				[ clientId ],
				transformedBlock,
			);
		}
	}, [] );

	const imageData = useGetMedia( innerBlockImages );

	const newImages = useGetNewImages( images, imageData );

	useEffect( () => {
		const changedAttributes = {};
		const blocks = [];
		getBlock( clientId )?.innerBlocks.forEach( ( block ) => {
			blocks.push( block.clientId );
			changedAttributes[ block.clientId ] = { className: 'masonry-brick' };
		} );
		updateBlockAttributes( blocks, changedAttributes, true );
	}, [] );

	useEffect( () => {
		newImages?.forEach( ( newImage ) => {
			updateBlockAttributes( newImage.clientId, {
				...buildImageAttributes( newImage.attributes ),
				align: undefined,
				id: newImage.id,
			} );
		} );
	}, [ newImages ] );

	function buildImageAttributes( imageAttributes ) {
		const image = imageAttributes.id
			? find( imageData, { id: imageAttributes.id } )
			: null;

		let newClassName;
		if ( imageAttributes.className && imageAttributes.className !== '' ) {
			newClassName = imageAttributes.className;
		} else {
			newClassName = preferredStyle
				? `is-style-${ preferredStyle }`
				: undefined;
		}

		return {
			...pickRelevantMediaFiles( imageAttributes, sizeSlug ),
			className: newClassName,
			sizeSlug,
		};
	}

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
			handleUpload={ false }
			// icon={ ! hasImages && <Icon icon={ icon } /> }
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

	const blockProps = useBlockProps( {
		className: classnames( className)} );

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
				<Gallery
					{ ...props }
					blockProps={ blockProps }
					images={ images }
					insertBlocksAfter={ insertBlocksAfter }
					mediaPlaceholder={ mediaPlaceholder }
					wrapperClass="masonry-grid"
				/>
		</>
	);
}
export default compose( [
	withNotices,
] )( Edit );
