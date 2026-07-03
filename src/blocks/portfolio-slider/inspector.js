import { InspectorControls } from '@wordpress/block-editor';
import { GeneralPanel } from './settings/generalPanel';
import { DesignPanel } from './settings/designPanel';

const Inspector = ( { attributes, setAttributes } ) => {
	return (
		<InspectorControls>
			<GeneralPanel attributes={ attributes } setAttributes={ setAttributes } />
			<DesignPanel attributes={ attributes } setAttributes={ setAttributes } />
		</InspectorControls>
	);
};

export default Inspector;
