/**
 * Pattern Library artwork: original inline SVG, kept in one module so it can be
 * replaced in one place (readiness review, section E).
 */
import { SVG, Path, Rect } from '@wordpress/primitives';

/**
 * Library icon: the official WPMozo icon (owner-supplied), in its brand colour.
 * WordPress sizes it (24px in the header and the inserter).
 */
export const libraryIcon = (
	<SVG
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1024 1024"
		aria-hidden="true"
	>
		<Path
			fill="#00de7c"
			d="M657.067 415.289c-27.022-38.4-52.622-78.222-79.644-116.622-21.333-31.289-54.044-48.356-91.022-48.356s-69.689 17.067-91.022 48.356c-34.133 51.2-44.089 64-78.222 113.778-18.489 27.022-21.333 58.311 2.844 81.067 31.289 31.289 68.267 8.533 86.756-18.489l78.222-113.778 250.311 365.511c21.333 31.289 52.622 48.356 91.022 48.356 36.978 0 69.689-17.067 91.022-46.933l82.489-119.467c12.8-18.489 12.8-41.244 0-59.733l-4.267-5.689c-9.956-14.222-25.6-22.756-42.667-22.756s-32.711 8.533-42.667 22.756l-83.911 120.889-103.822-152.178 106.667-150.756 75.378 109.511 11.378 15.644c14.222 19.911 39.822 28.444 62.578 18.489s35.556-32.711 31.289-56.889c-2.844-14.222-8.533-29.867-18.489-42.667l-71.111-105.244c-21.333-31.289-52.622-48.356-91.022-48.356-36.978 0-69.689 17.067-91.022 46.933l-81.067 116.622z"
		/>
		<Path
			fill="#00de7c"
			d="M418.133 547.556c-54.044 38.4-89.6 35.556-147.911-9.956-2.844-2.844-7.111-5.689-9.956-8.533v0c-9.956-7.111-22.756-11.378-36.978-11.378-36.978 0-66.844 29.867-66.844 66.844s29.867 66.844 66.844 66.844c14.222 0 25.6-4.267 36.978-11.378v0c4.267-2.844 7.111-5.689 9.956-8.533 58.311-46.933 93.867-48.356 149.333-8.533v0c7.111 5.689 17.067 8.533 27.022 8.533 25.6 0 46.933-21.333 46.933-46.933s-21.333-46.933-46.933-46.933c-11.378 0-21.333 2.844-28.444 9.956z"
		/>
		<Path
			fill="#00de7c"
			d="M59.733 630.044c25.6 0 45.511-21.333 45.511-45.511 0-25.6-21.333-45.511-45.511-45.511-25.6 0-45.511 19.911-45.511 45.511 0 24.178 19.911 45.511 45.511 45.511z"
		/>
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
