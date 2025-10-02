import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RangeControl,
	SelectControl,
	__experimentalUnitControl
} from '@wordpress/components';
import { WpmozoBorder, WpmozoSize } from '../../../common/components/index';
import { useState } from "@wordpress/element";

export const DesignPanel = ( { attributes, setAttributes } ) => {
	const WPMozoEditorObj = wpmozo_bna_editor_object;

	let props = { attributes, setAttributes };
	props = Object.assign({}, props, {preAttributes: {}});

	const [ contentType, setContentType ] = useState('front');



	return (
		<>
			<PanelBody title={ __( 'Image Position', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>

			</PanelBody>
		</>
	);
};
