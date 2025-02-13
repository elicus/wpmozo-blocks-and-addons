
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { useEffect, Fragment } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_adfgu_editor_object;

const Edit = (props) => {

    const coreFunc = window.wpmozo,
    attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    setAttributes = props.setAttributes,
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-tilt-image' });

    let image = ( attributes.image ) ? attributes.image : WPMozoEditorObj.placeholderImg,
        contentAlignment = attributes.contentAlignment,
        linkTarget = ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : '_self',
        animationDirection = attributes.contentAnimationDirection,
        animationClass = ( attributes.contentOnHover && 'off' !== animationDirection ) ? ` wpmozo-animation wpmozo-animation-${attributes.contentAnimationDirection}` : '';

    attributes.ID = ID;

    let wpmozo_init_tilt_img = ( element, attributes ) => {

        let axis = ( attributes.useDisableAxis ) ? attributes.tiltDisableAxis : null,
            glare = ( attributes.useGlare ) ? attributes.tiltMaxGlare : false;

        element.find('.wpmozo-adfgu-tilt-image-wrapper').tilt({
            maxTilt:        attributes.tiltMax,
            perspective:    attributes.tiltPerspective,
            scale:          attributes.tiltScale,
            speed:          attributes.tiltSpeed,
            disableAxis:    axis,
            reset:          true,
            glare:          glare,
            maxGlare:       attributes.tiltMaxGlare 
        });

    }

    useEffect(() => {
        let $this = coreFunc.getMainEl( clientId );
        wpmozo_init_tilt_img( $this, attributes );
    });

    useEffect(() => {
        let $this = coreFunc.getMainEl( clientId );
        wpmozo_init_tilt_img( $this, attributes );
    }, [
        attributes.tiltMax,
        attributes.tiltPerspective,
        attributes.tiltScale,
        attributes.tiltSpeed,
        attributes.useDisableAxis,
        attributes.useGlare,
        attributes.tiltMaxGlare
    ]);

    const icon = (
        <span className="wpmozo-adfgu-tilt-icon">
            <i className={`${ attributes.icon }`}></i>
        </span>
    );

    const button = (
        <div className="wpmozo-adfgu-tilt-image-button-wrapper">
            <a href={ attributes.buttonUrl } className="wpmozo-adfgu-tilt-image-button wp-block-button__link wp-element-button" target={ linkTarget }>
                <RichText
                    value={ attributes.buttonText }
                    onChange={ ( newValue ) => setAttributes( { buttonText: newValue } ) } 
                />
            </a>
        </div>
    );

	return (
        <Fragment>
            <Inspector {...props} />
            <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
            <div {...blockProps}>
                <div className={ `wpmozo-adfgu-tilt-image-wrapper wpmozo-editor wpmozo-adfgu-tilt-align-${contentAlignment}` }>
                    <div className="wpmozo-adfgu-tilt-image-inner-wrapper">
                        <img className="wpmozo-adfgu-tilt-image-image" src={ image } />
                        <div className={ `wpmozo-adfgu-tilt-content-wrapper${animationClass}`}>
                            { attributes.useIcon &&
                                icon
                            }
                            { ! coreFunc.wpmozo_is_empty( attributes.title ) &&
                                <RichText
                                    className="wpmozo-adfgu-tilt-title"
                                    tagName={ attributes.titleLavel }
                                    value={ attributes.title }
                                    onChange={ ( newValue ) => setAttributes( { title: newValue } ) } 
                                />
                            }
                            { ! coreFunc.wpmozo_is_empty( attributes.content ) &&
                               <RichText
                                    className="wpmozo-adfgu-tilt-desc"
                                    tagName="div"
                                    value={ attributes.content }
                                    onChange={ ( newValue ) => setAttributes( { content: newValue } ) }
                                />
                            }
                            { attributes.showButton && ! coreFunc.wpmozo_is_empty( attributes.buttonText ) &&
                                button
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;