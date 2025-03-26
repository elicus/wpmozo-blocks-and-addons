const el = window.wp.element.createElement;
const { useState } = window.wp.element;
const __ = wp.i18n.__;
const { 
    BaseControl,
    ButtonGroup,
    Button
} = window.wp.components;
import WpmozoColorPicker from '../wpmozo-colorpicker/wpmozo-colorpicker';

const WpmozoColorCombo = function(args){

    const [ colorType, setColorType ] = useState('normal'),
        label                         = ( args.hasOwnProperty('label') )
            ? args.label
            : '';

    return (
        <BaseControl
            label={ label }
            className='wpmozo-color-combo-wrap'
        >    
            <ButtonGroup>
                <Button
                    className='wpmozo-color-combo-type'
                    isPressed={ ( 'normal' === colorType ) ? true : false }
                    onClick={ () => setColorType( 'normal' ) }
                >
                    { __( 'Normal', 'wpmozo-blocks-and-addons' ) }
                </Button>
                <Button 
                    className='wpmozo-color-combo-type'
                    isPressed={ ( 'hover' === colorType ) ? true : false }
                    onClick={ () => setColorType( 'hover' ) }
                >
                    { __( 'Hover', 'wpmozo-blocks-and-addons' ) }
                </Button>
            </ButtonGroup>
            { 'normal' === colorType &&
                <WpmozoColorPicker
                    { ...args.normal }
                />
            }
            { 'hover' === colorType &&
                <WpmozoColorPicker
                    { ...args.hover }
                />
            }
        </BaseControl>
    );

}

export default WpmozoColorCombo;
