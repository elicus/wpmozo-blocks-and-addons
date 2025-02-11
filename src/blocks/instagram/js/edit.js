import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment, useEffect, useState, createElement } from "@wordpress/element";
import { useBlockProps, RichText, BlockControls } from "@wordpress/block-editor";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";


import { 
    ToolbarGroup,
} from "@wordpress/components";

const Edit = (props) => {
    const { attributes, clientId, isSelected, setAttributes } = props;
    const [retval, setRetval] = useState("Please enter your Instagram access token");
    const [col, setCol] = useState('3');
    const blockProps = useBlockProps();
    attributes.clientId = clientId;

    const { accessToken, numberOfPosts = '10', cache = '60', columns = '3' } = attributes;

    useEffect(() => {
        if (accessToken) {
            fetch(`https://graph.instagram.com/me/media?fields=id,media_url,caption,media_type,thumbnail_url,timestamp,username,permalink&limit=${numberOfPosts}&access_token=${accessToken}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                let posts = data.data; 
                setAttributes({ posts });

                const    allText = <>
                        <div className="wpmozo-adfgu-instagram-posts">
                            {posts.map((value, index) => (
                            <div key={"post"+index+1} className="wpmozo-adfgu-instagram-single-post">
                                <img key={index} src={value.media_url}  />
                                {true === attributes.displayCaption ? <p key={"caption"+index} >{value.caption}</p> : ''}
                            </div>
                            ))}
                        </div>
                        </>
                const heading = createElement( 'div', {
                    className: 'wpmozo-adfgu-instagram-inner'
                    }, allText );
                setCol(columns);
                
                setRetval( heading )
                
            }).catch(error => {
                console.error('There was a problem with the fetch operation:', error)});
        }
    }, [accessToken, numberOfPosts, columns, attributes.displayCaption, setAttributes]); 

    return (
        <Fragment>
            <Inspector {...props} />
            <Style {...attributes} />
            <div {...blockProps}>
                <div className="wpmozo-adfgu-instagram-wrap">
                {retval}
                </div>
            </div>
        </Fragment>
    );
};

export default Edit;