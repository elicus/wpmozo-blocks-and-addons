
import { 
    WpmozoDimensions,
    WpmozoAlignment,
    WpmozoColorPicker,
    WpmozoTypography 
} from '../../components/index';
import { __ } from "@wordpress/i18n";
import { InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { 
    PanelBody,
    SelectControl,
    TextareaControl,
    BaseControl,
} from "@wordpress/components";
const WPMozoEditorObj = wpmozo_bna_editor_object; 
import preAttributes from "./attributes";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = attributes.clientId,
    bgAllSize = [
        {
            label: __( 'Cover', 'wpmozo-blocks-and-addons' ),
            value: 'cover',
        },
        {
            label: __( 'Contain', 'wpmozo-blocks-and-addons' ),
            value: 'contain',
        },
        {
            label: __( 'Auto', 'wpmozo-blocks-and-addons' ),
            value: 'auto',
        }
    ],
    bgAllPositions = [
        {
            label: __('Top Left', 'wpmozo-blocks-and-addons'),
            value: 'top left'
        },
        {
            label: __('Top Center', 'wpmozo-blocks-and-addons'),
            value: 'top center'
        },
        {
            label: __('Top Right', 'wpmozo-blocks-and-addons'),
            value: 'top right'
        },
        {
            label: __('Center Left', 'wpmozo-blocks-and-addons'),
            value: 'center left'
        },
        {
            label: __('Center', 'wpmozo-blocks-and-addons'),
            value: 'center'
        },
        {
            label: __('Center Right', 'wpmozo-blocks-and-addons'),
            value: 'center right'
        },
        {
            label: __('Bottom Left', 'wpmozo-blocks-and-addons'),
            value: 'bottom left'
        },
        {
            label: __('Bottom Center', 'wpmozo-blocks-and-addons'),
            value: 'bottom center'
        },
        {
            label: __('Bottom Right', 'wpmozo-blocks-and-addons'),
            value: 'bottom right'
        },
    ],
    bgAllRepeat = [
        {
            label: __('No Repeat', 'wpmozo-blocks-and-addons'),
            value: 'no-repeat'
        },                  
        {
            label: __('Repeat', 'wpmozo-blocks-and-addons'),
            value: 'repeat'
        },
        {
            label: __('Repeat X (horizontal)', 'wpmozo-blocks-and-addons'),
            value: 'repeat-x'
        },
        {
            label: __('Repeat Y (vertical)', 'wpmozo-blocks-and-addons'),
            value: 'repeat-y'
        },
        {
            label: __('Space', 'wpmozo-blocks-and-addons'),
            value: 'space'
        },
        {
            label: __('Round', 'wpmozo-blocks-and-addons'),
            value: 'round'
        },
    ],
    bgAllOverlay = [
        {
            label: __('None', 'wpmozo-blocks-and-addons'),
            value: 'none'
        },
        {
            label: __('Color', 'wpmozo-blocks-and-addons'),
            value: 'color'
        },
    ];

    props = Object.assign({}, props, {preAttributes: preAttributes});

    let backImage = ( attributes.fancyTextBackgroundImg ) ? attributes.fancyTextBackgroundImg : WPMozoEditorObj.placeholderImg;

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Fancy Text Content', 'wpmozo-blocks-and-addons' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Text Style', 'wpmozo-blocks-and-addons' ) }
                        value={ attributes.textStyle }
                        options={[
                            {
                                label: __( 'Gradient', 'wpmozo-blocks-and-addons' ),
                                value: 'gradient',
                            },
                            {
                                label: __( 'Background Clipping', 'wpmozo-blocks-and-addons' ),
                                value: 'clipping',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { textStyle: newValue } ) }
                    />
                    <TextareaControl
                      label={ __( 'Fancy Text', 'wpmozo-blocks-and-addons' ) }
                      onChange={ ( newValue ) => setAttributes( { fancyText: newValue } ) }
                      value={ attributes.fancyText }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Fancy Text Style', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    { 'gradient' === attributes.textStyle && (
                        <>
                            <WpmozoColorPicker
                                ColorKey="fancyText"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Background',
                                        label: __( 'Background', 'wpmozo-blocks-and-addons' ),
                                        onlyGradient: true,
                                    },
                                ]}
                            />
                        </>
                    )}
                    { 'clipping' === attributes.textStyle && (
                        <>
                            <BaseControl 
                                label={ __( 'Background Image', 'wpmozo-blocks-and-addons' ) }
                            >
                                <MediaUploadCheck>
                                    <MediaUpload
                                        allowedTypes={["image"]}
                                        accept="image/*"
                                        value={ backImage }
                                        onSelect={(media) => {
                                            setAttributes( { fancyTextBackgroundImg: media.url } )
                                        }}
                                        render={({ open }) => {
                                            return (
                                                <>
                                                    <button className="wpmozo-background-img-selction-wrap components-button block-editor-block-styles__item">
                                                        <div 
                                                            className="wpmozo-background-img-selction-overlay"
                                                            onClick={(event) => {
                                                                event.stopPropagation();
                                                                open();
                                                            }}
                                                        >
                                                            {__( 'Select Image', 'wpmozo-blocks-and-addons' )}
                                                        </div>
                                                        <img
                                                            src={ backImage }
                                                        />
                                                    </button>
                                                </>
                                            )
                                        }}
                                    >
                                    </MediaUpload>
                                </MediaUploadCheck>
                            </BaseControl>
                            <SelectControl
                                label={ __( 'Background Size', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.textBgSize }
                                options={ bgAllSize }
                                onChange={ ( newValue ) => setAttributes( { textBgSize: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Background Position', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.textBgPosition }
                                options={ bgAllPositions }
                                onChange={ ( newValue ) => setAttributes( { textBgPosition: newValue } ) }
                            /> 
                            <SelectControl
                                label={ __( 'Background Repeat', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.textBgRepeat }
                                options={ bgAllRepeat }
                                onChange={ ( newValue ) => setAttributes( { textBgRepeat: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Background Overlay', 'wpmozo-blocks-and-addons' ) }
                                value={ attributes.textBgOverlay }
                                options={ bgAllOverlay }
                                onChange={ ( newValue ) => setAttributes( { textBgOverlay: newValue } ) }
                            />    
                            { 'none' !== attributes.textBgOverlay && (
                                <> 
                                    <WpmozoColorPicker
                                        ColorKey="textBgOverlay"
                                        props={props}
                                        ColorTypes={[ 
                                            {
                                                key: 'Color',
                                                label: __( 'Clip Background Color', 'wpmozo-blocks-and-addons' ),
                                                withGradient: true,
                                            },
                                        ]}
                                    /> 
                                    <WpmozoDimensions
                                        DimensionKey='textBgDimensions'
                                        DimensionsTypes={{
                                            padding: true,
                                        }}
                                        props={props}
                                    />
                                </>
                            )} 
                            <WpmozoAlignment
                                label={__( 'Text Alignment', 'wpmozo-blocks-and-addons')}
                                onChange={ ( newValue ) => setAttributes( { textAlignment: newValue } ) }
                                value={ attributes.textAlignment }
                            />                
                        </>
                    )}
                </PanelBody>
                <PanelBody title={ __( 'Fancy Text Typography', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    <WpmozoTypography
                        TypographyKey="text"
                        props={props}
                        TypoTypes={{
                            'FontSize': true,
                            'FontAppearance': true,
                            'LetterSpacing': true,
                            'LetterCase': true,
                            'LineHeight': true,
                        }}
                    />
                </PanelBody>
            </InspectorControls>
        </>
    );

};

export default Inspector;