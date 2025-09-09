import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import WPMozoPriceListLayout from "./save-layout";


export default function save({ attributes }) {

    const clientId   = attributes.ID;

    return (
        <>
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...useBlockProps.save({ className: "wpmozo-bna-image-accordion-item", id:`block-${clientId}` })}>
                <WPMozoPriceListLayout attributes={attributes} />
            </div>
        </>
    );
}
