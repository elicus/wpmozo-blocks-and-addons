
import Inspector from "./inspector";
import Style from "./style";

import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";
import {
    useBlockProps,
    MediaPlaceholder,
    useInnerBlocksProps
} from '@wordpress/block-editor';

import { useEffect } from 'react';
import { dispatch } from "@wordpress/data";
import ServerSideRender from '@wordpress/server-side-render';

const Edit = ({ attributes }) => {
	const blockProps = useBlockProps();
    return (
        <div { ...blockProps }>
            <ServerSideRender
                block="wpmozo/team-slider"
                attributes={ attributes }
                httpMethod="POST"
            />
        </div>
    );

};

export default Edit;