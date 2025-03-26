const el = window.wp.element.createElement;
const __ = wp.i18n.__;
const { Icon, __experimentalToggleGroupControlOptionIcon, __experimentalToggleGroupControl, SVG, Path } = window.wp.components;

const WpmozoAlignment = function(args){

    const { alignmentKey } = args;
    let elAlignment = '';

    if ( ! args.hasOwnProperty('type') || ( args.hasOwnProperty('type') && 'horizontal' === args.type ) ) {
        let label = args.hasOwnProperty('label') ? args.label
            : __( 'Alignment', 'wpmozo-blocks-and-addons'),
            className = args.hasOwnProperty('className') ? args.className : 
            'wpmozo-alignment-compo horizontal',
            aignments = {
                left: el(__experimentalToggleGroupControlOptionIcon, {
                    key: 'wpmozo-alignment-left-'+alignmentKey,
                    value: "left",
                    icon: el(Icon, {icon: 'editor-alignleft'}),
                    label: __( 'Left', 'wpmozo-blocks-and-addons')
                }),
                center: el(__experimentalToggleGroupControlOptionIcon, {
                    key: 'wpmozo-alignment-center-'+alignmentKey,
                    value: "center",
                    icon: el(Icon, {icon: 'editor-aligncenter'}),
                    label: __( 'Center', 'wpmozo-blocks-and-addons')
                }),
                right: el(__experimentalToggleGroupControlOptionIcon, {
                    key: 'wpmozo-alignment-right-'+alignmentKey,
                    value: "right",
                    icon: el(Icon, {icon: 'editor-alignright'}),
                    label: __( 'Right', 'wpmozo-blocks-and-addons')
                })
            },
            typeSetAlign = [aignments.left,aignments.center,aignments.right];

        if ( args.hasOwnProperty('alignments') ) {
            typeSetAlign = [];
            args.alignments.map( alignment => typeSetAlign.push( aignments[alignment]) );
        }
        
        elAlignment = el(__experimentalToggleGroupControl, {
            key: 'wpmozo-alignment-horizontal-'+alignmentKey,
            className: className,
            onChange: args.onChange,
            label: label,
            isDeselectable: true,
            isBlock: true,
            value: args.value,
            children: typeSetAlign,
        });

    }else if( args.hasOwnProperty('type') && 'vertical' === args.type ){

        let label = args.hasOwnProperty('label') ? args.label
            : __( 'Alignment', 'wpmozo-blocks-and-addons'),
            className = args.hasOwnProperty('className') ? args.className : 
            'wpmozo-alignment-compo vertical',
            aignments = {
                top: el(__experimentalToggleGroupControlOptionIcon, {
                    key: 'wpmozo-alignment-top-'+alignmentKey,
                    value: "top",
                    icon: el(SVG, {xmlns: "http://www.w3.org/2000/svg",viewBox: "0 0 24 24",children: el(Path, {d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z"})}),
                    label: __( 'Top', 'wpmozo-blocks-and-addons')
                }),
                center: el(__experimentalToggleGroupControlOptionIcon, {
                    key: 'wpmozo-alignment-center-'+alignmentKey,
                    value: "center",
                    icon: el(SVG, {xmlns: "http://www.w3.org/2000/svg",viewBox: "0 0 24 24",children: el(Path, {d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z"})}),
                    label: __( 'Center', 'wpmozo-blocks-and-addons')
                }),
                bottom: el(__experimentalToggleGroupControlOptionIcon, {
                    key: 'wpmozo-alignment-bottom-'+alignmentKey,
                    value: "bottom",
                    icon: el(SVG, {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24",children: el(Path, {d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z"})}),
                    label: __( 'bottom', 'wpmozo-blocks-and-addons')
                })
            },
            typeSetAlign = [aignments.top,aignments.center,aignments.bottom];

        if ( args.hasOwnProperty('alignments') ) {
            typeSetAlign = [];
            args.alignments.map( alignment => typeSetAlign.push( aignments[alignment]) );
        }
        
        elAlignment = el(__experimentalToggleGroupControl, {
            key: 'wpmozo-alignment-vertical-'+alignmentKey,
            className: className,
            onChange: args.onChange,
            label: label,
            isDeselectable: true,
            isBlock: true,
            value: args.value,
            children: typeSetAlign,
        });

    }

    return elAlignment;

}

export default WpmozoAlignment;
