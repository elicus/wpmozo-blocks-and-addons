// deprecated/version-1.js
import classnames from 'classnames';
import generateDynamicStyle from "../style";

const V1 = {
	attributes: {
		ID: { type: "string" },
		className: { type: "string" },

		image: { type: "object" },
		stackType: { type: "string", default: "image" },
		stackIcon: { type: "string", default: "fas fa-arrow-right" },
		tooltipText: { type: "string" },
		itemBackground: { type: "string"},
		itemBGGradient: { type: "string" },
		imageborder: {type: "object"},
		imageborderRadius: {type: "string"}
	},
	save( { attributes } ) {

        const ID = attributes.ID;

        const {
            image,
            tooltipText
        } = attributes;

        const imageSrc = image && image.url ? image.url : (typeof wpmozo_bna_editor_object !== 'undefined' ? wpmozo_bna_editor_object.placeholderImg : '');
        const defaultedAlt = image && image.alt ? image.alt : '';

        return ( <>
            <div id={'block-' + ID} className={ classnames( 'wpmozo-image-stack-item', attributes.className ) }>
                <span className={`wpmozo-stack-item-wrapper stack-item-type-` + attributes.stackType}>
                    { 'image' === attributes.stackType && (
                        <img className="wpmozo-stack-item-img"
                            alt={defaultedAlt}
                            src={imageSrc}
                            loading="lazy"
                            title={tooltipText}
                        />
                    ) }
                    { 'icon' === attributes.stackType && (
                        <i className={attributes.stackIcon} title={tooltipText}></i>
                    ) }
                </span>
            </div>

            <style>{ generateDynamicStyle( { attributes, ID } ) }</style>
        </> );
	},
};

export default V1;