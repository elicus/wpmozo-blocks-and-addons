// inspector.js
import {__} from "@wordpress/i18n";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, RangeControl} from "@wordpress/components";

const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes };

    return (
        <>
			<InspectorControls key="controls">
				<PanelBody title={__('Stack settings', 'wpmozo-blocks-and-addons')} initialOpen={true}>
					<RangeControl
						label={ __( 'Image/Icon Size', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.stackItemSize }
						onChange={ ( newValue ) => setAttributes( { stackItemSize: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 500 }
					/>
					<RangeControl
						label={ __( 'Image/Icon Shrink', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.stackItemShrink }
						onChange={ ( newValue ) => setAttributes( { stackItemShrink: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 250 }
					/>
					<RangeControl
						label={ __( 'Image/Icon Spacing', 'wpmozo-blocks-and-addons' ) }
						value={ attributes.stackItemSpacing }
						onChange={ ( newValue ) => setAttributes( { stackItemSpacing: newValue } ) }
						min={ 1 }
						step={ 1 }
						max={ 150 }
					/>
				</PanelBody>
			</InspectorControls>
        </>
    );
};

export default Inspector;
