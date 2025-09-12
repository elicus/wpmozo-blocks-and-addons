import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import generateDynamicStyle from "./style";

const Save = ( { attributes } ) => {

	const clientId = attributes.ID;

	// Get attributes.
	const twitterUsername = attributes.twitterUsername ?? '';
	const buttonSize      = attributes.buttonSize ?? 'small';
	const doNotTrack      = ( false === attributes.doNotTrack ) ? 0 : 1;
	const showUsername    = attributes.showUsername ?? false;
	const showCount       = attributes.showCount ?? false;
	
	return ( <>
		<style>{ generateDynamicStyle( { attributes, clientId } ) }</style>

		<div {...useBlockProps.save( { className: attributes.className } )} id={`block-${clientId}`}>
			{ ( 1 === 1 ) && (
				<div>Working on module !!</div>
			) }
		</div>
	</> );
}

export default Save;
