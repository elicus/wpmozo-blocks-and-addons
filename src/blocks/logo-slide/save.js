
const Save = ({attributes}) => {
  
    const wpmozoCoreFun = window.wpmozo,
        ID = attributes.ID,
        altText = ! wpmozoCoreFun.wpmozo_is_empty( attributes.altText ) 
        	? attributes.altText
        	: 'alt',
        linkTarget = ( 'external' === attributes.linkTarget ) ? '_blank' : '_self';
        
    let logo = '';

    if ( ! wpmozoCoreFun.wpmozo_is_empty( attributes.link ) ) {
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

export default Save;