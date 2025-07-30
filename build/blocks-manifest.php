<?php
// This file is generated. Do not modify it manually.
return array(
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
			'html' => false
		),
		'attributes' => array(
			'ID' => array(
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
