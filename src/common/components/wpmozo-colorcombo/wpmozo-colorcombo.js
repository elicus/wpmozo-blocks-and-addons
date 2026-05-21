import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	ButtonGroup,
	Button,
} from '@wordpress/components';
import WpmozoColorPicker from '../wpmozo-colorpicker/wpmozo-colorpicker';

const WpmozoColorCombo = (args) => {
	const [colorType, setColorType] = useState('normal');

	const label = args.hasOwnProperty('label') ? args.label : '';

	return (
		<BaseControl
			label={label}
			className="wpmozo-color-combo-wrap"
		>
			<ButtonGroup>
				<Button
					className="wpmozo-color-combo-type"
					isPressed={colorType === 'normal'}
					onClick={() => setColorType('normal')}
				>
					{__('Normal', 'wpmozo-blocks-and-addons')}
				</Button>
				<Button
					className="wpmozo-color-combo-type"
					isPressed={colorType === 'hover'}
					onClick={() => setColorType('hover')}
				>
					{__('Hover', 'wpmozo-blocks-and-addons')}
				</Button>
			</ButtonGroup>

			{colorType === 'normal' && <WpmozoColorPicker {...args.normal} />}
			{colorType === 'hover' && <WpmozoColorPicker {...args.hover} />}
		</BaseControl>
	);
};

export default WpmozoColorCombo;
