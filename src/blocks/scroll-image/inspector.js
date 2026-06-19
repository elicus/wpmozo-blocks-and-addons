import { __ } from "@wordpress/i18n";
import {
	InspectorControls
} from '@wordpress/block-editor';
import {
	TabPanel
} from '@wordpress/components';

import { inspectorPanelTabs } from '../../common/utils.js';
import { GeneralPanel } from './settings/generalPanel';
import { AdvancedPanel } from '../../common/components/advanced-panel/advanced-panel';

const Inspector = ( { attributes, setAttributes } ) => {

	let props = { attributes, setAttributes },
		tabsArr = inspectorPanelTabs();
	
	props = Object.assign( {}, props, { preAttributes: {} } );

	tabsArr = tabsArr.filter(item => item.name !== "design");

	return (
		<InspectorControls>
			<TabPanel
				className="wpmozo-settings-tab-panel"
				activeClass="is-active"
				tabs={ tabsArr }
			>
				{ ( tab ) => ( <div className="wpmozo-settings-tab-panel-content">
					{ tab.name === 'general' && 
						<GeneralPanel attributes={attributes} setAttributes={setAttributes} />
					}
					{ tab.name === 'advanced' &&
						<AdvancedPanel attributes={attributes} setAttributes={setAttributes} />
					}
				</div> ) }
			</TabPanel>
		</InspectorControls>
	);
};

export default Inspector;
