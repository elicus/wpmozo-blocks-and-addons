import { InnerBlocks, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import generateDynamicStyle from './style';
import { mergeWrapperProps } from '../../common/utils.js';

export default function save({ attributes }) {
    
    const { ID, className } = attributes,
        wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: 'wpmozo-image-accordion' ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps.save(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

    return (
        <>
            {/* Only output <style> if ID exists. */}
            { ( ID && '' !== ID ) && (
                <style>{ generateDynamicStyle( { attributes } ) }</style>
            ) }
            <div { ...blockProps } id={`block-${clientId}`}>
                <div 
                    className={`wpmozo-bna-image-accordion-wrapper wpmozo-bna-image-accordion-content-${attributes.contentAlignment} ${attributes.accordionOrientation}`}
                    data-trigger={attributes.accordionTrigger}
                    data-default-active={attributes.activeAccordion}
                >
                    <InnerBlocks.Content/>
                </div>
            </div>
        </>
    );
}
