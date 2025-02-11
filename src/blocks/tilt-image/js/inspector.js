
import { WpmozoBorder, WpmozoAlignment, WpmozoColorPicker, WpmozoTypography, WpmozoMediaUploader } from '../../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import { 
    PanelBody,
    TextControl,
    TextareaControl,
    SelectControl,
    RangeControl,
    BaseControl,
    ButtonGroup,
    Button,
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    headingLavels = [
        {
            label: __( 'H1', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h1'
        },
        {
            label: __( 'H2', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h2'
        },
        {
            label: __( 'H3', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h3'
        },
        {
            label: __( 'H4', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h4'
        },
        {
            label: __( 'H5', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h5'
        },
        {
            label: __( 'H6', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'h6'
        }
    ];

    const [ titleStyleType, setTitleStyleType ] = useState('normal');

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.title }
                        onChange={ ( newValue ) => setAttributes( { title: newValue } ) }
                    />
                    <TextareaControl
                        label={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) }
                        onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
                        value={ attributes.content }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="image" 
                        props={props} 
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Title', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="title"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Title Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="title"
                        props={props}
                    />
                    <WpmozoAlignment
                        label={ __( 'Title Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                        onChange={ ( newValue ) => setAttributes( { titleAlign: newValue } ) }
                        value={ attributes.titleAlign }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Content', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="content"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Text Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    <WpmozoTypography
                        TypographyKey="content"
                        props={props}
                    />
                    <WpmozoAlignment
                        label={ __( 'Content Alignment', 'wpmozo-addons-lite-for-gutenberg') }
                        onChange={ ( newValue ) => setAttributes( { contentAlign: newValue } ) }
                        value={ attributes.contentAlign }
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;