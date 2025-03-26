
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
    blockProps = useBlockProps({ className: 'wpmozo-bna-flip-box-main' }),
    [ editMode, setEditMode ] = useState(false),
    editModeLabel = ( ! editMode ) ? __( 'Front', 'wpmozo-blocks-and-addons' ) : __( 'Back', 'wpmozo-blocks-and-addons' );

    attributes.ID = ID;

    let editModeSide = ( ! editMode ) ? ' edit-front' : ' edit-back';
    if ( ! isSelected ){
        editModeSide = '';
    }

    
    useEffect(() => {
        jQuery('body').find('.wpmozo-bna-flip-box-wrap').each(function(){

            jQuery(this).find('.wpmozo-bna-flip-box-side').each(function(){
                jQuery(this).removeAttr('style');
            });

            let $this = jQuery(this);
            var maxHeight = Math.max.apply( null, $this.find('.wpmozo-bna-flip-box-side').map( function(){
                return jQuery(this).outerHeight();
            }).get());
            

            jQuery(this).find('.wpmozo-bna-flip-box-side').each(function(){
                jQuery(this).css('height', maxHeight+'px');
            });

        });
    });
    

    let backBtnIcon = (
        <i className={ attributes.backBtnIcon }></i>
    ),
    backBtnOnHover = ( attributes.backBtnIconOnHover ) ? ' show-on-hover' : '',
    frontHexagonIcon = (
        <div className="wpmozo-bna-hexagon-wrap">
            <div className="wpmozo-bna-hexagon-shape">
                <i className={ attributes.frontElIcon }></i>
            </div>
        </div>
    ),
    backHexagonIcon = (
        <div className="wpmozo-bna-hexagon-wrap">
            <div className="wpmozo-bna-hexagon-shape">
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
                            className="wpmozo-bna-flip-box-edit-control"
                            label={ editModeLabel }
                            checked={ editMode }
                            onChange={ ( newValue ) => setEditMode( newValue ) }
                        />
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div className={`wpmozo-bna-flip-box-wrap${layoutType}${editModeSide}`} flip-direction={ attributes.flipDirection }>
                    <div className="wpmozo-bna-flip-box-side wpmozo-bna-flip-box-front">
                        <div className="wpmozo-bna-flip-box-inner">
                            { 'none' !== attributes.frontElType && (
                                <div className={ 'icon' === attributes.frontElType ? "wpmozo-bna-flip-box-icon-wrap" : "wpmozo-bna-flip-box-image-wrap"}>
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
                            <div className="wpmozo-bna-flip-box-content-wrap">
                                <div className="wpmozo-bna-flip-box-heading-wrap">
                                    <RichText
                                        className="wpmozo-bna-flip-box-title"
                                        tagName={ attributes.frontHeadingLavel }
                                        value={ attributes.frontTitle }
                                        onChange={ ( newValue ) => setAttributes( { frontTitle: newValue } ) } 
                                        placeholder={ __('Front Title', 'wpmozo-blocks-and-addons') }
                                    />
                                </div>
                                <div className="wpmozo-bna-flip-box-description">
                                    <RichText
                                        value={ attributes.frontContnet }
                                        onChange={ ( newValue ) => setAttributes( { frontContnet: newValue } ) } 
                                        placeholder={ __('Here you can set front text.', 'wpmozo-blocks-and-addons') }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpmozo-bna-flip-box-side wpmozo-bna-flip-box-back">
                        <div className="wpmozo-bna-flip-box-inner">
                            { 'none' !== attributes.backElType && (
                                <div className={ 'icon' === attributes.backElType ? "wpmozo-bna-flip-box-icon-wrap" : "wpmozo-bna-flip-box-image-wrap"}>
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
                            <div className="wpmozo-bna-flip-box-content-wrap">
                                <div className="wpmozo-bna-flip-box-heading-wrap">
                                    <RichText
                                        className="wpmozo-bna-flip-box-title"
                                        tagName={ attributes.backHeadingLavel }
                                        value={ attributes.backTitle }
                                        onChange={ ( newValue ) => setAttributes( { backTitle: newValue } ) } 
                                        placeholder={ __('Back Title', 'wpmozo-blocks-and-addons') }
                                    />
                                </div>
                                <div className="wpmozo-bna-flip-box-description">
                                    <RichText
                                        value={ attributes.backContnet }
                                        onChange={ ( newValue ) => setAttributes( { backContnet: newValue } ) } 
                                        placeholder={ __('Here you can set back text.', 'wpmozo-blocks-and-addons') }
                                    />
                                </div>
                                { 
                                    attributes.backHasButton &&
                                    ! wpmozoCoreFun.wpmozo_is_empty( attributes.backBtnText ) && 
                                    ! wpmozoCoreFun.wpmozo_is_empty( attributes.backBtnUrl ) &&
                                    <div className="wpmozo-bna-flip-box-button-wrap">
                                        <div className="wpmozo-bna-flip-box-button-wrap-inner">
                                            <a 
                                                className={`wpmozo-bna-flip-box-button${backBtnOnHover}`}
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