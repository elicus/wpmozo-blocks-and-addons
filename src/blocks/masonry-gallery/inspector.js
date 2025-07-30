// inspector.js
/**
 * External dependencies
 */
import { find } from 'lodash';

/**
 * WordPress dependencies
 */
import { store as noticesStore } from '@wordpress/notices';
import { Platform } from '@wordpress/element';
import { View } from '@wordpress/primitives';
import { __, sprintf } from '@wordpress/i18n';
import { store as blockEditorStore, InspectorControls } from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	PanelBody,
	BaseControl,
	Spinner,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	SelectControl,
	ToggleControl,
	RangeControl
} from "@wordpress/components";

/**
 * Internal dependencies
 */
import useGetMedia from '../../common/components/wpmozo-block-gallery/use-get-media';
import useImageSizes from '../../common/components/wpmozo-block-gallery/use-image-sizes';
import { WpmozoGetImageSizeAttributes } from '../../common/utils';


export default function Inspector( props ) {

	const {
		attributes,
		clientId,
		isSelected,
		setAttributes,
	} = props;

	const {
		sizeSlug,
	} = attributes;

	const {
		updateBlockAttributes,
	} = useDispatch( blockEditorStore );
	const { createSuccessNotice } = useDispatch( noticesStore );

	const { getBlock, getSettings } = useSelect( ( select ) => ( {
		getBlock: select( blockEditorStore ).getBlock,
		getSettings: select( blockEditorStore )?.getSettings || {},
	} ), [] );

	const innerBlockImages = useSelect(
		( select ) => {
			return select( blockEditorStore ).getBlock( clientId )?.innerBlocks;
		},
		[ clientId ]
	);

	const imageData = useGetMedia( innerBlockImages );

	const imageSizeOptions = useImageSizes(
		imageData,
		isSelected,
		getSettings
	);

	function updateImagesSize( newSizeSlug ) {
		setAttributes( { sizeSlug: newSizeSlug } );
		const changedAttributes = {};
		const blocks = [];
		getBlock( clientId ).innerBlocks.forEach( ( block ) => {
			blocks.push( block.clientId );
			const image = block.attributes.id
				? find( imageData, { id: block.attributes.id } )
				: null;
			changedAttributes[ block.clientId ] = WpmozoGetImageSizeAttributes(
				image,
				newSizeSlug
			);
		} );

		updateBlockAttributes( blocks, changedAttributes, true );
		const imageSize = imageSizeOptions.find(
			( size ) => size.value === newSizeSlug
		);

		createSuccessNotice(
			sprintf(
				/* translators: %s: image size settings */
				__( 'All gallery image sizes updated to: %s', 'wpmozo-blocks-and-addons' ),
				imageSize.label
			),
			{
				id: 'gallery-attributes-sizeSlug',
				type: 'snackbar',
			}
		);
	}


	const setRadiusTo = ( value ) => {
		setAttributes( { radius: value } );
	};

	return (
		<InspectorControls>
			<PanelBody title={ __( 'Gallery settings', 'wpmozo-blocks-and-addons' ) }>

				<ToggleGroupControl
					label={ __( 'Gutter', 'wpmozo-blocks-and-addons' )}
					value={ attributes.gutterSize }
					onChange={ ( newValue ) => setAttributes( { gutterSize: newValue } ) }
				>
					<ToggleGroupControlOption value="s" label="S" />
					<ToggleGroupControlOption value="m" label="M" />
					<ToggleGroupControlOption value="l" label="L" />
					<ToggleGroupControlOption value="custom" label="Custom" />
				</ToggleGroupControl>
				{ 'custom' === attributes.gutterSize && (
					<RangeControl
						label={ __( 'Custom Gutter size (px)', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.customGutterSize }
						onChange={ ( newValue ) => setAttributes( { customGutterSize: newValue } ) }
						min={ 1 }
						step={ 2 }
						max={ 50 }
					/>
				) }

				{ imageSizeOptions?.length > 0 && (
					<SelectControl
						hideCancelButton={ true }
						label={ __( 'Image size', 'wpmozo-blocks-and-addons' ) }
						onChange={ updateImagesSize }
						options={ imageSizeOptions }
						value={ sizeSlug }
					/>
				) }
				{ Platform.isWeb && ! imageSizeOptions && (
					<BaseControl className={ 'gallery-image-sizes' }>
						<BaseControl.VisualLabel>
							{ __( 'Image size', 'wpmozo-blocks-and-addons' ) }
						</BaseControl.VisualLabel>
						<View className={ 'gallery-image-sizes__loading' }>
							<Spinner />
							{ __( 'Loading options…', 'wpmozo-blocks-and-addons' ) }
						</View>
					</BaseControl>
				) }
				<RangeControl
					label={ __( 'Number Of Columns', 'wpmozo-blocks-and-addons' ) }
					value={ attributes.numberOfColumns }
					onChange={ ( newValue ) => setAttributes( { numberOfColumns: newValue } ) }
					min={ 2 }
					step={ 1 }
					max={ 10 }
				/>
				<ToggleControl
					label={ __( 'Show Caption', 'wpmozo-blocks-and-addons' ) }
					checked={ attributes.showCaption }
					onChange={ ( newValue ) => setAttributes( { showCaption: newValue } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
