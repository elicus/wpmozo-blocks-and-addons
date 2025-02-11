import Style from "./style";

import { useBlockProps, RichText } from "@wordpress/block-editor";
import { createElement } from "@wordpress/element";

const Save = ({ attributes }) => {

    const {accessToken} = attributes;
    const {cache} = attributes;
    const {numberOfPosts} = attributes;

    return (
        <div className="wrapper-div">
            <h2>Access Token : </h2>
            <span>{accessToken} </span>

            <h3> Cache = </h3>
            <span> {cache} </span>

            <h3> Number Of Posts =  </h3>
            <span> {numberOfPosts} </span>
            
        </div>
    );
};

export default Save;