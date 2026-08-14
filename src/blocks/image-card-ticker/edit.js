import { concat, find } from 'lodash';
import {Fragment, useRef} from "@wordpress/element";
import { View } from '@wordpress/primitives';
import { toHTMLString } from '@wordpress/rich-text';

import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { createBlobURL } from '@wordpress/blob';
import { createBlock } from '@wordpress/blocks';
import { store as blockEditorStore, MediaPlaceholder, useBlockProps, useInnerBlocksProps, InnerBlocks } from '@wordpress/block-editor';
import { withNotices } from '@wordpress/components';
import { Platform, useEffect, useMemo } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';


import Inspector from './inspector';
import generateDynamicStyle from "./style";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import {pickRelevantMediaFiles} from "../../common/components/wpmozo-block-gallery/shared-helpers";
import { mergeWrapperProps } from '../../common/utils.js';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const PLACEHOLDER_TEXT = Platform.isNative
	? __( 'ADD MEDIA', 'wpmozo-blocks-and-addons' )
	: __( 'Drag images, upload new ones or select files from your library.', 'wpmozo-blocks-and-addons' );

export default function Edit(props) {

	const {setAttributes, attributes, clientId, noticeOperations, isSelected} = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-image-card-ticker${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	const {replaceInnerBlocks, updateBlockAttributes} = useDispatch( blockEditorStore );

	// Ensure ID is set once (no render-time mutation).
	useEffect(() => {
		if (attributes.ID !== clientId) {
			setAttributes({ID: clientId});
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

	const isFirstRender = useRef(true);
	useEffect( () => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		console.log('heloo there');
		const event = new CustomEvent( 'WPMozoImageTickerPropsChanged' );
		window.dispatchEvent( event );

		const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
		if ( iframe?.contentWindow ) {
			iframe.contentWindow.dispatchEvent( event );
		}
		console.log(attributes);
	}, [attributes] );

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
				caption: block.attributes.caption ? toHTMLString( { value: block.attributes.caption } ) : ''
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
				title: ! hasImages && __( 'Image Card Ticker Gallery', 'wpmozo-blocks-and-addons' ),
			} }
			multiple
			onError={ onUploadError }
			onSelect={ updateImages }
			value={ hasImageIds ? images : {} }
		/>
	);
	let dataClass = '';
	if('marquee' === attributes.tickerLayout){
		dataClass = `layout-${attributes.tickerLayout} direction-${attributes.marqueeDirection}`;
	} else if('3d_circular' === attributes.tickerLayout){
		dataClass = `layout-${attributes.tickerLayout}`;
	} else {
		dataClass = `layout-${attributes.tickerLayout}`;
	}
	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes}/>
			<style>{generateDynamicStyle({attributes, isEdit: true})}</style>

			<div {...blockProps}>
				{'curve' === attributes.tickerLayout && (
					<svg width="0" height="0">
						<defs>
							<mask id="wpmozo_image_card_ticker_curve_mask" x="0" y="0" width="1" height="1"
								  maskContentUnits="objectBoundingBox">
								<rect x="0" y="0" width="1" height="1" fill="black"></rect>
								<path d="M0,0 Q0.5,0.25 1,0 V1 Q0.5,0.75 0,1 Z" fill="white"></path>
							</mask>
						</defs>
					</svg>
				)}
				<div
					className={`wpmozo_image_card_ticker_wrapper ${dataClass}`}
					data-layout={attributes.tickerLayout}
					data-direction={attributes.marqueeDirection}
					data-image_gap={attributes.imagesGap}
					data-ticker_speed={attributes.tickerSpeed}
					data-image_width={attributes.image_width}
					data-image_height={attributes.image_height}
				>
					<div className="wpmozo_image_card_ticker_inner">
						{attributes.images_data && attributes.images_data.length > 0 && attributes.images_data.map((image, idx) => {
							if (attributes.tickerLayout === '3d_circular') {
								return (
									<div key={idx} className="wpmozo_image_card_ticker_image_wrapper">
										<img src={image.url} alt={image.alt || ''} />
									</div>
								);
							}
							return (
								<img key={idx} src={image.url} alt={image.alt || ''} />
							);
						})}
					</div>
				</div>
				{ isSelected && (
					<View className="gallery-media-placeholder-wrapper">
						{ mediaPlaceholder }
					</View>
				) }
			</div>
		</Fragment>
	);
}
