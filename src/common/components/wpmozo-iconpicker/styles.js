/**
 * Styles for the icon picker, added once per document by the component.
 * They live here, next to the component, rather than in the plugin's editor stylesheet.
 */
const STYLE_ELEMENT_ID = 'wpmozo-icon-picker-styles';

const THEME = 'var(--wp-admin-theme-color, #3858e9)';
const MONO = 'Menlo, Consolas, monaco, monospace';

const CSS = `
/* The editor stylesheet sizes direct children of the old picker to 85%; the new layout is full width. */
.wpmozo-icon-picker.wpmozo-icon-picker--popover > div { width: auto; }
.wpmozo-icon-picker--popover .wpmozo-icon-picker__label { display: block; margin-bottom: 8px; }
.wpmozo-icon-picker__row { display: flex; align-items: center; gap: 4px; }
.wpmozo-icon-picker__dropdown { display: block; flex: 1 1 auto; min-width: 0; }

.wpmozo-icon-picker__trigger {
	box-sizing: border-box; display: flex; align-items: center; gap: 10px;
	width: 100%; height: 48px; margin: 0; padding: 0 8px 0 7px;
	border: 1px solid #949494; border-radius: 2px; background: #fff; color: #1e1e1e;
	font-family: inherit; font-size: 13px; text-align: left; cursor: pointer;
}
.wpmozo-icon-picker__trigger:hover { border-color: #1e1e1e; }
.wpmozo-icon-picker__trigger:focus { outline: none; }
.wpmozo-icon-picker__trigger:focus-visible,
.wpmozo-icon-picker__trigger.is-open {
	border-color: ${ THEME }; box-shadow: 0 0 0 1px ${ THEME }; outline: 2px solid transparent;
}
.wpmozo-icon-picker__trigger:disabled { background: #f6f6f6; border-color: #ddd; color: #757575; cursor: default; }
.wpmozo-icon-picker__swatch {
	box-sizing: border-box; flex: 0 0 32px; width: 32px; height: 32px;
	display: flex; align-items: center; justify-content: center;
	background: #f0f0f0; border-radius: 2px; color: #1e1e1e; font-size: 16px; line-height: 1;
}
.wpmozo-icon-picker__trigger.is-empty .wpmozo-icon-picker__swatch {
	background: #fff; border: 1px dashed #949494; color: #757575; font-size: 18px;
}
.wpmozo-icon-picker__trigger:disabled .wpmozo-icon-picker__swatch { background: #f0f0f0; border-color: #ddd; }
.wpmozo-icon-picker__text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.wpmozo-icon-picker__name,
.wpmozo-icon-picker__class { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.wpmozo-icon-picker__name { font-size: 13px; line-height: 16px; }
.wpmozo-icon-picker__class { font-family: ${ MONO }; font-size: 11px; line-height: 14px; color: #757575; }
.wpmozo-icon-picker__chevron { flex: 0 0 auto; fill: currentColor; }
.wpmozo-icon-picker__clear { flex: 0 0 auto; }

/* The popover caps its height to the space available; only the grid shrinks to fit. */
.wpmozo-icon-picker-popover .components-popover__content {
	box-sizing: border-box; display: flex; flex-direction: column; width: 320px; padding: 0;
	background: #fff; border-radius: 4px;
	box-shadow: 0 0 0 1px rgba(0, 0, 0, .12), 0 12px 32px rgba(0, 0, 0, .16);
}
.wpmozo-icon-picker-panel {
	display: flex; flex-direction: column; flex: 1 1 auto; min-height: 0; color: #1e1e1e; font-size: 13px;
}
.wpmozo-icon-picker-panel > * { flex: 0 0 auto; }
.wpmozo-icon-picker-panel > .wpmozo-icon-picker-grid { flex: 0 1 auto; min-height: 88px; }
.wpmozo-icon-picker-panel__header {
	display: flex; align-items: center; justify-content: space-between; height: 40px; padding: 0 4px 0 16px;
}
.wpmozo-icon-picker-panel__title { margin: 0; font-size: 13px; font-weight: 600; line-height: 1.4; }

.wpmozo-icon-picker-panel__search { position: relative; padding: 0 12px; }
.wpmozo-icon-picker-panel__search .components-input-control__container { background: #f0f0f0; }
.wpmozo-icon-picker-panel__search .components-input-control__container:focus-within { background: #fff; }
.wpmozo-icon-picker-panel__search .components-input-control__backdrop { border-color: transparent; }
.wpmozo-icon-picker-panel__search .components-input-control__container:focus-within .components-input-control__backdrop {
	border-color: ${ THEME }; box-shadow: 0 0 0 .5px ${ THEME };
}
.wpmozo-icon-picker-panel__search .components-input-control__input { padding-right: 76px; }
.wpmozo-icon-picker-panel__count {
	position: absolute; top: 50%; right: 52px; transform: translateY(-50%);
	font-size: 11px; color: #757575; pointer-events: none; white-space: nowrap;
}

.wpmozo-icon-picker-panel__chips { display: flex; flex-wrap: wrap; gap: 4px; padding: 10px 12px 0; }
.wpmozo-icon-picker-chip {
	box-sizing: border-box; display: inline-flex; align-items: center; gap: 3px; height: 26px; margin: 0;
	padding: 0 7px; border: 1px solid #ddd; border-radius: 13px; background: #fff; color: #1e1e1e;
	font-family: inherit; font-size: 11px; line-height: 1; cursor: pointer;
}
.wpmozo-icon-picker-chip:hover { border-color: #1e1e1e; }
.wpmozo-icon-picker-chip:focus { outline: none; }
.wpmozo-icon-picker-chip:focus-visible { outline: 2px solid ${ THEME }; outline-offset: 1px; }
.wpmozo-icon-picker-chip[aria-pressed="true"] { background: ${ THEME }; border-color: ${ THEME }; color: #fff; }
.wpmozo-icon-picker-chip:disabled { opacity: .45; cursor: default; }
.wpmozo-icon-picker-chip:disabled:hover { border-color: #ddd; }
.wpmozo-icon-picker-chip__count { font-size: 10px; opacity: .75; }

.wpmozo-icon-picker-panel__section-label {
	padding: 12px 12px 6px; font-size: 11px; font-weight: 500; line-height: 1.4;
	text-transform: uppercase; color: #757575;
}
.wpmozo-icon-picker-panel__recent,
.wpmozo-icon-picker-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 6px; }
.wpmozo-icon-picker-panel__recent { padding: 3px 12px 0; }
.wpmozo-icon-picker-grid {
	position: relative; align-content: start; max-height: 262px; overflow-y: auto;
	margin-top: 10px; padding: 3px 12px 12px;
}
.wpmozo-icon-picker-panel__section-label + .wpmozo-icon-picker-grid { margin-top: 0; }
.wpmozo-icon-picker-grid.is-labeled { grid-template-columns: repeat(4, minmax(0, 1fr)); }

.wpmozo-icon-picker-tile {
	position: relative; box-sizing: border-box; display: flex; flex-direction: column;
	align-items: center; justify-content: center; gap: 4px; min-width: 0; height: 38px; margin: 0; padding: 0;
	border: 0; border-radius: 2px; background: transparent; color: #1e1e1e;
	font-family: inherit; font-size: 16px; line-height: 1; cursor: pointer;
}
.wpmozo-icon-picker-tile:hover { background: #f0f0f0; }
.wpmozo-icon-picker-tile:focus { outline: none; }
.wpmozo-icon-picker-tile:focus-visible { outline: 2px solid ${ THEME }; outline-offset: 1px; }
.wpmozo-icon-picker-tile.is-selected { background: ${ THEME }; color: #fff; }
.wpmozo-icon-picker-tile.is-labeled { height: 60px; padding: 6px 4px; }
.wpmozo-icon-picker-tile__label {
	max-width: 100%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;
	font-size: 10px; line-height: 12px;
}

.wpmozo-icon-picker-panel__empty {
	display: flex; flex-direction: column; align-items: center; gap: 6px;
	padding: 24px 16px; text-align: center; color: #757575;
}
.wpmozo-icon-picker-panel__empty svg { fill: currentColor; }
.wpmozo-icon-picker-panel__empty p { margin: 0; }
.wpmozo-icon-picker-panel__empty-title { color: #1e1e1e; font-weight: 500; }
.wpmozo-icon-picker-panel__empty-actions { display: flex; gap: 12px; }

.wpmozo-icon-picker-panel__footer {
	box-sizing: border-box; display: flex; align-items: center; gap: 10px;
	min-height: 52px; padding: 10px 12px; border-top: 1px solid #e0e0e0;
}
.wpmozo-icon-picker-panel__footer-text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.wpmozo-icon-picker-panel__footer-name {
	overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-size: 13px; line-height: 16px;
}
.wpmozo-icon-picker-panel__footer-meta {
	display: flex; align-items: center; gap: 6px; min-width: 0; font-size: 11px; line-height: 14px; color: #757575;
}
.wpmozo-icon-picker-panel__footer-class { overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: ${ MONO }; }
.wpmozo-icon-picker-panel__tag {
	flex: 0 0 auto; padding: 0 6px; border-radius: 2px; background: #f0f0f0; color: #1e1e1e;
	font-size: 10px; line-height: 14px;
}
`;

/**
 * Add the picker styles to a document once.
 *
 * @param {Document} doc Document that hosts the picker (the editor document).
 */
export function ensureStyles( doc ) {
	if ( ! doc || doc.getElementById( STYLE_ELEMENT_ID ) ) {
		return;
	}
	const style = doc.createElement( 'style' );
	style.id = STYLE_ELEMENT_ID;
	style.textContent = CSS;
	doc.head.appendChild( style );
}
