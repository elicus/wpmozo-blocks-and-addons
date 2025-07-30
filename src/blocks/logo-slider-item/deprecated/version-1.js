import {wpmozo_is_empty} from "../../../common/utils";

const deprecatedSave = ({ attributes }) => {
    const ID = attributes.ID,
        altText = ! wpmozo_is_empty( attributes.altText ) 
            ? attributes.altText
            : 'alt',
        linkTarget = ( 'external' === attributes.linkTarget ) ? '_blank' : '_self';
        
    let logo = '';

    if ( ! wpmozo_is_empty( attributes.link ) ) {
        logo = (
            <a href={attributes.link} target={ linkTarget }>
                <div className="logo-wrap">
                    <img className="logo-img" src={ attributes.logo.url } alt={altText} />
                </div>
            </a>
        )
    }else{
        logo = (
            <div className="logo-wrap">
                <img className="logo-img" src={ attributes.logo.url } alt={altText} />
            </div>
        )
    }
 
    return (
        <div className="swiper-slide" id={`block-${ID}`}>
            { logo }
        </div>
    );
};

export default {
    attributes: {
        // Same as old v1.0.0 attributes
        ID: { type: "string" },
        logo: { type: "object" },
        altText: { type: "string" },
        link: { type: "string" },
        linkTarget: { type: "string", default: "same" },
        logoBackground: { type: "string" },
        logopadding: { type: "object" },
        logoborderRadius: { type: "string" },
        logoborder: { type: "object" }
    },
    save: deprecatedSave,
};
