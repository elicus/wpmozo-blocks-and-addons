
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import { useBlockProps, RichText } from "@wordpress/block-editor";

const Edit = (props) => {

    const attributes = props.attributes,
    clientId = props.clientId,
    ID = window.wpmozo.getIdByClientid( clientId ),
    setAttributes = props.setAttributes;

    attributes.ID = ID;

    const blockProps = useBlockProps({
        className: 'wpmozo-bna-fancy-text-wrap',
    });

	return (
        <Fragment>
            <Inspector {...props} />
            <Style 
                attributes={attributes} 
                ID={ID}
                clientId={clientId}  
            />
            <div {...blockProps}>
                <RichText
                    className={`wpmozo-bna-fancy-text-inner ${attributes.textStyle}`}
                    tagName='div'
                    value={ attributes.fancyText }
                    onChange={ ( newValue ) => setAttributes( { fancyText: newValue } ) } 
                    placeholder={ attributes.fancyText }
                />
            </div>
        </Fragment>
    );

};

export default Edit;