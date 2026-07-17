// deprecated/version-1.js
import { useBlockProps } from "@wordpress/block-editor";
import generateDynamicStyle from '../style';

const V1 = {
    attributes: {
        ID: { type: "string" },
		className: { type: "string" },

		image: { type: "string" },
		hoverEffect: { type: "string", default: "radial" },
		imageborder: { type: "object" },
        imageborderRadius: { type: "string" },
        forceFullwidth: { type: "boolean", default: false }
    },
    save( { attributes } ) {
        const ID = attributes.ID;
        let image = (attributes.image) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
            hoverEffect = attributes.hoverEffect;

        const effectClasses = {
            radial: ["circle", "zoom"],
            glow: ["filter", "zoom"],
            rotate: ["rotate"],
            flash: ["flash", "filter", "zoom"],
            flash_instant: ["flash_inst_rev", "filter", "zoom"],
            diagonal: ["diagonal", "zoom"],
            glitch: ["wpmozo-bna-glitch-image"],
            slide_glitch: ["wpmozo-bna-slide-glitch"],
        };

        const classes = [
            "wpmozo-bna-image-hover-effect-inner",
            ...(effectClasses[hoverEffect] || []),
        ].join(" ");

        return ( <>
            <style>{ generateDynamicStyle( { attributes } ) }</style>

            <div { ...useBlockProps.save( {className: 'wpmozo-bna-image-hover-effect ' + ( attributes.className || '' ) } ) }
                id={`block-${ID}`}
            >
                <div className={`wpmozo-bna-image-hover-effect-wrapper wpmozo-bna-effect-${hoverEffect}`}>
                    <div className={classes}>
                        <img src={image} alt="" />
                        {hoverEffect === "slide_glitch" && (
                            <div className="wpmozo-bna-slide-glitch-overlay">
                                <div className="quadrant quad1"></div>
                                <div className="quadrant quad2"></div>
                                <div className="quadrant quad3"></div>
                                <div className="quadrant quad4"></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </> );
    },
};

export default V1;