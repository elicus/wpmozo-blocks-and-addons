
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Save = ({ attributes }) => {

    const ID = attributes.ID,
    wpmozoCoreFun = window.wpmozo,
    layoutType = ( 'flip' === attributes.animationType ) ? ' layout1' : ' layout2';

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
        <div {...useBlockProps.save({ className: 'wpmozo-bna-flip-box-main' })} id={`block-${ID}`}>
            <div className={`wpmozo-bna-flip-box-wrap${layoutType}`} flip-direction={ attributes.flipDirection }>
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
                            { ! wpmozoCoreFun.wpmozo_is_empty( attributes.frontTitle ) && 
                                <div className="wpmozo-bna-flip-box-heading-wrap">
                                    <RichText.Content
                                        className="wpmozo-bna-flip-box-title"
                                        tagName={ attributes.frontHeadingLavel }
                                        value={ attributes.frontTitle }
                                    />
                                </div>
                            }
                            { ! wpmozoCoreFun.wpmozo_is_empty( attributes.frontContnet ) && 
                                <div className="wpmozo-bna-flip-box-description">
                                    <RichText.Content
                                        value={ attributes.frontContnet }
                                    />
                                </div>
                            }
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
                            { ! wpmozoCoreFun.wpmozo_is_empty( attributes.backTitle ) && 
                                <div className="wpmozo-bna-flip-box-heading-wrap">
                                    <RichText.Content
                                        className="wpmozo-bna-flip-box-title"
                                        tagName={ attributes.backHeadingLavel }
                                        value={ attributes.backTitle }
                                    />
                                </div>
                            }
                            { ! wpmozoCoreFun.wpmozo_is_empty( attributes.backContnet ) && 
                                <div className="wpmozo-bna-flip-box-description">
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
    );
};

export default Save;