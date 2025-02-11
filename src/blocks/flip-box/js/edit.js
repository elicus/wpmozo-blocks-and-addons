
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment, useState, useEffect } from "@wordpress/element";
import { useBlockProps, RichText, BlockControls } from "@wordpress/block-editor";
import { 
    ToolbarGroup,
    ToggleControl,
    ToolbarButton,
} from "@wordpress/components";

const Edit = (props) => {

    const wpmozoCoreFun = window.wpmozo,
    attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    isSelected = props.isSelected,
    setAttributes = props.setAttributes,
    layoutType = ( 'flip' === attributes.animationType ) ? ' layout1' : ' layout2',
    blockProps = useBlockProps({ className: 'wpmozo-adfgu-flip-box-main' }),
    [ editMode, setEditMode ] = useState(false),
    editModeLabel = ( ! editMode ) ? __( 'Front', 'wpmozo-addons-lite-for-gutenberg' ) : __( 'Back', 'wpmozo-addons-lite-for-gutenberg' );

    attributes.ID = ID;

    let editModeSide = ( ! editMode ) ? ' edit-front' : ' edit-back';
    if ( ! isSelected ){
        editModeSide = '';
    }

    
    useEffect(() => {
        jQuery('body').find('.wpmozo-adfgu-flip-box-wrap').each(function(){

            jQuery(this).find('.wpmozo-adfgu-flip-box-side').each(function(){
                jQuery(this).removeAttr('style');
            });

            let $this = jQuery(this);
            var maxHeight = Math.max.apply( null, $this.find('.wpmozo-adfgu-flip-box-side').map( function(){
                return jQuery(this).outerHeight();
            }).get());
            

            jQuery(this).find('.wpmozo-adfgu-flip-box-side').each(function(){
                jQuery(this).css('height', maxHeight+'px');
            });

        });
    });
    

    let backBtnIcon = (
        <i className={ attributes.backBtnIcon }></i>
    ),
    backBtnOnHover = ( attributes.backBtnIconOnHover ) ? ' show-on-hover' : '',
    frontHexagonIcon = (
        <div className="wpmozo-adfgu-hexagon-wrap">
            <div className="wpmozo-adfgu-hexagon-shape">
                <i className={ attributes.frontElIcon }></i>
            </div>
        </div>
    ),
    backHexagonIcon = (
        <div className="wpmozo-adfgu-hexagon-wrap">
            <div className="wpmozo-adfgu-hexagon-shape">
                <i className={ attributes.backElIcon }></i>
            </div>
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
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton>
                        <ToggleControl
                            className="wpmozo-adfgu-flip-box-edit-control"
                            label={ editModeLabel }
                            checked={ editMode }
                            onChange={ ( newValue ) => setEditMode( newValue ) }
                        />
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div className={`wpmozo-adfgu-flip-box-wrap${layoutType}${editModeSide}`} flip-direction={ attributes.flipDirection }>
                    <div className="wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-front">
                        <div className="wpmozo-adfgu-flip-box-inner">
                            { 'none' !== attributes.frontElType && (
                                <div className={ 'icon' === attributes.frontElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"}>
                                    { 'icon' === attributes.frontElType && ( 
                                        <>
                                            { "hexagon" !== attributes.frontIconShape && (
                                                <i className={ attributes.frontElIcon }></i>
                                            )}
                                            { "hexagon" === attributes.frontIconShape && 
                                                frontHexagonIcon
                                            }
                                        </>
                                    )}
                                    { 'image' === attributes.frontElType && (
                                        <img src={ attributes.frontElImage } />
                                    )}
                                </div>
                            )}
                            <div className="wpmozo-adfgu-flip-box-content-wrap">
                                <div className="wpmozo-adfgu-flip-box-heading-wrap">
                                    <RichText
                                        className="wpmozo-adfgu-flip-box-title"
                                        tagName={ attributes.frontHeadingLavel }
                                        value={ attributes.frontTitle }
                                        onChange={ ( newValue ) => setAttributes( { frontTitle: newValue } ) } 
                                        placeholder={ __('Front Title', 'wpmozo-addons-lite-for-gutenberg') }
                                    />
                                </div>
                                <div className="wpmozo-adfgu-flip-box-description">
                                    <RichText
                                        value={ attributes.frontContnet }
                                        onChange={ ( newValue ) => setAttributes( { frontContnet: newValue } ) } 
                                        placeholder={ __('Here you can set front text.', 'wpmozo-addons-lite-for-gutenberg') }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpmozo-adfgu-flip-box-side wpmozo-adfgu-flip-box-back">
                        <div className="wpmozo-adfgu-flip-box-inner">
                            { 'none' !== attributes.backElType && (
                                <div className={ 'icon' === attributes.backElType ? "wpmozo-adfgu-flip-box-icon-wrap" : "wpmozo-adfgu-flip-box-image-wrap"}>
                                    { 'icon' === attributes.backElType && ( 
                                        <>
                                            { "hexagon" !== attributes.backIconShape && (
                                                <i className={ attributes.backElIcon }></i>
                                            )}
                                            { "hexagon" === attributes.backIconShape && 
                                                backHexagonIcon
                                            }
                                        </>
                                    )}
                                    { 'image' === attributes.backElType && (
                                        <img src={ attributes.backElImage } />
                                    )}
                                </div>
                            )}
                            <div className="wpmozo-adfgu-flip-box-content-wrap">
                                <div className="wpmozo-adfgu-flip-box-heading-wrap">
                                    <RichText
                                        className="wpmozo-adfgu-flip-box-title"
                                        tagName={ attributes.backHeadingLavel }
                                        value={ attributes.backTitle }
                                        onChange={ ( newValue ) => setAttributes( { backTitle: newValue } ) } 
                                        placeholder={ __('Back Title', 'wpmozo-addons-lite-for-gutenberg') }
                                    />
                                </div>
                                <div className="wpmozo-adfgu-flip-box-description">
                                    <RichText
                                        value={ attributes.backContnet }
                                        onChange={ ( newValue ) => setAttributes( { backContnet: newValue } ) } 
                                        placeholder={ __('Here you can set back text.', 'wpmozo-addons-lite-for-gutenberg') }
                                    />
                                </div>
                                { 
                                    attributes.backHasButton &&
                                    ! wpmozoCoreFun.wpmozo_is_empty( attributes.backBtnText ) && 
                                    ! wpmozoCoreFun.wpmozo_is_empty( attributes.backBtnUrl ) &&
                                    <div className="wpmozo-adfgu-flip-box-button-wrap">
                                        <div className="wpmozo-adfgu-flip-box-button-wrap-inner">
                                            <a 
                                                className={`wpmozo-adfgu-flip-box-button${backBtnOnHover}`}
                                                target="_blank"
                                                href={ attributes.backBtnUrl }
                                            >
                                                { ! wpmozoCoreFun.wpmozo_is_empty( backBtnIcon ) && 'before' === attributes.backBtnIconPosition &&
                                                    backBtnIcon
                                                }
                                                { attributes.backBtnText }
                                                { ! wpmozoCoreFun.wpmozo_is_empty( backBtnIcon ) && 'after' === attributes.backBtnIconPosition &&
                                                    backBtnIcon
                                                }
                                            </a>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;