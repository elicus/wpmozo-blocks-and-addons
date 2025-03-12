
import { 
    WpmozoMediaUploader, 
    WpmozoBorder, 
    WpmozoDimensions, 
    WpmozoColorPicker 
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    TextControl,
    BaseControl,
    ButtonGroup,
    Button,
    Icon,
} from "@wordpress/components";
import { useState } from "@wordpress/element";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;

    const [ contentType, setContentType ] = useState('front');
    props = Object.assign({}, props, {preAttributes: {}});

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'General Settings', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <WpmozoMediaUploader 
                        attrKye="logo" 
                        props={props}
                        imageSrc={ attributes.logo.url }
                        onSelect={ ( media ) => setAttributes( { logo: media } ) }
                    />
                    <TextControl
                        label={ __( 'Alt Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.altText }
                        onChange={ ( newValue ) => setAttributes( { altText: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Link', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.link }
                        onChange={ ( newValue ) => setAttributes( { link: newValue } ) }
                    /> 
                    <BaseControl
                        label={ __( 'Link Target', 'wpmozo-addons-lite-for-gutenberg' ) }
                        className="wpmozo-button-tabs-wrap"
                    >    
                        <ButtonGroup>
                            <Button
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'same' === attributes.linkTarget ) ? true : false }
                                onClick={ () => setAttributes( { linkTarget: 'same' } ) }
                                icon={ <Icon icon="admin-links" /> }
                                label={ __( 'Same Window', 'wpmozo-addons-lite-for-gutenberg' ) }
                            /> 
                            <Button 
                                className="wpmozo-button-tabs-btn"
                                isPressed={ ( 'external' === attributes.linkTarget ) ? true : false }
                                onClick={ () => setAttributes( { linkTarget: 'external' } ) }
                                icon={ <Icon icon="external" /> }
                                label={ __( 'External', 'wpmozo-addons-lite-for-gutenberg' ) }
                            />
                        </ButtonGroup>
                    </BaseControl>
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Logo Style', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <WpmozoColorPicker  
                        ColorKey="logo"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Background',
                                label: __( 'Background Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            }
                        ]}
                    />
                    <WpmozoDimensions
                        DimensionKey='logo'
                        DimensionsTypes={{
                            padding: true
                        }}
                        props={props}
                    />
                    <WpmozoBorder
                        BorderKey="logo"
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;