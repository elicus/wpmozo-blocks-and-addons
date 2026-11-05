/**
 * The Lite surfaces add-ons may rely on: the documented contract plus the older surfaces Pro
 * uses (docs/pattern-library/registry-and-contract.md, sections 1–4). One list for the tests;
 * the documentation mirrors it. Adding an entry is fine; removing or changing one is a breaking
 * change that needs the deprecation rules of the contract.
 */
module.exports = {
	// Documented contract (sections 1–3).
	contract: {
		functions: [ 'wpmozo_bna_integration' ],
		actions: [ 'wpmozo_bna_loaded', 'wpmozo_bna_library_register_sources' ],
		integrationMethods: [
			'version',
			'contract_version',
			'features',
			'supports',
		],
		features: { integration: 1, 'shared-js': 1, library: 1 },
		registryMethods: [ 'register_source' ],
		scriptHandles: [ 'wpmozo-blocks-and-addons-shared' ],
		globals: [ 'WPMozoBNA', 'WPMozoBNAComponents', 'WPMozoBNAUtils' ],
	},
	// Older surfaces (section 4), frozen until versioned.
	frozen: {
		classes: {
			'WPMOZO\\BNA\\Helpers\\Mozo_Bna_Helpers': [
				'esc_previously',
				'truncate_content',
			],
			'WPMOZO\\BNA\\Helpers\\Mozo_Bna_Block_Helpers': [
				'get_block_dynamic_style',
				'get_font_style',
				'get_border_style',
				'get_padding_style',
				'get_margin_style',
			],
		},
		constants: [ 'WPMOZO_BNA_VERSION', 'WPMOZO_BNA_OPTION' ],
		// Fired by Lite's settings page with do_action or apply_filters (checked in the source; they
		// run only on that screen). wpmozo_bna_add_pro_blocks_to_panel is a filter.
		settingsHooks: [
			'wpmozo_bna_settings_tabs',
			'wpmozo_bna_settings_tab_content',
			'wpmozo_bna_add_pro_blocks_to_panel',
		],
		postTypes: [ 'wpmozoae-team-member', 'wpmozoae-testimonial' ],
		taxonomies: [
			'wpmozo-ae-team-member-category',
			'wpmozo-ae-testimonial-category',
		],
		scripts: [
			'wpmozo-blocks-and-addons-gsap-script',
			'wpmozo-blocks-and-addons-imagesloaded-script',
			'wpmozo-blocks-and-addons-isotope-script',
			'wpmozo-blocks-and-addons-magnificPopup-script',
			'wpmozo-blocks-and-addons-scroll-trigger-script',
			'wpmozo-blocks-and-addons-swiper-script',
			'wpmozo-blocks-and-addons-tippy-script',
			'wpmozo-blocks-and-addons-twbs-pagination-script',
		],
		styles: [
			'wpmozo-blocks-and-addons-blocks-style',
			'wpmozo-blocks-and-addons-fontawesome-style',
			'wpmozo-blocks-and-addons-magnificPopup-style',
			'wpmozo-blocks-and-addons-swiper-style',
			'wpmozo-blocks-and-addons-swiper-wpmozo-style',
			'wpmozo-blocks-and-addons-tippy-animation-style',
		],
		components: [
			'WpmozoTypography',
			'WpmozoColorPicker',
			'WpmozoDimensions',
			'WpmozoSize',
			'WpmozoBorder',
			'WpmozoMediaUploader',
			'WpmozoIconpicker',
			'WpmozoAlignment',
			'WpmozoColorCombo',
			'WpmozoRangeSize',
			'WpmozoVideoUploader',
			'MozoStates',
		],
		utils: [
			'headingLevelsList',
			'inspectorPanelTabs',
			'convertInlineStyleStr',
			'truncateContent',
			'getWrapperProps',
			'mergeWrapperProps',
		],
		// Lite's get_block_dynamic_style() loads an add-on's dynamic-style.php from this path (legacy).
		dynamicStylePath:
			"WPMOZO_BNA_PRO_PLUGIN_DIR . 'includes/templates/block-'",
	},
};
