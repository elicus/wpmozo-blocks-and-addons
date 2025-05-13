<?php
// This file is generated. Do not modify it manually.
return array(
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
			'html' => false
		),
		'attributes' => array(
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
				'role' => 'text',
				'default' => 'enter your text'
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
