import { __ } from '@wordpress/i18n';

import {
	PanelBody,
} from '@wordpress/components';
import {
	WpmozoBorder,
	WpmozoAlignment,
	MozoStates,
} from '../../../common/components';

export const DesignPanel = ( { attributes, setAttributes, hoverState, setHoverState } ) => {
	const props = { attributes, setAttributes, preAttributes: {} };

	return ( <>
		{/* Video. */}
		<PanelBody title={ __( 'Video', 'wpmozo-blocks-and-addons' ) } className="wpmozo-typography-panel" initialOpen={true}>
			<WpmozoAlignment
				label={ __( 'Video Alignment', 'wpmozo-blocks-and-addons' ) }
				value={ attributes.videoAlign }
				onChange={ ( newValue ) => setAttributes( { videoAlign: newValue } ) }
			/>
			<MozoStates
				value={hoverState}
				title={ __( 'Video Border', 'wpmozo-blocks-and-addons' ) }
				onChange={ ( isHover ) => (
						isHover ? setHoverState(true) : setHoverState(false),
						setAttributes({wrapIsHover: !hoverState})
					)
				}
				control={ ( isHover ) => (
					<WpmozoBorder props={props}
						BorderKey={ isHover ? "videoHover" : "video" }
						BorderTypes={ { border: true, radius: true } }
					/>
				) }
			/>
		</PanelBody>
	</> );
};

