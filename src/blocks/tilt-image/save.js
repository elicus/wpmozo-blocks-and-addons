
import { useBlockProps, RichText } from "@wordpress/block-editor";
const WPMozoEditorObj = wpmozo_bna_editor_object;

const Save = ({ attributes }) => {

    const coreFunc = window.wpmozo,
        ID = attributes.ID;

    let image = ( attributes.image ) ? attributes.image : WPMozoEditorObj.placeholderImg,
        contentAlignment = attributes.contentAlignment,
        linkTarget = ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : '_self',
        animationDirection = attributes.contentAnimationDirection,
        animationClass = ( attributes.contentOnHover && 'off' !== animationDirection ) ? ` wpmozo-animation wpmozo-animation-${attributes.contentAnimationDirection}` : '',
        axis = ( attributes.useDisableAxis ) ? attributes.tiltDisableAxis : null,
        glare = ( attributes.useGlare ) ? attributes.tiltMaxGlare : false;

    const icon = (
        <span className="wpmozo-bna-tilt-icon">
            <i className={`${ attributes.icon }`}></i>
        </span>
    );

    const button = (
        <div className="wpmozo-bna-tilt-image-button-wrapper">
            <a href={ attributes.buttonUrl } className="wpmozo-bna-tilt-image-button wp-block-button__link wp-element-button" target={ linkTarget }>{ attributes.buttonText }</a>
        </div>
    );

    return (
        <div 
            {...useBlockProps.save({ className: 'wpmozo-bna-tilt-image' })} 
            id={`block-${ID}`}
            data-max-tilt={ attributes.tiltMax }
            data-perspective={ attributes.tiltPerspective }
            data-scale={ attributes.tiltScale }
            data-speed={ attributes.tiltSpeed }
            data-disable-axis={ axis }
            data-glare={ attributes.useGlare }
            data-max-alare={ attributes.tiltMaxGlare }
            data-disable-mobile={ attributes.tiltMobile }
        >
            <div className={ `wpmozo-bna-tilt-image-wrapper wpmozo-editor wpmozo-bna-tilt-align-${contentAlignment}` }>
                <div className="wpmozo-bna-tilt-image-inner-wrapper">
                    <img className="wpmozo-bna-tilt-image-image" src={ image } />
                    <div className={ `wpmozo-bna-tilt-content-wrapper${animationClass}`}>
                        { attributes.useIcon &&
                            icon
                        }
                        <RichText.Content
                            className="wpmozo-bna-tilt-title"
                            tagName={ attributes.titleLavel }
                            value={ attributes.title }
                        />
                        <RichText.Content
                            className="wpmozo-bna-tilt-desc"
                            tagName="div"
                            value={ attributes.content }
                        />
                        { attributes.showButton && ! coreFunc.wpmozo_is_empty( attributes.buttonText ) &&
                            button
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Save;