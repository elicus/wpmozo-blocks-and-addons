
const Style = (attributes) => {

    const clientId = attributes.clientId,
    parent = '#block-'+clientId,
    wpmozoCoreFun = window.wpmozo,
    wpmozo_is_empty = wpmozoCoreFun.wpmozo_is_empty;
    
    let allInline = [],
    css           = '';

    let generateStyle = wpmozoCoreFun.wpmozo_generate_style([{
        selector: parent,
        style: {
            'top': attributes.horizontalAlign,
            'left': attributes.verticalAlign,
            'width': attributes.imagewidth,
            'background': attributes.imageBackground,
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
        <style className="wpmozo-dynamic-style">{css}</style>
    );

}

export default Style;