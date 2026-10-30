import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import Inspector from './inspector';
import generateDynamicStyle from './style';
import { Fragment, useState, useEffect } from "@wordpress/element";
import { 
    ToolbarGroup,
    ToggleControl,
    ToolbarButton,
} from "@wordpress/components";
import { wpmozo_is_empty, mergeWrapperProps } from '../../common/utils.js';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {
    const attributes = props.attributes,
        clientId = props.clientId,
        ID = clientId,
        isSelected = props.isSelected,
        setAttributes = props.setAttributes,
        layoutType = ( 'flip' === attributes.animationType ) ? ' layout1' : ' layout2',
        [ editMode, setEditMode ] = useState(false),
        editModeLabel = ( ! editMode ) ? __( 'Front', 'wpmozo-blocks-and-addons' ) : __( 'Back', 'wpmozo-blocks-and-addons' ),
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-flip-box-main${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle,
        isEdit = true;

    useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] );

    let editModeSide = ( ! editMode ) ? ' edit-front' : ' edit-back';
    if ( ! isSelected ){
        editModeSide = '';
    }
    /**
     * Through an event for the script to reload everytime there is a change in the editor.
    */
    useEffect(() => {
        const event = new CustomEvent('flipBoxUpdated');
        const iframe = document.querySelector('iframe[name="editor-canvas"]');
        window.dispatchEvent(event);
        if (iframe?.contentWindow) {
            iframe.contentWindow.dispatchEvent(event);
        }
    }, [attributes]);

    let backBtnIcon = '' === attributes.backBtnIcon ? '' : (
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
            <style>
                { generateDynamicStyle({ attributes, clientId, isEdit }) }
            </style>
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
                                            { "hexagon" !== attributes.frontIconShape && '' !== attributes.frontElIcon && (
                                                <i className={ attributes.frontElIcon }></i>
                                            )}
                                            { "hexagon" === attributes.frontIconShape && '' !== attributes.frontElIcon && 
                                                frontHexagonIcon
                                            }
                                        </>
                                    )}
                                    { 'image' === attributes.frontElType && '' !== attributes.frontElImage && (
                                        <img src={ attributes.frontElImage } />
                                    )}
                                </div>
                            )}
                            <div className="wpmozo-bna-flip-box-content-wrap">
                                <div className="wpmozo-bna-flip-box-heading-wrap">
                                    <RichText
                                        className="wpmozo-bna-flip-box-title"
                                        tagName={ attributes.frontHeadingLevel }
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
                                            { "hexagon" !== attributes.backIconShape && '' !== attributes.backElIcon && (
                                                <i className={ attributes.backElIcon }></i>
                                            )}
                                            { "hexagon" === attributes.backIconShape && '' !== attributes.backElIcon && 
                                                backHexagonIcon
                                            }
                                        </>
                                    )}
                                    { 'image' === attributes.backElType && '' !== attributes.backElImage && (
                                        <img src={ attributes.backElImage } />
                                    )}
                                </div>
                            )}
                            <div className="wpmozo-bna-flip-box-content-wrap">
                                <div className="wpmozo-bna-flip-box-heading-wrap">
                                    <RichText
                                        className="wpmozo-bna-flip-box-title"
                                        tagName={ attributes.backHeadingLevel }
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
                                    ! wpmozo_is_empty( attributes.backBtnText ) && 
                                    ! wpmozo_is_empty( attributes.backBtnUrl ) &&
                                    <div className="wpmozo-bna-flip-box-button-wrap">
                                        <div className="wpmozo-bna-flip-box-button-wrap-inner">
                                            <a 
                                                className={`wpmozo-bna-flip-box-button${backBtnOnHover}`}
                                                target="_blank"
                                            >
                                                { attributes.backBtnText }
                                                {backBtnIcon}
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
}
