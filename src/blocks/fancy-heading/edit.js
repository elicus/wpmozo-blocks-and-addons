
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment, createElement } from "@wordpress/element";
import { useBlockProps, RichText, BlockControls } from "@wordpress/block-editor";
import { useState } from "@wordpress/element";

import { 
    ToolbarGroup,
} from "@wordpress/components";

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    isSelected = props.isSelected,
    setAttributes = props.setAttributes;

    attributes.ID = ID;

    const blockProps = useBlockProps();
    const [ currentHeadingType, setcurrentHeadingType ] = useState('');
    const isActiveType = ( type ) => {
        return ( isSelected && type === currentHeadingType ) ? 'wpmozo-active-sub-block' : '';
    }
    const activeTypeText = () => {
        let type = __( 'Pre', 'wpmozo-addons-lite-for-gutenberg' );
        if ( 't1' === currentHeadingType ) {
            type = __( 'Pre', 'wpmozo-addons-lite-for-gutenberg' );
        }else if ( 't2' === currentHeadingType ){
            type = __( 'Main', 'wpmozo-addons-lite-for-gutenberg' );
        }else if ( 't3' === currentHeadingType ){
            type = __( 'Post', 'wpmozo-addons-lite-for-gutenberg' );
        }
        return type;
    }

    const allText = (
        <>
            <RichText
                className={`wpmozo-adfgu-pre-text ${isActiveType('t1')}`}
                allowedFormats={[]}
                tagName='span'
                value={ attributes.preHeading }
                onChange={ ( newValue ) => setAttributes( { preHeading: newValue } ) } 
                placeholder={ __( 'Pre', 'wpmozo-addons-lite-for-gutenberg' ) }
                onFocus={ () => setcurrentHeadingType( 't1' ) }
            />
            <RichText
                className={`wpmozo-adfgu-main-text ${isActiveType('t2')}`}
                allowedFormats={[]}
                tagName='span'
                value={ attributes.mainHeading }
                onChange={ ( newValue ) => setAttributes( { mainHeading: newValue } ) } 
                placeholder={ __( 'Main', 'wpmozo-addons-lite-for-gutenberg' ) }
                onFocus={ () => setcurrentHeadingType( 't2' ) }
            />
            <RichText
                className={`wpmozo-adfgu-post-text ${isActiveType('t3')}`}
                allowedFormats={[]}
                tagName='span'
                value={ attributes.postHeading }
                onChange={ ( newValue ) => setAttributes( { postHeading: newValue } ) } 
                placeholder={ __( 'Post', 'wpmozo-addons-lite-for-gutenberg' ) }
                onFocus={ () => setcurrentHeadingType( 't3' ) }
            />
        </>
    );

    const heading = createElement( attributes.headingLavel, {
        className: 'wpmozo-adfgu-fancy-heading-inner'
    }, allText );


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
                    <p>{activeTypeText()}</p>
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <div className="wpmozo-adfgu-fancy-heading-wrap">
                    {heading}
                </div>
            </div>
        </Fragment>
    );

};

export default Edit;