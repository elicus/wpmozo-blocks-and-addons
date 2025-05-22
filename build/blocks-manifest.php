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
