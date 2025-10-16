<?php
namespace WPMOZO\BNA\Helpers;

/**
 * Handles the helper functions.
 *
 * @link       https://elicus.com
 * @since      1.5.0
 *
 * @package    WPMozo_Blocks_And_Addons
 * @subpackage WPMozo_Blocks_And_Addons/includes
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Mozo_Bna_Helpers{

	/**
	 * Pass thru semantical previously escaped acknowledgement.
	 *
	 * @since 1.5.0
	 *
	 * @param string value being passed through
	 * @return string
	 */
	public static function esc_previously( $passthru ) {
		return $passthru;
	}

	/**
	 * Count words, characters (excluding spaces),
	 * or characters (including spaces).
	 *
	 * @param string $text       Text to count.
	 * @param string $count_type Count type: 'words', 'characters_excluding_spaces', or 'characters_including_spaces'.
	 *
	 * @return int Count of specified type.
	 */
	public static function count_text( $text, $count_type ) {
		switch ( $count_type ) {
			case 'characters_excluding_spaces':
				return strlen( preg_replace( '/\s+/', '', $text ) );
			case 'characters_including_spaces':
				return strlen( $text );
			case 'words':
			default:
				return str_word_count( wp_strip_all_tags( $text ) );
		}
	}

	/**
	 * Trim characters to a specified length.
	 *
	 * @param string $text Text to trim.
	 * @param int    $max_length Maximum length of the text.
	 * @param string $count_type Locale-specific word count type. Possible values are `characters_excluding_spaces`,
	 *           `characters_including_spaces`, or `words`. Defaults to `words`.
	 *
	 * @return string Trimmed text.
	 */
	public static function trim_characters( $text, $max_length, $count_type ) {
		$pure_text = wp_strip_all_tags( $text );
		$trimmed   = mb_substr( $pure_text, 0, $max_length );

		if ( 'characters_including_spaces' === $count_type ) {
			return $trimmed;
		}

		preg_match_all( '/([\s]+)/', $trimmed, $spaces );
		$space_count = ! empty( $spaces[0] ) ? count( $spaces[0] ) : 0;

		return mb_substr( $pure_text, 0, $max_length + $space_count );
	}

	/**
	 * Truncate the content.
	 *
	 * @param string $content content/post content that needs to truncate.
	 * @param integer $length lendth of words needs to limit.
	 * @param string $endwith string that end with.
	 * @param string $count_type Locale-specific word count type. Possible values are `characters_excluding_spaces`,
	 *           `characters_including_spaces`, or `words`. Defaults to `words`.
	 *
	 * @return string truncate content.
	 */
	public static function truncate_content( $content, $length = 100, $endwith = '', $count_type = '' ) {
		$count_type = ! empty( $count_type ) ? $count_type : wp_get_word_count_type();
		$word_count = self::count_text( $content, $count_type );

		if ( $word_count <= $length ) {
			return $content;
		}

		// Trims by words.
		if ( 'words' === $count_type ) {
			return wpautop( wp_trim_words( $content, $length ) );
		}

		return self::trim_characters( $content, $length, $count_type ) . esc_attr( $endwith );
	}

	/**
	 * Get social icon for team member.
	 *
	 * @since 1.6.0
	 *
	 * @param string $type  Social icons slug/name to manage class.
	 * @param string $url   Social profile URL.
	 * @param string $icon  Icon class for social icon.
	 * @param bool $target  Social link target to open in new window or in he same.
	 *
	 * @return string Link "a" tag for social icon.
	 */
	public static function get_team_member_social( $type, $url, $icon, $target ) {

		// If no url, return blank.
		if ( empty( $url ) ) {
			return '';
		}

		// Update email and phone urls.
		$url = ( 'email' === $type ) ? 'mailto:' . $url : $url;
		$url = ( 'phone' === $type ) ? 'tel:' . $url : $url;

		return sprintf(
			'<a href="%1$s" target="%2$s">
				<span class="wpmozo_bna_team_member_social_icon wpmozo_bna_team_%3$s %4$s"></span>
			</a>',
			esc_attr( $url ),
			( 'same' === $target ) ? '_self' : '_blank',
			esc_attr( $type ),
			esc_attr( $icon )
		);
	}
}
