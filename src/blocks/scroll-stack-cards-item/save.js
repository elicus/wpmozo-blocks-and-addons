import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { RichText } from '@wordpress/block-editor';
import {wpmozo_is_empty} from '../../common/utils.js';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
    
    const { ID, parentAtts } = attributes;

    // Only add ID attribute if it exists
    const blockProps = useBlockProps.save( {
        className: attributes.className,
        ...( ID ? { id: `block-${ ID }` } : {} ),
    } );

 
    return (
        <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes, ID } ) }</style>
            ) }
            <div { ...blockProps }>
                
            </div>
        </>
    );
}
