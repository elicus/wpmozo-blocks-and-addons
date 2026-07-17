
import WpmozoTypography from './wpmozo-typography/wpmozo-typography';
import WpmozoColorPicker from './wpmozo-colorpicker/wpmozo-colorpicker';
import WpmozoDimensions from './wpmozo-dimensions/wpmozo-dimensions';
import WpmozoSize from './wpmozo-size/wpmozo-size';
import WpmozoBorder from './wpmozo-border/wpmozo-border';
import WpmozoMediaUploader from './wpmozo-media-uploader/wpmozo-media-uploader';
import WpmozoIconpicker from './wpmozo-iconpicker/wpmozo-iconpicker';
import WpmozoAlignment from './wpmozo-alignment/wpmozo-alignment';
import WpmozoColorCombo from './wpmozo-colorcombo/wpmozo-colorcombo';
import WpmozoRangeSize from './wpmozo-range-size/wpmozo-range-size';
import WpmozoVideoUploader from './wpmozo-video-uploader/wpmozo-video-uploader';
import WpmozoTextShadow from './wpmozo-textshadow/wpmozo-textshadow';
import MozoStates from './mozo-states/mozo-states';

export {
	WpmozoTypography,
	WpmozoColorPicker,
	WpmozoDimensions,
	WpmozoSize,
	WpmozoBorder,
	WpmozoMediaUploader,
	WpmozoIconpicker,
	WpmozoAlignment,
	WpmozoColorCombo,
	WpmozoRangeSize,
	WpmozoVideoUploader,
	WpmozoTextShadow,
	MozoStates
}

// Export them globally for pro plugin.
if ( typeof window !== 'undefined' ) {
	window.WPMozoBNAComponents = window.WPMozoBNAComponents || {};
	Object.assign( window.WPMozoBNAComponents, {
		WpmozoTypography,
		WpmozoColorPicker,
		WpmozoDimensions,
		WpmozoSize,
		WpmozoBorder,
		WpmozoMediaUploader,
		WpmozoIconpicker,
		WpmozoAlignment,
		WpmozoColorCombo,
		WpmozoRangeSize,
		WpmozoVideoUploader,
		WpmozoTextShadow,
		MozoStates
	} );
}
