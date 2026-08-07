import { __ } from "@wordpress/i18n";
import { Fragment,useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";

import generateDynamicStyle from "./style";
import { mergeWrapperProps } from '../../common/utils.js';

export default function Edit( props ) {

	const { attributes, setAttributes, clientId } = props,
		wrapArgs = attributes?.ID && mergeWrapperProps( { 
			className: `wpmozo-bna-image-hover-effect${ attributes?.wrapIsHover ? ' is_hover' : '' }` ,
			style: {}
		}, attributes ),
		wrapProps = wrapArgs?.wrapprops,
		blockProps = useBlockProps(wrapProps),
		wrapStyle = wrapArgs?.wrapStyle;

	// Ensure ID is set once (no render-time mutation).
	useEffect( () => {
		if ( attributes.ID !== clientId ) {
			setAttributes( { ID: clientId } );
		}
		const updates = {};
		if ( attributes.ID !== clientId ) {
			updates.ID = clientId;
		}

		// wrapStyle recalculate karke attribute mein store karo
		if ( attributes.ID ) {
			if ( wrapStyle && wrapStyle !== attributes.wrapStyle ) {
				updates.wrapStyle = wrapStyle;
			}
		}

		if ( Object.keys( updates ).length ) {
			setAttributes( updates );
		}
	}, [ clientId, JSON.stringify( attributes ) ] ); // eslint-disable-line react-hooks/exhaustive-deps.

	let image = ( attributes.image ) ? attributes.image : wpmozo_bna_editor_object.placeholderImg,
		hoverEffect = attributes.hoverEffect;

	const effectClasses = {
		radial: ["circle", "zoom"],
		glow: ["filter", "zoom"],
		rotate: ["rotate"],
		flash: ["flash", "filter", "zoom"],
		flash_instant: ["flash_inst_rev", "filter", "zoom"],
		diagonal: ["diagonal", "zoom"],
		glitch: ["wpmozo-bna-glitch-image"],
		slide_glitch: ["wpmozo-bna-slide-glitch"],
	};

	const classes = [
		"wpmozo-bna-image-hover-effect-inner",
		...(effectClasses[hoverEffect] || []),
	].join(" ");

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>{ generateDynamicStyle( { attributes, isEdit: true } ) }</style>

			<div id={`block-${clientId}`} { ...blockProps}>
				<div className={`wpmozo-bna-image-hover-effect-wrapper wpmozo-bna-effect-${hoverEffect}`}>
					<div className={classes}>
						<img src={image} alt="" />
						{hoverEffect === "slide_glitch" && (
							<div className="wpmozo-bna-slide-glitch-overlay">
								<div className="quadrant quad1"></div>
								<div className="quadrant quad2"></div>
								<div className="quadrant quad3"></div>
								<div className="quadrant quad4"></div>
							</div>
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
}
