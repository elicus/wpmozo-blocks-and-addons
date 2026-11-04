import { __, sprintf } from '@wordpress/i18n';
import {
	PanelBody,
	TextControl,
	ToggleControl,
	SelectControl,
	RangeControl,
	FormTokenField,
	ExternalLink,
	Icon,
} from '@wordpress/components';
import { lock } from '@wordpress/icons';

/**
 * Pro controls in the Advanced tab of every block (lite and pro).
 *
 * The UI and the attributes live in lite so saved values stay visible while pro is inactive or deleted.
 * The behaviour (frontend output, editor preview) is in the pro plugin (Mozo_BNA_Pro_Common_Settings).
 *
 * Each control unlocks only when pro is active and at least the version in `since`: a control released
 * in a later pro version stays locked on sites that didn't update pro (e.g. after the subscription ended).
 * When locked, the saved values are shown but can't be changed, and pro's behaviour doesn't run.
 */
export const PRO_CONTROLS = {
	visibility: { since: '1.1.0', title: __( 'Visibility', 'wpmozo-blocks-and-addons' ) },
	animation: { since: '1.1.0', title: __( 'Animation', 'wpmozo-blocks-and-addons' ) },
	displayConditions: { since: '1.1.0', title: __( 'Display Conditions', 'wpmozo-blocks-and-addons' ) },
};

const ANIMATIONS = [
	{ value: '', label: __( 'None', 'wpmozo-blocks-and-addons' ) },
	{ value: 'fade-in', label: __( 'Fade In', 'wpmozo-blocks-and-addons' ) },
	{ value: 'fade-up', label: __( 'Fade Up', 'wpmozo-blocks-and-addons' ) },
	{ value: 'fade-down', label: __( 'Fade Down', 'wpmozo-blocks-and-addons' ) },
	{ value: 'fade-left', label: __( 'Fade Left', 'wpmozo-blocks-and-addons' ) },
	{ value: 'fade-right', label: __( 'Fade Right', 'wpmozo-blocks-and-addons' ) },
	{ value: 'zoom-in', label: __( 'Zoom In', 'wpmozo-blocks-and-addons' ) },
	{ value: 'zoom-out', label: __( 'Zoom Out', 'wpmozo-blocks-and-addons' ) },
];

const DEVICES = [
	{ key: 'desktop', label: __( 'Hide on Desktop', 'wpmozo-blocks-and-addons' ) },
	{ key: 'tablet', label: __( 'Hide on Tablet', 'wpmozo-blocks-and-addons' ) },
	{ key: 'mobile', label: __( 'Hide on Mobile', 'wpmozo-blocks-and-addons' ) },
];

/**
 * Pro plugin state, printed by Mozo_BNA_Blocks_And_Addons_Assets::pro_status_data():
 * { status: 'active'|'inactive'|'missing', version, activateUrl, upgradeUrl, updateUrl, roles: [{ slug, name }] }
 */
const getPro = () => ( typeof window !== 'undefined' && window.wpmozoBnaPro ) || { status: 'missing' };

const compareVersions = ( a, b ) => {
	const pa = String( a || '0' ).split( '.' ).map( ( n ) => parseInt( n, 10 ) || 0 );
	const pb = String( b || '0' ).split( '.' ).map( ( n ) => parseInt( n, 10 ) || 0 );
	for ( let i = 0; i < Math.max( pa.length, pb.length ); i++ ) {
		if ( ( pa[ i ] || 0 ) !== ( pb[ i ] || 0 ) ) {
			return ( pa[ i ] || 0 ) > ( pb[ i ] || 0 ) ? 1 : -1;
		}
	}
	return 0;
};

export const isProControlUnlocked = ( key ) => {
	const pro = getPro();
	return 'active' === pro.status && compareVersions( pro.version, PRO_CONTROLS[ key ].since ) >= 0;
};

/**
 * Small lock row with the right call to action: activate, upgrade or update pro.
 */
const ProLock = ( { since } ) => {
	const pro = getPro();
	let link = { url: pro.upgradeUrl, text: __( 'Upgrade to Pro', 'wpmozo-blocks-and-addons' ), external: true };
	if ( 'inactive' === pro.status ) {
		link = pro.activateUrl
			? { url: pro.activateUrl, text: __( 'Activate Pro', 'wpmozo-blocks-and-addons' ) }
			: { text: __( 'Activate WPMozo Blocks and Addons Pro to use this setting.', 'wpmozo-blocks-and-addons' ) };
	} else if ( 'active' === pro.status ) {
		link = { url: pro.updateUrl, text: sprintf(
			/* translators: %s: pro version that adds the setting. */
			__( 'Update Pro to %s', 'wpmozo-blocks-and-addons' ),
			since
		) };
	}

	return (
		<div className="wpmozo-pro-lock" style={ { display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', fontSize: '12px' } }>
			<Icon icon={ lock } size={ 18 } />
			{ ! link.url && <span>{ link.text }</span> }
			{ link.url && link.external && <ExternalLink href={ link.url }>{ link.text }</ExternalLink> }
			{ link.url && ! link.external && <a href={ link.url } target="_blank" rel="noreferrer">{ link.text }</a> }
		</div>
	);
};

const panelTitle = ( key, locked ) => (
	<>
		{ PRO_CONTROLS[ key ].title }
		{ locked && (
			<span className="wpmozo-pro-badge" style={ { marginLeft: '6px', padding: '1px 5px', borderRadius: '3px', fontSize: '9px', lineHeight: '14px', background: 'rgb(61 62 237 / .11)', color: '#3d3eed' } }>
				{ __( 'PRO', 'wpmozo-blocks-and-addons' ) }
			</span>
		) }
	</>
);

const numberOrUndefined = ( value ) => ( undefined === value || '' === value ? undefined : Number( value ) );
const numberToString = ( value ) => ( undefined === value ? '' : String( value ) );

export const ProAdvancedControls = ( { attributes, setAttributes } ) => {
	const {
		wrapHideOn,
		wrapAnimation,
		wrapAnimationDuration,
		wrapAnimationDelay,
		wrapDisplayLogin,
		wrapDisplayRoles,
		wrapDisplayStart,
		wrapDisplayEnd,
	} = attributes;

	const hideOn = wrapHideOn && typeof wrapHideOn === 'object' ? wrapHideOn : {};
	const roles = getPro().roles || [];
	const roleName = ( slug ) => roles.find( ( role ) => role.slug === slug )?.name || slug;
	const roleSlug = ( name ) => roles.find( ( role ) => role.name === name || role.slug === name )?.slug;

	const locked = {
		visibility: ! isProControlUnlocked( 'visibility' ),
		animation: ! isProControlUnlocked( 'animation' ),
		displayConditions: ! isProControlUnlocked( 'displayConditions' ),
	};

	return ( <>
		<PanelBody title={ panelTitle( 'visibility', locked.visibility ) } initialOpen={ false }>
			{ locked.visibility && <ProLock since={ PRO_CONTROLS.visibility.since } /> }
			{ DEVICES.map( ( device ) => (
				<ToggleControl
					key={ device.key }
					__nextHasNoMarginBottom
					disabled={ locked.visibility }
					label={ device.label }
					checked={ !! hideOn[ device.key ] }
					onChange={ ( value ) => setAttributes( { wrapHideOn: { ...hideOn, [ device.key ]: value } } ) }
				/>
			) ) }
			<p className="components-base-control__help">
				{ __( 'Desktop: 1025px and wider. Tablet: 768px to 1024px. Mobile: 767px and narrower. Hidden blocks are faded in the editor.', 'wpmozo-blocks-and-addons' ) }
			</p>
		</PanelBody>

		<PanelBody title={ panelTitle( 'animation', locked.animation ) } initialOpen={ false }>
			{ locked.animation && <ProLock since={ PRO_CONTROLS.animation.since } /> }
			<SelectControl
				__nextHasNoMarginBottom
				disabled={ locked.animation }
				label={ __( 'Animation on Scroll', 'wpmozo-blocks-and-addons' ) }
				value={ wrapAnimation || '' }
				options={ ANIMATIONS }
				onChange={ ( value ) => setAttributes( { wrapAnimation: value } ) }
				help={ __( 'Plays once when the block scrolls into view, on the frontend only. Skipped for visitors who prefer reduced motion.', 'wpmozo-blocks-and-addons' ) }
			/>
			{ !! wrapAnimation && ( <>
				<RangeControl
					__nextHasNoMarginBottom
					disabled={ locked.animation }
					label={ __( 'Animation Duration (ms)', 'wpmozo-blocks-and-addons' ) }
					min={ 100 }
					max={ 3000 }
					step={ 50 }
					value={ numberOrUndefined( wrapAnimationDuration ) }
					allowReset
					initialPosition={ 600 }
					onChange={ ( value ) => setAttributes( { wrapAnimationDuration: numberToString( value ) } ) }
				/>
				<RangeControl
					__nextHasNoMarginBottom
					disabled={ locked.animation }
					label={ __( 'Animation Delay (ms)', 'wpmozo-blocks-and-addons' ) }
					min={ 0 }
					max={ 3000 }
					step={ 50 }
					value={ numberOrUndefined( wrapAnimationDelay ) }
					allowReset
					initialPosition={ 0 }
					onChange={ ( value ) => setAttributes( { wrapAnimationDelay: numberToString( value ) } ) }
				/>
			</> ) }
		</PanelBody>

		<PanelBody title={ panelTitle( 'displayConditions', locked.displayConditions ) } initialOpen={ false }>
			{ locked.displayConditions && <ProLock since={ PRO_CONTROLS.displayConditions.since } /> }
			<SelectControl
				__nextHasNoMarginBottom
				disabled={ locked.displayConditions }
				label={ __( 'Show To', 'wpmozo-blocks-and-addons' ) }
				value={ wrapDisplayLogin || '' }
				options={ [
					{ value: '', label: __( 'Everyone', 'wpmozo-blocks-and-addons' ) },
					{ value: 'logged_in', label: __( 'Logged-in Users', 'wpmozo-blocks-and-addons' ) },
					{ value: 'logged_out', label: __( 'Logged-out Visitors', 'wpmozo-blocks-and-addons' ) },
				] }
				onChange={ ( value ) => setAttributes( 'logged_out' === value
					? { wrapDisplayLogin: value, wrapDisplayRoles: [] }
					: { wrapDisplayLogin: value } ) }
			/>
			{ 'logged_out' !== wrapDisplayLogin && (
				<FormTokenField
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					disabled={ locked.displayConditions }
					label={ __( 'User Roles', 'wpmozo-blocks-and-addons' ) }
					value={ ( Array.isArray( wrapDisplayRoles ) ? wrapDisplayRoles : [] ).map( roleName ) }
					suggestions={ roles.map( ( role ) => role.name ) }
					__experimentalExpandOnFocus
					onChange={ ( tokens ) => setAttributes( {
						wrapDisplayRoles: [ ...new Set( tokens.map( roleSlug ).filter( Boolean ) ) ],
					} ) }
				/>
			) }
			<TextControl
				type="datetime-local"
				disabled={ locked.displayConditions }
				label={ __( 'Show From', 'wpmozo-blocks-and-addons' ) }
				value={ wrapDisplayStart || '' }
				onChange={ ( value ) => setAttributes( { wrapDisplayStart: value } ) }
			/>
			<TextControl
				type="datetime-local"
				disabled={ locked.displayConditions }
				label={ __( 'Show Until', 'wpmozo-blocks-and-addons' ) }
				value={ wrapDisplayEnd || '' }
				onChange={ ( value ) => setAttributes( { wrapDisplayEnd: value } ) }
				help={ __( 'Dates use the site timezone. Conditions apply on the frontend only; the editor always shows the block. Pages served from a cache may show the cached version.', 'wpmozo-blocks-and-addons' ) }
			/>
		</PanelBody>
	</> );
};

export default ProAdvancedControls;
