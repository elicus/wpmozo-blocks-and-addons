
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const clientId = attributes.clientId,
    wpmozoCoreFun = window.wpmozo,
    layoutType = ( 'flip' === attributes.animationType ) ? ' layout1' : ' layout2';

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
        <div {...useBlockProps.save({ className: 'wpmozo-adfgu-flip-box-main' })} id={`block-${clientId}`}>
            <div className={`wpmozo-adfgu-flip-box-wrap${layoutType}`} flip-direction={ attributes.flipDirection }>
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
                            { ! wpmozoCoreFun.wpmozo_is_empty( attributes.frontTitle ) && 
                                <div className="wpmozo-adfgu-flip-box-heading-wrap">
                                    <RichText.Content
                                        className="wpmozo-adfgu-flip-box-title"
                                        tagName={ attributes.frontHeadingLavel }
                                        value={ attributes.frontTitle }
                                    />
                                </div>
                            }
                            { ! wpmozoCoreFun.wpmozo_is_empty( attributes.frontContnet ) && 
                                <div className="wpmozo-adfgu-flip-box-description">
                                    <RichText.Content
                                        value={ attributes.frontContnet }
                                    />
                                </div>
                            }
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
                            { ! wpmozoCoreFun.wpmozo_is_empty( attributes.backTitle ) && 
                                <div className="wpmozo-adfgu-flip-box-heading-wrap">
                                    <RichText.Content
                                        className="wpmozo-adfgu-flip-box-title"
                                        tagName={ attributes.backHeadingLavel }
                                        value={ attributes.backTitle }
                                    />
                                </div>
                            }
                            { ! wpmozoCoreFun.wpmozo_is_empty( attributes.backContnet ) && 
                                <div className="wpmozo-adfgu-flip-box-description">
                                    <RichText.Content
                                        value={ attributes.backContnet }
                                    />
                                </div>
                            }
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
    );
};

export default Save;