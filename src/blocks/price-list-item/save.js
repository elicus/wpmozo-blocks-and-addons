import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import WPMozoPriceListLayout from "./save-layout";
import { mergeWrapperProps } from '../../common/utils.js';


export default function save({ attributes }) {

    const clientId   = attributes.ID,
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-bna-price-list-item' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    return (
        <>
            <style>
                { generateDynamicStyle({ attributes, clientId }) }
            </style>
            <div {...blockProps} id={`block-${clientId}`}>
                <WPMozoPriceListLayout attributes={attributes} />
            </div>
        </>
    );
}
