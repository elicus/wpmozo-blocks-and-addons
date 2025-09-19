import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {
    
    const { ID } = attributes;

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
                <div 
                    className={`wpmozo-bna-scroll-stack-cards-wrapper wpmozo-bna-scroll-stack-cards-content-${attributes.contentAlignment}`}
                    data-trigger={attributes.accordionTrigger}
                    data-default-active={attributes.activeAccordion}
                >
                    <InnerBlocks.Content/>
                </div>
            </div>
        </>
    );
}
