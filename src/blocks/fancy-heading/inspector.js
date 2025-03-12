
import { 
    WpmozoColorCombo, 
    WpmozoAlignment, 
    WpmozoDimensions, 
    WpmozoColorPicker, 
    WpmozoTypography 
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { 
    PanelBody,
    ToggleControl,
    TextControl,
    BaseControl,
    ButtonGroup,
    Button
} from "@wordpress/components";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes;
    
    props = Object.assign({}, props, {preAttributes: {}});

    const headingLavels = [
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

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Heading Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <TextControl
                        label={ __( 'Pre Heading', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.preHeading }
                        onChange={ ( newValue ) => setAttributes( { preHeading: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Main Heading', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.mainHeading }
                        onChange={ ( newValue ) => setAttributes( { mainHeading: newValue } ) }
                    />
                    <TextControl
                        label={ __( 'Post Heading', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.postHeading }
                        onChange={ ( newValue ) => setAttributes( { postHeading: newValue } ) }
                    />
                    <ToggleControl
                        label={ __( 'Display In Stack', 'wpmozo-addons-lite-for-gutenberg' ) }
                        checked={ attributes.displayInStack }
                        onChange={ ( newValue ) => setAttributes( { displayInStack: newValue } ) }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Global Text Settings', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorPicker
                        ColorKey="heading"
                        props={props}
                        ColorTypes={[ 
                            {
                                key: 'Color',
                                label: __( 'Color', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                            {
                                key: 'Background',
                                label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
                            },
                        ]}
                    />
                    <WpmozoAlignment
                        label={__( 'Heading Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { headingAlignment: newValue } ) }
                        value={ attributes.headingAlignment }
                    />
                    <BaseControl
                        label={ __( 'Heading Lavel', 'wpmozo-addons-lite-for-gutenberg' ) }
                    >    
                        <ButtonGroup>
                            {headingLavels.map((item, key) => (
                                <Button
                                    isPressed={ ( item.value === attributes.headingLavel ) ? true : false }
                                    onClick={ ( newValue ) => setAttributes( { headingLavel: item.value } ) }
                                >
                                    { item.label }
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                </PanelBody>
                <PanelBody title={ __( 'Pre Text Settings', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorCombo
                        label={ __( 'Pre Text Color', 'wpmozo-addons-lite-for-gutenberg' ) }
                        normal={{
                            ColorKey: "preText",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]
                        }}
                        hover={{
                            ColorKey: "preTextHover",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]
                        }}
                    />
                    <WpmozoAlignment
                        label={__( 'Pre Text Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { preTextAlignment: newValue } ) }
                        value={ attributes.preTextAlignment }
                    />
                    <WpmozoTypography
                        TypographyKey="preText"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='preTextDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Main Text Settings', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorCombo
                        label={ __( 'Main Text Color', 'wpmozo-addons-lite-for-gutenberg' ) }
                        normal={{
                            ColorKey: "mainText",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]
                        }}
                        hover={{
                            ColorKey: "mainTextHover",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]
                        }}
                    />
                    <WpmozoAlignment
                        label={__( 'Main Text Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { mainTextAlignment: newValue } ) }
                        value={ attributes.mainTextAlignment }
                    />
                    <WpmozoTypography
                        TypographyKey="mainText"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='mainTextDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
                <PanelBody title={ __( 'Post Text Settings', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoColorCombo
                        label={ __( 'Post Text Color', 'wpmozo-addons-lite-for-gutenberg' ) }
                        normal={{
                            ColorKey: "postText",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]
                        }}
                        hover={{
                            ColorKey: "postTextHover",
                            props: props,
                            ColorTypes: [ 
                                {
                                    key: 'Color',
                                    label: __( 'Color', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                                {
                                    key: 'Background',
                                    label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                },
                            ]
                        }}
                    />
                    <WpmozoAlignment
                        label={__( 'Post Text Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                        onChange={ ( newValue ) => setAttributes( { postTextAlignment: newValue } ) }
                        value={ attributes.postTextAlignment }
                    />
                    <WpmozoTypography
                        TypographyKey="postText"
                        props={props}
                    />
                    <WpmozoDimensions
                        DimensionKey='postTextDimensions'
                        DimensionsTypes={{
                            padding: true,
                            margin: true,
                        }}
                        props={props}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;