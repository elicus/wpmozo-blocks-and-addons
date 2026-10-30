const advancedAttributes = {
	wrapBackground:           { type: 'string', default: '' },
	wrapBackgroundHover:      { type: 'string', default: '' },
	wrappadding:              { type: 'object' },
	wrapHoverpadding:         { type: 'object' },
	wrapborder:               { type: 'object' },
	wrapHoverborder:          { type: 'object' },
	wrapborderRadius:         { type: 'object' },
	wrapHoverborderRadius:    { type: 'object' },
	wrapTransform:            { type: 'string', default: 'translate' },
	wrapTranslate:            { type: 'object', default: { X:'', Y:'' }},
	wrapScale:                { type: 'object', default: { X:'', Y:'' }},
	wrapRotate:               { type: 'object', default: { X:'', Y:'', Z:'' }},
	wrapSkew:                 { type: 'object', default: { X:'', Y:'' }},
	wrapTransformOrigin:      { type: 'object', default: { X:'', Y:'' }},
	wrapTranslateHover:       { type: 'object', default: { X:'', Y:'' } },
	wrapScaleHover:           { type: 'object', default: { X:'', Y:'' }  },
	wrapRotateHover:          { type: 'object', default: { X:'', Y:'', Z:'' }  },
	wrapSkewHover:            { type: 'object', default: { X:'', Y:'' }  },
	wrapTransformOriginHover: { type: 'object', default: { X:'', Y:'' }  },
	wrapCustomClass:          { type: 'string', default: '' },
	wrapStyle:                { type: 'string', default: '' },
	wrapIsHover:              {type:'boolean',default: false }
};

export default advancedAttributes;
