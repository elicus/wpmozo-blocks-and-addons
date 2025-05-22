<?php
// This file is generated. Do not modify it manually.
return array(
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
