import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import LayoutWrapper from "./save-layout";


export default function save({ attributes }) {

    const clientId   = attributes.ID;

    return (
        <>
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...useBlockProps.save({ className: "wpmozo-bna-price-list-item", ID:`block-${clientId}` })}>
                <LayoutWrapper attributes={attributes} />
            </div>
        </>
    );
}
