// inspector.js
import { __ } from '@wordpress/i18n';
import {
    InspectorControls, HeightControl
} from '@wordpress/block-editor';
import {
    PanelBody
} from '@wordpress/components';

const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes };
    props = Object.assign({}, props, {preAttributes: {}});

    return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Container', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <HeightControl
                        label={ __( 'Container Height', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.containerHeight }
                        onChange={ ( newValue ) => setAttributes( { containerHeight: newValue } ) }
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );
};

export default Inspector;
