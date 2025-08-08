// inspector.js
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
	__experimentalColorGradientControl as ColorGradientControl
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextControl,
} from '@wordpress/components';

import { inspectorPanelTabs } from '../../common/utils.js';
import { GeneralPanel } from './settings/generalPanel';
import { DesignPanel } from './settings/designPanel';

const Inspector = ( { attributes, setAttributes } ) => {

	let props = { attributes, setAttributes };
		props = Object.assign( {}, props, { preAttributes: {} } );

	return (
		<InspectorControls>
			<TabPanel
				className="wpmozo-settings-tab-panel"
				activeClass="is-active"
				tabs={ inspectorPanelTabs() }
			>
				{ ( tab ) => ( <div className="wpmozo-settings-tab-panel-content">
					{ tab.name === 'general' && 
						<GeneralPanel attributes={attributes} setAttributes={setAttributes} />
					}
					{ tab.name === 'design' && 
						<DesignPanel attributes={attributes} setAttributes={setAttributes} />
					}
					{ tab.name === 'advanced' && 
						<PanelBody title={ __( 'Advanced', 'wpmozo-blocks-and-addons' ) } initialOpen={true}>
							<TextControl
								label={ __( 'Additional CSS Class(es)', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.className || '' }
								onChange={ ( value ) => setAttributes( { className: value } ) }
								help={ __( 'Separate multiple classes with spaces.', 'wpmozo-blocks-and-addons' ) }
							/>
						</PanelBody>
					}
				</div> ) }
			</TabPanel>
		</InspectorControls>
	);
};

export default Inspector;
