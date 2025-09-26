import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';

export default function save({ attributes }) {
    
    const { 
        ID, 
        layout,
        animationStartViewportPos
    } = attributes;

    // Only add ID attribute if it exists
    const blockProps = useBlockProps.save( {
        className: attributes.className,
        ...( ID ? { id: `block-${ ID }` } : {} ),
    } );

    let dataCollapsedWidth = ( 'horizontal' === attributes.layout ) 
        ? { 'data-collapsed_width': `${attributes.collapsedWidth}px` } 
        : {};

    return (
        <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes } ) }</style>
            ) }
            <div { ...blockProps }>
                <div 
                    className={`wpmozo-bna-scroll-stack-cards-wrapper layout-${layout}`}
                    data-layout={layout}
                    data-animation_start_viewport_pos={`${animationStartViewportPos}%`}
                    {...dataCollapsedWidth}
                >
                    <div className="wpmozo-bna-scroll-stack-cards-items">
                        <InnerBlocks.Content/>
                    </div>
                </div>
            </div>
        </>
    );
}
