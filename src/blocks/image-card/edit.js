import {__} from "@wordpress/i18n";
import {Fragment} from "@wordpress/element";
import {useBlockProps, RichText} from "@wordpress/block-editor";
import Inspector from './inspector';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import generateDynamicStyle from "./style";
import {wpmozo_is_empty} from '../../common/utils.js';

const Edit = (props) => {

    let attributes = props.attributes,
        clientId = props.clientId,
        setAttributes = props.setAttributes,
        blockProps = useBlockProps({className: 'wpmozo-bna-image-card-main'}),
        image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
        linkTarget = ( 'external' === attributes.buttonLinkTarget ) ? '_blank' : '_self',
        showMediaOnHover = ( attributes.showMediaOnHover ) ? ' show-on-hover' : '',
        buttonMediaPosition = ( attributes.buttonMediaPosition ) ? attributes.buttonMediaPosition : 'after',
        buttonMedia ='',
        showOnHover = ( attributes.showMediaOnHover ) ? ' show-on-hover' : '';


    if( 'icon' === attributes.buttonMediaType &&  attributes.buttonIcon ){
        buttonMedia = <i className={ attributes.buttonIcon }></i>;
    } else if ( 'image' === attributes.buttonMediaType &&  attributes.buttonImage ) {
        buttonMedia = <img src={ attributes.buttonImage } />;
    }

    attributes.ID = clientId;

    const button = ( 
            attributes.showButton &&
            ! wpmozo_is_empty( attributes.buttonText ) && 
            ! wpmozo_is_empty( attributes.buttonUrl ) &&
            <div className="wpmozo-bna-image-card-button-wrap">
                <div className="wpmozo-bna-image-card-button-wrap-inner">
                    <a 
                        className={`wpmozo-bna-image-card-button${showOnHover}`}
                        target={linkTarget}
                        href={ attributes.buttonUrl }
                    >
                        { attributes.buttonText }
                        {buttonMedia}
                    </a>
                </div>
            </div>
    );

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <style>
                {generateDynamicStyle({attributes, clientId})}
            </style>
            <div {...blockProps} id={`block-${attributes.ID}`}>
                <div className="wpmozo-bna-image-card-wrapper wpmozo-editor">
                    <div className="wpmozo-bna-image-card-wrapper-inner">
                        <img className="wpmozo-bna-image-card-image" src={image}/>
                    </div>
                    <div className="wpmozo-bna-image-card-content-wrapper">
                        { attributes.icon && ( 
                            <div className="wpmozo-bna-image-card-icon-wrapper">                       
                                {!attributes.styleIcon && (
                                    <i className={ attributes.icon }></i>
                                )}
                                {attributes.styleIcon && ('square' === attributes.iconShape || 'circle' === attributes.iconShape) && (
                                    <i className={ attributes.icon +' wpmozo-bna-icon-' + attributes.iconShape  + ( true === attributes.showShapeBorder ? (' wpmozo-bna-icon-shape-border') : '' ) }></i>
                                )}
                                {attributes.styleIcon && 'hexagon' === attributes.iconShape && (
                                    <div className="wpmozo-bna-image-card-icon-inner-wrap shape-hexagon">
                                        <div className={"hexagon" + ( true === attributes.showShapeBorder ? (' wpmozo-bna-border-hex') : '' )}>
                                            <i className={ attributes.icon }></i>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        <div className="wpmozo-bna-image-card-inner-content-wrapper">
                            <RichText
                                className="wpmozo-bna-image-card-title"
                                tagName={attributes.titleLevel}
                                value={attributes.title}
                                onChange={(newValue) => setAttributes({title: newValue})}
                                placeholder={__('Image Card Title', 'wpmozo-blocks-and-addons')}
                            />
                            <RichText
                                className="wpmozo-bna-image-card-content"
                                tagName="div"
                                value={attributes.description}
                                onChange={(newValue) => setAttributes({description: newValue})}
                                placeholder={__('Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.', 'wpmozo-blocks-and-addons')}
                            />
                            {attributes.showButton && attributes.buttonText?.trim() && (
                                button
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Edit;