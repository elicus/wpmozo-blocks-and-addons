
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
const WPMozoEditorObj = wpmozo_adfgu_editor_object; 
import preAttributes from "./attributes";

const Inspector = (props) => {

    const attributes = props.attributes,
    setAttributes = props.setAttributes,
    clientId = attributes.clientId,
    bgAllSize = [
        {
            label: __( 'Cover', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'cover',
        },
        {
            label: __( 'Contain', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'contain',
        },
        {
            label: __( 'Auto', 'wpmozo-addons-lite-for-gutenberg' ),
            value: 'auto',
        }
    ],
    bgAllPositions = [
        {
            label: __('Top Left', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'top left'
        },
        {
            label: __('Top Center', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'top center'
        },
        {
            label: __('Top Right', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'top right'
        },
        {
            label: __('Center Left', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'center left'
        },
        {
            label: __('Center', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'center'
        },
        {
            label: __('Center Right', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'center right'
        },
        {
            label: __('Bottom Left', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'bottom left'
        },
        {
            label: __('Bottom Center', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'bottom center'
        },
        {
            label: __('Bottom Right', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'bottom right'
        },
    ],
    bgAllRepeat = [
        {
            label: __('No Repeat', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'no-repeat'
        },                  
        {
            label: __('Repeat', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'repeat'
        },
        {
            label: __('Repeat X (horizontal)', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'repeat-x'
        },
        {
            label: __('Repeat Y (vertical)', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'repeat-y'
        },
        {
            label: __('Space', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'space'
        },
        {
            label: __('Round', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'round'
        },
    ],
    bgAllOverlay = [
        {
            label: __('None', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'none'
        },
        {
            label: __('Color', 'wpmozo-addons-lite-for-gutenberg'),
            value: 'color'
        },
    ];

    props = Object.assign({}, props, {preAttributes: preAttributes});

    let backImage = ( attributes.fancyTextBackgroundImg ) ? attributes.fancyTextBackgroundImg : WPMozoEditorObj.placeholderImg;

	return (
        <>
            <InspectorControls key="controls">
                <PanelBody title={ __( 'Fancy Text Content', 'wpmozo-addons-lite-for-gutenberg' ) } initialOpen={false}>
                    <SelectControl
                        label={ __( 'Text Style', 'wpmozo-addons-lite-for-gutenberg' ) }
                        value={ attributes.textStyle }
                        options={[
                            {
                                label: __( 'Gradient', 'wpmozo-addons-lite-for-gutenberg' ),
                                value: 'gradient',
                            },
                            {
                                label: __( 'Background Clipping', 'wpmozo-addons-lite-for-gutenberg' ),
                                value: 'clipping',
                            }
                        ]}
                        onChange={ ( newValue ) => setAttributes( { textStyle: newValue } ) }
                    />
                    <TextareaControl
                      label={ __( 'Fancy Text', 'wpmozo-addons-lite-for-gutenberg' ) }
                      onChange={ ( newValue ) => setAttributes( { fancyText: newValue } ) }
                      value={ attributes.fancyText }
                    />
                </PanelBody>
           	</InspectorControls>
            <InspectorControls key="styles" group="styles">
                <PanelBody title={ __( 'Fancy Text Style', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
                    { 'gradient' === attributes.textStyle && (
                        <>
                            <WpmozoColorPicker
                                ColorKey="fancyText"
                                props={props}
                                ColorTypes={[ 
                                    {
                                        key: 'Background',
                                        label: __( 'Background', 'wpmozo-addons-lite-for-gutenberg' ),
                                        onlyGradient: true,
                                    },
                                ]}
                            />
                        </>
                    )}
                    { 'clipping' === attributes.textStyle && (
                        <>
                            <BaseControl 
                                label={ __( 'Background Image', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                                            {__( 'Select Image', 'wpmozo-addons-lite-for-gutenberg' )}
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
                                label={ __( 'Background Size', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.textBgSize }
                                options={ bgAllSize }
                                onChange={ ( newValue ) => setAttributes( { textBgSize: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Background Position', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.textBgPosition }
                                options={ bgAllPositions }
                                onChange={ ( newValue ) => setAttributes( { textBgPosition: newValue } ) }
                            /> 
                            <SelectControl
                                label={ __( 'Background Repeat', 'wpmozo-addons-lite-for-gutenberg' ) }
                                value={ attributes.textBgRepeat }
                                options={ bgAllRepeat }
                                onChange={ ( newValue ) => setAttributes( { textBgRepeat: newValue } ) }
                            />
                            <SelectControl
                                label={ __( 'Background Overlay', 'wpmozo-addons-lite-for-gutenberg' ) }
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
                                                label: __( 'Clip Background Color', 'wpmozo-addons-lite-for-gutenberg' ),
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
                                label={__( 'Text Alignment', 'wpmozo-addons-lite-for-gutenberg')}
                                onChange={ ( newValue ) => setAttributes( { textAlignment: newValue } ) }
                                value={ attributes.textAlignment }
                            />                
                        </>
                    )}
                </PanelBody>
                <PanelBody title={ __( 'Fancy Text Typography', 'wpmozo-addons-lite-for-gutenberg' ) } className="wpmozo-typography-panel" initialOpen={false}>
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