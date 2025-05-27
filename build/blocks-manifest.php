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
	)
);
