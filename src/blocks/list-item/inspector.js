// inspector.js
import { __ } from '@wordpress/i18n';
import { InspectorControls,  } from '@wordpress/block-editor';
import { TabPanel, PanelBody, TextControl, ExternalLink, } from '@wordpress/components';

import {inspectorPanelTabs} from "../../common/utils";
import {GeneralPanel} from "./settings/generalPanel";
import {DesignPanel} from "./settings/designPanel";

const Inspector = ({ attributes, setAttributes }) => {

    let props = { attributes, setAttributes };
    props = Object.assign({}, props, {preAttributes: {}});

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
								label={ __( 'HTML Anchor', 'wpmozo-blocks-and-addons' ) }
								value={ attributes.anchor || '' }
								onChange={ ( value ) => setAttributes( { anchor: value } ) }
								help={  <>
									{ __( 'Enter a word or two — without spaces — to make a unique web address just for this block, called an “anchor”. Then, you’ll be able to link directly to this section of your page.', 'wpmozo-blocks-and-addons' ) }{' '}
									<ExternalLink href="https://wordpress.org/documentation/article/page-jumps/">
										{ __( 'Learn more about anchors', 'wpmozo-blocks-and-addons' ) }
									</ExternalLink>
								</> }
							/>
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
