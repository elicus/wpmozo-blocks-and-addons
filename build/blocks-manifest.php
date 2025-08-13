<?php
// This file is generated. Do not modify it manually.
return array(
	'bar-counter' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/bar-counter',
		'version' => '0.1.0',
		'title' => 'Bar Counter',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Bar counter to showcase progress or skill levels visually.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'layoutType' => array(
				'type' => 'string',
				'default' => 'layout1'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'WPMozo Title'
			),
			'titleLavel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'percentage' => array(
				'type' => 'number',
				'default' => 50
			),
			'displayEmptyBar' => array(
				'type' => 'boolean',
				'default' => false
			),
			'useStripes' => array(
				'type' => 'boolean',
				'default' => false
			),
			'stripeColor' => array(
				'type' => 'string'
			),
			'stripeAnimation' => array(
				'type' => 'boolean',
				'default' => false
			),
			'stripeAnimationSpeed' => array(
				'type' => 'number'
			),
			'titleColor' => array(
				'type' => 'string'
			),
			'titleAlign' => array(
				'type' => 'string'
			),
			'titleFontSize' => array(
				'type' => 'string'
			),
			'titleFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleLetterSpacing' => array(
				'type' => 'string'
			),
			'titleDecoration' => array(
				'type' => 'string'
			),
			'titleLetterCase' => array(
				'type' => 'string'
			),
			'titleLineHeight' => array(
				'type' => 'string'
			),
			'percentageColor' => array(
				'type' => 'string'
			),
			'percentageAlign' => array(
				'type' => 'string'
			),
			'percentageFontSize' => array(
				'type' => 'string'
			),
			'percentageFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'percentageLetterSpacing' => array(
				'type' => 'string'
			),
			'percentageDecoration' => array(
				'type' => 'string'
			),
			'percentageLetterCase' => array(
				'type' => 'string'
			),
			'percentageLineHeight' => array(
				'type' => 'string'
			),
			'filledBackgroundType' => array(
				'type' => 'string',
				'default' => 'classic'
			),
			'filledBackgroundColor' => array(
				'type' => 'string'
			),
			'filledBackgroundGradient' => array(
				'type' => 'string',
				'default' => 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
			),
			'backgroundType' => array(
				'type' => 'string',
				'default' => 'classic'
			),
			'backgroundColor' => array(
				'type' => 'string'
			),
			'backgroundGradient' => array(
				'type' => 'string',
				'default' => 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
			),
			'barborder' => array(
				'type' => 'object'
			),
			'barborderRadius' => array(
				'type' => 'string'
			),
			'useCustomChunksSize' => array(
				'type' => 'boolean',
				'default' => false
			),
			'useChunksWidth' => array(
				'type' => 'string'
			),
			'useChunksWidthUnit' => array(
				'type' => 'string'
			),
			'useChunksHeight' => array(
				'type' => 'string'
			),
			'useChunksHeightUnit' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'before-after-slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/before-after-slider',
		'version' => '1.1.0',
		'title' => 'Before After Slider',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Create stunning before-and-after comparisons with a sleek, responsive slider.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'globalcolorHandle' => array(
				'type' => 'string'
			),
			'handleOffset' => array(
				'type' => 'number',
				'default' => 0.5
			),
			'moveHandleOnClick' => array(
				'type' => 'boolean',
				'default' => false
			),
			'moveHandleOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'sliderOrientation' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'overlayOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'globalcolorOverlay' => array(
				'type' => 'string'
			),
			'beforeImage' => array(
				'type' => 'string'
			),
			'beforeHasLabel' => array(
				'type' => 'boolean',
				'default' => false
			),
			'beforeLabelOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'beforeLabel' => array(
				'type' => 'string',
				'default' => 'Before'
			),
			'beforeLabelbackground' => array(
				'type' => 'string'
			),
			'beforeLabeltext' => array(
				'type' => 'string'
			),
			'beforeLabelFontSize' => array(
				'type' => 'string'
			),
			'beforeLabelFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'beforeLabelLetterSpacing' => array(
				'type' => 'string'
			),
			'beforeLabelDecoration' => array(
				'type' => 'string'
			),
			'beforeLabelLetterCase' => array(
				'type' => 'string'
			),
			'beforeLabelLineHeight' => array(
				'type' => 'string'
			),
			'afterImage' => array(
				'type' => 'string'
			),
			'afterHasLabel' => array(
				'type' => 'boolean',
				'default' => false
			),
			'afterLabelOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'afterLabel' => array(
				'type' => 'string',
				'default' => 'After'
			),
			'afterLabelbackground' => array(
				'type' => 'string'
			),
			'afterLabeltext' => array(
				'type' => 'string'
			),
			'afterLabelFontSize' => array(
				'type' => 'string'
			),
			'afterLabelFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'afterLabelLetterSpacing' => array(
				'type' => 'string'
			),
			'afterLabelDecoration' => array(
				'type' => 'string'
			),
			'afterLabelLetterCase' => array(
				'type' => 'string'
			),
			'afterLabelLineHeight' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'file:./style-index.css',
			'wpmozo-blocks-and-addons-imagesloaded-style',
			'wpmozo-blocks-and-addons-twentytwenty-style'
		),
		'script' => array(
			'wpmozo-blocks-and-addons-imagesloaded-script',
			'wpmozo-blocks-and-addons-twentytwenty-script'
		),
		'viewScript' => 'file:./view.js'
	),
	'content-toggle' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/content-toggle',
		'version' => '1.1.0',
		'title' => 'Content Toggle',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Content Toggle allows you to create content elements with a toggle/switch that lets you show two versions of the same thing.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'anchor' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'anchor' => array(
				'type' => 'string'
			),
			'toggleSwitchType' => array(
				'type' => 'string',
				'default' => 'rounded'
			),
			'toggleSwitchAlignment' => array(
				'type' => 'string'
			),
			'toggleSwitchColor' => array(
				'type' => 'string'
			),
			'toggleSwitchOnState' => array(
				'type' => 'string'
			),
			'toggleSwitchBackground' => array(
				'type' => 'string'
			),
			'toggleSwitchOnStateBackground' => array(
				'type' => 'string'
			),
			'toggleSwitchHoverColor' => array(
				'type' => 'string'
			),
			'toggleSwitchHoverOnState' => array(
				'type' => 'string'
			),
			'toggleSwitchHoverBackground' => array(
				'type' => 'string'
			),
			'toggleSwitchHoverOnStateBackground' => array(
				'type' => 'string'
			),
			'toggleSwitchDimensionspadding' => array(
				'type' => 'object'
			),
			'toggleSwitchDimensionsmargin' => array(
				'type' => 'object'
			),
			'toggleOneTitle' => array(
				'type' => 'string',
				'default' => 'Title One'
			),
			'titleOneColor' => array(
				'type' => 'string'
			),
			'titleOneIconSize' => array(
				'type' => 'number'
			),
			'titleOneIconSpacing' => array(
				'type' => 'number',
				'default' => 5
			),
			'titleOneIconColor' => array(
				'type' => 'string'
			),
			'titleOneFontSize' => array(
				'type' => 'string'
			),
			'titleOneFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleOneLetterSpacing' => array(
				'type' => 'string'
			),
			'titleOneDecoration' => array(
				'type' => 'string'
			),
			'titleOneLetterCase' => array(
				'type' => 'string'
			),
			'titleOneLineHeight' => array(
				'type' => 'string'
			),
			'toggleOneIcon' => array(
				'type' => 'string'
			),
			'toggleOneIconPostion' => array(
				'type' => 'string',
				'default' => 'before'
			),
			'toggleTwoTitle' => array(
				'type' => 'string',
				'default' => 'Title Two'
			),
			'titleTwoColor' => array(
				'type' => 'string'
			),
			'titleTwoIconSize' => array(
				'type' => 'number'
			),
			'titleTwoIconSpacing' => array(
				'type' => 'number',
				'default' => 5
			),
			'titleTwoIconColor' => array(
				'type' => 'string'
			),
			'titleTwoFontSize' => array(
				'type' => 'string'
			),
			'titleTwoFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleTwoLetterSpacing' => array(
				'type' => 'string'
			),
			'titleTwoDecoration' => array(
				'type' => 'string'
			),
			'titleTwoLetterCase' => array(
				'type' => 'string'
			),
			'titleTwoLineHeight' => array(
				'type' => 'string'
			),
			'toggleTwoIcon' => array(
				'type' => 'string'
			),
			'toggleTwoIconPostion' => array(
				'type' => 'string',
				'default' => 'before'
			),
			'contentOneColor' => array(
				'type' => 'string'
			),
			'contentOneBackground' => array(
				'type' => 'string'
			),
			'contentOneFontSize' => array(
				'type' => 'string'
			),
			'contentOneFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'contentOneLetterSpacing' => array(
				'type' => 'string'
			),
			'contentOneDecoration' => array(
				'type' => 'string'
			),
			'contentOneLetterCase' => array(
				'type' => 'string'
			),
			'contentOneLineHeight' => array(
				'type' => 'string'
			),
			'contentOneDimensionspadding' => array(
				'type' => 'object',
				'default' => array(
					'bottom' => '20px',
					'left' => '20px',
					'right' => '20px',
					'top' => '20px'
				)
			),
			'contentOneDimensionsmargin' => array(
				'type' => 'object'
			),
			'contentOneAlignment' => array(
				'type' => 'string'
			),
			'contentTwoColor' => array(
				'type' => 'string'
			),
			'contentTwoBackground' => array(
				'type' => 'string'
			),
			'contentTwoFontSize' => array(
				'type' => 'string'
			),
			'contentTwoFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'contentTwoLetterSpacing' => array(
				'type' => 'string'
			),
			'contentTwoDecoration' => array(
				'type' => 'string'
			),
			'contentTwoLetterCase' => array(
				'type' => 'string'
			),
			'contentTwoLineHeight' => array(
				'type' => 'string'
			),
			'contentTwoDimensionspadding' => array(
				'type' => 'object',
				'default' => array(
					'bottom' => '20px',
					'left' => '20px',
					'right' => '20px',
					'top' => '20px'
				)
			),
			'contentTwoDimensionsmargin' => array(
				'type' => 'object'
			),
			'contentTwoAlignment' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'script' => 'file:./script.js'
	),
	'content-wrapper' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/content-wraper',
		'version' => '1.1.0',
		'title' => 'Content Wrapper',
		'category' => 'wpmozo',
		'icon' => '',
		'parent' => array(
			'wpmozo'
		),
		'supports' => array(
			'html' => false,
			'lock' => false
		),
		'attributes' => array(
			
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js'
	),
	'fancy-heading' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/fancy-heading',
		'version' => '0.1.0',
		'title' => 'Fancy Heading',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Add stylish and eye-catching headings to your pages with the Fancy Heading.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'displayInStack' => array(
				'type' => 'boolean',
				'default' => false
			),
			'headingLevel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'headingAlignment' => array(
				'type' => 'string',
				'default' => ''
			),
			'headingColor' => array(
				'type' => 'string'
			),
			'headingBackground' => array(
				'type' => 'string'
			),
			'preHeading' => array(
				'type' => 'string',
				'default' => 'Pre'
			),
			'preTextAlignment' => array(
				'type' => 'string',
				'default' => ''
			),
			'preTextColor' => array(
				'type' => 'string'
			),
			'preTextBackground' => array(
				'type' => 'string'
			),
			'preTextHoverColor' => array(
				'type' => 'string'
			),
			'preTextHoverBackground' => array(
				'type' => 'string'
			),
			'preTextDimensionspadding' => array(
				'type' => 'object'
			),
			'preTextDimensionsmargin' => array(
				'type' => 'object'
			),
			'preTextFontSize' => array(
				'type' => 'string'
			),
			'preTextFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'preTextLetterSpacing' => array(
				'type' => 'string'
			),
			'preTextDecoration' => array(
				'type' => 'string'
			),
			'preTextLetterCase' => array(
				'type' => 'string'
			),
			'preTextLineHeight' => array(
				'type' => 'string'
			),
			'mainHeading' => array(
				'type' => 'string',
				'default' => 'Main'
			),
			'mainTextColor' => array(
				'type' => 'string'
			),
			'mainTextAlignment' => array(
				'type' => 'string',
				'default' => ''
			),
			'mainTextBackground' => array(
				'type' => 'string'
			),
			'mainTextHoverColor' => array(
				'type' => 'string'
			),
			'mainTextHoverBackground' => array(
				'type' => 'string'
			),
			'mainTextDimensionspadding' => array(
				'type' => 'object'
			),
			'mainTextDimensionsmargin' => array(
				'type' => 'object'
			),
			'mainTextFontSize' => array(
				'type' => 'string'
			),
			'mainTextFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'mainTextLetterSpacing' => array(
				'type' => 'string'
			),
			'mainTextDecoration' => array(
				'type' => 'string'
			),
			'mainTextLetterCase' => array(
				'type' => 'string'
			),
			'mainTextLineHeight' => array(
				'type' => 'string'
			),
			'postHeading' => array(
				'type' => 'string',
				'default' => 'Post'
			),
			'postTextColor' => array(
				'type' => 'string'
			),
			'postTextAlignment' => array(
				'type' => 'string',
				'default' => ''
			),
			'postTextBackground' => array(
				'type' => 'string'
			),
			'postTextHoverColor' => array(
				'type' => 'string'
			),
			'postTextHoverBackground' => array(
				'type' => 'string'
			),
			'postTextDimensionspadding' => array(
				'type' => 'object'
			),
			'postTextDimensionsmargin' => array(
				'type' => 'object'
			),
			'postTextFontSize' => array(
				'type' => 'string'
			),
			'postTextFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'postTextLetterSpacing' => array(
				'type' => 'string'
			),
			'postTextDecoration' => array(
				'type' => 'string'
			),
			'postTextLetterCase' => array(
				'type' => 'string'
			),
			'postTextLineHeight' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js'
	),
	'fancy-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/fancy-text',
		'version' => '0.1.0',
		'title' => 'Fancy Text',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Enhance your text with gradient colors or image fills for a unique visual effect. With various styling options.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'fancyText' => array(
				'type' => 'string',
				'default' => 'Here you can set text.'
			),
			'textStyle' => array(
				'type' => 'string',
				'default' => 'gradient'
			),
			'fancyTextBackground' => array(
				'type' => 'string',
				'default' => 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
			),
			'fancyTextBackgroundImg' => array(
				'type' => 'string',
				'default' => '/wp-content/plugins/wpmozo-blocks-and-addons/includes/assets/images/placeholder.webp'
			),
			'textBgSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'textBgPosition' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'textBgRepeat' => array(
				'type' => 'string',
				'default' => 'initial'
			),
			'textBgOverlay' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'textBgOverlayColor' => array(
				'type' => 'string'
			),
			'textBgOverlayColorSolid' => array(
				'type' => 'string'
			),
			'textBgOverlayColorGradient' => array(
				'type' => 'string'
			),
			'textBgDimensionspadding' => array(
				'type' => 'object'
			),
			'textAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'textFontSize' => array(
				'type' => 'string'
			),
			'textFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'textLetterSpacing' => array(
				'type' => 'string'
			),
			'textDecoration' => array(
				'type' => 'string'
			),
			'textLetterCase' => array(
				'type' => 'string'
			),
			'textLineHeight' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'flip-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/flip-box',
		'version' => '1.1.0',
		'title' => 'Flip Box',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Interactive flip box elements with two sides using Flip or 3D Cube effects in multiple directions.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'animationType' => array(
				'type' => 'string',
				'default' => 'flip'
			),
			'flipDirection' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'depth3dEffect' => array(
				'type' => 'boolean',
				'default' => true
			),
			'shakeOnFlip' => array(
				'type' => 'boolean',
				'default' => false
			),
			'flipSpeed' => array(
				'type' => 'number',
				'default' => 700
			),
			'globalTitleColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'globalContentColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'globalTitletext' => array(
				'type' => 'string'
			),
			'globalTitleFontSize' => array(
				'type' => 'string'
			),
			'globalTitleFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'globalTitleLetterSpacing' => array(
				'type' => 'string'
			),
			'globalTitleDecoration' => array(
				'type' => 'string'
			),
			'globalTitleLetterCase' => array(
				'type' => 'string'
			),
			'globalTitleLineHeight' => array(
				'type' => 'string'
			),
			'globalContenttext' => array(
				'type' => 'string'
			),
			'globalContentFontSize' => array(
				'type' => 'string'
			),
			'globalContentFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'globalContentLetterSpacing' => array(
				'type' => 'string'
			),
			'globalContentDecoration' => array(
				'type' => 'string'
			),
			'globalContentLetterCase' => array(
				'type' => 'string'
			),
			'globalContentLineHeight' => array(
				'type' => 'string'
			),
			'frontTitle' => array(
				'type' => 'string',
				'default' => 'Front Title'
			),
			'frontHeadingLevel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'frontTitleColor' => array(
				'type' => 'string'
			),
			'frontTitletext' => array(
				'type' => 'string'
			),
			'frontTitleFontSize' => array(
				'type' => 'string'
			),
			'frontTitleFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'frontTitleLetterSpacing' => array(
				'type' => 'string'
			),
			'frontTitleDecoration' => array(
				'type' => 'string'
			),
			'frontTitleLetterCase' => array(
				'type' => 'string'
			),
			'frontTitleLineHeight' => array(
				'type' => 'string'
			),
			'frontContnet' => array(
				'type' => 'string',
				'default' => 'Here you can set front text.'
			),
			'frontContentColor' => array(
				'type' => 'string'
			),
			'frontContenttext' => array(
				'type' => 'string'
			),
			'frontContentFontSize' => array(
				'type' => 'string'
			),
			'frontContentFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'frontContentLetterSpacing' => array(
				'type' => 'string'
			),
			'frontContentDecoration' => array(
				'type' => 'string'
			),
			'frontContentLetterCase' => array(
				'type' => 'string'
			),
			'frontContentLineHeight' => array(
				'type' => 'string'
			),
			'frontContentHorAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'frontContentVerAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'frontElType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'frontBackgroundColor' => array(
				'type' => 'string',
				'default' => '#543EC4'
			),
			'frontElementAlign' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'frontElIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-star'
			),
			'frontIconColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'frontIconSize' => array(
				'type' => 'string'
			),
			'frontIconSizeUnit' => array(
				'type' => 'string'
			),
			'frontIconStyle' => array(
				'type' => 'boolean',
				'default' => false
			),
			'frontIconShape' => array(
				'type' => 'string',
				'default' => 'square'
			),
			'frontIconShapeBackground' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'frontIconHasShapeBorder' => array(
				'type' => 'boolean',
				'default' => false
			),
			'frontIconShapeborderRadius' => array(
				'type' => 'string'
			),
			'frontIconShapeborder' => array(
				'type' => 'object'
			),
			'frontIconShapeBorderColor' => array(
				'type' => 'string'
			),
			'frontElImage' => array(
				'type' => 'string'
			),
			'frontImageAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'frontImageWidth' => array(
				'type' => 'string',
				'default' => '100px'
			),
			'frontImageWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'frontFlipboxborder' => array(
				'type' => 'object'
			),
			'frontFlipboxborderRadius' => array(
				'type' => 'string'
			),
			'frontFlipboxBackground' => array(
				'type' => 'string',
				'default' => '#543EC4'
			),
			'frontDimensionspadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '10px',
					'right' => '10px',
					'bottom' => '10px',
					'left' => '10px'
				)
			),
			'flipboxWidth' => array(
				'type' => 'string',
				'default' => '100%'
			),
			'flipboxWidthUnit' => array(
				'type' => 'string',
				'default' => '%'
			),
			'backTitle' => array(
				'type' => 'string',
				'default' => 'Back Title'
			),
			'backHeadingLevel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'backTitleColor' => array(
				'type' => 'string'
			),
			'backTitletext' => array(
				'type' => 'string'
			),
			'backTitleFontSize' => array(
				'type' => 'string'
			),
			'backTitleFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'backTitleLetterSpacing' => array(
				'type' => 'string'
			),
			'backTitleDecoration' => array(
				'type' => 'string'
			),
			'backTitleLetterCase' => array(
				'type' => 'string'
			),
			'backTitleLineHeight' => array(
				'type' => 'string'
			),
			'backContnet' => array(
				'type' => 'string',
				'default' => 'Here you can set back text.'
			),
			'backContentColor' => array(
				'type' => 'string'
			),
			'backContenttext' => array(
				'type' => 'string'
			),
			'backContentFontSize' => array(
				'type' => 'string'
			),
			'backContentFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'backContentLetterSpacing' => array(
				'type' => 'string'
			),
			'backContentDecoration' => array(
				'type' => 'string'
			),
			'backContentLetterCase' => array(
				'type' => 'string'
			),
			'backContentLineHeight' => array(
				'type' => 'string'
			),
			'backContentHorAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'backContentVerAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'backElType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'backBackgroundColor' => array(
				'type' => 'string',
				'default' => '#863AD0'
			),
			'backElementAlign' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'backElIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-star'
			),
			'backIconColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'backIconSize' => array(
				'type' => 'string'
			),
			'backIconSizeUnit' => array(
				'type' => 'string'
			),
			'backIconStyle' => array(
				'type' => 'boolean',
				'default' => false
			),
			'backIconShape' => array(
				'type' => 'string',
				'default' => 'square'
			),
			'backIconShapeBackground' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'backIconHasShapeBorder' => array(
				'type' => 'boolean',
				'default' => false
			),
			'backIconShapeborderRadius' => array(
				'type' => 'string'
			),
			'backIconShapeborder' => array(
				'type' => 'object'
			),
			'backElImage' => array(
				'type' => 'string'
			),
			'backImageAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'backImageWidth' => array(
				'type' => 'string',
				'default' => '100px'
			),
			'backImageWidthUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'backFlipboxborder' => array(
				'type' => 'object'
			),
			'backFlipboxborderRadius' => array(
				'type' => 'string'
			),
			'backFlipboxBackground' => array(
				'type' => 'string',
				'default' => '#863AD0'
			),
			'backDimensionspadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '10px',
					'right' => '10px',
					'bottom' => '10px',
					'left' => '10px'
				)
			),
			'backIconShapeBorderColor' => array(
				'type' => 'string'
			),
			'backHasButton' => array(
				'type' => 'boolean',
				'default' => false
			),
			'backBtnText' => array(
				'type' => 'string',
				'default' => 'Click ME!'
			),
			'backBtnUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'backBtnIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-arrow-right'
			),
			'backBtnIconPosition' => array(
				'type' => 'string',
				'default' => 'after'
			),
			'backBtnIconOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'backBtnColor' => array(
				'type' => 'string',
				'default' => '#fff'
			),
			'backBtnBackground' => array(
				'type' => 'string'
			),
			'backBtntext' => array(
				'type' => 'string'
			),
			'backBtnFontSize' => array(
				'type' => 'string'
			),
			'backBtnFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'backBtnLetterSpacing' => array(
				'type' => 'string'
			),
			'backBtnDecoration' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'backBtnLetterCase' => array(
				'type' => 'string'
			),
			'backBtnLineHeight' => array(
				'type' => 'string'
			),
			'backBtnborder' => array(
				'type' => 'object',
				'default' => array(
					'width' => '1px',
					'style' => 'solid',
					'color' => '#fff'
				)
			),
			'backBtnborderRadius' => array(
				'type' => 'string',
				'default' => '3px'
			),
			'backBtnDimensionspadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '5px',
					'right' => '8px',
					'bottom' => '5px',
					'left' => '8px'
				)
			),
			'backBtnDimensionsmargin' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'script' => 'file:./script.js'
	),
	'floating-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/floating-image',
		'version' => '1.1.0',
		'title' => 'Floating Image',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'allowedBlocks' => array(
			'wpmozo/floating-image-item'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'shadow' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			),
			'color' => array(
				'gradients' => true,
				'background' => true,
				'text' => false
			),
			'background' => array(
				'backgroundImage' => true,
				'backgroundSize' => true
			)
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'images' => array(
				'type' => 'array'
			),
			'containerHeight' => array(
				'type' => 'string',
				'default' => '450px'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js'
	),
	'floating-image-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/floating-image-item',
		'version' => '1.1.0',
		'title' => 'Floating Image Item',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'parent' => array(
			'wpmozo/floating-image'
		),
		'supports' => array(
			'html' => false,
			'shadow' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'image' => array(
				'type' => 'object'
			),
			'imagewidth' => array(
				'type' => 'string',
				'default' => '200px'
			),
			'imageheight' => array(
				'type' => 'string'
			),
			'altText' => array(
				'type' => 'string',
				'default' => ''
			),
			'horizontalAlign' => array(
				'type' => 'string'
			),
			'verticalAlign' => array(
				'type' => 'string'
			),
			'animationEffect' => array(
				'type' => 'string',
				'default' => 'up_down'
			),
			'animationDelay' => array(
				'type' => 'number',
				'default' => 0
			),
			'animationDuration' => array(
				'type' => 'number',
				'default' => 4000
			),
			'animationRepeat' => array(
				'type' => 'string',
				'default' => 'infinite'
			),
			'speedCurve' => array(
				'type' => 'string'
			),
			'imageborderRadius' => array(
				'type' => 'string'
			),
			'imageborder' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'image-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/image-card',
		'version' => '0.1.0',
		'title' => 'Image Card',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Image card block to display the card view with it\'s details.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'image' => array(
				'type' => 'string'
			),
			'imageBorder' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageBorderRadius' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageDimensionspadding' => array(
				'type' => 'object',
				'default' => ''
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'far fa-star'
			),
			'iconColor' => array(
				'type' => 'string'
			),
			'iconFontSize' => array(
				'type' => 'number',
				'default' => ''
			),
			'iconAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'styleIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'showShapeBorder' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconShape' => array(
				'type' => 'string',
				'default' => 'square'
			),
			'iconBackground' => array(
				'type' => 'string',
				'default' => ''
			),
			'shapeBorderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageHeight' => array(
				'type' => 'number',
				'default' => 200
			),
			'imageWidth' => array(
				'type' => 'number',
				'default' => 200
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Your title here.'
			),
			'titleAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'titleColor' => array(
				'type' => 'string'
			),
			'titleFontSize' => array(
				'type' => 'string'
			),
			'titleLetterSpacing' => array(
				'type' => 'string'
			),
			'titleDecoration' => array(
				'type' => 'string'
			),
			'titleLetterCase' => array(
				'type' => 'string'
			),
			'titleLineHeight' => array(
				'type' => 'string'
			),
			'titleLevel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'titleFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleFontStyle' => array(
				'type' => 'string'
			),
			'titleFontWeight' => array(
				'type' => 'string'
			),
			'titleHoverColor' => array(
				'type' => 'string'
			),
			'titleHoverFontSize' => array(
				'type' => 'string'
			),
			'titleHoverLetterSpacing' => array(
				'type' => 'string'
			),
			'titleHoverDecoration' => array(
				'type' => 'string'
			),
			'titleHoverLetterCase' => array(
				'type' => 'string'
			),
			'titleHoverLineHeight' => array(
				'type' => 'string'
			),
			'titleHoverFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleHoverFontStyle' => array(
				'type' => 'string'
			),
			'titleHoverFontWeight' => array(
				'type' => 'string'
			),
			'description' => array(
				'type' => 'string',
				'default' => 'Your content goes here. Edit this text inline or in the block Content settings. You can also style every aspect of this content in the block Design settings.'
			),
			'descriptionTextAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'descriptionTextColor' => array(
				'type' => 'string'
			),
			'descriptionTextFontSize' => array(
				'type' => 'string'
			),
			'descriptionTextLetterSpacing' => array(
				'type' => 'string'
			),
			'descriptionTextDecoration' => array(
				'type' => 'string'
			),
			'descriptionTextLetterCase' => array(
				'type' => 'string'
			),
			'descriptionTextLineHeight' => array(
				'type' => 'string'
			),
			'descriptionHoverTextColor' => array(
				'type' => 'string'
			),
			'descriptionHoverTextFontSize' => array(
				'type' => 'string'
			),
			'descriptionHoverTextLetterSpacing' => array(
				'type' => 'string'
			),
			'descriptionHoverTextDecoration' => array(
				'type' => 'string'
			),
			'descriptionHoverTextLetterCase' => array(
				'type' => 'string'
			),
			'descriptionHoverTextLineHeight' => array(
				'type' => 'string'
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'contentColor' => array(
				'type' => 'string'
			),
			'contentHoverColor' => array(
				'type' => 'string'
			),
			'contentFontSize' => array(
				'type' => 'string'
			),
			'contentLetterSpacing' => array(
				'type' => 'string'
			),
			'contentDecoration' => array(
				'type' => 'string'
			),
			'contentLetterCase' => array(
				'type' => 'string'
			),
			'contentLineHeight' => array(
				'type' => 'string'
			),
			'contentFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'contentBackgroundColor' => array(
				'type' => 'string'
			),
			'contentpadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '',
					'right' => '15px',
					'bottom' => '',
					'left' => '15px'
				)
			),
			'contentHoverBackgroundColor' => array(
				'type' => 'string'
			),
			'contentHoverpadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '',
					'right' => '15px',
					'bottom' => '',
					'left' => '15px'
				)
			),
			'showButton' => array(
				'type' => 'boolean',
				'default' => false
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Read More'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonLinkTarget' => array(
				'type' => 'string',
				'default' => 'same'
			),
			'buttonTextColor' => array(
				'type' => 'string'
			),
			'buttonTextBackground' => array(
				'type' => 'string'
			),
			'buttonTextAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'buttonTextFontSize' => array(
				'type' => 'string'
			),
			'buttonTextLetterSpacing' => array(
				'type' => 'string'
			),
			'buttonTextDecoration' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'buttonTextLetterCase' => array(
				'type' => 'string'
			),
			'buttonTextLineHeight' => array(
				'type' => 'string'
			),
			'buttonTextFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'buttonIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-arrow-right'
			),
			'buttonImage' => array(
				'type' => 'string'
			),
			'buttonMediaPosition' => array(
				'type' => 'string',
				'default' => 'after'
			),
			'buttonMediaType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'buttonTextFontStyle' => array(
				'type' => 'string'
			),
			'buttonTextFontWeight' => array(
				'type' => 'string'
			),
			'buttonTextborder' => array(
				'type' => 'object',
				'default' => array(
					'width' => '1px',
					'style' => 'solid',
					'color' => '#fff'
				)
			),
			'buttonTextborderRadius' => array(
				'type' => 'string',
				'default' => '3px'
			),
			'buttonDimensionspadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '5px',
					'right' => '8px',
					'bottom' => '5px',
					'left' => '8px'
				)
			),
			'buttonDimensionsmargin' => array(
				'type' => 'object'
			),
			'showMediaOnHover' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'image-stack' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/image-stack',
		'version' => '0.1.0',
		'title' => 'Image Stack',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Image Stack lets you showcase images in an interactive stacked layout that expands on hover.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'alighment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'stackItemSize' => array(
				'type' => 'number',
				'default' => 100
			),
			'stackItemShrink' => array(
				'type' => 'number',
				'default' => 40
			),
			'stackItemSpacing' => array(
				'type' => 'number',
				'default' => 10
			),
			'iconSize' => array(
				'type' => 'number',
				'default' => 38
			),
			'iconColor' => array(
				'type' => 'string'
			),
			'itempadding' => array(
				'type' => 'object'
			),
			'itemBorderType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'itemBorderWidth' => array(
				'type' => 'number'
			),
			'borderColor' => array(
				'type' => 'string'
			),
			'itemBorderRadius' => array(
				'type' => 'number',
				'default' => ''
			),
			'tooltipColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'tooltipBackgroundColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'showTooltip' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'script' => array(
			'wpmozo-blocks-and-addons-tippy-script',
			'file:./script.js'
		)
	),
	'image-stack-child' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/image-stack-child',
		'version' => '0.1.0',
		'title' => 'Image Stack Item',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Image Stack Item add the image or icon to an interactive stacked layout that expands on hover.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'parent' => array(
			'wpmozo/image-stack'
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'image' => array(
				'type' => 'object'
			),
			'stackType' => array(
				'type' => 'string',
				'default' => 'image'
			),
			'stackIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-arrow-right'
			),
			'tooltipText' => array(
				'type' => 'string'
			),
			'itemBackground' => array(
				'type' => 'string',
				'default' => '#f7f7f7'
			),
			'itemBGGradient' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'interactive-image-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/interactive-image-card',
		'version' => '0.1.0',
		'title' => 'Interactive Image Card',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'It allows you to add images with text appearing on hover with different entrance animations.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Image Card Title'
			),
			'titleLevel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'titleNormalColor' => array(
				'type' => 'string',
				'default' => '#222222'
			),
			'titleHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'titleNormalFontSize' => array(
				'type' => 'string'
			),
			'titleNormalFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleNormalLetterSpacing' => array(
				'type' => 'string'
			),
			'titleNormalDecoration' => array(
				'type' => 'string'
			),
			'titleNormalLetterCase' => array(
				'type' => 'string'
			),
			'titleNormalLineHeight' => array(
				'type' => 'string'
			),
			'titleHoverFontSize' => array(
				'type' => 'string'
			),
			'titleHoverFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleHoverLetterSpacing' => array(
				'type' => 'string'
			),
			'titleHoverDecoration' => array(
				'type' => 'string'
			),
			'titleHoverLetterCase' => array(
				'type' => 'string'
			),
			'titleHoverLineHeight' => array(
				'type' => 'string'
			),
			'titleAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.'
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => '#222222'
			),
			'contentFontSize' => array(
				'type' => 'string'
			),
			'contentFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'contentLetterSpacing' => array(
				'type' => 'string'
			),
			'contentDecoration' => array(
				'type' => 'string'
			),
			'contentLetterCase' => array(
				'type' => 'string'
			),
			'contentLineHeight' => array(
				'type' => 'string'
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'backImage' => array(
				'type' => 'string'
			),
			'imageOpacity' => array(
				'type' => 'number',
				'default' => 0.7
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'lily'
			),
			'layoutborder' => array(
				'type' => 'object',
				'default' => array(
					'color' => '#000000',
					'width' => '1px',
					'style' => 'solid'
				)
			),
			'overlayColor' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/list',
		'version' => '1.0.0',
		'title' => 'List',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'allowedBlocks' => array(
			'wpmozo/list-item'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'listAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'globalItemBackgroundGradient' => array(
				'type' => 'string'
			),
			'globalItemBackgroundColor' => array(
				'type' => 'string'
			),
			'iconFontSize' => array(
				'type' => 'number',
				'default' => 22
			),
			'iconColor' => array(
				'type' => 'string'
			),
			'imageWidth' => array(
				'type' => 'number',
				'default' => 40
			),
			'dividerSize' => array(
				'type' => 'number',
				'default' => 0
			),
			'dividerStyle' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'dividerColor' => array(
				'type' => 'string',
				'default' => '#d3d3d3'
			),
			'dividermargin' => array(
				'type' => 'object'
			),
			'lastDivider' => array(
				'type' => 'boolean',
				'default' => true
			),
			'indentation' => array(
				'type' => 'number'
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'linkFontSize' => array(
				'type' => 'string'
			),
			'linkFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'linkLetterSpacing' => array(
				'type' => 'string'
			),
			'linkDecoration' => array(
				'type' => 'string'
			),
			'linkLetterCase' => array(
				'type' => 'string'
			),
			'linkLineHeight' => array(
				'type' => 'string'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#222222'
			),
			'textFontSize' => array(
				'type' => 'string'
			),
			'textFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'textLetterSpacing' => array(
				'type' => 'string'
			),
			'textDecoration' => array(
				'type' => 'string'
			),
			'textLetterCase' => array(
				'type' => 'string'
			),
			'textLineHeight' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css'
	),
	'list-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/list-item',
		'version' => '0.1.0',
		'title' => 'List Item',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'parent' => array(
			'wpmozo/list'
		),
		'supports' => array(
			'html' => false,
			'splitting' => true
		),
		'attributes' => array(
			'parentAtts' => array(
				'type' => 'object'
			),
			'ID' => array(
				'type' => 'string'
			),
			'itemmargin' => array(
				'type' => 'object'
			),
			'itempadding' => array(
				'type' => 'object'
			),
			'itemBackgroundColor' => array(
				'type' => 'text'
			),
			'itemBackgroundGradient' => array(
				'type' => 'text'
			),
			'text' => array(
				'type' => 'rich-text',
				'source' => 'rich-text',
				'selector' => 'p',
				'role' => 'text'
			),
			'textNormalColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'textNormalFontSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'textNormalFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'textNormalLetterSpacing' => array(
				'type' => 'string',
				'default' => ''
			),
			'textNormalDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'textNormalLetterCase' => array(
				'type' => 'string',
				'default' => ''
			),
			'textNormalLineHeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverFontSize' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'textHoverLetterSpacing' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverDecoration' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverLetterCase' => array(
				'type' => 'string',
				'default' => ''
			),
			'textHoverLineHeight' => array(
				'type' => 'string',
				'default' => ''
			),
			'markerType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'markerIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-check'
			),
			'markerImage' => array(
				'type' => 'string',
				'default' => ''
			),
			'styleIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconShape' => array(
				'type' => 'string',
				'default' => 'square'
			),
			'iconColor' => array(
				'type' => 'string'
			),
			'shapeBackground' => array(
				'type' => 'string'
			),
			'enableShapeBorder' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shapeBorderColor' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js'
	),
	'logo-slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/logo-slider',
		'version' => '0.1.0',
		'title' => 'Logo Slider',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'allowedBlocks' => array(
			'wpmozo/logo-slider-item'
		),
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'images' => array(
				'type' => 'array'
			),
			'logoPerSlide' => array(
				'type' => 'string',
				'default' => '4'
			),
			'slidesPerGroup' => array(
				'type' => 'string',
				'default' => '1'
			),
			'spaceBetweenSlides' => array(
				'type' => 'number',
				'default' => 20
			),
			'sliderLoop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enableLinearTransition' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoplaySpeed' => array(
				'type' => 'string',
				'default' => 3000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'transitionDuration' => array(
				'type' => 'string',
				'default' => 1000
			),
			'showArrow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'previousSlideArrow' => array(
				'type' => 'string',
				'default' => ''
			),
			'nextSlideArrow' => array(
				'type' => 'string',
				'default' => ''
			),
			'showArrowOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'arrowsPosition' => array(
				'type' => 'string',
				'default' => 'inside'
			),
			'showControlDot' => array(
				'type' => 'boolean',
				'default' => true
			),
			'controlDotStyle' => array(
				'type' => 'string',
				'default' => 'solid_dot'
			),
			'enableDynamicDots' => array(
				'type' => 'boolean',
				'default' => false
			),
			'containerbackground' => array(
				'type' => 'string'
			),
			'containerpadding' => array(
				'type' => 'object'
			),
			'sliderArrowColor' => array(
				'type' => 'string'
			),
			'sliderArrowBackground' => array(
				'type' => 'string'
			),
			'sliderActiveDoteColor' => array(
				'type' => 'string'
			),
			'sliderInactiveDoteColor' => array(
				'type' => 'string'
			),
			'arrowFontSize' => array(
				'type' => 'string'
			),
			'arrowpadding' => array(
				'type' => 'object'
			),
			'logoWidth' => array(
				'type' => 'number',
				'default' => 150
			),
			'logoHeight' => array(
				'type' => 'number',
				'default' => 150
			),
			'tabletLogoPerSlide' => array(
				'type' => 'string',
				'default' => '3'
			),
			'tabletSlidesPerGroup' => array(
				'type' => 'string',
				'default' => '1'
			),
			'tabletSpaceBetweenSlides' => array(
				'type' => 'number',
				'default' => 20
			),
			'mobileLogoPerSlide' => array(
				'type' => 'string',
				'default' => '1'
			),
			'mobileSlidesPerGroup' => array(
				'type' => 'string',
				'default' => '1'
			),
			'mobileSpaceBetweenSlides' => array(
				'type' => 'number',
				'default' => 20
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'file:./style-index.css',
			'wpmozo-blocks-and-addons-swiper-style'
		),
		'script' => array(
			'wpmozo-blocks-and-addons-swiper-script',
			'file:./script.js'
		)
	),
	'logo-slider-item' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/logo-slider-item',
		'version' => '0.1.0',
		'title' => 'Logo Slider Item',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'parent' => array(
			'wpmozo/logo-slider'
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'logo' => array(
				'type' => 'object'
			),
			'logoborderRadius' => array(
				'type' => 'string'
			),
			'logoborder' => array(
				'type' => 'object'
			),
			'altText' => array(
				'type' => 'string'
			),
			'link' => array(
				'type' => 'string'
			),
			'linkTarget' => array(
				'type' => 'string',
				'default' => 'same'
			),
			'logoBackground' => array(
				'type' => 'string'
			),
			'logopadding' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js'
	),
	'masonry-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/masonry-gallery',
		'version' => '0.1.0',
		'title' => 'Masonry Gallery',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Display multiple images in a masonry style gallery.',
		'example' => array(
			
		),
		'supports' => array(
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			),
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'images' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'source' => 'query',
				'selector' => '.wpmozo-blocks-and-addons-gallery--item',
				'query' => array(
					'url' => array(
						'source' => 'attribute',
						'selector' => 'img',
						'attribute' => 'src'
					)
				)
			),
			'gutterSize' => array(
				'type' => 'string'
			),
			'customGutterSize' => array(
				'type' => 'number'
			),
			'sizeSlug' => array(
				'type' => 'string'
			),
			'numberOfColumns' => array(
				'type' => 'number',
				'default' => 3
			),
			'showCaption' => array(
				'type' => 'boolean',
				'default' => false
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'mystery-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/mystery-image',
		'version' => '0.1.0',
		'title' => 'Mystery Image',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Mystery Image block to display random image from selected gallery.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'images_data' => array(
				'type' => 'array',
				'default' => array(
					
				),
				'source' => 'query',
				'selector' => '.wpmozo-blocks-and-addons-gallery--item',
				'query' => array(
					'url' => array(
						'source' => 'attribute',
						'selector' => 'img',
						'attribute' => 'src'
					)
				)
			),
			'showLightbox' => array(
				'type' => 'boolean',
				'default' => false
			),
			'lightboxBackgroundColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'lightboxCloseIconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'enableOverlay' => array(
				'type' => 'boolean',
				'default' => false
			),
			'overlayBackgroundColor' => array(
				'type' => 'string'
			),
			'overlayIconSize' => array(
				'type' => 'number'
			),
			'overlayIconColor' => array(
				'type' => 'string'
			),
			'overlayIcon' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => array(
			'wpmozo-blocks-and-addons-magnificPopup-style',
			'file:./style-index.css'
		),
		'viewScript' => 'file:./view.js',
		'script' => array(
			'wpmozo-blocks-and-addons-magnificPopup-script'
		)
	),
	'pricing-table' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/pricing-table',
		'version' => '0.1.0',
		'title' => 'Pricing Table',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'A Pricing Table Block displays side-by-side plans to compare features and pricing at a glance.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'WPMozo Pricing'
			),
			'titleLeval' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => 'Ultimate plan'
			),
			'headerGraphics' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'headerIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-star'
			),
			'headerImage' => array(
				'type' => 'string'
			),
			'currencySymbol' => array(
				'type' => 'string',
				'default' => '$'
			),
			'customSymbol' => array(
				'type' => 'string'
			),
			'price' => array(
				'type' => 'string',
				'default' => 99
			),
			'period' => array(
				'type' => 'string',
				'default' => 'Year'
			),
			'features' => array(
				'type' => 'array',
				'default' => array(
					array(
						'list' => 'feature 1',
						'icon' => 'fas fa-check'
					),
					array(
						'list' => 'feature 2',
						'icon' => 'fas fa-check'
					),
					array(
						'list' => 'feature 3',
						'icon' => 'fas fa-check'
					)
				)
			),
			'showButton' => array(
				'type' => 'boolean',
				'default' => false
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Read More'
			),
			'buttonUrl' => array(
				'type' => 'string'
			),
			'buttonLinkTarget' => array(
				'type' => 'string',
				'default' => 'same'
			),
			'buttonIcontype' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'buttonIcon' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonIconImage' => array(
				'type' => 'string'
			),
			'buttonIconPosition' => array(
				'type' => 'string',
				'default' => 'icon-after'
			),
			'showIconOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'titleLavel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'titleAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'titleColor' => array(
				'type' => 'string'
			),
			'titleFontSize' => array(
				'type' => 'string'
			),
			'titleFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleLetterSpacing' => array(
				'type' => 'string'
			),
			'titleDecoration' => array(
				'type' => 'string'
			),
			'titleLetterCase' => array(
				'type' => 'string'
			),
			'titleLineHeight' => array(
				'type' => 'string'
			),
			'subTitleColor' => array(
				'type' => 'string'
			),
			'subTitleAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'subTitleFontSize' => array(
				'type' => 'string'
			),
			'subTitleFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'subTitleLetterSpacing' => array(
				'type' => 'string'
			),
			'subTitleDecoration' => array(
				'type' => 'string'
			),
			'subTitleLetterCase' => array(
				'type' => 'string'
			),
			'subTitleLineHeight' => array(
				'type' => 'string'
			),
			'useIconFontSize' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconFontSize' => array(
				'type' => 'string'
			),
			'imageWidth' => array(
				'type' => 'string',
				'default' => '100px'
			),
			'imageHeight' => array(
				'type' => 'string',
				'default' => '100px'
			),
			'iconAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'iconColor' => array(
				'type' => 'string'
			),
			'headerGraphicsDimensionspadding' => array(
				'type' => 'object'
			),
			'headerGraphicsDimensionsmargin' => array(
				'type' => 'object'
			),
			'backgroundColor' => array(
				'type' => 'string'
			),
			'align' => array(
				'type' => 'string'
			),
			'mainDimensionspadding' => array(
				'type' => 'object'
			),
			'mainDimensionsmargin' => array(
				'type' => 'object'
			),
			'currencyColor' => array(
				'type' => 'string'
			),
			'currencyFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'currencyLetterSpacing' => array(
				'type' => 'string'
			),
			'currencyDecoration' => array(
				'type' => 'string'
			),
			'currencyLetterCase' => array(
				'type' => 'string'
			),
			'currencyLineHeight' => array(
				'type' => 'string'
			),
			'currencyFontSize' => array(
				'type' => 'string'
			),
			'priceColor' => array(
				'type' => 'string'
			),
			'priceFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'priceLetterSpacing' => array(
				'type' => 'string'
			),
			'priceDecoration' => array(
				'type' => 'string'
			),
			'priceLetterCase' => array(
				'type' => 'string'
			),
			'priceLineHeight' => array(
				'type' => 'string'
			),
			'priceFontSize' => array(
				'type' => 'string'
			),
			'periodColor' => array(
				'type' => 'string'
			),
			'periodFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'periodLetterSpacing' => array(
				'type' => 'string'
			),
			'periodDecoration' => array(
				'type' => 'string'
			),
			'periodLetterCase' => array(
				'type' => 'string'
			),
			'periodLineHeight' => array(
				'type' => 'string'
			),
			'periodFontSize' => array(
				'type' => 'string'
			),
			'featuresAlign' => array(
				'type' => 'string'
			),
			'featuresFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'featuresLetterSpacing' => array(
				'type' => 'string'
			),
			'featuresDecoration' => array(
				'type' => 'string'
			),
			'featuresLetterCase' => array(
				'type' => 'string'
			),
			'featuresLineHeight' => array(
				'type' => 'string'
			),
			'featuresFontSize' => array(
				'type' => 'string'
			),
			'featuresColor' => array(
				'type' => 'string'
			),
			'featuresBackground' => array(
				'type' => 'string'
			),
			'feturesAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'showFeaturesIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'featuresIcon' => array(
				'type' => 'string'
			),
			'featuresIconsColor' => array(
				'type' => 'string'
			),
			'featuresIconsSpacing' => array(
				'type' => 'string',
				'default' => '5px'
			),
			'featuresDimensionspadding' => array(
				'type' => 'object'
			),
			'featuresDimensionsmargin' => array(
				'type' => 'object'
			),
			'buttonAlign' => array(
				'type' => 'string'
			),
			'buttonStyle' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'buttonTextColor' => array(
				'type' => 'string'
			),
			'buttonTextBackground' => array(
				'type' => 'string'
			),
			'iconTextColor' => array(
				'type' => 'string'
			),
			'iconTextBackground' => array(
				'type' => 'string'
			),
			'borderSelection' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'borderWidth' => array(
				'type' => 'string'
			),
			'borderRadius' => array(
				'type' => 'string'
			),
			'borderColor' => array(
				'type' => 'string'
			),
			'buttonTextHoverColor' => array(
				'type' => 'string'
			),
			'buttonTextHoverBackground' => array(
				'type' => 'string'
			),
			'iconTextHoverColor' => array(
				'type' => 'string'
			),
			'iconTextHoverBackground' => array(
				'type' => 'string'
			),
			'borderSelectionHover' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'borderWidthHover' => array(
				'type' => 'string'
			),
			'borderRadiusHover' => array(
				'type' => 'string'
			),
			'borderHoverColor' => array(
				'type' => 'string'
			),
			'borderDimensionspadding' => array(
				'type' => 'object'
			),
			'borderDimensionsmargin' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'separator' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/separator',
		'version' => '0.1.0',
		'title' => 'Separator',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Separator with multiple options like icons, text, shodow, color, thickness, and many more.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'separatorType' => array(
				'type' => 'string',
				'default' => 'line'
			),
			'lineUseWith' => array(
				'type' => 'string',
				'default' => 'onlySeparator'
			),
			'lineStyle' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'separatorText' => array(
				'type' => 'string',
				'default' => 'Add text here'
			),
			'textNormalColor' => array(
				'type' => 'string',
				'default' => '#222222'
			),
			'textHoverColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'textNormalFontSize' => array(
				'type' => 'string'
			),
			'textNormalFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'textNormalLetterSpacing' => array(
				'type' => 'string'
			),
			'textNormalDecoration' => array(
				'type' => 'string'
			),
			'textNormalLetterCase' => array(
				'type' => 'string'
			),
			'textNormalLineHeight' => array(
				'type' => 'string'
			),
			'textHoverFontSize' => array(
				'type' => 'string'
			),
			'textHoverFontAppearance' => array(
				'type' => 'object',
				'fontStyle' => array(
					'type' => 'string'
				),
				'fontWeight' => array(
					'type' => 'string'
				),
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'textHoverLetterSpacing' => array(
				'type' => 'string'
			),
			'textHoverDecoration' => array(
				'type' => 'string'
			),
			'textHoverLetterCase' => array(
				'type' => 'string'
			),
			'textHoverLineHeight' => array(
				'type' => 'string'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'separatorImage' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageWidth' => array(
				'type' => 'number'
			),
			'imagePosition' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'separatorIcon' => array(
				'type' => 'string',
				'default' => ''
			),
			'iconPosition' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'enableIconFontSize' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconFontSize' => array(
				'type' => 'number',
				'default' => 32
			),
			'iconColor' => array(
				'type' => 'string'
			),
			'styleIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconShape' => array(
				'type' => 'string',
				'default' => 'square'
			),
			'shapeBackground' => array(
				'type' => 'string'
			),
			'enableShapeBorder' => array(
				'type' => 'boolean',
				'default' => false
			),
			'shapeBorderColor' => array(
				'type' => 'string'
			),
			'separatorThickness' => array(
				'type' => 'number',
				'default' => 3
			),
			'separatorGradient' => array(
				'type' => 'string'
			),
			'separatorColor' => array(
				'type' => 'string',
				'default' => '#2b87da'
			),
			'shadowColor' => array(
				'type' => 'string',
				'default' => '#2b87da'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'wpmozo-blocks-and-addons-fontawesome-style',
		'style' => 'file:./style-index.css'
	),
	'star-rating' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/star-rating',
		'version' => '0.1.0',
		'title' => 'Star Rating',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Display star ratings for products, services, and reviews using schema for rich, eye-catching results.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'globalTextAlign' => array(
				'type' => 'string'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Review Title'
			),
			'titleLevel' => array(
				'type' => 'string',
				'default' => 'h4'
			),
			'hideTitle' => array(
				'type' => 'boolean',
				'default' => false
			),
			'titleColor' => array(
				'type' => 'string'
			),
			'titleFontSize' => array(
				'type' => 'string'
			),
			'titleLetterSpacing' => array(
				'type' => 'string'
			),
			'titleDecoration' => array(
				'type' => 'string'
			),
			'titleLetterCase' => array(
				'type' => 'string'
			),
			'titleLineHeight' => array(
				'type' => 'string'
			),
			'titleFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleFontStyle' => array(
				'type' => 'string'
			),
			'titleFontWeight' => array(
				'type' => 'string'
			),
			'rating' => array(
				'type' => 'string',
				'default' => '5'
			),
			'iconSVGs' => array(
				'type' => 'object'
			),
			'ratingColor' => array(
				'type' => 'string'
			),
			'ratingFontSize' => array(
				'type' => 'string'
			),
			'ratingLetterSpacing' => array(
				'type' => 'string'
			),
			'ratingDecoration' => array(
				'type' => 'string'
			),
			'ratingLetterCase' => array(
				'type' => 'string'
			),
			'ratingLineHeight' => array(
				'type' => 'string'
			),
			'ratingFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'ratingFontStyle' => array(
				'type' => 'string'
			),
			'ratingFontWeight' => array(
				'type' => 'string'
			),
			'ratingOutOf' => array(
				'type' => 'number',
				'default' => 5
			),
			'image' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => ''
			),
			'description' => array(
				'type' => 'string',
				'default' => ''
			),
			'descriptionColor' => array(
				'type' => 'string'
			),
			'descriptionFontSize' => array(
				'type' => 'string'
			),
			'descriptionLetterSpacing' => array(
				'type' => 'string'
			),
			'descriptionDecoration' => array(
				'type' => 'string'
			),
			'descriptionLetterCase' => array(
				'type' => 'string'
			),
			'descriptionLineHeight' => array(
				'type' => 'string'
			),
			'descriptionFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'descriptionFontStyle' => array(
				'type' => 'string'
			),
			'descriptionFontWeight' => array(
				'type' => 'string'
			),
			'rateIcon' => array(
				'type' => 'string',
				'default' => 'default'
			),
			'rateIconFilledColor' => array(
				'type' => 'string',
				'default' => '#fac917'
			),
			'rateIconEmptyColor' => array(
				'type' => 'string',
				'default' => '#fac917'
			),
			'ratePosition' => array(
				'type' => 'string',
				'default' => 'below_title'
			),
			'showRateNum' => array(
				'type' => 'boolean',
				'default' => true
			),
			'starFontSize' => array(
				'type' => 'number',
				'default' => 24
			),
			'starSpacing' => array(
				'type' => 'number',
				'default' => 2
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css'
	),
	'testimonial-slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/testimonial-slider',
		'version' => '0.1.0',
		'title' => 'Testimonial Slider',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Showcase client feedback beautifully with an interactive testimonial slider for engaging and trustworthy presentations.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'layout1'
			),
			'postsToShow' => array(
				'type' => 'number',
				'default' => 5
			),
			'postOrder' => array(
				'type' => 'string',
				'default' => 'desc'
			),
			'postOrderBy' => array(
				'type' => 'string',
				'default' => 'date'
			),
			'includesCategories' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'noResultText' => array(
				'type' => 'string',
				'default' => 'The testimonials you requested could not be found. Try changing your module settings or create some new testimonials.'
			),
			'showRating' => array(
				'type' => 'boolean',
				'default' => true
			),
			'starFontSize' => array(
				'type' => 'number',
				'default' => 28
			),
			'starFilledColor' => array(
				'type' => 'string',
				'default' => '#fac917'
			),
			'starEmptyColor' => array(
				'type' => 'string',
				'default' => '#fac917'
			),
			'showAuthorImage' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDesignation' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showCompany' => array(
				'type' => 'boolean',
				'default' => true
			),
			'slideEffect' => array(
				'type' => 'string',
				'default' => 'slide'
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerViewTablet' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerViewMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerGroup' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerGroupTablet' => array(
				'type' => 'number',
				'default' => 1
			),
			'slidesPerGroupMobile' => array(
				'type' => 'number',
				'default' => 1
			),
			'spaceBetweenSlides' => array(
				'type' => 'number',
				'default' => 20
			),
			'spaceBetweenSlidesTablet' => array(
				'type' => 'number',
				'default' => 20
			),
			'spaceBetweenSlidesMobile' => array(
				'type' => 'number',
				'default' => 20
			),
			'equalHeight' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoHeight' => array(
				'type' => 'boolean',
				'default' => false
			),
			'enableLoop' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'enableLinearTrans' => array(
				'type' => 'boolean',
				'default' => false
			),
			'autoplayDelay' => array(
				'type' => 'number',
				'default' => 3000
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'transDuration' => array(
				'type' => 'number',
				'default' => 1000
			),
			'enableCoverflowShadow' => array(
				'type' => 'boolean',
				'default' => false
			),
			'coverflowShadowColor' => array(
				'type' => 'string',
				'default' => '#cccccc'
			),
			'coverflowRotate' => array(
				'type' => 'number',
				'default' => 40
			),
			'coverflowDepth' => array(
				'type' => 'number',
				'default' => 100
			),
			'showArrows' => array(
				'type' => 'boolean',
				'default' => false
			),
			'prevArrowIcon' => array(
				'type' => 'string',
				'default' => ''
			),
			'nextArrowIcon' => array(
				'type' => 'string',
				'default' => ''
			),
			'showArrowOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'arrowsPosition' => array(
				'type' => 'string',
				'default' => 'inside'
			),
			'showControlDot' => array(
				'type' => 'boolean',
				'default' => false
			),
			'controlDotStyle' => array(
				'type' => 'string',
				'default' => 'solid_dot'
			),
			'enableDynamicDots' => array(
				'type' => 'boolean',
				'default' => false
			),
			'controlDotColorActive' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'controlDotColorInactive' => array(
				'type' => 'string',
				'default' => '#cccccc'
			),
			'globalTextAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'bodyColor' => array(
				'type' => 'string'
			),
			'bodyFontSize' => array(
				'type' => 'string'
			),
			'bodyLetterSpacing' => array(
				'type' => 'string'
			),
			'bodyDecoration' => array(
				'type' => 'string'
			),
			'bodyLetterCase' => array(
				'type' => 'string'
			),
			'bodyLineHeight' => array(
				'type' => 'string'
			),
			'bodyFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'bodyFontStyle' => array(
				'type' => 'string'
			),
			'bodyFontWeight' => array(
				'type' => 'string'
			),
			'bodyHoverColor' => array(
				'type' => 'string'
			),
			'bodyHoverFontSize' => array(
				'type' => 'string'
			),
			'bodyHoverLetterSpacing' => array(
				'type' => 'string'
			),
			'bodyHoverDecoration' => array(
				'type' => 'string'
			),
			'bodyHoverLetterCase' => array(
				'type' => 'string'
			),
			'bodyHoverLineHeight' => array(
				'type' => 'string'
			),
			'bodyHoverFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'bodyHoverFontStyle' => array(
				'type' => 'string'
			),
			'bodyHoverFontWeight' => array(
				'type' => 'string'
			),
			'authorNameColor' => array(
				'type' => 'string'
			),
			'authorNameFontSize' => array(
				'type' => 'string'
			),
			'authorNameLetterSpacing' => array(
				'type' => 'string'
			),
			'authorNameDecoration' => array(
				'type' => 'string'
			),
			'authorNameLetterCase' => array(
				'type' => 'string'
			),
			'authorNameLineHeight' => array(
				'type' => 'string'
			),
			'authorNameFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'authorNameFontStyle' => array(
				'type' => 'string'
			),
			'authorNameFontWeight' => array(
				'type' => 'string'
			),
			'authorNameHoverColor' => array(
				'type' => 'string'
			),
			'authorNameHoverFontSize' => array(
				'type' => 'string'
			),
			'authorNameHoverLetterSpacing' => array(
				'type' => 'string'
			),
			'authorNameHoverDecoration' => array(
				'type' => 'string'
			),
			'authorNameHoverLetterCase' => array(
				'type' => 'string'
			),
			'authorNameHoverLineHeight' => array(
				'type' => 'string'
			),
			'authorNameHoverFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'authorNameHoverFontStyle' => array(
				'type' => 'string'
			),
			'authorNameHoverFontWeight' => array(
				'type' => 'string'
			),
			'designationColor' => array(
				'type' => 'string'
			),
			'designationFontSize' => array(
				'type' => 'string'
			),
			'designationLetterSpacing' => array(
				'type' => 'string'
			),
			'designationDecoration' => array(
				'type' => 'string'
			),
			'designationLetterCase' => array(
				'type' => 'string'
			),
			'designationLineHeight' => array(
				'type' => 'string'
			),
			'designationFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'designationFontStyle' => array(
				'type' => 'string'
			),
			'designationFontWeight' => array(
				'type' => 'string'
			),
			'designationHoverColor' => array(
				'type' => 'string'
			),
			'designationHoverFontSize' => array(
				'type' => 'string'
			),
			'designationHoverLetterSpacing' => array(
				'type' => 'string'
			),
			'designationHoverDecoration' => array(
				'type' => 'string'
			),
			'designationHoverLetterCase' => array(
				'type' => 'string'
			),
			'designationHoverLineHeight' => array(
				'type' => 'string'
			),
			'designationHoverFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'designationHoverFontStyle' => array(
				'type' => 'string'
			),
			'designationHoverFontWeight' => array(
				'type' => 'string'
			),
			'companyNameColor' => array(
				'type' => 'string'
			),
			'companyNameFontSize' => array(
				'type' => 'string'
			),
			'companyNameLetterSpacing' => array(
				'type' => 'string'
			),
			'companyNameDecoration' => array(
				'type' => 'string'
			),
			'companyNameLetterCase' => array(
				'type' => 'string'
			),
			'companyNameLineHeight' => array(
				'type' => 'string'
			),
			'companyNameFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'companyNameFontStyle' => array(
				'type' => 'string'
			),
			'companyNameFontWeight' => array(
				'type' => 'string'
			),
			'companyNameHoverColor' => array(
				'type' => 'string'
			),
			'companyNameHoverFontSize' => array(
				'type' => 'string'
			),
			'companyNameHoverLetterSpacing' => array(
				'type' => 'string'
			),
			'companyNameHoverDecoration' => array(
				'type' => 'string'
			),
			'companyNameHoverLetterCase' => array(
				'type' => 'string'
			),
			'companyNameHoverLineHeight' => array(
				'type' => 'string'
			),
			'companyNameHoverFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'companyNameHoverFontStyle' => array(
				'type' => 'string'
			),
			'companyNameHoverFontWeight' => array(
				'type' => 'string'
			),
			'showOpenQuoteIcon' => array(
				'type' => 'boolean',
				'default' => true
			),
			'openQuoteIconSize' => array(
				'type' => 'number',
				'default' => 42
			),
			'openQuoteIconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'showCloseQuoteIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'closeQuoteIconSize' => array(
				'type' => 'number',
				'default' => 42
			),
			'closeQuoteIconColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowpadding' => array(
				'type' => 'object'
			),
			'arrowIconSize' => array(
				'type' => 'number',
				'default' => 24
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowBackground' => array(
				'type' => 'string',
				'default' => ''
			),
			'arrowborder' => array(
				'type' => 'object'
			),
			'arrowborderRadius' => array(
				'type' => 'string'
			),
			'arrowborderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'metaSeparatorColor' => array(
				'type' => 'string',
				'default' => '#dddddd'
			),
			'containerpadding' => array(
				'type' => 'object'
			),
			'testimonialpadding' => array(
				'type' => 'object'
			),
			'testimonialBackground' => array(
				'type' => 'string'
			),
			'testimonialBGGradient' => array(
				'type' => 'string'
			),
			'testimonialborder' => array(
				'type' => 'object'
			),
			'testimonialborderRadius' => array(
				'type' => 'string'
			),
			'testimonialborderColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'authorImageborder' => array(
				'type' => 'object'
			),
			'authorImageborderRadius' => array(
				'type' => 'string'
			),
			'authorImageborderColor' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => array(
			'file:./style-index.css',
			'wpmozo-blocks-and-addons-swiper-style',
			'wpmozo-blocks-and-addons-swiper-wpmozo-style'
		),
		'script' => array(
			'file:./script.js',
			'wpmozo-blocks-and-addons-swiper-script'
		),
		'render' => 'file:./render.php'
	),
	'tilt-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/tilt-image',
		'version' => '0.1.0',
		'title' => 'Tilt Image',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Add an interesting tilt effect to your images for an interactive touch.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'customClassName' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'className' => array(
				'type' => 'string'
			),
			'image' => array(
				'type' => 'string'
			),
			'title' => array(
				'type' => 'string'
			),
			'titleLevel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'titleColor' => array(
				'type' => 'string'
			),
			'titleFontSize' => array(
				'type' => 'string'
			),
			'titleFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'titleLetterSpacing' => array(
				'type' => 'string'
			),
			'titleDecoration' => array(
				'type' => 'string'
			),
			'titleLetterCase' => array(
				'type' => 'string'
			),
			'titleLineHeight' => array(
				'type' => 'string'
			),
			'titleAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'content' => array(
				'type' => 'string'
			),
			'descriptionColor' => array(
				'type' => 'string'
			),
			'descriptionFontSize' => array(
				'type' => 'string'
			),
			'descriptionFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'descriptionLetterSpacing' => array(
				'type' => 'string'
			),
			'descriptionDecoration' => array(
				'type' => 'string'
			),
			'descriptionLetterCase' => array(
				'type' => 'string'
			),
			'descriptionLineHeight' => array(
				'type' => 'string'
			),
			'descriptionAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'overlayColor' => array(
				'type' => 'string'
			),
			'useIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'icon' => array(
				'type' => 'string'
			),
			'iconColor' => array(
				'type' => 'string'
			),
			'iconAlign' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'useIconFontSize' => array(
				'type' => 'boolean',
				'default' => false
			),
			'iconFontSize' => array(
				'type' => 'string'
			),
			'showButton' => array(
				'type' => 'boolean',
				'default' => false
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Read More'
			),
			'buttonUrl' => array(
				'type' => 'string'
			),
			'buttonLinkTarget' => array(
				'type' => 'string',
				'default' => 'same'
			),
			'buttonTextColor' => array(
				'type' => 'string'
			),
			'buttonBackgroundColor' => array(
				'type' => 'string'
			),
			'buttonFontSize' => array(
				'type' => 'string'
			),
			'buttonFontAppearance' => array(
				'type' => 'object',
				'default' => array(
					'fontStyle' => '',
					'fontWeight' => ''
				)
			),
			'buttonLetterSpacing' => array(
				'type' => 'string'
			),
			'buttonDecoration' => array(
				'type' => 'string'
			),
			'buttonLetterCase' => array(
				'type' => 'string'
			),
			'buttonLineHeight' => array(
				'type' => 'string'
			),
			'buttonborder' => array(
				'type' => 'object'
			),
			'buttonborderRadius' => array(
				'type' => 'string'
			),
			'buttonpadding' => array(
				'type' => 'object'
			),
			'buttonwrapmargin' => array(
				'type' => 'object'
			),
			'tiltMax' => array(
				'type' => 'number',
				'default' => 20
			),
			'tiltPerspective' => array(
				'type' => 'number',
				'default' => 1000
			),
			'tiltScale' => array(
				'type' => 'number',
				'default' => 1
			),
			'tiltSpeed' => array(
				'type' => 'number',
				'default' => 300
			),
			'tiltMobile' => array(
				'type' => 'boolean',
				'default' => false
			),
			'useGlare' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tiltMaxGlare' => array(
				'type' => 'number',
				'default' => 1
			),
			'use3dEffect' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tilt3dValue' => array(
				'type' => 'number',
				'default' => 1
			),
			'useDisableAxis' => array(
				'type' => 'boolean',
				'default' => false
			),
			'tiltDisableAxis' => array(
				'type' => 'string'
			),
			'useOverlay' => array(
				'type' => 'boolean',
				'default' => false
			),
			'contentOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'contentAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'contentAnimationDirection' => array(
				'type' => 'string',
				'default' => 'off'
			),
			'contentpadding' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'script' => 'file:./script.js'
	)
);
