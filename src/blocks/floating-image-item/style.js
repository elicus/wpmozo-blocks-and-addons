
const Style = ({attributes, ID, clientId}) => {

    const parent = '#block-'+clientId,
    wpmozoCoreFun = window.wpmozo,
    wpmozo_is_empty = wpmozoCoreFun.wpmozo_is_empty,
    toConvertStyles = [
        'image'
    ];
    
    let css           = '',
        convertedStyle = wpmozoCoreFun.convetInlineStyleStr( toConvertStyles, attributes );

    let allInline = [
        { 
            selector: '.floating-image',
            style: {
                'width': attributes.imagewidth,
                'height': attributes.imageheight
            },
            additional: convertedStyle.image,
        }
    ];

    let generateStyle = wpmozoCoreFun.wpmozo_generate_style([{
        selector: parent,
        style: {
            'top': attributes.verticalAlign,
            'left': attributes.horizontalAlign,
            'animation-name': `wpmozo_float_${attributes.animationEffect}`,
            'animation-duration': attributes.animationDuration+'ms',
            'animation-direction': 'alternate',
            'animation-iteration-count': attributes.animationRepeat,
            'animation-timing-function': attributes.speedCurve,
            'animation-delay': attributes.animationDelay+'ms'
        },
    }]);

    css += generateStyle;

    generateStyle = wpmozoCoreFun.wpmozo_generate_style(allInline);

    if ( ! wpmozoCoreFun.wpmozo_is_empty( generateStyle ) ) {
        css += `
            ${parent} {
                ${generateStyle}
            }
        `;
    }

    return (
        <style className="wpmozo-dynamic-style" data-id={ID} data-client-id={clientId}>{css}</style>
    );

}

export default Style;