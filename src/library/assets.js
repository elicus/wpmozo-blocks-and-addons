/**
 * Pattern Library artwork: original inline SVG, kept in one module so it can be
 * replaced in one place (readiness review, section E).
 */
import { SVG, Path, Rect } from '@wordpress/primitives';

/**
 * Library icon (24px): stacked page sections.
 */
export const libraryIcon = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<Rect x="4" y="4" width="16" height="5" rx="1" />
		<Rect x="4" y="11" width="7" height="9" rx="1" />
		<Rect x="13" y="11" width="7" height="4" rx="1" />
		<Rect x="13" y="17" width="7" height="3" rx="1" />
	</SVG>
);

/**
 * Neutral wireframe shown when a thumbnail is missing or fails to load.
 */
export function PlaceholderArt() {
	return (
		<SVG
			className="wpmozo-library__placeholder-art"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 240"
			preserveAspectRatio="xMidYMid slice"
			aria-hidden="true"
		>
			<Rect width="320" height="240" fill="currentColor" opacity="0.06" />
			<Rect
				x="40"
				y="56"
				width="140"
				height="14"
				rx="4"
				fill="currentColor"
				opacity="0.22"
			/>
			<Rect
				x="40"
				y="82"
				width="110"
				height="8"
				rx="4"
				fill="currentColor"
				opacity="0.14"
			/>
			<Rect
				x="40"
				y="98"
				width="124"
				height="8"
				rx="4"
				fill="currentColor"
				opacity="0.14"
			/>
			<Rect
				x="40"
				y="124"
				width="64"
				height="22"
				rx="11"
				fill="currentColor"
				opacity="0.22"
			/>
			<Rect
				x="196"
				y="48"
				width="84"
				height="112"
				rx="8"
				fill="currentColor"
				opacity="0.12"
			/>
			<Path
				d="M206 140l20-26 14 16 10-12 20 22z"
				fill="currentColor"
				opacity="0.18"
			/>
		</SVG>
	);
}

/**
 * Illustration for empty results.
 */
export function EmptyArt() {
	return (
		<SVG
			className="wpmozo-library__empty-art"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 120 96"
			aria-hidden="true"
		>
			<Rect
				x="8"
				y="12"
				width="76"
				height="56"
				rx="6"
				fill="currentColor"
				opacity="0.08"
			/>
			<Rect
				x="18"
				y="24"
				width="40"
				height="6"
				rx="3"
				fill="currentColor"
				opacity="0.2"
			/>
			<Rect
				x="18"
				y="36"
				width="52"
				height="4"
				rx="2"
				fill="currentColor"
				opacity="0.14"
			/>
			<Rect
				x="18"
				y="45"
				width="30"
				height="4"
				rx="2"
				fill="currentColor"
				opacity="0.14"
			/>
			<Path
				d="M88 50a14 14 0 1 1-9.9 4.1A14 14 0 0 1 88 50zm0 5a9 9 0 1 0 6.4 2.6A9 9 0 0 0 88 55zm10.6 18.3 9 9-3.5 3.5-9-9z"
				fill="currentColor"
				opacity="0.35"
			/>
		</SVG>
	);
}
