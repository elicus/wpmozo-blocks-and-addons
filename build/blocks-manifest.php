<?php
// This file is generated. Do not modify it manually.
return array(
	'before-after-slider' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/before-after-slider',
		'version' => '1.1.0',
		'title' => 'Before After Slider',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'globalcolorHandle' => array(
				'type' => 'string'
			),
			'globalcolorOverlay' => array(
				'type' => 'string'
			),
			'sliderOrientation' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'handleOffset' => array(
				'type' => 'number'
			),
			'moveHandleOnHover' => array(
				'type' => 'boolean',
				'default' => false
			),
			'moveHandleOnClick' => array(
				'type' => 'boolean',
				'default' => false
			),
			'overlayOnHover' => array(
				'type' => 'boolean',
				'default' => false
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
		'editorStyle' => 'file:./index.css',
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
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
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
			'toggleTwoIcon' => array(
				'type' => 'string'
			),
			'toggleTwoIconPostion' => array(
				'type' => 'string',
				'default' => 'before'
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
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'script' => 'file:./script.js',
		'viewScript' => 'file:./view.js'
	),
	'content-wrapper' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/content-wrapper',
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
	'fancy-text' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/fancy-text',
		'version' => '0.1.0',
		'title' => 'Fancy Text',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
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
		'editorStyle' => 'file:./index.css',
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
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
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
			'frontTitle' => array(
				'type' => 'string',
				'default' => 'Front Title'
			),
			'frontContnet' => array(
				'type' => 'string',
				'default' => 'Here you can set front text.'
			),
			'backTitle' => array(
				'type' => 'string',
				'default' => 'Back Title'
			),
			'backContnet' => array(
				'type' => 'string',
				'default' => 'Here you can set back text.'
			),
			'frontElType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'frontElIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-star'
			),
			'frontElImage' => array(
				'type' => 'string'
			),
			'backElType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'backElIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-star'
			),
			'backElImage' => array(
				'type' => 'string'
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
			'frontHeadingLavel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'frontTitleColor' => array(
				'type' => 'string'
			),
			'frontContentColor' => array(
				'type' => 'string'
			),
			'frontBackgroundColor' => array(
				'type' => 'string',
				'default' => '#543EC4'
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
			'backHeadingLavel' => array(
				'type' => 'string',
				'default' => 'h2'
			),
			'backTitleColor' => array(
				'type' => 'string'
			),
			'backContentColor' => array(
				'type' => 'string'
			),
			'backBackgroundColor' => array(
				'type' => 'string',
				'default' => '#863AD0'
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
			'frontElementAlign' => array(
				'type' => 'string',
				'default' => 'top'
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
			'backElementAlign' => array(
				'type' => 'string',
				'default' => 'top'
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
			'frontContentHorAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'frontContentVerAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'backContentHorAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'backContentVerAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'frontFlipboxborder' => array(
				'type' => 'object'
			),
			'frontFlipboxborderRadius' => array(
				'type' => 'string'
			),
			'backFlipboxborder' => array(
				'type' => 'object'
			),
			'backFlipboxborderRadius' => array(
				'type' => 'string'
			),
			'frontFlipboxBackground' => array(
				'type' => 'string',
				'default' => '#543EC4'
			),
			'backFlipboxBackground' => array(
				'type' => 'string',
				'default' => '#863AD0'
			),
			'flipboxWidth' => array(
				'type' => 'string',
				'default' => '100%'
			),
			'flipboxWidthUnit' => array(
				'type' => 'string',
				'default' => '%'
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
			),
			'frontIconShapeBorderColor' => array(
				'type' => 'string'
			),
			'backIconShapeBorderColor' => array(
				'type' => 'string'
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
			'backDimensionspadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '10px',
					'right' => '10px',
					'bottom' => '10px',
					'left' => '10px'
				)
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'script' => 'file:./script.js',
		'viewScript' => 'file:./view.js'
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
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
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
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'image-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/image-card',
		'version' => '0.1.0',
		'title' => 'Image Card',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'shadow' => true
		),
		'attributes' => array(
			'ID' => array(
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
				'default' => 'Image Card Title'
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
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'interactive-image-card' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/interactive-image-card',
		'version' => '0.1.0',
		'title' => 'Interactive Image Card',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'title' => array(
				'type' => 'string',
				'default' => 'Image Card Title'
			),
			'content' => array(
				'type' => 'string',
				'default' => 'Your content goes here. Edit this text inline or in the widget Content settings. You can also style every aspect of this content in the widget Design settings.'
			),
			'backImage' => array(
				'type' => 'string'
			),
			'layout' => array(
				'type' => 'string',
				'default' => 'lily'
			),
			'imageOpacity' => array(
				'type' => 'number',
				'default' => 0.7
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
			),
			'titleLavel' => array(
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
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
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
			'textColor' => array(
				'type' => 'string',
				'default' => '#222222'
			),
			'linkColor' => array(
				'type' => 'string',
				'default' => '#000000'
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
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
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
			'markerType' => array(
				'type' => 'string',
				'default' => 'icon'
			),
			'markerIcon' => array(
				'type' => 'string',
				'default' => 'fas fa-check'
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
			),
			'markerImage' => array(
				'type' => 'string',
				'default' => ''
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
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
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
		'editorStyle' => 'file:./index.css',
		'style' => array(
			'file:./style-index.css',
			'wpmozo-blocks-and-addons-swiper-style'
		),
		'script' => array(
			'wpmozo-blocks-and-addons-swiper-script',
			'file:./script.js'
		),
		'viewScript' => 'file:./view.js'
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
			),
			'logoborderRadius' => array(
				'type' => 'string'
			),
			'logoborder' => array(
				'type' => 'object'
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'separator' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/separator',
		'version' => '0.1.0',
		'title' => 'Separator',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
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
			'separatorText' => array(
				'type' => 'string',
				'default' => 'Add text here'
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
			'lineStyle' => array(
				'type' => 'string',
				'default' => 'solid'
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
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => array(
			'file:./index.css',
			'wpmozo-blocks-and-addons-fontawesome-style'
		),
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'tilt-image' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wpmozo/tilt-image',
		'version' => '0.1.0',
		'title' => 'Tilt Image',
		'category' => 'wpmozo',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
				'type' => 'string'
			),
			'image' => array(
				'type' => 'string'
			),
			'title' => array(
				'type' => 'string'
			),
			'content' => array(
				'type' => 'string'
			),
			'overlayColor' => array(
				'type' => 'string'
			),
			'titleLavel' => array(
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
			'useIcon' => array(
				'type' => 'boolean',
				'default' => false
			),
			'icon' => array(
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
			)
		),
		'textdomain' => 'wpmozo-blocks-and-addons',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'script' => 'file:./script.js'
	)
);
