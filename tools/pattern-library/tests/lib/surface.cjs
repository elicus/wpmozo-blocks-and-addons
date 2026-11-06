/**
 * The Lite surfaces add-ons may rely on: the documented contract plus the older surfaces Pro
 * uses (docs/pattern-library/registry-and-contract.md, sections 1–4), frozen in roadmap stage R4.
 * One list for the tests; the documentation mirrors it. Adding an entry is fine; removing or
 * changing one is a breaking change that needs the deprecation rules of the contract.
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
		// Add-ons extend these classes, call the static methods and create instances with `new`.
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
		// Post meta Lite's meta boxes write for those post types (checked in the source).
		postMeta: {
			'wpmozoae-team-member': [
				'wpmozo_ae_team_member_short_desc',
				'wpmozo_ae_team_member_designation',
				'wpmozo_ae_team_member_email',
				'wpmozo_ae_team_member_phone',
				'wpmozo_ae_team_member_website',
				'wpmozo_ae_team_member_facebook',
				'wpmozo_ae_team_member_twitter',
				'wpmozo_ae_team_member_linkedin',
				'wpmozo_ae_team_member_instagram',
				'wpmozo_ae_team_member_youtube',
				'wpmozo_ae_team_member_skills',
				'wpmozo_ae_team_member_skills_value',
			],
			'wpmozoae-testimonial': [
				'wpmozo_ae_testimonial_author_name',
				'wpmozo_ae_testimonial_author_email',
				'wpmozo_ae_testimonial_author_designation',
				'wpmozo_ae_testimonial_author_company',
				'wpmozo_ae_testimonial_author_company_url',
				'wpmozo_ae_testimonial_author_rating',
			],
		},
		// Lite owns these handles; add-ons reference them and never register them themselves.
		scripts: [
			'wpmozo-blocks-and-addons-chartjs-script',
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
		// Lite's get_block_dynamic_style() loads an add-on's dynamic-style.php from this path (legacy),
		// then calls `<slug with underscores>_generate_dynamic_style( $attributes )`.
		dynamicStylePath:
			"WPMOZO_BNA_PRO_PLUGIN_DIR . 'includes/templates/block-'",
		dynamicStyleCallback: '_generate_dynamic_style',
		// Objects Lite prints for its editor script, with the members add-ons read.
		editorObjects: { wpmozo_bna_editor_object: [ 'placeholderImg' ] },
		// Lite files whose URLs end up in saved content (an add-on block saves placeholderImg).
		savedFiles: [ 'includes/assets/images/placeholder.webp' ],
		// Lite blocks add-ons insert. Lite's block panel never lists them, so they are always on.
		blocks: [ 'wpmozo/content-wraper' ],
		// Markup those blocks saved, oldest first: every sample must stay valid, and the newest is the
		// current save output (byte for byte). When the save output changes on purpose (with a
		// deprecation), add the new markup as the newest sample.
		savedMarkup: {
			'wpmozo/content-wraper': [
				// Lite 1.8.0, as Pro's Advanced Tabs Item template inserts it.
				'<!-- wp:wpmozo/content-wraper {"lock":{"remove":true},"className":"wpmozo-bna-content-toggle-active"} -->\n<div class="wp-block-wpmozo-content-wraper wpmozo-bna-content-toggle-active"><!-- wp:paragraph -->\n<p>R4</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:wpmozo/content-wraper -->',
				// Lite after 1.8.0 (52a8293): the save output adds a `wrapstyle` attribute.
				'<!-- wp:wpmozo/content-wraper {"lock":{"remove":true},"className":"wpmozo-bna-content-toggle-active"} -->\n<div wrapstyle="body .wpmozo-wrap-undefined#block-undefined {transition:all 300ms;}" class="wp-block-wpmozo-content-wraper wpmozo-bna-content-toggle-active"><!-- wp:paragraph -->\n<p>R4</p>\n<!-- /wp:paragraph --></div>\n<!-- /wp:wpmozo/content-wraper -->',
			],
		},
		// Block on/off: Lite unregisters every `wpmozo/<slug>` listed in this key of WPMOZO_BNA_OPTION
		// (add-on blocks too) on `init` at priority 50; add-on blocks reach its block panel through
		// the panel filter (`slug => label`).
		blockSwitch: {
			option: 'wpmozo_inactive_blocks',
			filter: 'wpmozo_bna_add_pro_blocks_to_panel',
		},
		// Settings page markup an add-on tab uses; Lite's panel script switches tabs by these.
		panel: {
			menuItem: 'wpmozo_bna_panel_menu_item',
			section: 'wpmozo_bna_panel_section',
		},
	},
	// Names Lite reads from an add-on (the other direction): Pro must keep defining them.
	addon: {
		constants: [
			'WPMOZO_BNA_PRO_VERSION',
			'WPMOZO_BNA_PRO_PLUGIN_DIR',
			'WPMOZO_BNA_PRO_BASENAME',
		],
		// The section of Pro's settings tab, added through the settings hooks.
		licenceSection: 'wpmozo_bna_panel_license_section',
	},
};
