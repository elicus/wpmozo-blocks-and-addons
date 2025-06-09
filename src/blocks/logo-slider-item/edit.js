import {__} from "@wordpress/i18n";
import {useBlockProps} from '@wordpress/block-editor';
import {Fragment} from "@wordpress/element";
import Inspector from './inspector';
import generateDynamicStyle from "./style";
import {wpmozo_is_empty} from "../../common/utils";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export default function Edit(props) {
	const attributes = props.attributes,
		setAttributes = props.setAttributes,
		clientId = props.clientId,
		altText = !wpmozo_is_empty( attributes.altText )
			? attributes.altText
			: 'alt';

	attributes.ID = clientId;
	const selectBlock = () => {
	    if ( wp && wp.data && wp.data.dispatch ) {
			wp.data.dispatch('core/block-editor').selectBlock(clientId);
		}
	}

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<style>
				{generateDynamicStyle({attributes, clientId})}
			</style>
			<div { ...useBlockProps({ className: 'swiper-slide', id:`block-${clientId}` }) } data-client-id={clientId} onClick={selectBlock}>
				<div className="logo-wrap">
					<img className="logo-img" src={attributes.logo.url} alt={altText}/>
				</div>
			</div>
		</Fragment>
	);
}
