import {
	__ } from "@wordpress/i18n";

import {
	InspectorControls,
	} from '@wordpress/block-editor';
import {
	TabPanel
} from '@wordpress/components';

import { inspectorPanelTabs } from '../../common/utils.js';
import { GeneralPanel } from './settings/generalPanel';
import { DesignPanel } from './settings/designPanel';
import { AdvancedPanel } from '../../common/components/advanced-panel/advanced-panel';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from "@wordpress/element";

const Inspector = ( { attributes, setAttributes } ) => {

	let props = { attributes, setAttributes };
		props = Object.assign( {}, props, { preAttributes: {} } );
	const [ hoverState, setHoverState ] = useState( false );
	const isSaving = useSelect(select =>
		select('core/editor').isSavingPost()
	);

	useEffect(() => {
			setHoverState(false);
			setAttributes({wrapIsHover: false})
	}, [isSaving]);
	
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
						<DesignPanel attributes={attributes} setAttributes={setAttributes} hoverState={hoverState} setHoverState={setHoverState} />
					}
					{ tab.name === 'advanced' &&
						<AdvancedPanel attributes={attributes} setAttributes={setAttributes} hoverState={hoverState} setHoverState={setHoverState}/>
					}
				</div> ) }
			</TabPanel>
		</InspectorControls>
	);
};

export default Inspector;
