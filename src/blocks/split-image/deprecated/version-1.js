// deprecated/version-1.js
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		splitImg: { type: "string", default: "/wp-content/plugins/wpmozo-blocks-and-addons/includes/assets/images/placeholder.webp" },
		rows: {type: "number",default: 3},
		columns: {type: "number",default: 3},
		gap: {type: "number",default: 10},
		blockLink: {type: "string"},
		blockLinkTarget: {type: "string", default: "external"},

		imageAlignment: {type: "string",default: "center"},
		imageborder: { type: "object" },
		imageborderRadius: { type: "string" },
		imagepadding: { type: "object" },
		imagemargin: { type: "object" },
		imageContainermargin: {type: "object"},
		imageContainerpadding: {type: "object"}
    },
    save( { attributes } ) {
        const { ID, className } = attributes;

        // Only add ID attribute if it exists.
        const blockProps = useBlockProps.save( {
            className: className,
            ...( ID ? { id: `block-${ ID }` } : {} ),
        } );

        const number = attributes.rows * attributes.columns;
        const gridBoxes = Array.from({length: number}).map((_, i) => (
            <span key={i} className="wpmozo_split_image_portion"></span>
        ));
        const url = attributes.blockLink ? attributes.blockLink : "";
        const target = attributes.blockLinkTarget || "";
        const linkTarget = target === 'external' ? '_blank' : '_self';

        return (
            <>
                {/* Only output <style> if ID exists. */}
                { ( ID && '' !== ID ) && (
                    <style>{ generateDynamicStyle( { attributes } ) }</style>
                ) }

                {url ? (
                    <a
                        {...blockProps}
                        href={url}
                        target={linkTarget}
                        rel={linkTarget === '_blank' ? 'noopener noreferrer' : undefined}
                    >
                        <div className="wpmozo_split_image_wrapper" data-rows={`${attributes.rows}`}
                            data-columns={`${attributes.columns}`}>
                            {gridBoxes}
                        </div>
                    </a>
                ) : (
                    <div {...blockProps}>
                        <div className="wpmozo_split_image_wrapper" data-rows={`${attributes.rows}`}
                            data-columns={`${attributes.columns}`}>
                            {gridBoxes}
                        </div>
                    </div>
                )}
            </>
        );
    },
};

export default V1;