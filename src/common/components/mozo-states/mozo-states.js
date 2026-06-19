import { useState } from '@wordpress/element';

export default function MozoStates( { title, control, value, onChange } ) {
	const [ internalHover, setInternalHover ] = useState( false );

	// decide source of truth
	const isHover = typeof value !== 'undefined' ? value : internalHover;

	const toggleHover = () => {
		const newValue = ! isHover;

		if ( typeof onChange === 'function' ) {
			onChange( newValue );
		}

		if ( typeof value === 'undefined' ) {
			setInternalHover( newValue );
		}
	};

	return (
		<>
			<div className="mozostates-prop-header">
				<span className="mozostates-prop-label">
					{ title }
					{ isHover && (
						<span className="mozostates-state-suffix">· Hover</span>
					) }
				</span>
				<button
					className={ `mozostates-hover-chip${ isHover ? ' is-on' : '' }` }
					aria-pressed={ isHover }
					onClick={ toggleHover }
				>
					{ isHover ? '− Hover' : '+ Hover' }
				</button>
			</div>

			{ typeof control === 'function' ? control( isHover ) : control }
		</>
	);
}